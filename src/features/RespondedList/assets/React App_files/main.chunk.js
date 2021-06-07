(this["webpackJsonphomework"] = this["webpackJsonphomework"] || []).push([["main"],{

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-styles */ "./src/global-styles.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/app/router.tsx");
/* harmony import */ var features_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/Layout */ "./src/features/Layout/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var config_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! config/store */ "./src/config/store.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var pages_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/Auth */ "./src/pages/Auth/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/app/index.tsx";








const store = Object(config_store__WEBPACK_IMPORTED_MODULE_5__["configureAppStore"])(); // TODO. make router right way

function App() {
  const isLoggedIn = true;
  const Private = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
  const prefix =  false ? undefined : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, isLoggedIn ? Private : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: `${prefix}/auth`,
    exact: true,
    component: pages_Auth__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_styles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app/router.tsx":
/*!****************************!*\
  !*** ./src/app/router.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var pages_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/Users */ "./src/pages/Users/index.tsx");
/* harmony import */ var pages_AddUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/AddUser */ "./src/pages/AddUser/index.tsx");
/* harmony import */ var pages_Orgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/Orgs */ "./src/pages/Orgs/index.tsx");
/* harmony import */ var pages_AddOrgPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/AddOrgPage */ "./src/pages/AddOrgPage/index.tsx");
/* harmony import */ var pages_SupportPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/SupportPage */ "./src/pages/SupportPage/index.tsx");
/* harmony import */ var pages_Catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/Catalog */ "./src/pages/Catalog/index.tsx");
/* harmony import */ var pages_CatalogAdd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages/CatalogAdd */ "./src/pages/CatalogAdd/index.tsx");
/* harmony import */ var pages_Events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pages/Events */ "./src/pages/Events/index.tsx");
/* harmony import */ var pages_EventsAdd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pages/EventsAdd */ "./src/pages/EventsAdd/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/app/router.tsx";











function Router(props) {
  const prefix =  false ? undefined : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/users`,
    exact: true,
    component: pages_Users__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/users/add-user`,
    component: pages_AddUser__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/orgs`,
    exact: true,
    component: pages_Orgs__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/orgs/add-org`,
    component: pages_AddOrgPage__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/support`,
    component: pages_SupportPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/catalog`,
    exact: true,
    component: pages_Catalog__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/catalog/add`,
    component: pages_CatalogAdd__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/events`,
    exact: true,
    component: pages_Events__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/events`,
    component: pages_EventsAdd__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/assets/arrow.svg":
/*!******************************!*\
  !*** ./src/assets/arrow.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow.dc7fd870.svg";

/***/ }),

/***/ "./src/assets/big_stars.png":
/*!**********************************!*\
  !*** ./src/assets/big_stars.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/big_stars.380300f6.png";

/***/ }),

/***/ "./src/assets/blackPlus.svg":
/*!**********************************!*\
  !*** ./src/assets/blackPlus.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blackPlus.4eb9fa9f.svg";

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/plus.a38651d6.svg";

/***/ }),

/***/ "./src/assets/spinner.gif":
/*!********************************!*\
  !*** ./src/assets/spinner.gif ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.f9712eb7.gif";

/***/ }),

/***/ "./src/assets/stars.png":
/*!******************************!*\
  !*** ./src/assets/stars.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/common/fonts/MuseoSansCyrl-500.ttf":
/*!************************************************!*\
  !*** ./src/common/fonts/MuseoSansCyrl-500.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MuseoSansCyrl-500.473e3212.ttf";

/***/ }),

/***/ "./src/common/fonts/MuseoSansCyrl-700.ttf":
/*!************************************************!*\
  !*** ./src/common/fonts/MuseoSansCyrl-700.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/MuseoSansCyrl-700.75a016c8.ttf";

/***/ }),

/***/ "./src/common/fonts/museoBold.woff":
/*!*****************************************!*\
  !*** ./src/common/fonts/museoBold.woff ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/museoBold.44212f31.woff";

/***/ }),

/***/ "./src/common/fonts/museoLight.woff":
/*!******************************************!*\
  !*** ./src/common/fonts/museoLight.woff ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/museoLight.b35aa308.woff";

/***/ }),

/***/ "./src/common/fonts/museoRegular.ttf":
/*!*******************************************!*\
  !*** ./src/common/fonts/museoRegular.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/museoRegular.c2e5987a.ttf";

/***/ }),

/***/ "./src/common/fonts/museoRegular.woff":
/*!********************************************!*\
  !*** ./src/common/fonts/museoRegular.woff ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/museoRegular.76cbc362.woff";

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const colors = {
  primary: "#FF5A57",
  secondary: "#FFC400",
  black: "#2f2f2f",
  gray: "#4F4F4F"
};

/***/ }),

/***/ "./src/config/rootReducer.ts":
/*!***********************************!*\
  !*** ./src/config/rootReducer.ts ***!
  \***********************************/
/*! exports provided: createReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var features_Navigation_duck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/Navigation/duck */ "./src/features/Navigation/duck/index.ts");
/* harmony import */ var features_AddUserForm_duck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AddUserForm/duck */ "./src/features/AddUserForm/duck/index.ts");
/* harmony import */ var ducks_sieve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ducks/sieve */ "./src/ducks/sieve/index.ts");




function createReducer() {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({ ...features_Navigation_duck__WEBPACK_IMPORTED_MODULE_1__["default"],
    ...ducks_sieve__WEBPACK_IMPORTED_MODULE_3__["default"],
    ...features_AddUserForm_duck__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
}

/***/ }),

/***/ "./src/config/store.ts":
/*!*****************************!*\
  !*** ./src/config/store.ts ***!
  \*****************************/
/*! exports provided: configureAppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureAppStore", function() { return configureAppStore; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/config/rootReducer.ts");


function configureAppStore() {
  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: Object(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(),
    middleware: [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["getDefaultMiddleware"])()],
    devTools: "development" !== "production"
  });
  return store;
}

/***/ }),

/***/ "./src/ducks/sieve/index.ts":
/*!**********************************!*\
  !*** ./src/ducks/sieve/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/ducks/sieve/slice.ts");


const reducers = {
  sieve: _slice__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const combined = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./src/ducks/sieve/selectors.ts":
/*!**************************************!*\
  !*** ./src/ducks/sieve/selectors.ts ***!
  \**************************************/
/*! exports provided: sievesSelector, selectSieveByType, selectFilter, selectSort, selectFilteredData, selectSortedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sievesSelector", function() { return sievesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSieveByType", function() { return selectSieveByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilter", function() { return selectFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSort", function() { return selectSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredData", function() { return selectFilteredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortedData", function() { return selectSortedData; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const sievesSelector = state => state.sieve;
const selectSieveByType = type => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sievesSelector, state => state[type]); // TODO

const selectFilter = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sievesSelector, state => state.filter);
const selectSort = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sievesSelector, state => state.sort);

const StringifyValues = items => items.map(item => Object.keys(item).reduce((accum, key) => ({ ...accum,
  [key]: item[key].toString()
}), {})); // TODO. type for entities. generic??


const selectFilteredData = entities => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilter, sieve => StringifyValues(entities).filter(item => {
  let filterPassed = true;
  sieve === null || sieve === void 0 ? void 0 : sieve.forEach(sieveItem => {
    const sieveKey = Object.keys(sieveItem)[0];

    if (!item[sieveKey].includes(sieveItem[sieveKey])) {
      filterPassed = false;
    }
  });
  return filterPassed;
})); // TODO.

const selectSortedData = entities => {
  Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilteredData(entities), selectSort, (filteredData, sortSieve) => filteredData.sort((prev, next) => prev[Object.keys(sortSieve)[0]].localCompare(next[Object.keys(sortSieve)[0]])));
};

/***/ }),

/***/ "./src/ducks/sieve/slice.ts":
/*!**********************************!*\
  !*** ./src/ducks/sieve/slice.ts ***!
  \**********************************/
/*! exports provided: setFilter, changeFilterValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilterValue", function() { return changeFilterValue; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const intititalState = {
  filter: [],
  sort: {
    key: "",
    value: ""
  }
};
const organizatonsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "sieve",
  initialState: intititalState,
  reducers: {
    setFilter(state, {
      payload
    }) {
      const {
        key
      } = payload;
      state.filter.push({
        [key]: ""
      });
    },

    changeFilterValue(state, {
      payload
    }) {
      const {
        key,
        value
      } = payload;
      state.filter = state.filter.map(item => Object.keys(item)[0] === key ? {
        [Object.keys(item)[0]]: value
      } : item);
    },

    setSort(state, {
      payload
    }) {
      state.sort = payload;
    },

    changeSort(state, {
      payload
    }) {
      state.sort[Object.keys(state.sort)[0]] = payload.value;
    },

    clearSieves(state) {}

  }
});
const {
  setFilter,
  changeFilterValue
} = organizatonsSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (organizatonsSlice.reducer);

/***/ }),

/***/ "./src/ducks/sieve/types.ts":
/*!**********************************!*\
  !*** ./src/ducks/sieve/types.ts ***!
  \**********************************/
/*! exports provided: SortDirection, SieveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SieveType", function() { return SieveType; });
let SortDirection;

(function (SortDirection) {
  SortDirection["Up"] = "up";
  SortDirection["Down"] = "down";
})(SortDirection || (SortDirection = {}));

let SieveType;

(function (SieveType) {
  SieveType["Sort"] = "sort";
  SieveType["Filter"] = "filter";
})(SieveType || (SieveType = {}));

/***/ }),

/***/ "./src/features/AddOrg/index.tsx":
/*!***************************************!*\
  !*** ./src/features/AddOrg/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/AddOrg/view.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddOrg/index.tsx";



function AddOrg() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AddOrg);

/***/ }),

/***/ "./src/features/AddOrg/styled.ts":
/*!***************************************!*\
  !*** ./src/features/AddOrg/styled.ts ***!
  \***************************************/
/*! exports provided: Wrapper, MainArea, Row, Left, Right, Partner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainArea", function() { return MainArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partner", function() { return Partner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const MainArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  label {
    margin-right: 25px;
  }
`;
const Left = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-column: span 7;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-column: span 4;
  padding-left: 30px;
`;
const Partner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 100%;
`;

/***/ }),

