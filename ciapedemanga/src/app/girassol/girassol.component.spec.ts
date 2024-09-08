import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirassolComponent } from './girassol.component';

describe('GirassolComponent', () => {
  let component: GirassolComponent;
  let fixture: ComponentFixture<GirassolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirassolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirassolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
