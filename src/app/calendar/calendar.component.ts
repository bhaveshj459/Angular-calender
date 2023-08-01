import { Component, OnInit } from '@angular/core';

interface CalendarDate {
  day: number;
  events: { title: string, description: string }[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  datesModel = false;
  eventModal = false;
  datesModelData: any = [];
  eventModelData: any;
  calendarDates: CalendarDate[] = [
    {
      day: 4,
      events: [
        { title: "example event 1", description: 'example event 1"' }, { title: "example event 2", description: 'example event 2"' }]
    }

  ];
  //@ts-ignore
  currentMonth: number;
  //@ts-ignore
  currentYear: number;
  dataEvents = [{ date: '01-07-2023', title: 'Event 1', description: 'Description of Event 1' }, { date: '01-07-2023', title: 'Event 1', description: 'Description of Event 1' }, { date: '01-07-2023', title: 'Event 1', description: 'Description of Event 1' }, { date: '01-07-2023', title: 'Event 1', description: 'Description of Event 1' }, { date: '02-07-2023', title: 'Event 1', description: 'Description of Event 1' }]


  ngOnInit() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    if (localStorage.getItem('eventlist')) {
      console.log( JSON.parse(localStorage.getItem('eventlist')!));
      
      this.dataEvents = JSON.parse(localStorage.getItem('eventlist')!);
    }
    this.generateCalendarDates(this.currentYear, this.currentMonth);

  }


  generateCalendarDates(year: number, month: number) {
    this.calendarDates = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = firstDayOfMonth.getDay();

    for (let i = 0; i < startOffset; i++) {
      this.calendarDates.push({ day: 0, events: [] });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date: CalendarDate = { day, events: [] };
      this.dataEvents.forEach((dateEvent: { date: string, title: string, description: string }) => {
        const tempdate = dateEvent.date.split('-');

        // debugger;
        if (day === parseInt(tempdate[0]) && month === (parseInt(tempdate[1]) - 1)) {
          date.events.push({ title: dateEvent.title, description: dateEvent.description });
          console.log(parseInt(tempdate[0]))
        }
      })

      this.calendarDates.push(date);
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendarDates(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendarDates(this.currentYear, this.currentMonth);
  }

  handleDateClick(date: CalendarDate) {
    const selectedDate = new Date();
    selectedDate.setFullYear(this.currentYear);
    selectedDate.setMonth(this.currentMonth);
    selectedDate.setDate(date.day);

    this.datesModel = true;
    this.datesModelData = { selectedDate, events: date.events };

  }

  handelEventClick(date:CalendarDate,event:any){
    const selectedDate = new Date();
    selectedDate.setFullYear(this.currentYear);
    selectedDate.setMonth(this.currentMonth);
    selectedDate.setDate(date.day);

    this.eventModelData={date: selectedDate, title: event.title, description: event.description };
    console.log(this.eventModelData);
    
    this.eventModal=true;

  }
  getMonthName(month: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  }
  closeModel(event: Boolean, type?: "date") {
    if (event && type === 'date') {
      this.datesModel = false;
    }
  }

  addNewEvent(event: any) {
    this.dataEvents.push(event);
    console.log(this.dataEvents);
    
    this.dataEvents = this.dataEvents.flat();
    console.log(this.dataEvents);
    localStorage.setItem('eventlist', JSON.stringify(this.dataEvents))
  }
  eventDeleted(event: any) {
    this.dataEvents = this.dataEvents.filter((value) => {
      if ((value.date === event.date) && (value.description === event.description) && (value.title === event.title)) {
        return false

      }
      return true
    })
    localStorage.setItem('eventlist', JSON.stringify(this.dataEvents))

  }
  eventEdited(event: any) {
    this.dataEvents = this.dataEvents.filter((value) => {
      if ((value.description === event.description) && (value.title === event.title)) {
        console.log("here");
        
        return false
      }
      return true
    })
    const temp=`${event.date.getDate()<10?'0'+event.date.getDate():event.date.getDate()}-${(event.date.getMonth()+1)<10?'0'+(event.date.getMonth()+1):(event.date.getMonth()+1)}-${event.date.getFullYear()}`
    this.dataEvents.push({date:temp,title:event.title,description:event.description})
    localStorage.setItem('eventlist', JSON.stringify(this.dataEvents));
    this.generateCalendarDates(this.currentYear, this.currentMonth)

  }
}