/***/ "./src/features/AddOrg/view.tsx":
/*!**************************************!*\
  !*** ./src/features/AddOrg/view.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/features/AddOrg/styled.ts");
/* harmony import */ var parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/FormGenerator */ "./src/parts/FormGenerator/index.tsx");
/* harmony import */ var parts_BackSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/BackSection */ "./src/parts/BackSection/index.tsx");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/UpoadFile */ "./src/parts/UpoadFile/index.tsx");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
/* harmony import */ var parts_DoubleInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! parts/DoubleInput */ "./src/parts/DoubleInput/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddOrg/view.tsx";









function AddOrgView() {
  const [generalRef, setGeneralRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [contactRef, setContactRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [formalRef, setFormalRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const submitAll = () => {
    generalRef === null || generalRef === void 0 ? void 0 : generalRef.current.handleSubmit();
    contactRef === null || contactRef === void 0 ? void 0 : contactRef.current.handleSubmit();
    formalRef === null || formalRef === void 0 ? void 0 : formalRef.current.handleSubmit();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_BackSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    offsetLeft: 60,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 (251489):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["MainArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: {
      title: "Общее",
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "name",
        label: "Название"
      }, {
        name: "ageFrom",
        label: "Возраст от",
        type: "select",
        col: 3,
        options: [{
          name: "asd",
          value: "qwew"
        }]
      }, {
        name: "ageTo",
        label: "Возраст до",
        type: "select",
        col: 3,
        options: [{
          name: "asd",
          value: "qwew"
        }]
      }, {
        name: "description",
        label: "Описание"
      }, {
        name: "directions",
        label: "Направления"
      }, {
        name: "schedule",
        label: "Расписание",
        type: "select",
        options: [{
          name: "asd",
          value: "qwew"
        }]
      }, {
        name: "category",
        label: "Категория"
      }]
    },
    onSubmit: values => {
      console.log(values);
    },
    setRef: setGeneralRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    offsetLeft: 40,
    marginBottom: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_DoubleInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: {
      title: "Контакты",
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "adress",
        label: "Адрес"
      }, {
        name: "phone",
        label: "Телефон"
      }, {
        name: "email",
        label: "Email"
      }, {
        name: "site",
        label: "Сайт"
      }]
    },
    onSubmit: values => {
      console.log(values);
    },
    setRef: setContactRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    config: {
      title: "Юридические данные",
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "formalName",
        label: "Юр.Лицо"
      }, {
        name: "billingAdress",
        label: "Расчетный счет"
      }, {
        name: "INN",
        label: "ИНН"
      }, {
        name: "OGRN",
        label: "ОГРН"
      }, {
        name: "formalAdress",
        label: "Юр. адрес"
      }]
    },
    onSubmit: values => {
      console.log(values);
    },
    setRef: setFormalRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0433\u043E\u0442\u0438\u043F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "\u0444\u043E\u0442\u043E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
    file: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
    file: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442",
    file: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["ButtonsArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: submitAll,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0431\u044B\u0442\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AddOrgView);

/***/ }),

/***/ "./src/features/AddUserForm/components/ChildControls.tsx":
/*!***************************************************************!*\
  !*** ./src/features/AddUserForm/components/ChildControls.tsx ***!
  \***************************************************************/
/*! exports provided: ChildControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildControls", function() { return ChildControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/features/AddUserForm/styled.ts");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddUserForm/components/ChildControls.tsx";



const ChildControls = ({
  childrenData,
  childFormRef
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ChildArea"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }
}, childrenData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ChildData"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Name"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}, `${item.name} ${item.surname}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ChildType"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, "\u041A\u0430\u0441\u0442\u0438\u043D\u0433"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["GlassCard"], {
  style: {
    marginRight: "10px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["AddFormButton"], {
  onClick: childFormRef === null || childFormRef === void 0 ? void 0 : childFormRef.current.handleSubmit,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443 \u0440\u0435\u0431\u0435\u043D\u043A\u0430")));

/***/ }),

/***/ "./src/features/AddUserForm/components/StatusArea.tsx":
/*!************************************************************!*\
  !*** ./src/features/AddUserForm/components/StatusArea.tsx ***!
  \************************************************************/
/*! exports provided: StatusArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusArea", function() { return StatusArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/features/AddUserForm/styled.ts");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddUserForm/components/StatusArea.tsx";



const StatusArea = ({
  tariff,
  status
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StatusSection"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["Tariff"], {
  type: "premium",
  style: {
    marginRight: "10px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, tariff), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["Status"], {
  active: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, status));

/***/ }),

/***/ "./src/features/AddUserForm/duck/index.ts":
/*!************************************************!*\
  !*** ./src/features/AddUserForm/duck/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/features/AddUserForm/duck/slice.ts");


const reducers = {
  addUserForm: _slice__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const combined = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./src/features/AddUserForm/duck/selectors.ts":
/*!****************************************************!*\
  !*** ./src/features/AddUserForm/duck/selectors.ts ***!
  \****************************************************/
/*! exports provided: AddUserFormSelector, selectChildrenArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserFormSelector", function() { return AddUserFormSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectChildrenArray", function() { return selectChildrenArray; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const AddUserFormSelector = state => state.addUserForm;
const selectChildrenArray = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(AddUserFormSelector, state => state.childrenData);

/***/ }),

/***/ "./src/features/AddUserForm/duck/slice.ts":
/*!************************************************!*\
  !*** ./src/features/AddUserForm/duck/slice.ts ***!
  \************************************************/
/*! exports provided: initialState, addChildData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addChildData", function() { return addChildData; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  childrenData: [{
    name: "Виктория",
    surname: "Шуткина"
  }],
  userData: null
};
const addUserFormSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "addUserForm",
  initialState: initialState,
  reducers: {
    addChildData(state, {
      payload
    }) {
      state.childrenData.push(payload);
    }

  }
});
const {
  addChildData
} = addUserFormSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (addUserFormSlice.reducer);

/***/ }),

/***/ "./src/features/AddUserForm/index.tsx":
/*!********************************************!*\
  !*** ./src/features/AddUserForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/AddUserForm/view.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddUserForm/index.tsx";



function AddUserForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AddUserForm);

/***/ }),

/***/ "./src/features/AddUserForm/styled.ts":
/*!********************************************!*\
  !*** ./src/features/AddUserForm/styled.ts ***!
  \********************************************/
/*! exports provided: Wrapper, Header, Footer, StatusSection, Content, Top, Left, Right, Title, Item, Section, AddFormButton, ChildArea, ChildData, Name, ChildType, Interests, MediaSection, MediaRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusSection", function() { return StatusSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top", function() { return Top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormButton", function() { return AddFormButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildArea", function() { return ChildArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildData", function() { return ChildData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildType", function() { return ChildType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interests", function() { return Interests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSection", function() { return MediaSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRow", function() { return MediaRow; });
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var assets_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__);



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
`;
const StatusSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const Top = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: span 12;
  padding-left: 60px;
`;
const Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: span 7;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: span 3;
  padding-left: 30px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2`
  grid-column: span 12;
  width: 100%;
  text-transform: uppercase;
  color: #51535e;
  font-weight: 500;
  font-size: 16px;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: span ${props => props.col || 6};
  padding: 0 10px;
  margin-bottom: 10px;
`;
const Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(parts_styled__WEBPACK_IMPORTED_MODULE_0__["GlassCard"])`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const AddFormButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  border: none;
  display: block;
  text-align: left;
  position: relative;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px;
  width: 212px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  background-color: transparent;
  line-height: 24px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
    background-image: url(${assets_plus_svg__WEBPACK_IMPORTED_MODULE_2___default.a});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const ChildArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-grow: 1;
`;
const ChildData = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(parts_styled__WEBPACK_IMPORTED_MODULE_0__["GlassCard"])`
  width: 212px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
  padding: 20px;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
`;
const ChildType = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 14px;
  font-weight: 400;
`;
const Interests = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(parts_styled__WEBPACK_IMPORTED_MODULE_0__["GlassCard"])`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: 40px;
  min-height: 80px;
`;
const MediaSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
const MediaRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

/***/ }),

/***/ "./src/features/AddUserForm/view.tsx":
/*!*******************************************!*\
  !*** ./src/features/AddUserForm/view.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/features/AddUserForm/styled.ts");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
/* harmony import */ var parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/UpoadFile */ "./src/parts/UpoadFile/index.tsx");
/* harmony import */ var parts_FormGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/FormGenerator */ "./src/parts/FormGenerator/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _duck_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duck/selectors */ "./src/features/AddUserForm/duck/selectors.ts");
/* harmony import */ var parts_BackSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! parts/BackSection */ "./src/parts/BackSection/index.tsx");
/* harmony import */ var _duck_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duck/slice */ "./src/features/AddUserForm/duck/slice.ts");
/* harmony import */ var _components_ChildControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ChildControls */ "./src/features/AddUserForm/components/ChildControls.tsx");
/* harmony import */ var _components_StatusArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/StatusArea */ "./src/features/AddUserForm/components/StatusArea.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AddUserForm/view.tsx";














function AddUserFormView() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const children = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_duck_selectors__WEBPACK_IMPORTED_MODULE_7__["selectChildrenArray"]);
  const [userFormRef, setUserRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [childFormRef, setChildRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_BackSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChildControls__WEBPACK_IMPORTED_MODULE_10__["ChildControls"], {
    childrenData: children,
    childFormRef: childFormRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StatusArea__WEBPACK_IMPORTED_MODULE_11__["StatusArea"], {
    tariff: "PRO",
    status: "\u0410\u043A\u0442\u0438\u0432\u0435\u043D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Top"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C (id 6942719):")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: {
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "fullName",
        label: "ФИО"
      }, {
        name: "phone",
        label: "Телефон"
      }, {
        name: "email",
        label: "E-mail"
      }, {
        name: "login",
        label: "Логин"
      }, {
        name: "password",
        label: "Пароль"
      }]
    },
    setRef: setUserRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["GlassCard"], {
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Interests"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "One"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Top"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "\u0410\u043D\u043A\u0435\u0442\u0430 \u0440\u0435\u0431\u0435\u043D\u043A\u0430 (421123):")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    config: {
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "name",
        label: "Имя"
      }, {
        name: "surname",
        label: "Фамилия"
      }, {
        name: "hairColor",
        options: [{
          name: "asd",
          value: "some"
        }],
        label: "Цвет волос",
        col: 3,
        type: "select"
      }, {
        name: "hairLength",
        label: "Длина волос",
        options: [{
          name: "asd",
          value: "some"
        }],
        col: 3,
        type: "select"
      }, {
        name: "gender",
        label: "Пол",
        col: 3,
        options: [{
          name: "asd",
          value: "some"
        }, {
          name: "qew",
          value: "123"
        }],
        type: "select"
      }, {
        name: "height",
        label: "Рост",
        options: [{
          name: "asd",
          value: "some"
        }],
        col: 3,
        type: "select"
      }, {
        name: "eyeColor",
        label: "Цвет глаз"
      }, {
        name: "birthDate",
        label: "Дата рождения"
      }, {
        name: "socialLinks",
        label: "Соц.сети"
      }, {
        name: "experience",
        label: "Опыт"
      }, {
        name: "skills",
        label: "Навыки"
      }, {
        name: "apperanceType",
        label: "Тип внешности"
      }]
    },
    onSubmit: values => {
      dispatch(Object(_duck_slice__WEBPACK_IMPORTED_MODULE_9__["addChildData"])(values));
    },
    setRef: setChildRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "\u0424\u043E\u0442\u043E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["MediaSection"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["MediaRow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["MediaRow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "\u0412\u0438\u0434\u0435\u043E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["MediaRow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonsArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: userFormRef === null || userFormRef === void 0 ? void 0 : userFormRef.current.handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AddUserFormView);

/***/ }),

