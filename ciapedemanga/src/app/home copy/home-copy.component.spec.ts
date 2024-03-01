import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackuptwoComponent } from './home-copy.component';

describe('HomeComponent', () => {
  let component: HomeBackuptwoComponent;
  let fixture: ComponentFixture<HomeBackuptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBackuptwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBackuptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
