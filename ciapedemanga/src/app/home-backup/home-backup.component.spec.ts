import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackupComponent } from './home-backup.component';

describe('HomeBackupComponent', () => {
  let component: HomeBackupComponent;
  let fixture: ComponentFixture<HomeBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBackupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
