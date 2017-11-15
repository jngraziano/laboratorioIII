//CLASES 
//  PROPRIEDADES, CONSTRUCTORES, METODOS
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
//COMENTA  EL  "strict": true para que funcione esta pija
//Es un warning de strict para no manejar undefinied
var Avenger = /** @class */ (function () {
    function Avenger(nombreReal, peleasGanadas, nombre) {
        //cuando pongo el signo de pregunta, tengo que sacar el strict del tsconfig.json
        this._nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
    }
    Avenger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreReal + ", " + this.peleasGanadas;
    };
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nr, pg, n, p) {
        var _this = _super.call(this, nr, pg, n) || this;
        _this._poder = p;
        return _this;
    }
    Xmen.prototype.mostrar = function () {
        return _super.prototype.mostrar.call(this) + this._poder;
    };
    return Xmen;
}(Avenger));
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        //cuando le pasamos public esta creando uno nuevo
        this.nombre = nombre;
    }
    Object.defineProperty(Apocalipsis, "Instance", {
        get: function () {
            if (!(this._instance)) {
                this._instance = new Apocalipsis("HEEELL");
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Apocalipsis;
}());
console.log(Apocalipsis.Instance);
var a1 = new Avenger("Iron Man", 10, "Tony");
var a2 = new Avenger("Bruce", 22);
// a1.nombreReal = "Tony";
// a1.peleasGanadas = 10;
console.log(a1.mostrar());
console.log(a1);
/////////////////////
var x1 = new Xmen("Logan", 50, "Wolverine", "Garras, Regeneracion");
x1.mostrar();
var array = new Array();
array.push(a1);
array.push(x1);
