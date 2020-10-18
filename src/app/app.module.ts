import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderModule} from './feature-modules/header/header.module';
import {FooterModule} from './feature-modules/footer/footer.module';
import {LoggedInGuard} from './auth-guard/logged-in.guard';
import {NotLoggedInGuard} from './auth-guard/not-logged-in.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./routing-modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./routing-modules/login/login.module').then(
                (m) => m.LoginModule
            ),
        canActivate: [NotLoggedInGuard],
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./routing-modules/register/register.module').then(
                (m) => m.RegisterModule
            ),
        canActivate: [NotLoggedInGuard],
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./routing-modules/settings/settings.module').then(
                (m) => m.SettingsModule
            ),
        canActivate: [LoggedInGuard],
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HeaderModule,
        FooterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
