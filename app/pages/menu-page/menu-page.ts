import {Component} from '@angular/core';
import {NavController, NavParams, Storage, SqlStorage} from 'ionic-angular';
import {BundeslandPage} from '../bundesland/bundesland';

@Component({
    templateUrl: 'build/pages/menu-page/menu-page.html'
})
export class MenuPage {
    testCheckboxOpen: boolean;
    testCheckboxResult;
    storage = new Storage(SqlStorage);

    oeste; schweiz; autoMobil; beauty; handwerk; internet;

    constructor(public nav: NavController) {
        this.refresh();
    }

    refresh() {
        this.storage.query("SELECT * FROM verifyBL").then((data) => {
            this.oeste = data.res.rows.item(0).oester;
            this.schweiz = data.res.rows.item(0).schweiz;
            this.autoMobil = data.res.rows.item(1).Bad;
            this.beauty = data.res.rows.item(1).Bay;
            this.handwerk = data.res.rows.item(1).Ber;
            this.internet = data.res.rows.item(1).Bra;
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
    }

    doCheckbox() {
        this.nav.push(BundeslandPage);
    }

    onPageWillLeave() {
        this.storage.query("UPDATE verifyBL SET oester = '" + this.oeste +
            "', schweiz = '" + this.schweiz + "' WHERE id = 1").then((data) => {
            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
        this.storage.query("UPDATE verifyBL SET Bad = '" + this.autoMobil +
            "', Bay = '" + this.beauty +
            "', Ber = '" + this.handwerk +
            "', Bra = '" + this.internet +
            "' WHERE id = 2").then((data) => {
            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
    }
}