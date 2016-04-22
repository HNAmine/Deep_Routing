import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Out2A2Lien1Component} from './out2A2Lien1Component';
import {Out2A2Lien2Component} from './out2A2Lien2Component';

@Component({
    selector: 'confidentiel',
    templateUrl: 'app/prive/out2/out2A2Component.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet]
})

@RouteConfig([
  { path: '/lien1', name: 'Lien1', component: Out2A2Lien1Component, useAsDefault: true },
  { path: '/lien2', name: 'Lien2', component: Out2A2Lien2Component }
])
export class Out2A2Component { }
