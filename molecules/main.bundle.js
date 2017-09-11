webpackJsonp([1,5],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".generator {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap-reverse;\r\n      flex-wrap: wrap-reverse;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  background: #fff;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.ball {\r\n  margin: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".canvas {\r\n  border: 1px dashed #000;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\n.ball {\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<app-balls-generator></app-balls-generator>\n"

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6\">\n    <div class=\"generator jumbotron\">\n      <div class=\"ball\" draggable=\"true\" (dragstart)=\"onDragStart($event, i)\" (dragend)=\"onDragEnd($event, i)\" *ngFor=\"let ball of Balls; let i = index\" (mousedown)=\"onMouseDown($event)\" [ngStyle]=\"{'background': ball.color, 'width.px': ball.radius * 2, 'height.px': ball.radius * 2}\"></div>\n    </div>\n\t\n    <div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t\tDrag balls from left to right &rarr;\n\t  </div>\n\t</div>\n\t\n    <div class=\"panel panel-default\">\n\t  <div class=\"panel-body\">\n\t\tAll balls have equal impulses but different directions of motion.\n\t  </div>\n\t</div>\n  </div>\n  <div class=\"col-xs-6\">\n    <app-canvas [offsetX]=\"offsetX\" [offsetY]=\"offsetY\" [radius]=\"radius\" [color]=\"color\"></app-canvas>\n  </div>\n</div>\n"

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"canvas\" #myIdentifier (dragover)=\"onDragOver($event)\" (drop)=\"onDragDrop($event)\">-->\n  <!--<div class=\"ball\" *ngFor=\"let ball of Balls\" [ngStyle]=\"{'top.px': ball.y - ball.radius, 'left.px': ball.x - ball.radius, 'background': ball.color, 'width.px': ball.radius * 2, 'height.px': ball.radius * 2}\">-->\n\n  <!--</div>-->\n<!--</div>-->\n\n<canvas class=\"canvas\" #myCanvas (dragover)=\"onDragOver($event)\" (drop)=\"onDragDrop($event)\" (window:resize)=\"onResize()\"></canvas>\n\n<button (click)=\"onStateChange()\" class=\"btn\">\n  <span class=\"glyphicon glyphicon-play\" *ngIf=\"!running\"></span>\n  <span class=\"glyphicon glyphicon-pause\" *ngIf=\"running\"></span>\n</button>\n\n<button (click)=\"onSavedLoad()\" class=\"btn\"><span class=\"glyphicon glyphicon-eject\"></span> Restore saved</button>\n\n<button (click)=\"onClear()\" class=\"btn\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n\n<label>\n  <input type=\"checkbox\" [(ngModel)]=\"interaction\">\n  Interaction\n</label>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ball; });
var Ball = (function () {
    function Ball(x, y, radius, color, Vx, Vy) {
        this.x = x;
        this.y = y;
        this.prevX = this.x;
        this.prevY = this.y;
        this.radius = radius || 30;
        this.color = color || '#ff0000';
        // this.Vx = (Math.random() * 100 - 50) * Math.sqrt(1 / Math.pow(this.radius, 2)) * 100; // px / second
        // this.Vy = (Math.random() * 100 - 50) * Math.sqrt(1 / Math.pow(this.radius, 2)) * 100; // px / second
        var ro = 3000;
        var p = 5000;
        var V = 4 / 3 * Math.PI * Math.pow(this.radius / 100, 3);
        this.m = ro * V;
        var angle = Math.random() * Math.PI * 2;
        this.Vx = Vx || p / this.m * Math.cos(angle);
        this.Vy = Vy || p / this.m * Math.sin(angle);
    }
    Ball.prototype.move = function (x, y) {
        this.prevX = this.x;
        this.prevY = this.y;
        this.x = x;
        this.y = y;
    };
    Object.defineProperty(Ball.prototype, "Px", {
        get: function () {
            return this.m * this.Vx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "Py", {
        get: function () {
            return this.m * this.Vy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "P", {
        get: function () {
            return this.m * Math.sqrt(Math.pow(this.Vx, 2) + Math.pow(this.Vy, 2));
        },
        enumerable: true,
        configurable: true
    });
    return Ball;
}());

//# sourceMappingURL=ball.model.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    /**
     * @param value
     *
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'round'
    })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(149),
        styles: [__webpack_require__(144)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balls_generator_balls_generator_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canvas_canvas_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_round_pipe__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
// Production build:
// ng build --base-href https://vibos.github.io/molecules/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components



// Pipes

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__balls_generator_balls_generator_component__["a" /* BallsGeneratorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__canvas_canvas_component__["a" /* CanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_round_pipe__["a" /* RoundPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ball_model__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallsGeneratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BallsGeneratorComponent = (function () {
    function BallsGeneratorComponent() {
        this.Balls = [];
    }
    BallsGeneratorComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 30; i++) {
            this.onBallAdd();
        }
    };
    BallsGeneratorComponent.prototype.onBallAdd = function () {
        this.Balls.push(new __WEBPACK_IMPORTED_MODULE_1__models_ball_model__["a" /* Ball */](0, 0, Math.random() * 40 + 8, this.getRandomColor())); // random size
        // this.Balls.push( new Ball(0, 0, 15, this.getRandomColor()) ); // fixed size
    };
    /*
     * Remember offset of mouse pointer relative to the center
     */
    BallsGeneratorComponent.prototype.onMouseDown = function (e) {
        this.offsetX = e.offsetX;
        this.offsetY = e.offsetY;
    };
    /*
     * Remember ball parameters when drag starts
     */
    BallsGeneratorComponent.prototype.onDragStart = function (e, i) {
        e.dataTransfer.effectAllowed = "move";
        this.radius = this.Balls[i].radius;
        this.color = this.Balls[i].color;
    };
    /*
     * Remove ball from list when drag ends
     */
    BallsGeneratorComponent.prototype.onDragEnd = function (e, i) {
        this.radius = undefined;
        if (e.dataTransfer.dropEffect === "move") {
            this.Balls.splice(i, 1);
        }
    };
    BallsGeneratorComponent.prototype.getRandomColor = function () {
        return "hsl(" + Math.round(Math.random() * 255) + ", 80%, 50%)";
    };
    return BallsGeneratorComponent;
}());
BallsGeneratorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-balls-generator',
        template: __webpack_require__(150),
        styles: [__webpack_require__(145)]
    }),
    __metadata("design:paramtypes", [])
], BallsGeneratorComponent);

