import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postService: PostService,
    private router: Router,
  ) {

    this.formulario = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      author: new FormControl(),
      category: new FormControl(),
      createdAt: new FormControl(),


    });

  }

  ngOnInit(): void {
  }

  onSubmit() {

    //modifico la fecha para transformarla en pobjeto Date
    const fechaCreacion = new Date(this.formulario.value.createdAt);
    this.formulario.value.createdAt = fechaCreacion;

    //mediante el servicio insertamos el nuevo post dentro del array
    this.postService.create(this.formulario.value)
    alert('Post insertado')

    //inserto el formulario y navego hacia la ruta post para ver todos los post
    this.router.navigate(['/posts'])

    //si quiero crear un nuevo post
    //this.formulario.reset()

  }

}
