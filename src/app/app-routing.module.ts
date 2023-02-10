import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { AnswersComponent } from './components/answers/answers.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { SavedAdsComponent } from './components/saved-ads/saved-ads.component';

const routes: Routes = [
  { path: '', component: CardAdComponent },
  { path: 'answers', component: AnswersComponent },
  { path: 'add-ads', component: AddAdsComponent },
  { path: 'saved-ads', component: SavedAdsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
