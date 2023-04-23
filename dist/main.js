"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\n\n.hoverable {\n    background-color: rgba(255, 215, 0, 0.5); /* gold with 50% transparency */\n}\n\nupper-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nupper-container button {\n    background: linear-gradient(to bottom, #F5F5F5, #E0E0E0);\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);\n    font-family: 'Open Sans', sans-serif;\n    border-radius: 5px;\n    \n}\n\nupper-container button:hover {\n    background: gold;\n    color: #fff;\n  }\n\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.enemy-cell:hover:not(.hit):not(.miss) {\n  animation: flash 0.5s infinite;\n}\n\n@keyframes flash {\n  0% {\n    background-color: red;\n  }\n  50% {\n    background-color: yellow;\n  }\n  100% {\n    background-color: red;\n  }\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC,EAAE,+BAA+B;AAC7E;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,wDAAwD;IACxD,0CAA0C;IAC1C,oCAAoC;IACpC,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;EACb;;;AAGF;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;IACE,qBAAqB;EACvB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;EACd;;AAEF;IACI,uBAAuB;AAC3B","sourcesContent":[".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\n\n.hoverable {\n    background-color: rgba(255, 215, 0, 0.5); /* gold with 50% transparency */\n}\n\nupper-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nupper-container button {\n    background: linear-gradient(to bottom, #F5F5F5, #E0E0E0);\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);\n    font-family: 'Open Sans', sans-serif;\n    border-radius: 5px;\n    \n}\n\nupper-container button:hover {\n    background: gold;\n    color: #fff;\n  }\n\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.enemy-cell:hover:not(.hit):not(.miss) {\n  animation: flash 0.5s infinite;\n}\n\n@keyframes flash {\n  0% {\n    background-color: red;\n  }\n  50% {\n    background-color: yellow;\n  }\n  100% {\n    background-color: red;\n  }\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-board.js":
/*!******************************!*\
  !*** ./src/display-board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "displayEnemyBoard": () => (/* binding */ displayEnemyBoard)
/* harmony export */ });
function displayBoard(player) {
    const table = document.createElement("table"); // The table to hold the board.
    const board = player.bFactory.board; // The board array.

    const numRow = document.createElement("tr"); // To hold the number row above the gameboard.
    numRow.classList.add("row");
    // Add an empty cell to the left of the numbers and above the letters.
    const emptyCell = document.createElement("td");
    emptyCell.classList.add('empty-cell');
    numRow.appendChild(emptyCell);

    // Loop to add the number row above the gameboard.
    for(let i = 0; i < board.length; i++) {
        const numberCell = document.createElement("td");
        numberCell.classList.add("number-cell");
        numberCell.textContent = i + 1;
        numRow.appendChild(numberCell);
    }
    
    table.appendChild(numRow);

    for(let i = 0; i < board.length; i++) {
        const row = document.createElement("tr");
        row.classList.add("row");
        const letterCell = document.createElement("td");
        letterCell.classList.add('letter-cell');
        letterCell.textContent = letterCell.textContent = String.fromCharCode(65 + i);
        row.appendChild(letterCell);
        for(let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            let coord = j.toString() + i.toString();
            cell.setAttribute('id', coord);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    return table;
}

function displayEnemyBoard(player) {
    const table = document.createElement("table"); // The table to hold the board.
    const board = player.bFactory.board; // The board array.

    const numRow = document.createElement("tr"); // To hold the number row above the gameboard.
    numRow.classList.add("row");
    // Add an empty cell to the left of the numbers and above the letters.
    const emptyCell = document.createElement("td");
    emptyCell.classList.add('empty-cell');
    numRow.appendChild(emptyCell);

    // Loop to add the number row above the gameboard.
    for(let i = 0; i < board.length; i++) {
        const numberCell = document.createElement("td");
        numberCell.classList.add("number-cell");
        numberCell.textContent = i + 1;
        numRow.appendChild(numberCell);
    }
    
    table.appendChild(numRow);

    for(let i = 0; i < board.length; i++) {
        const row = document.createElement("tr");
        row.classList.add("row");
        const letterCell = document.createElement("td");
        letterCell.classList.add('letter-cell');
        letterCell.textContent = letterCell.textContent = String.fromCharCode(65 + i);
        row.appendChild(letterCell);
        for(let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('td');
            cell.classList.add('enemy-cell');
            let coord = "e" + j.toString() + i.toString();
            cell.setAttribute('id', coord);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    return table;
}

/***/ }),

/***/ "./src/dom-and-event-listeners.js":
/*!****************************************!*\
  !*** ./src/dom-and-event-listeners.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupDOM": () => (/* binding */ setupDOM)
/* harmony export */ });
/* harmony import */ var _display_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-board */ "./src/display-board.js");
/* harmony import */ var _game_over_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-over-check */ "./src/game-over-check.js");
/* harmony import */ var _main_phase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-phase */ "./src/main-phase.js");
/* harmony import */ var _place_phase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-phase */ "./src/place-phase.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");






let one = ""; // player one
let two = ""; // player two
let main = ""; // main container (content), just in case
let board = ""; // board container
let upper = ""; // upper container


// Sets up the start button and builds some containers for later use.
function setupDOM(content, playerOne, playerTwo) {
    one = playerOne;
    two = playerTwo;
    main = content;

    const upperContainer = document.createElement('upper-container');
    upper = upperContainer;
    const startButton = document.createElement('button');
    startButton.textContent = "Start Game";

    startButton.addEventListener('click', () => {
        startButtonEvent();
        // Remove the start button
        upper.removeChild(startButton);
    })
    
    const boardContainer = document.createElement('board-container');
    board = boardContainer;
    upperContainer.appendChild(startButton);
    content.appendChild(upperContainer);
    content.appendChild(boardContainer);
}

// When the swap axis button is clicked, it changes the axis to place the ship.
function axisSwap(axis) {
    if(axis == 'x')
        return 'y';
    else return 'x';
}

// When the start button is clicked. Adds a description of what to do, generates the player board,
// calls the function to place the ships.
function startButtonEvent() {
    // Descriptor
    let placeShipsDescription = document.createElement('h1');
    placeShipsDescription.id = 'header-description';
    placeShipsDescription.textContent = "Place Your Ships";
    upper.appendChild(placeShipsDescription);

    // Display the player's grid to place ships.
    const gridPlayerOne = (0,_display_board__WEBPACK_IMPORTED_MODULE_0__.displayBoard)(one);
    board.appendChild(gridPlayerOne);

    placeShipsEvent();
}

let axis = 'x'; // Default axis for placing ships.
let length = 2; // The first ship to place is the patrol boat.

// This function determines the length of the ship to be placed and calls placePhase until
// all the ships have been placed. Also removes event listeners once
// all the ships are placed.
function handlePlaceShips(event) {
    let ships = one.bFactory.ships;

    
  
    if(ships.length < 5) {
      (0,_place_phase__WEBPACK_IMPORTED_MODULE_3__.placePhase)(one, event.target.id, axis, length);
      
      if(ships.length == 1) 
        length = 3; // update to the submarine
      else if(ships.length == 2)
        length = 3; // update to the destroyer
      else if(ships.length == 3)
        length = 4; // update to the battleship
      else if(ships.length == 4)
        length = 5; // update to the carrier
    }
  
    if(ships.length == 5) {
      (0,_place_phase__WEBPACK_IMPORTED_MODULE_3__.aiPlacePhase)(two); // AI places ships randomly
      const playerTiles = document.querySelectorAll('.cell');
      playerTiles.forEach(tile => {
        tile.removeEventListener("click", handlePlaceShips);
      })
      playerTiles.forEach(tile => {
        tile.removeEventListener("mouseenter", hoverHandler);
      })
      playerTiles.forEach(tile => {
        tile.removeEventListener('mouseleave', _place_phase__WEBPACK_IMPORTED_MODULE_3__.removeHoverable)
      })
      mainPhaseEvent();
    }
}

function hoverHandler(event) {
  (0,_place_phase__WEBPACK_IMPORTED_MODULE_3__.colorOnHover)(length, axis, event.target.id);
}
  

// This function adds the event to each tile to place ships and creates a button (and event) to
// change the axis the ship is placed.
function placeShipsEvent() {
    // Click to change the axis the player wishes to place his ships.
    let axisButton = document.createElement('button');
    axisButton.id = 'axis-button';
    axisButton.textContent = "Swap Axis";
    axisButton.addEventListener('click', () => axis = axisSwap(axis));
    upper.appendChild(axisButton);
  
    // Get all the tiles and create a click event.
    const playerTiles = document.querySelectorAll('.cell');
    playerTiles.forEach(tile => {
      tile.addEventListener('click', handlePlaceShips);
    })

    playerTiles.forEach(tile => {
      tile.addEventListener('mouseenter', hoverHandler);
    })

    playerTiles.forEach(tile => {
      tile.addEventListener('mouseleave', _place_phase__WEBPACK_IMPORTED_MODULE_3__.removeHoverable);
    })
}

// This function removes the axis button from the positioning phase, changes the header text, 
// creates a new board to display the opponent's tiles, and
// adds event listeners to the opponent's board so that the player can make attacks.
function mainPhaseEvent() {
    let axisButton = document.getElementById('axis-button');
    upper.removeChild(axisButton);
    let header = document.getElementById('header-description');
    header.textContent = 'Choose a Tile to Strike';

    const gridPlayerTwo = (0,_display_board__WEBPACK_IMPORTED_MODULE_0__.displayEnemyBoard)(two);
    board.appendChild(gridPlayerTwo);

    const enemyTiles = document.querySelectorAll('.enemy-cell');
    enemyTiles.forEach(tile => {
        tile.addEventListener('click', handleMainPhase);
      })
}

// This function handles the transition from the player's move to the ai's move. It also checks
// when the game ends and calls the handler for that phase.
function handleMainPhase(event) {
    // Don't increment the turn if the player is hitting the same square.
    if(event.target.classList.contains('hit') || event.target.classList.contains('miss'));
    else {
        waitForPlayerPhase(event); // wait for the player turn

        // Check if player one wins.
        if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_1__["default"])(two, 'two')) {
            handleGameOver("Player One", one);
        }
        else {
            // AI turn occurs after the player turn.
            (0,_main_phase__WEBPACK_IMPORTED_MODULE_2__.aiMainPhase)(one);

            // Check if player two wins.
            if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_1__["default"])(one, 'one')) {
                handleGameOver("Player Two", two);
            }
        }
    }
}

// Passes the AI player object, the AI tile id, and the AI tile. Forces AI to wait until
// player has made their move.
async function waitForPlayerPhase(event) {
    await (0,_main_phase__WEBPACK_IMPORTED_MODULE_2__.playerMainPhase)(two, event.target.id, event.target);
}

