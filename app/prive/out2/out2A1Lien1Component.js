System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var Out2A1Lien1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Out2A1Lien1Component = (function () {
                function Out2A1Lien1Component(_router) {
                    this._router = _router;
                }
                Out2A1Lien1Component.prototype.gotoA2Lien1 = function () {
                    //this._router.navigate(['Lien2']);
                    this._router.navigateByUrl("/prive/out2A2/lien1");
                };
                Out2A1Lien1Component.prototype.gotoA2Lien2 = function () {
                    //this._router.navigate(['Lien2']);
                    this._router.navigateByUrl("/prive/out2A2/lien2");
                };
                Out2A1Lien1Component.prototype.gotoA2Lien3 = function () {
                    //this._router.navigate(['Lien2']);
                    this._router.navigateByUrl("/prive/out2A1/lien1");
                };
                Out2A1Lien1Component.prototype.gotoA2Lien4 = function () {
                    //this._router.navigate(['Lien2']);
                    this._router.navigateByUrl("/prive/out2A1/lien2");
                };
                Out2A1Lien1Component.prototype.gotoA2Lien5 = function () {
                    //this._router.navigate(['Lien2']);
                    this._router.navigateByUrl("/");
                };
                Out2A1Lien1Component = __decorate([
                    core_1.Component({
                        selector: 'home-public',
                        template: "<h2>A1 Lien1</h2><br>\n    <button class=\"btn btn-default\" type=\"submit\" (click)=\"gotoA2Lien1()\">Go to A2 Lien 1</button>\n    <button class=\"btn btn-default\" type=\"submit\" (click)=\"gotoA2Lien2()\">Go to A2 Lien 2</button>\n    <button class=\"btn btn-default\" type=\"submit\" (click)=\"gotoA2Lien3()\">Go to A1 Lien 1</button>\n    <button class=\"btn btn-default\" type=\"submit\" (click)=\"gotoA2Lien4()\">Go to A1 Lien 2</button>\n    <button class=\"btn btn-danger\" style=\"border-radius: 0px;\" type=\"submit\" (click)=\"gotoA2Lien5()\">Go Hard or Go Home</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Out2A1Lien1Component);
                return Out2A1Lien1Component;
            }());
            exports_1("Out2A1Lien1Component", Out2A1Lien1Component);
        }
    }
});
//# sourceMappingURL=out2A1Lien1Component.js.map