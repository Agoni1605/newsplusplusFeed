import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'build/pages/lajme/lajme.html'
})
export class LajmePage {
    item;
    color;
    posts;
    rssFeed;
    underArray = [];
    i;
    url;

    constructor(public navCtrl: NavController, params: NavParams, private http: Http) {
        this.item = params.data.item;
        this.color = params.data.color;
        this.rssFeed = params.data.rssFeed;
        this.http = http;
        this.url = 'http://www.gazetaexpress.com/rss/' + this.rssFeed + '/?xml=1' ;
        
    }
    onPageWillEnter() {
        this.http.get(this.url).subscribe(data => {
            this.posts = JSON.stringify(data);

            this.posts = this.posts.replace(/\\t|\\n|\\r/gi, "");
            this.posts = this.posts.split("<title>");
            for (this.i = 2; this.i < this.posts.length; this.i++) {
                this.underArray.push({
                    header: this.posts[this.i].substr(0, this.posts[this.i].indexOf('</title><link>')),
                    link: this.posts[this.i].substr(this.posts[this.i].indexOf('</link>') + 13, this.posts[this.i].indexOf('description') - this.posts[this.i].indexOf('</link>') - 22),
                    subText: this.posts[this.i].substr(this.posts[this.i].indexOf('<description>') + 13, this.posts[this.i].indexOf('</description') - this.posts[this.i].indexOf('<description>') - 13),
                    pubDate: this.posts[this.i].substr(this.posts[this.i].indexOf('<pubDate') + 9, this.posts[this.i].indexOf('</pubDate') - this.posts[this.i].indexOf('<pubDate>') - 15),
                    pic: this.posts[this.i].substr(this.posts[this.i].indexOf('url=') + 6, this.posts[this.i].indexOf('</item') - this.posts[this.i].indexOf('url=') - 10)
                });
            }
            console.log(JSON.stringify(this.posts));
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }

    goToLink(link) {
        window.open(link);
    }
}
