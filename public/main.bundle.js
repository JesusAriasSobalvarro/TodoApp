webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_ALL_TODOS; });
var ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"app\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h3 class=\"card-title\">Todos App</h3>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Using Angular and Redux</h6>\n      <app-todo-overview></app-todo-overview>\n      <app-todo-list></app-todo-list>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_overview_todo_overview_component__ = __webpack_require__("../../../../../src/app/todo-overview/todo-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_4__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_4__store__["a" /* INITIAL_STATE */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_overview_todo_overview_component__["a" /* TodoOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__["a" /* TodoListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/actions.ts");

var INITIAL_STATE = {
    todos: [],
    lastUpdate: null
};
function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* TOGGLE_TODO */]:
            var todo = state.todos.find(function (t) { return t.id === action.id; });
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: state.todos.slice(0, index).concat([
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                ], state.todos.slice(index + 1)),
                lastUpdate: new Date()
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* REMOVE_TODO */]:
            return Object.assign({}, state, {
                todos: state.todos.filter(function (t) { return t.id !== action.id; }),
                lastUpdate: new Date()
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* REMOVE_ALL_TODOS */]:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".completed {\r\n    text-decoration: line-through;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h6>Create Todo:</h6>\n<form (ngSubmit)=\"onSubmit()\" #todoForm=\"ngForm\">\n    <div class=\"form-row\">\n        <div class=\"col-auto\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Description\" \n          id=\"description\" \n          [(ngModel)]=\"model.description\" \n          name=\"description\" \n          #description=\"ngModel\">\n        </div>\n        <div class=\"col-auto\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Responsible\" \n          id=\"responsinble\" \n          [(ngModel)]=\"model.responsible\" \n          name=\"responsible\" \n          #description=\"ngModel\">\n        </div>\n        <div class=\"col-auto\">\n          <select class=\"form-control\" \n          id=\"priority\"\n          [(ngModel)]=\"model.priority\"\n          name=\"priority\"\n          #priority=\"ngModel\">\n          <option value=\"low\">Low</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"high\">High</option>\n          </select>\n        </div>\n        <div class=\"col-auto\">\n          <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n        </div>\n      </div>\n</form>\n<br>\n<h6>Todos List:</h6>\n<div *ngIf=\"(todos | async)?.length!=0\">\n  <table class=\"table\">\n    <thead class=\"thead-inverse\">\n      <tr>\n        <th>#</th>\n        <th>Todo Description</th>\n        <th>Responsible</th>\n        <th>Priority</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of todos | async\">\n        <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.id }}</span></td>\n        <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.description }}</span></td>\n        <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.responsible }}</span></td>\n        <td>\n          <span *ngIf=\"t.priority == 'low'\" class=\"badge badge-success\">Low</span>\n          <span *ngIf=\"t.priority == 'medium'\" class=\"badge badge-warning\">Medium</span>\n          <span *ngIf=\"t.priority == 'high'\" class=\"badge badge-danger\">High</span>\n        </td>\n        <td><button class=\"btn btn-primary\" (click)=\"removeTodo(t)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.model = {
            id: 0,
            description: '',
            responsible: '',
            priority: "low",
            isCompleted: false
        };
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.onSubmit = function () {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ADD_TODO */],
            todo: this.model
        });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* TOGGLE_TODO */],
            id: todo.id
        });
    };
    TodoListComponent.prototype.removeTodo = function (todo) {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* REMOVE_TODO */],
            id: todo.id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "todos", void 0);
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-overview/todo-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-overview/todo-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"text-right\">\n  <span class=\"badge badge-secondary\">Last Update: {{ (lastUpdate | async) | date:'mediumTime' }} | Number Of Items: {{ (todos | async).length }}</span>\n</p>\n<button class=\"btn btn-primary\" (click)=\"clearTodos()\">Delete All</button>\n"

/***/ }),

/***/ "../../../../../src/app/todo-overview/todo-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoOverviewComponent = /** @class */ (function () {
    function TodoOverviewComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    TodoOverviewComponent.prototype.ngOnInit = function () {
    };
    TodoOverviewComponent.prototype.clearTodos = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* REMOVE_ALL_TODOS */] });
        console.log('I WORK');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], TodoOverviewComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], TodoOverviewComponent.prototype, "lastUpdate", void 0);
    TodoOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-overview',
            template: __webpack_require__("../../../../../src/app/todo-overview/todo-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-overview/todo-overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], TodoOverviewComponent);
    return TodoOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map