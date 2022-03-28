import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../interface/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPost: Post[];

  constructor(private postService: PostService,
    private router: Router) {
    this.arrPost = []
  }

  ngOnInit(): void {
    this.arrPost = this.postService.getAll()
  }

  onClick() {
    this.router.navigate(['/new'])
  }
}
