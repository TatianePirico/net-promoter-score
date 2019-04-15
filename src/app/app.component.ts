import { Component } from '@angular/core';
import { IModal } from './shared/models/modal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private modalDataTeste: IModal;

  modalData(modalData: IModal):void {
    this.modalDataTeste = modalData;
  }
}
