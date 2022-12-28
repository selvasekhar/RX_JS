import { AfterViewInit, Component } from '@angular/core';
import {from, fromEvent} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs';

  postArray=[
    {title:'1', des:'any1'},
    {title:'2', des:'any2'},
    {title:'3', des:'any3'},
  ];
  postArrayObservable$ = from(this.postArray)
  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('resolve done');
    },3000)
  })
  promiseObservable$ = from(this.promise);
  constructor(){
    this.postArrayObservable$.subscribe({
      next:(data) =>console.log(data),
      error:(error) =>console.log(error),
      complete:() =>console.log('complete done'),
    });

    this.promiseObservable$.subscribe({
      next:(data) =>console.log(data),
      error:(error) =>console.log(error),
      complete:() =>console.log('complete promise  done'),
    })

  }
  ngAfterViewInit() {
    fromEvent(document.getElementById('clickbutton')!, 'click').subscribe({
      next:(data) =>console.log(data),
      error:(error) =>console.log(error),
      complete:() =>console.log('complete promise  done'),
    })
  }

}

