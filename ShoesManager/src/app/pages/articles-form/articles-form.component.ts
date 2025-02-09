import { NgIf, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { Article, ArticleService } from '../../services/article.service';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-articles-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './articles-form.component.html',
  styleUrl: './articles-form.component.css'
})
export class ArticlesFormComponent implements OnInit{
  articleForm : FormGroup;
  articleId: number | null = null;
  isEditing: boolean = false;

  constructor(private articleService : ArticleService, private fb : FormBuilder, private route : ActivatedRoute, private router : Router) {
    //makes the main atributes of the article form to be required 
    this.articleForm = this.fb.group({name: ['', Validators.required], price:[null, Validators.required],
       totalInShelf: [null, Validators.required], totalInVault:[null, Validators.required], storeId:[null, Validators.required]});
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const id = params.get('id');
        if(id)
        {
          this.articleId = +id;
          this.isEditing = true;
          this.LoadData();
        }
      });
  }

  //fullfiled form data if the application calls the put endpoint 
  LoadData()
  {
    if(this.articleId)
    {
      //calls the getArticleById endpoint
      this.articleService.getById(this.articleId).subscribe(
        {
          next:(article:Article)=>{
            this.articleForm.patchValue(article);
          },
          error:()=>{
            alert('No se pudo obtener la informacion de la tienda');
            this.router.navigate(['/articles']);
          } 
        }
      );
    }
  }

  SendData()
  {
    if(this.articleForm.valid)
    {
        const data:Article = this.articleForm.value;

        if(this.isEditing && this.articleId)
        {
          data.id = this.articleId;
          this.EditArticle(this.articleId, data);;
        }else
        {
          this.AddNewArticle(data);
        }
    }
  }

  EditArticle(id:number, data:Article)
  {
    this.articleService.update(id, data).subscribe({
      next:()=>{
        alert('articulo editado');
        this.router.navigate(['/articles']);
      },
      error:()=>{
        alert('error al editar el articlo');
      }
    });
  }

  AddNewArticle(data:Article)
  {
    this.articleService.create(data).subscribe({
      next:()=>{
        alert('articulo creado');
        this.router.navigate(['/articles']);
      },
      error:()=>{
        alert('error al crear un nuevo articulo'); 
      }
    });
  }
}