import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EditPostComponent} from '../app/modules/user/components/edit-post/edit-post.component'; 
import { NewPostComponent} from '../app/modules/user/components/new-post/new-post.component'; 

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'user',
    canActivate: [AuthGuard],
    loadChildren:() => 
      import('./modules/user/user.module').then((m)=>m.UserModule),
    },
    { path: 'newPost', component:NewPostComponent},
    { path: 'editPost/:id', component:EditPostComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  export const routingComponents = [LoginComponent,NewPostComponent,EditPostComponent]