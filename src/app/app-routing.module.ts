import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/homepage/homepage.component';
import { DetailpageComponent } from './core/detailpage/detailpage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: `country/:countryName`, component: DetailpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
