import {RouterLinksModel} from '../model/router-links-model';
import {Observable, of} from 'rxjs';

export const menu: Observable<RouterLinksModel[]> = of([
    {
        link: '/blog',
        title: 'Blog',
        subLinks: [
            { title: 'Recent Posts', link: '/blog/recent-posts' },
            { title: 'Most Rated', link: '/blog/most-rated' },
        ],
    },
    {
        title: 'Getting Started',
        link: '/getting-started',
        subLinks: [
            {
                link: '/getting-started/introduction',
                title: 'Introduction',
            },
            {
                link: '/getting-started/installation',
                title: 'Installation',
            },
            {
                link: '/getting-started/key-features',
                title: 'Key features',
            },
        ],
    },
    {
        title: 'Courses',
        link: '/courses',
        subLinks: [
            { link: 'courses/all', title: 'All' },
            { link: 'courses/angular', title: 'Angular' },
            { link: 'courses/react', title: 'React' },
            { link: 'courses/gatsby', title: 'Gatsby' },
            { link: 'courses/electron', title: 'Electron' },
        ],
    },
    {
        title: 'Books',
        link: '/books',
        subLinks: [
            { link: 'books/all', title: 'All' },
            { link: 'books/angular', title: 'Angular' },
            { link: 'books/react', title: 'React' },
            { link: 'books/gatsby', title: 'Gatsby' },
            { link: 'books/electron', title: 'Electron' },
        ],
    },
]);
