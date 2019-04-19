import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IModal } from '../shared/models/modal.interface';

@Component({
  selector: 'app-net-promoter-score',
  templateUrl: './net-promoter-score.component.html',
  styleUrls: ['./net-promoter-score.component.scss']
})
export class NetPromoterScoreComponent implements OnInit {

  constructor() { }

  @Output() modalData = new EventEmitter();

  private score: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private noteSelected: number = 0;

  ngOnInit() {
  }

  private showModal(note: number):void {

    let emoji = 'emoji_dislike.png';
    if(note > 6 && note < 9) emoji = 'emoji_thinking.png';
    if(note > 8) emoji = 'emoji_like.png';

    const modal: IModal = {
      isOpen: true,
      title: `Você nos deu nota ${note}!`,
      titleColor: 'red',
      emoji: emoji,
      content: '',
      description: 'Dica? Reclamação? Só um obrigado? Pode escrever aqui pra gente!',
      hasInput: true,
      inputDescription: '0 a 140 caracteres',
      button: 'Enviar comentário',
    }
    if (!!note) this.modalData.emit(modal);
  }

}
