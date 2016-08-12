import {Component} from '@angular/core';
import {NavController, NavParams, Storage, SqlStorage} from 'ionic-angular';
import {MenuPage} from '../menu-page/menu-page';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
    item;
    color;
    posts;
    storage = new Storage(SqlStorage);

    oeste; schweiz; autoMobil; beauty; handwerk; internet;
    baden; bayer; berli; brand; breme; hambu; hesse;
    meckl; niede; nordr; rhein; saarl; sachs; sachsA;
    schle; thuer;

    constructor(public nav: NavController, params: NavParams, private http: Http) {
        this.item = params.data.item;
        this.color = params.data.color;
        this.http = http;
        this.makeGetRequest();
    }
    makeGetRequest() {
        this.http.get('http://adresaime.de/json_party.php').map(res => res.json()).subscribe(data => {
            this.posts = data.data.children;
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }

    callIT(passedNumber) {
        window.location = passedNumber;
    }

    mailIT(passedMail) {
        window.location = passedMail;
    }

    goToMenu(event, item) {
        this.nav.push(MenuPage);
    }

    onPageWillEnter() {
        this.storage.query("SELECT * FROM verifyBL").then((data) => {
            if (data.res.rows.length > 0) {
                this.baden = data.res.rows.item(0).Bad;
                this.bayer = data.res.rows.item(0).Bay;
                this.berli = data.res.rows.item(0).Ber;
                this.brand = data.res.rows.item(0).Bra;
                this.breme = data.res.rows.item(0).Bre;
                this.hambu = data.res.rows.item(0).Ham;
                this.hesse = data.res.rows.item(0).Hes;
                this.meckl = data.res.rows.item(0).Mec;
                this.niede = data.res.rows.item(0).Nie;
                this.nordr = data.res.rows.item(0).Nor;
                this.rhein = data.res.rows.item(0).Rhe;
                this.saarl = data.res.rows.item(0).Saa;
                this.sachs = data.res.rows.item(0).Sac;
                this.sachsA = data.res.rows.item(0).SacA;
                this.schle = data.res.rows.item(0).Sch;
                this.thuer = data.res.rows.item(0).Thu;
                this.oeste = data.res.rows.item(0).oester;
                this.schweiz = data.res.rows.item(0).schweiz;

                this.autoMobil = data.res.rows.item(1).Bad;
                this.beauty = data.res.rows.item(1).Bay;
                this.handwerk = data.res.rows.item(1).Ber;
                this.internet = data.res.rows.item(1).Bra;
            }
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
    }
}