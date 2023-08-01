import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateModelComponent } from './date-model/date-model.component';
import { FormsModule } from '@angular/forms';
import { EventModelComponent } from './event-model/event-model.component';




@NgModule({
  declarations: [
    DateModelComponent,
    EventModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[DateModelComponent,EventModelComponent]
})
export class ModalModule { }
