import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DataSourseQuestions, Question } from '../interfaces/Question';
import { FormService } from '../services/form.service';
// import { Questions } from '../model/questions.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, AfterViewChecked {
  public step: number;
  public question!: Question;
  public questions: Question[] = [];
  public dataSources: DataSourseQuestions[] = [];
  public endQuestion:boolean = false;
  public life: number;
  public road: number;
  public level: number;
  private audio!: HTMLAudioElement;
  public isShake = false;
  public nextLevel = false;
  @ViewChild('audioRef',{static: false}) audioRef!: ElementRef<HTMLAudioElement>;

  constructor(private _form:FormService) {
    this.life = 15;
    this.step = 0;
    this.road = 0;
    this.level = 0;
    setTimeout(() => {
      this.shakeMethod();
    }, 100);
  }

  ngOnInit(): void {
    this.audio = new Audio('assets/songs/background.m4a');
    this.audio.play();
    this.nextQuestion();
  }

  ngAfterViewChecked() {
    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play();
      this.audio.pause();
    }
  }

  public nextQuestion():void{
      this._form.getForm('questions').subscribe((res) => {
        this.dataSources = res;
        this.questions = res[this.level].question!;
        // this.question = this.questions[this.step];
        this.question = this.questions[this.step];
        if(!this.question) this.endQuestion = true;
    })
  }

  public next(event: any):void{
    // verify exist next question
    this.life = Number(event.life);
    this.road = Number(event.road);
    if(this.step < this.questions.length - 1){
      this.step = Number(event.step);
      console.log(`Step: ${this.step}`);
      this.question = this.questions[this.step];
    }else{
      this.nextLevel = true;
      // verify if exist next level
      if(this.level < this.dataSources.length - 1){
        this.level++;
        this.step = 0;
        this.questions = this.dataSources[this.level].question!;
        this.question = this.questions[this.step];
        this.shakeMethod();
      } else {
        this.endQuestion = true;
      }
    }
  }
  public continueQuestions() {
    this.nextLevel = false;
  }

  shakeMethod() {
    this.isShake = true;
    setTimeout(() => {
      this.isShake = false;
    },1000);
  }
}
