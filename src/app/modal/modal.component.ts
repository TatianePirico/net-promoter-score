import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IModal } from '../shared/models/modal.interface';

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

  constructor() { }

  ngOnInit() { }

  closeModal():void {
    this.data.isOpen = false;
  }

  getComment(comment: string):void {
    this.comment = comment;
    this.buttonIsActive = !!comment;
  }
  
  clickButton(action: string):void{
    switch (action) {
      case 'Fechar':
        this.closeModal();
        break;
      case 'Enviar comentário':
        this.sendComment();
        break;
    
    }
  }

  sendComment(): void {
    const modal: IModal = {
      isOpen: true,
      title: "Muito obrigado!",
      titleColor: "",
      emoji: "",
      content: "Sua opinião é muito importante para nós, de verdade! É a partir de comentários como o seu que nos reinventamos para melhorar e ajudar cada ves mais noivas em suas jornadas.",
      description: "",
      hasInput: false,
      inputDescription: "",
      button: "Fechar",
    }
    this.modalData.emit(modal);
  }

}
