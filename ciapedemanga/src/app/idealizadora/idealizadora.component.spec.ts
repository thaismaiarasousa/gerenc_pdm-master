import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealizadoraComponent } from './idealizadora.component';

describe('IdealizadoraComponent', () => {
  let component: IdealizadoraComponent;
  let fixture: ComponentFixture<IdealizadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdealizadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdealizadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
