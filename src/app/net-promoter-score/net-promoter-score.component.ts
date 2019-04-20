import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IModal, INoteResponse } from '../shared/models/modal.interface';
import { NPSService } from '../shared/services/nps.service';

@Component({
  selector: 'app-net-promoter-score',
  templateUrl: './net-promoter-score.component.html',
  styleUrls: ['./net-promoter-score.component.scss']
})
export class NetPromoterScoreComponent implements OnInit {

  constructor(
    private _NPSService: NPSService
  ){ }

  @Output() modalData = new EventEmitter();

  private score: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private noteSelected: number = 0;

  ngOnInit() { }

  private async showModal(note: number) {

    let emoji = 'emoji_dislike.png';
    if(note > 6 && note < 9) emoji = 'emoji_thinking.png';
    if(note > 8) emoji = 'emoji_like.png';

    const request: INoteResponse = await this._NPSService.sendScore(note)
      .toPromise()
      .then(data => data );
    
    const modal: IModal = {
      isOpen: true,
      title: `Você nos deu nota ${note}!`,
      titleColor: "red",
      emoji: emoji,
      content: null,
      description: "Dica? Reclamação? Só um obrigado? Pode escrever aqui pra gente!",
      hasInput: true,
      inputDescription: "0 a 140 caracteres",
      button: "Enviar comentário",
      requestResponse: request,
    }

    if (!!note) this.modalData.emit(modal);
  }

}
