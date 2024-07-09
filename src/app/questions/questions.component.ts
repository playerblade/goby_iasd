import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { answer, Question } from '../interfaces/Question';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, AfterViewChecked {
  public step: number;
  public question! : Question;
  public questions:any = [];
  public endQuestion:boolean = false;
  public life: number;
  public road: number;
  // private audio!: HTMLAudioElement;
  @ViewChild('audioRef',{static: false}) audioRef!: ElementRef<HTMLAudioElement>;

  constructor(private _form:FormService) {
    this.life = 5;
    this.step = 0;
    this.road = 0;
  }

  ngOnInit(): void {
    // this.audio = new Audio('assets/songs/complete.aac');
    this.nextQuestion();
  }

  ngAfterViewChecked() {
    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play();
    }
  }

  public nextQuestion():void{
      this._form.getForm('questions').subscribe((res) => {
        this.questions = res;
        this.question = this.questions[this.step];
        if(!this.question) this.endQuestion = true;
    })
  }

  public next(event: any):void{
    this.step = Number(event.step);
    this.life = Number(event.life);
    this.road = Number(event.road);
    this.nextQuestion();
  }
}
