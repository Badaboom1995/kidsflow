webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.01c98081f7b1f58fa2c9.hot-update.js.map