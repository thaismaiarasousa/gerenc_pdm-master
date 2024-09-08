import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import { Auth } from '@angular/fire/auth';
import { RRule } from 'rrule';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss',
    standalone: true,
    imports: [FullCalendarModule, CommonModule]
})
export class CalendarComponent implements OnInit {

    constructor(private auth: Auth) { }

    events: EventSourceInput = {};
    @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
    loading: boolean = true;
    calendarOptions: CalendarOptions = {
        plugins: [
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            rrulePlugin,
            listPlugin
        ],
        locale: 'pt-br',
        headerToolbar: {
            start: 'prev,today,next',
            end: 'listWeek,timeGridWeek,timeGridDay',
        },
        buttonText: {
            today: 'hoje',
            week: 'semana',
            day: 'dia',
            list: 'lista',
            next: '>',
            prev: '<'
        },
        nowIndicator: true,
        allDaySlot: false,
        initialView: 'listWeek',
        weekends: true,
        editable: false,
        selectMirror: false,
        dayMaxEvents: true,
        expandRows: true,
        timeZone: 'UTC',
        events: this.events,
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: false,
            hour12: false
        },
        displayEventTime: false,
        slotLabelContent: (arg) => '',
        displayEventEnd: false,
        slotMinTime: '07:00:00',
        slotMaxTime: '21:00:00',
        slotDuration: '00:20:00',
        height: 'auto',
        eventContent: function (arg: any) {
            const horarioLotado = arg.event.extendedProps.horarioLotado;
            const tituloHorario = `<b>${arg.event.extendedProps.tituloHorario}</b>` ?? 'Aula';
            const horarioInicio = arg.event.extendedProps.HorarioInicio;
            const horarioFim = arg.event.extendedProps.HorarioFim;
      
            let title = `${horarioLotado ? '<b>Lotado</b> - ' : ''} ${tituloHorario} - ${horarioInicio} - ${horarioFim}`;

            return {
                html: `${title.split(' - ').join('<br/>')}`
            };
        },
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
        this.loading = true;
        this.getAllhorarios();
    }

    // ngAfterViewInit() {
    //     this.removeTimeSlots();
    // }
    isDataMaiorOuIgualAHoje(dataString: string): boolean {
        if (dataString === '') {
            return true;
        }
        const dataConvertida = this.converterData(dataString);
        const hoje = new Date();

        hoje.setHours(0, 0, 0, 0);
        dataConvertida.setHours(0, 0, 0, 0);

        return dataConvertida.getTime() >= hoje.getTime();
    }

    converterData(dataString: string): Date {
        const meses = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];

        const [dia, mesStr, ano] = dataString.split(' de ');
        const mes = meses.indexOf(mesStr.toLowerCase());

        if (mes === -1) {
            throw new Error('Mês inválido');
        }

        const data = new Date(parseInt(ano, 10), mes, parseInt(dia, 10));
        return data;
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
                            until: new Date(`${dataAtual.getFullYear()}-${String(dataAtual.getMonth() + 1).padStart(2, '0')}-30T${horario.HorarioFim}`),
                            byweekday: [this.deParaDias[horario.DiasSemanaAula]],
                            tzid: 'UTC',
                        });

                        const dates = rule.all();

                        const alunosDesseHorario = horarioAlunos
                            .filter((x: any) => {
                                return x.idHorario === horario.id;
                            });


                        dates.forEach((date, index) => {
                            const start = this.adjustToTimezone(date, -6);
                            const end = this.adjustToTimezone(new Date(date.getTime() + duracao.horas * 3600 * 1000 + duracao.minutos * 60 * 1000), -6); // Ajusta para UTC-3

                            const tituloHorario = horario.titulo ?? `Aula ${horario.HorarioInicio} às ${horario.HorarioFim}`;
                            const dateFormatted = date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

                            const alunosAvulsosERecorrentes = alunosDesseHorario.filter((x: any) => x.recorrente || (x.dataAula === dateFormatted));
                            const faltasDiaHorario = alunosDesseHorario.filter((x: any) => x.diaFalta && x.diaFalta.split(', ')[1] === dateFormatted && x.falta);

                            const horarioLotado = horario.CapacidadeMaxima <= (alunosAvulsosERecorrentes.length - faltasDiaHorario.length);
                            let title = `${horarioLotado ? 'Lotado - ' : ''} ${tituloHorario} - ${horario.HorarioInicio} - ${horario.HorarioFim}`;

                            horario.horarioLotado = horarioLotado;
                            horario.tituloHorario = tituloHorario;
                            (this.events as any).push(
                                {
                                    id: `${horario.id}-${index}`,
                                    groupId: horario.id,
                                    title: title,
                                    start: start.toISOString(),
                                    end: end.toISOString(),
                                    // duration: { hours: duracao.horas, minutes: duracao.minutos },
                                    //  duration: { hours: 2, minutes: 0 },
                                    extendedProps: horario,
                                    color: horarioLotado ? '#dc3545' : '#28a745',
                                });
                        });
                    }
                }

                this.calendarOptions.events = this.events;
                this.loading = false;
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
