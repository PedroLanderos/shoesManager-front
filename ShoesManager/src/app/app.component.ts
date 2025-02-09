import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleService } from './services/article.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articleService = inject(ArticleService);
  storeServce = inject(StoreService);
  title = 'ShoesManager';
}
