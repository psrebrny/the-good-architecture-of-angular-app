import {Component, OnInit} from '@angular/core';
import {RouterLinksModel} from '../../../model/router-links-model';
import {SharedDataService} from '../../../services/shared-data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'excellent-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    links$: Observable<RouterLinksModel[]> = this.sharedDataService.menu$;
    constructor(private sharedDataService: SharedDataService) {}

    ngOnInit(): void {}
}
