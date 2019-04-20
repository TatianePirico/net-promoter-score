import { Component } from '@angular/core';
import { IModal } from './shared/models/modal.interface';
import { NPSService } from './shared/services/nps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private modalData: IModal;
  private NPSHidden: boolean = false;

  constructor(
    private _NPSService: NPSService
  ){ }

  ngOnInit() { }

  getModalData(modalData: IModal):void {
    if(!modalData.button && modalData.requestResponse.code === 200) this.NPSHidden = true;
    this.modalData = modalData;
  }
}
