import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-model',
  templateUrl: './date-model.component.html',
  styleUrls: ['./date-model.component.css']
})
export class DateModelComponent implements OnInit {
  @Input() data!: {
    "selectedDate": Date;
    "events": any[];
  };
  @Output() closeModel = new EventEmitter<Boolean>();
  @Output() eventAdded = new EventEmitter<any>();
  @Output() eventDeleted = new EventEmitter<any>();

  eventTitle: string = "";
  eventDesc: string = "";

  showEventForm = false;

  constructor() {


  }
  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.closeModel.emit(true)
  }

  addEvent() {
    if (this.eventTitle.length < 3) {
      alert("Enter Title Correctly");
    }
    else if (this.eventDesc.length < 3) {
      alert("Enter Description Correctly");
    }
    else {
      this.data.events.push({ title: this.eventTitle, description: this.eventDesc });
      let temp: any = [];
      const day = this.data.selectedDate.getDate().toString().padStart(2, '0');
      const month = (this.data.selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = this.data.selectedDate.getFullYear();
      temp={ date: `${day}-${month}-${year}`, title: this.eventTitle, description: this.eventTitle }

      this.eventAdded.emit(temp);
      this.eventDesc='';
      this.eventTitle=''
    }

  }
  deleteEvent(event: any) {
    const indexToRemove = this.data.events.indexOf(event)
    if (indexToRemove !== -1) {
      this.data.events.splice(indexToRemove, 1);
      let temp: any;
      const day = this.data.selectedDate.getDate().toString().padStart(2, '0');
      const month = (this.data.selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = this.data.selectedDate.getFullYear();

      temp = { date: `${day}-${month}-${year}`, title: event.title, description: event.description }


      this.eventDeleted.emit(temp);
    }

  }
}