/***/ "./src/features/AuthForm/index.tsx":
/*!*****************************************!*\
  !*** ./src/features/AuthForm/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/AuthForm/view.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AuthForm/index.tsx";



function AuthForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

/***/ }),

/***/ "./src/features/AuthForm/styled.ts":
/*!*****************************************!*\
  !*** ./src/features/AuthForm/styled.ts ***!
  \*****************************************/
/*! exports provided: Wrapper, FromArea, Fields, FieldLabel, AuthButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromArea", function() { return FromArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldLabel", function() { return FieldLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthButton", function() { return AuthButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var assets_big_stars_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/big_stars.png */ "./src/assets/big_stars.png");
/* harmony import */ var assets_big_stars_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_big_stars_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${assets_big_stars_png__WEBPACK_IMPORTED_MODULE_2___default.a});
  background-size: cover;
`;
const FromArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 275px;
  height: 300px;
  flex-direction: column;
  align-items: center;
`;
const Fields = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  padding: 35px 0;
`;
const FieldLabel = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
`;
const AuthButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  width: 100%;
  padding: 17px;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  box-shadow: 0px 5px 20px 0px #ff5a57;
  background-color: ${config_constants__WEBPACK_IMPORTED_MODULE_3__["colors"].primary};
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  &:active {
    background-color: ${Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.1, config_constants__WEBPACK_IMPORTED_MODULE_3__["colors"].primary)};
  }
`;

/***/ }),

/***/ "./src/features/AuthForm/view.tsx":
/*!****************************************!*\
  !*** ./src/features/AuthForm/view.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/features/AuthForm/styled.ts");
/* harmony import */ var parts_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/Input */ "./src/parts/Input/index.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var parts_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/Logo */ "./src/parts/Logo/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/AuthForm/view.tsx";







function AuthFormView() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: () => {},
    initialValues: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["FromArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Fields"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["FieldLabel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "\u041B\u043E\u0433\u0438\u043D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    centered: true,
    name: "one",
    placeholder: "---",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["FieldLabel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    centered: true,
    name: "two",
    placeholder: "---",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["AuthButton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "\u0412\u043E\u0439\u0442\u0438"))));
}

/* harmony default export */ __webpack_exports__["default"] = (AuthFormView);

/***/ }),

/***/ "./src/features/Layout/index.tsx":
/*!***************************************!*\
  !*** ./src/features/Layout/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/features/Layout/styled.ts");
/* harmony import */ var features_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/Navigation */ "./src/features/Navigation/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Layout/index.tsx";




function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Body"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/features/Layout/styled.ts":
/*!***************************************!*\
  !*** ./src/features/Layout/styled.ts ***!
  \***************************************/
/*! exports provided: Wrapper, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  overflow: hidden;
  background: linear-gradient(180deg, #fed98e 0%, #fdb67f 50%, #fd9693 100%);
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex-grow: 1;
  max-width: calc(100vw - 150px);
  box-sizing: border-box;
  padding: 25px 20px;
  padding-bottom: 0px;
  overflow: scroll;
`;

/***/ }),

/***/ "./src/features/Navigation/assets/avo.png":
/*!************************************************!*\
  !*** ./src/features/Navigation/assets/avo.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/features/Navigation/assets/logout.svg":
/*!***************************************************!*\
  !*** ./src/features/Navigation/assets/logout.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logout.363a8fdd.svg";

/***/ }),

/***/ "./src/features/Navigation/assets/profileBg.svg":
/*!******************************************************!*\
  !*** ./src/features/Navigation/assets/profileBg.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profileBg.f8d3d7e6.svg";

/***/ }),

/***/ "./src/features/Navigation/assets/sprite.svg":
/*!***************************************************!*\
  !*** ./src/features/Navigation/assets/sprite.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sprite.68f13b38.svg";

/***/ }),

/***/ "./src/features/Navigation/components/NavItem.tsx":
/*!********************************************************!*\
  !*** ./src/features/Navigation/components/NavItem.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ "./src/features/Navigation/styled.ts");
/* harmony import */ var _assets_sprite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sprite.svg */ "./src/features/Navigation/assets/sprite.svg");
/* harmony import */ var _assets_sprite_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sprite_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Navigation/components/NavItem.tsx";




function NavItem({
  to,
  iconId,
  children,
  color,
  active,
  onClick
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Item"], {
    to: to,
    activeClassName: "nav-item-active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["IconSVG"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    href: `${_assets_sprite_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#${iconId}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["BackSVG"], {
    viewBox: "0 0 144 160",
    active: active,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 54.819C0 46.5347 6.71573 39.819 15 39.819H114L116.677 39.8536C130.609 40.0337 142 28.7892 142 14.8557V0V80.362V160V145.905C142 132.098 130.807 120.905 117 120.905H114H15C6.71573 120.905 0 114.189 0 105.905V54.819Z",
    fill: color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), children));
}

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./src/features/Navigation/duck/index.ts":
/*!***********************************************!*\
  !*** ./src/features/Navigation/duck/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./src/features/Navigation/duck/slice.ts");


const reducers = {
  navigation: _slice__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const combined = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./src/features/Navigation/duck/slice.ts":
/*!***********************************************!*\
  !*** ./src/features/Navigation/duck/slice.ts ***!
  \***********************************************/
/*! exports provided: initialState, toggleOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleOpen", function() { return toggleOpen; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  isOpen: true
};
const navigationSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "navigation",
  initialState: initialState,
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    }

  }
});
const {
  toggleOpen
} = navigationSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (navigationSlice.reducer);

/***/ }),

/***/ "./src/features/Navigation/index.tsx":
/*!*******************************************!*\
  !*** ./src/features/Navigation/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/features/Navigation/styled.ts");
/* harmony import */ var parts_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/Logo */ "./src/parts/Logo/index.tsx");
/* harmony import */ var _components_NavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavItem */ "./src/features/Navigation/components/NavItem.tsx");
/* harmony import */ var _assets_avo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/avo.png */ "./src/features/Navigation/assets/avo.png");
/* harmony import */ var _assets_avo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_avo_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Navigation/index.tsx";






function Navigation() {
  const initialState = [{
    label: "Управление каталогом",
    to: "/catalog",
    iconId: "cast",
    color: "#FEC586",
    active: true
  }, {
    label: "Пользователи",
    to: "/users",
    iconId: "users",
    color: "#FCBF83",
    active: false
  }, {
    label: "Организации",
    to: "/orgs",
    iconId: "orgs",
    color: "#FDB880",
    active: false
  }, {
    label: "События",
    to: "/events",
    iconId: "events",
    color: "#FDB381",
    active: false
  }, {
    label: "Поддержка",
    to: "/support",
    iconId: "support",
    color: "#FDA987",
    active: false
  }];
  const [menuItems, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);

  const setActive = label => {
    setItems(menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(item => {
      if (!item.active && item.label !== label) return item;
      return item.active ? { ...item,
        active: false
      } : { ...item,
        active: true
      };
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Head"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["NavList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map(({
    label,
    to,
    iconId,
    color,
    active
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: label,
    to: to,
    iconId: iconId,
    color: color,
    active: active,
    onClick: () => {
      if (!active) setActive(label);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Profile"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: _assets_avo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Name"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "\u041F\u0435\u0442\u0440\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Name"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Exit"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "\u0412\u044B\u0445\u043E\u0434")));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/features/Navigation/styled.ts":
/*!*******************************************!*\
  !*** ./src/features/Navigation/styled.ts ***!
  \*******************************************/
/*! exports provided: Wrapper, Head, NavList, IconSVG, BackSVG, Footer, Item, Profile, Avatar, Name, Exit, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSVG", function() { return IconSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackSVG", function() { return BackSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exit", function() { return Exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_stars_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/stars.png */ "./src/assets/stars.png");
/* harmony import */ var assets_stars_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_stars_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_profileBg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/profileBg.svg */ "./src/features/Navigation/assets/profileBg.svg");
/* harmony import */ var _assets_profileBg_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_profileBg_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_logout_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/logout.svg */ "./src/features/Navigation/assets/logout.svg");
/* harmony import */ var _assets_logout_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_logout_svg__WEBPACK_IMPORTED_MODULE_4__);





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  width: 150px;
  z-index: 10;
  padding-top: 35px;
  background-color: #fff;
  transition: 0.3s all ease;
  overflow: hidden;
  background-image: url(${assets_stars_png__WEBPACK_IMPORTED_MODULE_2___default.a});
  background-size: cover;
`;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-right: -10px;
`;
const IconSVG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
  position: relative;
  z-index: 1;
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
`;
const BackSVG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
  opacity: 0;
  position: absolute;
  z-index: -1;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  path: {
    width: 100%;
  }
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  margin-right: -8px;
`;
const Item = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  &:visited {
    color: #000;
  }
  &.nav-item-active ${BackSVG} {
    opacity: 1;
  }
`;
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-size: 14px;
  &:after {
    content: "";
    position: absolute;
    top: -60px;
    left: 0;
    z-index: -1;
    display: block;
    width: 150px;
    height: 210px;
    background-image: url(${_assets_profileBg_svg__WEBPACK_IMPORTED_MODULE_3___default.a});
    background-image: url(${_assets_profileBg_svg__WEBPACK_IMPORTED_MODULE_3___default.a});
    background-size: 150px 240px;
    background-repeat: no-repeat;
    background-position: center 0;
  }
`;
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 44px;
  height: 44px;
  background-color: #444;
  background-image: url(${props => props.src});
  border-radius: 50%;
  margin-bottom: 5px;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 47px;
    height: 47px;
    border: 2px solid #dfe0eb;
    border-radius: 50%;
    left: -4px;
    top: -4px;
  }
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  font-weight: 600;
`;
const Exit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  color: #9fa2b4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  font-weight: 600;
  font-size: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 24px;
    background-image: url(${_assets_logout_svg__WEBPACK_IMPORTED_MODULE_4___default.a});
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  position: relative;
  z-index: 1;
  font-size: 16px;
  max-width: 330px;
  margin-bottom: 25px;
`;

/***/ }),

/***/ "./src/features/Support/components/Review.tsx":
/*!****************************************************!*\
  !*** ./src/features/Support/components/Review.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parts_FormGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parts/FormGenerator */ "./src/parts/FormGenerator/index.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled */ "./src/features/Support/styled.ts");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Support/components/Review.tsx";




const data = {
  status: "blocked",
  partner: "assd",
  date: "qwe",
  phone: "adsasd",
  email: "adsasd",
  reviewText: "reviewText",
  decision: "decision"
};

function Review() {
  const [reviewRef, setRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    transparent: true,
    config: {
      settings: {
        defaultType: "text",
        defaultCol: 6
      },
      fields: [{
        name: "partner",
        label: "Партнер"
      }, {
        name: "date",
        label: "Дата создания"
      }, {
        name: "phone",
        label: "Телефон"
      }, {
        name: "email",
        label: "E-mail"
      }, {
        name: "reviewText",
        label: "Текст обращения",
        type: "textarea",
        col: 12
      }, {
        name: "decision",
        label: "Решение по обращению",
        type: "textarea",
        col: 12
      }]
    },
    onSubmit: values => {
      console.log(values);
    },
    initialValues: data,
    setRef: setRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => {
      reviewRef === null || reviewRef === void 0 ? void 0 : reviewRef.current.handleSubmit();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
}

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./src/features/Support/index.tsx":
/*!****************************************!*\
  !*** ./src/features/Support/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/features/Support/view.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Support/index.tsx";



function Support() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Support);

/***/ }),

/***/ "./src/features/Support/styled.ts":
/*!****************************************!*\
  !*** ./src/features/Support/styled.ts ***!
  \****************************************/
/*! exports provided: Wrapper, ModalHeader, ModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f7caca;
  justify-content: space-between;
  text-align: center;
`;
const ModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: center;
`;

/***/ }),

