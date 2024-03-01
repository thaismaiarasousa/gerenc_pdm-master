import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresPontinhosComponent } from './tres-pontinhos.component';

describe('TresPontinhosComponent', () => {
  let component: TresPontinhosComponent;
  let fixture: ComponentFixture<TresPontinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TresPontinhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TresPontinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
