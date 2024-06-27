import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionerComponent } from './executioner.component';

describe('ExecutionerComponent', () => {
  let component: ExecutionerComponent;
  let fixture: ComponentFixture<ExecutionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