/***/ "./src/features/Support/view.tsx":
/*!***************************************!*\
  !*** ./src/features/Support/view.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parts_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parts/Table */ "./src/parts/Table/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/features/Support/styled.ts");
/* harmony import */ var parts_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/Modal */ "./src/parts/Modal/index.tsx");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
/* harmony import */ var parts_ModalCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/ModalCard */ "./src/parts/ModalCard/index.tsx");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var _components_Review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Review */ "./src/features/Support/components/Review.tsx");
/* harmony import */ var assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blackPlus.svg */ "./src/assets/blackPlus.svg");
/* harmony import */ var assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/features/Support/view.tsx";










function SupportView() {
  const [isVisible, changeVisibility] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isVisible: isVisible,
    changeVisibility: changeVisibility,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_ModalCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["BackButton"], {
    onClick: () => {
      changeVisibility(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u2116 23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["Status"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "\u041D\u0435 \u0440\u0435\u0448\u0435\u043D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Review__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      padding: "15px",
      paddingTop: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: () => {
      changeVisibility(!isVisible);
    },
    icon: assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_0__["default"], {
    fields: [{
      label: "ID",
      key: "id",
      props: {
        textalign: "center",
        width: "7%"
      }
    }, {
      label: "Партнер",
      key: "partner",
      props: {
        width: "17%"
      },
      getComponent: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 37
        }
      }, text)
    }, {
      label: "Дата",
      key: "date",
      props: {
        width: "10%"
      }
    }, {
      label: "Телефон",
      key: "phone",
      props: {
        width: "13%"
      },
      getComponent: adress => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 39
        }
      }, adress)
    }, {
      label: "E-mail",
      key: "email",
      props: {
        width: "15%"
      }
    }, {
      label: "Текст",
      key: "text",
      props: {
        width: "25%"
      }
    }, {
      label: "Статус",
      key: "status",
      getComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["Status"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 33
        }
      }, "\u041D\u0435 \u0440\u0435\u0448\u0435\u043D")
    }],
    items: [{
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "+7 (927) 121 12 43",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      partner: "Продюсерский центр Максима Фадеева",
      date: "10.03.2020",
      phone: "ПартнеркА",
      email: "Новолесная ул. дом 3",
      text: "Кастинги",
      status: "sas"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportView);

/***/ }),

/***/ "./src/global-styles.ts":
/*!******************************!*\
  !*** ./src/global-styles.ts ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var common_fonts_museoLight_woff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/fonts/museoLight.woff */ "./src/common/fonts/museoLight.woff");
/* harmony import */ var common_fonts_museoLight_woff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_fonts_museoLight_woff__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_fonts_museoRegular_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/fonts/museoRegular.woff */ "./src/common/fonts/museoRegular.woff");
/* harmony import */ var common_fonts_museoRegular_woff__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_fonts_museoRegular_woff__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_fonts_museoRegular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/fonts/museoRegular.ttf */ "./src/common/fonts/museoRegular.ttf");
/* harmony import */ var common_fonts_museoRegular_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_fonts_museoRegular_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_fonts_MuseoSansCyrl_500_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/fonts/MuseoSansCyrl-500.ttf */ "./src/common/fonts/MuseoSansCyrl-500.ttf");
/* harmony import */ var common_fonts_MuseoSansCyrl_500_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_fonts_MuseoSansCyrl_500_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_fonts_MuseoSansCyrl_700_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/fonts/MuseoSansCyrl-700.ttf */ "./src/common/fonts/MuseoSansCyrl-700.ttf");
/* harmony import */ var common_fonts_MuseoSansCyrl_700_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_fonts_MuseoSansCyrl_700_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_fonts_museoBold_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/fonts/museoBold.woff */ "./src/common/fonts/museoBold.woff");
/* harmony import */ var common_fonts_museoBold_woff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_fonts_museoBold_woff__WEBPACK_IMPORTED_MODULE_6__);







const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

/* @font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${common_fonts_museoLight_woff__WEBPACK_IMPORTED_MODULE_1___default.a}) format('woff');
        font-weight: 300;
        font-style: normal;
    } */
@font-face {
    font-family: 'Museo';
    src: url(${common_fonts_museoRegular_ttf__WEBPACK_IMPORTED_MODULE_3___default.a}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Museo';
    src: url(${common_fonts_MuseoSansCyrl_500_ttf__WEBPACK_IMPORTED_MODULE_4___default.a}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Museo';
    src: url(${common_fonts_MuseoSansCyrl_700_ttf__WEBPACK_IMPORTED_MODULE_5___default.a}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
/* @font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${common_fonts_museoRegular_woff__WEBPACK_IMPORTED_MODULE_2___default.a}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
@font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${common_fonts_museoBold_woff__WEBPACK_IMPORTED_MODULE_6___default.a}) format('woff');
        font-weight: 700;
        font-style: normal;
    } */

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body, a, button, pre {
    font-family: 'Museo', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  a{
    text-decoration: none;
  }
  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/index.tsx";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
})), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/AddOrgPage/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/AddOrgPage/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/AddOrgPage/styled.ts");
/* harmony import */ var features_AddOrg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AddOrg */ "./src/features/AddOrg/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/AddOrgPage/index.tsx";




function Orgs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_AddOrg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Orgs);

/***/ }),

/***/ "./src/pages/AddOrgPage/styled.ts":
/*!****************************************!*\
  !*** ./src/pages/AddOrgPage/styled.ts ***!
  \****************************************/
/*! exports provided: Wrapper, OrgName, Adress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgName", function() { return OrgName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adress", function() { return Adress; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const OrgName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  max-width: 194px;
`;
const Adress = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  max-width: 125px;
`;

/***/ }),

/***/ "./src/pages/AddUser/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/AddUser/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/AddUser/styled.ts");
/* harmony import */ var features_AddUserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AddUserForm */ "./src/features/AddUserForm/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/AddUser/index.tsx";




function AddUser() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_AddUserForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AddUser);

/***/ }),

/***/ "./src/pages/AddUser/styled.ts":
/*!*************************************!*\
  !*** ./src/pages/AddUser/styled.ts ***!
  \*************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

/***/ }),

/***/ "./src/pages/Auth/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Auth/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/Auth/styled.ts");
/* harmony import */ var features_AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/AuthForm */ "./src/features/AuthForm/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Auth/index.tsx";




function Auth() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_AuthForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/pages/Auth/styled.ts":
/*!**********************************!*\
  !*** ./src/pages/Auth/styled.ts ***!
  \**********************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

/***/ }),

/***/ "./src/pages/Catalog/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Catalog/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/Catalog/styled.ts");
/* harmony import */ var parts_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/Table */ "./src/parts/Table/index.tsx");
/* harmony import */ var parts_AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/AddButton */ "./src/parts/AddButton/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Catalog/index.tsx";





function Catalog() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_AddButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "catalog/add",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fields: [{
      label: "ID",
      key: "id",
      props: {
        textalign: "center",
        width: "7%"
      }
    }, {
      label: "Название",
      key: "name",
      props: {
        width: "9%"
      }
    }, {
      label: "Иконка направления",
      key: "directionIcon",
      props: {
        width: "18%",
        textalign: "center"
      },
      getComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ImagePlaceholder"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      })
    }, {
      label: "Название планеты",
      key: "planetName",
      props: {
        width: "10%"
      }
    }, {
      label: "Иконка планеты",
      key: "planetIcon",
      props: {
        width: "18%",
        textalign: "center"
      },
      getComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ImagePlaceholder"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 33
        }
      })
    }, {
      label: "Название категории",
      key: "categoryName",
      props: {
        width: "12%"
      }
    }, {
      label: "Изображение категории",
      key: "categoryImage",
      props: {
        textalign: "center"
      },
      getComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ImagePlaceholder"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 33
        }
      })
    }],
    items: [{
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }, {
      id: 1,
      name: "Петров Константин Павлович",
      directionIcon: "",
      planetName: "ivan@mail.ru",
      planetIcon: "",
      categoryName: "Заблокирован",
      categoryImage: "Заблокирован"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./src/pages/Catalog/styled.ts":
/*!*************************************!*\
  !*** ./src/pages/Catalog/styled.ts ***!
  \*************************************/
/*! exports provided: Wrapper, ImagePlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePlaceholder", function() { return ImagePlaceholder; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const ImagePlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 44px;
  height: 44px;
  background-color: #ccc;
  border-radius: 50%;
`;

/***/ }),

