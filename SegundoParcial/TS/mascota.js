"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(nombre, edad, cantPatas, id, tipo) {
            var _this = _super.call(this, nombre, edad, cantPatas) || this;
            _this._id = id;
            _this._tipo = tipo;
            return _this;
        }
        Mascota.prototype.animalCompleto = function () {
            return _super.prototype.animalCompleto.call(this) + "," + this._id + "," + this._tipo;
            // return `${this._nombre}, ${this._edad}, ${this._cantPatas}`;
        };
        Mascota.prototype.toJson = function () {
            //let cad:string = super.toJson().replace(`,`,'');
            var cad = _super.prototype.toJson.call(this);
            var json = cad + this._id + this._tipo;
            return JSON.stringify(json);
        };
        return Mascota;
    }(Clases.Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
