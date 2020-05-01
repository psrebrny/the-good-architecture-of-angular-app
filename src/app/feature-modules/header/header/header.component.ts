import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {SharedDataService} from '../../../services/shared-data.service';

@Component({
    selector: 'excellent-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    isLoggedIn$: Observable<boolean> = this.sharedDataService.isLoggedIn$;
    constructor(private sharedDataService: SharedDataService) {}
}
