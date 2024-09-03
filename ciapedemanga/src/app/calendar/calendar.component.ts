import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import { Auth } from '@angular/fire/auth';
import { RRule } from 'rrule';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    standalone: true,
    imports: [FullCalendarModule]
})
export class CalendarComponent implements OnInit {

    constructor(private auth: Auth) { }

    events: EventSourceInput = {};

    calendarOptions: CalendarOptions = {
        plugins: [
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            rrulePlugin
        ],
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista',
            next: 'Próximo',
            prev: 'Anterior'
        },
        allDaySlot: false,
        initialView: 'timeGridWeek',
        weekends: true,
        editable: false,
        selectMirror: false,
        dayMaxEvents: true,
        expandRows: true,
        timeZone: 'UTC',
        events: this.events,
        slotLabelFormat: {
            hour: 'numeric',
            minute: 'numeric',
            omitZeroMinute: true
        },
        slotMinTime: '07:00:00',
        slotMaxTime: '23:00:00'
    };

    deParaDias: { [key: string]: any } = {
        "Domingo": RRule.SU,
        "Segunda": RRule.MO,
        "Terça": RRule.TU,
        "Quarta": RRule.WE,
        "Quinta": RRule.TH,
        "Sexta": RRule.FR,
        "Sábado": RRule.SA,
    };

    ngOnInit() {
        this.getAllhorarios();
    }

    getAllhorarios() {
        const db = getDatabase(this.auth.app);
        const horariosRef = ref(db, 'horarios');
        const horarioAlunoRef = ref(db, 'alunoHorarios');

        onValue(horariosRef, (snapshotHorario) => {
            get(horarioAlunoRef).then(snapshotHorarioAluno => {
                const horarios = snapshotHorario.val();
                const horarioAluno = snapshotHorarioAluno.val();
                if (!horarioAluno || !horarios) {
                    return;
                }

                const horarioAlunos = Object.values(horarioAluno).flatMap(x => x);

                this.events = [];
                const dataArray = Object.keys(horarios).map(key => ({ ...horarios[key], id: key }));

                for (let i = 0; i < dataArray.length; i++) {
                    const horario = dataArray[i];

                    const duracao = this.calcularDuracao(horario.HorarioInicio, horario.HorarioFim);
                    if (!horario.AulaCancelada) {
                        const dataAtual = new Date();
                        dataAtual.setHours(horario.HorarioInicio.split(':')[0], horario.HorarioInicio.split(':')[1])
                        const rule = new RRule({
                            freq: RRule.WEEKLY,
                            dtstart: dataAtual,
                            until: new Date(`${dataAtual.getFullYear()}-12-30T${horario.HorarioFim}`),
                            byweekday: [this.deParaDias[horario.DiasSemanaAula]],
                            tzid: 'UTC',
                        });

                        const dates = rule.all();

                        const alunosDesseHorario = horarioAlunos
                            .filter((x: any) => x.idHorario === horario.id);
                        
                        dates.forEach((date, index) => {
                            const start = this.adjustToTimezone(date, -6);
                            const end = this.adjustToTimezone(new Date(date.getTime() + duracao.horas * 3600 * 1000 + duracao.minutos * 60 * 1000), -6); // Ajusta para UTC-3
                            const tituloHorario = horario.titulo ?? `Aula ${horario.HorarioInicio} às ${horario.HorarioFim}`;
                            const dateFormatted = date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
            
                            const alunosAvulsosERecorrentes = alunosDesseHorario.filter((x: any) => x.recorrente || (x.dataAula === dateFormatted));
                            const faltasDiaHorario = alunosDesseHorario.filter((x: any) => x.diaFalta && x.diaFalta.split(', ')[1] === dateFormatted && x.falta);
            
                            const horarioLotado = horario.CapacidadeMaxima <= (alunosAvulsosERecorrentes.length - faltasDiaHorario.length);
            
                            (this.events as any).push(
                                {
                                id: `${horario.id}-${index}`,
                                groupId: horario.id,
                                title: (horarioLotado ? 'Lotado - ' : '') + tituloHorario,
                                start: start.toISOString(),
                                end: end.toISOString(),
                                duration: { hours: duracao.horas, minutes: duracao.minutos },
                                extendedProps: horario
                                });
                            });
                    }
                }

                this.calendarOptions.events = this.events;
            });
        });
    }

    calcularDuracao(horarioInicio: string, horarioFim: string) {
        const data = new Date(2023, 0, 1);

        const [horasIni, minutosIni] = horarioInicio.split(':').map(Number);
        const dataInicio = new Date(data.setHours(horasIni, minutosIni));

        const [horasFim, minutosFim] = horarioFim.split(':').map(Number);
        const dataFim = new Date(data.setHours(horasFim, minutosFim));

        const diferencaMs = dataFim.getTime() - dataInicio.getTime();

        const horas = Math.floor(diferencaMs / 3600000);
        const minutos = Math.floor((diferencaMs % 3600000) / 60000);

        return {
            horas: horas,
            minutos: minutos
        };
    }

    adjustToTimezone(date: Date, offset: number) {
        const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        return new Date(utcDate.getTime() + offset * 3600 * 1000);
    }
}