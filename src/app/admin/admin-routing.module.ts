import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DownloadlistComponent } from './downloadlist/downloadlist.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { RecipieeditComponent } from './recipieedit/recipieedit.component';

const routes: Routes = [

  {path:"", component:DashboardComponent,title:"Dashboard"},
  {path:"recipelist",component:RecipelistComponent,title:"Recipie List"},
  {path:"userlist",component:UserlistComponent,title:"User List"},
  {path:"download",component:DownloadlistComponent,title:"User List"},
  {path:"feedbacklist",component:FeedbacklistComponent,title:"FeedBack List"},
  {path:"recipe/add",component:RecipieeditComponent,title:"FeedBack List"},
  {path:"recipe/:id/edit",component:RecipieeditComponent,title:"FeedBack List"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
