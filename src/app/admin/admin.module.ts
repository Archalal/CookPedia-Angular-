import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DownloadlistComponent } from './downloadlist/downloadlist.component';
import { FeedbacklistComponent } from './feedbacklist/feedbacklist.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddrecipieComponent } from './addrecipie/addrecipie.component';
import { RecipieeditComponent } from './recipieedit/recipieedit.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {HighchartsChartModule} from 'highcharts-angular'



@NgModule({
  declarations: [
    DashboardComponent,
    RecipelistComponent,
    UserlistComponent,
    DownloadlistComponent,
    FeedbacklistComponent,
    SidebarComponent,
    AddrecipieComponent,
    RecipieeditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SearchPipe,
    FormsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HighchartsChartModule
    
  ]
})
export class AdminModule {

 }
