import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarProgressComponent implements OnInit, OnChanges {
  @Input() actualLife!:number;
  @Input() road!: number;
  constructor(private _router:Router, private _form:FormService, private _changeDetector:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this._changeDetector.markForCheck();
  }
  close(){
    this._router.navigateByUrl('')
  }
}
