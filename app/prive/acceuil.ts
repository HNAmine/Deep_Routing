import {Component, Injector, Injectable, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, CanActivate, Router} from 'angular2/router';
import {ConfidentielComponent} from "./confidentiel";
import {ProfilComponent} from "./profil";
import {Out2A1Component} from "./out2/out2A1Component";
import {Out2A2Component} from "./out2/out2A2Component";
@Component({
  selector: 'home-prive',
  templateUrl: 'app/prive/acceuil.html',
  styleUrls: ['app/prive/acceuil.css'],
  directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
// @RouteConfig([
//   { path: '/profil', name: 'Confidentiel', component: ConfidentielComponent, useAsDefault: true },
//   { path: '/confidentiel', name: 'Profil', component: ProfilComponent}
// ])
@RouteConfig([
  {
    path: '/out2A1/...',
    name: 'Out2A1',
    component: Out2A1Component,
    useAsDefault: true,
  },
  {
    path: '/out2A2/...',
    name: 'Out2A2',
    component: Out2A2Component
  }
])
export class AcceuilComponent{

  constructor(private _router: Router) {

  }

}