/***/ "./src/pages/CatalogAdd/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/CatalogAdd/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/CatalogAdd/styled.ts");
/* harmony import */ var parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/FormGenerator */ "./src/parts/FormGenerator/index.tsx");
/* harmony import */ var parts_UpoadFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/UpoadFile */ "./src/parts/UpoadFile/index.tsx");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_BackSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/BackSection */ "./src/parts/BackSection/index.tsx");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/CatalogAdd/index.tsx";








function CatalogAdd() {
  const [formRef, setRef] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_BackSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    transparent: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    transparent: true,
    config: {
      settings: {
        defaultCol: 12,
        defaultType: "text"
      },
      fields: [{
        name: "name",
        label: "Название"
      }, {
        name: "planetName",
        label: "Название планеты"
      }, {
        name: "categoryName",
        label: "Название категории"
      }, {
        name: "category",
        label: "Категории",
        type: "select",
        options: [{
          name: "option one",
          value: "Value"
        }]
      }]
    },
    setRef: setRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "\u0418\u043A\u043E\u043D\u043A\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_4__["ButtonsArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: formRef === null || formRef === void 0 ? void 0 : formRef.current.handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
}

/* harmony default export */ __webpack_exports__["default"] = (CatalogAdd);

/***/ }),

/***/ "./src/pages/CatalogAdd/styled.ts":
/*!****************************************!*\
  !*** ./src/pages/CatalogAdd/styled.ts ***!
  \****************************************/
/*! exports provided: Wrapper, Row, Left, Right */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


const Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(parts_styled__WEBPACK_IMPORTED_MODULE_0__["GridContainer"])`
  width: 50%;
  padding: 35px 0;
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Left = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(parts_styled__WEBPACK_IMPORTED_MODULE_0__["GlassCard"])`
  padding: 35px 0;
  grid-column: span 6;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: span 4;
  padding: 0 20px;
`;

/***/ }),

/***/ "./src/pages/Events/index.tsx":
/*!************************************!*\
  !*** ./src/pages/Events/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/Events/styled.ts");
/* harmony import */ var parts_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/Table */ "./src/parts/Table/index.tsx");
/* harmony import */ var parts_Table_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/Table/styled */ "./src/parts/Table/styled.ts");
/* harmony import */ var parts_AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/AddButton */ "./src/parts/AddButton/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Events/index.tsx";






function Events() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_AddButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: "events/add",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fields: [{
      label: "ID",
      key: "id",
      props: {
        textalign: "center",
        width: "7%"
      }
    }, {
      label: "Название",
      key: "name",
      props: {
        width: "20%"
      }
    }, {
      label: "Тип события",
      key: "type"
    }, {
      label: "Категория",
      key: "category"
    }, {
      label: "Организация",
      key: "org"
    }, {
      label: "Партнер",
      key: "partner"
    }, {
      label: "Дата",
      key: "date"
    }, {
      label: "Статус",
      key: "status",
      getComponent: value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Table_styled__WEBPACK_IMPORTED_MODULE_3__["Status"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 38
        }
      }, value)
    }],
    items: [{
      id: "1",
      name: "Видеоролик",
      type: "Кастинги",
      category: "Съемки",
      org: "Ромашка и ко",
      partner: "Центр Никиты Лобанова",
      date: "23.01.20",
      status: "Заблокирован"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/pages/Events/styled.ts":
/*!************************************!*\
  !*** ./src/pages/Events/styled.ts ***!
  \************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

/***/ }),

/***/ "./src/pages/EventsAdd/components/EventCard/cover_img.jpg":
/*!****************************************************************!*\
  !*** ./src/pages/EventsAdd/components/EventCard/cover_img.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cover_img.6b701c72.jpg";

/***/ }),

/***/ "./src/pages/EventsAdd/components/EventCard/index.tsx":
/*!************************************************************!*\
  !*** ./src/pages/EventsAdd/components/EventCard/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/EventsAdd/components/EventCard/styled.ts");
/* harmony import */ var _cover_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover_img.jpg */ "./src/pages/EventsAdd/components/EventCard/cover_img.jpg");
/* harmony import */ var _cover_img_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cover_img_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/EventsAdd/components/EventCard/index.tsx";




function EventCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["CoverBlock"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["CoverImage"], {
    src: _cover_img_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["EventType"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\u0424\u0435\u0445\u0442\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["EventAge"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "7-11 \u043B\u0435\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InfoBlock"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InfoItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\u0421\u0414\u042E\u0428\u041E\u0420 \u0444\u0435\u0445\u0442\u043E\u0432\u0430\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InfoItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442\u0441\u044F \u0434\u0435\u0442\u0438 \u0432 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0435 \u0441 5 \u0434\u043E 12 \u043B\u0435\u0442 \u043D\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u0432 \u0441\u0440\u0435\u0434\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InfoItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Schedule"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ScheduleItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "5 \u043D\u043E\u044F\u0431\u0440\u044F 10:00 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ScheduleItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "\u041F\u043D. - \u0447\u0442. \u0441 09:00 - 15:00 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ScheduleItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "\u041F\u044F\u0442. \u0441 9:00 - 21:00 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["InfoItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "www.schoolfeht.ru")));
}

/* harmony default export */ __webpack_exports__["default"] = (EventCard);

/***/ }),

/***/ "./src/pages/EventsAdd/components/EventCard/styled.ts":
/*!************************************************************!*\
  !*** ./src/pages/EventsAdd/components/EventCard/styled.ts ***!
  \************************************************************/
/*! exports provided: Wrapper, CoverBlock, CoverImage, Parameter, EventType, EventAge, InfoBlock, InfoItem, Description, Schedule, ScheduleItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverBlock", function() { return CoverBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAge", function() { return EventAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBlock", function() { return InfoBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoItem", function() { return InfoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleItem", function() { return ScheduleItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
 // import calendar from "../assets/calendar.svg";

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 0;
  margin-right: 30px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff4d;
`;
const CoverBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  position: relative;
`;
const CoverImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 100%;
`;
const Parameter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  position: absolute;
  bottom: 0;
  width: 120px;
  padding: 6px 0;
  text-align: center;
  background: #ffc40080;
  border-radius: 0px 14px 0px 0px;
  color: #fff;
  font-size: 12px;
`;
const EventType = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Parameter)`
  left: 0;
  text-transform: uppercase;
`;
const EventAge = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Parameter)`
  right: 0;
  border-radius: 14px 0px 0px 0px;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(10px);
`;
const InfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 10px;
`;
const InfoItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border-radius: 10px;
  background-color: #fff;
  padding: 9px;
  font-weight: 400;
  margin-bottom: 5px;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 14px;
  padding: 7px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-top: 0;
  border-radius: 10px;
  background-color: #fff;
`;
const Schedule = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  padding-left: 25px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 16px;
    height: 14px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const ScheduleItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`;

/***/ }),

/***/ "./src/pages/EventsAdd/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/EventsAdd/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/EventsAdd/styled.ts");
/* harmony import */ var parts_BackSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/BackSection */ "./src/parts/BackSection/index.tsx");
/* harmony import */ var parts_FormGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/FormGenerator */ "./src/parts/FormGenerator/index.tsx");
/* harmony import */ var _components_EventCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EventCard */ "./src/pages/EventsAdd/components/EventCard/index.tsx");
/* harmony import */ var parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/UpoadFile */ "./src/parts/UpoadFile/index.tsx");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/EventsAdd/index.tsx";









// TODO. Move to features
function EventsAdd() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Head"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_BackSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F (251489):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Left"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: {
      title: "Общее",
      fields: [{
        name: "name",
        label: "Название"
      }, {
        name: "type",
        label: "Тип события",
        type: "select",
        options: [{
          name: "qwe",
          value: "asd"
        }]
      }, {
        name: "org",
        label: "Организация"
      }, {
        name: "partner",
        label: "Партнер"
      }, {
        name: "number",
        label: "Количество мест",
        type: "select",
        options: [{
          name: "qwe",
          value: "asd"
        }]
      }, {
        name: "date",
        label: "Дата проведения"
      }, {
        name: "ageFrom",
        label: "Возраст от",
        col: 3,
        type: "select",
        options: [{
          name: "asds",
          value: "qwes"
        }]
      }, {
        name: "ageTo",
        label: "Возраст до",
        col: 3,
        type: "select",
        options: [{
          name: "asds",
          value: "qwes"
        }]
      }],
      settings: {
        defaultType: "text",
        defaultCol: 6
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_FormGenerator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    transparent: false,
    config: {
      title: "Контакты",
      fields: [{
        name: "adress",
        label: "Адрес проведения"
      }, {
        name: "phone",
        label: "Телефон"
      }, {
        name: "email",
        label: "Email"
      }, {
        name: "site",
        label: "Сайт"
      }],
      settings: {
        defaultType: "text",
        defaultCol: 6
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Uploads"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["FormSectionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0433\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_UpoadFile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Right"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_6__["ButtonsArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "ghost",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (EventsAdd);

/***/ }),

/***/ "./src/pages/EventsAdd/styled.ts":
/*!***************************************!*\
  !*** ./src/pages/EventsAdd/styled.ts ***!
  \***************************************/
/*! exports provided: Wrapper, Content, Head, Left, Right, Uploads, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uploads", function() { return Uploads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: calc(100vh - 130px);
  box-sizing: border-box;
`;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-column: span 12;
`;
const Left = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-column: span 8;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding-left: 30px;
  padding-right: 20px;
  grid-column: span 4;
`;
const Uploads = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  label {
    margin-right: 10px;
  }
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  grid-column: span 12;

  align-self: end;
`;

/***/ }),

/***/ "./src/pages/Orgs/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Orgs/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parts_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parts/Table */ "./src/parts/Table/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/pages/Orgs/styled.ts");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/AddButton */ "./src/parts/AddButton/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Orgs/index.tsx";






