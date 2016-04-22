import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Out2A1Lien1Component} from './out2A1Lien1Component';
import {Out2A1Lien2Component} from './out2A1Lien2Component';

@Component({
    selector: 'confidentiel',
    templateUrl: 'app/prive/out2/out2A1Component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})

@RouteConfig([
  { path: '/lien1', name: 'Lien1', component: Out2A1Lien1Component, useAsDefault: true },
  { path: '/lien2', name: 'Lien2', component: Out2A1Lien2Component }
])
export class Out2A1Component { }
