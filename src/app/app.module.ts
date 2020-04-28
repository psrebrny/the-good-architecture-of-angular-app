import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./routing-modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    { path: 'login', loadChildren: () => import('./routing-modules/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./routing-modules/register/register.module').then(m => m.RegisterModule) },
    { path: 'settings', loadChildren: () => import('./routing-modules/settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