function Orgs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_AddButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: "orgs/add-org",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_0__["default"], {
    fields: [{
      label: "ID",
      key: "id",
      props: {
        textalign: "center",
        width: "7%"
      }
    }, {
      label: "Центр",
      key: "center",
      props: {
        width: "20%"
      },
      getComponent: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["OrgName"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 37
        }
      }, text)
    }, {
      label: "Категория",
      key: "category"
    }, {
      label: "Партнер",
      key: "partner",
      props: {
        width: "13%"
      }
    }, {
      label: "Адрес",
      key: "adress",
      props: {
        width: "13%"
      },
      getComponent: adress => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Adress"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 39
        }
      }, adress)
    }, {
      label: "Тип организации",
      key: "orgType",
      props: {
        width: "15%"
      }
    }, {
      label: "Статус",
      key: "status",
      getComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_3__["Status"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 33
        }
      }, "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D")
    }],
    items: [{
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Comedy FG",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Менеджмент Артиста 360°",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }, {
      id: "1",
      center: "Продюсерский центр Максима Фадеева",
      category: "7 915 420 55 84",
      partner: "ПартнеркА",
      adress: "Новолесная ул. дом 3",
      orgType: "Кастинги",
      status: "sas"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Orgs);

/***/ }),

/***/ "./src/pages/Orgs/styled.ts":
/*!**********************************!*\
  !*** ./src/pages/Orgs/styled.ts ***!
  \**********************************/
/*! exports provided: Wrapper, OrgName, Adress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgName", function() { return OrgName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adress", function() { return Adress; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const OrgName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  max-width: 194px;
`;
const Adress = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  max-width: 125px;
`;

/***/ }),

/***/ "./src/pages/SupportPage/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/SupportPage/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/SupportPage/styled.ts");
/* harmony import */ var features_Support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/Support */ "./src/features/Support/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/SupportPage/index.tsx";




function SupportPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_Support__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SupportPage);

/***/ }),

/***/ "./src/pages/SupportPage/styled.ts":
/*!*****************************************!*\
  !*** ./src/pages/SupportPage/styled.ts ***!
  \*****************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

/***/ }),

/***/ "./src/pages/Users/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Users/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/pages/Users/styled.ts");
/* harmony import */ var parts_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parts/Table */ "./src/parts/Table/index.tsx");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var parts_AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parts/AddButton */ "./src/parts/AddButton/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Users/index.tsx";






function User() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_AddButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    to: "users/add-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fields: [{
      label: "ID",
      key: "id",
      props: {
        textalign: "center",
        width: "7%"
      }
    }, {
      label: "ФИО",
      key: "fullName",
      props: {
        width: "280px"
      }
    }, {
      label: "Телефон",
      key: "phone",
      props: {
        width: "15%"
      }
    }, {
      label: "E-mail",
      key: "email",
      props: {
        width: "20%"
      }
    }, {
      label: "Подписка",
      key: "subscriptionType",
      getComponent: status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_3__["Tariff"], {
        type: "medium",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, status),
      props: {
        width: "12%"
      }
    }, {
      label: "Статус",
      key: "status",
      getComponent: status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_3__["Status"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 47
        }
      }, status)
    }],
    items: [{
      id: 1,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 2,
      fullName: "Чернов Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 3,
      fullName: "Иванов Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 4,
      fullName: "Косов Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 5,
      fullName: "Дуров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 6,
      fullName: "Каков Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 7,
      fullName: "Таков Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 8,
      fullName: "Каких Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 9,
      fullName: "Таких Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 10,
      fullName: "Тигр Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 11,
      fullName: "Слон Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/pages/Users/styled.ts":
/*!***********************************!*\
  !*** ./src/pages/Users/styled.ts ***!
  \***********************************/
/*! exports provided: Wrapper, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 20px;
`;

/***/ }),

/***/ "./src/parts/AddButton/index.tsx":
/*!***************************************!*\
  !*** ./src/parts/AddButton/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parts_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parts/Button */ "./src/parts/Button/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/blackPlus.svg */ "./src/assets/blackPlus.svg");
/* harmony import */ var assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/AddButton/index.tsx";





function AddButton({
  to
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "15px",
      paddingTop: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: to,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: assets_blackPlus_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
}

/* harmony default export */ __webpack_exports__["default"] = (AddButton);

/***/ }),

/***/ "./src/parts/BackSection/index.tsx":
/*!*****************************************!*\
  !*** ./src/parts/BackSection/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/parts/BackSection/styled.ts");
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/BackSection/index.tsx";





function BackSection() {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_3__["BackButton"], {
    onClick: () => {
      history.goBack();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\u041D\u0430\u0437\u0430\u0434"));
}

/* harmony default export */ __webpack_exports__["default"] = (BackSection);

/***/ }),

/***/ "./src/parts/BackSection/styled.ts":
/*!*****************************************!*\
  !*** ./src/parts/BackSection/styled.ts ***!
  \*****************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 30px 0;
  padding-top: 0;
  border-bottom: 1px solid #b4b6c1;
  margin-bottom: 10px;
`;

/***/ }),

/***/ "./src/parts/Button/assets/spinner.gif":
/*!*********************************************!*\
  !*** ./src/parts/Button/assets/spinner.gif ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.d64e6edc.gif";

/***/ }),

/***/ "./src/parts/Button/index.tsx":
/*!************************************!*\
  !*** ./src/parts/Button/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/Button/styled.ts");
/* harmony import */ var _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/spinner.gif */ "./src/parts/Button/assets/spinner.gif");
/* harmony import */ var _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_spinner_gif__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Button/index.tsx";




function Button({
  children,
  disabled,
  onClick,
  type,
  loading,
  size,
  inline,
  icon
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], {
    disabled: disabled || loading,
    onClick: onClick,
    type: "submit",
    customType: type,
    size: size,
    inline: inline,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    src: icon,
    alt: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    spinnerActive: loading ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_spinner_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }), children));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/parts/Button/styled.ts":
/*!************************************!*\
  !*** ./src/parts/Button/styled.ts ***!
  \************************************/
/*! exports provided: Icon, StyledButton, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");



const getButtonMods = (type, size) => ({
  border: `1px solid ${type === "ghost" ? config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].gray : "transparent"}`,
  "background-color": type === "ghost" ? "transparent" : config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].secondary,
  width: size === "full" && "100%"
});

const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 15px;
  height: 15px;
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  padding: 10px;
  color: ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].gray};
  border-radius: 30px;
  border: 1px solid transparent;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].secondary};
  font-size: 12px;
  outline: none;
  cursor: ${props => !props.disabled && "pointer"};
  ${props => getButtonMods(props.customType, props.size)}
  &:focus {
    outline: none;
  }
  img {
    width: 40px;
    position: absolute;
    left: -40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${Icon} {
    left: 24px;
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  position: relative;
  color: ${props => props.spinnerActive && "transparent"};
  text-decoration: none;
`;

/***/ }),

/***/ "./src/parts/DoubleInput/index.tsx":
/*!*****************************************!*\
  !*** ./src/parts/DoubleInput/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/parts/DoubleInput/styled.ts");
/* harmony import */ var parts_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parts/Input */ "./src/parts/Input/index.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/DoubleInput/index.tsx";





function DoubleInput() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    onSubmit: () => {},
    initialValues: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["FormContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Small"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "id",
    label: "ID",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Big"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "fullName",
    label: "\u0424\u0418\u041E",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (DoubleInput);

/***/ }),

/***/ "./src/parts/DoubleInput/styled.ts":
/*!*****************************************!*\
  !*** ./src/parts/DoubleInput/styled.ts ***!
  \*****************************************/
/*! exports provided: Wrapper, FormContainer, Small, Big */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Big", function() { return Big; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
`;
const FormContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  display: flex;
  width: 80%;
  border-radius: 10px;
  label {
    padding: 9px;
  }
`;
const Small = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 25%;
  label {
    padding-right: 20px;
    margin-right: -15px;
  }
`;
const Big = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 75%;
`;

/***/ }),

/***/ "./src/parts/ErrorContainier/index.tsx":
/*!*********************************************!*\
  !*** ./src/parts/ErrorContainier/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/ErrorContainier/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/ErrorContainier/index.tsx";



function ErrorContainier({
  error,
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, children, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ErrorText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, error));
}

/* harmony default export */ __webpack_exports__["default"] = (ErrorContainier);

/***/ }),

/***/ "./src/parts/ErrorContainier/styled.ts":
/*!*********************************************!*\
  !*** ./src/parts/ErrorContainier/styled.ts ***!
  \*********************************************/
/*! exports provided: Wrapper, ErrorText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorText", function() { return ErrorText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: #e82828;
  font-size: 10px;
  padding-left: 15px;
  margin: 4px 0px;
  min-height: 15px;
  font-family: "Roboto";
`;

/***/ }),

/***/ "./src/parts/FormGenerator/index.tsx":
/*!*******************************************!*\
  !*** ./src/parts/FormGenerator/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/parts/FormGenerator/view.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var features_AddUserForm_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/AddUserForm/styled */ "./src/features/AddUserForm/styled.ts");
/* harmony import */ var parts_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parts/Input */ "./src/parts/Input/index.tsx");
/* harmony import */ var parts_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parts/Select */ "./src/parts/Select/index.jsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/FormGenerator/index.tsx";








/**
 * Form generator. It makes form depends on config
 * @param config main configuration
 * @param config.settings default settings.
 * @param fields fields list with configurations
 * @param fields.name REQUIRED. Inner name for the field
 * @param fields.options REQUIRED FOR SELECT TYPE. list of select options {name,value}
 * @param fields.type OPTIONAL. Type of field
 * @param fields.label OPTIONAL. Showed label
 * @param fields.title OPTIONAL, SELECT ONLY. Placeholder when nothing selected
 * @param fields.icon OPTIONAL. Icon url
 * @param fields.col OPTIONAL. Grid setting for field. (1 - 12)
 * @param fields.yup  OPTIONAL. settings for yup validation. Required on default, write: {key: optional, args[]} for not required field  Example, write: [{key: email, args['Not Email']}] for Yup.string().email('Not Email').
 */
