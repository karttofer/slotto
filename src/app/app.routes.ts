// Dependencies
import { Routes } from '@angular/router';

// Components
import { ChatComponent } from './sections/chat/chat.component';
import { LoginComponent } from './sections/login/login.component';
import { SignUpComponent } from './sections/sign-up/sign-up.component';

export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];
