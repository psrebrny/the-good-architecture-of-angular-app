import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {RouterLinksModel} from '../model/router-links-model';
import {menu} from '../data/menu';
import {LoggedIn} from '../classes/logged-in';

@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    menu$: ReplaySubject<RouterLinksModel[]> = new ReplaySubject<
        RouterLinksModel[]
    >(1);
    isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        LoggedIn.isLoggedIn()
    );

    constructor() {}

    loadMenu() {
        menu.subscribe((response: RouterLinksModel[]) => {
            this.menu$.next(response);
        });
    }

    loadIsLoggedIn() {
        this.isLoggedIn$.next(LoggedIn.isLoggedIn());
    }
}
