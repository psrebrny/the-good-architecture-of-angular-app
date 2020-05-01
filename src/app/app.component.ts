import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SharedDataService} from './services/shared-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    constructor(private sharedDataService: SharedDataService) {}

    ngOnInit() {
        this.sharedDataService.loadMenu();
        this.sharedDataService.loadIsLoggedIn();
    }
}
