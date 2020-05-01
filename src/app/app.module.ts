import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderModule} from './feature-modules/header/header.module';
import {FooterModule} from './feature-modules/footer/footer.module';

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
    },
    {
        path: 'register',
        loadChildren: () =>
            import('./routing-modules/register/register.module').then(
                (m) => m.RegisterModule
            ),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./routing-modules/settings/settings.module').then(
                (m) => m.SettingsModule
            ),
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