function FormGenerator({
  config,
  onSubmit,
  setRef,
  transparent,
  initialValues
}) {
  const formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (formRef && setRef) {
      setRef(formRef);
    }
  }, [formRef]);

  const makeYup = yup => {
    if (!yup) return yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Обязательное поле");
    const startYup = yup[0].key === "optional" ? yup__WEBPACK_IMPORTED_MODULE_3__["string"]() : yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required("Обязательное поле");
    return yup.reduce((accum, item) => accum[item.key](...item.args), startYup);
  };

  const makeYupSchema = fields => fields.reduce((accum, field) => ({ ...accum,
    [field.name]: makeYup(field.yup)
  }), {});

  const chooseFieldByType = (type, handleChange, props, errors, touched) => {
    let field = null;

    if (type === "text" || type === "textarea") {
      field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Input__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
        error: errors[props.name],
        touched: touched[props.name],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }));
    }

    if (type === "select") {
      field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Select__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, {
        title: props.title || "Выбрать...",
        onChange: handleChange,
        error: errors[props.name],
        touched: touched[props.name],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_AddUserForm_styled__WEBPACK_IMPORTED_MODULE_4__["Item"], {
      col: props.col || config.settings.defaultCol,
      key: props.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, field);
  };

  const makeFields = (errors, touched, handleChange) => config.fields.reduce((accum, curr) => ({ ...accum,
    [curr.name]: chooseFieldByType(curr.type || config.settings.defaultType, handleChange, curr, errors, touched)
  }), {});

  const yupSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"](makeYupSchema(config.fields));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues || config.fields.reduce((accum, curr) => ({ ...accum,
      [curr.name]: curr.value || ""
    }), {}),
    onSubmit: (values, {
      resetForm
    }) => {
      onSubmit(values);
      resetForm();
    },
    validationSchema: yupSchema,
    innerRef: formRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props, {
      title: config.title,
      transparent: transparent,
      fieldsObj: makeFields(props.errors, props.touched, props.handleChange),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (FormGenerator);

/***/ }),

/***/ "./src/parts/FormGenerator/view.tsx":
/*!******************************************!*\
  !*** ./src/parts/FormGenerator/view.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parts_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parts/styled */ "./src/parts/styled.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/FormGenerator/view.tsx";





function ChildFormView({
  fieldsObj,
  handleSubmit,
  title,
  transparent
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_1__["GridContainer"], {
    transparent: transparent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_styled__WEBPACK_IMPORTED_MODULE_1__["FormSectionTitle"], {
    offsetLeft: 50,
    marginBottom: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, title), Object.keys(fieldsObj).map(key => fieldsObj[key])));
}

/* harmony default export */ __webpack_exports__["default"] = (ChildFormView);

/***/ }),

/***/ "./src/parts/Input/index.tsx":
/*!***********************************!*\
  !*** ./src/parts/Input/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorContainier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorContainier */ "./src/parts/ErrorContainier/index.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/parts/Input/styled.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled */ "./src/parts/styled.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Input/index.tsx";





function Input({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  type,
  centered
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorContainier__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: touched ? error : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, label), type === "textarea" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
    name: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
    name: name,
    value: field.value,
    onChange: field.onChange,
    rows: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["InputContainer"], {
    icon: icon,
    centered: centered,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledInput"], {
    type: type || "text",
    name: name,
    placeholder: placeholder || "-- -- -- -- --",
    error: error,
    touched: touched ? 1 : 0,
    centered: centered,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))));
}

/***/ }),

/***/ "./src/parts/Input/styled.ts":
/*!***********************************!*\
  !*** ./src/parts/Input/styled.ts ***!
  \***********************************/
/*! exports provided: Wrapper, Textarea, StyledInput, ErrorText, InputContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorText", function() { return ErrorText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return InputContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


const placeholderColor = "#6c757d";
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea`
  border: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
`;
const StyledInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"])`
  color: ${props => props.error && props.touched === 1 && "#A2A2A2"};
  width: 100%;
  background-color: transparent;
  font-size: 16px;
  border: none;
  font-family: inherit;
  height: auto;
  font-family: Arial, sans-serif;
  font-weight: normal;
  text-align: ${props => props.centered && "center"};

  padding-left: 0px;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${placeholderColor};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${placeholderColor};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${placeholderColor};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${placeholderColor};
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
const ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  color: #e82828;
  font-size: 10px;
  padding-left: 15px;
  margin: 4px 0px;
  min-height: 12px;
  font-family: "Roboto";
`;
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 9px;
  padding-left: ${props => !props.centered && "40px"};
  border-radius: 10px;
  letter-spacing: 0.15px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  margin: 0;

  &:hover {
    cursor: #a2a2a2;
  }
  &:before {
    content: "";
    display: ${props => props.icon ? "inline-block" : "none"};
    width: 20px;
    height: 20px;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 14px;
  }
`;

/***/ }),

/***/ "./src/parts/Logo/assets/logo_image.svg":
/*!**********************************************!*\
  !*** ./src/parts/Logo/assets/logo_image.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo_image.e2c5aa4e.svg";

/***/ }),

/***/ "./src/parts/Logo/assets/logo_text.svg":
/*!*********************************************!*\
  !*** ./src/parts/Logo/assets/logo_text.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo_text.76cd16f3.svg";

/***/ }),

/***/ "./src/parts/Logo/index.tsx":
/*!**********************************!*\
  !*** ./src/parts/Logo/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/Logo/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Logo/index.tsx";



function Logo({
  onClick,
  big
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    onClick: onClick,
    big: big,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LogoImage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LogoText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/parts/Logo/styled.ts":
/*!**********************************!*\
  !*** ./src/parts/Logo/styled.ts ***!
  \**********************************/
/*! exports provided: LogoImage, LogoText, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return LogoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo_image.svg */ "./src/parts/Logo/assets/logo_image.svg");
/* harmony import */ var _assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo_text.svg */ "./src/parts/Logo/assets/logo_text.svg");
/* harmony import */ var _assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2__);



const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: inline-block;
  width: 82px;
  height: 76px;
  background-image: url(${_assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1___default.a});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 8px;
`;
const LogoText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: inline-block;
  width: 136px;
  height: 27px;
  background-image: url(${_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2___default.a});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Comfortaa";
  font-weight: 700;
  font-size: 15px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  ${LogoImage} {
    width: ${props => props.big && "120"}px;
    height: ${props => props.big && "100"}px;
  }
  ${LogoText} {
    width: ${props => props.big && "230"}px;
    height: ${props => props.big && "40"}px;
  }
`;

/***/ }),

/***/ "./src/parts/Modal/index.tsx":
/*!***********************************!*\
  !*** ./src/parts/Modal/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/Modal/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Modal/index.tsx";



function Modal({
  isVisible,
  changeVisibility,
  children
}) {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      changeVisibility(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Overlay"], {
    isVisible: isVisible,
    onClick: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/parts/Modal/styled.ts":
/*!***********************************!*\
  !*** ./src/parts/Modal/styled.ts ***!
  \***********************************/
/*! exports provided: Overlay, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: ${props => props.isVisible ? "block" : "none"};
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  cursor: pointer;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  cursor: auto;
`;

/***/ }),

/***/ "./src/parts/ModalCard/index.tsx":
/*!***************************************!*\
  !*** ./src/parts/ModalCard/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/ModalCard/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/ModalCard/index.tsx";



function ModalCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (ModalCard);

/***/ }),

/***/ "./src/parts/ModalCard/styled.ts":
/*!***************************************!*\
  !*** ./src/parts/ModalCard/styled.ts ***!
  \***************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 30px 10px;
  border-radius: 10px;
  background: linear-gradient(180deg, #f9d8db 0%, #f6e5cf 100%);
`;

/***/ }),

/***/ "./src/parts/Select/assets/arrow.svg":
/*!*******************************************!*\
  !*** ./src/parts/Select/assets/arrow.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow.c4adceec.svg";

/***/ }),

/***/ "./src/parts/Select/index.jsx":
/*!************************************!*\
  !*** ./src/parts/Select/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/parts/Select/view.jsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Select/index.jsx";



function Select(props) {
  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [selectedValue, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const toggleSelect = () => {
    isOpen ? setOpen(false) : setOpen(true);
  };

  const setSelected = e => {
    setValue(e.target.value);
    setOpen(false);
    console.log(e.target.value);
    props.onChange(e);
  };

  const viewProps = {
    isOpen,
    toggleSelect,
    selectedValue,
    setSelected,
    ...props
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, viewProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./src/parts/Select/styled.js":
/*!************************************!*\
  !*** ./src/parts/Select/styled.js ***!
  \************************************/
/*! exports provided: SelectBox, OptionsContainer, Wrapper, Option, OptionTitle, Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBox", function() { return SelectBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsContainer", function() { return OptionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionTitle", function() { return OptionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/arrow.svg */ "./src/parts/Select/assets/arrow.svg");
/* harmony import */ var _assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");



const SelectBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  display: block;
  background-color: #f5f8fa;
  padding: 11.5px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  text-align: center;
  color: ${props => !props.selected && "#A2A2A2"};
  cursor: pointer;
  transition: 0.3s all ease;
  transform: rotate(0deg);
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 11px;
    top: 13px;
    width: 20px;
    height: 20px;
    background-image: url(${_assets_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a});
    background-position: center;
    background-size: cover;
    transition: 0.3s transform ease;
  }
`;
const OptionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  z-index: 1;
  width: 100%;
  max-height: 220px;
  box-sizing: border-box;
  overflow: scroll;
  position: absolute;
  top: 85px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 3px 8px #00000026;
  padding: 5px 0;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  ${OptionsContainer} {
    display: ${props => props.open ? "block" : "none"};
  }
  ${SelectBox}:after {
    transform: ${props => props.open && "rotate(-180deg)"};
  }
`;
const Option = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  display: block;
  padding: 17px 10px;
  font-weight: normal;
  background-color: #fff;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f8fa;
  }

  &:active {
    background-color: #e4ecf1;
  }
`;
const OptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-size: 16px;
`;
const Radio = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"])`
  display: none;
