import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IModal, INoteResponse, IDataResponse } from '../shared/models/modal.interface';
import { NPSService } from '../shared/services/nps.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() modalData = new EventEmitter();

  @Input() data: IModal;

  comment: string = '';
  buttonIsActive: boolean = false;

  constructor(
    private _NPSService: NPSService
  ) { }

  ngOnInit() { }

  private async closeModal() {
    this.data.isOpen = false;

    const request: INoteResponse = await this._NPSService.getResults()
      .toPromise()
      .then(data => data );

    const modal: IModal = {
      isOpen: false,
      title: null,
      titleColor: null,
      emoji: null,
      content: null,
      description: null,
      hasInput: false,
      inputDescription: null,
      button: null,
      requestResponse: request
    }
    this.modalData.emit(modal);
  }

  private getComment(comment: string):void {
    this.comment = comment;
    this.buttonIsActive = !!comment;
  }
  
  private clickButton(action: string, requestResponse: INoteResponse):void{
    switch (action) {
      case 'Fechar':
        this.closeModal();
        break;
      case 'Enviar comentário':
        this.sendComment(requestResponse.data);
        break;
    }
  }

  private async sendComment(requestResponse: IDataResponse) {

    const id = requestResponse.id;

    const request: INoteResponse = await this._NPSService.sendComment(id, this.comment)
      .toPromise()
      .then(data => data );

    const modal: IModal = {
      isOpen: true,
      title: "Muito obrigado!",
      titleColor: null,
      emoji: null,
      content: "Sua opinião é muito importante para nós, de verdade! É a partir de comentários como o seu que nos reinventamos para melhorar e ajudar cada ves mais noivas em suas jornadas.",
      description: null,
      hasInput: false,
      inputDescription: null,
      button: "Fechar",
      requestResponse: request
    }
    this.modalData.emit(modal);
  }

}
