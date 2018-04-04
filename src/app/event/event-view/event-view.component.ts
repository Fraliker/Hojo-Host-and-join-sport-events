import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { EventService, UserService } from '../../_services/index';
import { Router } from '@angular/router';
import { Event, SportType, PlayType, SkillLevel, User } from '../../_models';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit 
{
  signedIn = true;
  attendees: string[] = [];

  // These ids will be received when user clicks marker/event
  eventID: string;
  eventTitle: string;
  accountID: number;

  event: Event;
  host: User;
  REPLACABLE_USER: User;

  constructor(
        private router: Router,
        private eventService: EventService,
        private userService: UserService,
        private bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.loadEvent();
  }

  private loadEvent() {
    this.eventID = sessionStorage.getItem("eventId");
    this.eventService.getEventById(this.eventID)
      .subscribe(event => { this.event = event, this.eventTitle = event.title });
    // THIS ONE WILL BE HOST
    this.userService.getById('58ac4635-b5ed-44c2-b134-96d2161496c7').subscribe(user => {
    this.REPLACABLE_USER = user;
    // Add host as player to list
    this.event.players.push(this.REPLACABLE_USER);
    });
  }

  deleteEvent(id:string) {
    this.eventService.deleteEvent(id).subscribe(() => { EventService.refreshEventList.next(true)});
    this.close();
  }

  joinEvent() {
    // This will be also used to leave event
    // this.eventService.joinEvent(this.eventID, this.accountID);
    this.signedIn = !this.signedIn;
  }

  close() {
    this.bsModalRef.hide();
  }

  editEvent(){
    this.close();
    this.router.navigate(['/edit-event']);
  }

}
