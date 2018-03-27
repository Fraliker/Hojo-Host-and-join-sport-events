import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Event, SportType, SkillLevel, PlayType, User } from '../../_models/index';
import { EventService, AlertService, UserService } from '../../_services/index';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  moduleId: module.id
})

export class CreateEventComponent implements OnInit {
  model: any = {};
  loading = false;
  sportValues = Object.values(SportType);
  skillValues = Object.values(SkillLevel);
  playTypeValues = Object.values(PlayType);

  latitude:  number;
  longitude: number;

  
  constructor(
      private router: Router,
      private eventService: EventService,
      private alertService: AlertService,
<<<<<<< HEAD
      private userService: UserService) 
=======
      public bsModalRef: BsModalRef ) 
>>>>>>> d2683492f0122c7d334dc4d754035884abf92048
      {
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }

  ngOnInit() {
    // Find a (better) way to send host
    // if (localStorage.getItem('currentUser').length > 0)
    // {
    //   this.model.host = JSON.parse(localStorage.getItem('currentUser'));
    // }

    // Until that use this:
    // BEWARE! AT THE MOMENT THIS WILL BREAK THE BACKEND WITH INFINITE LOOP!!
    // this.userService.getById('58ac4635-b5ed-44c2-b134-96d2161496c7').subscribe(user => {
    //   this.model.host = user;
    //   console.log(this.model.host);
    // });
  }
 
  createEvent(){
    this.loading = true;
    this.eventService.createEvent(this.model)
        .subscribe(
          data => {
            //set succes message and pass true parameter to persist teh message after redirectin to the main page
            this.alertService.success('Event created succesfull', false);
            //navigate to main page..
            this.bsModalRef.hide();
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }
}
