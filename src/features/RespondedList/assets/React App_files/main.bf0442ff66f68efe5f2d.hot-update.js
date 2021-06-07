webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.bf0442ff66f68efe5f2d.hot-update.js.map