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
          console.log(axisAdjacent); // PROBLEM IS THAT AXISADJACENT RETURNS THE AXIS EVEN YOU HAVE MISSES ON BOTH SIDES AND THE SHIP ISN'T SUNK
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLHVEQUF1RCxXQUFXLEVBQUUsRUFBRTtBQUN0RTtBQUNBLFVBQVU7QUFDVjtBQUNBLHVEQUF1RCxFQUFFLEVBQUUsV0FBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckZzRDs7QUFFdEQ7QUFDQTtBQUNlO0FBQ2Ysb0JBQW9CLG1FQUFlLElBQUk7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1hbmQtZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1vdmVyLWNoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4tcGhhc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZS1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtZmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5udW1iZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5sZXR0ZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIH1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5udW1iZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5sZXR0ZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gIH1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTsgLy8gVGhlIHRhYmxlIHRvIGhvbGQgdGhlIGJvYXJkLlxuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJGYWN0b3J5LmJvYXJkOyAvLyBUaGUgYm9hcmQgYXJyYXkuXG5cbiAgICBjb25zdCBudW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7IC8vIFRvIGhvbGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBudW1Sb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBBZGQgYW4gZW1wdHkgY2VsbCB0byB0aGUgbGVmdCBvZiB0aGUgbnVtYmVycyBhbmQgYWJvdmUgdGhlIGxldHRlcnMuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG4gICAgbnVtUm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG5cbiAgICAvLyBMb29wIHRvIGFkZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBudW1iZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBudW1Sb3cuYXBwZW5kQ2hpbGQobnVtYmVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG51bVJvdyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgY29uc3QgbGV0dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItY2VsbCcpO1xuICAgICAgICBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxldHRlckNlbGwpO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBqLnRvU3RyaW5nKCkgKyBpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb29yZCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVuZW15Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7IC8vIFRoZSB0YWJsZSB0byBob2xkIHRoZSBib2FyZC5cbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5iRmFjdG9yeS5ib2FyZDsgLy8gVGhlIGJvYXJkIGFycmF5LlxuXG4gICAgY29uc3QgbnVtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpOyAvLyBUbyBob2xkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgbnVtUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgLy8gQWRkIGFuIGVtcHR5IGNlbGwgdG8gdGhlIGxlZnQgb2YgdGhlIG51bWJlcnMgYW5kIGFib3ZlIHRoZSBsZXR0ZXJzLlxuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpO1xuICAgIG51bVJvdy5hcHBlbmRDaGlsZChlbXB0eUNlbGwpO1xuXG4gICAgLy8gTG9vcCB0byBhZGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtYmVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNlbGxcIik7XG4gICAgICAgIG51bWJlckNlbGwudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgbnVtUm93LmFwcGVuZENoaWxkKG51bWJlckNlbGwpO1xuICAgIH1cbiAgICBcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChudW1Sb3cpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGxldHRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGxldHRlckNlbGwuY2xhc3NMaXN0LmFkZCgnbGV0dGVyLWNlbGwnKTtcbiAgICAgICAgbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZXR0ZXJDZWxsKTtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZW5lbXktY2VsbCcpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gXCJlXCIgKyBqLnRvU3RyaW5nKCkgKyBpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb29yZCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRhYmxlO1xufSIsImltcG9ydCB7IGRpc3BsYXlCb2FyZCwgZGlzcGxheUVuZW15Qm9hcmQgfSBmcm9tIFwiLi9kaXNwbGF5LWJvYXJkXCI7XG5pbXBvcnQgZ2FtZU92ZXJDaGVjayBmcm9tIFwiLi9nYW1lLW92ZXItY2hlY2tcIjtcbmltcG9ydCB7IHBsYXllck1haW5QaGFzZSwgYWlNYWluUGhhc2UgfSBmcm9tIFwiLi9tYWluLXBoYXNlXCI7XG5pbXBvcnQgeyBhaVBsYWNlUGhhc2UsIHBsYWNlUGhhc2UgfSBmcm9tIFwiLi9wbGFjZS1waGFzZVwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxubGV0IG9uZSA9IFwiXCI7IC8vIHBsYXllciBvbmVcbmxldCB0d28gPSBcIlwiOyAvLyBwbGF5ZXIgdHdvXG5sZXQgbWFpbiA9IFwiXCI7IC8vIG1haW4gY29udGFpbmVyIChjb250ZW50KSwganVzdCBpbiBjYXNlXG5sZXQgYm9hcmQgPSBcIlwiOyAvLyBib2FyZCBjb250YWluZXJcbmxldCB1cHBlciA9IFwiXCI7IC8vIHVwcGVyIGNvbnRhaW5lclxuXG5cbi8vIFNldHMgdXAgdGhlIHN0YXJ0IGJ1dHRvbiBhbmQgYnVpbGRzIHNvbWUgY29udGFpbmVycyBmb3IgbGF0ZXIgdXNlLlxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgb25lID0gcGxheWVyT25lO1xuICAgIHR3byA9IHBsYXllclR3bztcbiAgICBtYWluID0gY29udGVudDtcblxuICAgIGNvbnN0IHVwcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndXBwZXItY29udGFpbmVyJyk7XG4gICAgdXBwZXIgPSB1cHBlckNvbnRhaW5lcjtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRCdXR0b25FdmVudCgpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHN0YXJ0IGJ1dHRvblxuICAgICAgICB1cHBlci5yZW1vdmVDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGJvYXJkID0gYm9hcmRDb250YWluZXI7XG4gICAgdXBwZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xufVxuXG4vLyBXaGVuIHRoZSBzd2FwIGF4aXMgYnV0dG9uIGlzIGNsaWNrZWQsIGl0IGNoYW5nZXMgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAuXG5mdW5jdGlvbiBheGlzU3dhcChheGlzKSB7XG4gICAgaWYoYXhpcyA9PSAneCcpXG4gICAgICAgIHJldHVybiAneSc7XG4gICAgZWxzZSByZXR1cm4gJ3gnO1xufVxuXG4vLyBXaGVuIHRoZSBzdGFydCBidXR0b24gaXMgY2xpY2tlZC4gQWRkcyBhIGRlc2NyaXB0aW9uIG9mIHdoYXQgdG8gZG8sIGdlbmVyYXRlcyB0aGUgcGxheWVyIGJvYXJkLFxuLy8gY2FsbHMgdGhlIGZ1bmN0aW9uIHRvIHBsYWNlIHRoZSBzaGlwcy5cbmZ1bmN0aW9uIHN0YXJ0QnV0dG9uRXZlbnQoKSB7XG4gICAgLy8gRGVzY3JpcHRvclxuICAgIGxldCBwbGFjZVNoaXBzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBsYWNlU2hpcHNEZXNjcmlwdGlvbi5pZCA9ICdoZWFkZXItZGVzY3JpcHRpb24nO1xuICAgIHBsYWNlU2hpcHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiUGxhY2UgWW91ciBTaGlwc1wiO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBEaXNwbGF5IHRoZSBwbGF5ZXIncyBncmlkIHRvIHBsYWNlIHNoaXBzLlxuICAgIGNvbnN0IGdyaWRQbGF5ZXJPbmUgPSBkaXNwbGF5Qm9hcmQob25lKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyT25lKTtcblxuICAgIHBsYWNlU2hpcHNFdmVudCgpO1xufVxuXG5sZXQgYXhpcyA9ICd4JzsgLy8gZGVmYXVsdCBheGlzIGZvciBwbGFjaW5nIHNoaXBzXG5cbi8vIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZCBhbmQgY2FsbHMgcGxhY2VQaGFzZSB1bnRpbFxuLy8gYWxsIHRoZSBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLiBBbHNvIHJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIG9uY2Vcbi8vIGFsbCB0aGUgc2hpcHMgYXJlIHBsYWNlZC5cbmZ1bmN0aW9uIGhhbmRsZVBsYWNlU2hpcHMoZXZlbnQpIHtcbiAgICBsZXQgc2hpcHMgPSBvbmUuYkZhY3Rvcnkuc2hpcHM7XG4gICAgbGV0IGxlbmd0aCA9IDI7IC8vIFRoZSBmaXJzdCBzaGlwIGlzIHRoZSBwYXRyb2wgYm9hdC5cblxuICAgIGlmKHNoaXBzLmxlbmd0aCA9PSAwKVxuICAgICAgbGVuZ3RoID0gMjsgLy8gcGxhY2UgdGhlIHBhdHJvbCBib2F0XG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMSkgXG4gICAgICBsZW5ndGggPSAzOyAvLyBwbGFjZSB0aGUgc3VibWFyaW5lXG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMilcbiAgICAgIGxlbmd0aCA9IDM7IC8vIHBsYWNlIHRoZSBkZXN0cm95ZXJcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAzKVxuICAgICAgbGVuZ3RoID0gNDsgLy8gcGxhY2UgdGhlIGJhdHRsZXNoaXBcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSA0KVxuICAgICAgbGVuZ3RoID0gNTsgLy8gcGxhY2UgdGhlIGNhcnJpZXJcbiAgXG4gICAgaWYoc2hpcHMubGVuZ3RoIDwgNSlcbiAgICAgIHBsYWNlUGhhc2Uob25lLCBldmVudC50YXJnZXQuaWQsIGF4aXMsIGxlbmd0aCk7XG4gIFxuICAgIGlmKHNoaXBzLmxlbmd0aCA9PSA1KSB7XG4gICAgICBhaVBsYWNlUGhhc2UodHdvKTsgLy8gQUkgcGxhY2VzIHNoaXBzIHJhbmRvbWx5XG4gICAgICBjb25zdCBwbGF5ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGFjZVNoaXBzKTtcbiAgICAgIH0pXG4gICAgICBtYWluUGhhc2VFdmVudCgpO1xuICAgIH1cbn1cbiAgXG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyB0aGUgZXZlbnQgdG8gZWFjaCB0aWxlIHRvIHBsYWNlIHNoaXBzIGFuZCBjcmVhdGVzIGEgYnV0dG9uIChhbmQgZXZlbnQpIHRvXG4vLyBjaGFuZ2UgdGhlIGF4aXMgdGhlIHNoaXAgaXMgcGxhY2VkLlxuZnVuY3Rpb24gcGxhY2VTaGlwc0V2ZW50KCkge1xuICAgIC8vIENsaWNrIHRvIGNoYW5nZSB0aGUgYXhpcyB0aGUgcGxheWVyIHdpc2hlcyB0byBwbGFjZSBoaXMgc2hpcHMuXG4gICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBheGlzQnV0dG9uLmlkID0gJ2F4aXMtYnV0dG9uJztcbiAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2FwIEF4aXNcIjtcbiAgICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYXhpcyA9IGF4aXNTd2FwKGF4aXMpKTtcbiAgICB1cHBlci5hcHBlbmRDaGlsZChheGlzQnV0dG9uKTtcbiAgXG4gICAgLy8gR2V0IGFsbCB0aGUgdGlsZXMgYW5kIGNyZWF0ZSBhIGNsaWNrIGV2ZW50LlxuICAgIGNvbnN0IHBsYXllclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlU2hpcHMpO1xuICAgIH0pXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aGUgYXhpcyBidXR0b24gZnJvbSB0aGUgcG9zaXRpb25pbmcgcGhhc2UsIGNoYW5nZXMgdGhlIGhlYWRlciB0ZXh0LCBcbi8vIGNyZWF0ZXMgYSBuZXcgYm9hcmQgdG8gZGlzcGxheSB0aGUgb3Bwb25lbnQncyB0aWxlcywgYW5kXG4vLyBhZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgb3Bwb25lbnQncyBib2FyZCBzbyB0aGF0IHRoZSBwbGF5ZXIgY2FuIG1ha2UgYXR0YWNrcy5cbmZ1bmN0aW9uIG1haW5QaGFzZUV2ZW50KCkge1xuICAgIGxldCBheGlzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F4aXMtYnV0dG9uJyk7XG4gICAgdXBwZXIucmVtb3ZlQ2hpbGQoYXhpc0J1dHRvbik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItZGVzY3JpcHRpb24nKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQ2hvb3NlIGEgVGlsZSB0byBTdHJpa2UnO1xuXG4gICAgY29uc3QgZ3JpZFBsYXllclR3byA9IGRpc3BsYXlFbmVteUJvYXJkKHR3byk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZFBsYXllclR3byk7XG5cbiAgICBjb25zdCBlbmVteVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWNlbGwnKTtcbiAgICBlbmVteVRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNYWluUGhhc2UpO1xuICAgICAgfSlcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhlIHBsYXllcidzIG1vdmUgdG8gdGhlIGFpJ3MgbW92ZS4gSXQgYWxzbyBjaGVja3Ncbi8vIHdoZW4gdGhlIGdhbWUgZW5kcyBhbmQgY2FsbHMgdGhlIGhhbmRsZXIgZm9yIHRoYXQgcGhhc2UuXG5mdW5jdGlvbiBoYW5kbGVNYWluUGhhc2UoZXZlbnQpIHtcbiAgICAvLyBEb24ndCBpbmNyZW1lbnQgdGhlIHR1cm4gaWYgdGhlIHBsYXllciBpcyBoaXR0aW5nIHRoZSBzYW1lIHNxdWFyZS5cbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpO1xuICAgIGVsc2Uge1xuICAgICAgICB3YWl0Rm9yUGxheWVyUGhhc2UoZXZlbnQpOyAvLyB3YWl0IGZvciB0aGUgcGxheWVyIHR1cm5cblxuICAgICAgICAvLyBDaGVjayBpZiBwbGF5ZXIgb25lIHdpbnMuXG4gICAgICAgIGlmKGdhbWVPdmVyQ2hlY2sodHdvLCAndHdvJykpIHtcbiAgICAgICAgICAgIGhhbmRsZUdhbWVPdmVyKFwiUGxheWVyIE9uZVwiLCBvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQUkgdHVybiBvY2N1cnMgYWZ0ZXIgdGhlIHBsYXllciB0dXJuLlxuICAgICAgICAgICAgYWlNYWluUGhhc2Uob25lKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIHR3byB3aW5zLlxuICAgICAgICAgICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUsICdvbmUnKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUdhbWVPdmVyKFwiUGxheWVyIFR3b1wiLCB0d28pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQYXNzZXMgdGhlIEFJIHBsYXllciBvYmplY3QsIHRoZSBBSSB0aWxlIGlkLCBhbmQgdGhlIEFJIHRpbGUuIEZvcmNlcyBBSSB0byB3YWl0IHVudGlsXG4vLyBwbGF5ZXIgaGFzIG1hZGUgdGhlaXIgbW92ZS5cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JQbGF5ZXJQaGFzZShldmVudCkge1xuICAgIGF3YWl0IHBsYXllck1haW5QaGFzZSh0d28sIGV2ZW50LnRhcmdldC5pZCwgZXZlbnQudGFyZ2V0KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBkaXNwbGF5cyB0aGUgd2lubmVyIGluIHRoZSBoZWFkZXIsIGRpc3BsYXlzIHRoZSB1bnJldmVhbGVkIGFpIHNoaXBzLCByZW1vdmVzXG4vLyB0aGUgZXZlbnQgbGlzdGVuZXJzIGFuZCBkaXNwbGF5cyB0aGUgcmVzZXQgYnV0dG9uLlxuZnVuY3Rpb24gaGFuZGxlR2FtZU92ZXIod2lubmVyLCB3aW5uZXJPYmplY3QpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1kZXNjcmlwdGlvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUaGUgd2lubmVyIGlzICcgKyB3aW5uZXIgKyAnISc7XG5cbiAgICBjb25zdCBvY2N1cGllZFNwYWNlcyA9IHdpbm5lck9iamVjdC5iRmFjdG9yeS5vY2N1cGllZFNwYWNlcztcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCB0aGUgY29vcmRpbmF0ZXMgd2l0aCBhIHNoaXAuXG4gICAgb2NjdXBpZWRTcGFjZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdGlsZSA9IFwiXCI7XG4gICAgICAgIGlmKHdpbm5lciA9PSBcIlBsYXllciBUd29cIilcbiAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZSR7aXRlbX1gKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW19YCk7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIHRpbGUgdG8gc2hvdyB0aGUgbG9zZXIgdGhlIGxvY2F0aW9uIG9mIHRoZSBlbmVteSBzaGlwcy5cbiAgICAgICAgaWYoIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1zaGlwJykpXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJyk7XG4gICAgfSlcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGlsZS5cbiAgICBjb25zdCBlbmVteVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWNlbGwnKTtcbiAgICBlbmVteVRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNYWluUGhhc2UpO1xuICAgICAgfSlcblxuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluP1wiO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcblxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRFdmVudCk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBldmVyeXRoaW5nIGluIHRoZSBtYWluIGNvbnRhaW5lciwgcmUtYWRkcyB0aGUgdXBwZXIgY29udGFpbmVyXG4vLyBhbmQgdGhlIGJvYXJkIGNvbnRhaW5lciwgcmUtY3JlYXRlcyB0aGUgcGxheWVycyBhbmQgaW5pdGlhbGl6ZXMgdGhlbSwgYW5kIGNhbGxzIHRoZSBzdGFydEJ1dHRvbkV2ZW50LlxuZnVuY3Rpb24gcmVzZXRFdmVudCgpIHtcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7IC8vIFJlbW92ZSBldmVyeXRoaW5nIGluIHRoZSBjb250ZW50IGNvbnRhaW5lci5cblxuICAgIGNvbnN0IHVwcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndXBwZXItY29udGFpbmVyJyk7IC8vIFJlLWNyZWF0ZSB1cHBlckNvbnRhaW5lclxuICAgIHVwcGVyID0gdXBwZXJDb250YWluZXI7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2FyZC1jb250YWluZXInKTsgLy8gUmUtY3JlYXRlIGJvYXJkQ29udGFpbmVyXG4gICAgYm9hcmQgPSBib2FyZENvbnRhaW5lcjtcblxuICAgIG9uZSA9IGNyZWF0ZVBsYXllcigpOyAvLyBSZS1jcmVhdGUgcGxheWVyIG9uZSBhbmQgcGxheWVyIHR3by5cbiAgICB0d28gPSBjcmVhdGVQbGF5ZXIoKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuXG4gICAgc3RhcnRCdXR0b25FdmVudCgpOyAvLyBjYWxsIHRoZSBzdGFydCBidXR0b24gZXZlbnRcbn0iLCIvLyAncGxheWVyJyBpcyB0aGUgcGxheWVyIG9iamVjdC5cbi8vICdpZGVudGlmaWVyJyBpZGVudGlmaWVzIGlmIHBsYXllciBpcyAnb25lJyBvciAndHdvJ1xuLy8gV2hlbiB0aGUgY291bnQgaXMgNSAoYmVjYXVzZSB0aGVyZSBhcmUgNSBzaGlwcykgdGhlIGdhbWUgZW5kcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVPdmVyQ2hlY2socGxheWVyLCBpZGVudGlmaWVyKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXIuYkZhY3Rvcnkuc2hpcHNbaV07XG4gICAgICAgIGlmKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHBsYXllci5iRmFjdG9yeS5hZGRTdW5rU2hpcChzaGlwKTsgLy8gYWRkIHRoZSBzaGlwIHRvIGEgc2V0IG9mIHN1bmsgc2hpcHNcbiAgICAgICAgICAgIHN1bmtNb2RpZmllcihwbGF5ZXIsIGlkZW50aWZpZXIpOyAvLyBtb2RpZnkgdGhlIHN0eWxpbmcgb2YgdGhlIHNoaXAuXG4gICAgICAgICAgICBjb3VudCsrOyAvLyBpdGVyYXRlIHRoZSBjb3VudFxuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGNvdW50ID09IDUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFRha2VzIHRoZSBwbGF5ZXIgYW5kIHRoZSBpZGVudGlmaWVyIHRvIGRldGVybWluZSBpZiB0aGUgcGxheWVyIGlzIHBsYXllciBvbmUgb3IgdHdvLlxuLy8gRmluZHMgdGhlIHNldCBvZiBzdW5rIHNoaXBzIHdpdGhpbiB0aGUgcGxheWVyIG9iamVjdCBhbmQgYWRkcyB0aGUgc3VuayBjbGFzcyB0byB0aGUgdGlsZXNcbi8vIGF0IHRoZSBjb29yZGluYXRlcyBvZiBlYWNoIHN1bmsgc2hpcC5cbmZ1bmN0aW9uIHN1bmtNb2RpZmllcihwbGF5ZXIsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBwbGF5ZXIuYkZhY3Rvcnkuc3Vua1NoaXBzO1xuICAgIHN1bmtTaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGl0ZW0uY29vcmRpbmF0ZXM7XG5cbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBpZihpZGVudGlmaWVyID09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZVwiICsgY29vcmQpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwLWZhY3RvcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICAgIGdlbmVyYXRlQm9hcmQoYm9hcmQpO1xuICAgIGxldCBzaGlwcyA9IG5ldyBBcnJheSgpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgc3Vua1NoaXBzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gMTAgYnkgMTAgYXJyYXlcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZ2l2ZW4gc3BhY2UgaXMgb2NjdXBpZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgZnVuY3Rpb24gaXNPY2N1cGllZFNwYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkU3BhY2VzLmhhcyhgJHt4fSR7eX1gKTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGZvciBhIHNoaXAgcGxhY2VkIG91dCBvZiBib3VuZHMuIEZ1bmN0aW9uIHJldHVybnMgbnVsbCBpZiBvdXQgb2YgYm91bmRzLlxuICAgIGZ1bmN0aW9uIG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHgpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiAxMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmKGF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRzID0gcGFyc2VJbnQoeSkgKyBsZW5ndGg7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA+IDEwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gXCJsZW5ndGhcIiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuICAgIC8vIFwiYXhpc1wiIGlzIHRoZSBheGlzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIC8vIFwieFwiIGFuZCBcInlcIiBhcmUgdGhlIHN0YXJ0aW5nIHggYW5kIHkgY29vcmRpbmF0ZXMgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWQuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICAvLyBUZXN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBzOyAvLyByZXR1cm4gc2hpcHMgd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc3BhY2UgaXMgb2NjdXBpZWQuXG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHhJbmNyZW1lbnQsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eEluY3JlbWVudH0ke3l9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgICAgICBpZihpc09jY3VwaWVkU3BhY2UoeCwgeUluY3JlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25baV0gPSBgJHt4fSR7eUluY3JlbWVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgc2hpcCdzIGNvb3JkaW5hdGVzIHRvIHRoZSBvY2N1cGllZFNwYWNlcyBTZXRcbiAgICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlcy5hZGQoY29vcmQpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCwgc2hpcFBvc2l0aW9uKTsgLy8gQ3JlYXRlIHRoZSBzaGlwLlxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApOyAvLyBQdXNoIHRoZSBuZXcgc2hpcCBvbnRvIHRoZSBzaGlwcyBhcnJheS5cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNoaXBzIGFycmF5LlxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgLy8gUmVjZWl2ZXMgYW4geCx5IGNvb3JkaW5hdGUgZm9yIGF0dGFjay5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBib2FyZCBjb29yZGluYXRlIGhhcyBhIG1pc3MvaGl0IGluIGl0IGFscmVhZHkuXG4gICAgLy8gTmVzdGVkIGxvb3BzIHRvIGdvIHRocm91Z2ggZWFjaCBzaGlwJ3MgY29vcmRpbmF0ZXMuIFxuICAgIC8vIE8obl5tKSB0aW1lIGNvbXBsZXhpdHkuIFdoZXJlIG4gaXMgdGhlIG51bWJlciBvZiBzaGlwcyBhbmQgbSBpcyB0aGUgeHkgb2YgZWFjaCBzaGlwLlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBsZXQgeHkgPSB4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal0gPT09IHh5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3Vua1NoaXAoc2hpcCkge1xuICAgICAgICBzdW5rU2hpcHMuYWRkKHNoaXApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgb2NjdXBpZWRTcGFjZXMsXG4gICAgICAgIHN1bmtTaGlwcyxcbiAgICAgICAgYWRkU3Vua1NoaXAsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufSIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBwbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZSwgZGVmYXVsdFBsYWNlUGhhc2UyIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcbmltcG9ydCB7IG1haW5QaGFzZSwgZGVmYXVsdE1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IHNldHVwRE9NIH0gZnJvbSBcIi4vZG9tLWFuZC1ldmVudC1saXN0ZW5lcnNcIjtcblxuLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHR3byBwbGF5ZXIgb2JqZWN0cyBhbmQgcGFzc2VzIHRoZW0gaW50byB0aGUgc2V0dXBET00gZnVuY3Rpb24uXG4vLyBMYXJnZWx5IHRoZSBhY3R1YWwgZ2FtZXN0YXRlIGlzIGNvbnRyb2xsZWQgYnkgZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMsIGJ1dCBpZiB5b3Ugd2FudCB0byB0ZXN0XG4vLyB0aGUgZ2FtZSBsb2dpYyB3aXRob3V0IHRoZSBET00gb3IgZXZlbnQgbGlzdGVuZXJzLCB5b3UgY2FuIGRvIHRoYXQgaGVyZSB1c2luZyB0aGUgZGVmYXVsdCBmdW5jdGlvbnNcbi8vIHRoYXQgaGF2ZSBiZWVuIGNvbW1lbnRlZCBvdXQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lU3RhdGUoY29udGVudCkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IGNyZWF0ZVBsYXllcigpOyAvLyBUd28gc2VwYXJhdGUgYm9hcmRzLlxuICAgIGNvbnN0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpO1xuXG4gICAgc2V0dXBET00oY29udGVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgLy8gRnVuY3Rpb25zIHRvIGhlbHAgdGVzdCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyB3b3JrcyBvdXRzaWRlIG9mIHRoZSBET00gYW5kIGJlZm9yZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UocGxheWVyT25lKTtcbiAgICAvLyBkZWZhdWx0UGxhY2VQaGFzZTIocGxheWVyVHdvKTtcbiAgICAvLyBkZWZhdWx0TWFpblBoYXNlKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lU3RhdGUgZnJvbSAnLi9nYW1lc3RhdGUnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmdhbWVTdGF0ZShjb250ZW50KTsiLCJpbXBvcnQgZ2FtZU92ZXJDaGVjayBmcm9tIFwiLi9nYW1lLW92ZXItY2hlY2tcIjtcblxuLy8gRnVuY3Rpb24gYXR0YWNrcyB0aGUgb3Bwb25lbnQncyB0aWxlLiBBIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSB0aWxlIHRvIGluZGljYXRlIGEgaGl0IG9yIG1pc3Ncbi8vIHZpYSBDU1MuIFRoZSBBSSB0aWxlIGlkIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBwbGF5ZXIncy4gSXQgaXMgaW4gdGhlIGZvcm1hdDogZTAwLCBlMDEgLi4uIGU5OCwgZTk5XG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTWFpblBoYXNlKG9wcG9uZW50LCBpZCwgdGlsZSkge1xuICAgIC8vIFdyYXAgdGhlIGNvZGUgaW4gYSBwcm9taXNlLCBzbyB0aGUgYWlNYWluUGhhc2Ugd2FpdHMgZm9yIHRoZSBwbGF5ZXJNYWluUGhhc2UuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIGdldCBjb29yZGluYXRlcyBmcm9tIHRpbGUgaWRcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMikpO1xuXG4gICAgICAgIG9wcG9uZW50LmF0dGFja2VkKHgsIHkpOyAvLyBhdHRhY2sgdGhlIGVuZW15IHBsYXllclxuXG4gICAgICAgIGlmKG9wcG9uZW50LmJGYWN0b3J5LmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpOyAvLyBpZiBtaXNzLCBhZGQgY2xhc3MgJ21pc3MnIGZvciBzdHlsaW5nXG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpOyAvLyBpZiBoaXQsIGFkZCBjbGFzcyAnaGl0JyBmb3Igc3R5bGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gYXR0YWNrcyB0aGUgb3Bwb25lbnQncyB0aWxlLiBBIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSB0aWxlIHRvIGluZGljYXRlIGEgaGl0IG9yIG1pc3MuXG5leHBvcnQgZnVuY3Rpb24gYWlNYWluUGhhc2Uob3Bwb25lbnQpIHtcbiAgICBsZXQgeDsgLy8gdGhlIHggdmFsdWUgdG8gYXR0YWNrXG4gICAgbGV0IHk7IC8vIHRoZSB5IHZhbHVlIHRvIGF0dGFja1xuICAgIGxldCB0aWxlOyAvLyB0aGUgdGFyZ2V0IHRpbGVcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gVGhlIGJvb2xlYW4gdG8gaW5kaWNhdGUgaWYgYW4gYWRqYWNlbnQgdGlsZSBoYXMgYmVlbiBmb3VuZC5cblxuICAgIC8vIEdldCBhbGwgdGlsZXMgd2l0aCB0aGUgJ2hpdCcgY2xhc3MgdG8gaW5kaWNhdGUgdGhlIHNoaXAgaGFzIGJlZW4gaGl0LlxuICAgIGxldCBoaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpdCcpO1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGhpdCBhbmQgYXR0ZW1wdCB0byBmaW5kIGFuIGF2YWlsYWJsZSB0YXJnZXQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGhpdCA9IGhpdHNbaV07XG4gICAgICAgIGlmKGhpdC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKSB8fCBoaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmVteS1jZWxsJykpIHtcbiAgICAgICAgICAvLyBEbyBub3RoaW5nIGFuZCBtb3ZlIHRvIHRoZSBuZXh0IGhpdCwgaWYgdGhlIGNsYXNzIGlzIGEgc3Vua2VuIHNoaXAgb3IgYW4gYWkgc2hpcC5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBoaXRJZCA9IGhpdC5pZDtcbiAgICAgICAgICBsZXQgYXhpc0FkamFjZW50ID0gYWlDb25maXJtQWRqYWNlbnQoaGl0SWQpOyAvLyBjb25maXJtcyBhbiBhZGphY2VudCBoaXQgYW5kIHRoZSBheGlzXG4gICAgICAgICAgY29uc29sZS5sb2coYXhpc0FkamFjZW50KTsgLy8gUFJPQkxFTSBJUyBUSEFUIEFYSVNBREpBQ0VOVCBSRVRVUk5TIFRIRSBBWElTIEVWRU4gWU9VIEhBVkUgTUlTU0VTIE9OIEJPVEggU0lERVMgQU5EIFRIRSBTSElQIElTTidUIFNVTktcbiAgICAgICAgICBpZihheGlzQWRqYWNlbnQpIHtcbiAgICAgICAgICAgIGlmKGF4aXNBZGphY2VudCA9PSAneCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGF4aXNBZGphY2VudCA9PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXZhaWxhYmxlVGFyZ2V0SWQgPSBhaVBhdGhpbmcoaGl0SWQsIGF4aXNBZGphY2VudCk7XG4gICAgICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGF2YWlsYWJsZVRhcmdldElkLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGF2YWlsYWJsZVRhcmdldElkID0gYWlGaW5kc0FkamFjZW50VGlsZShoaXRJZCk7IC8vIGZpbmQgYW4gYXZhaWxhYmxlIHRhcmdldFxuICAgICAgICAgICAgaWYoYXZhaWxhYmxlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICB4ID0gYXZhaWxhYmxlVGFyZ2V0SWQuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgIHkgPSBhdmFpbGFibGVUYXJnZXRJZC5jaGFyQXQoMSk7XG4gICAgICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgYW4gYWRqYWNlbnQgdGlsZSB3YXMgZm91bmQsIGF0dGFjayB0aGUgdGFyZ2V0LiBPdGhlcndpc2UgdGhlIEFJIGZpbmRzIGEgcmFuZG9tIHRpbGUuXG4gICAgaWYoZm91bmQpXG4gICAgICAgIG9wcG9uZW50LmF0dGFja2VkKHgsIHkpOyAvLyB0aGUgZW5lbXkgcGxheWVyIG9iamVjdCBjYWxscyBpdHMgYXR0YWNrZWQgZnVuY3Rpb25cbiAgICBlbHNlIHtcbiAgICAgICAgdGlsZSA9IGFpRmluZHNSYW5kb20oKTtcbiAgICAgICAgeCA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDApKTtcbiAgICAgICAgeSA9IHBhcnNlSW50KHRpbGUuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgb3Bwb25lbnQuYXR0YWNrZWQoeCwgeSk7XG4gICAgfVxuICAgICAgXG4gICAgaWYob3Bwb25lbnQuYkZhY3RvcnkuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG4gICAgICAgIFxuICAgIGVsc2Uge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH1cbn1cblxuLy8gVGhlIGZ1bmN0aW9uIHRoYXQgY29uZmlybXMgdHdvIGFkamFjZW50IGhpdHMgZm9yIHRoZSBBSS5cbmZ1bmN0aW9uIGFpQ29uZmlybUFkamFjZW50KGlkKSB7XG4gICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMCkpOyAvLyB0aGUgcHJldmlvdXMgeCB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8gdGhlIHByZXZpb3VzIHkgdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgYXJyYXkgPSBbeCArIDEsIHggLSAxLCB5ICsgMSwgeSAtIDFdOyAvLyB0aGUgYWRqYWNlbnQgdGlsZSB2YWx1ZXNcbiAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gaWYgdGhlIG5leHQgdGFyZ2V0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGF4aXMgPSBcIlwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGF4aXMgPSAneSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBheGlzO1xufVxuXG4vLyBPbmNlIHR3byBhZGphY2VudCBoaXRzIGFyZSBjb25maXJtZWQsIHRoZSBhaSB3aWxsIHRhcmdldCBhZGphY2VudCB0aWxlcyBvbiB0aGUgYXhpcy5cbmZ1bmN0aW9uIGFpUGF0aGluZyhpZCwgYXhpcykge1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8gdGhlIHByZXZpb3VzIHggdmFsdWUgd2hlcmUgYSBoaXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgeSA9IHBhcnNlSW50KGlkLmNoYXJBdCgxKSk7IC8vIHRoZSBwcmV2aW91cyB5IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIGlmIHRoZSBuZXh0IHRhcmdldCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCB0YXJnZXRJZCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuICAgIFxuICAgIGlmKGF4aXMgPT0gJ3gnKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCArIDIsIHggKyAzLCB4ICsgNCwgeCArIDUsIFxuICAgICAgICB4IC0gMSwgeCAtIDIsIHggLSAzLCB4IC0gNCwgeCAtIDVdOyAvLyB0aGUgcG90ZW50aWFsIGFkamFjZW50IGF4aXMgdmFsdWVzXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aC8yOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgICAgICBpZihhcnJheVtpXSA8IDAgfHwgYXJyYXlbaV0gPiA5KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXJyYXlbaV19JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcbiAgICAgICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBhIG1pc3MgbWFya3MgdGhlIGVuZCBvZiBvbmUgc2lkZSBvZiB0aGUgYXhpc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYSBtaXNzIG1hcmtzIHRoZSBlbmQgb2Ygb25lIHNpZGUgb2YgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYXJyYXkgPSBbeSArIDEsIHkgKyAyLCB5ICsgMywgeSArIDQsIHkgKyA1LFxuICAgICAgICB5IC0gMSwgeSAtIDIsIHkgLSAzLCB5IC0gNCwgeSAtIDVdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGgvMjsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSBhcnJheS5sZW5ndGgvMjsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgICAgICAvLyBEaXNjcmltaW5hdGUgYWdhaW5zdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIGEgbWlzcyBtYXJrcyB0aGUgZW5kIG9mIG9uZSBzaWRlIG9mIHRoZSBheGlzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSB0aWxlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRJZDtcbn1cblxuLy8gVGhlIGxvZ2ljIGZvciB0aGUgQUkgdG8gZmluZCBhIHRpbGUgd2hlcmUgdGhlIHNwYWNlIGhhcyBub3QgYmVlbiB0YWtlbiBvciBvdXQgb2YgYm91bmRzLlxuLy8gUmV0dXJucyB0aGUgaWQgb2YgdGhlIGZpcnN0IGZvdW5kIHRhcmdldC5cbmZ1bmN0aW9uIGFpRmluZHNBZGphY2VudFRpbGUoaWQpIHtcbiAgICBsZXQgeCA9IHBhcnNlSW50KGlkLmNoYXJBdCgwKSk7IC8vIHRoZSBwcmV2aW91cyB4IHZhbHVlIHdoZXJlIGEgaGl0IGhhcyBiZWVuIGZvdW5kXG4gICAgbGV0IHkgPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyB0aGUgcHJldmlvdXMgeSB2YWx1ZSB3aGVyZSBhIGhpdCBoYXMgYmVlbiBmb3VuZFxuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgdGFyZ2V0SWQgPSBudWxsOyAvLyB0aGUgbmV3IHRhcmdldCBpZCB0byByZXR1cm5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihmb3VuZCkgYnJlYWs7XG4gICAgICAgIC8vIERpc2NyaW1pbmF0ZSBhZ2FpbnN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKGFycmF5W2ldIDwgMCB8fCBhcnJheVtpXSA+IDkpO1xuICAgICAgICAvLyBTZWFyY2ggdGhlIGFkamFjZW50IHRpbGVzIG9uIHRoZSB4YXhpcy4gRWxzZSB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHlheGlzLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthcnJheVtpXX0ke3l9YCk7IC8vIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHRpbGUuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHthcnJheVtpXX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCB0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGlsZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldElkO1xufVxuXG4vLyBBSSBzZWxlY3RzIGEgcmFuZG9tIHNxdWFyZSBpbiB0aGUgZ3JpZC5cbmZ1bmN0aW9uIGFpRmluZHNSYW5kb20oKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IC8vIGdldCByYW5kb20geCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5fWApOyAvLyBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHRpbGVcblxuICAgICAgICBpZighdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSAmJiAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAvLyBGb3IgMTAgYXR0ZW1wdHMsIHRoZSBBSSB3aWxsIGF0dGVtcHQgdG8gZmluZCBhIHRpbGUgdGhhdCBoYXMgdHdvIGVtcHR5XG4gICAgICAgICAgICAvLyBhZGphY2VudCB0aWxlcyBiZXNpZGUgdGhlIHJhbmRvbSBvbmUgc2VsZWN0ZWQuIElmIGl0IGlzIHVuYWJsZSB0byBmaW5kIG9uZSB3aXRoaW5cbiAgICAgICAgICAgIC8vIDEwIGF0dGVtcHRzLCBpdCB3aWxsIGp1c3QgcGFzcyB0aHJvdWdoIHRoaXMgY2hlY2suXG4gICAgICAgICAgICBpZihhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHx8IGNvdW50ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEF0dGVtcHQ6ICR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQUkgcHJpb3JpdGl6ZXMgc3F1YXJlcyB0aGF0IGhhdmUgdHdvIGVtcHR5IHRpbGVzIGFkamFjZW50IHRvIHRoZW0uXG5mdW5jdGlvbiBhaVJhbmRvbVByaW9yaXR5KHRpbGUpIHtcbiAgICBsZXQgaWQgPSB0aWxlLmlkO1xuICAgIGxldCB4ID0gcGFyc2VJbnQoaWQuY2hhckF0KDApKTsgLy8geCB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDEpKTsgLy8geSB2YWx1ZSBvZiB0aGUgdGlsZSB0byBjaGVja1xuICAgIGxldCBhcnJheSA9IFt4ICsgMSwgeCAtIDEsIHkgKyAxLCB5IC0gMV07IC8vIHRoZSBhZGphY2VudCB0aWxlIHZhbHVlc1xuICAgIGxldCBmb3VuZCA9IGZhbHNlOyAvLyBpZiB0aGUgbmV4dCB0YXJnZXQgaGFzIGJlZW4gZm91bmRcbiAgICBsZXQgY291bnQgPSAwOyAvLyBUaGUgY291bnQgdG8gZmluZCB0d28gZW1wdHkgYWRqYWNlbnQgdGlsZXMuXG4gICAgbGV0IHRhcmdldCA9IG51bGw7IC8vIHRoZSBuZXcgdGFyZ2V0IGlkIHRvIHJldHVyblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGZvdW5kKSBicmVhaztcbiAgICAgICAgLy8gRGlzY3JpbWluYXRlIGFnYWluc3Qgb3V0IG9mIGJvdW5kcy5cbiAgICAgICAgaWYoYXJyYXlbaV0gPCAwIHx8IGFycmF5W2ldID4gOSk7XG4gICAgICAgIC8vIFNlYXJjaCB0aGUgYWRqYWNlbnQgdGlsZXMgb24gdGhlIHhheGlzLiBFbHNlIHRoZSBhZGphY2VudCB0aWxlcyBvbiB0aGUgeWF4aXMuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FycmF5W2ldfSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRpbGUgaGFzIGFuIG9wZW4gc3BhY2UsIGl0ZXJhdGUgdGhlIGNvdW50ZXIuXG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBjb3VudGVyIGlzIDIsIHRoZSB0aWxlIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaSA9PSAyKSBjb3VudCA9IDA7IC8vIHJlc2V0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld1RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7YXJyYXlbaV19YCk7XG4gICAgICAgICAgICAgICAgaWYobmV3VGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCBuZXdUaWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpO1xuICAgICAgICAgICAgICAgIGVsc2UgY291bnQrKztcblxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB0YXJnZXQgd2FzIGZvdW5kLCB0YXJnZXQgd2lsbCBubyBsb25nZXIgYmUgbnVsbC5cbiAgICBpZihmb3VuZCkge1xuICAgICAgICB0YXJnZXQgPSB0aWxlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIFxufVxuXG4vLyBUbyBoZWxwIHRlc3QgdGhlIGdhbWUgbG9naWMgd2l0aG91dCB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNYWluUGhhc2Uob25lLCB0d28pIHtcbiAgICB0d28uYXR0YWNrZWQoMCwgMCk7IC8vIHBhdHJvbFxuICAgIHR3by5hdHRhY2tlZCgxLCAwKTtcblxuICAgIHR3by5hdHRhY2tlZCgxLCAxKTsgLy8gc3ViXG4gICAgdHdvLmF0dGFja2VkKDIsIDEpO1xuICAgIHR3by5hdHRhY2tlZCgzLCAxKTtcblxuICAgIHR3by5hdHRhY2tlZCgyLCAyKTsgLy8gZGVzdHJveWVyXG4gICAgdHdvLmF0dGFja2VkKDMsIDIpO1xuICAgIHR3by5hdHRhY2tlZCg0LCAyKTtcblxuICAgIHR3by5hdHRhY2tlZCgzLCAzKTsgLy8gYmF0dGxlc2hpcFxuICAgIHR3by5hdHRhY2tlZCg0LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNSwgMyk7XG4gICAgdHdvLmF0dGFja2VkKDYsIDMpO1xuXG4gICAgdHdvLmF0dGFja2VkKDQsIDQpOyAvLyBjYXJyaWVyXG4gICAgdHdvLmF0dGFja2VkKDUsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDYsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDcsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDgsIDQpO1xuXG4gICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGdhbWUgaXMgb3Zlci4gUGxheWVyIHR3byB3aW5zLlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihnYW1lT3ZlckNoZWNrKHR3bykpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgb25lIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBvbmUgd29uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxufSIsIi8vIFRha2UgdGhlIHBsYXllcidzIGJvYXJkLCB0aGUgdGlsZSBpZCwgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGhhc2Uob25lLCBpZCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgbGV0IHNoaXBOdW1iZXIgPSBvbmUuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBnZXQgdGhlIG51bWJlciBvZiBzaGlwc1xuICAgIGxldCB4ID0gaWQuY2hhckF0KDApOyAvLyBnZXQgeCBmcm9tIHRoZSB0aWxlIGlkXG4gICAgbGV0IHkgPSBpZC5jaGFyQXQoMSk7IC8vIGdldCB5IGZyb20gdGhlIHRpbGUgaWRcbiAgICBvbmUucGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KTsgLy8gcGxhY2UgdGhlIHNoaXBcbiAgICBsZXQgbmV3U2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuXG4gICAgLy8gSWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyLCB0aGUgc2hpcCB3YXMgc3VjY2Vzc2Z1bGx5IHBsYWNlZCBhbmRcbiAgICAvLyBjYW4gYmUgY29sb3JlZC5cbiAgICBpZihuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcilcbiAgICAgICAgY29sb3JTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBzdGF0ZSB3aXRob3V0IHRoZSB1c2Ugb2YgdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZShvbmUpIHtcbiAgICBvbmUucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgb25lLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgb25lLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgb25lLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgb25lLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZTIodHdvKSB7XG4gICAgdHdvLnBsYWNlKDIsICd4JywgMCwgMCk7IC8vIHNoaXAgb2YgbGVuZ3RoIDIgb24gdGhlICd4JyBheGlzIGF0IGNvb3JkaW5hdGU6IDAsMFxuICAgIHR3by5wbGFjZSgzLCAneCcsIDEsIDEpO1xuICAgIHR3by5wbGFjZSgzLCAneCcsIDIsIDIpO1xuICAgIHR3by5wbGFjZSg0LCAneCcsIDMsIDMpO1xuICAgIHR3by5wbGFjZSg1LCAneCcsIDQsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWlQbGFjZVBoYXNlKHR3bykge1xuICBcbiAgICAvLyBBcnJheSBvZiBzaGlwIGxlbmd0aHMgdG8gcmFuZG9tbHkgY2hvb3NlIGZyb21cbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XTtcbiAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzaGlwIGxlbmd0aHMgYW5kIHBsYWNlIGVhY2ggc2hpcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGlwTnVtYmVyID0gdHdvLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gR2V0IHRoZSBudW1iZXIgb2Ygc2hpcHMgaW4gdGhlIHBsYXllciBvYmplY3RcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW2ldO1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAneCcgOiAneSc7XG4gIFxuXG4gICAgICAvLyBUaGlzIGxvb3AgZW5zdXJlcyBhIHNoaXAgaXMgYmVpbmcgcGxhY2VkIG9uIHRoZSBib2FyZC5cbiAgICAgIC8vIElmIHRoZSBwbGFjZSBmdW5jdGlvbiBpcyBmZWQgY29vcmRpbmF0ZXMgb2YgYW4gb2NjdXBpZWQgc3BhY2UsIGEgc2hpcCB3aWxsIG5vdCBiZSBwbGFjZWQuXG4gICAgICAvLyBUaGlzIGxvb3Agd2lsbCByZXBlYXQgdW50aWwgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgaGFzIGluY3JlYXNlZC5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgYXhpcywgdGhlIHBsYWNlbWVudCBvZiB0aGUgc2hpcCdzIHN0YXJ0aW5nIGNvb3JkaW5hdGUgd2lsbCB2YXJ5XG4gICAgICAgIC8vIGJ5IHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgYmVpbmcgcGxhY2VkLlxuICAgICAgICBpZihheGlzID09ICd4Jykge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHR3by5wbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpO1xuICBcbiAgICAgICAgbGV0IG5ld1NoaXBOdW1iZXIgPSB0d28uYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBHZXQgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHNcbiAgXG4gICAgICAgIGlmIChuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcikge1xuICAgICAgICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgaWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLy8gbGVuZ3RoLCBheGlzLCB4IHN0YXJ0aW5nIGNvb3JkaW5hdGUsIHkgc3RhcnRpbmcgY29vcmRpbmF0ZVxuLy8gYWRkaW5nIGEgY2xhc3MgdG8gc3R5bGUgdGhlIHRpbGVzIHdpdGggc2hpcHNcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNoaXAobCwgYSwgeCwgeSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYoYSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4SW5jcmVtZW50fSR7eX1gKTtcbiAgICAgICAgICAgIGNvbG9yQ2VsbC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXNoaXBcIik7XG4gICAgICAgIH0gZWxzZSBpZihhID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCB5SW5jcmVtZW50ID0gcGFyc2VJbnQoeSkgKyBpO1xuICAgICAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9JHt5SW5jcmVtZW50fWApO1xuICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQtZmFjdG9yeSc7XG5cbi8vIEVhY2ggcGxheWVyIGhhcyB0aGVpciBvd24gZ2FtZWJvYXJkLCBhIGZ1bmN0aW9uIHRvIHBsYWNlIGEgc2hpcCwgYSBmdW5jdGlvbiB0byBhdHRhY2ssIGFuZCBhblxuLy8gYXJyYXkgY29udGFpbmluZyB0aGVpciBzaGlwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgIGNvbnN0IGJGYWN0b3J5ID0gY3JlYXRlR2FtZUJvYXJkKCk7IC8vIFRoZSBib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuXG4gICBmdW5jdGlvbiBwbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gICB9XG4gICBcbiAgIGZ1bmN0aW9uIGF0dGFja2VkKHgsIHkpIHtcbiAgICAgYkZhY3RvcnkucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgIH1cblxuICAgcmV0dXJuIHtcbiAgICBiRmFjdG9yeSwgXG4gICAgcGxhY2UsXG4gICAgYXR0YWNrZWRcbiAgIH07XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoLCBhcnJheSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXJyYXk7XG4gICAgbGV0IGhpdHMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTsgLy8gRmlsbCB0aGUgaGl0cyBhcnJheSB3aXRoIGZhbHNlIHZhbHVlcy5cbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICBcbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIG5leHQgYXZhaWxhYmxlIGhpdCB0aGF0IGlzIGZhbHNlIGFuZCBtYWtlIGl0IHRydWUgYW5kIHRoZW4gYnJlYWsgdGhlIGxvb3AuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoaGl0c1tpXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGhpdHNbaV0gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBldmVyeSBlbGVtZW50IGluIHRoZSBoaXRzIGFycmF5IGlzIHRydWUuXG4gICAgICAgIGlmIChoaXRzLmV2ZXJ5KGhpdCA9PiBoaXQpKSB7XG4gICAgICAgICAgc3VuayA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0SGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzLnNsaWNlKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBoaXQsXG4gICAgICBnZXRMZW5ndGgsXG4gICAgICBnZXRIaXRzLFxuICAgICAgaXNTdW5rLFxuICAgICAgY29vcmRpbmF0ZXNcbiAgICB9O1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9