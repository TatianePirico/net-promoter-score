import { Component, OnInit, Input } from '@angular/core';
import { IModal } from '../shared/models/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() data: IModal;

  constructor() { }

  ngOnInit() {
  }

}
