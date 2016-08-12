import {Component} from '@angular/core';
import {Platform, ionicBootstrap, Storage, SqlStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

    private rootPage: any;

    storage;

    constructor(private platform: Platform) {
        this.rootPage = TabsPage;
        platform.ready().then(() => {
            if (localStorage.getItem("dbCreator") === null) {
                this.storage = new Storage(SqlStorage);
                this.storage.query('CREATE TABLE IF NOT EXISTS verifyBL (id INTEGER PRIMARY KEY, oester Text DEFAULT true, schweiz Text DEFAULT true, Bad Text DEFAULT true, Bay Text DEFAULT true, Ber Text DEFAULT true, Bra Text DEFAULT true, Bre Text DEFAULT true, Ham Text DEFAULT true, Hes Text DEFAULT true, Mec Text DEFAULT true, Nie Text DEFAULT true, Nor Text DEFAULT true, Rhe Text DEFAULT true, Saa Text DEFAULT true, Sac Text DEFAULT true, SacA Text DEFAULT true, Sch Text DEFAULT true, Thu Text DEFAULT true)').then((data) => {
                    console.log("TABLE CREATED -> " + JSON.stringify(data.res));
                }, (error) => {
                    console.log("ERROR -> " + JSON.stringify(error.err));
                });
                this.storage.query("INSERT INTO verifyBL (id, Bad, Bay, Ber, Bra, Bre, Ham, Hes, Mec, Nie, Nor, Rhe, Saa, Sac, SacA, Sch, Thu) VALUES (1,'true', 'true','true','true','true','true','true','true','true','true','true','true','true','true','true','true')").then((data) => {
                    console.log(JSON.stringify(data.res));
                }, (error) => {
                    console.log("ERROR -> " + JSON.stringify(error.err));
                });
                this.storage.query("INSERT INTO verifyBL (id, Bad, Bay, Ber, Bra, Bre, Ham, Hes, Mec, Nie, Nor, Rhe, Saa, Sac, SacA, Sch, Thu) VALUES (2,'true', 'true','true','true','true','true','true','true','true','true','true','true','true','true','true','true')").then((data) => {
                    console.log(JSON.stringify(data.res));
                }, (error) => {
                    console.log("ERROR -> " + JSON.stringify(error.err));
                });
                localStorage.setItem('dbCreator', "true");
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp);
