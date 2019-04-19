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

  constructor(
    private _NPSService: NPSService
  ){ }

  ngOnInit(){
    // this._NPSService.getResults()
    //   .subscribe(
    //     data => { console.log(data)}
    //   );
  }

  getModalData(modalData: IModal):void {
    this.modalData = modalData;
  }
}