// This function displays the winner in the header, displays the unrevealed ai ships, removes
// the event listeners and displays the reset button.
function handleGameOver(winner, winnerObject) {
    let header = document.getElementById('header-description');
    header.textContent = 'Winner: ' + winner + '!';

    const occupiedSpaces = winnerObject.bFactory.occupiedSpaces;
    // Go through all the coordinates with a ship.
    occupiedSpaces.forEach((item) => {
        let tile = "";
        if(winner == "Player Two")
            tile = document.getElementById(`e${item}`);
        else
            tile = document.getElementById(`${item}`);
        // Change the color of the tile to show the loser the location of the enemy ships.
        if(!tile.classList.contains('hit') || !tile.classList.contains('miss') || !tile.classList.contains('player-ship'))
            tile.classList.add('player-ship');
    })

    // Remove event listeners for each tile.
    const enemyTiles = document.querySelectorAll('.enemy-cell');
    enemyTiles.forEach(tile => {
        tile.removeEventListener('click', handleMainPhase);
      })

    let resetButton = document.createElement('button');
    resetButton.textContent = "Play again?";
    upper.appendChild(resetButton);

    resetButton.addEventListener('click', resetEvent);
}

// This function removes everything in the main container, re-adds the upper container
// and the board container, re-creates the players and initializes them, and calls the startButtonEvent.
function resetEvent() {
    main.innerHTML = ""; // Remove everything in the content container.

    const upperContainer = document.createElement('upper-container'); // Re-create upperContainer
    upper = upperContainer;
    const boardContainer = document.createElement('board-container'); // Re-create boardContainer
    board = boardContainer;

    one = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Re-create player one and player two.
    two = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])();

    length = 2; // reset globals
    axis = 'x'; // reset globals

    main.appendChild(upperContainer);
    main.appendChild(boardContainer);

    startButtonEvent(); // call the start button event
}

/***/ }),

/***/ "./src/game-over-check.js":
/*!********************************!*\
  !*** ./src/game-over-check.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameOverCheck)
/* harmony export */ });
// 'player' is the player object.
// 'identifier' identifies if player is 'one' or 'two'
// When the count is 5 (because there are 5 ships) the game ends.
function gameOverCheck(player, identifier) {
    let count = 0;

    for(let i = 0; i < player.bFactory.ships.length; i++) {
        let ship = player.bFactory.ships[i];
        if(ship.isSunk()) {
            player.bFactory.addSunkShip(ship); // add the ship to a set of sunk ships
            sunkModifier(player, identifier); // modify the styling of the ship.
            count++; // iterate the count
        }
    }
    if(count == 5) return true;

    return false;
}


// Takes the player and the identifier to determine if the player is player one or two.
// Finds the set of sunk ships within the player object and adds the sunk class to the tiles
// at the coordinates of each sunk ship.
function sunkModifier(player, identifier) {
    const sunkShips = player.bFactory.sunkShips;
    sunkShips.forEach((item) => {
        const coords = item.coordinates;

        coords.forEach((coord) => {
            if(identifier == 'one') {
                let tile = document.getElementById(coord);
                tile.classList.add('sunk');
            }
            else {
                let tile = document.getElementById("e" + coord);
                tile.classList.add('sunk');
            }
                
        })
    })
}



/***/ }),

/***/ "./src/gameboard-factory.js":
/*!**********************************!*\
  !*** ./src/gameboard-factory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard)
/* harmony export */ });
/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ "./src/ship-factory.js");


function createGameBoard() {
    let board = new Array(10);
    generateBoard(board);
    let ships = new Array();
    let occupiedSpaces = new Set();
    let sunkShips = new Set();

    // 10 by 10 array
    function generateBoard(board) {
        for(let i = 0; i < board.length; i++){
            board[i] = new Array(10);
        }
    }

    // Check if the given space is occupied by another ship
    function isOccupiedSpace(x, y) {
        return occupiedSpaces.has(`${x}${y}`);
    }

    // Test for a ship placed out of bounds. Function returns null if out of bounds.
    function outOfBounds(length, axis, x, y) {
        if(axis === 'x') {
            let outOfBounds = parseInt(x) + length;
            if(outOfBounds > 10)
                return null;
        } else if(axis === 'y') {
            let outOfBounds = parseInt(y) + length;
            if(outOfBounds > 10)
                return null;
        }
    }

    // "length" is the length of the ship.
    // "axis" is the axis the ship will be placed.
    // "x" and "y" are the starting x and y coordinates the ship will be placed.
    function placeShip(length, axis, x, y) {
        // Test out of bounds.
        if(outOfBounds(length, axis, x, y) === null) {
            console.log('Out of bounds.');
            return ships; // return ships without creating anything
        }

        let shipPosition = [];
        for(let i = 0; i < length; i++) {
            if(axis === 'x') {
                let xIncrement = parseInt(x) + i;
                // Test if space is occupied.
                if(isOccupiedSpace(xIncrement, y)) {
                    return ships;
                }
                shipPosition[i] = `${xIncrement}${y}`;
            } else if(axis === 'y') {
                let yIncrement = parseInt(y) + i;
                if(isOccupiedSpace(x, yIncrement)) {
                    return ships;
                }
                shipPosition[i] = `${x}${yIncrement}`;
            }
        }

        // Add the new ship's coordinates to the occupiedSpaces Set
        shipPosition.forEach((coord) => {
            occupiedSpaces.add(coord);
        });


        const ship = (0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__.createShip)(length, shipPosition); // Create the ship.
        ships.push(ship); // Push the new ship onto the ships array.

        // Return the ships array.
        return ships;
    }

    // Receives an x,y coordinate for attack.
    // Determines if the board coordinate has a miss/hit in it already.
    // Nested loops to go through each ship's coordinates. 
    // O(n^m) time complexity. Where n is the number of ships and m is the xy of each ship.
    function receiveAttack(x, y) {
        let xy = x.toString() + y.toString();
        if(board[x][y]) return false; 
        else {
            board[x][y] = "miss";
            for(let i = 0; i < ships.length; i++) {
                for(let j = 0; j < ships[i].coordinates.length; j++) {
                    if(ships[i].coordinates[j] === xy) {
                        board[x][y] = "hit";
                        ships[i].hit();
                    }
                }
            }
            return true;
        }
    }

    function addSunkShip(ship) {
        sunkShips.add(ship);
    }

    return {
        board,
        ships,
        occupiedSpaces,
        sunkShips,
        addSunkShip,
        placeShip,
        receiveAttack,
    };
}

/***/ }),

/***/ "./src/gamestate.js":
/*!**************************!*\
  !*** ./src/gamestate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameState)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom_and_event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-and-event-listeners */ "./src/dom-and-event-listeners.js");

// import { placePhase, defaultPlacePhase, defaultPlacePhase2 } from "./place-phase";
// import { mainPhase, defaultMainPhase } from "./main-phase";


// This function creates two player objects and passes them into the setupDOM function.
// Largely the actual gamestate is controlled by dom-and-event-listeners.js, but if you want to test
// the game logic without the DOM or event listeners, you can do that here using the default functions
// that have been commented out.
function gameState(content) {
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Two separate boards.
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();

    (0,_dom_and_event_listeners__WEBPACK_IMPORTED_MODULE_1__.setupDOM)(content, playerOne, playerTwo);

    // Functions to help test to make sure everything works outside of the DOM and before event listeners.
    // defaultPlacePhase(playerOne);
    // defaultPlacePhase2(playerTwo);
    // defaultMainPhase(playerOne, playerTwo);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamestate */ "./src/gamestate.js");



const body = document.querySelector('body');
const content = document.createElement('content');
body.appendChild(content);

(0,_gamestate__WEBPACK_IMPORTED_MODULE_1__["default"])(content);

/***/ }),

/***/ "./src/main-phase.js":
/*!***************************!*\
  !*** ./src/main-phase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiMainPhase": () => (/* binding */ aiMainPhase),
/* harmony export */   "defaultMainPhase": () => (/* binding */ defaultMainPhase),
/* harmony export */   "playerMainPhase": () => (/* binding */ playerMainPhase)
/* harmony export */ });
/* harmony import */ var _game_over_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-over-check */ "./src/game-over-check.js");


// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss
// via CSS. The AI tile id is different from the player's. It is in the format: e00, e01 ... e98, e99
function playerMainPhase(opponent, id, tile) {
    // Wrap the code in a promise, so the aiMainPhase waits for the playerMainPhase.
    return new Promise(resolve => {
        let x = parseInt(id.charAt(1)); // get coordinates from tile id
        let y = parseInt(id.charAt(2));

        opponent.attacked(x, y); // attack the enemy player

        if(opponent.bFactory.board[x][y] === 'miss') {
            tile.classList.add('miss'); // if miss, add class 'miss' for styling
        }   
        else {
            tile.classList.add('hit'); // if hit, add class 'hit' for styling
        }

        resolve();
        });
}

// Function attacks the opponent's ship and tile. A class is added to the tile to indicate a hit or miss.
function aiMainPhase(opponent) {
    let x; // the x value to attack
    let y; // the y value to attack
    let tile; // the target tile
    let found = false; // The boolean to indicate if an adjacent tile has been found.

    // Get all tiles with the 'hit' class for follow-through logic.
    let hits = document.querySelectorAll('.hit');

    // Go through each hit and attempt to find an available target.
    for(let i = 0; i < hits.length; i++) {
        let hit = hits[i];
        if(hit.classList.contains('sunk') || hit.classList.contains('enemy-cell')) {
          // Do nothing and move to the next hit, if the class is a sunken ship or an ai ship.
        } else {
          const hitId = hit.id;
          let axisAdjacent = aiConfirmAdjacent(hitId); // confirms an adjacent hit and the axis
          
          // aiConfirmAdjacent will return the axis even if both sides have a miss, but if aiPathing
          // cannot find an appropriate target, it will not break the loop. Thus, you can use the
          // aiFindsAdjacentTile to clean up ships that are placed side by side.
          if(axisAdjacent) {
            if(axisAdjacent == 'x') {
                let availableTargetId = aiPathing(hitId, axisAdjacent);
                if(availableTargetId) {
                    x = availableTargetId.charAt(0);
                    y = availableTargetId.charAt(1);
                    tile = document.getElementById(`${x}${y}`); // find the corresponding tile
                    found = true;
                    break; // break out of the loop
                }
            } else if(axisAdjacent == 'y') {
                let availableTargetId = aiPathing(hitId, axisAdjacent);
                if(availableTargetId) {
                    x = availableTargetId.charAt(0);
                    y = availableTargetId.charAt(1);
                    tile = document.getElementById(`${x}${y}`); // find the corresponding tile
                    found = true;
                    break; // break out of the loop
                }
            }
          }

            let availableTargetId = aiFindsAdjacentTile(hitId); // find an available target
            if(availableTargetId) {
                x = availableTargetId.charAt(0);
                y = availableTargetId.charAt(1);
                tile = document.getElementById(`${x}${y}`); // find the corresponding tile
                found = true;
                break; // break out of the loop
            }
        }
    }

    // If an adjacent tile was found, attack the target. Otherwise the AI finds a random tile.
    if(found)
        opponent.attacked(x, y); // the enemy player object calls its attacked function
    else {
        tile = aiFindsRandom();
        x = parseInt(tile.id.charAt(0));
        y = parseInt(tile.id.charAt(1));
        opponent.attacked(x, y);
    }
      
    if(opponent.bFactory.board[x][y] === 'miss') {
        tile.classList.add('miss');
    }
        
    else {
        tile.classList.add('hit');
    }
}

