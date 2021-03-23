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
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/app/index.tsx";







const store = Object(config_store__WEBPACK_IMPORTED_MODULE_5__["configureAppStore"])();

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(features_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_styles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
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
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/app/router.tsx";



function Router(props) {
  const prefix =  false ? undefined : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${prefix}/`,
    exact: true,
    component: pages_Users__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

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
  black: "#2f2f2f"
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
/* harmony import */ var ducks_sieve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ducks/sieve */ "./src/ducks/sieve/index.ts");



function createReducer() {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({ ...features_Navigation_duck__WEBPACK_IMPORTED_MODULE_1__["default"],
    ...ducks_sieve__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/*! exports provided: sieveSelector, selectSieveByType, selectFilteredData, selectSortedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sieveSelector", function() { return sieveSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSieveByType", function() { return selectSieveByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredData", function() { return selectFilteredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSortedData", function() { return selectSortedData; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/ducks/sieve/types.ts");


const sieveSelector = state => state.sieve;
const selectSieveByType = type => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sieveSelector, state => state[type]);

const StringifyValues = items => items.map(item => Object.keys(item).reduce((accum, key) => ({ ...accum,
  [key]: item[key].toString()
}), {}));

const selectFilteredData = entities => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSieveByType(_types__WEBPACK_IMPORTED_MODULE_1__["SieveType"].Filter), sieve => StringifyValues(entities).filter(item => {
  let filterPassed = true;
  sieve.forEach(sieveItem => {
    const sieveKey = Object.keys(sieveItem)[0];

    if (!item[sieveKey].includes(sieveItem[sieveKey])) {
      filterPassed = true;
    }
  });
  return filterPassed;
}));
const selectSortedData = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(sieveSelector, state => state.filter);

/***/ }),

/***/ "./src/ducks/sieve/slice.ts":
/*!**********************************!*\
  !*** ./src/ducks/sieve/slice.ts ***!
  \**********************************/
/*! exports provided: setDataSieve, changeDataSieveValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataSieve", function() { return setDataSieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDataSieveValue", function() { return changeDataSieveValue; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/ducks/sieve/types.ts");


const intititalState = {
  filter: [],
  sort: []
};
const organizatonsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "sieve",
  initialState: intititalState,
  reducers: {
    setDataSieve(state, {
      payload
    }) {
      const {
        type,
        key
      } = payload;
      const value = type === _types__WEBPACK_IMPORTED_MODULE_1__["SieveType"].Sort ? _types__WEBPACK_IMPORTED_MODULE_1__["SortDirection"].Up : "";
      state[type].push({
        [key]: value
      });
    },

    changeDataSieveValue(state, {
      payload
    }) {
      const {
        type,
        key,
        value
      } = payload;
      state[type] = state[type].map(item => Object.keys(item)[0] === key ? {
        [Object.keys(item)[0]]: value
      } : item);
    },

    clearSieves(state) {}

  }
});
const {
  setDataSieve,
  changeDataSieveValue
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
  SortDirection[SortDirection["Up"] = 0] = "Up";
  SortDirection[SortDirection["Down"] = 1] = "Down";
})(SortDirection || (SortDirection = {}));

let SieveType;

(function (SieveType) {
  SieveType["Sort"] = "sort";
  SieveType["Filter"] = "filter";
})(SieveType || (SieveType = {}));

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
  width: 100%;
  max-height: 100vh;
  display: flex;
  overflow: hidden;
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex-grow: 1;
  padding: 25px 20px;
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
    to: "/organizations",
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
      setActive(label);
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
/*! exports provided: Wrapper, Head, NavList, Item, IconSVG, BackSVG, Footer, Profile, Avatar, Name, Exit, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSVG", function() { return IconSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackSVG", function() { return BackSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
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
const Item = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
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
`;
const IconSVG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
  position: relative;
  z-index: 1;
  width: 18px;
  height: 18px;
  margin-bottom: 5px;
`;
const BackSVG = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].svg`
  opacity: ${props => props.active ? "1" : "0"};
  /* transition: 0.5s opacity ease-in; */
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

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #FED98E 0%, #FDB67F 50%, #FD9693 100%);
  }

  body, a, button, pre {
    font-family: 'Mulish', sans-serif;
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
var _jsxFileName = "/Users/aleksey/Documents/web/Projects/vzletaem-admin/src/pages/Users/index.tsx";





function Promo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(parts_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
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
          lineNumber: 32,
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
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 3,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 4,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 5,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 6,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 7,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 8,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 9,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 10,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }, {
      id: 11,
      fullName: "Петров Константин Павлович",
      phone: "7 915 444 55 84",
      email: "ivan@mail.ru",
      subscriptionType: "pro",
      status: "Заблокирован"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Promo);

/***/ }),

