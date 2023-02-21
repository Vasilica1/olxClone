import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { AnswersComponent } from './components/answers/answers.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { CardComponent } from './components/card-ad/card/card.component';
import { SavedAdsComponent } from './components/saved-ads/saved-ads.component';

const routes: Routes = [
  { path: 'ads', component: CardAdComponent},
  { path: 'ads/details',  component: CardComponent},
  { path: 'answers', component: AnswersComponent },
  { path: 'add-ads', component: AddAdsComponent },
  { path: 'saved-ads', component: SavedAdsComponent },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
