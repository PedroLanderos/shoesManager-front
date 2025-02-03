import { Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesDetailsComponent } from './pages/articles-details/articles-details.component';
import { ArticlesFormComponent } from './pages/articles-form/articles-form.component';

export const routes: Routes = [
    {path:'articles', component: ArticlesComponent},
    {path:'articles/:id', component: ArticlesDetailsComponent },
    {path: 'articles/create', component: ArticlesFormComponent},
    {path: 'articles/edit/:id', component: ArticlesFormComponent},
    {},
    {},
    {},
    {}
];
