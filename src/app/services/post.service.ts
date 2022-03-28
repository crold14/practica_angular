import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: Post[];


  constructor() {

    this.arrPost = [

      {
        title: 'hola',
        body: 'que tal',
        author: 'bien',
        category: 'tu',
        createdAt: new Date(),

      },
      {
        title: 'weg',
        body: 'bion',
        author: 'utcvi',
        category: 'utd',
        createdAt: new Date(),

      }
    ];
  }

  getAll(): Post[] {
    return this.arrPost
  }



  //metodo que reciba un post y lo inserte dentro del array
  create(pPost: Post) {
    this.arrPost.push(pPost)
  }



}