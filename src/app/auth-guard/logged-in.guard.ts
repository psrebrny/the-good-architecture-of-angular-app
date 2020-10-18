import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from 'rxjs';
import {LoggedIn} from '../classes/logged-in';

@Injectable({
    providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (LoggedIn.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}
