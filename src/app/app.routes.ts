import { Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { RecipieComponentComponent } from './recipie-component/recipie-component.component';
import { ViewRecipieComponentComponent } from './view-recipie-component/view-recipie-component.component';
import { SavedRecipieComponentComponent } from './saved-recipie-component/saved-recipie-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

export const routes: Routes = [

  { path: '', component: HomecomponentComponent ,title:"Home"},
  { path: 'about', component: AboutComponentComponent,title:"About" },
  { path: 'contact', component: ContactComponentComponent ,title:"Contact"},
  { path: 'login', component: LoginComponentComponent,title:"Login" },
  { path: 'register', component: RegisterComponentComponent,title:"Register" },
  { path: 'allrecipe', component: RecipieComponentComponent,title:"All recipie" },
  { path: 'viewRecipe/:id', component: ViewRecipieComponentComponent ,title:"Recipie"},
  { path: 'savedRecipie', component: SavedRecipieComponentComponent ,title:"Saved Recipie"},
  { path: 'profile', component: ProfileComponentComponent,title:"Profile" },
];
