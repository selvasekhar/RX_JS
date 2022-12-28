import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-newobservable',
  templateUrl: './newobservable.component.html',
  styleUrls: ['./newobservable.component.css']
})
export class NewobservableComponent implements OnInit {

  constructor(){

  }
ngOnInit():void{

  const newobservable = new Observable<number>((observer)=>{
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    let timer=0;
    for (let j = 0; j < 5; j++) {
      if (j==4){
        observer.error('unknow error. i valus is 4')

      }
      observer.next(j)
      // setTimeout(()=>{
      //   observer.next(j);
      // }, timer+1000);
      observer.next(j);
    }
    observer.complete();
  });

  let observer = {
    next:(data: number) => console.log(data),
    error:(error: string) => console.log(error),
    complete:() => console.log('complete all done ..................')
  }

  newobservable.subscribe(observer)

}
  
}
