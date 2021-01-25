import { Component } from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string
  text:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolve')
    },4000)
  })
  date: Observable<Date> = new Observable( obs => {
    setInterval( () => {
      obs.next(new Date())
    },1000)
  })
  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'Javascript', text: 'The best language in the world'}
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Angular 8 course'
    })
  }
}
