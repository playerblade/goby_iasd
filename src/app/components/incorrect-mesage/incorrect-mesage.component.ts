import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incorrect-mesage',
  templateUrl: './incorrect-mesage.component.html',
  styleUrls: ['./incorrect-mesage.component.scss']
})
export class IncorrectMesageComponent implements OnInit {
  @Output() continue = new EventEmitter();
  @Input() step!:number;
  @Input() life!: number;
  currentEvent: any;
  @Input() road!: number;
  private audio!: HTMLAudioElement;
  constructor() { }

  ngOnInit(): void {
    this.audio = new Audio('assets/songs/incorrect.m4a');
    this.audio.play();
  }

  next(){
    this.step++;
    this.life--;
    this.road+=7.3;
    this.currentEvent = {'step': this.step, 'life': this.life, 'road': this.road};
    this.continue.emit(this.currentEvent);
  }

}
