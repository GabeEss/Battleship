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
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\ncontent {\n}\n\nupper-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nupper-container button {\n    background: linear-gradient(to bottom, #F5F5F5, #E0E0E0);\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);\n    font-family: 'Open Sans', sans-serif;\n    border-radius: 5px;\n    \n}\n\nupper-container button:hover {\n    background: gold;\n    color: #fff;\n  }\n\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;AACA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,wDAAwD;IACxD,0CAA0C;IAC1C,oCAAoC;IACpC,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;EACb;;;AAGF;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;EACd;;AAEF;IACI,uBAAuB;AAC3B","sourcesContent":[".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\ncontent {\n}\n\nupper-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nupper-container button {\n    background: linear-gradient(to bottom, #F5F5F5, #E0E0E0);\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);\n    font-family: 'Open Sans', sans-serif;\n    border-radius: 5px;\n    \n}\n\nupper-container button:hover {\n    background: gold;\n    color: #fff;\n  }\n\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}"],"sourceRoot":""}]);
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

let axis = 'x'; // default axis for placing ships

// This function determines the length of the ship to be placed and calls placePhase until
// all the ships have been placed. Also removes event listeners once
// all the ships are placed.
function handlePlaceShips(event) {
    let ships = one.bFactory.ships;
    let length = 2; // The first ship is the patrol boat.

    if(ships.length == 0)
      length = 2; // place the patrol boat
    else if(ships.length == 1) 
      length = 3; // place the submarine
    else if(ships.length == 2)
      length = 3; // place the destroyer
    else if(ships.length == 3)
      length = 4; // place the battleship
    else if(ships.length == 4)
      length = 5; // place the carrier
  
    if(ships.length < 5)
      (0,_place_phase__WEBPACK_IMPORTED_MODULE_3__.placePhase)(one, event.target.id, axis, length);
  
    if(ships.length == 5) {
      (0,_place_phase__WEBPACK_IMPORTED_MODULE_3__.aiPlacePhase)(two); // AI places ships randomly
      const playerTiles = document.querySelectorAll('.cell');
      playerTiles.forEach(tile => {
        tile.removeEventListener("click", handlePlaceShips);
      })
      mainPhaseEvent();
    }
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
/* harmony export */   "colorShip": () => (/* binding */ colorShip),
/* harmony export */   "defaultPlacePhase": () => (/* binding */ defaultPlacePhase),
/* harmony export */   "defaultPlacePhase2": () => (/* binding */ defaultPlacePhase2),
/* harmony export */   "placePhase": () => (/* binding */ placePhase)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXItY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlLXBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC1mYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5jb250ZW50IHtcXG59XFxuXFxudXBwZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVwcGVyLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjVGNUY1LCAjRTBFMEUwKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbnVwcGVyLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBnb2xkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG5cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIH1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7O0FBR0Y7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuY29udGVudCB7XFxufVxcblxcbnVwcGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51cHBlci1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0Y1RjVGNSwgI0UwRTBFMCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIFxcbn1cXG5cXG51cHBlci1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogZ29sZDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuXFxuLmVuZW15LWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5udW1iZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5sZXR0ZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICB9XFxuXFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7IC8vIFRoZSB0YWJsZSB0byBob2xkIHRoZSBib2FyZC5cbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5iRmFjdG9yeS5ib2FyZDsgLy8gVGhlIGJvYXJkIGFycmF5LlxuXG4gICAgY29uc3QgbnVtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpOyAvLyBUbyBob2xkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgbnVtUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgLy8gQWRkIGFuIGVtcHR5IGNlbGwgdG8gdGhlIGxlZnQgb2YgdGhlIG51bWJlcnMgYW5kIGFib3ZlIHRoZSBsZXR0ZXJzLlxuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpO1xuICAgIG51bVJvdy5hcHBlbmRDaGlsZChlbXB0eUNlbGwpO1xuXG4gICAgLy8gTG9vcCB0byBhZGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtYmVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNlbGxcIik7XG4gICAgICAgIG51bWJlckNlbGwudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgbnVtUm93LmFwcGVuZENoaWxkKG51bWJlckNlbGwpO1xuICAgIH1cbiAgICBcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChudW1Sb3cpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGxldHRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGxldHRlckNlbGwuY2xhc3NMaXN0LmFkZCgnbGV0dGVyLWNlbGwnKTtcbiAgICAgICAgbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZXR0ZXJDZWxsKTtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gai50b1N0cmluZygpICsgaS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFbmVteUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAvLyBUaGUgdGFibGUgdG8gaG9sZCB0aGUgYm9hcmQuXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYkZhY3RvcnkuYm9hcmQ7IC8vIFRoZSBib2FyZCBhcnJheS5cblxuICAgIGNvbnN0IG51bVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTsgLy8gVG8gaG9sZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIG51bVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIC8vIEFkZCBhbiBlbXB0eSBjZWxsIHRvIHRoZSBsZWZ0IG9mIHRoZSBudW1iZXJzIGFuZCBhYm92ZSB0aGUgbGV0dGVycy5cbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcbiAgICBudW1Sb3cuYXBwZW5kQ2hpbGQoZW1wdHlDZWxsKTtcblxuICAgIC8vIExvb3AgdG8gYWRkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG51bWJlckNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsXCIpO1xuICAgICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIG51bVJvdy5hcHBlbmRDaGlsZChudW1iZXJDZWxsKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobnVtUm93KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBsZXR0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBsZXR0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2xldHRlci1jZWxsJyk7XG4gICAgICAgIGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGV0dGVyQ2VsbCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFwiZVwiICsgai50b1N0cmluZygpICsgaS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0YWJsZTtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIGRpc3BsYXlFbmVteUJvYXJkIH0gZnJvbSBcIi4vZGlzcGxheS1ib2FyZFwiO1xuaW1wb3J0IGdhbWVPdmVyQ2hlY2sgZnJvbSBcIi4vZ2FtZS1vdmVyLWNoZWNrXCI7XG5pbXBvcnQgeyBwbGF5ZXJNYWluUGhhc2UsIGFpTWFpblBoYXNlIH0gZnJvbSBcIi4vbWFpbi1waGFzZVwiO1xuaW1wb3J0IHsgYWlQbGFjZVBoYXNlLCBwbGFjZVBoYXNlIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmxldCBvbmUgPSBcIlwiOyAvLyBwbGF5ZXIgb25lXG5sZXQgdHdvID0gXCJcIjsgLy8gcGxheWVyIHR3b1xubGV0IG1haW4gPSBcIlwiOyAvLyBtYWluIGNvbnRhaW5lciAoY29udGVudCksIGp1c3QgaW4gY2FzZVxubGV0IGJvYXJkID0gXCJcIjsgLy8gYm9hcmQgY29udGFpbmVyXG5sZXQgdXBwZXIgPSBcIlwiOyAvLyB1cHBlciBjb250YWluZXJcblxuXG4vLyBTZXRzIHVwIHRoZSBzdGFydCBidXR0b24gYW5kIGJ1aWxkcyBzb21lIGNvbnRhaW5lcnMgZm9yIGxhdGVyIHVzZS5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERPTShjb250ZW50LCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICAgIG9uZSA9IHBsYXllck9uZTtcbiAgICB0d28gPSBwbGF5ZXJUd287XG4gICAgbWFpbiA9IGNvbnRlbnQ7XG5cbiAgICBjb25zdCB1cHBlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VwcGVyLWNvbnRhaW5lcicpO1xuICAgIHVwcGVyID0gdXBwZXJDb250YWluZXI7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0QnV0dG9uRXZlbnQoKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzdGFydCBidXR0b25cbiAgICAgICAgdXBwZXIucmVtb3ZlQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2FyZC1jb250YWluZXInKTtcbiAgICBib2FyZCA9IGJvYXJkQ29udGFpbmVyO1xuICAgIHVwcGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHVwcGVyQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbn1cblxuLy8gV2hlbiB0aGUgc3dhcCBheGlzIGJ1dHRvbiBpcyBjbGlja2VkLCBpdCBjaGFuZ2VzIHRoZSBheGlzIHRvIHBsYWNlIHRoZSBzaGlwLlxuZnVuY3Rpb24gYXhpc1N3YXAoYXhpcykge1xuICAgIGlmKGF4aXMgPT0gJ3gnKVxuICAgICAgICByZXR1cm4gJ3knO1xuICAgIGVsc2UgcmV0dXJuICd4Jztcbn1cblxuLy8gV2hlbiB0aGUgc3RhcnQgYnV0dG9uIGlzIGNsaWNrZWQuIEFkZHMgYSBkZXNjcmlwdGlvbiBvZiB3aGF0IHRvIGRvLCBnZW5lcmF0ZXMgdGhlIHBsYXllciBib2FyZCxcbi8vIGNhbGxzIHRoZSBmdW5jdGlvbiB0byBwbGFjZSB0aGUgc2hpcHMuXG5mdW5jdGlvbiBzdGFydEJ1dHRvbkV2ZW50KCkge1xuICAgIC8vIERlc2NyaXB0b3JcbiAgICBsZXQgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBwbGFjZVNoaXBzRGVzY3JpcHRpb24uaWQgPSAnaGVhZGVyLWRlc2NyaXB0aW9uJztcbiAgICBwbGFjZVNoaXBzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlBsYWNlIFlvdXIgU2hpcHNcIjtcbiAgICB1cHBlci5hcHBlbmRDaGlsZChwbGFjZVNoaXBzRGVzY3JpcHRpb24pO1xuXG4gICAgLy8gRGlzcGxheSB0aGUgcGxheWVyJ3MgZ3JpZCB0byBwbGFjZSBzaGlwcy5cbiAgICBjb25zdCBncmlkUGxheWVyT25lID0gZGlzcGxheUJvYXJkKG9uZSk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZFBsYXllck9uZSk7XG5cbiAgICBwbGFjZVNoaXBzRXZlbnQoKTtcbn1cblxubGV0IGF4aXMgPSAneCc7IC8vIGRlZmF1bHQgYXhpcyBmb3IgcGxhY2luZyBzaGlwc1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWQgYW5kIGNhbGxzIHBsYWNlUGhhc2UgdW50aWxcbi8vIGFsbCB0aGUgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZC4gQWxzbyByZW1vdmVzIGV2ZW50IGxpc3RlbmVycyBvbmNlXG4vLyBhbGwgdGhlIHNoaXBzIGFyZSBwbGFjZWQuXG5mdW5jdGlvbiBoYW5kbGVQbGFjZVNoaXBzKGV2ZW50KSB7XG4gICAgbGV0IHNoaXBzID0gb25lLmJGYWN0b3J5LnNoaXBzO1xuICAgIGxldCBsZW5ndGggPSAyOyAvLyBUaGUgZmlyc3Qgc2hpcCBpcyB0aGUgcGF0cm9sIGJvYXQuXG5cbiAgICBpZihzaGlwcy5sZW5ndGggPT0gMClcbiAgICAgIGxlbmd0aCA9IDI7IC8vIHBsYWNlIHRoZSBwYXRyb2wgYm9hdFxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDEpIFxuICAgICAgbGVuZ3RoID0gMzsgLy8gcGxhY2UgdGhlIHN1Ym1hcmluZVxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDIpXG4gICAgICBsZW5ndGggPSAzOyAvLyBwbGFjZSB0aGUgZGVzdHJveWVyXG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMylcbiAgICAgIGxlbmd0aCA9IDQ7IC8vIHBsYWNlIHRoZSBiYXR0bGVzaGlwXG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gNClcbiAgICAgIGxlbmd0aCA9IDU7IC8vIHBsYWNlIHRoZSBjYXJyaWVyXG4gIFxuICAgIGlmKHNoaXBzLmxlbmd0aCA8IDUpXG4gICAgICBwbGFjZVBoYXNlKG9uZSwgZXZlbnQudGFyZ2V0LmlkLCBheGlzLCBsZW5ndGgpO1xuICBcbiAgICBpZihzaGlwcy5sZW5ndGggPT0gNSkge1xuICAgICAgYWlQbGFjZVBoYXNlKHR3byk7IC8vIEFJIHBsYWNlcyBzaGlwcyByYW5kb21seVxuICAgICAgY29uc3QgcGxheWVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgICAgcGxheWVyVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxhY2VTaGlwcyk7XG4gICAgICB9KVxuICAgICAgbWFpblBoYXNlRXZlbnQoKTtcbiAgICB9XG59XG4gIFxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFkZHMgdGhlIGV2ZW50IHRvIGVhY2ggdGlsZSB0byBwbGFjZSBzaGlwcyBhbmQgY3JlYXRlcyBhIGJ1dHRvbiAoYW5kIGV2ZW50KSB0b1xuLy8gY2hhbmdlIHRoZSBheGlzIHRoZSBzaGlwIGlzIHBsYWNlZC5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNFdmVudCgpIHtcbiAgICAvLyBDbGljayB0byBjaGFuZ2UgdGhlIGF4aXMgdGhlIHBsYXllciB3aXNoZXMgdG8gcGxhY2UgaGlzIHNoaXBzLlxuICAgIGxldCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi5pZCA9ICdheGlzLWJ1dHRvbic7XG4gICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dhcCBBeGlzXCI7XG4gICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGF4aXMgPSBheGlzU3dhcChheGlzKSk7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIFxuICAgIC8vIEdldCBhbGwgdGhlIHRpbGVzIGFuZCBjcmVhdGUgYSBjbGljayBldmVudC5cbiAgICBjb25zdCBwbGF5ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgcGxheWVyVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGFjZVNoaXBzKTtcbiAgICB9KVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIGF4aXMgYnV0dG9uIGZyb20gdGhlIHBvc2l0aW9uaW5nIHBoYXNlLCBjaGFuZ2VzIHRoZSBoZWFkZXIgdGV4dCwgXG4vLyBjcmVhdGVzIGEgbmV3IGJvYXJkIHRvIGRpc3BsYXkgdGhlIG9wcG9uZW50J3MgdGlsZXMsIGFuZFxuLy8gYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG9wcG9uZW50J3MgYm9hcmQgc28gdGhhdCB0aGUgcGxheWVyIGNhbiBtYWtlIGF0dGFja3MuXG5mdW5jdGlvbiBtYWluUGhhc2VFdmVudCgpIHtcbiAgICBsZXQgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzLWJ1dHRvbicpO1xuICAgIHVwcGVyLnJlbW92ZUNoaWxkKGF4aXNCdXR0b24pO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0Nob29zZSBhIFRpbGUgdG8gU3RyaWtlJztcblxuICAgIGNvbnN0IGdyaWRQbGF5ZXJUd28gPSBkaXNwbGF5RW5lbXlCb2FyZCh0d28pO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdyaWRQbGF5ZXJUd28pO1xuXG4gICAgY29uc3QgZW5lbXlUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jZWxsJyk7XG4gICAgZW5lbXlUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWFpblBoYXNlKTtcbiAgICAgIH0pXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBwbGF5ZXIncyBtb3ZlIHRvIHRoZSBhaSdzIG1vdmUuIEl0IGFsc28gY2hlY2tzXG4vLyB3aGVuIHRoZSBnYW1lIGVuZHMgYW5kIGNhbGxzIHRoZSBoYW5kbGVyIGZvciB0aGF0IHBoYXNlLlxuZnVuY3Rpb24gaGFuZGxlTWFpblBoYXNlKGV2ZW50KSB7XG4gICAgLy8gRG9uJ3QgaW5jcmVtZW50IHRoZSB0dXJuIGlmIHRoZSBwbGF5ZXIgaXMgaGl0dGluZyB0aGUgc2FtZSBzcXVhcmUuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKTtcbiAgICBlbHNlIHtcbiAgICAgICAgd2FpdEZvclBsYXllclBoYXNlKGV2ZW50KTsgLy8gd2FpdCBmb3IgdGhlIHBsYXllciB0dXJuXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIG9uZSB3aW5zLlxuICAgICAgICBpZihnYW1lT3ZlckNoZWNrKHR3bywgJ3R3bycpKSB7XG4gICAgICAgICAgICBoYW5kbGVHYW1lT3ZlcihcIlBsYXllciBPbmVcIiwgb25lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFJIHR1cm4gb2NjdXJzIGFmdGVyIHRoZSBwbGF5ZXIgdHVybi5cbiAgICAgICAgICAgIGFpTWFpblBoYXNlKG9uZSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHBsYXllciB0d28gd2lucy5cbiAgICAgICAgICAgIGlmKGdhbWVPdmVyQ2hlY2sob25lLCAnb25lJykpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVHYW1lT3ZlcihcIlBsYXllciBUd29cIiwgdHdvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUGFzc2VzIHRoZSBBSSBwbGF5ZXIgb2JqZWN0LCB0aGUgQUkgdGlsZSBpZCwgYW5kIHRoZSBBSSB0aWxlLiBGb3JjZXMgQUkgdG8gd2FpdCB1bnRpbFxuLy8gcGxheWVyIGhhcyBtYWRlIHRoZWlyIG1vdmUuXG5hc3luYyBmdW5jdGlvbiB3YWl0Rm9yUGxheWVyUGhhc2UoZXZlbnQpIHtcbiAgICBhd2FpdCBwbGF5ZXJNYWluUGhhc2UodHdvLCBldmVudC50YXJnZXQuaWQsIGV2ZW50LnRhcmdldCk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZGlzcGxheXMgdGhlIHdpbm5lciBpbiB0aGUgaGVhZGVyLCBkaXNwbGF5cyB0aGUgdW5yZXZlYWxlZCBhaSBzaGlwcywgcmVtb3Zlc1xuLy8gdGhlIGV2ZW50IGxpc3RlbmVycyBhbmQgZGlzcGxheXMgdGhlIHJlc2V0IGJ1dHRvbi5cbmZ1bmN0aW9uIGhhbmRsZUdhbWVPdmVyKHdpbm5lciwgd2lubmVyT2JqZWN0KSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItZGVzY3JpcHRpb24nKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnV2lubmVyOiAnICsgd2lubmVyICsgJyEnO1xuXG4gICAgY29uc3Qgb2NjdXBpZWRTcGFjZXMgPSB3aW5uZXJPYmplY3QuYkZhY3Rvcnkub2NjdXBpZWRTcGFjZXM7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgdGhlIGNvb3JkaW5hdGVzIHdpdGggYSBzaGlwLlxuICAgIG9jY3VwaWVkU3BhY2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSBcIlwiO1xuICAgICAgICBpZih3aW5uZXIgPT0gXCJQbGF5ZXIgVHdvXCIpXG4gICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGUke2l0ZW19YCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtfWApO1xuICAgICAgICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB0aWxlIHRvIHNob3cgdGhlIGxvc2VyIHRoZSBsb2NhdGlvbiBvZiB0aGUgZW5lbXkgc2hpcHMuXG4gICAgICAgIGlmKCF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItc2hpcCcpKVxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcCcpO1xuICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHRpbGUuXG4gICAgY29uc3QgZW5lbXlUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jZWxsJyk7XG4gICAgZW5lbXlUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWFpblBoYXNlKTtcbiAgICAgIH0pXG5cbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2Fpbj9cIjtcbiAgICB1cHBlci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG5cbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0RXZlbnQpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZXZlcnl0aGluZyBpbiB0aGUgbWFpbiBjb250YWluZXIsIHJlLWFkZHMgdGhlIHVwcGVyIGNvbnRhaW5lclxuLy8gYW5kIHRoZSBib2FyZCBjb250YWluZXIsIHJlLWNyZWF0ZXMgdGhlIHBsYXllcnMgYW5kIGluaXRpYWxpemVzIHRoZW0sIGFuZCBjYWxscyB0aGUgc3RhcnRCdXR0b25FdmVudC5cbmZ1bmN0aW9uIHJlc2V0RXZlbnQoKSB7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiOyAvLyBSZW1vdmUgZXZlcnl0aGluZyBpbiB0aGUgY29udGVudCBjb250YWluZXIuXG5cbiAgICBjb25zdCB1cHBlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VwcGVyLWNvbnRhaW5lcicpOyAvLyBSZS1jcmVhdGUgdXBwZXJDb250YWluZXJcbiAgICB1cHBlciA9IHVwcGVyQ29udGFpbmVyO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9hcmQtY29udGFpbmVyJyk7IC8vIFJlLWNyZWF0ZSBib2FyZENvbnRhaW5lclxuICAgIGJvYXJkID0gYm9hcmRDb250YWluZXI7XG5cbiAgICBvbmUgPSBjcmVhdGVQbGF5ZXIoKTsgLy8gUmUtY3JlYXRlIHBsYXllciBvbmUgYW5kIHBsYXllciB0d28uXG4gICAgdHdvID0gY3JlYXRlUGxheWVyKCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHVwcGVyQ29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxuICAgIHN0YXJ0QnV0dG9uRXZlbnQoKTsgLy8gY2FsbCB0aGUgc3RhcnQgYnV0dG9uIGV2ZW50XG59IiwiLy8gJ3BsYXllcicgaXMgdGhlIHBsYXllciBvYmplY3QuXG4vLyAnaWRlbnRpZmllcicgaWRlbnRpZmllcyBpZiBwbGF5ZXIgaXMgJ29uZScgb3IgJ3R3bydcbi8vIFdoZW4gdGhlIGNvdW50IGlzIDUgKGJlY2F1c2UgdGhlcmUgYXJlIDUgc2hpcHMpIHRoZSBnYW1lIGVuZHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlckNoZWNrKHBsYXllciwgaWRlbnRpZmllcikge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGlwID0gcGxheWVyLmJGYWN0b3J5LnNoaXBzW2ldO1xuICAgICAgICBpZihzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBwbGF5ZXIuYkZhY3RvcnkuYWRkU3Vua1NoaXAoc2hpcCk7IC8vIGFkZCB0aGUgc2hpcCB0byBhIHNldCBvZiBzdW5rIHNoaXBzXG4gICAgICAgICAgICBzdW5rTW9kaWZpZXIocGxheWVyLCBpZGVudGlmaWVyKTsgLy8gbW9kaWZ5IHRoZSBzdHlsaW5nIG9mIHRoZSBzaGlwLlxuICAgICAgICAgICAgY291bnQrKzsgLy8gaXRlcmF0ZSB0aGUgY291bnRcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihjb3VudCA9PSA1KSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLyBUYWtlcyB0aGUgcGxheWVyIGFuZCB0aGUgaWRlbnRpZmllciB0byBkZXRlcm1pbmUgaWYgdGhlIHBsYXllciBpcyBwbGF5ZXIgb25lIG9yIHR3by5cbi8vIEZpbmRzIHRoZSBzZXQgb2Ygc3VuayBzaGlwcyB3aXRoaW4gdGhlIHBsYXllciBvYmplY3QgYW5kIGFkZHMgdGhlIHN1bmsgY2xhc3MgdG8gdGhlIHRpbGVzXG4vLyBhdCB0aGUgY29vcmRpbmF0ZXMgb2YgZWFjaCBzdW5rIHNoaXAuXG5mdW5jdGlvbiBzdW5rTW9kaWZpZXIocGxheWVyLCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3Qgc3Vua1NoaXBzID0gcGxheWVyLmJGYWN0b3J5LnN1bmtTaGlwcztcbiAgICBzdW5rU2hpcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBpdGVtLmNvb3JkaW5hdGVzO1xuXG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgaWYoaWRlbnRpZmllciA9PSAnb25lJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmQpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVcIiArIGNvb3JkKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcC1mYWN0b3J5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gbmV3IEFycmF5KDEwKTtcbiAgICBnZW5lcmF0ZUJvYXJkKGJvYXJkKTtcbiAgICBsZXQgc2hpcHMgPSBuZXcgQXJyYXkoKTtcbiAgICBsZXQgb2NjdXBpZWRTcGFjZXMgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHN1bmtTaGlwcyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIDEwIGJ5IDEwIGFycmF5XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZChib2FyZCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkoMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIHNwYWNlIGlzIG9jY3VwaWVkIGJ5IGFub3RoZXIgc2hpcFxuICAgIGZ1bmN0aW9uIGlzT2NjdXBpZWRTcGFjZSh4LCB5KSB7XG4gICAgICAgIHJldHVybiBvY2N1cGllZFNwYWNlcy5oYXMoYCR7eH0ke3l9YCk7XG4gICAgfVxuXG4gICAgLy8gVGVzdCBmb3IgYSBzaGlwIHBsYWNlZCBvdXQgb2YgYm91bmRzLiBGdW5jdGlvbiByZXR1cm5zIG51bGwgaWYgb3V0IG9mIGJvdW5kcy5cbiAgICBmdW5jdGlvbiBvdXRPZkJvdW5kcyhsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgICAgaWYoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZHMgPSBwYXJzZUludCh4KSArIGxlbmd0aDtcbiAgICAgICAgICAgIGlmKG91dE9mQm91bmRzID4gMTApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHkpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiAxMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFwibGVuZ3RoXCIgaXMgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cbiAgICAvLyBcImF4aXNcIiBpcyB0aGUgYXhpcyB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZC5cbiAgICAvLyBcInhcIiBhbmQgXCJ5XCIgYXJlIHRoZSBzdGFydGluZyB4IGFuZCB5IGNvb3JkaW5hdGVzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgICAgLy8gVGVzdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICBpZihvdXRPZkJvdW5kcyhsZW5ndGgsIGF4aXMsIHgsIHkpID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgICAgIHJldHVybiBzaGlwczsgLy8gcmV0dXJuIHNoaXBzIHdpdGhvdXQgY3JlYXRpbmcgYW55dGhpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlwUG9zaXRpb24gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHNwYWNlIGlzIG9jY3VwaWVkLlxuICAgICAgICAgICAgICAgIGlmKGlzT2NjdXBpZWRTcGFjZSh4SW5jcmVtZW50LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBQb3NpdGlvbltpXSA9IGAke3hJbmNyZW1lbnR9JHt5fWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgbGV0IHlJbmNyZW1lbnQgPSBwYXJzZUludCh5KSArIGk7XG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHgsIHlJbmNyZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eH0ke3lJbmNyZW1lbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IHNoaXAncyBjb29yZGluYXRlcyB0byB0aGUgb2NjdXBpZWRTcGFjZXMgU2V0XG4gICAgICAgIHNoaXBQb3NpdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgb2NjdXBpZWRTcGFjZXMuYWRkKGNvb3JkKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChsZW5ndGgsIHNoaXBQb3NpdGlvbik7IC8vIENyZWF0ZSB0aGUgc2hpcC5cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTsgLy8gUHVzaCB0aGUgbmV3IHNoaXAgb250byB0aGUgc2hpcHMgYXJyYXkuXG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBzaGlwcyBhcnJheS5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIC8vIFJlY2VpdmVzIGFuIHgseSBjb29yZGluYXRlIGZvciBhdHRhY2suXG4gICAgLy8gRGV0ZXJtaW5lcyBpZiB0aGUgYm9hcmQgY29vcmRpbmF0ZSBoYXMgYSBtaXNzL2hpdCBpbiBpdCBhbHJlYWR5LlxuICAgIC8vIE5lc3RlZCBsb29wcyB0byBnbyB0aHJvdWdoIGVhY2ggc2hpcCdzIGNvb3JkaW5hdGVzLiBcbiAgICAvLyBPKG5ebSkgdGltZSBjb21wbGV4aXR5LiBXaGVyZSBuIGlzIHRoZSBudW1iZXIgb2Ygc2hpcHMgYW5kIG0gaXMgdGhlIHh5IG9mIGVhY2ggc2hpcC5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgbGV0IHh5ID0geC50b1N0cmluZygpICsgeS50b1N0cmluZygpO1xuICAgICAgICBpZihib2FyZFt4XVt5XSkgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLmNvb3JkaW5hdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdID09PSB4eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSBcImhpdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFN1bmtTaGlwKHNoaXApIHtcbiAgICAgICAgc3Vua1NoaXBzLmFkZChzaGlwKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgc2hpcHMsXG4gICAgICAgIG9jY3VwaWVkU3BhY2VzLFxuICAgICAgICBzdW5rU2hpcHMsXG4gICAgICAgIGFkZFN1bmtTaGlwLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgfTtcbn0iLCJpbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuLy8gaW1wb3J0IHsgcGxhY2VQaGFzZSwgZGVmYXVsdFBsYWNlUGhhc2UsIGRlZmF1bHRQbGFjZVBoYXNlMiB9IGZyb20gXCIuL3BsYWNlLXBoYXNlXCI7XG4vLyBpbXBvcnQgeyBtYWluUGhhc2UsIGRlZmF1bHRNYWluUGhhc2UgfSBmcm9tIFwiLi9tYWluLXBoYXNlXCI7XG5pbXBvcnQgeyBzZXR1cERPTSB9IGZyb20gXCIuL2RvbS1hbmQtZXZlbnQtbGlzdGVuZXJzXCI7XG5cbi8vIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyB0d28gcGxheWVyIG9iamVjdHMgYW5kIHBhc3NlcyB0aGVtIGludG8gdGhlIHNldHVwRE9NIGZ1bmN0aW9uLlxuLy8gTGFyZ2VseSB0aGUgYWN0dWFsIGdhbWVzdGF0ZSBpcyBjb250cm9sbGVkIGJ5IGRvbS1hbmQtZXZlbnQtbGlzdGVuZXJzLmpzLCBidXQgaWYgeW91IHdhbnQgdG8gdGVzdFxuLy8gdGhlIGdhbWUgbG9naWMgd2l0aG91dCB0aGUgRE9NIG9yIGV2ZW50IGxpc3RlbmVycywgeW91IGNhbiBkbyB0aGF0IGhlcmUgdXNpbmcgdGhlIGRlZmF1bHQgZnVuY3Rpb25zXG4vLyB0aGF0IGhhdmUgYmVlbiBjb21tZW50ZWQgb3V0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZVN0YXRlKGNvbnRlbnQpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoKTsgLy8gVHdvIHNlcGFyYXRlIGJvYXJkcy5cbiAgICBjb25zdCBwbGF5ZXJUd28gPSBjcmVhdGVQbGF5ZXIoKTtcblxuICAgIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICAgIC8vIEZ1bmN0aW9ucyB0byBoZWxwIHRlc3QgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgd29ya3Mgb3V0c2lkZSBvZiB0aGUgRE9NIGFuZCBiZWZvcmUgZXZlbnQgbGlzdGVuZXJzLlxuICAgIC8vIGRlZmF1bHRQbGFjZVBoYXNlKHBsYXllck9uZSk7XG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UyKHBsYXllclR3byk7XG4gICAgLy8gZGVmYXVsdE1haW5QaGFzZShwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZVN0YXRlIGZyb20gJy4vZ2FtZXN0YXRlJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5nYW1lU3RhdGUoY29udGVudCk7IiwiaW1wb3J0IGdhbWVPdmVyQ2hlY2sgZnJvbSBcIi4vZ2FtZS1vdmVyLWNoZWNrXCI7XG5cbi8vIEZ1bmN0aW9uIGF0dGFja3MgdGhlIG9wcG9uZW50J3MgdGlsZS4gQSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgdGlsZSB0byBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzXG4vLyB2aWEgQ1NTLiBUaGUgQUkgdGlsZSBpZCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgcGxheWVyJ3MuIEl0IGlzIGluIHRoZSBmb3JtYXQ6IGUwMCwgZTAxIC4uLiBlOTgsIGU5OVxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1haW5QaGFzZShvcHBvbmVudCwgaWQsIHRpbGUpIHtcbiAgICAvLyBXcmFwIHRoZSBjb2RlIGluIGEgcHJvbWlzZSwgc28gdGhlIGFpTWFpblBoYXNlIHdhaXRzIGZvciB0aGUgcGxheWVyTWFpblBoYXNlLlxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyBnZXQgY29vcmRpbmF0ZXMgZnJvbSB0aWxlIGlkXG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDIpKTtcblxuICAgICAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTsgLy8gYXR0YWNrIHRoZSBlbmVteSBwbGF5ZXJcblxuICAgICAgICBpZihvcHBvbmVudC5iRmFjdG9yeS5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTsgLy8gaWYgbWlzcywgYWRkIGNsYXNzICdtaXNzJyBmb3Igc3R5bGluZ1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTsgLy8gaWYgaGl0LCBhZGQgY2xhc3MgJ2hpdCcgZm9yIHN0eWxpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIGF0dGFja3MgdGhlIG9wcG9uZW50J3Mgc2hpcCBhbmQgdGlsZS4gQSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgdGlsZSB0byBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLlxuZXhwb3J0IGZ1bmN0aW9uIGFpTWFpblBoYXNlKG9wcG9uZW50KSB7XG4gICAgbGV0IHg7IC8vIHRoZSB4IHZhbHVlIHRvIGF0dGFja1xuICAgIGxldCB5OyAvLyB0aGUgeSB2YWx1ZSB0byBhdHRhY2tcbiAgICBsZXQgdGlsZTsgLy8gdGhlIHRhcmdldCB0aWxlXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIFRoZSBib29sZWFuIHRvIGluZGljYXRlIGlmIGFuIGFkamFjZW50IHRpbGUgaGFzIGJlZW4gZm91bmQuXG5cbiAgICAvLyBHZXQgYWxsIHRpbGVzIHdpdGggdGhlICdoaXQnIGNsYXNzIGZvciBmb2xsb3ctdGhyb3VnaCBsb2dpYy5cbiAgICBsZXQgaGl0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaXQnKTtcblxuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBoaXQgYW5kIGF0dGVtcHQgdG8gZmluZCBhbiBhdmFpbGFibGUgdGFyZ2V0LlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBoaXQgPSBoaXRzW2ldO1xuICAgICAgICBpZihoaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdW5rJykgfHwgaGl0LmNsYXNzTGlzdC5jb250YWlucygnZW5lbXktY2VsbCcpKSB7XG4gICAgICAgICAgLy8gRG8gbm90aGluZyBhbmQgbW92ZSB0byB0aGUgbmV4dCBoaXQsIGlmIHRoZSBjbGFzcyBpcyBhIHN1bmtlbiBzaGlwIG9yIGFuIGFpIHNoaXAuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaGl0SWQgPSBoaXQuaWQ7XG4gICAgICAgICAgbGV0IGF4aXNBZGphY2VudCA9IGFpQ29uZmlybUFkamFjZW50KGhpdElkKTsgLy8gY29uZmlybXMgYW4gYWRqYWNlbnQgaGl0IGFuZCB0aGUgYXhpc1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGFpQ29uZmlybUFkamFjZW50IHdpbGwgcmV0dXJuIHRoZSBheGlzIGV2ZW4gaWYgYm90aCBzaWRlcyBoYXZlIGEgbWlzcywgYnV0IGlmIGFpUGF0aGluZ1xuICAgICAgICAgIC8vIGNhbm5vdCBmaW5kIGFuIGFwcHJvcHJpYXRlIHRhcmdldCwgaXQgd2lsbCBub3QgYnJlYWsgdGhlIGxvb3AuIFRodXMsIHlvdSBjYW4gdXNlIHRoZVxuICAgICAgICAgIC8vIGFpRmluZHNBZGphY2VudFRpbGUgdG8gY2xlYW4gdXAgc2hpcHMgdGhhdCBhcmUgcGxhY2VkIHNpZGUgYnkgc2lkZS5cbiAgICAgICAgICBpZihheGlzQWRqYWNlbnQpIHtcbiAgICAgICAgICAgIGlmKGF4aXNBZGphY2VudCA9PSAneCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNBZGphY2VudCA9PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGF2YWlsYWJsZVRhcmdldElkID0gYWlGaW5kc0FkamFjZW50VGlsZShoaXRJZCk7IC8vIGZpbmQgYW4gYXZhaWxhYmxlIHRhcmdldFxuICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICB4ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgIHkgPSBhdmFpbGFibGVUYXJnZXRJZC5jaGFyQXQoMSk7XG4gICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgYW4gYWRqYWNlbnQgdGlsZSB3YXMgZm91bmQsIGF0dGFjayB0aGUgdGFyZ2V0LiBPdGhlcndpc2UgdGhlIEFJIGZpbmRzIGEgcmFuZG9tIHRpbGUuXG4gICAgaWYoZm91bmQpXG4gICAgICAgIG9wcG9uZW50LmF0dGFja2VkKHgsIHkpOyAvLyB0aGUgZW5lbXkgcGxheWVyIG9iamVjdCBjYWxscyBpdHMgYXR0YWNrZWQgZnVuY3Rpb25cbiAgICBlbHNlIHtcbiAgICAgICAgdGlsZSA9IGFpRmluZHNSYW5kb20oKTtcbiAgICAgICAgeCA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDApKTtcbiAgICAgICAgeSA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgb3Bwb25lbnQuYXR0YWNrZWQoeCwgeSk7XG4gICAgfVxuICAgICAgXG4gICAgaWYob3Bwb25lbnQuYkZhY3RvcnkuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG4gICAgICAgIFxuICAgIGVsc2Uge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH1cbn1cblxuLy8gVGhlIGZ1bmN0aW9uIHRoYXQgY29uZmlybXMgdHdvIGFkamFjZW50IGhpdHMgZm9yIHRoZSBBSS5cbmZ1bmN0aW9uIGFpQ29uZmlybUFkamFjZW50KGlkKSB7XG4gICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMCkpOyAvLyB0aGUgcHJldmlvdXMgeCB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8gdGhlIHByZXZpb3VzIHkgdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgYXJyYXkgPSBbeCArIDEsIHggLSAxLCB5ICsgMSwgeSAtIDFdOyAvLyB0aGUgYWRqYWNlbnQgdGlsZSB2YWx1ZXNcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gaWYgdGhlIG5leHQgdGFyZ2V0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGF4aXMgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBheGlzO1xufVxuXG4vLyBPbmNlIHR3byBhZGphY2VudCBoaXRzIGFyZSBjb25maXJtZWQsIHRoZSBhaSB3aWxsIHRhcmdldCBhZGphY2VudCB0aWxlcyBvbiB0aGUgYXhpcy5cbmZ1bmN0aW9uIGFpUGF0aGluZyhpZCwgYXhpcykge1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8gdGhlIHByZXZpb3VzIHggdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgeSA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIHRoZSBwcmV2aW91cyB5IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIGlmIHRoZSBuZXh0IHRhcmdldCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB0YXJnZXRJZCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuICAgIFxuICAgIGlmKGF4aXMgPT0gJ3gnKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCArIDIsIHggKyAzLCB4ICsgNCwgeCArIDUsIFxuICAgICAgICB4IC0gMSwgeCAtIDIsIHggLSAzLCB4IC0gNCwgeCAtIDVdOyAvLyB0aGUgcG90ZW50aWFsIGFkamFjZW50IGF4aXMgdmFsdWVzXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aC8yOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBhIG1pc3MgbWFya3MgdGhlIGVuZCBvZiBvbmUgc2lkZSBvZiB0aGUgYXhpc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYSBtaXNzIG1hcmtzIHRoZSBlbmQgb2Ygb25lIHNpZGUgb2YgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXJyYXkgPSBbeSArIDEsIHkgKyAyLCB5ICsgMywgeSArIDQsIHkgKyA1LFxuICAgICAgICB5IC0gMSwgeSAtIDIsIHkgLSAzLCB5IC0gNCwgeSAtIDVdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGgvMjsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJZDtcbn1cblxuLy8gVGhlIGxvZ2ljIGZvciB0aGUgQUkgdG8gZmluZCBhIHRpbGUgd2hlcmUgdGhlIHNwYWNlIGhhcyBub3QgYmVlbiB0YWtlbiBvciBvdXQgb2YgYm91bmRzLlxuLy8gUmV0dXJucyB0aGUgaWQgb2YgdGhlIGZpcnN0IGZvdW5kIHRhcmdldC5cbmZ1bmN0aW9uIGFpRmluZHNBZGphY2VudFRpbGUoaWQpIHtcbiAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgwKSk7IC8vIHRoZSBwcmV2aW91cyB4IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyB0aGUgcHJldmlvdXMgeSB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgdGFyZ2V0SWQgPSBudWxsOyAvLyB0aGUgbmV3IHRhcmdldCBpZCB0byByZXR1cm5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKGFycmF5W2ldIDwgMCB8fCBhcnJheVtpXSA+IDkpO1xuICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthcnJheVtpXX0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldElkO1xufVxuXG4vLyBBSSBzZWxlY3RzIGEgcmFuZG9tIHNxdWFyZSBpbiB0aGUgZ3JpZC5cbmZ1bmN0aW9uIGFpRmluZHNSYW5kb20oKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IC8vIGdldCByYW5kb20geCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcblxuICAgICAgICBpZighdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSAmJiAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAvLyBGb3IgMTAgYXR0ZW1wdHMsIHRoZSBBSSB3aWxsIGF0dGVtcHQgdG8gZmluZCBhIHRpbGUgdGhhdCBoYXMgdHdvIGVtcHR5XG4gICAgICAgICAgICAvLyBhZGphY2VudCB0aWxlcyBiZXNpZGUgdGhlIHJhbmRvbSBvbmUgc2VsZWN0ZWQuIElmIGl0IGlzIHVuYWJsZSB0byBmaW5kIG9uZSB3aXRoaW5cbiAgICAgICAgICAgIC8vIDEwIGF0dGVtcHRzLCBpdCB3aWxsIGp1c3QgcGFzcyB0aHJvdWdoIHRoaXMgY2hlY2suXG4gICAgICAgICAgICBpZihhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHx8IGNvdW50ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEF0dGVtcHQ6ICR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQUkgcHJpb3JpdGl6ZXMgc3F1YXJlcyB0aGF0IGhhdmUgdHdvIGVtcHR5IHRpbGVzIGFkamFjZW50IHRvIHRoZW0uXG5mdW5jdGlvbiBhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHtcbiAgICBsZXQgaWQgPSB0aWxlLmlkO1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8geCB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8geSB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgY291bnQgPSAwOyAvLyBUaGUgY291bnQgdG8gZmluZCB0d28gZW1wdHkgYWRqYWNlbnQgdGlsZXMuXG4gICAgbGV0IHRhcmdldCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRpbGUgaGFzIGFuIG9wZW4gc3BhY2UsIGl0ZXJhdGUgdGhlIGNvdW50ZXIuXG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBjb3VudGVyIGlzIDIsIHRoZSB0aWxlIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaSA9PSAyKSBjb3VudCA9IDA7IC8vIHJlc2V0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7XG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcblxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgd2FzIGZvdW5kLCB0YXJnZXQgd2lsbCBubyBsb25nZXIgYmUgbnVsbC5cbiAgICBpZihmb3VuZCkge1xuICAgICAgICB0YXJnZXQgPSB0aWxlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIFxufVxuXG4vLyBUbyBoZWxwIHRlc3QgdGhlIGdhbWUgbG9naWMgd2l0aG91dCB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNYWluUGhhc2Uob25lLCB0d28pIHtcbiAgICB0d28uYXR0YWNrZWQoMCwgMCk7IC8vIHBhdHJvbFxuICAgIHR3by5hdHRhY2tlZCgxLCAwKTtcblxuICAgIHR3by5hdHRhY2tlZCgxLCAxKTsgLy8gc3ViXG4gICAgdHdvLmF0dGFja2VkKDIsIDEpO1xuICAgIHR3by5hdHRhY2tlZCgzLCAxKTtcblxuICAgIHR3by5hdHRhY2tlZCgyLCAyKTsgLy8gZGVzdHJveWVyXG4gICAgdHdvLmF0dGFja2VkKDMsIDIpO1xuICAgIHR3by5hdHRhY2tlZCg0LCAyKTtcblxuICAgIHR3by5hdHRhY2tlZCgzLCAzKTsgLy8gYmF0dGxlc2hpcFxuICAgIHR3by5hdHRhY2tlZCg0LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNSwgMyk7XG4gICAgdHdvLmF0dGFja2VkKDYsIDMpO1xuXG4gICAgdHdvLmF0dGFja2VkKDQsIDQpOyAvLyBjYXJyaWVyXG4gICAgdHdvLmF0dGFja2VkKDUsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDYsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDcsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDgsIDQpO1xuXG4gICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGdhbWUgaXMgb3Zlci4gUGxheWVyIHR3byB3aW5zLlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihnYW1lT3ZlckNoZWNrKHR3bykpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgb25lIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBvbmUgd29uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxufSIsIi8vIFRha2UgdGhlIHBsYXllcidzIGJvYXJkLCB0aGUgdGlsZSBpZCwgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGhhc2Uob25lLCBpZCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgbGV0IHNoaXBOdW1iZXIgPSBvbmUuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBnZXQgdGhlIG51bWJlciBvZiBzaGlwc1xuICAgIGxldCB4ID0gaWQuY2hhckF0KDApOyAvLyBnZXQgeCBmcm9tIHRoZSB0aWxlIGlkXG4gICAgbGV0IHkgPSBpZC5jaGFyQXQoMSk7IC8vIGdldCB5IGZyb20gdGhlIHRpbGUgaWRcbiAgICBvbmUucGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KTsgLy8gcGxhY2UgdGhlIHNoaXBcbiAgICBsZXQgbmV3U2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuXG4gICAgLy8gSWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyLCB0aGUgc2hpcCB3YXMgc3VjY2Vzc2Z1bGx5IHBsYWNlZCBhbmRcbiAgICAvLyBjYW4gYmUgY29sb3JlZC5cbiAgICBpZihuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcilcbiAgICAgICAgY29sb3JTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBzdGF0ZSB3aXRob3V0IHRoZSB1c2Ugb2YgdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZShvbmUpIHtcbiAgICBvbmUucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgb25lLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgb25lLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgb25lLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgb25lLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZTIodHdvKSB7XG4gICAgdHdvLnBsYWNlKDIsICd4JywgMCwgMCk7IC8vIHNoaXAgb2YgbGVuZ3RoIDIgb24gdGhlICd4JyBheGlzIGF0IGNvb3JkaW5hdGU6IDAsMFxuICAgIHR3by5wbGFjZSgzLCAneCcsIDEsIDEpO1xuICAgIHR3by5wbGFjZSgzLCAneCcsIDIsIDIpO1xuICAgIHR3by5wbGFjZSg0LCAneCcsIDMsIDMpO1xuICAgIHR3by5wbGFjZSg1LCAneCcsIDQsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWlQbGFjZVBoYXNlKHR3bykge1xuICBcbiAgICAvLyBBcnJheSBvZiBzaGlwIGxlbmd0aHMgdG8gcmFuZG9tbHkgY2hvb3NlIGZyb21cbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzaGlwIGxlbmd0aHMgYW5kIHBsYWNlIGVhY2ggc2hpcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGlwTnVtYmVyID0gdHdvLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gR2V0IHRoZSBudW1iZXIgb2Ygc2hpcHMgaW4gdGhlIHBsYXllciBvYmplY3RcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW2ldO1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAneCcgOiAneSc7XG4gIFxuXG4gICAgICAvLyBUaGlzIGxvb3AgZW5zdXJlcyBhIHNoaXAgaXMgYmVpbmcgcGxhY2VkIG9uIHRoZSBib2FyZC5cbiAgICAgIC8vIElmIHRoZSBwbGFjZSBmdW5jdGlvbiBpcyBmZWQgY29vcmRpbmF0ZXMgb2YgYW4gb2NjdXBpZWQgc3BhY2UsIGEgc2hpcCB3aWxsIG5vdCBiZSBwbGFjZWQuXG4gICAgICAvLyBUaGlzIGxvb3Agd2lsbCByZXBlYXQgdW50aWwgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgaGFzIGluY3JlYXNlZC5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgYXhpcywgdGhlIHBsYWNlbWVudCBvZiB0aGUgc2hpcCdzIHN0YXJ0aW5nIGNvb3JkaW5hdGUgd2lsbCB2YXJ5XG4gICAgICAgIC8vIGJ5IHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgYmVpbmcgcGxhY2VkLlxuICAgICAgICBpZihheGlzID09ICd4Jykge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHR3by5wbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpO1xuICBcbiAgICAgICAgbGV0IG5ld1NoaXBOdW1iZXIgPSB0d28uYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBHZXQgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHNcbiAgXG4gICAgICAgIGlmIChuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcikge1xuICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgaWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLy8gbGVuZ3RoLCBheGlzLCB4IHN0YXJ0aW5nIGNvb3JkaW5hdGUsIHkgc3RhcnRpbmcgY29vcmRpbmF0ZVxuLy8gYWRkaW5nIGEgY2xhc3MgdG8gc3R5bGUgdGhlIHRpbGVzIHdpdGggc2hpcHNcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNoaXAobCwgYSwgeCwgeSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoYSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4SW5jcmVtZW50fSR7eX1gKTtcbiAgICAgICAgICAgIGNvbG9yQ2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXNoaXBcIik7XG4gICAgICAgIH0gZWxzZSBpZihhID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCB5SW5jcmVtZW50ID0gcGFyc2VJbnQoeSkgKyBpO1xuICAgICAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5SW5jcmVtZW50fWApO1xuICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQtZmFjdG9yeSc7XG5cbi8vIEVhY2ggcGxheWVyIGhhcyB0aGVpciBvd24gZ2FtZWJvYXJkLCBhIGZ1bmN0aW9uIHRvIHBsYWNlIGEgc2hpcCwgYSBmdW5jdGlvbiB0byBhdHRhY2ssIGFuZCBhblxuLy8gYXJyYXkgY29udGFpbmluZyB0aGVpciBzaGlwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgIGNvbnN0IGJGYWN0b3J5ID0gY3JlYXRlR2FtZUJvYXJkKCk7IC8vIFRoZSBib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4gICBmdW5jdGlvbiBwbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gICB9XG4gICBcbiAgIGZ1bmN0aW9uIGF0dGFja2VkKHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgIH1cblxuICAgcmV0dXJuIHtcbiAgICBiRmFjdG9yeSwgXG4gICAgcGxhY2UsXG4gICAgYXR0YWNrZWRcbiAgIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoLCBhcnJheSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXJyYXk7XG4gICAgbGV0IGhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTsgLy8gRmlsbCB0aGUgaGl0cyBhcnJheSB3aXRoIGZhbHNlIHZhbHVlcy5cbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICBcbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIG5leHQgYXZhaWxhYmxlIGhpdCB0aGF0IGlzIGZhbHNlIGFuZCBtYWtlIGl0IHRydWUgYW5kIHRoZW4gYnJlYWsgdGhlIGxvb3AuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoaGl0c1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGhpdHNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBldmVyeSBlbGVtZW50IGluIHRoZSBoaXRzIGFycmF5IGlzIHRydWUuXG4gICAgICAgIGlmIChoaXRzLmV2ZXJ5KGhpdCA9PiBoaXQpKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0SGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzLnNsaWNlKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBoaXQsXG4gICAgICBnZXRMZW5ndGgsXG4gICAgICBnZXRIaXRzLFxuICAgICAgaXNTdW5rLFxuICAgICAgY29vcmRpbmF0ZXNcbiAgICB9O1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9