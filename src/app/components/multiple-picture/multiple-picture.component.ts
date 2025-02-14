import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { answer, Question } from 'src/app/interfaces/Question';

@Component({
  selector: 'app-multiple-picture',
  templateUrl: './multiple-picture.component.html',
  styleUrls: ['./multiple-picture.component.scss']
})
export class MultiplePictureComponent implements OnInit {
  @Input() question!:Question;
  @Input() step!:number;
  @Input() life!: number;
  @Input() road!: number;
  @Output() continue = new EventEmitter();

  public answered:boolean = false;
  public answerSelected!:answer;
  @Input() level!: number;

  constructor() { }

  ngOnInit(): void {
  }

  public selectAnswer(answer:answer){
    this.answered = true;
    this.answerSelected = answer;
  }

  next(event:Event){
    this.answered = false;
    this.continue.emit(event)
  }
}
