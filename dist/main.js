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
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;EACd;;AAEF;IACI,uBAAuB;AAC3B","sourcesContent":[".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n    text-align: center;\n    line-height: 50px;\n}\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n    text-align: center;\n    line-height: 50px;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit::before {\n    content: \"X\";\n  }\n\n.sunk {\n    background-color: black;\n}"],"sourceRoot":""}]);
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
    header.textContent = 'The winner is ' + winner + '!';

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
/* harmony import */ var _place_phase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-phase */ "./src/place-phase.js");
/* harmony import */ var _main_phase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-phase */ "./src/main-phase.js");
/* harmony import */ var _dom_and_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-and-event-listeners */ "./src/dom-and-event-listeners.js");





// This function creates two player objects and passes them into the setupDOM function.
// Largely the actual gamestate is controlled by dom-and-event-listeners.js, but if you want to test
// the game logic without the DOM or event listeners, you can do that here using the default functions
// that have been commented out.
function gameState(content) {
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Two separate boards.
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();

    (0,_dom_and_event_listeners__WEBPACK_IMPORTED_MODULE_3__.setupDOM)(content, playerOne, playerTwo);

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

// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss.
function aiMainPhase(opponent) {
    let x; // the x value to attack
    let y; // the y value to attack
    let tile; // the target tile
    let found = false; // The boolean to indicate if an adjacent tile has been found.

    // Get all tiles with the 'hit' class to indicate the ship has been hit.
    let hits = document.querySelectorAll('.hit');

    // Go through each hit and attempt to find an available target.
    for(let i = 0; i < hits.length; i++) {
        let hit = hits[i];
        if(hit.classList.contains('sunk') || hit.classList.contains('enemy-cell')) {
          // Do nothing and move to the next hit, if the class is a sunken ship or an ai ship.
        } else {
          const hitId = hit.id;
          let axisAdjacent = aiConfirmAdjacent(hitId); // confirms an adjacent hit and the axis
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
          } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUCxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0EsdURBQXVELFdBQVcsRUFBRSxFQUFFO0FBQ3RFO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdURBQXVELEVBQUUsRUFBRSxXQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRnNEOztBQUV0RDtBQUNBO0FBQ2U7QUFDZixvQkFBb0IsbUVBQWUsSUFBSTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCTztBQUNQO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXItY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlLXBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC1mYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgfVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgfVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAvLyBUaGUgdGFibGUgdG8gaG9sZCB0aGUgYm9hcmQuXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYkZhY3RvcnkuYm9hcmQ7IC8vIFRoZSBib2FyZCBhcnJheS5cblxuICAgIGNvbnN0IG51bVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTsgLy8gVG8gaG9sZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIG51bVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIC8vIEFkZCBhbiBlbXB0eSBjZWxsIHRvIHRoZSBsZWZ0IG9mIHRoZSBudW1iZXJzIGFuZCBhYm92ZSB0aGUgbGV0dGVycy5cbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcbiAgICBudW1Sb3cuYXBwZW5kQ2hpbGQoZW1wdHlDZWxsKTtcblxuICAgIC8vIExvb3AgdG8gYWRkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG51bWJlckNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsXCIpO1xuICAgICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIG51bVJvdy5hcHBlbmRDaGlsZChudW1iZXJDZWxsKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobnVtUm93KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBsZXR0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBsZXR0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2xldHRlci1jZWxsJyk7XG4gICAgICAgIGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGV0dGVyQ2VsbCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RW5lbXlCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTsgLy8gVGhlIHRhYmxlIHRvIGhvbGQgdGhlIGJvYXJkLlxuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJGYWN0b3J5LmJvYXJkOyAvLyBUaGUgYm9hcmQgYXJyYXkuXG5cbiAgICBjb25zdCBudW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7IC8vIFRvIGhvbGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBudW1Sb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBBZGQgYW4gZW1wdHkgY2VsbCB0byB0aGUgbGVmdCBvZiB0aGUgbnVtYmVycyBhbmQgYWJvdmUgdGhlIGxldHRlcnMuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG4gICAgbnVtUm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG5cbiAgICAvLyBMb29wIHRvIGFkZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBudW1iZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBudW1Sb3cuYXBwZW5kQ2hpbGQobnVtYmVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG51bVJvdyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgY29uc3QgbGV0dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItY2VsbCcpO1xuICAgICAgICBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxldHRlckNlbGwpO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBcImVcIiArIGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59IiwiaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBkaXNwbGF5RW5lbXlCb2FyZCB9IGZyb20gXCIuL2Rpc3BsYXktYm9hcmRcIjtcbmltcG9ydCBnYW1lT3ZlckNoZWNrIGZyb20gXCIuL2dhbWUtb3Zlci1jaGVja1wiO1xuaW1wb3J0IHsgcGxheWVyTWFpblBoYXNlLCBhaU1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IGFpUGxhY2VQaGFzZSwgcGxhY2VQaGFzZSB9IGZyb20gXCIuL3BsYWNlLXBoYXNlXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5sZXQgb25lID0gXCJcIjsgLy8gcGxheWVyIG9uZVxubGV0IHR3byA9IFwiXCI7IC8vIHBsYXllciB0d29cbmxldCBtYWluID0gXCJcIjsgLy8gbWFpbiBjb250YWluZXIgKGNvbnRlbnQpLCBqdXN0IGluIGNhc2VcbmxldCBib2FyZCA9IFwiXCI7IC8vIGJvYXJkIGNvbnRhaW5lclxubGV0IHVwcGVyID0gXCJcIjsgLy8gdXBwZXIgY29udGFpbmVyXG5cblxuLy8gU2V0cyB1cCB0aGUgc3RhcnQgYnV0dG9uIGFuZCBidWlsZHMgc29tZSBjb250YWluZXJzIGZvciBsYXRlciB1c2UuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBET00oY29udGVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICBvbmUgPSBwbGF5ZXJPbmU7XG4gICAgdHdvID0gcGxheWVyVHdvO1xuICAgIG1haW4gPSBjb250ZW50O1xuXG4gICAgY29uc3QgdXBwZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1cHBlci1jb250YWluZXInKTtcbiAgICB1cHBlciA9IHVwcGVyQ29udGFpbmVyO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEJ1dHRvbkV2ZW50KCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc3RhcnQgYnV0dG9uXG4gICAgICAgIHVwcGVyLnJlbW92ZUNoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgYm9hcmQgPSBib2FyZENvbnRhaW5lcjtcbiAgICB1cHBlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh1cHBlckNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG59XG5cbi8vIFdoZW4gdGhlIHN3YXAgYXhpcyBidXR0b24gaXMgY2xpY2tlZCwgaXQgY2hhbmdlcyB0aGUgYXhpcyB0byBwbGFjZSB0aGUgc2hpcC5cbmZ1bmN0aW9uIGF4aXNTd2FwKGF4aXMpIHtcbiAgICBpZihheGlzID09ICd4JylcbiAgICAgICAgcmV0dXJuICd5JztcbiAgICBlbHNlIHJldHVybiAneCc7XG59XG5cbi8vIFdoZW4gdGhlIHN0YXJ0IGJ1dHRvbiBpcyBjbGlja2VkLiBBZGRzIGEgZGVzY3JpcHRpb24gb2Ygd2hhdCB0byBkbywgZ2VuZXJhdGVzIHRoZSBwbGF5ZXIgYm9hcmQsXG4vLyBjYWxscyB0aGUgZnVuY3Rpb24gdG8gcGxhY2UgdGhlIHNoaXBzLlxuZnVuY3Rpb24gc3RhcnRCdXR0b25FdmVudCgpIHtcbiAgICAvLyBEZXNjcmlwdG9yXG4gICAgbGV0IHBsYWNlU2hpcHNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLmlkID0gJ2hlYWRlci1kZXNjcmlwdGlvbic7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBZb3VyIFNoaXBzXCI7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc0Rlc2NyaXB0aW9uKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIHBsYXllcidzIGdyaWQgdG8gcGxhY2Ugc2hpcHMuXG4gICAgY29uc3QgZ3JpZFBsYXllck9uZSA9IGRpc3BsYXlCb2FyZChvbmUpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdyaWRQbGF5ZXJPbmUpO1xuXG4gICAgcGxhY2VTaGlwc0V2ZW50KCk7XG59XG5cbmxldCBheGlzID0gJ3gnOyAvLyBkZWZhdWx0IGF4aXMgZm9yIHBsYWNpbmcgc2hpcHNcblxuLy8gVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkIGFuZCBjYWxscyBwbGFjZVBoYXNlIHVudGlsXG4vLyBhbGwgdGhlIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQuIEFsc28gcmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgb25jZVxuLy8gYWxsIHRoZSBzaGlwcyBhcmUgcGxhY2VkLlxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwcyhldmVudCkge1xuICAgIGxldCBzaGlwcyA9IG9uZS5iRmFjdG9yeS5zaGlwcztcbiAgICBsZXQgbGVuZ3RoID0gMjsgLy8gVGhlIGZpcnN0IHNoaXAgaXMgdGhlIHBhdHJvbCBib2F0LlxuXG4gICAgaWYoc2hpcHMubGVuZ3RoID09IDApXG4gICAgICBsZW5ndGggPSAyOyAvLyBwbGFjZSB0aGUgcGF0cm9sIGJvYXRcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAxKSBcbiAgICAgIGxlbmd0aCA9IDM7IC8vIHBsYWNlIHRoZSBzdWJtYXJpbmVcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAyKVxuICAgICAgbGVuZ3RoID0gMzsgLy8gcGxhY2UgdGhlIGRlc3Ryb3llclxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDMpXG4gICAgICBsZW5ndGggPSA0OyAvLyBwbGFjZSB0aGUgYmF0dGxlc2hpcFxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDQpXG4gICAgICBsZW5ndGggPSA1OyAvLyBwbGFjZSB0aGUgY2FycmllclxuICBcbiAgICBpZihzaGlwcy5sZW5ndGggPCA1KVxuICAgICAgcGxhY2VQaGFzZShvbmUsIGV2ZW50LnRhcmdldC5pZCwgYXhpcywgbGVuZ3RoKTtcbiAgXG4gICAgaWYoc2hpcHMubGVuZ3RoID09IDUpIHtcbiAgICAgIGFpUGxhY2VQaGFzZSh0d28pOyAvLyBBSSBwbGFjZXMgc2hpcHMgcmFuZG9tbHlcbiAgICAgIGNvbnN0IHBsYXllclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICAgIHBsYXllclRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBsYWNlU2hpcHMpO1xuICAgICAgfSlcbiAgICAgIG1haW5QaGFzZUV2ZW50KCk7XG4gICAgfVxufVxuICBcblxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIHRoZSBldmVudCB0byBlYWNoIHRpbGUgdG8gcGxhY2Ugc2hpcHMgYW5kIGNyZWF0ZXMgYSBidXR0b24gKGFuZCBldmVudCkgdG9cbi8vIGNoYW5nZSB0aGUgYXhpcyB0aGUgc2hpcCBpcyBwbGFjZWQuXG5mdW5jdGlvbiBwbGFjZVNoaXBzRXZlbnQoKSB7XG4gICAgLy8gQ2xpY2sgdG8gY2hhbmdlIHRoZSBheGlzIHRoZSBwbGF5ZXIgd2lzaGVzIHRvIHBsYWNlIGhpcyBzaGlwcy5cbiAgICBsZXQgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGF4aXNCdXR0b24uaWQgPSAnYXhpcy1idXR0b24nO1xuICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3YXAgQXhpc1wiO1xuICAgIGF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBheGlzID0gYXhpc1N3YXAoYXhpcykpO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKGF4aXNCdXR0b24pO1xuICBcbiAgICAvLyBHZXQgYWxsIHRoZSB0aWxlcyBhbmQgY3JlYXRlIGEgY2xpY2sgZXZlbnQuXG4gICAgY29uc3QgcGxheWVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIHBsYXllclRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxhY2VTaGlwcyk7XG4gICAgfSlcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBheGlzIGJ1dHRvbiBmcm9tIHRoZSBwb3NpdGlvbmluZyBwaGFzZSwgY2hhbmdlcyB0aGUgaGVhZGVyIHRleHQsIFxuLy8gY3JlYXRlcyBhIG5ldyBib2FyZCB0byBkaXNwbGF5IHRoZSBvcHBvbmVudCdzIHRpbGVzLCBhbmRcbi8vIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBvcHBvbmVudCdzIGJvYXJkIHNvIHRoYXQgdGhlIHBsYXllciBjYW4gbWFrZSBhdHRhY2tzLlxuZnVuY3Rpb24gbWFpblBoYXNlRXZlbnQoKSB7XG4gICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy1idXR0b24nKTtcbiAgICB1cHBlci5yZW1vdmVDaGlsZChheGlzQnV0dG9uKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1kZXNjcmlwdGlvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBUaWxlIHRvIFN0cmlrZSc7XG5cbiAgICBjb25zdCBncmlkUGxheWVyVHdvID0gZGlzcGxheUVuZW15Qm9hcmQodHdvKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyVHdvKTtcblxuICAgIGNvbnN0IGVuZW15VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2VsbCcpO1xuICAgIGVuZW15VGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1haW5QaGFzZSk7XG4gICAgICB9KVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGUgcGxheWVyJ3MgbW92ZSB0byB0aGUgYWkncyBtb3ZlLiBJdCBhbHNvIGNoZWNrc1xuLy8gd2hlbiB0aGUgZ2FtZSBlbmRzIGFuZCBjYWxscyB0aGUgaGFuZGxlciBmb3IgdGhhdCBwaGFzZS5cbmZ1bmN0aW9uIGhhbmRsZU1haW5QaGFzZShldmVudCkge1xuICAgIC8vIERvbid0IGluY3JlbWVudCB0aGUgdHVybiBpZiB0aGUgcGxheWVyIGlzIGhpdHRpbmcgdGhlIHNhbWUgc3F1YXJlLlxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSk7XG4gICAgZWxzZSB7XG4gICAgICAgIHdhaXRGb3JQbGF5ZXJQaGFzZShldmVudCk7IC8vIHdhaXQgZm9yIHRoZSBwbGF5ZXIgdHVyblxuXG4gICAgICAgIC8vIENoZWNrIGlmIHBsYXllciBvbmUgd2lucy5cbiAgICAgICAgaWYoZ2FtZU92ZXJDaGVjayh0d28sICd0d28nKSkge1xuICAgICAgICAgICAgaGFuZGxlR2FtZU92ZXIoXCJQbGF5ZXIgT25lXCIsIG9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBSSB0dXJuIG9jY3VycyBhZnRlciB0aGUgcGxheWVyIHR1cm4uXG4gICAgICAgICAgICBhaU1haW5QaGFzZShvbmUpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwbGF5ZXIgdHdvIHdpbnMuXG4gICAgICAgICAgICBpZihnYW1lT3ZlckNoZWNrKG9uZSwgJ29uZScpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlR2FtZU92ZXIoXCJQbGF5ZXIgVHdvXCIsIHR3byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFBhc3NlcyB0aGUgQUkgcGxheWVyIG9iamVjdCwgdGhlIEFJIHRpbGUgaWQsIGFuZCB0aGUgQUkgdGlsZS4gRm9yY2VzIEFJIHRvIHdhaXQgdW50aWxcbi8vIHBsYXllciBoYXMgbWFkZSB0aGVpciBtb3ZlLlxuYXN5bmMgZnVuY3Rpb24gd2FpdEZvclBsYXllclBoYXNlKGV2ZW50KSB7XG4gICAgYXdhaXQgcGxheWVyTWFpblBoYXNlKHR3bywgZXZlbnQudGFyZ2V0LmlkLCBldmVudC50YXJnZXQpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGRpc3BsYXlzIHRoZSB3aW5uZXIgaW4gdGhlIGhlYWRlciwgZGlzcGxheXMgdGhlIHVucmV2ZWFsZWQgYWkgc2hpcHMsIHJlbW92ZXNcbi8vIHRoZSBldmVudCBsaXN0ZW5lcnMgYW5kIGRpc3BsYXlzIHRoZSByZXNldCBidXR0b24uXG5mdW5jdGlvbiBoYW5kbGVHYW1lT3Zlcih3aW5uZXIsIHdpbm5lck9iamVjdCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RoZSB3aW5uZXIgaXMgJyArIHdpbm5lciArICchJztcblxuICAgIGNvbnN0IG9jY3VwaWVkU3BhY2VzID0gd2lubmVyT2JqZWN0LmJGYWN0b3J5Lm9jY3VwaWVkU3BhY2VzO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIHRoZSBjb29yZGluYXRlcyB3aXRoIGEgc2hpcC5cbiAgICBvY2N1cGllZFNwYWNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCB0aWxlID0gXCJcIjtcbiAgICAgICAgaWYod2lubmVyID09IFwiUGxheWVyIFR3b1wiKVxuICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlJHtpdGVtfWApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aXRlbX1gKTtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdGlsZSB0byBzaG93IHRoZSBsb3NlciB0aGUgbG9jYXRpb24gb2YgdGhlIGVuZW15IHNoaXBzLlxuICAgICAgICBpZighdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8ICF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpIHx8ICF0aWxlLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXNoaXAnKSlcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXAnKTtcbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCB0aWxlLlxuICAgIGNvbnN0IGVuZW15VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2VsbCcpO1xuICAgIGVuZW15VGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1haW5QaGFzZSk7XG4gICAgICB9KVxuXG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgYWdhaW4/XCI7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEV2ZW50KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGV2ZXJ5dGhpbmcgaW4gdGhlIG1haW4gY29udGFpbmVyLCByZS1hZGRzIHRoZSB1cHBlciBjb250YWluZXJcbi8vIGFuZCB0aGUgYm9hcmQgY29udGFpbmVyLCByZS1jcmVhdGVzIHRoZSBwbGF5ZXJzIGFuZCBpbml0aWFsaXplcyB0aGVtLCBhbmQgY2FsbHMgdGhlIHN0YXJ0QnV0dG9uRXZlbnQuXG5mdW5jdGlvbiByZXNldEV2ZW50KCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjsgLy8gUmVtb3ZlIGV2ZXJ5dGhpbmcgaW4gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuXG4gICAgY29uc3QgdXBwZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1cHBlci1jb250YWluZXInKTsgLy8gUmUtY3JlYXRlIHVwcGVyQ29udGFpbmVyXG4gICAgdXBwZXIgPSB1cHBlckNvbnRhaW5lcjtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvYXJkLWNvbnRhaW5lcicpOyAvLyBSZS1jcmVhdGUgYm9hcmRDb250YWluZXJcbiAgICBib2FyZCA9IGJvYXJkQ29udGFpbmVyO1xuXG4gICAgb25lID0gY3JlYXRlUGxheWVyKCk7IC8vIFJlLWNyZWF0ZSBwbGF5ZXIgb25lIGFuZCBwbGF5ZXIgdHdvLlxuICAgIHR3byA9IGNyZWF0ZVBsYXllcigpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh1cHBlckNvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICBzdGFydEJ1dHRvbkV2ZW50KCk7IC8vIGNhbGwgdGhlIHN0YXJ0IGJ1dHRvbiBldmVudFxufSIsIi8vICdwbGF5ZXInIGlzIHRoZSBwbGF5ZXIgb2JqZWN0LlxuLy8gJ2lkZW50aWZpZXInIGlkZW50aWZpZXMgaWYgcGxheWVyIGlzICdvbmUnIG9yICd0d28nXG4vLyBXaGVuIHRoZSBjb3VudCBpcyA1IChiZWNhdXNlIHRoZXJlIGFyZSA1IHNoaXBzKSB0aGUgZ2FtZSBlbmRzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXJDaGVjayhwbGF5ZXIsIGlkZW50aWZpZXIpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllci5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hpcCA9IHBsYXllci5iRmFjdG9yeS5zaGlwc1tpXTtcbiAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcGxheWVyLmJGYWN0b3J5LmFkZFN1bmtTaGlwKHNoaXApOyAvLyBhZGQgdGhlIHNoaXAgdG8gYSBzZXQgb2Ygc3VuayBzaGlwc1xuICAgICAgICAgICAgc3Vua01vZGlmaWVyKHBsYXllciwgaWRlbnRpZmllcik7IC8vIG1vZGlmeSB0aGUgc3R5bGluZyBvZiB0aGUgc2hpcC5cbiAgICAgICAgICAgIGNvdW50Kys7IC8vIGl0ZXJhdGUgdGhlIGNvdW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoY291bnQgPT0gNSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gVGFrZXMgdGhlIHBsYXllciBhbmQgdGhlIGlkZW50aWZpZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBwbGF5ZXIgaXMgcGxheWVyIG9uZSBvciB0d28uXG4vLyBGaW5kcyB0aGUgc2V0IG9mIHN1bmsgc2hpcHMgd2l0aGluIHRoZSBwbGF5ZXIgb2JqZWN0IGFuZCBhZGRzIHRoZSBzdW5rIGNsYXNzIHRvIHRoZSB0aWxlc1xuLy8gYXQgdGhlIGNvb3JkaW5hdGVzIG9mIGVhY2ggc3VuayBzaGlwLlxuZnVuY3Rpb24gc3Vua01vZGlmaWVyKHBsYXllciwgaWRlbnRpZmllcikge1xuICAgIGNvbnN0IHN1bmtTaGlwcyA9IHBsYXllci5iRmFjdG9yeS5zdW5rU2hpcHM7XG4gICAgc3Vua1NoaXBzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gaXRlbS5jb29yZGluYXRlcztcblxuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIGlmKGlkZW50aWZpZXIgPT0gJ29uZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlXCIgKyBjb29yZCk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXAtZmFjdG9yeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IG5ldyBBcnJheSgxMCk7XG4gICAgZ2VuZXJhdGVCb2FyZChib2FyZCk7XG4gICAgbGV0IHNoaXBzID0gbmV3IEFycmF5KCk7XG4gICAgbGV0IG9jY3VwaWVkU3BhY2VzID0gbmV3IFNldCgpO1xuICAgIGxldCBzdW5rU2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyAxMCBieSAxMCBhcnJheVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBnaXZlbiBzcGFjZSBpcyBvY2N1cGllZCBieSBhbm90aGVyIHNoaXBcbiAgICBmdW5jdGlvbiBpc09jY3VwaWVkU3BhY2UoeCwgeSkge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRTcGFjZXMuaGFzKGAke3h9JHt5fWApO1xuICAgIH1cblxuICAgIC8vIFRlc3QgZm9yIGEgc2hpcCBwbGFjZWQgb3V0IG9mIGJvdW5kcy4gRnVuY3Rpb24gcmV0dXJucyBudWxsIGlmIG91dCBvZiBib3VuZHMuXG4gICAgZnVuY3Rpb24gb3V0T2ZCb3VuZHMobGVuZ3RoLCBheGlzLCB4LCB5KSB7XG4gICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRzID0gcGFyc2VJbnQoeCkgKyBsZW5ndGg7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA+IDEwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZHMgPSBwYXJzZUludCh5KSArIGxlbmd0aDtcbiAgICAgICAgICAgIGlmKG91dE9mQm91bmRzID4gMTApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBcImxlbmd0aFwiIGlzIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXG4gICAgLy8gXCJheGlzXCIgaXMgdGhlIGF4aXMgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWQuXG4gICAgLy8gXCJ4XCIgYW5kIFwieVwiIGFyZSB0aGUgc3RhcnRpbmcgeCBhbmQgeSBjb29yZGluYXRlcyB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZC5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAobGVuZ3RoLCBheGlzLCB4LCB5KSB7XG4gICAgICAgIC8vIFRlc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYob3V0T2ZCb3VuZHMobGVuZ3RoLCBheGlzLCB4LCB5KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ091dCBvZiBib3VuZHMuJyk7XG4gICAgICAgICAgICByZXR1cm4gc2hpcHM7IC8vIHJldHVybiBzaGlwcyB3aXRob3V0IGNyZWF0aW5nIGFueXRoaW5nXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hpcFBvc2l0aW9uID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHhJbmNyZW1lbnQgPSBwYXJzZUludCh4KSArIGk7XG4gICAgICAgICAgICAgICAgLy8gVGVzdCBpZiBzcGFjZSBpcyBvY2N1cGllZC5cbiAgICAgICAgICAgICAgICBpZihpc09jY3VwaWVkU3BhY2UoeEluY3JlbWVudCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25baV0gPSBgJHt4SW5jcmVtZW50fSR7eX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgICAgIGxldCB5SW5jcmVtZW50ID0gcGFyc2VJbnQoeSkgKyBpO1xuICAgICAgICAgICAgICAgIGlmKGlzT2NjdXBpZWRTcGFjZSh4LCB5SW5jcmVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBQb3NpdGlvbltpXSA9IGAke3h9JHt5SW5jcmVtZW50fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIG5ldyBzaGlwJ3MgY29vcmRpbmF0ZXMgdG8gdGhlIG9jY3VwaWVkU3BhY2VzIFNldFxuICAgICAgICBzaGlwUG9zaXRpb24uZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIG9jY3VwaWVkU3BhY2VzLmFkZChjb29yZCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoLCBzaGlwUG9zaXRpb24pOyAvLyBDcmVhdGUgdGhlIHNoaXAuXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7IC8vIFB1c2ggdGhlIG5ldyBzaGlwIG9udG8gdGhlIHNoaXBzIGFycmF5LlxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgc2hpcHMgYXJyYXkuXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICAvLyBSZWNlaXZlcyBhbiB4LHkgY29vcmRpbmF0ZSBmb3IgYXR0YWNrLlxuICAgIC8vIERldGVybWluZXMgaWYgdGhlIGJvYXJkIGNvb3JkaW5hdGUgaGFzIGEgbWlzcy9oaXQgaW4gaXQgYWxyZWFkeS5cbiAgICAvLyBOZXN0ZWQgbG9vcHMgdG8gZ28gdGhyb3VnaCBlYWNoIHNoaXAncyBjb29yZGluYXRlcy4gXG4gICAgLy8gTyhuXm0pIHRpbWUgY29tcGxleGl0eS4gV2hlcmUgbiBpcyB0aGUgbnVtYmVyIG9mIHNoaXBzIGFuZCBtIGlzIHRoZSB4eSBvZiBlYWNoIHNoaXAuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGxldCB4eSA9IHgudG9TdHJpbmcoKSArIHkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYoYm9hcmRbeF1beV0pIHJldHVybiBmYWxzZTsgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm9hcmRbeF1beV0gPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBzaGlwc1tpXS5jb29yZGluYXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZihzaGlwc1tpXS5jb29yZGluYXRlc1tqXSA9PT0geHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJoaXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdW5rU2hpcChzaGlwKSB7XG4gICAgICAgIHN1bmtTaGlwcy5hZGQoc2hpcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBvY2N1cGllZFNwYWNlcyxcbiAgICAgICAgc3Vua1NoaXBzLFxuICAgICAgICBhZGRTdW5rU2hpcCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgIH07XG59IiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHBsYWNlUGhhc2UsIGRlZmF1bHRQbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZTIgfSBmcm9tIFwiLi9wbGFjZS1waGFzZVwiO1xuaW1wb3J0IHsgbWFpblBoYXNlLCBkZWZhdWx0TWFpblBoYXNlIH0gZnJvbSBcIi4vbWFpbi1waGFzZVwiO1xuaW1wb3J0IHsgc2V0dXBET00gfSBmcm9tIFwiLi9kb20tYW5kLWV2ZW50LWxpc3RlbmVyc1wiO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdHdvIHBsYXllciBvYmplY3RzIGFuZCBwYXNzZXMgdGhlbSBpbnRvIHRoZSBzZXR1cERPTSBmdW5jdGlvbi5cbi8vIExhcmdlbHkgdGhlIGFjdHVhbCBnYW1lc3RhdGUgaXMgY29udHJvbGxlZCBieSBkb20tYW5kLWV2ZW50LWxpc3RlbmVycy5qcywgYnV0IGlmIHlvdSB3YW50IHRvIHRlc3Rcbi8vIHRoZSBnYW1lIGxvZ2ljIHdpdGhvdXQgdGhlIERPTSBvciBldmVudCBsaXN0ZW5lcnMsIHlvdSBjYW4gZG8gdGhhdCBoZXJlIHVzaW5nIHRoZSBkZWZhdWx0IGZ1bmN0aW9uc1xuLy8gdGhhdCBoYXZlIGJlZW4gY29tbWVudGVkIG91dC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVTdGF0ZShjb250ZW50KSB7XG4gICAgY29uc3QgcGxheWVyT25lID0gY3JlYXRlUGxheWVyKCk7IC8vIFR3byBzZXBhcmF0ZSBib2FyZHMuXG4gICAgY29uc3QgcGxheWVyVHdvID0gY3JlYXRlUGxheWVyKCk7XG5cbiAgICBzZXR1cERPTShjb250ZW50LCBwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgICAvLyBGdW5jdGlvbnMgdG8gaGVscCB0ZXN0IHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIHdvcmtzIG91dHNpZGUgb2YgdGhlIERPTSBhbmQgYmVmb3JlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAvLyBkZWZhdWx0UGxhY2VQaGFzZShwbGF5ZXJPbmUpO1xuICAgIC8vIGRlZmF1bHRQbGFjZVBoYXNlMihwbGF5ZXJUd28pO1xuICAgIC8vIGRlZmF1bHRNYWluUGhhc2UocGxheWVyT25lLCBwbGF5ZXJUd28pO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdhbWVTdGF0ZSBmcm9tICcuL2dhbWVzdGF0ZSc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGVudCcpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuZ2FtZVN0YXRlKGNvbnRlbnQpOyIsImltcG9ydCBnYW1lT3ZlckNoZWNrIGZyb20gXCIuL2dhbWUtb3Zlci1jaGVja1wiO1xuXG4vLyBGdW5jdGlvbiBhdHRhY2tzIHRoZSBvcHBvbmVudCdzIHRpbGUuIEEgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIHRpbGUgdG8gaW5kaWNhdGUgYSBoaXQgb3IgbWlzc1xuLy8gdmlhIENTUy4gVGhlIEFJIHRpbGUgaWQgaXMgZGlmZmVyZW50IGZyb20gdGhlIHBsYXllcidzLiBJdCBpcyBpbiB0aGUgZm9ybWF0OiBlMDAsIGUwMSAuLi4gZTk4LCBlOTlcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNYWluUGhhc2Uob3Bwb25lbnQsIGlkLCB0aWxlKSB7XG4gICAgLy8gV3JhcCB0aGUgY29kZSBpbiBhIHByb21pc2UsIHNvIHRoZSBhaU1haW5QaGFzZSB3YWl0cyBmb3IgdGhlIHBsYXllck1haW5QaGFzZS5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8gZ2V0IGNvb3JkaW5hdGVzIGZyb20gdGlsZSBpZFxuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGlkLmNoYXJBdCgyKSk7XG5cbiAgICAgICAgb3Bwb25lbnQuYXR0YWNrZWQoeCwgeSk7IC8vIGF0dGFjayB0aGUgZW5lbXkgcGxheWVyXG5cbiAgICAgICAgaWYob3Bwb25lbnQuYkZhY3RvcnkuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7IC8vIGlmIG1pc3MsIGFkZCBjbGFzcyAnbWlzcycgZm9yIHN0eWxpbmdcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7IC8vIGlmIGhpdCwgYWRkIGNsYXNzICdoaXQnIGZvciBzdHlsaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xufVxuXG4vLyBGdW5jdGlvbiBhdHRhY2tzIHRoZSBvcHBvbmVudCdzIHRpbGUuIEEgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIHRpbGUgdG8gaW5kaWNhdGUgYSBoaXQgb3IgbWlzcy5cbmV4cG9ydCBmdW5jdGlvbiBhaU1haW5QaGFzZShvcHBvbmVudCkge1xuICAgIGxldCB4OyAvLyB0aGUgeCB2YWx1ZSB0byBhdHRhY2tcbiAgICBsZXQgeTsgLy8gdGhlIHkgdmFsdWUgdG8gYXR0YWNrXG4gICAgbGV0IHRpbGU7IC8vIHRoZSB0YXJnZXQgdGlsZVxuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBUaGUgYm9vbGVhbiB0byBpbmRpY2F0ZSBpZiBhbiBhZGphY2VudCB0aWxlIGhhcyBiZWVuIGZvdW5kLlxuXG4gICAgLy8gR2V0IGFsbCB0aWxlcyB3aXRoIHRoZSAnaGl0JyBjbGFzcyB0byBpbmRpY2F0ZSB0aGUgc2hpcCBoYXMgYmVlbiBoaXQuXG4gICAgbGV0IGhpdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGl0Jyk7XG5cbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggaGl0IGFuZCBhdHRlbXB0IHRvIGZpbmQgYW4gYXZhaWxhYmxlIHRhcmdldC5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaGl0ID0gaGl0c1tpXTtcbiAgICAgICAgaWYoaGl0LmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpIHx8IGhpdC5jbGFzc0xpc3QuY29udGFpbnMoJ2VuZW15LWNlbGwnKSkge1xuICAgICAgICAgIC8vIERvIG5vdGhpbmcgYW5kIG1vdmUgdG8gdGhlIG5leHQgaGl0LCBpZiB0aGUgY2xhc3MgaXMgYSBzdW5rZW4gc2hpcCBvciBhbiBhaSBzaGlwLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGhpdElkID0gaGl0LmlkO1xuICAgICAgICAgIGxldCBheGlzQWRqYWNlbnQgPSBhaUNvbmZpcm1BZGphY2VudChoaXRJZCk7IC8vIGNvbmZpcm1zIGFuIGFkamFjZW50IGhpdCBhbmQgdGhlIGF4aXNcbiAgICAgICAgICBpZihheGlzQWRqYWNlbnQpIHtcbiAgICAgICAgICAgIGlmKGF4aXNBZGphY2VudCA9PSAneCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNBZGphY2VudCA9PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaUZpbmRzQWRqYWNlbnRUaWxlKGhpdElkKTsgLy8gZmluZCBhbiBhdmFpbGFibGUgdGFyZ2V0XG4gICAgICAgICAgICBpZihhdmFpbGFibGVUYXJnZXRJZCkge1xuICAgICAgICAgICAgICAgIHggPSBhdmFpbGFibGVUYXJnZXRJZC5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgYW4gYWRqYWNlbnQgdGlsZSB3YXMgZm91bmQsIGF0dGFjayB0aGUgdGFyZ2V0LiBPdGhlcndpc2UgdGhlIEFJIGZpbmRzIGEgcmFuZG9tIHRpbGUuXG4gICAgaWYoZm91bmQpXG4gICAgICAgIG9wcG9uZW50LmF0dGFja2VkKHgsIHkpOyAvLyB0aGUgZW5lbXkgcGxheWVyIG9iamVjdCBjYWxscyBpdHMgYXR0YWNrZWQgZnVuY3Rpb25cbiAgICBlbHNlIHtcbiAgICAgICAgdGlsZSA9IGFpRmluZHNSYW5kb20oKTtcbiAgICAgICAgeCA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDApKTtcbiAgICAgICAgeSA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgb3Bwb25lbnQuYXR0YWNrZWQoeCwgeSk7XG4gICAgfVxuICAgICAgXG4gICAgaWYob3Bwb25lbnQuYkZhY3RvcnkuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG4gICAgICAgIFxuICAgIGVsc2Uge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH1cbn1cblxuLy8gVGhlIGZ1bmN0aW9uIHRoYXQgY29uZmlybXMgdHdvIGFkamFjZW50IGhpdHMgZm9yIHRoZSBBSS5cbmZ1bmN0aW9uIGFpQ29uZmlybUFkamFjZW50KGlkKSB7XG4gICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMCkpOyAvLyB0aGUgcHJldmlvdXMgeCB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8gdGhlIHByZXZpb3VzIHkgdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgYXJyYXkgPSBbeCArIDEsIHggLSAxLCB5ICsgMSwgeSAtIDFdOyAvLyB0aGUgYWRqYWNlbnQgdGlsZSB2YWx1ZXNcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gaWYgdGhlIG5leHQgdGFyZ2V0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGF4aXMgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBheGlzO1xufVxuXG4vLyBPbmNlIHR3byBhZGphY2VudCBoaXRzIGFyZSBjb25maXJtZWQsIHRoZSBhaSB3aWxsIHRhcmdldCBhZGphY2VudCB0aWxlcyBvbiB0aGUgYXhpcy5cbmZ1bmN0aW9uIGFpUGF0aGluZyhpZCwgYXhpcykge1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8gdGhlIHByZXZpb3VzIHggdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgeSA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIHRoZSBwcmV2aW91cyB5IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIGlmIHRoZSBuZXh0IHRhcmdldCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB0YXJnZXRJZCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuICAgIFxuICAgIGlmKGF4aXMgPT0gJ3gnKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCArIDIsIHggKyAzLCB4ICsgNCwgeCArIDUsIFxuICAgICAgICB4IC0gMSwgeCAtIDIsIHggLSAzLCB4IC0gNCwgeCAtIDVdOyAvLyB0aGUgcG90ZW50aWFsIGFkamFjZW50IGF4aXMgdmFsdWVzXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aC8yOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBhIG1pc3MgbWFya3MgdGhlIGVuZCBvZiBvbmUgc2lkZSBvZiB0aGUgYXhpc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYSBtaXNzIG1hcmtzIHRoZSBlbmQgb2Ygb25lIHNpZGUgb2YgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXJyYXkgPSBbeSArIDEsIHkgKyAyLCB5ICsgMywgeSArIDQsIHkgKyA1LFxuICAgICAgICB5IC0gMSwgeSAtIDIsIHkgLSAzLCB5IC0gNCwgeSAtIDVdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGgvMjsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJZDtcbn1cblxuLy8gVGhlIGxvZ2ljIGZvciB0aGUgQUkgdG8gZmluZCBhIHRpbGUgd2hlcmUgdGhlIHNwYWNlIGhhcyBub3QgYmVlbiB0YWtlbiBvciBvdXQgb2YgYm91bmRzLlxuLy8gUmV0dXJucyB0aGUgaWQgb2YgdGhlIGZpcnN0IGZvdW5kIHRhcmdldC5cbmZ1bmN0aW9uIGFpRmluZHNBZGphY2VudFRpbGUoaWQpIHtcbiAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgwKSk7IC8vIHRoZSBwcmV2aW91cyB4IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyB0aGUgcHJldmlvdXMgeSB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgdGFyZ2V0SWQgPSBudWxsOyAvLyB0aGUgbmV3IHRhcmdldCBpZCB0byByZXR1cm5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKGFycmF5W2ldIDwgMCB8fCBhcnJheVtpXSA+IDkpO1xuICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthcnJheVtpXX0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldElkO1xufVxuXG4vLyBBSSBzZWxlY3RzIGEgcmFuZG9tIHNxdWFyZSBpbiB0aGUgZ3JpZC5cbmZ1bmN0aW9uIGFpRmluZHNSYW5kb20oKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IC8vIGdldCByYW5kb20geCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcblxuICAgICAgICBpZighdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSAmJiAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAvLyBGb3IgMTAgYXR0ZW1wdHMsIHRoZSBBSSB3aWxsIGF0dGVtcHQgdG8gZmluZCBhIHRpbGUgdGhhdCBoYXMgdHdvIGVtcHR5XG4gICAgICAgICAgICAvLyBhZGphY2VudCB0aWxlcyBiZXNpZGUgdGhlIHJhbmRvbSBvbmUgc2VsZWN0ZWQuIElmIGl0IGlzIHVuYWJsZSB0byBmaW5kIG9uZSB3aXRoaW5cbiAgICAgICAgICAgIC8vIDEwIGF0dGVtcHRzLCBpdCB3aWxsIGp1c3QgcGFzcyB0aHJvdWdoIHRoaXMgY2hlY2suXG4gICAgICAgICAgICBpZihhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHx8IGNvdW50ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEF0dGVtcHQ6ICR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQUkgcHJpb3JpdGl6ZXMgc3F1YXJlcyB0aGF0IGhhdmUgdHdvIGVtcHR5IHRpbGVzIGFkamFjZW50IHRvIHRoZW0uXG5mdW5jdGlvbiBhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHtcbiAgICBsZXQgaWQgPSB0aWxlLmlkO1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8geCB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8geSB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgY291bnQgPSAwOyAvLyBUaGUgY291bnQgdG8gZmluZCB0d28gZW1wdHkgYWRqYWNlbnQgdGlsZXMuXG4gICAgbGV0IHRhcmdldCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRpbGUgaGFzIGFuIG9wZW4gc3BhY2UsIGl0ZXJhdGUgdGhlIGNvdW50ZXIuXG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBjb3VudGVyIGlzIDIsIHRoZSB0aWxlIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaSA9PSAyKSBjb3VudCA9IDA7IC8vIHJlc2V0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7XG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcblxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgd2FzIGZvdW5kLCB0YXJnZXQgd2lsbCBubyBsb25nZXIgYmUgbnVsbC5cbiAgICBpZihmb3VuZCkge1xuICAgICAgICB0YXJnZXQgPSB0aWxlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIFxufVxuXG4vLyBUbyBoZWxwIHRlc3QgdGhlIGdhbWUgbG9naWMgd2l0aG91dCB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNYWluUGhhc2Uob25lLCB0d28pIHtcbiAgICB0d28uYXR0YWNrZWQoMCwgMCk7IC8vIHBhdHJvbFxuICAgIHR3by5hdHRhY2tlZCgxLCAwKTtcblxuICAgIHR3by5hdHRhY2tlZCgxLCAxKTsgLy8gc3ViXG4gICAgdHdvLmF0dGFja2VkKDIsIDEpO1xuICAgIHR3by5hdHRhY2tlZCgzLCAxKTtcblxuICAgIHR3by5hdHRhY2tlZCgyLCAyKTsgLy8gZGVzdHJveWVyXG4gICAgdHdvLmF0dGFja2VkKDMsIDIpO1xuICAgIHR3by5hdHRhY2tlZCg0LCAyKTtcblxuICAgIHR3by5hdHRhY2tlZCgzLCAzKTsgLy8gYmF0dGxlc2hpcFxuICAgIHR3by5hdHRhY2tlZCg0LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNSwgMyk7XG4gICAgdHdvLmF0dGFja2VkKDYsIDMpO1xuXG4gICAgdHdvLmF0dGFja2VkKDQsIDQpOyAvLyBjYXJyaWVyXG4gICAgdHdvLmF0dGFja2VkKDUsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDYsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDcsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDgsIDQpO1xuXG4gICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGdhbWUgaXMgb3Zlci4gUGxheWVyIHR3byB3aW5zLlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihnYW1lT3ZlckNoZWNrKHR3bykpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgb25lIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBvbmUgd29uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxufSIsIi8vIFRha2UgdGhlIHBsYXllcidzIGJvYXJkLCB0aGUgdGlsZSBpZCwgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGhhc2Uob25lLCBpZCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgbGV0IHNoaXBOdW1iZXIgPSBvbmUuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBnZXQgdGhlIG51bWJlciBvZiBzaGlwc1xuICAgIGxldCB4ID0gaWQuY2hhckF0KDApOyAvLyBnZXQgeCBmcm9tIHRoZSB0aWxlIGlkXG4gICAgbGV0IHkgPSBpZC5jaGFyQXQoMSk7IC8vIGdldCB5IGZyb20gdGhlIHRpbGUgaWRcbiAgICBvbmUucGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KTsgLy8gcGxhY2UgdGhlIHNoaXBcbiAgICBsZXQgbmV3U2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuXG4gICAgLy8gSWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyLCB0aGUgc2hpcCB3YXMgc3VjY2Vzc2Z1bGx5IHBsYWNlZCBhbmRcbiAgICAvLyBjYW4gYmUgY29sb3JlZC5cbiAgICBpZihuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcilcbiAgICAgICAgY29sb3JTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBzdGF0ZSB3aXRob3V0IHRoZSB1c2Ugb2YgdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZShvbmUpIHtcbiAgICBvbmUucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgb25lLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgb25lLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgb25lLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgb25lLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZTIodHdvKSB7XG4gICAgdHdvLnBsYWNlKDIsICd4JywgMCwgMCk7IC8vIHNoaXAgb2YgbGVuZ3RoIDIgb24gdGhlICd4JyBheGlzIGF0IGNvb3JkaW5hdGU6IDAsMFxuICAgIHR3by5wbGFjZSgzLCAneCcsIDEsIDEpO1xuICAgIHR3by5wbGFjZSgzLCAneCcsIDIsIDIpO1xuICAgIHR3by5wbGFjZSg0LCAneCcsIDMsIDMpO1xuICAgIHR3by5wbGFjZSg1LCAneCcsIDQsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWlQbGFjZVBoYXNlKHR3bykge1xuICBcbiAgICAvLyBBcnJheSBvZiBzaGlwIGxlbmd0aHMgdG8gcmFuZG9tbHkgY2hvb3NlIGZyb21cbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzaGlwIGxlbmd0aHMgYW5kIHBsYWNlIGVhY2ggc2hpcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGlwTnVtYmVyID0gdHdvLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gR2V0IHRoZSBudW1iZXIgb2Ygc2hpcHMgaW4gdGhlIHBsYXllciBvYmplY3RcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW2ldO1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAneCcgOiAneSc7XG4gIFxuXG4gICAgICAvLyBUaGlzIGxvb3AgZW5zdXJlcyBhIHNoaXAgaXMgYmVpbmcgcGxhY2VkIG9uIHRoZSBib2FyZC5cbiAgICAgIC8vIElmIHRoZSBwbGFjZSBmdW5jdGlvbiBpcyBmZWQgY29vcmRpbmF0ZXMgb2YgYW4gb2NjdXBpZWQgc3BhY2UsIGEgc2hpcCB3aWxsIG5vdCBiZSBwbGFjZWQuXG4gICAgICAvLyBUaGlzIGxvb3Agd2lsbCByZXBlYXQgdW50aWwgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgaGFzIGluY3JlYXNlZC5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgYXhpcywgdGhlIHBsYWNlbWVudCBvZiB0aGUgc2hpcCdzIHN0YXJ0aW5nIGNvb3JkaW5hdGUgd2lsbCB2YXJ5XG4gICAgICAgIC8vIGJ5IHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgYmVpbmcgcGxhY2VkLlxuICAgICAgICBpZihheGlzID09ICd4Jykge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHR3by5wbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpO1xuICBcbiAgICAgICAgbGV0IG5ld1NoaXBOdW1iZXIgPSB0d28uYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBHZXQgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHNcbiAgXG4gICAgICAgIGlmIChuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcikge1xuICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgaWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLy8gbGVuZ3RoLCBheGlzLCB4IHN0YXJ0aW5nIGNvb3JkaW5hdGUsIHkgc3RhcnRpbmcgY29vcmRpbmF0ZVxuLy8gYWRkaW5nIGEgY2xhc3MgdG8gc3R5bGUgdGhlIHRpbGVzIHdpdGggc2hpcHNcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNoaXAobCwgYSwgeCwgeSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoYSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4SW5jcmVtZW50fSR7eX1gKTtcbiAgICAgICAgICAgIGNvbG9yQ2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXNoaXBcIik7XG4gICAgICAgIH0gZWxzZSBpZihhID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCB5SW5jcmVtZW50ID0gcGFyc2VJbnQoeSkgKyBpO1xuICAgICAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5SW5jcmVtZW50fWApO1xuICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQtZmFjdG9yeSc7XG5cbi8vIEVhY2ggcGxheWVyIGhhcyB0aGVpciBvd24gZ2FtZWJvYXJkLCBhIGZ1bmN0aW9uIHRvIHBsYWNlIGEgc2hpcCwgYSBmdW5jdGlvbiB0byBhdHRhY2ssIGFuZCBhblxuLy8gYXJyYXkgY29udGFpbmluZyB0aGVpciBzaGlwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgIGNvbnN0IGJGYWN0b3J5ID0gY3JlYXRlR2FtZUJvYXJkKCk7IC8vIFRoZSBib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4gICBmdW5jdGlvbiBwbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gICB9XG4gICBcbiAgIGZ1bmN0aW9uIGF0dGFja2VkKHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgIH1cblxuICAgcmV0dXJuIHtcbiAgICBiRmFjdG9yeSwgXG4gICAgcGxhY2UsXG4gICAgYXR0YWNrZWRcbiAgIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoLCBhcnJheSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXJyYXk7XG4gICAgbGV0IGhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTsgLy8gRmlsbCB0aGUgaGl0cyBhcnJheSB3aXRoIGZhbHNlIHZhbHVlcy5cbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICBcbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIG5leHQgYXZhaWxhYmxlIGhpdCB0aGF0IGlzIGZhbHNlIGFuZCBtYWtlIGl0IHRydWUgYW5kIHRoZW4gYnJlYWsgdGhlIGxvb3AuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoaGl0c1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGhpdHNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBldmVyeSBlbGVtZW50IGluIHRoZSBoaXRzIGFycmF5IGlzIHRydWUuXG4gICAgICAgIGlmIChoaXRzLmV2ZXJ5KGhpdCA9PiBoaXQpKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0SGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzLnNsaWNlKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBoaXQsXG4gICAgICBnZXRMZW5ndGgsXG4gICAgICBnZXRIaXRzLFxuICAgICAgaXNTdW5rLFxuICAgICAgY29vcmRpbmF0ZXNcbiAgICB9O1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9