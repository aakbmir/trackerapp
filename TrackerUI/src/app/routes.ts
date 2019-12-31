import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountSummaryComponent } from './components/account-summary/account-summary.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent, children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent, children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'register', component: RegisterComponent, canActivate: [AuthGuard]
    },
    {
        path: 'viewaccount/:id', component: ViewAccountComponent, canActivate: [AuthGuard]
    },
    {
        path: 'viewaccount', component: ViewAccountComponent, canActivate: [AuthGuard]
    },
    {
        path: 'editaccount/:id', component: RegisterComponent, canActivate: [AuthGuard]
    },
    {
        path: 'accountsummary', component: AccountSummaryComponent, canActivate: [AuthGuard]
    },
    {
        path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];