/***/ "./src/pages/Users/styled.ts":
/*!***********************************!*\
  !*** ./src/pages/Users/styled.ts ***!
  \***********************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div``;

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
  onClick
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    to: "/",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LogoImage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["LogoText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
/*! exports provided: Wrapper, LogoImage, LogoText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImage", function() { return LogoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return LogoText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo_image.svg */ "./src/parts/Logo/assets/logo_image.svg");
/* harmony import */ var _assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_image_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo_text.svg */ "./src/parts/Logo/assets/logo_text.svg");
/* harmony import */ var _assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_text_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




const Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"])`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0;
`;
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
/* harmony import */ var ducks_sieve_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ducks/sieve/types */ "./src/ducks/sieve/types.ts");
/* harmony import */ var ducks_sieve_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ducks/sieve/selectors */ "./src/ducks/sieve/selectors.ts");
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
  const filteredItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(Object(ducks_sieve_selectors__WEBPACK_IMPORTED_MODULE_6__["selectFilteredData"])(items));

  const setSieves = () => {
    fields.forEach(({
      key
    }) => {
      dispatch(Object(ducks_sieve_slice__WEBPACK_IMPORTED_MODULE_4__["setDataSieve"])({
        type: ducks_sieve_types__WEBPACK_IMPORTED_MODULE_5__["SieveType"].Filter,
        key
      }));
      dispatch(Object(ducks_sieve_slice__WEBPACK_IMPORTED_MODULE_4__["setDataSieve"])({
        type: ducks_sieve_types__WEBPACK_IMPORTED_MODULE_5__["SieveType"].Sort,
        key
      }));
    });
  };

  const changeSieveValue = (type, key, value) => {
    dispatch(Object(ducks_sieve_slice__WEBPACK_IMPORTED_MODULE_4__["changeDataSieveValue"])({
      type,
      key,
      value
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSieves();
  }, []);

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
      lineNumber: 57,
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
      lineNumber: 59,
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
      lineNumber: 67,
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
/*! exports provided: Wrapper, TableContainer, TBody, THead, Footer, Cell, Row, Controls, ControlsItem, Tariff, Status, PaginationText, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableContainer", function() { return TableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBody", function() { return TBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THead", function() { return THead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
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
  max-height: calc(100vh - 50px);
  overflow: scroll;
  border-radius: 9px;
`;
const TableContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table`
  overflow: hidden;
  border-spacing: 0;
  border-collapse: collapse;
  padding: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 3px 15px 0px #00000032;
  border-radius: 9px 9px 0 0;
`;
const TBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tbody``;
const THead = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].thead`
  background-color: #dfe0eb;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #fff;
  padding: 25px 30px;
  font-weight: 400;
`;
const Cell = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].td`
  padding: 15px 0;
  font-size: 14px;
  line-height: 17px;
  width: ${props => props.width};
  text-align: ${props => props.textalign};
  font-weight: 700;
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
  &:focus {
    outline: none;
  }
  padding: 8px 0;
  background-color: transparent;
  border: none;
  width: ${props => props.width};
  flex-grow: ${props => props.width ? 0 : 1};
  text-align: ${props => props.textalign || "left"};
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
  }, fields.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ControlsItem"], Object.assign({}, item.props, {
    placeholder: item.label,
    onChange: e => {
      console.log(e.target.value);
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

/***/ "./src/parts/styled.ts":
/*!*****************************!*\
  !*** ./src/parts/styled.ts ***!
  \*****************************/
/*! exports provided: Container, Tariff, Status, Link, Overlay, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tariff", function() { return Tariff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/spinner.gif */ "./src/assets/spinner.gif");
/* harmony import */ var assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/constants */ "./src/config/constants.ts");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: 1440px;
  margin: 0 auto;
`;
const Tariff = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 75px;
  font-size: 16px;
  padding: 7px;
  border: 2px solid ${config_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary};
  border-radius: 5px;
  text-align: center;
  color: ${config_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary};
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
    background-color: ${config_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].primary};
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

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map