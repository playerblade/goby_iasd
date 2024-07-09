import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-correct-message',
  templateUrl: './correct-message.component.html',
  styleUrls: ['./correct-message.component.scss']
})
export class CorrectMessageComponent implements OnInit {
  @Output() continue = new EventEmitter();
  @Input() step!:number;
  @Input() life!: number;
  currentEvent: any;
  @Input() road!: number;
  private audio!: HTMLAudioElement;
  constructor() {}

  ngOnInit(): void {
    this.audio = new Audio('assets/songs/correct.m4a');
    this.audio.play();
  }

  next(){
    this.step++;
    this.road+=20;
    this.currentEvent = {'step': this.step, 'life': this.life, 'road': this.road};
    this.continue.emit(this.currentEvent);
  }

}
