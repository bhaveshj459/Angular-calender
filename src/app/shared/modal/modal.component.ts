import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modelid = '';
  constructor(public model: ModelService, public el: ElementRef) {
    // console.log(model.IsVisible);
  }

  closeModel(modelid: string) {
    this.model.toggleModel(modelid);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