`;

/***/ }),

/***/ "./src/parts/Select/view.jsx":
/*!***********************************!*\
  !*** ./src/parts/Select/view.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorContainier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorContainier */ "./src/parts/ErrorContainier/index.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled */ "./src/parts/styled.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/parts/Select/styled.js");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Select/view.jsx";





function SelectView({
  isOpen,
  title,
  toggleSelect,
  options,
  name,
  setSelected,
  selectedValue,
  error,
  touched,
  label
}) {
  const showSelected = selectedValue => {
    var _options$find;

    return options[0].value ? (_options$find = options.find(item => item.value === selectedValue)) === null || _options$find === void 0 ? void 0 : _options$find.name : selectedValue;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
    open: isOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorContainier__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: touched ? error : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["SelectBox"], {
    selected: !!selectedValue,
    onClick: toggleSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, selectedValue ? showSelected(selectedValue) : title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["OptionsContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, options.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Option"], {
    key: option.value || option,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["OptionTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, option.name || option), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    type: "radio",
    onChange: setSelected,
    name: name,
    value: option.value || option,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectView);

/***/ }),

/***/ "./src/parts/Table/assets/left.svg":
/*!*****************************************!*\
  !*** ./src/parts/Table/assets/left.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/left.c90564e2.svg";

/***/ }),

/***/ "./src/parts/Table/index.tsx":
/*!***********************************!*\
  !*** ./src/parts/Table/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/parts/Table/view.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/parts/Table/styled.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var ducks_sieve_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ducks/sieve/slice */ "./src/ducks/sieve/slice.ts");
/* harmony import */ var ducks_sieve_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ducks/sieve/selectors */ "./src/ducks/sieve/selectors.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Table/index.tsx";







/**
 * Table takes fields setting and items to show
 * @param label show text in head of table
 * @param key connect field settings with current item
 * @param align optional. Align text - 'left', 'right', 'center'
 * @param width optional. Cell width ('100px')
 * @param getComponent optional func. Return wrapper component for value
 */
function Table({
  fields,
  items
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const filteredItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(Object(ducks_sieve_selectors__WEBPACK_IMPORTED_MODULE_5__["selectFilteredData"])(items));

  const changeSieveValue = (type, key, value) => {
    dispatch(Object(ducks_sieve_slice__WEBPACK_IMPORTED_MODULE_4__["changeFilterValue"])({
      key,
      value
    }));
  };

  const getItemPropsArray = items => items.map(item => Object.keys(item).map(key => ({
    key: key,
    value: item[key]
  })));

  const getComponent = (key, value) => {
    var _fields$find$getCompo, _fields$find;

    return ((_fields$find$getCompo = (_fields$find = fields.find(item => item.key === key)).getComponent) === null || _fields$find$getCompo === void 0 ? void 0 : _fields$find$getCompo.call(_fields$find, value)) || value;
  };

  const getProperties = key => fields.find(item => item.key === key).props;

  const getTableData = () => getItemPropsArray(filteredItems).map(rowData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, rowData.map(({
    key,
    value
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Cell"], Object.assign({
    key: key
  }, getProperties(key), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), getComponent(key, value)))));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: getTableData(),
    fields: fields,
    changeSieveValue: changeSieveValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/parts/Table/styled.ts":
/*!***********************************!*\
  !*** ./src/parts/Table/styled.ts ***!
  \***********************************/
/*! exports provided: Wrapper, TableContainer, TBody, Footer, Cell, THead, Row, Controls, ControlsItem, Tariff, Status, PaginationText, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableContainer", function() { return TableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBody", function() { return TBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THead", function() { return THead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsItem", function() { return ControlsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tariff", function() { return Tariff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationText", function() { return PaginationText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");
/* harmony import */ var _assets_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/left.svg */ "./src/parts/Table/assets/left.svg");
/* harmony import */ var _assets_left_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_left_svg__WEBPACK_IMPORTED_MODULE_2__);



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: column;
`;
const TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table`
  border-spacing: 0;
  overflow: hidden;
  border-collapse: collapse;
  padding: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 15px 0px #00000032;
  border-radius: 9px 9px 0 0;
  margin-bottom: 1px;
`;
const TBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tbody``;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tfoot`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #fff;
  padding: 25px 30px;
  font-weight: 400;
  border-radius: 0 0 9px 9px;
`;
const Cell = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].td`
  padding: 16px 0;
  font-size: 14px;
  width: ${props => props.width};
  text-align: ${props => props.textalign};
  font-weight: 500;
`;
const THead = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].thead`
  background-color: #dfe0eb;
  ${Cell} {
    font-weight: 500;
  }
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tr`
  cursor: pointer;
  border-bottom: 1px solid
    ${props => props.head ? "transsparent" : "#dfe0eb"};
  ${Cell} {
    padding: ${props => props.head && "7px 0"};
  }
  &:hover {
    background-color: ${props => !props.head && "#fe5b5432"};
  }
`;
const Controls = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;
const ControlsItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  padding: 8px 0;
  background-color: transparent;
  border: none;
  margin-bottom: -1px;
  width: ${props => props.width};
  flex-grow: ${props => props.width ? 0 : 1};
  text-align: ${props => props.textalign || "left"};
  border-bottom: 1px solid transparent;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary};
    /* border-color: ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary}; */
  }
`;
const Tariff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 75px;
  font-size: 16px;
  padding: 7px;
  border: 2px solid ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary};
  border-radius: 5px;
  text-align: center;
  color: ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary};
  text-transform: uppercase;
`;
const Status = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    background-color: ${config_constants__WEBPACK_IMPORTED_MODULE_1__["colors"].primary};
    border-radius: 50%;
  }
`;
const PaginationText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  width: 10px;
  cursor: pointer;
  height: 12px;
  margin: 0 10px;
  background-image: url(${_assets_left_svg__WEBPACK_IMPORTED_MODULE_2___default.a});
  background-size: contain;
  background-repeat: no-repeat;
  transform: ${props => props.right && "rotate(180deg)"};
`;

/***/ }),

/***/ "./src/parts/Table/view.tsx":
/*!**********************************!*\
  !*** ./src/parts/Table/view.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/Table/styled.ts");
/* harmony import */ var ducks_sieve_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ducks/sieve/types */ "./src/ducks/sieve/types.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/Table/view.tsx";




function TableView({
  data,
  fields,
  changeSieveValue
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Controls"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, fields.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ControlsItem"], Object.assign({
    key: item.label
  }, item.props, {
    placeholder: item.label,
    onChange: e => {
      changeSieveValue(ducks_sieve_types__WEBPACK_IMPORTED_MODULE_2__["SieveType"].Filter, item.key, e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["THead"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    head: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, fields.map(item => {
    var _item$props;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      key: item.key,
      textalign: (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.textalign,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, data)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Arrow"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Arrow"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "1-11 \u0438\u0437 1240")));
}

/* harmony default export */ __webpack_exports__["default"] = (TableView);

/***/ }),

/***/ "./src/parts/UpoadFile/index.tsx":
/*!***************************************!*\
  !*** ./src/parts/UpoadFile/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/parts/UpoadFile/view.tsx");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/UpoadFile/index.tsx";



function UpoadFile(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UpoadFile);

/***/ }),

/***/ "./src/parts/UpoadFile/styled.ts":
/*!***************************************!*\
  !*** ./src/parts/UpoadFile/styled.ts ***!
  \***************************************/
/*! exports provided: Wrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var assets_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  display: flex;
  flex-direction: ${props => props.file ? "row" : "column"};
  align-items: center;
  border-radius: 10px;
  width: ${props => props.file ? "350px" : "96px"};
  height: ${props => props.file ? "33px" : "96px"};
  margin-bottom: ${props => props.file && "10px"};
  background-color: #ffffff4d;
  border: 1px dashed ${config_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary};
  padding: ${props => props.file ? "5px" : "15px"};
  box-sizing: border-box;
  background-image: url(${props => props.image});
  background-size: cover;
  font-size: ${props => props.image ? "0px" : "15px"};
  cursor: pointer;
  &:before {
    content: "";
    display: ${props => props.image ? "none" : "block"};
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
    margin: ${props => props.file && "0 15px"};
    background-image: url(${assets_plus_svg__WEBPACK_IMPORTED_MODULE_1___default.a});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  /* font-size: 15px; */
  font-weight: 400px;
  text-align: center;
  line-height: 17px;
  input {
    position: absolute;
    opacity: 0;
    display: none;
  }
`;

/***/ }),

/***/ "./src/parts/UpoadFile/view.tsx":
/*!**************************************!*\
  !*** ./src/parts/UpoadFile/view.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/parts/UpoadFile/styled.ts");
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/parts/UpoadFile/view.tsx";



function UpoadFileView({
  label,
  file
}) {
  const [src, setSrc] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    file: file,
    image: src,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    onChange: e => {
      setSrc(URL.createObjectURL(e.target.files[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (UpoadFileView);

/***/ }),

/***/ "./src/parts/styled.ts":
/*!*****************************!*\
  !*** ./src/parts/styled.ts ***!
  \*****************************/
/*! exports provided: Container, Label, Tariff, Status, Link, Overlay, Loader, GlassCard, FormSectionTitle, ButtonsArea, GridContainer, BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tariff", function() { return Tariff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassCard", function() { return GlassCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSectionTitle", function() { return FormSectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsArea", function() { return ButtonsArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridContainer", function() { return GridContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/spinner.gif */ "./src/assets/spinner.gif");
/* harmony import */ var assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");
/* harmony import */ var assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/arrow.svg */ "./src/assets/arrow.svg");
/* harmony import */ var assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);





const selectTariffColor = type => {
  if (type === "basic") return "#BEC2CE";
  if (type === "medium") return "#FF5858";
  if (type === "premium") return "#00BFA5";
};

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  padding-left: 40px;
  margin: 0;
  margin-bottom: 10px;
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  color: #252733;
`;
const Tariff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 75px;
  font-size: 14px;
  padding: 5px;
  border: 2px solid ${props => selectTariffColor(props.type)};
  border-radius: 5px;
  text-align: center;
  color: ${props => selectTariffColor(props.type)};
  text-transform: uppercase;
`;
const Status = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    margin-right: 7px;
    background-color: ${props => props.active ? "#27AE60" : config_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary};
    border-radius: 50%;
  }
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a`
  text-decoration: none;
  color: #0094ff;
  cursor: pointer;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  opacity: ${props => props.closed ? "0" : "1"};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.closed ? -1 : 9};
  background-color: #1b1b1b4d;
  cursor: pointer;
  transition: 0.2s all ease;
`;
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background-image: url(${assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a});
  background-size: contain;
  border: none;
  background-color: transparent;
`;
const GlassCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: ${props => props.fullWidth ? "100%" : "auto"};
  display: inline-block;
  border-radius: 10px;
  background-color: ${props => props.transparent ? "transparent" : "#ffffff4d"};
  padding: 10px;
  margin-bottom: 10px;
`;
const FormSectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
  grid-column: span 12;
  margin-top: 5px;
  width: 100%;
  padding-left: ${props => props.offsetLeft}px;
  text-transform: uppercase;
  color: #51535e;
  font-weight: 500;
  margin-bottom: ${props => props.marginBottom}px;
  font-size: 16px;
`;
const ButtonsArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
  section {
    display: flex;
  }
`;
const GridContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(GlassCard)`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: ${props => props.transparent && "transparent"};
`;
const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  &:before {
    content: "";
    display: block;
    width: 17px;
    height: 14px;
    margin-right: 8px;
    background-image: url(${assets_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default.a});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/aleksey/Documents/web/Projects/vzletaem-admin/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/aleksey/Documents/web/Projects/vzletaem-admin/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/aleksey/Documents/web/Projects/vzletaem-admin/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map