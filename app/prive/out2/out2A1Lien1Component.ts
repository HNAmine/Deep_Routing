import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component({
    selector: 'home-public',
    template: `<h2>A1 Lien1</h2><br>
    <button class="btn btn-default" type="submit" (click)="gotoA2Lien1()">Go to A2 Lien 1</button>
    <button class="btn btn-default" type="submit" (click)="gotoA2Lien2()">Go to A2 Lien 2</button>
    <button class="btn btn-default" type="submit" (click)="gotoA2Lien3()">Go to A1 Lien 1</button>
    <button class="btn btn-default" type="submit" (click)="gotoA2Lien4()">Go to A1 Lien 2</button>
    <button class="btn btn-danger" style="border-radius: 0px;" type="submit" (click)="gotoA2Lien5()">Go Hard or Go Home</button>
    `
})

export class Out2A1Lien1Component {

    constructor(private _router:Router) {
    }

    gotoA2Lien1() {
        //this._router.navigate(['Lien2']);
        this._router.navigateByUrl("/prive/out2A2/lien1");
    }

    gotoA2Lien2() {
        //this._router.navigate(['Lien2']);
        this._router.navigateByUrl("/prive/out2A2/lien2");
    }

    gotoA2Lien3() {
        //this._router.navigate(['Lien2']);
        this._router.navigateByUrl("/prive/out2A1/lien1");
    }

    gotoA2Lien4() {
        //this._router.navigate(['Lien2']);
        this._router.navigateByUrl("/prive/out2A1/lien2");
    }

    gotoA2Lien5() {
        //this._router.navigate(['Lien2']);
        this._router.navigateByUrl("/");
    }
}
