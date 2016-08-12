import {Component} from '@angular/core';
import {Alert, NavController, NavParams, Storage, SqlStorage} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/bundesland/bundesland.html'
})
export class BundeslandPage {
    testCheckboxOpen: boolean;
    testCheckboxResult;
    storage = new Storage(SqlStorage);

    baden; bayer; berli; brand; breme; hambu; hesse;
    meckl; niede; nordr; rhein; saarl; sachs; sachsA;
    schle; thuer;

    baden1;

    constructor(public nav: NavController) {
        this.refresh();
    }

    refresh() {
        this.storage.query("SELECT * FROM verifyBL").then((data) => {
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
        }, (error) => {
            console.log("ERROR -> " + JSON.stringify(error.err));
        });
    }

    onPageWillLeave() {
        this.storage.query("UPDATE verifyBL SET Bad = '" + this.baden + "', Bay = '" + this.bayer + "', Ber = '" + this.berli +
            "', Bra = '" + this.brand + "', Bre = '" + this.breme + "', Ham = '" + this.hambu +
            "', Hes = '" + this.hesse + "', Mec = '" + this.meckl + "', Nie = '" + this.niede +
            "', Nor = '" + this.nordr + "', Rhe = '" + this.rhein + "', Saa = '" + this.saarl +
            "', Sac = '" + this.sachs + "', SacA = '" + this.sachsA + "', Sch = '" + this.schle +
            "', Thu = '" + this.thuer + "' WHERE id = 1").then((data) => {
            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
    }
}