//# sourceMappingURL=balls-generator.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ball_model__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasComponent = (function () {
    function CanvasComponent() {
        this.interaction = true;
        this.shadow = false;
        this.dt = 1000 / 60; // ms
        // @ViewChild('myCanvasWrap') myCanvasWrap: ElementRef;
        this.Balls = [];
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.onResize();
        this.running = true;
        this.paint();
        // this.simulate();
    };
    CanvasComponent.prototype.ngOnDestroy = function () {
        this.running = false;
    };
    CanvasComponent.prototype.onDragOver = function (e) {
        e.preventDefault();
    };
    CanvasComponent.prototype.onDragDrop = function (e) {
        if (typeof (this.radius) !== 'undefined') {
            var x = e.offsetX - (this.offsetX - this.radius);
            var y = e.offsetY - (this.offsetY - this.radius);
            this.Balls.push(new __WEBPACK_IMPORTED_MODULE_1__models_ball_model__["a" /* Ball */](x, y, this.radius, this.color));
        }
        if (!this.running) {
            this.time = Date.now();
            this.running = true;
            this.paint();
            this.running = false;
        }
    };
    /*
     * Resize canvas
     */
    CanvasComponent.prototype.onResize = function () {
        this.canvasRef.nativeElement.style.width = '';
        this.canvasRef.nativeElement.style.height = '';
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.width = this.canvasRef.nativeElement.offsetWidth;
        this.height = this.canvasRef.nativeElement.offsetHeight;
        this.canvasRef.nativeElement.width = this.width;
        this.canvasRef.nativeElement.style.width = "auto";
        this.canvasRef.nativeElement.height = this.height;
        this.canvasRef.nativeElement.style.height = "auto";
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    /*
     * Get balls positions
     */
    CanvasComponent.prototype.simulate = function () {
        var _this = this;
        var t = this.time || Date.now();
        this.dt = Date.now() - t;
        this.time = Date.now();
        this.Balls.forEach(function (item, i) {
            var newX = item.x + _this.dt * item.Vx / 1000;
            var newY = item.y + _this.dt * item.Vy / 1000;
            // item.Vy += (this.dt / 1000) * 100;
            // x borders
            if (newX + item.radius > _this.width && item.Vx > 0) {
                newX = _this.width * 2 - newX - item.radius * 2;
                item.Vx *= -1;
            }
            else if (newX - item.radius < 0 && item.Vx < 0) {
                newX = -newX + item.radius * 2;
                item.Vx *= -1;
            }
            // y borders
            if (newY + item.radius > _this.height && item.Vy > 0) {
                newY = _this.height * 2 - newY - item.radius * 2;
                item.Vy *= -1;
            }
            else if (newY - item.radius < 0 && item.Vy < 0) {
                newY = -newY + item.radius * 2;
                item.Vy *= -1;
            }
            item.move(newX, newY);
        });
        if (this.interaction) {
            // interaction
            this.Balls.forEach(function (item, i) {
                for (var j = i + 1; j < _this.Balls.length; j++) {
                    var ball = _this.Balls[j];
                    if (_this.getDistanceBetweenDots(item.x, item.y, ball.x, ball.y) < item.radius + ball.radius) {
                        if (_this.getDistanceBetweenDots(item.prevX, item.prevY, ball.prevX, ball.prevY) > _this.getDistanceBetweenDots(item.x, item.y, ball.x, ball.y)) {
                            // console.log("P: ", Math.round(ball.Px + item.Px + ball.Py + item.Py), "E: ", Math.round(item.P * item.P / (2 * item.m) + ball.P * ball.P / (2 * ball.m)));
                            var tgA = (ball.y - item.y) / (ball.x - item.x);
                            var cosA = Math.cos(Math.atan(tgA));
                            var sinA = Math.sin(Math.atan(tgA));
                            // problem with energy saving
                            var Vi = item.Vy * sinA + item.Vx * cosA;
                            var Vb = ball.Vy * sinA + ball.Vx * cosA;
                            var ix = Vi * cosA * item.m;
                            var iy = Vi * sinA * item.m;
                            var bx = Vb * cosA * ball.m;
                            var by = Vb * sinA * ball.m;
                            if (Vi * Vb <= 0) {
                                item.Vx += (bx - ix) / item.m;
                                item.Vy += (by - iy) / item.m;
                                ball.Vx += (ix - bx) / ball.m;
                                ball.Vy += (iy - by) / ball.m;
                            }
                            else if (Math.abs(Vi) > Math.abs(Vb)) {
                                item.Vx += (-ix) / item.m;
                                item.Vy += (-iy) / item.m;
                                ball.Vx += (ix) / ball.m;
                                ball.Vy += (iy) / ball.m;
                            }
                            else if (Math.abs(Vb) > Math.abs(Vi)) {
                                item.Vx += (bx) / item.m;
                                item.Vy += (by) / item.m;
                                ball.Vx += (-bx) / ball.m;
                                ball.Vy += (-by) / ball.m;
                            }
                            item.move(item.prevX, item.prevY);
                            ball.move(ball.prevX, ball.prevY);
                            // console.log("P: ", Math.round(ball.Px + item.Px + ball.Py + item.Py), "E: ", Math.round(item.P * item.P / (2 * item.m) + ball.P * ball.P / (2 * ball.m)));
                            // console.log("------");
                        }
                    }
                }
            });
        }
    };
    /*
     * Draw circles on canvas
     */
    CanvasComponent.prototype.paint = function () {
        var _this = this;
        // Check that we're still running.
        if (!this.running) {
            return;
        }
        this.simulate();
        // Leave shadow after balls
        if (this.shadow) {
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
        else {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
        this.Balls.forEach(function (ball) {
            _this.ctx.beginPath();
            _this.ctx.fillStyle = ball.color;
            _this.ctx.moveTo(ball.x, ball.y);
            _this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            _this.ctx.fill();
        });
        requestAnimationFrame(function () { return _this.paint(); });
    };
    CanvasComponent.prototype.getDistanceBetweenDots = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    CanvasComponent.prototype.onStateChange = function () {
        this.running = !this.running;
        if (this.running) {
            this.time = Date.now();
            this.paint();
        }
        else {
            localStorage.setItem('balls', JSON.stringify(this.Balls));
        }
    };
    CanvasComponent.prototype.onSavedLoad = function () {
        var _this = this;
        var balls = JSON.parse(localStorage.getItem('balls'));
        this.Balls = [];
        balls.forEach(function (item) {
            _this.Balls.push(new __WEBPACK_IMPORTED_MODULE_1__models_ball_model__["a" /* Ball */](item.x, item.y, item.radius, item.color, item.Vx, item.Vy));
        });
        this.running = true;
        this.time = Date.now();
        this.paint();
        this.running = false;
    };
    CanvasComponent.prototype.onClear = function () {
        this.Balls = [];
        this.time = undefined;
        this.ctx.clearRect(0, 0, this.width, this.height);
        console.clear();
    };
    return CanvasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "offsetX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "offsetY", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "radius", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CanvasComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('myCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], CanvasComponent.prototype, "canvasRef", void 0);
CanvasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__(151),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [])
], CanvasComponent);

var _a;
//# sourceMappingURL=canvas.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[180]);
//# sourceMappingURL=main.bundle.js.map