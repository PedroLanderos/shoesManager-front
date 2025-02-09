import { Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesDetailsComponent } from './pages/articles-details/articles-details.component';
import { ArticlesFormComponent } from './pages/articles-form/articles-form.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StoresDetailsComponent } from './pages/stores-details/stores-details.component';
import { StoresFormComponent } from './pages/stores-form/stores-form.component';

export const routes: Routes = [
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/create', component: ArticlesFormComponent },
    { path: 'articles/edit/:id', component: ArticlesFormComponent },
    { path: 'articles/:id', component: ArticlesDetailsComponent }, 

    { path: 'stores', component: StoresComponent },
    { path: 'stores/create', component: StoresFormComponent }, 
    { path: 'stores/edit/:id', component: StoresFormComponent },
    { path: 'stores/:id', component: StoresDetailsComponent } 
];

