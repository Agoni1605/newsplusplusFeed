import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LajmePage} from '../lajme/lajme';
import {MenuPage} from '../menu-page/menu-page';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor(public nav: NavController) {

    }

    clicked(item, color, rssFeed) {
        this.nav.push(LajmePage, {
            item: item,
            color: color,
            rssFeed: rssFeed
        });
    }

    goToMenu(event, item) {
        this.nav.push(MenuPage);
    }
}