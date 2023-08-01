import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
interface event {
   date: Date, title: string, description: string 
}

@Component({
  selector: 'app-event-model',
  templateUrl: './event-model.component.html',
  styleUrls: ['./event-model.component.css']
})
export class EventModelComponent implements OnInit{
  @Input() eventData:event|undefined;
  @Output() closeModel = new EventEmitter<Boolean>();
  @Output() changeDate = new EventEmitter<event>();
  defaultDate:string='';
 
  constructor(){
                                                          
  }
  ngOnInit(){
    const dateParts = new Date(this.eventData!.date)
 
    
    this.defaultDate= `${dateParts.getFullYear()}-${(dateParts.getMonth()+1)<10?'0'+(dateParts.getMonth()+1):(dateParts.getMonth()+1)}-${dateParts.getDate()<10?'0'+dateParts.getDate():dateParts.getDate()}`; 
    console.log(this.defaultDate);
  }

  close() {
    this.closeModel.emit(true)
  }
  dateChanged(){
    const temp = new Date(this.defaultDate);
    this.changeDate.emit({date: temp, title: this.eventData!.title, description: this.eventData!.description })
  }

}
