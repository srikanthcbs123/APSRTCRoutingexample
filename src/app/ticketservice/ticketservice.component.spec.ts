import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketserviceComponent } from './ticketservice.component';

describe('TicketserviceComponent', () => {
  let component: TicketserviceComponent;
  let fixture: ComponentFixture<TicketserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