// The function that confirms two adjacent hits for the AI.
function aiConfirmAdjacent(id) {
    let x = parseInt(id.charAt(0)); // the previous x value where a hit has been found
    let y = parseInt(id.charAt(1)); // the previous y value where a hit has been found
    let array = [x + 1, x - 1, y + 1, y - 1]; // the adjacent tile values
    let found = false; // if the next target has been found
    let axis = "";

    for(let i = 0; i < array.length; i++) {
        if(found) break;
        // Discriminate against out of bounds.
        if(array[i] < 0 || array[i] > 9);
        // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
        else {
            if(i < 2) {
                let tile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('sunk'));
                else if(tile.classList.contains('hit')) {
                    found = true;
                    axis = 'x';
                }
            } else {
                let tile = document.getElementById(`${x}${array[i]}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('sunk'));
                else if(tile.classList.contains('hit')) {
                    found = true;
                    axis = 'y';
                }
            }
        }
    }
    return axis;
}

// Once two adjacent hits are confirmed, the ai will target adjacent tiles on the axis.
function aiPathing(id, axis) {
    let x = parseInt(id.charAt(0)); // the previous x value where a hit has been found
    let y = parseInt(id.charAt(1)); // the previous y value where a hit has been found
    let found = false; // if the next target has been found
    let targetId = null; // the new target id to return
    
    if(axis == 'x') {
        let array = [x + 1, x + 2, x + 3, x + 4, x + 5, 
        x - 1, x - 2, x - 3, x - 4, x - 5]; // the potential adjacent axis values

        for(let i = 0; i < array.length/2; i++) {
            if(found) break;
            // Discriminate against out of bounds.
            if(array[i] < 0 || array[i] > 9);
            else {
                let tile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                if(tile.classList.contains('miss')) {
                    break; // a miss marks the end of one side of the axis
                }
                else if(tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
        for(let i = array.length/2; i < array.length; i++) {
            if(found) break;
            // Discriminate against out of bounds.
            if(array[i] < 0 || array[i] > 9);
            else {
                let tile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                if(tile.classList.contains('miss')) {
                    break; // a miss marks the end of one side of the axis
                }
                else if(tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
    } else {
        let array = [y + 1, y + 2, y + 3, y + 4, y + 5,
        y - 1, y - 2, y - 3, y - 4, y - 5];

        for(let i = 0; i < array.length/2; i++) {
            if(found) break;
            // Discriminate against out of bounds.
            if(array[i] < 0 || array[i] > 9);
            // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
            else {
                let tile = document.getElementById(`${x}${array[i]}`); // find the corresponding tile
                if(tile.classList.contains('miss')) {
                    break; // a miss marks the end of one side of the axis
                }
                else if (tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
        for(let i = array.length/2; i < array.length; i++) {
            if(found) break;
            // Discriminate against out of bounds.
            if(array[i] < 0 || array[i] > 9);
            // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
            else {
                let tile = document.getElementById(`${x}${array[i]}`); // find the corresponding tile
                if(tile.classList.contains('miss')) {
                    break; // a miss marks the end of one side of the axis
                }
                else if (tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
    }

    return targetId;
}

// The logic for the AI to find a tile where the space has not been taken or out of bounds.
// Returns the id of the first found target.
function aiFindsAdjacentTile(id) {
    let x = parseInt(id.charAt(0)); // the previous x value where a hit has been found
    let y = parseInt(id.charAt(1)); // the previous y value where a hit has been found
    let array = [x + 1, x - 1, y + 1, y - 1]; // the adjacent tile values
    let found = false; // if the next target has been found
    let targetId = null; // the new target id to return

    for(let i = 0; i < array.length; i++) {
        if(found) break;
        // Discriminate against out of bounds.
        if(array[i] < 0 || array[i] > 9);
        // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
        else {
            if(i < 2) {
                let tile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            } else {
                let tile = document.getElementById(`${x}${array[i]}`); // find the corresponding tile
                if(tile.classList.contains('miss') || tile.classList.contains('hit'));
                else {
                    found = true;
                    targetId = tile.id;
                }
            }
        }
    }
    return targetId;
}

// AI selects a random square in the grid.
function aiFindsRandom() {
    let count = 0;

    while(true) {
        let x = Math.floor(Math.random() * 10); // get random x y coordinates
        let y = Math.floor(Math.random() * 10);
        let tile = document.getElementById(`${x}${y}`); // find the corresponding tile

        if(!tile.classList.contains('miss') && !tile.classList.contains('hit')) {
            // For 10 attempts, the AI will attempt to find a tile that has two empty
            // adjacent tiles beside the random one selected. If it is unable to find one within
            // 10 attempts, it will just pass through this check.
            if(aiRandomPriority(tile) || count >= 10) {
                // console.log(`Attempt: ${count}`);
                return tile;
            } else {
            count++;
            }
        }
    }
}

// AI prioritizes squares that have two empty tiles adjacent to them.
function aiRandomPriority(tile) {
    let id = tile.id;
    let x = parseInt(id.charAt(0)); // x value of the tile to check
    let y = parseInt(id.charAt(1)); // y value of the tile to check
    let array = [x + 1, x - 1, y + 1, y - 1]; // the adjacent tile values
    let found = false; // if the next target has been found
    let count = 0; // The count to find two empty adjacent tiles.
    let target = null; // the new target id to return

    for(let i = 0; i < array.length; i++) {
        if(found) break;
        // Discriminate against out of bounds.
        if(array[i] < 0 || array[i] > 9);
        // Search the adjacent tiles on the xaxis. Else the adjacent tiles on the yaxis.
        else {
            if(i < 2) {
                let newTile = document.getElementById(`${array[i]}${y}`); // find the corresponding tile
                // If the tile has an open space, iterate the counter.
                if(newTile.classList.contains('miss') || newTile.classList.contains('hit'));
                else count++;
                // When the counter is 2, the tile has been found.
                if(count == 2) {
                    found = true;
                }
            } else {
                if(i == 2) count = 0; // reset the counter
                
                let newTile = document.getElementById(`${x}${array[i]}`);
                if(newTile.classList.contains('miss') || newTile.classList.contains('hit'));
                else count++;

                if(count == 2) {
                    found = true;
                }
            }
        }
    }

    // If the target was found, target will no longer be null.
    if(found) {
        target = tile;
        return target;
    } else
        return target;
    
}

// To help test the game logic without the DOM.
function defaultMainPhase(one, two) {
    two.attacked(0, 0); // patrol
    two.attacked(1, 0);

    two.attacked(1, 1); // sub
    two.attacked(2, 1);
    two.attacked(3, 1);

    two.attacked(2, 2); // destroyer
    two.attacked(3, 2);
    two.attacked(4, 2);

    two.attacked(3, 3); // battleship
    two.attacked(4, 3);
    two.attacked(5, 3);
    two.attacked(6, 3);

    two.attacked(4, 4); // carrier
    two.attacked(5, 4);  
    two.attacked(6, 4);  
    two.attacked(7, 4);  
    two.attacked(8, 4);

    if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_0__["default"])(one)) {
        console.log("The game is over. Player two wins.");
    }
    else if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_0__["default"])(two)) {
        console.log("The game is over. Player one wins.");
    }
    else {
        console.log("No one won. Something went wrong.");
    }
}

/***/ }),

/***/ "./src/place-phase.js":
/*!****************************!*\
  !*** ./src/place-phase.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiPlacePhase": () => (/* binding */ aiPlacePhase),
/* harmony export */   "colorOnHover": () => (/* binding */ colorOnHover),
/* harmony export */   "colorShip": () => (/* binding */ colorShip),
/* harmony export */   "defaultPlacePhase": () => (/* binding */ defaultPlacePhase),
/* harmony export */   "defaultPlacePhase2": () => (/* binding */ defaultPlacePhase2),
/* harmony export */   "placePhase": () => (/* binding */ placePhase),
/* harmony export */   "removeHoverable": () => (/* binding */ removeHoverable)
/* harmony export */ });
// Take the player's board, the tile id, the axis to place the ship, and the length of the ship.
function placePhase(one, id, axis, length) {
    let shipNumber = one.bFactory.ships.length; // get the number of ships
    let x = id.charAt(0); // get x from the tile id
    let y = id.charAt(1); // get y from the tile id
    one.place(length, axis, x, y); // place the ship
    let newShipNumber = one.bFactory.ships.length; // get the new number of ships

    // If the new number of ships is greater than the old number, the ship was successfully placed and
    // can be colored.
    if(newShipNumber > shipNumber)
        colorShip(length, axis, x, y);
}

// To help test the game state without the use of the DOM.
function defaultPlacePhase(one) {
    one.place(2, 'x', 0, 0); // ship of length 2 on the 'x' axis at coordinate: 0,0
    one.place(3, 'x', 1, 1);
    one.place(3, 'x', 2, 2);
    one.place(4, 'x', 3, 3);
    one.place(5, 'x', 4, 4);
}

function defaultPlacePhase2(two) {
    two.place(2, 'x', 0, 0); // ship of length 2 on the 'x' axis at coordinate: 0,0
    two.place(3, 'x', 1, 1);
    two.place(3, 'x', 2, 2);
    two.place(4, 'x', 3, 3);
    two.place(5, 'x', 4, 4);
}

function aiPlacePhase(two) {
  
    // Array of ship lengths to randomly choose from
    const shipLengths = [2, 3, 3, 4, 5];
  
    // Loop through the ship lengths and place each ship
    for (let i = 0; i < shipLengths.length; i++) {
      let shipNumber = two.bFactory.ships.length; // Get the number of ships in the player object
      const length = shipLengths[i];
      const axis = Math.random() < 0.5 ? 'x' : 'y';
  

      // This loop ensures a ship is being placed on the board.
      // If the place function is fed coordinates of an occupied space, a ship will not be placed.
      // This loop will repeat until the number of ships placed has increased.
      while (true) {
        let x, y;

        // Depending on the axis, the placement of the ship's starting coordinate will vary
        // by the length of the ship being placed.
        if(axis == 'x') {
            x = Math.floor(Math.random() * (10 - length));
            y = Math.floor(Math.random() * 10);
        }
        else {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * (10 - length));
        }
  
        two.place(length, axis, x, y);
  
        let newShipNumber = two.bFactory.ships.length; // Get the new number of ships
  
        if (newShipNumber > shipNumber) {
            break; // Exit the loop if the new number of ships is greater than the old number
        }
      }
    }
  }

// length, axis, x starting coordinate, y starting coordinate
// adding a class to style the tiles with ships
function colorShip(l, a, x, y) {
    for(let i = 0; i < l; i++) {
        if(a === 'x') {
            let xIncrement = parseInt(x) + i;
            let colorCell = document.getElementById(`${xIncrement}${y}`);
            colorCell.classList.add("player-ship");
        } else if(a === 'y') {
            let yIncrement = parseInt(y) + i;
            let colorCell = document.getElementById(`${x}${yIncrement}`);
            colorCell.classList.add('player-ship');
        }
    }
}

function colorOnHover(l, a, id) {
    let x = id.charAt(0); // get x from the tile id
    let y = id.charAt(1); // get y from the tile id

    for(let i = 0; i < l; i++) {
        if(a === 'x') {
            let outOfBounds = parseInt(x) + parseInt(l);
            if(outOfBounds <= 10) {
                let xIncrement = parseInt(x) + i;
                let colorCell = document.getElementById(`${xIncrement}${y}`);
                colorCell.classList.add("hoverable");
            }
        } else if(a === 'y') {
            let outOfBounds = parseInt(y) + parseInt(l);
            if(outOfBounds <= 10) {
                let yIncrement = parseInt(y) + i;
                let colorCell = document.getElementById(`${x}${yIncrement}`);
                colorCell.classList.add('hoverable');
            }
        }
    }
}

function removeHoverable() {
    let hoverableCells = document.querySelectorAll(".hoverable");

    hoverableCells.forEach(element => {
        element.classList.remove('hoverable');
    })
}

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-factory */ "./src/gameboard-factory.js");


// Each player has their own gameboard, a function to place a ship, a function to attack, and an
// array containing their ships.
function createPlayer() {
   const bFactory = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)(); // The board factory function.

   function place(length, axis, x, y) {
     bFactory.placeShip(length, axis, x, y);
   }
   
   function attacked(x, y) {
     bFactory.receiveAttack(x, y);
   }

   return {
    bFactory, 
    place,
    attacked
   };
}

/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(length, array) {
    const coordinates = array;
    let hits = new Array(length).fill(false); // Fill the hits array with false values.
    let sunk = false;
  
    function hit() {
        // Find the next available hit that is false and make it true and then break the loop.
        for(let i = 0; i < hits.length; i++) {
          if(hits[i] === false) {
            hits[i] = true;
            break;
          }
        }
        
        // If every element in the hits array is true.
        if (hits.every(hit => hit)) {
          sunk = true;
          return true;
        } else return false;
    }
  
    function getLength() {
      return length;
    }
  
    function getHits() {
      return hits.slice();
    }
  
    function isSunk() {
      return sunk;
    }
  
    return {
      hit,
      getLength,
      getHits,
      isSunk,
      coordinates
    };
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLHVEQUF1RCxXQUFXLEVBQUUsRUFBRTtBQUN0RTtBQUNBLFVBQVU7QUFDVjtBQUNBLHVEQUF1RCxFQUFFLEVBQUUsV0FBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDBCQUEwQjtBQUMxQiwwQkFBMEI7O0FBRTFCLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFdBQVcsRUFBRSxFQUFFO0FBQzFFO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEVBQUUsRUFBRSxXQUFXO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNwSHNEOztBQUV0RDtBQUNBO0FBQ2U7QUFDZixvQkFBb0IsbUVBQWUsSUFBSTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCTztBQUNQO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXItY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlLXBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC1mYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uaG92ZXJhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMC41KTsgLyogZ29sZCB3aXRoIDUwJSB0cmFuc3BhcmVuY3kgKi9cXG59XFxuXFxudXBwZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVwcGVyLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjVGNUY1LCAjRTBFMEUwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbnVwcGVyLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBnb2xkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmVuZW15LWNlbGw6aG92ZXI6bm90KC5oaXQpOm5vdCgubWlzcykge1xcbiAgYW5pbWF0aW9uOiBmbGFzaCAwLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIH1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdDQUF3QyxFQUFFLCtCQUErQjtBQUM3RTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOzs7QUFHRjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5ob3ZlcmFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjE1LCAwLCAwLjUpOyAvKiBnb2xkIHdpdGggNTAlIHRyYW5zcGFyZW5jeSAqL1xcbn1cXG5cXG51cHBlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudXBwZXItY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGNUY1RjUsICNFMEUwRTApO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxudXBwZXItY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGdvbGQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcblxcblxcbi5lbmVteS1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktY2VsbDpob3Zlcjpub3QoLmhpdCk6bm90KC5taXNzKSB7XFxuICBhbmltYXRpb246IGZsYXNoIDAuNXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxhc2gge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgfVxcbn1cXG5cXG4ubnVtYmVyLWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGV0dGVyLWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgfVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAvLyBUaGUgdGFibGUgdG8gaG9sZCB0aGUgYm9hcmQuXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYkZhY3RvcnkuYm9hcmQ7IC8vIFRoZSBib2FyZCBhcnJheS5cblxuICAgIGNvbnN0IG51bVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTsgLy8gVG8gaG9sZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIG51bVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIC8vIEFkZCBhbiBlbXB0eSBjZWxsIHRvIHRoZSBsZWZ0IG9mIHRoZSBudW1iZXJzIGFuZCBhYm92ZSB0aGUgbGV0dGVycy5cbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcbiAgICBudW1Sb3cuYXBwZW5kQ2hpbGQoZW1wdHlDZWxsKTtcblxuICAgIC8vIExvb3AgdG8gYWRkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG51bWJlckNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsXCIpO1xuICAgICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIG51bVJvdy5hcHBlbmRDaGlsZChudW1iZXJDZWxsKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobnVtUm93KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBsZXR0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBsZXR0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2xldHRlci1jZWxsJyk7XG4gICAgICAgIGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGV0dGVyQ2VsbCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RW5lbXlCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTsgLy8gVGhlIHRhYmxlIHRvIGhvbGQgdGhlIGJvYXJkLlxuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJGYWN0b3J5LmJvYXJkOyAvLyBUaGUgYm9hcmQgYXJyYXkuXG5cbiAgICBjb25zdCBudW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7IC8vIFRvIGhvbGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBudW1Sb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBBZGQgYW4gZW1wdHkgY2VsbCB0byB0aGUgbGVmdCBvZiB0aGUgbnVtYmVycyBhbmQgYWJvdmUgdGhlIGxldHRlcnMuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG4gICAgbnVtUm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG5cbiAgICAvLyBMb29wIHRvIGFkZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBudW1iZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBudW1Sb3cuYXBwZW5kQ2hpbGQobnVtYmVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG51bVJvdyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgY29uc3QgbGV0dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItY2VsbCcpO1xuICAgICAgICBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxldHRlckNlbGwpO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBcImVcIiArIGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59IiwiaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBkaXNwbGF5RW5lbXlCb2FyZCB9IGZyb20gXCIuL2Rpc3BsYXktYm9hcmRcIjtcbmltcG9ydCBnYW1lT3ZlckNoZWNrIGZyb20gXCIuL2dhbWUtb3Zlci1jaGVja1wiO1xuaW1wb3J0IHsgcGxheWVyTWFpblBoYXNlLCBhaU1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IGFpUGxhY2VQaGFzZSwgY29sb3JPbkhvdmVyLCBwbGFjZVBoYXNlLCByZW1vdmVIb3ZlcmFibGUgfSBmcm9tIFwiLi9wbGFjZS1waGFzZVwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IG9uZSA9IFwiXCI7IC8vIHBsYXllciBvbmVcbmxldCB0d28gPSBcIlwiOyAvLyBwbGF5ZXIgdHdvXG5sZXQgbWFpbiA9IFwiXCI7IC8vIG1haW4gY29udGFpbmVyIChjb250ZW50KSwganVzdCBpbiBjYXNlXG5sZXQgYm9hcmQgPSBcIlwiOyAvLyBib2FyZCBjb250YWluZXJcbmxldCB1cHBlciA9IFwiXCI7IC8vIHVwcGVyIGNvbnRhaW5lclxuXG5cbi8vIFNldHMgdXAgdGhlIHN0YXJ0IGJ1dHRvbiBhbmQgYnVpbGRzIHNvbWUgY29udGFpbmVycyBmb3IgbGF0ZXIgdXNlLlxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgb25lID0gcGxheWVyT25lO1xuICAgIHR3byA9IHBsYXllclR3bztcbiAgICBtYWluID0gY29udGVudDtcblxuICAgIGNvbnN0IHVwcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndXBwZXItY29udGFpbmVyJyk7XG4gICAgdXBwZXIgPSB1cHBlckNvbnRhaW5lcjtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRCdXR0b25FdmVudCgpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHN0YXJ0IGJ1dHRvblxuICAgICAgICB1cHBlci5yZW1vdmVDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGJvYXJkID0gYm9hcmRDb250YWluZXI7XG4gICAgdXBwZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xufVxuXG4vLyBXaGVuIHRoZSBzd2FwIGF4aXMgYnV0dG9uIGlzIGNsaWNrZWQsIGl0IGNoYW5nZXMgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAuXG5mdW5jdGlvbiBheGlzU3dhcChheGlzKSB7XG4gICAgaWYoYXhpcyA9PSAneCcpXG4gICAgICAgIHJldHVybiAneSc7XG4gICAgZWxzZSByZXR1cm4gJ3gnO1xufVxuXG4vLyBXaGVuIHRoZSBzdGFydCBidXR0b24gaXMgY2xpY2tlZC4gQWRkcyBhIGRlc2NyaXB0aW9uIG9mIHdoYXQgdG8gZG8sIGdlbmVyYXRlcyB0aGUgcGxheWVyIGJvYXJkLFxuLy8gY2FsbHMgdGhlIGZ1bmN0aW9uIHRvIHBsYWNlIHRoZSBzaGlwcy5cbmZ1bmN0aW9uIHN0YXJ0QnV0dG9uRXZlbnQoKSB7XG4gICAgLy8gRGVzY3JpcHRvclxuICAgIGxldCBwbGFjZVNoaXBzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBsYWNlU2hpcHNEZXNjcmlwdGlvbi5pZCA9ICdoZWFkZXItZGVzY3JpcHRpb24nO1xuICAgIHBsYWNlU2hpcHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiUGxhY2UgWW91ciBTaGlwc1wiO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBEaXNwbGF5IHRoZSBwbGF5ZXIncyBncmlkIHRvIHBsYWNlIHNoaXBzLlxuICAgIGNvbnN0IGdyaWRQbGF5ZXJPbmUgPSBkaXNwbGF5Qm9hcmQob25lKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyT25lKTtcblxuICAgIHBsYWNlU2hpcHNFdmVudCgpO1xufVxuXG5sZXQgYXhpcyA9ICd4JzsgLy8gRGVmYXVsdCBheGlzIGZvciBwbGFjaW5nIHNoaXBzLlxubGV0IGxlbmd0aCA9IDI7IC8vIFRoZSBmaXJzdCBzaGlwIHRvIHBsYWNlIGlzIHRoZSBwYXRyb2wgYm9hdC5cblxuLy8gVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkIGFuZCBjYWxscyBwbGFjZVBoYXNlIHVudGlsXG4vLyBhbGwgdGhlIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQuIEFsc28gcmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgb25jZVxuLy8gYWxsIHRoZSBzaGlwcyBhcmUgcGxhY2VkLlxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwcyhldmVudCkge1xuICAgIGxldCBzaGlwcyA9IG9uZS5iRmFjdG9yeS5zaGlwcztcblxuICAgIFxuICBcbiAgICBpZihzaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICBwbGFjZVBoYXNlKG9uZSwgZXZlbnQudGFyZ2V0LmlkLCBheGlzLCBsZW5ndGgpO1xuICAgICAgXG4gICAgICBpZihzaGlwcy5sZW5ndGggPT0gMSkgXG4gICAgICAgIGxlbmd0aCA9IDM7IC8vIHVwZGF0ZSB0byB0aGUgc3VibWFyaW5lXG4gICAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAyKVxuICAgICAgICBsZW5ndGggPSAzOyAvLyB1cGRhdGUgdG8gdGhlIGRlc3Ryb3llclxuICAgICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMylcbiAgICAgICAgbGVuZ3RoID0gNDsgLy8gdXBkYXRlIHRvIHRoZSBiYXR0bGVzaGlwXG4gICAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSA0KVxuICAgICAgICBsZW5ndGggPSA1OyAvLyB1cGRhdGUgdG8gdGhlIGNhcnJpZXJcbiAgICB9XG4gIFxuICAgIGlmKHNoaXBzLmxlbmd0aCA9PSA1KSB7XG4gICAgICBhaVBsYWNlUGhhc2UodHdvKTsgLy8gQUkgcGxhY2VzIHNoaXBzIHJhbmRvbWx5XG4gICAgICBjb25zdCBwbGF5ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGFjZVNoaXBzKTtcbiAgICAgIH0pXG4gICAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhvdmVySGFuZGxlcik7XG4gICAgICB9KVxuICAgICAgcGxheWVyVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgcmVtb3ZlSG92ZXJhYmxlKVxuICAgICAgfSlcbiAgICAgIG1haW5QaGFzZUV2ZW50KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBob3ZlckhhbmRsZXIoZXZlbnQpIHtcbiAgY29sb3JPbkhvdmVyKGxlbmd0aCwgYXhpcywgZXZlbnQudGFyZ2V0LmlkKTtcbn1cbiAgXG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyB0aGUgZXZlbnQgdG8gZWFjaCB0aWxlIHRvIHBsYWNlIHNoaXBzIGFuZCBjcmVhdGVzIGEgYnV0dG9uIChhbmQgZXZlbnQpIHRvXG4vLyBjaGFuZ2UgdGhlIGF4aXMgdGhlIHNoaXAgaXMgcGxhY2VkLlxuZnVuY3Rpb24gcGxhY2VTaGlwc0V2ZW50KCkge1xuICAgIC8vIENsaWNrIHRvIGNoYW5nZSB0aGUgYXhpcyB0aGUgcGxheWVyIHdpc2hlcyB0byBwbGFjZSBoaXMgc2hpcHMuXG4gICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBheGlzQnV0dG9uLmlkID0gJ2F4aXMtYnV0dG9uJztcbiAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2FwIEF4aXNcIjtcbiAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYXhpcyA9IGF4aXNTd2FwKGF4aXMpKTtcbiAgICB1cHBlci5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbiAgXG4gICAgLy8gR2V0IGFsbCB0aGUgdGlsZXMgYW5kIGNyZWF0ZSBhIGNsaWNrIGV2ZW50LlxuICAgIGNvbnN0IHBsYXllclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlU2hpcHMpO1xuICAgIH0pXG5cbiAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaG92ZXJIYW5kbGVyKTtcbiAgICB9KVxuXG4gICAgcGxheWVyVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUhvdmVyYWJsZSk7XG4gICAgfSlcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBheGlzIGJ1dHRvbiBmcm9tIHRoZSBwb3NpdGlvbmluZyBwaGFzZSwgY2hhbmdlcyB0aGUgaGVhZGVyIHRleHQsIFxuLy8gY3JlYXRlcyBhIG5ldyBib2FyZCB0byBkaXNwbGF5IHRoZSBvcHBvbmVudCdzIHRpbGVzLCBhbmRcbi8vIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBvcHBvbmVudCdzIGJvYXJkIHNvIHRoYXQgdGhlIHBsYXllciBjYW4gbWFrZSBhdHRhY2tzLlxuZnVuY3Rpb24gbWFpblBoYXNlRXZlbnQoKSB7XG4gICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy1idXR0b24nKTtcbiAgICB1cHBlci5yZW1vdmVDaGlsZChheGlzQnV0dG9uKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1kZXNjcmlwdGlvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBUaWxlIHRvIFN0cmlrZSc7XG5cbiAgICBjb25zdCBncmlkUGxheWVyVHdvID0gZGlzcGxheUVuZW15Qm9hcmQodHdvKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyVHdvKTtcblxuICAgIGNvbnN0IGVuZW15VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2VsbCcpO1xuICAgIGVuZW15VGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1haW5QaGFzZSk7XG4gICAgICB9KVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcGxheWVyJ3MgbW92ZSB0byB0aGUgYWkncyBtb3ZlLiBJdCBhbHNvIGNoZWNrc1xuLy8gd2hlbiB0aGUgZ2FtZSBlbmRzIGFuZCBjYWxscyB0aGUgaGFuZGxlciBmb3IgdGhhdCBwaGFzZS5cbmZ1bmN0aW9uIGhhbmRsZU1haW5QaGFzZShldmVudCkge1xuICAgIC8vIERvbid0IGluY3JlbWVudCB0aGUgdHVybiBpZiB0aGUgcGxheWVyIGlzIGhpdHRpbmcgdGhlIHNhbWUgc3F1YXJlLlxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSk7XG4gICAgZWxzZSB7XG4gICAgICAgIHdhaXRGb3JQbGF5ZXJQaGFzZShldmVudCk7IC8vIHdhaXQgZm9yIHRoZSBwbGF5ZXIgdHVyblxuXG4gICAgICAgIC8vIENoZWNrIGlmIHBsYXllciBvbmUgd2lucy5cbiAgICAgICAgaWYoZ2FtZU92ZXJDaGVjayh0d28sICd0d28nKSkge1xuICAgICAgICAgICAgaGFuZGxlR2FtZU92ZXIoXCJQbGF5ZXIgT25lXCIsIG9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBSSB0dXJuIG9jY3VycyBhZnRlciB0aGUgcGxheWVyIHR1cm4uXG4gICAgICAgICAgICBhaU1haW5QaGFzZShvbmUpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwbGF5ZXIgdHdvIHdpbnMuXG4gICAgICAgICAgICBpZihnYW1lT3ZlckNoZWNrKG9uZSwgJ29uZScpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlR2FtZU92ZXIoXCJQbGF5ZXIgVHdvXCIsIHR3byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFBhc3NlcyB0aGUgQUkgcGxheWVyIG9iamVjdCwgdGhlIEFJIHRpbGUgaWQsIGFuZCB0aGUgQUkgdGlsZS4gRm9yY2VzIEFJIHRvIHdhaXQgdW50aWxcbi8vIHBsYXllciBoYXMgbWFkZSB0aGVpciBtb3ZlLlxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclBsYXllclBoYXNlKGV2ZW50KSB7XG4gICAgYXdhaXQgcGxheWVyTWFpblBoYXNlKHR3bywgZXZlbnQudGFyZ2V0LmlkLCBldmVudC50YXJnZXQpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIHRoZSB3aW5uZXIgaW4gdGhlIGhlYWRlciwgZGlzcGxheXMgdGhlIHVucmV2ZWFsZWQgYWkgc2hpcHMsIHJlbW92ZXNcbi8vIHRoZSBldmVudCBsaXN0ZW5lcnMgYW5kIGRpc3BsYXlzIHRoZSByZXNldCBidXR0b24uXG5mdW5jdGlvbiBoYW5kbGVHYW1lT3Zlcih3aW5uZXIsIHdpbm5lck9iamVjdCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1dpbm5lcjogJyArIHdpbm5lciArICchJztcblxuICAgIGNvbnN0IG9jY3VwaWVkU3BhY2VzID0gd2lubmVyT2JqZWN0LmJGYWN0b3J5Lm9jY3VwaWVkU3BhY2VzO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIHRoZSBjb29yZGluYXRlcyB3aXRoIGEgc2hpcC5cbiAgICBvY2N1cGllZFNwYWNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCB0aWxlID0gXCJcIjtcbiAgICAgICAgaWYod2lubmVyID09IFwiUGxheWVyIFR3b1wiKVxuICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlJHtpdGVtfWApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aXRlbX1gKTtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdGlsZSB0byBzaG93IHRoZSBsb3NlciB0aGUgbG9jYXRpb24gb2YgdGhlIGVuZW15IHNoaXBzLlxuICAgICAgICBpZighdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8ICF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8ICF0aWxlLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXNoaXAnKSlcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXAnKTtcbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCB0aWxlLlxuICAgIGNvbnN0IGVuZW15VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2VsbCcpO1xuICAgIGVuZW15VGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1haW5QaGFzZSk7XG4gICAgICB9KVxuXG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW4/XCI7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEV2ZW50KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGV2ZXJ5dGhpbmcgaW4gdGhlIG1haW4gY29udGFpbmVyLCByZS1hZGRzIHRoZSB1cHBlciBjb250YWluZXJcbi8vIGFuZCB0aGUgYm9hcmQgY29udGFpbmVyLCByZS1jcmVhdGVzIHRoZSBwbGF5ZXJzIGFuZCBpbml0aWFsaXplcyB0aGVtLCBhbmQgY2FsbHMgdGhlIHN0YXJ0QnV0dG9uRXZlbnQuXG5mdW5jdGlvbiByZXNldEV2ZW50KCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjsgLy8gUmVtb3ZlIGV2ZXJ5dGhpbmcgaW4gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuXG4gICAgY29uc3QgdXBwZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1cHBlci1jb250YWluZXInKTsgLy8gUmUtY3JlYXRlIHVwcGVyQ29udGFpbmVyXG4gICAgdXBwZXIgPSB1cHBlckNvbnRhaW5lcjtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvYXJkLWNvbnRhaW5lcicpOyAvLyBSZS1jcmVhdGUgYm9hcmRDb250YWluZXJcbiAgICBib2FyZCA9IGJvYXJkQ29udGFpbmVyO1xuXG4gICAgb25lID0gY3JlYXRlUGxheWVyKCk7IC8vIFJlLWNyZWF0ZSBwbGF5ZXIgb25lIGFuZCBwbGF5ZXIgdHdvLlxuICAgIHR3byA9IGNyZWF0ZVBsYXllcigpO1xuXG4gICAgbGVuZ3RoID0gMjsgLy8gcmVzZXQgZ2xvYmFsc1xuICAgIGF4aXMgPSAneCc7IC8vIHJlc2V0IGdsb2JhbHNcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuXG4gICAgc3RhcnRCdXR0b25FdmVudCgpOyAvLyBjYWxsIHRoZSBzdGFydCBidXR0b24gZXZlbnRcbn0iLCIvLyAncGxheWVyJyBpcyB0aGUgcGxheWVyIG9iamVjdC5cbi8vICdpZGVudGlmaWVyJyBpZGVudGlmaWVzIGlmIHBsYXllciBpcyAnb25lJyBvciAndHdvJ1xuLy8gV2hlbiB0aGUgY291bnQgaXMgNSAoYmVjYXVzZSB0aGVyZSBhcmUgNSBzaGlwcykgdGhlIGdhbWUgZW5kcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVPdmVyQ2hlY2socGxheWVyLCBpZGVudGlmaWVyKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXIuYkZhY3Rvcnkuc2hpcHNbaV07XG4gICAgICAgIGlmKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHBsYXllci5iRmFjdG9yeS5hZGRTdW5rU2hpcChzaGlwKTsgLy8gYWRkIHRoZSBzaGlwIHRvIGEgc2V0IG9mIHN1bmsgc2hpcHNcbiAgICAgICAgICAgIHN1bmtNb2RpZmllcihwbGF5ZXIsIGlkZW50aWZpZXIpOyAvLyBtb2RpZnkgdGhlIHN0eWxpbmcgb2YgdGhlIHNoaXAuXG4gICAgICAgICAgICBjb3VudCsrOyAvLyBpdGVyYXRlIHRoZSBjb3VudFxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGNvdW50ID09IDUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFRha2VzIHRoZSBwbGF5ZXIgYW5kIHRoZSBpZGVudGlmaWVyIHRvIGRldGVybWluZSBpZiB0aGUgcGxheWVyIGlzIHBsYXllciBvbmUgb3IgdHdvLlxuLy8gRmluZHMgdGhlIHNldCBvZiBzdW5rIHNoaXBzIHdpdGhpbiB0aGUgcGxheWVyIG9iamVjdCBhbmQgYWRkcyB0aGUgc3VuayBjbGFzcyB0byB0aGUgdGlsZXNcbi8vIGF0IHRoZSBjb29yZGluYXRlcyBvZiBlYWNoIHN1bmsgc2hpcC5cbmZ1bmN0aW9uIHN1bmtNb2RpZmllcihwbGF5ZXIsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBwbGF5ZXIuYkZhY3Rvcnkuc3Vua1NoaXBzO1xuICAgIHN1bmtTaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGl0ZW0uY29vcmRpbmF0ZXM7XG5cbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBpZihpZGVudGlmaWVyID09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZVwiICsgY29vcmQpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwLWZhY3RvcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICAgIGdlbmVyYXRlQm9hcmQoYm9hcmQpO1xuICAgIGxldCBzaGlwcyA9IG5ldyBBcnJheSgpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgc3Vua1NoaXBzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gMTAgYnkgMTAgYXJyYXlcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZ2l2ZW4gc3BhY2UgaXMgb2NjdXBpZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgZnVuY3Rpb24gaXNPY2N1cGllZFNwYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkU3BhY2VzLmhhcyhgJHt4fSR7eX1gKTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGZvciBhIHNoaXAgcGxhY2VkIG91dCBvZiBib3VuZHMuIEZ1bmN0aW9uIHJldHVybnMgbnVsbCBpZiBvdXQgb2YgYm91bmRzLlxuICAgIGZ1bmN0aW9uIG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHgpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiAxMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmKGF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRzID0gcGFyc2VJbnQoeSkgKyBsZW5ndGg7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA+IDEwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gXCJsZW5ndGhcIiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuICAgIC8vIFwiYXhpc1wiIGlzIHRoZSBheGlzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIC8vIFwieFwiIGFuZCBcInlcIiBhcmUgdGhlIHN0YXJ0aW5nIHggYW5kIHkgY29vcmRpbmF0ZXMgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWQuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICAvLyBUZXN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBzOyAvLyByZXR1cm4gc2hpcHMgd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc3BhY2UgaXMgb2NjdXBpZWQuXG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHhJbmNyZW1lbnQsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eEluY3JlbWVudH0ke3l9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgICAgICBpZihpc09jY3VwaWVkU3BhY2UoeCwgeUluY3JlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25baV0gPSBgJHt4fSR7eUluY3JlbWVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgc2hpcCdzIGNvb3JkaW5hdGVzIHRvIHRoZSBvY2N1cGllZFNwYWNlcyBTZXRcbiAgICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlcy5hZGQoY29vcmQpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCwgc2hpcFBvc2l0aW9uKTsgLy8gQ3JlYXRlIHRoZSBzaGlwLlxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApOyAvLyBQdXNoIHRoZSBuZXcgc2hpcCBvbnRvIHRoZSBzaGlwcyBhcnJheS5cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNoaXBzIGFycmF5LlxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgLy8gUmVjZWl2ZXMgYW4geCx5IGNvb3JkaW5hdGUgZm9yIGF0dGFjay5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBib2FyZCBjb29yZGluYXRlIGhhcyBhIG1pc3MvaGl0IGluIGl0IGFscmVhZHkuXG4gICAgLy8gTmVzdGVkIGxvb3BzIHRvIGdvIHRocm91Z2ggZWFjaCBzaGlwJ3MgY29vcmRpbmF0ZXMuIFxuICAgIC8vIE8obl5tKSB0aW1lIGNvbXBsZXhpdHkuIFdoZXJlIG4gaXMgdGhlIG51bWJlciBvZiBzaGlwcyBhbmQgbSBpcyB0aGUgeHkgb2YgZWFjaCBzaGlwLlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBsZXQgeHkgPSB4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal0gPT09IHh5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3Vua1NoaXAoc2hpcCkge1xuICAgICAgICBzdW5rU2hpcHMuYWRkKHNoaXApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgb2NjdXBpZWRTcGFjZXMsXG4gICAgICAgIHN1bmtTaGlwcyxcbiAgICAgICAgYWRkU3Vua1NoaXAsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufSIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG4vLyBpbXBvcnQgeyBwbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZSwgZGVmYXVsdFBsYWNlUGhhc2UyIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcbi8vIGltcG9ydCB7IG1haW5QaGFzZSwgZGVmYXVsdE1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IHNldHVwRE9NIH0gZnJvbSBcIi4vZG9tLWFuZC1ldmVudC1saXN0ZW5lcnNcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHR3byBwbGF5ZXIgb2JqZWN0cyBhbmQgcGFzc2VzIHRoZW0gaW50byB0aGUgc2V0dXBET00gZnVuY3Rpb24uXG4vLyBMYXJnZWx5IHRoZSBhY3R1YWwgZ2FtZXN0YXRlIGlzIGNvbnRyb2xsZWQgYnkgZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMsIGJ1dCBpZiB5b3Ugd2FudCB0byB0ZXN0XG4vLyB0aGUgZ2FtZSBsb2dpYyB3aXRob3V0IHRoZSBET00gb3IgZXZlbnQgbGlzdGVuZXJzLCB5b3UgY2FuIGRvIHRoYXQgaGVyZSB1c2luZyB0aGUgZGVmYXVsdCBmdW5jdGlvbnNcbi8vIHRoYXQgaGF2ZSBiZWVuIGNvbW1lbnRlZCBvdXQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lU3RhdGUoY29udGVudCkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IGNyZWF0ZVBsYXllcigpOyAvLyBUd28gc2VwYXJhdGUgYm9hcmRzLlxuICAgIGNvbnN0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpO1xuXG4gICAgc2V0dXBET00oY29udGVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgLy8gRnVuY3Rpb25zIHRvIGhlbHAgdGVzdCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyB3b3JrcyBvdXRzaWRlIG9mIHRoZSBET00gYW5kIGJlZm9yZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UocGxheWVyT25lKTtcbiAgICAvLyBkZWZhdWx0UGxhY2VQaGFzZTIocGxheWVyVHdvKTtcbiAgICAvLyBkZWZhdWx0TWFpblBoYXNlKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lU3RhdGUgZnJvbSAnLi9nYW1lc3RhdGUnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmdhbWVTdGF0ZShjb250ZW50KTsiLCJpbXBvcnQgZ2FtZU92ZXJDaGVjayBmcm9tIFwiLi9nYW1lLW92ZXItY2hlY2tcIjtcblxuLy8gRnVuY3Rpb24gYXR0YWNrcyB0aGUgb3Bwb25lbnQncyB0aWxlLiBBIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSB0aWxlIHRvIGluZGljYXRlIGEgaGl0IG9yIG1pc3Ncbi8vIHZpYSBDU1MuIFRoZSBBSSB0aWxlIGlkIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBwbGF5ZXIncy4gSXQgaXMgaW4gdGhlIGZvcm1hdDogZTAwLCBlMDEgLi4uIGU5OCwgZTk5XG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTWFpblBoYXNlKG9wcG9uZW50LCBpZCwgdGlsZSkge1xuICAgIC8vIFdyYXAgdGhlIGNvZGUgaW4gYSBwcm9taXNlLCBzbyB0aGUgYWlNYWluUGhhc2Ugd2FpdHMgZm9yIHRoZSBwbGF5ZXJNYWluUGhhc2UuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIGdldCBjb29yZGluYXRlcyBmcm9tIHRpbGUgaWRcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMikpO1xuXG4gICAgICAgIG9wcG9uZW50LmF0dGFja2VkKHgsIHkpOyAvLyBhdHRhY2sgdGhlIGVuZW15IHBsYXllclxuXG4gICAgICAgIGlmKG9wcG9uZW50LmJGYWN0b3J5LmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpOyAvLyBpZiBtaXNzLCBhZGQgY2xhc3MgJ21pc3MnIGZvciBzdHlsaW5nXG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpOyAvLyBpZiBoaXQsIGFkZCBjbGFzcyAnaGl0JyBmb3Igc3R5bGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gYXR0YWNrcyB0aGUgb3Bwb25lbnQncyBzaGlwIGFuZCB0aWxlLiBBIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSB0aWxlIHRvIGluZGljYXRlIGEgaGl0IG9yIG1pc3MuXG5leHBvcnQgZnVuY3Rpb24gYWlNYWluUGhhc2Uob3Bwb25lbnQpIHtcbiAgICBsZXQgeDsgLy8gdGhlIHggdmFsdWUgdG8gYXR0YWNrXG4gICAgbGV0IHk7IC8vIHRoZSB5IHZhbHVlIHRvIGF0dGFja1xuICAgIGxldCB0aWxlOyAvLyB0aGUgdGFyZ2V0IHRpbGVcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gVGhlIGJvb2xlYW4gdG8gaW5kaWNhdGUgaWYgYW4gYWRqYWNlbnQgdGlsZSBoYXMgYmVlbiBmb3VuZC5cblxuICAgIC8vIEdldCBhbGwgdGlsZXMgd2l0aCB0aGUgJ2hpdCcgY2xhc3MgZm9yIGZvbGxvdy10aHJvdWdoIGxvZ2ljLlxuICAgIGxldCBoaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdCcpO1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGhpdCBhbmQgYXR0ZW1wdCB0byBmaW5kIGFuIGF2YWlsYWJsZSB0YXJnZXQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGhpdCA9IGhpdHNbaV07XG4gICAgICAgIGlmKGhpdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKSB8fCBoaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1jZWxsJykpIHtcbiAgICAgICAgICAvLyBEbyBub3RoaW5nIGFuZCBtb3ZlIHRvIHRoZSBuZXh0IGhpdCwgaWYgdGhlIGNsYXNzIGlzIGEgc3Vua2VuIHNoaXAgb3IgYW4gYWkgc2hpcC5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBoaXRJZCA9IGhpdC5pZDtcbiAgICAgICAgICBsZXQgYXhpc0FkamFjZW50ID0gYWlDb25maXJtQWRqYWNlbnQoaGl0SWQpOyAvLyBjb25maXJtcyBhbiBhZGphY2VudCBoaXQgYW5kIHRoZSBheGlzXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gYWlDb25maXJtQWRqYWNlbnQgd2lsbCByZXR1cm4gdGhlIGF4aXMgZXZlbiBpZiBib3RoIHNpZGVzIGhhdmUgYSBtaXNzLCBidXQgaWYgYWlQYXRoaW5nXG4gICAgICAgICAgLy8gY2Fubm90IGZpbmQgYW4gYXBwcm9wcmlhdGUgdGFyZ2V0LCBpdCB3aWxsIG5vdCBicmVhayB0aGUgbG9vcC4gVGh1cywgeW91IGNhbiB1c2UgdGhlXG4gICAgICAgICAgLy8gYWlGaW5kc0FkamFjZW50VGlsZSB0byBjbGVhbiB1cCBzaGlwcyB0aGF0IGFyZSBwbGFjZWQgc2lkZSBieSBzaWRlLlxuICAgICAgICAgIGlmKGF4aXNBZGphY2VudCkge1xuICAgICAgICAgICAgaWYoYXhpc0FkamFjZW50ID09ICd4Jykge1xuICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGVUYXJnZXRJZCA9IGFpUGF0aGluZyhoaXRJZCwgYXhpc0FkamFjZW50KTtcbiAgICAgICAgICAgICAgICBpZihhdmFpbGFibGVUYXJnZXRJZCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICB5ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDEpO1xuICAgICAgICAgICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoYXhpc0FkamFjZW50ID09ICd5Jykge1xuICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGVUYXJnZXRJZCA9IGFpUGF0aGluZyhoaXRJZCwgYXhpc0FkamFjZW50KTtcbiAgICAgICAgICAgICAgICBpZihhdmFpbGFibGVUYXJnZXRJZCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgICAgICB5ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDEpO1xuICAgICAgICAgICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaUZpbmRzQWRqYWNlbnRUaWxlKGhpdElkKTsgLy8gZmluZCBhbiBhdmFpbGFibGUgdGFyZ2V0XG4gICAgICAgICAgICBpZihhdmFpbGFibGVUYXJnZXRJZCkge1xuICAgICAgICAgICAgICAgIHggPSBhdmFpbGFibGVUYXJnZXRJZC5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBhbiBhZGphY2VudCB0aWxlIHdhcyBmb3VuZCwgYXR0YWNrIHRoZSB0YXJnZXQuIE90aGVyd2lzZSB0aGUgQUkgZmluZHMgYSByYW5kb20gdGlsZS5cbiAgICBpZihmb3VuZClcbiAgICAgICAgb3Bwb25lbnQuYXR0YWNrZWQoeCwgeSk7IC8vIHRoZSBlbmVteSBwbGF5ZXIgb2JqZWN0IGNhbGxzIGl0cyBhdHRhY2tlZCBmdW5jdGlvblxuICAgIGVsc2Uge1xuICAgICAgICB0aWxlID0gYWlGaW5kc1JhbmRvbSgpO1xuICAgICAgICB4ID0gcGFyc2VJbnQodGlsZS5pZC5jaGFyQXQoMCkpO1xuICAgICAgICB5ID0gcGFyc2VJbnQodGlsZS5pZC5jaGFyQXQoMSkpO1xuICAgICAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTtcbiAgICB9XG4gICAgICBcbiAgICBpZihvcHBvbmVudC5iRmFjdG9yeS5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cbiAgICAgICAgXG4gICAgZWxzZSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfVxufVxuXG4vLyBUaGUgZnVuY3Rpb24gdGhhdCBjb25maXJtcyB0d28gYWRqYWNlbnQgaGl0cyBmb3IgdGhlIEFJLlxuZnVuY3Rpb24gYWlDb25maXJtQWRqYWNlbnQoaWQpIHtcbiAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgwKSk7IC8vIHRoZSBwcmV2aW91cyB4IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyB0aGUgcHJldmlvdXMgeSB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgYXhpcyA9IFwiXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZm91bmQpIGJyZWFrO1xuICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgLy8gU2VhcmNoIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeGF4aXMuIEVsc2UgdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB5YXhpcy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihpIDwgMikge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdW5rJykpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXhpcyA9ICd4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke2FycmF5W2ldfWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdW5rJykpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXhpcyA9ICd5JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF4aXM7XG59XG5cbi8vIE9uY2UgdHdvIGFkamFjZW50IGhpdHMgYXJlIGNvbmZpcm1lZCwgdGhlIGFpIHdpbGwgdGFyZ2V0IGFkamFjZW50IHRpbGVzIG9uIHRoZSBheGlzLlxuZnVuY3Rpb24gYWlQYXRoaW5nKGlkLCBheGlzKSB7XG4gICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMCkpOyAvLyB0aGUgcHJldmlvdXMgeCB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8gdGhlIHByZXZpb3VzIHkgdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gaWYgdGhlIG5leHQgdGFyZ2V0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IHRhcmdldElkID0gbnVsbDsgLy8gdGhlIG5ldyB0YXJnZXQgaWQgdG8gcmV0dXJuXG4gICAgXG4gICAgaWYoYXhpcyA9PSAneCcpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gW3ggKyAxLCB4ICsgMiwgeCArIDMsIHggKyA0LCB4ICsgNSwgXG4gICAgICAgIHggLSAxLCB4IC0gMiwgeCAtIDMsIHggLSA0LCB4IC0gNV07IC8vIHRoZSBwb3RlbnRpYWwgYWRqYWNlbnQgYXhpcyB2YWx1ZXNcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoLzI7IGkrKykge1xuICAgICAgICAgICAgaWYoZm91bmQpIGJyZWFrO1xuICAgICAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgICAgIGlmKGFycmF5W2ldIDwgMCB8fCBhcnJheVtpXSA+IDkpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthcnJheVtpXX0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IGFycmF5Lmxlbmd0aC8yOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBhIG1pc3MgbWFya3MgdGhlIGVuZCBvZiBvbmUgc2lkZSBvZiB0aGUgYXhpc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhcnJheSA9IFt5ICsgMSwgeSArIDIsIHkgKyAzLCB5ICsgNCwgeSArIDUsXG4gICAgICAgIHkgLSAxLCB5IC0gMiwgeSAtIDMsIHkgLSA0LCB5IC0gNV07XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aC8yOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYSBtaXNzIG1hcmtzIHRoZSBlbmQgb2Ygb25lIHNpZGUgb2YgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IGFycmF5Lmxlbmd0aC8yOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYSBtaXNzIG1hcmtzIHRoZSBlbmQgb2Ygb25lIHNpZGUgb2YgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldElkO1xufVxuXG4vLyBUaGUgbG9naWMgZm9yIHRoZSBBSSB0byBmaW5kIGEgdGlsZSB3aGVyZSB0aGUgc3BhY2UgaGFzIG5vdCBiZWVuIHRha2VuIG9yIG91dCBvZiBib3VuZHMuXG4vLyBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgZmlyc3QgZm91bmQgdGFyZ2V0LlxuZnVuY3Rpb24gYWlGaW5kc0FkamFjZW50VGlsZShpZCkge1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8gdGhlIHByZXZpb3VzIHggdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgeSA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIHRoZSBwcmV2aW91cyB5IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGFycmF5ID0gW3ggKyAxLCB4IC0gMSwgeSArIDEsIHkgLSAxXTsgLy8gdGhlIGFkamFjZW50IHRpbGUgdmFsdWVzXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIGlmIHRoZSBuZXh0IHRhcmdldCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB0YXJnZXRJZCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke2FycmF5W2ldfWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0SWQ7XG59XG5cbi8vIEFJIHNlbGVjdHMgYSByYW5kb20gc3F1YXJlIGluIHRoZSBncmlkLlxuZnVuY3Rpb24gYWlGaW5kc1JhbmRvbSgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgLy8gZ2V0IHJhbmRvbSB4IHkgY29vcmRpbmF0ZXNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuXG4gICAgICAgIGlmKCF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpICYmICF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHtcbiAgICAgICAgICAgIC8vIEZvciAxMCBhdHRlbXB0cywgdGhlIEFJIHdpbGwgYXR0ZW1wdCB0byBmaW5kIGEgdGlsZSB0aGF0IGhhcyB0d28gZW1wdHlcbiAgICAgICAgICAgIC8vIGFkamFjZW50IHRpbGVzIGJlc2lkZSB0aGUgcmFuZG9tIG9uZSBzZWxlY3RlZC4gSWYgaXQgaXMgdW5hYmxlIHRvIGZpbmQgb25lIHdpdGhpblxuICAgICAgICAgICAgLy8gMTAgYXR0ZW1wdHMsIGl0IHdpbGwganVzdCBwYXNzIHRocm91Z2ggdGhpcyBjaGVjay5cbiAgICAgICAgICAgIGlmKGFpUmFuZG9tUHJpb3JpdHkodGlsZSkgfHwgY291bnQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQXR0ZW1wdDogJHtjb3VudH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGlsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBSSBwcmlvcml0aXplcyBzcXVhcmVzIHRoYXQgaGF2ZSB0d28gZW1wdHkgdGlsZXMgYWRqYWNlbnQgdG8gdGhlbS5cbmZ1bmN0aW9uIGFpUmFuZG9tUHJpb3JpdHkodGlsZSkge1xuICAgIGxldCBpZCA9IHRpbGUuaWQ7XG4gICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMCkpOyAvLyB4IHZhbHVlIG9mIHRoZSB0aWxlIHRvIGNoZWNrXG4gICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyB5IHZhbHVlIG9mIHRoZSB0aWxlIHRvIGNoZWNrXG4gICAgbGV0IGFycmF5ID0gW3ggKyAxLCB4IC0gMSwgeSArIDEsIHkgLSAxXTsgLy8gdGhlIGFkamFjZW50IHRpbGUgdmFsdWVzXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIGlmIHRoZSBuZXh0IHRhcmdldCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCBjb3VudCA9IDA7IC8vIFRoZSBjb3VudCB0byBmaW5kIHR3byBlbXB0eSBhZGphY2VudCB0aWxlcy5cbiAgICBsZXQgdGFyZ2V0ID0gbnVsbDsgLy8gdGhlIG5ldyB0YXJnZXQgaWQgdG8gcmV0dXJuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZm91bmQpIGJyZWFrO1xuICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgLy8gU2VhcmNoIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeGF4aXMuIEVsc2UgdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB5YXhpcy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihpIDwgMikge1xuICAgICAgICAgICAgICAgIGxldCBuZXdUaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGlsZSBoYXMgYW4gb3BlbiBzcGFjZSwgaXRlcmF0ZSB0aGUgY291bnRlci5cbiAgICAgICAgICAgICAgICBpZihuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IG5ld1RpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb3VudCsrO1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGNvdW50ZXIgaXMgMiwgdGhlIHRpbGUgaGFzIGJlZW4gZm91bmQuXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpID09IDIpIGNvdW50ID0gMDsgLy8gcmVzZXQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTtcbiAgICAgICAgICAgICAgICBpZihuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8IG5ld1RpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBjb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHRhcmdldCB3YXMgZm91bmQsIHRhcmdldCB3aWxsIG5vIGxvbmdlciBiZSBudWxsLlxuICAgIGlmKGZvdW5kKSB7XG4gICAgICAgIHRhcmdldCA9IHRpbGU7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgXG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBsb2dpYyB3aXRob3V0IHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1haW5QaGFzZShvbmUsIHR3bykge1xuICAgIHR3by5hdHRhY2tlZCgwLCAwKTsgLy8gcGF0cm9sXG4gICAgdHdvLmF0dGFja2VkKDEsIDApO1xuXG4gICAgdHdvLmF0dGFja2VkKDEsIDEpOyAvLyBzdWJcbiAgICB0d28uYXR0YWNrZWQoMiwgMSk7XG4gICAgdHdvLmF0dGFja2VkKDMsIDEpO1xuXG4gICAgdHdvLmF0dGFja2VkKDIsIDIpOyAvLyBkZXN0cm95ZXJcbiAgICB0d28uYXR0YWNrZWQoMywgMik7XG4gICAgdHdvLmF0dGFja2VkKDQsIDIpO1xuXG4gICAgdHdvLmF0dGFja2VkKDMsIDMpOyAvLyBiYXR0bGVzaGlwXG4gICAgdHdvLmF0dGFja2VkKDQsIDMpO1xuICAgIHR3by5hdHRhY2tlZCg1LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNiwgMyk7XG5cbiAgICB0d28uYXR0YWNrZWQoNCwgNCk7IC8vIGNhcnJpZXJcbiAgICB0d28uYXR0YWNrZWQoNSwgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoNiwgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoNywgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoOCwgNCk7XG5cbiAgICBpZihnYW1lT3ZlckNoZWNrKG9uZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgdHdvIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGdhbWVPdmVyQ2hlY2sodHdvKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBnYW1lIGlzIG92ZXIuIFBsYXllciBvbmUgd2lucy5cIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG9uZSB3b24uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiKTtcbiAgICB9XG59IiwiLy8gVGFrZSB0aGUgcGxheWVyJ3MgYm9hcmQsIHRoZSB0aWxlIGlkLCB0aGUgYXhpcyB0byBwbGFjZSB0aGUgc2hpcCwgYW5kIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VQaGFzZShvbmUsIGlkLCBheGlzLCBsZW5ndGgpIHtcbiAgICBsZXQgc2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbnVtYmVyIG9mIHNoaXBzXG4gICAgbGV0IHggPSBpZC5jaGFyQXQoMCk7IC8vIGdldCB4IGZyb20gdGhlIHRpbGUgaWRcbiAgICBsZXQgeSA9IGlkLmNoYXJBdCgxKTsgLy8gZ2V0IHkgZnJvbSB0aGUgdGlsZSBpZFxuICAgIG9uZS5wbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpOyAvLyBwbGFjZSB0aGUgc2hpcFxuICAgIGxldCBuZXdTaGlwTnVtYmVyID0gb25lLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gZ2V0IHRoZSBuZXcgbnVtYmVyIG9mIHNoaXBzXG5cbiAgICAvLyBJZiB0aGUgbmV3IG51bWJlciBvZiBzaGlwcyBpcyBncmVhdGVyIHRoYW4gdGhlIG9sZCBudW1iZXIsIHRoZSBzaGlwIHdhcyBzdWNjZXNzZnVsbHkgcGxhY2VkIGFuZFxuICAgIC8vIGNhbiBiZSBjb2xvcmVkLlxuICAgIGlmKG5ld1NoaXBOdW1iZXIgPiBzaGlwTnVtYmVyKVxuICAgICAgICBjb2xvclNoaXAobGVuZ3RoLCBheGlzLCB4LCB5KTtcbn1cblxuLy8gVG8gaGVscCB0ZXN0IHRoZSBnYW1lIHN0YXRlIHdpdGhvdXQgdGhlIHVzZSBvZiB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRQbGFjZVBoYXNlKG9uZSkge1xuICAgIG9uZS5wbGFjZSgyLCAneCcsIDAsIDApOyAvLyBzaGlwIG9mIGxlbmd0aCAyIG9uIHRoZSAneCcgYXhpcyBhdCBjb29yZGluYXRlOiAwLDBcbiAgICBvbmUucGxhY2UoMywgJ3gnLCAxLCAxKTtcbiAgICBvbmUucGxhY2UoMywgJ3gnLCAyLCAyKTtcbiAgICBvbmUucGxhY2UoNCwgJ3gnLCAzLCAzKTtcbiAgICBvbmUucGxhY2UoNSwgJ3gnLCA0LCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRQbGFjZVBoYXNlMih0d28pIHtcbiAgICB0d28ucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgdHdvLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgdHdvLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgdHdvLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgdHdvLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhaVBsYWNlUGhhc2UodHdvKSB7XG4gIFxuICAgIC8vIEFycmF5IG9mIHNoaXAgbGVuZ3RocyB0byByYW5kb21seSBjaG9vc2UgZnJvbVxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuICBcbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNoaXAgbGVuZ3RocyBhbmQgcGxhY2UgZWFjaCBzaGlwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoaXBOdW1iZXIgPSB0d28uYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBHZXQgdGhlIG51bWJlciBvZiBzaGlwcyBpbiB0aGUgcGxheWVyIG9iamVjdFxuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aHNbaV07XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd4JyA6ICd5JztcbiAgXG5cbiAgICAgIC8vIFRoaXMgbG9vcCBlbnN1cmVzIGEgc2hpcCBpcyBiZWluZyBwbGFjZWQgb24gdGhlIGJvYXJkLlxuICAgICAgLy8gSWYgdGhlIHBsYWNlIGZ1bmN0aW9uIGlzIGZlZCBjb29yZGluYXRlcyBvZiBhbiBvY2N1cGllZCBzcGFjZSwgYSBzaGlwIHdpbGwgbm90IGJlIHBsYWNlZC5cbiAgICAgIC8vIFRoaXMgbG9vcCB3aWxsIHJlcGVhdCB1bnRpbCB0aGUgbnVtYmVyIG9mIHNoaXBzIHBsYWNlZCBoYXMgaW5jcmVhc2VkLlxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IHgsIHk7XG5cbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBheGlzLCB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwJ3Mgc3RhcnRpbmcgY29vcmRpbmF0ZSB3aWxsIHZhcnlcbiAgICAgICAgLy8gYnkgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBiZWluZyBwbGFjZWQuXG4gICAgICAgIGlmKGF4aXMgPT0gJ3gnKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBsZW5ndGgpKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdHdvLnBsYWNlKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gIFxuICAgICAgICBsZXQgbmV3U2hpcE51bWJlciA9IHR3by5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIEdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuICBcbiAgICAgICAgaWYgKG5ld1NoaXBOdW1iZXIgPiBzaGlwTnVtYmVyKSB7XG4gICAgICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBpZiB0aGUgbmV3IG51bWJlciBvZiBzaGlwcyBpcyBncmVhdGVyIHRoYW4gdGhlIG9sZCBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4vLyBsZW5ndGgsIGF4aXMsIHggc3RhcnRpbmcgY29vcmRpbmF0ZSwgeSBzdGFydGluZyBjb29yZGluYXRlXG4vLyBhZGRpbmcgYSBjbGFzcyB0byBzdHlsZSB0aGUgdGlsZXMgd2l0aCBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yU2hpcChsLCBhLCB4LCB5KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihhID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hJbmNyZW1lbnR9JHt5fWApO1xuICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc2hpcFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKGEgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IHlJbmNyZW1lbnQgPSBwYXJzZUludCh5KSArIGk7XG4gICAgICAgICAgICBsZXQgY29sb3JDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3lJbmNyZW1lbnR9YCk7XG4gICAgICAgICAgICBjb2xvckNlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yT25Ib3ZlcihsLCBhLCBpZCkge1xuICAgIGxldCB4ID0gaWQuY2hhckF0KDApOyAvLyBnZXQgeCBmcm9tIHRoZSB0aWxlIGlkXG4gICAgbGV0IHkgPSBpZC5jaGFyQXQoMSk7IC8vIGdldCB5IGZyb20gdGhlIHRpbGUgaWRcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoYSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZHMgPSBwYXJzZUludCh4KSArIHBhcnNlSW50KGwpO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgICAgICBsZXQgY29sb3JDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eEluY3JlbWVudH0ke3l9YCk7XG4gICAgICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmFibGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihhID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHkpICsgcGFyc2VJbnQobCk7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA8PSAxMCkge1xuICAgICAgICAgICAgICAgIGxldCB5SW5jcmVtZW50ID0gcGFyc2VJbnQoeSkgKyBpO1xuICAgICAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eUluY3JlbWVudH1gKTtcbiAgICAgICAgICAgICAgICBjb2xvckNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXJhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIb3ZlcmFibGUoKSB7XG4gICAgbGV0IGhvdmVyYWJsZUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3ZlcmFibGVcIik7XG5cbiAgICBob3ZlcmFibGVDZWxscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyYWJsZScpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQtZmFjdG9yeSc7XG5cbi8vIEVhY2ggcGxheWVyIGhhcyB0aGVpciBvd24gZ2FtZWJvYXJkLCBhIGZ1bmN0aW9uIHRvIHBsYWNlIGEgc2hpcCwgYSBmdW5jdGlvbiB0byBhdHRhY2ssIGFuZCBhblxuLy8gYXJyYXkgY29udGFpbmluZyB0aGVpciBzaGlwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgIGNvbnN0IGJGYWN0b3J5ID0gY3JlYXRlR2FtZUJvYXJkKCk7IC8vIFRoZSBib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4gICBmdW5jdGlvbiBwbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gICB9XG4gICBcbiAgIGZ1bmN0aW9uIGF0dGFja2VkKHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgIH1cblxuICAgcmV0dXJuIHtcbiAgICBiRmFjdG9yeSwgXG4gICAgcGxhY2UsXG4gICAgYXR0YWNrZWRcbiAgIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoLCBhcnJheSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXJyYXk7XG4gICAgbGV0IGhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTsgLy8gRmlsbCB0aGUgaGl0cyBhcnJheSB3aXRoIGZhbHNlIHZhbHVlcy5cbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICBcbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIG5leHQgYXZhaWxhYmxlIGhpdCB0aGF0IGlzIGZhbHNlIGFuZCBtYWtlIGl0IHRydWUgYW5kIHRoZW4gYnJlYWsgdGhlIGxvb3AuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoaGl0c1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGhpdHNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBldmVyeSBlbGVtZW50IGluIHRoZSBoaXRzIGFycmF5IGlzIHRydWUuXG4gICAgICAgIGlmIChoaXRzLmV2ZXJ5KGhpdCA9PiBoaXQpKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0SGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzLnNsaWNlKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBoaXQsXG4gICAgICBnZXRMZW5ndGgsXG4gICAgICBnZXRIaXRzLFxuICAgICAgaXNTdW5rLFxuICAgICAgY29vcmRpbmF0ZXNcbiAgICB9O1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9