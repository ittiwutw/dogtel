import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'hotel-detail',
    loadChildren: () => import('./hotel-detail/hotel-detail.module').then( m => m.HotelDetailPageModule)
  },
  {
    path: 'search-hotel',
    loadChildren: () => import('./search-hotel/search-hotel.module').then( m => m.SearchHotelPageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'add-hotel',
    loadChildren: () => import('./add-hotel/add-hotel.module').then( m => m.AddHotelPageModule)
  },
  {
    path: 'fav',
    loadChildren: () => import('./fav/fav.module').then( m => m.FavPageModule)
  },
  {
    path: 'comfirm-register',
    loadChildren: () => import('./comfirm-register/comfirm-register.module').then( m => m.ComfirmRegisterPageModule)
  },
  {
    path: 'terms-condition',
    loadChildren: () => import('./terms-condition/terms-condition.module').then( m => m.TermsConditionPageModule)
  },
  {
    path: 'add-dog',
    loadChildren: () => import('./add-dog/add-dog.module').then( m => m.AddDogPageModule)
  },
  {
    path: 'select-hotel-type',
    loadChildren: () => import('./select-hotel-type/select-hotel-type.module').then( m => m.SelectHotelTypePageModule)
  },
  {
    path: 'dog-detail',
    loadChildren: () => import('./dog-detail/dog-detail.module').then( m => m.DogDetailPageModule)
  },
  {
    path: 'my-hotel',
    loadChildren: () => import('./my-hotel/my-hotel.module').then( m => m.MyHotelPageModule)
  },
  {
    path: 'add-room',
    loadChildren: () => import('./add-room/add-room.module').then( m => m.AddRoomPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'asking',
    loadChildren: () => import('./asking/asking.module').then( m => m.AskingPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'answer',
    loadChildren: () => import('./answer/answer.module').then( m => m.AnswerPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
