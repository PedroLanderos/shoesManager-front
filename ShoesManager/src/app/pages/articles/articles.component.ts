import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../../services/article.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgFor, RouterModule, HttpClientModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{
  articles: Article[] = [];

  constructor(private articleService : ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getAll().subscribe((data) => {
      this.articles = data;
    });
  }

  deleteArticle(id: number): void {
    if (confirm('Are you sure?')) {
      this.articleService.delete(id).subscribe(() => {
        this.articles = this.articles.filter(a => a.id !== id);
      });
    }
  }
}
