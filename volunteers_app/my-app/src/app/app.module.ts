import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule ,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling/scheduling.component';
import { VolunteersListComponent } from './volunteers/volunteers-list/volunteers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteersListService } from './volunteers/volunteers-list.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VolunteerDetailsComponent } from './volunteers/volunteer-details/volunteer-details.component';
import { VolunteersModule } from './volunteers/volunteers.module';
import { SchedulingModule } from './scheduling/scheduling.module';

const ROUTES: Route[] = [
  { path: "volunteers", component: VolunteersListComponent },
  { path: "scheduling", component: SchedulingComponent },
  { path: "**", component: PageNotFoundComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
      ],
  providers: [VolunteersListService],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VolunteersModule,
    SchedulingModule
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
