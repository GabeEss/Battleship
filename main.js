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

// This function determines the length of the ship to be placed. Also removes event listeners once
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
// player is the player object
// identifier identifies if the player is player 'one' or 'two'
// when the count is 5 the game ends
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

// Function attacks the opponent's tile. A class is added to the tile to indicate a hit or miss
// via CSS.
function aiMainPhase(opponent) {
    let x;
    let y;
    let tile;

    while(true) {
        x = Math.floor(Math.random() * 10); // get random x y coordinates
        y = Math.floor(Math.random() * 10);
        tile = document.getElementById(`${x}${y}`); // find the corresponding tile

        // The AI will continue to find coordinates until it finds a space it has not targeted.
        if(tile.classList.contains('miss') || tile.classList.contains('hit'));
        else break;
    }

    opponent.attacked(x, y);

    if(opponent.bFactory.board[x][y] === 'miss') {
        tile.classList.add('miss');
    }
        
    else {
        tile.classList.add('hit');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCTztBQUNQO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXItY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlLXBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC1mYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgfVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZW5lbXktY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpdDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgfVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAvLyBUaGUgdGFibGUgdG8gaG9sZCB0aGUgYm9hcmQuXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYkZhY3RvcnkuYm9hcmQ7IC8vIFRoZSBib2FyZCBhcnJheS5cblxuICAgIGNvbnN0IG51bVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTsgLy8gVG8gaG9sZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIG51bVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIC8vIEFkZCBhbiBlbXB0eSBjZWxsIHRvIHRoZSBsZWZ0IG9mIHRoZSBudW1iZXJzIGFuZCBhYm92ZSB0aGUgbGV0dGVycy5cbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcbiAgICBudW1Sb3cuYXBwZW5kQ2hpbGQoZW1wdHlDZWxsKTtcblxuICAgIC8vIExvb3AgdG8gYWRkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG51bWJlckNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsXCIpO1xuICAgICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIG51bVJvdy5hcHBlbmRDaGlsZChudW1iZXJDZWxsKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobnVtUm93KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBsZXR0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBsZXR0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2xldHRlci1jZWxsJyk7XG4gICAgICAgIGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGV0dGVyQ2VsbCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RW5lbXlCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTsgLy8gVGhlIHRhYmxlIHRvIGhvbGQgdGhlIGJvYXJkLlxuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJGYWN0b3J5LmJvYXJkOyAvLyBUaGUgYm9hcmQgYXJyYXkuXG5cbiAgICBjb25zdCBudW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7IC8vIFRvIGhvbGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBudW1Sb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBBZGQgYW4gZW1wdHkgY2VsbCB0byB0aGUgbGVmdCBvZiB0aGUgbnVtYmVycyBhbmQgYWJvdmUgdGhlIGxldHRlcnMuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG4gICAgbnVtUm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG5cbiAgICAvLyBMb29wIHRvIGFkZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBudW1iZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBudW1Sb3cuYXBwZW5kQ2hpbGQobnVtYmVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG51bVJvdyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgY29uc3QgbGV0dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItY2VsbCcpO1xuICAgICAgICBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxldHRlckNlbGwpO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBcImVcIiArIGoudG9TdHJpbmcoKSArIGkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGNvb3JkKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFibGU7XG59IiwiaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBkaXNwbGF5RW5lbXlCb2FyZCB9IGZyb20gXCIuL2Rpc3BsYXktYm9hcmRcIjtcbmltcG9ydCBnYW1lT3ZlckNoZWNrIGZyb20gXCIuL2dhbWUtb3Zlci1jaGVja1wiO1xuaW1wb3J0IHsgcGxheWVyTWFpblBoYXNlLCBhaU1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IGFpUGxhY2VQaGFzZSwgcGxhY2VQaGFzZSB9IGZyb20gXCIuL3BsYWNlLXBoYXNlXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5sZXQgb25lID0gXCJcIjsgLy8gcGxheWVyIG9uZVxubGV0IHR3byA9IFwiXCI7IC8vIHBsYXllciB0d29cbmxldCBtYWluID0gXCJcIjsgLy8gbWFpbiBjb250YWluZXIgKGNvbnRlbnQpLCBqdXN0IGluIGNhc2VcbmxldCBib2FyZCA9IFwiXCI7IC8vIGJvYXJkIGNvbnRhaW5lclxubGV0IHVwcGVyID0gXCJcIjsgLy8gdXBwZXIgY29udGFpbmVyXG5cblxuLy8gU2V0cyB1cCB0aGUgc3RhcnQgYnV0dG9uIGFuZCBidWlsZHMgc29tZSBjb250YWluZXJzIGZvciBsYXRlciB1c2UuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBET00oY29udGVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgICBvbmUgPSBwbGF5ZXJPbmU7XG4gICAgdHdvID0gcGxheWVyVHdvO1xuICAgIG1haW4gPSBjb250ZW50O1xuXG4gICAgY29uc3QgdXBwZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1cHBlci1jb250YWluZXInKTtcbiAgICB1cHBlciA9IHVwcGVyQ29udGFpbmVyO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEJ1dHRvbkV2ZW50KCk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc3RhcnQgYnV0dG9uXG4gICAgICAgIHVwcGVyLnJlbW92ZUNoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgYm9hcmQgPSBib2FyZENvbnRhaW5lcjtcbiAgICB1cHBlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh1cHBlckNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG59XG5cbi8vIFdoZW4gdGhlIHN3YXAgYXhpcyBidXR0b24gaXMgY2xpY2tlZCwgaXQgY2hhbmdlcyB0aGUgYXhpcyB0byBwbGFjZSB0aGUgc2hpcC5cbmZ1bmN0aW9uIGF4aXNTd2FwKGF4aXMpIHtcbiAgICBpZihheGlzID09ICd4JylcbiAgICAgICAgcmV0dXJuICd5JztcbiAgICBlbHNlIHJldHVybiAneCc7XG59XG5cbi8vIFdoZW4gdGhlIHN0YXJ0IGJ1dHRvbiBpcyBjbGlja2VkLiBBZGRzIGEgZGVzY3JpcHRpb24gb2Ygd2hhdCB0byBkbywgZ2VuZXJhdGVzIHRoZSBwbGF5ZXIgYm9hcmQsXG4vLyBjYWxscyB0aGUgZnVuY3Rpb24gdG8gcGxhY2UgdGhlIHNoaXBzLlxuZnVuY3Rpb24gc3RhcnRCdXR0b25FdmVudCgpIHtcbiAgICAvLyBEZXNjcmlwdG9yXG4gICAgbGV0IHBsYWNlU2hpcHNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLmlkID0gJ2hlYWRlci1kZXNjcmlwdGlvbic7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBZb3VyIFNoaXBzXCI7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc0Rlc2NyaXB0aW9uKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIHBsYXllcidzIGdyaWQgdG8gcGxhY2Ugc2hpcHMuXG4gICAgY29uc3QgZ3JpZFBsYXllck9uZSA9IGRpc3BsYXlCb2FyZChvbmUpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdyaWRQbGF5ZXJPbmUpO1xuXG4gICAgcGxhY2VTaGlwc0V2ZW50KCk7XG59XG5cbmxldCBheGlzID0gJ3gnOyAvLyBkZWZhdWx0IGF4aXMgZm9yIHBsYWNpbmcgc2hpcHNcblxuLy8gVGhpcyBmdW5jdGlvbiBkZXRlcm1pbmVzIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkLiBBbHNvIHJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzIG9uY2Vcbi8vIGFsbCB0aGUgc2hpcHMgYXJlIHBsYWNlZC5cbmZ1bmN0aW9uIGhhbmRsZVBsYWNlU2hpcHMoZXZlbnQpIHtcbiAgICBsZXQgc2hpcHMgPSBvbmUuYkZhY3Rvcnkuc2hpcHM7XG4gICAgbGV0IGxlbmd0aCA9IDI7IC8vIFRoZSBmaXJzdCBzaGlwIGlzIHRoZSBwYXRyb2wgYm9hdC5cblxuICAgIGlmKHNoaXBzLmxlbmd0aCA9PSAwKVxuICAgICAgbGVuZ3RoID0gMjsgLy8gcGxhY2UgdGhlIHBhdHJvbCBib2F0XG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMSkgXG4gICAgICBsZW5ndGggPSAzOyAvLyBwbGFjZSB0aGUgc3VibWFyaW5lXG4gICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMilcbiAgICAgIGxlbmd0aCA9IDM7IC8vIHBsYWNlIHRoZSBkZXN0cm95ZXJcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAzKVxuICAgICAgbGVuZ3RoID0gNDsgLy8gcGxhY2UgdGhlIGJhdHRsZXNoaXBcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSA0KVxuICAgICAgbGVuZ3RoID0gNTsgLy8gcGxhY2UgdGhlIGNhcnJpZXJcbiAgXG4gICAgaWYoc2hpcHMubGVuZ3RoIDwgNSlcbiAgICAgIHBsYWNlUGhhc2Uob25lLCBldmVudC50YXJnZXQuaWQsIGF4aXMsIGxlbmd0aCk7XG4gIFxuICAgIGlmKHNoaXBzLmxlbmd0aCA9PSA1KSB7XG4gICAgICBhaVBsYWNlUGhhc2UodHdvKTsgLy8gQUkgcGxhY2VzIHNoaXBzIHJhbmRvbWx5XG4gICAgICBjb25zdCBwbGF5ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgICBwbGF5ZXJUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGFjZVNoaXBzKTtcbiAgICAgIH0pXG4gICAgICBtYWluUGhhc2VFdmVudCgpO1xuICAgIH1cbn1cbiAgXG5mdW5jdGlvbiBwbGFjZVNoaXBzRXZlbnQoKSB7XG4gICAgLy8gQ2xpY2sgdG8gY2hhbmdlIHRoZSBheGlzIHRoZSBwbGF5ZXIgd2lzaGVzIHRvIHBsYWNlIGhpcyBzaGlwcy5cbiAgICBsZXQgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGF4aXNCdXR0b24uaWQgPSAnYXhpcy1idXR0b24nO1xuICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3YXAgQXhpc1wiO1xuICAgIGF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBheGlzID0gYXhpc1N3YXAoYXhpcykpO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKGF4aXNCdXR0b24pO1xuICBcbiAgICAvLyBHZXQgYWxsIHRoZSB0aWxlcyBhbmQgY3JlYXRlIGEgY2xpY2sgZXZlbnQuXG4gICAgY29uc3QgcGxheWVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIHBsYXllclRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxhY2VTaGlwcyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFpblBoYXNlRXZlbnQoKSB7XG4gICAgbGV0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXhpcy1idXR0b24nKTtcbiAgICB1cHBlci5yZW1vdmVDaGlsZChheGlzQnV0dG9uKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1kZXNjcmlwdGlvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBUaWxlIHRvIFN0cmlrZSc7XG5cbiAgICBjb25zdCBncmlkUGxheWVyVHdvID0gZGlzcGxheUVuZW15Qm9hcmQodHdvKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyVHdvKTtcblxuICAgIGNvbnN0IGVuZW15VGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXktY2VsbCcpO1xuICAgIGVuZW15VGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1haW5QaGFzZSk7XG4gICAgICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYWluUGhhc2UoZXZlbnQpIHtcbiAgICAvLyBEb24ndCBpbmNyZW1lbnQgdGhlIHR1cm4gaWYgdGhlIHBsYXllciBpcyBoaXR0aW5nIHRoZSBzYW1lIHNxdWFyZS5cbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpO1xuICAgIGVsc2Uge1xuICAgICAgICB3YWl0Rm9yUGxheWVyUGhhc2UoZXZlbnQpOyAvLyB3YWl0IGZvciB0aGUgcGxheWVyIHR1cm5cblxuICAgICAgICAvLyBDaGVjayBpZiBwbGF5ZXIgb25lIHdpbnMuXG4gICAgICAgIGlmKGdhbWVPdmVyQ2hlY2sodHdvLCAndHdvJykpIHtcbiAgICAgICAgICAgIGhhbmRsZUdhbWVPdmVyKFwiUGxheWVyIE9uZVwiLCBvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQUkgdHVybiBvY2N1cnMgYWZ0ZXIgdGhlIHBsYXllciB0dXJuLlxuICAgICAgICAgICAgYWlNYWluUGhhc2Uob25lKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIHR3byB3aW5zLlxuICAgICAgICAgICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUsICdvbmUnKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUdhbWVPdmVyKFwiUGxheWVyIFR3b1wiLCB0d28pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQYXNzZXMgdGhlIEFJIHBsYXllciBvYmplY3QsIHRoZSBBSSB0aWxlIGlkLCBhbmQgdGhlIEFJIHRpbGUuIEZvcmNlcyBBSSB0byB3YWl0IHVudGlsXG4vLyBwbGF5ZXIgaGFzIG1hZGUgdGhlaXIgbW92ZS5cbmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JQbGF5ZXJQaGFzZShldmVudCkge1xuICAgIGF3YWl0IHBsYXllck1haW5QaGFzZSh0d28sIGV2ZW50LnRhcmdldC5pZCwgZXZlbnQudGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlR2FtZU92ZXIod2lubmVyLCB3aW5uZXJPYmplY3QpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1kZXNjcmlwdGlvbicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUaGUgd2lubmVyIGlzICcgKyB3aW5uZXIgKyAnISc7XG5cbiAgICBjb25zdCBvY2N1cGllZFNwYWNlcyA9IHdpbm5lck9iamVjdC5iRmFjdG9yeS5vY2N1cGllZFNwYWNlcztcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCB0aGUgY29vcmRpbmF0ZXMgd2l0aCBhIHNoaXAuXG4gICAgb2NjdXBpZWRTcGFjZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdGlsZSA9IFwiXCI7XG4gICAgICAgIGlmKHdpbm5lciA9PSBcIlBsYXllciBUd29cIilcbiAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZSR7aXRlbX1gKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW19YCk7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIHRpbGUgdG8gc2hvdyB0aGUgbG9zZXIgdGhlIGxvY2F0aW9uIG9mIHRoZSBlbmVteSBzaGlwcy5cbiAgICAgICAgaWYoIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSB8fCAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1zaGlwJykpXG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zaGlwJyk7XG4gICAgfSlcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGlsZS5cbiAgICBjb25zdCBlbmVteVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWNlbGwnKTtcbiAgICBlbmVteVRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNYWluUGhhc2UpO1xuICAgICAgfSlcblxuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluP1wiO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcblxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRFdmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0RXZlbnQoKSB7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiOyAvLyBSZW1vdmUgZXZlcnl0aGluZyBpbiB0aGUgY29udGVudCBjb250YWluZXIuXG5cbiAgICBjb25zdCB1cHBlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VwcGVyLWNvbnRhaW5lcicpOyAvLyBSZS1jcmVhdGUgdXBwZXJDb250YWluZXJcbiAgICB1cHBlciA9IHVwcGVyQ29udGFpbmVyO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9hcmQtY29udGFpbmVyJyk7IC8vIFJlLWNyZWF0ZSBib2FyZENvbnRhaW5lclxuICAgIGJvYXJkID0gYm9hcmRDb250YWluZXI7XG5cbiAgICBvbmUgPSBjcmVhdGVQbGF5ZXIoKTsgLy8gUmUtY3JlYXRlIHBsYXllciBvbmUgYW5kIHBsYXllciB0d28uXG4gICAgdHdvID0gY3JlYXRlUGxheWVyKCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHVwcGVyQ29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcblxuICAgIHN0YXJ0QnV0dG9uRXZlbnQoKTsgLy8gY2FsbCB0aGUgc3RhcnQgYnV0dG9uIGV2ZW50XG59IiwiLy8gcGxheWVyIGlzIHRoZSBwbGF5ZXIgb2JqZWN0XG4vLyBpZGVudGlmaWVyIGlkZW50aWZpZXMgaWYgdGhlIHBsYXllciBpcyBwbGF5ZXIgJ29uZScgb3IgJ3R3bydcbi8vIHdoZW4gdGhlIGNvdW50IGlzIDUgdGhlIGdhbWUgZW5kc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXJDaGVjayhwbGF5ZXIsIGlkZW50aWZpZXIpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllci5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hpcCA9IHBsYXllci5iRmFjdG9yeS5zaGlwc1tpXTtcbiAgICAgICAgaWYoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgcGxheWVyLmJGYWN0b3J5LmFkZFN1bmtTaGlwKHNoaXApOyAvLyBhZGQgdGhlIHNoaXAgdG8gYSBzZXQgb2Ygc3VuayBzaGlwc1xuICAgICAgICAgICAgc3Vua01vZGlmaWVyKHBsYXllciwgaWRlbnRpZmllcik7IC8vIG1vZGlmeSB0aGUgc3R5bGluZyBvZiB0aGUgc2hpcC5cbiAgICAgICAgICAgIGNvdW50Kys7IC8vIGl0ZXJhdGUgdGhlIGNvdW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoY291bnQgPT0gNSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1bmtNb2RpZmllcihwbGF5ZXIsIGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBzdW5rU2hpcHMgPSBwbGF5ZXIuYkZhY3Rvcnkuc3Vua1NoaXBzO1xuICAgIHN1bmtTaGlwcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGl0ZW0uY29vcmRpbmF0ZXM7XG5cbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBpZihpZGVudGlmaWVyID09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZVwiICsgY29vcmQpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwLWZhY3RvcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICAgIGdlbmVyYXRlQm9hcmQoYm9hcmQpO1xuICAgIGxldCBzaGlwcyA9IG5ldyBBcnJheSgpO1xuICAgIGxldCBvY2N1cGllZFNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgc3Vua1NoaXBzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gMTAgYnkgMTAgYXJyYXlcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZ2l2ZW4gc3BhY2UgaXMgb2NjdXBpZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgZnVuY3Rpb24gaXNPY2N1cGllZFNwYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkU3BhY2VzLmhhcyhgJHt4fSR7eX1gKTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGZvciBhIHNoaXAgcGxhY2VkIG91dCBvZiBib3VuZHMuIEZ1bmN0aW9uIHJldHVybnMgbnVsbCBpZiBvdXQgb2YgYm91bmRzLlxuICAgIGZ1bmN0aW9uIG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHgpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiAxMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmKGF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRzID0gcGFyc2VJbnQoeSkgKyBsZW5ndGg7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA+IDEwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gXCJsZW5ndGhcIiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuICAgIC8vIFwiYXhpc1wiIGlzIHRoZSBheGlzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIC8vIFwieFwiIGFuZCBcInlcIiBhcmUgdGhlIHN0YXJ0aW5nIHggYW5kIHkgY29vcmRpbmF0ZXMgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWQuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICAvLyBUZXN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBzOyAvLyByZXR1cm4gc2hpcHMgd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc3BhY2UgaXMgb2NjdXBpZWQuXG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHhJbmNyZW1lbnQsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eEluY3JlbWVudH0ke3l9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgICAgICBpZihpc09jY3VwaWVkU3BhY2UoeCwgeUluY3JlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25baV0gPSBgJHt4fSR7eUluY3JlbWVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgc2hpcCdzIGNvb3JkaW5hdGVzIHRvIHRoZSBvY2N1cGllZFNwYWNlcyBTZXRcbiAgICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlcy5hZGQoY29vcmQpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCwgc2hpcFBvc2l0aW9uKTsgLy8gQ3JlYXRlIHRoZSBzaGlwLlxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApOyAvLyBQdXNoIHRoZSBuZXcgc2hpcCBvbnRvIHRoZSBzaGlwcyBhcnJheS5cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNoaXBzIGFycmF5LlxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgLy8gUmVjZWl2ZXMgYW4geCx5IGNvb3JkaW5hdGUgZm9yIGF0dGFjay5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBib2FyZCBjb29yZGluYXRlIGhhcyBhIG1pc3MvaGl0IGluIGl0IGFscmVhZHkuXG4gICAgLy8gTmVzdGVkIGxvb3BzIHRvIGdvIHRocm91Z2ggZWFjaCBzaGlwJ3MgY29vcmRpbmF0ZXMuIFxuICAgIC8vIE8obl5tKSB0aW1lIGNvbXBsZXhpdHkuIFdoZXJlIG4gaXMgdGhlIG51bWJlciBvZiBzaGlwcyBhbmQgbSBpcyB0aGUgeHkgb2YgZWFjaCBzaGlwLlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBsZXQgeHkgPSB4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal0gPT09IHh5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3Vua1NoaXAoc2hpcCkge1xuICAgICAgICBzdW5rU2hpcHMuYWRkKHNoaXApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgb2NjdXBpZWRTcGFjZXMsXG4gICAgICAgIHN1bmtTaGlwcyxcbiAgICAgICAgYWRkU3Vua1NoaXAsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufSIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBwbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZSwgZGVmYXVsdFBsYWNlUGhhc2UyIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcbmltcG9ydCB7IG1haW5QaGFzZSwgZGVmYXVsdE1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IHNldHVwRE9NIH0gZnJvbSBcIi4vZG9tLWFuZC1ldmVudC1saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZVN0YXRlKGNvbnRlbnQpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoKTsgLy8gVHdvIHNlcGFyYXRlIGJvYXJkcy5cbiAgICBjb25zdCBwbGF5ZXJUd28gPSBjcmVhdGVQbGF5ZXIoKTtcblxuICAgIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICAgIC8vIEZ1bmN0aW9ucyB0byBoZWxwIHRlc3QgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgd29ya3Mgb3V0c2lkZSBvZiB0aGUgRE9NIGFuZCBiZWZvcmUgZXZlbnQgbGlzdGVuZXJzLlxuICAgIC8vIGRlZmF1bHRQbGFjZVBoYXNlKHBsYXllck9uZSk7XG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UyKHBsYXllclR3byk7XG4gICAgLy8gZGVmYXVsdE1haW5QaGFzZShwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZVN0YXRlIGZyb20gJy4vZ2FtZXN0YXRlJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5nYW1lU3RhdGUoY29udGVudCk7IiwiaW1wb3J0IGdhbWVPdmVyQ2hlY2sgZnJvbSBcIi4vZ2FtZS1vdmVyLWNoZWNrXCI7XG5cbi8vIEZ1bmN0aW9uIGF0dGFja3MgdGhlIG9wcG9uZW50J3MgdGlsZS4gQSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgdGlsZSB0byBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzXG4vLyB2aWEgQ1NTLiBUaGUgQUkgdGlsZSBpZCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgcGxheWVyJ3MuIEl0IGlzIGluIHRoZSBmb3JtYXQ6IGUwMCwgZTAxIC4uLiBlOTgsIGU5OVxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1haW5QaGFzZShvcHBvbmVudCwgaWQsIHRpbGUpIHtcbiAgICAvLyBXcmFwIHRoZSBjb2RlIGluIGEgcHJvbWlzZSwgc28gdGhlIGFpTWFpblBoYXNlIHdhaXRzIGZvciB0aGUgcGxheWVyTWFpblBoYXNlLlxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyBnZXQgY29vcmRpbmF0ZXMgZnJvbSB0aWxlIGlkXG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDIpKTtcblxuICAgICAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTsgLy8gYXR0YWNrIHRoZSBlbmVteSBwbGF5ZXJcblxuICAgICAgICBpZihvcHBvbmVudC5iRmFjdG9yeS5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTsgLy8gaWYgbWlzcywgYWRkIGNsYXNzICdtaXNzJyBmb3Igc3R5bGluZ1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTsgLy8gaWYgaGl0LCBhZGQgY2xhc3MgJ2hpdCcgZm9yIHN0eWxpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG59XG5cbi8vIEZ1bmN0aW9uIGF0dGFja3MgdGhlIG9wcG9uZW50J3MgdGlsZS4gQSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgdGlsZSB0byBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzXG4vLyB2aWEgQ1NTLlxuZXhwb3J0IGZ1bmN0aW9uIGFpTWFpblBoYXNlKG9wcG9uZW50KSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IHRpbGU7XG5cbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IC8vIGdldCByYW5kb20geCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG5cbiAgICAgICAgLy8gVGhlIEFJIHdpbGwgY29udGludWUgdG8gZmluZCBjb29yZGluYXRlcyB1bnRpbCBpdCBmaW5kcyBhIHNwYWNlIGl0IGhhcyBub3QgdGFyZ2V0ZWQuXG4gICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgZWxzZSBicmVhaztcbiAgICB9XG5cbiAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTtcblxuICAgIGlmKG9wcG9uZW50LmJGYWN0b3J5LmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxuICAgICAgICBcbiAgICBlbHNlIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9XG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBsb2dpYyB3aXRob3V0IHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1haW5QaGFzZShvbmUsIHR3bykge1xuICAgIHR3by5hdHRhY2tlZCgwLCAwKTsgLy8gcGF0cm9sXG4gICAgdHdvLmF0dGFja2VkKDEsIDApO1xuXG4gICAgdHdvLmF0dGFja2VkKDEsIDEpOyAvLyBzdWJcbiAgICB0d28uYXR0YWNrZWQoMiwgMSk7XG4gICAgdHdvLmF0dGFja2VkKDMsIDEpO1xuXG4gICAgdHdvLmF0dGFja2VkKDIsIDIpOyAvLyBkZXN0cm95ZXJcbiAgICB0d28uYXR0YWNrZWQoMywgMik7XG4gICAgdHdvLmF0dGFja2VkKDQsIDIpO1xuXG4gICAgdHdvLmF0dGFja2VkKDMsIDMpOyAvLyBiYXR0bGVzaGlwXG4gICAgdHdvLmF0dGFja2VkKDQsIDMpO1xuICAgIHR3by5hdHRhY2tlZCg1LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNiwgMyk7XG5cbiAgICB0d28uYXR0YWNrZWQoNCwgNCk7IC8vIGNhcnJpZXJcbiAgICB0d28uYXR0YWNrZWQoNSwgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoNiwgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoNywgNCk7ICBcbiAgICB0d28uYXR0YWNrZWQoOCwgNCk7XG5cbiAgICBpZihnYW1lT3ZlckNoZWNrKG9uZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgdHdvIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmKGdhbWVPdmVyQ2hlY2sodHdvKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBnYW1lIGlzIG92ZXIuIFBsYXllciBvbmUgd2lucy5cIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG9uZSB3b24uIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiKTtcbiAgICB9XG59IiwiLy8gVGFrZSB0aGUgcGxheWVyJ3MgYm9hcmQsIHRoZSB0aWxlIGlkLCB0aGUgYXhpcyB0byBwbGFjZSB0aGUgc2hpcCwgYW5kIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VQaGFzZShvbmUsIGlkLCBheGlzLCBsZW5ndGgpIHtcbiAgICBsZXQgc2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbnVtYmVyIG9mIHNoaXBzXG4gICAgbGV0IHggPSBpZC5jaGFyQXQoMCk7IC8vIGdldCB4IGZyb20gdGhlIHRpbGUgaWRcbiAgICBsZXQgeSA9IGlkLmNoYXJBdCgxKTsgLy8gZ2V0IHkgZnJvbSB0aGUgdGlsZSBpZFxuICAgIG9uZS5wbGFjZShsZW5ndGgsIGF4aXMsIHgsIHkpOyAvLyBwbGFjZSB0aGUgc2hpcFxuICAgIGxldCBuZXdTaGlwTnVtYmVyID0gb25lLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gZ2V0IHRoZSBuZXcgbnVtYmVyIG9mIHNoaXBzXG5cbiAgICAvLyBJZiB0aGUgbmV3IG51bWJlciBvZiBzaGlwcyBpcyBncmVhdGVyIHRoYW4gdGhlIG9sZCBudW1iZXIsIHRoZSBzaGlwIHdhcyBzdWNjZXNzZnVsbHkgcGxhY2VkIGFuZFxuICAgIC8vIGNhbiBiZSBjb2xvcmVkLlxuICAgIGlmKG5ld1NoaXBOdW1iZXIgPiBzaGlwTnVtYmVyKVxuICAgICAgICBjb2xvclNoaXAobGVuZ3RoLCBheGlzLCB4LCB5KTtcbn1cblxuLy8gVG8gaGVscCB0ZXN0IHRoZSBnYW1lIHN0YXRlIHdpdGhvdXQgdGhlIHVzZSBvZiB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRQbGFjZVBoYXNlKG9uZSkge1xuICAgIG9uZS5wbGFjZSgyLCAneCcsIDAsIDApOyAvLyBzaGlwIG9mIGxlbmd0aCAyIG9uIHRoZSAneCcgYXhpcyBhdCBjb29yZGluYXRlOiAwLDBcbiAgICBvbmUucGxhY2UoMywgJ3gnLCAxLCAxKTtcbiAgICBvbmUucGxhY2UoMywgJ3gnLCAyLCAyKTtcbiAgICBvbmUucGxhY2UoNCwgJ3gnLCAzLCAzKTtcbiAgICBvbmUucGxhY2UoNSwgJ3gnLCA0LCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRQbGFjZVBoYXNlMih0d28pIHtcbiAgICB0d28ucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgdHdvLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgdHdvLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgdHdvLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgdHdvLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhaVBsYWNlUGhhc2UodHdvKSB7XG4gIFxuICAgIC8vIEFycmF5IG9mIHNoaXAgbGVuZ3RocyB0byByYW5kb21seSBjaG9vc2UgZnJvbVxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuICBcbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNoaXAgbGVuZ3RocyBhbmQgcGxhY2UgZWFjaCBzaGlwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoaXBOdW1iZXIgPSB0d28uYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBHZXQgdGhlIG51bWJlciBvZiBzaGlwcyBpbiB0aGUgcGxheWVyIG9iamVjdFxuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aHNbaV07XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd4JyA6ICd5JztcbiAgXG5cbiAgICAgIC8vIFRoaXMgbG9vcCBlbnN1cmVzIGEgc2hpcCBpcyBiZWluZyBwbGFjZWQgb24gdGhlIGJvYXJkLlxuICAgICAgLy8gSWYgdGhlIHBsYWNlIGZ1bmN0aW9uIGlzIGZlZCBjb29yZGluYXRlcyBvZiBhbiBvY2N1cGllZCBzcGFjZSwgYSBzaGlwIHdpbGwgbm90IGJlIHBsYWNlZC5cbiAgICAgIC8vIFRoaXMgbG9vcCB3aWxsIHJlcGVhdCB1bnRpbCB0aGUgbnVtYmVyIG9mIHNoaXBzIHBsYWNlZCBoYXMgaW5jcmVhc2VkLlxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IHgsIHk7XG5cbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBheGlzLCB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwJ3Mgc3RhcnRpbmcgY29vcmRpbmF0ZSB3aWxsIHZhcnlcbiAgICAgICAgLy8gYnkgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBiZWluZyBwbGFjZWQuXG4gICAgICAgIGlmKGF4aXMgPT0gJ3gnKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBsZW5ndGgpKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdHdvLnBsYWNlKGxlbmd0aCwgYXhpcywgeCwgeSk7XG4gIFxuICAgICAgICBsZXQgbmV3U2hpcE51bWJlciA9IHR3by5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIEdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuICBcbiAgICAgICAgaWYgKG5ld1NoaXBOdW1iZXIgPiBzaGlwTnVtYmVyKSB7XG4gICAgICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBpZiB0aGUgbmV3IG51bWJlciBvZiBzaGlwcyBpcyBncmVhdGVyIHRoYW4gdGhlIG9sZCBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4vLyBsZW5ndGgsIGF4aXMsIHggc3RhcnRpbmcgY29vcmRpbmF0ZSwgeSBzdGFydGluZyBjb29yZGluYXRlXG4vLyBhZGRpbmcgYSBjbGFzcyB0byBzdHlsZSB0aGUgdGlsZXMgd2l0aCBzaGlwc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yU2hpcChsLCBhLCB4LCB5KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZihhID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3hJbmNyZW1lbnR9JHt5fWApO1xuICAgICAgICAgICAgY29sb3JDZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItc2hpcFwiKTtcbiAgICAgICAgfSBlbHNlIGlmKGEgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IHlJbmNyZW1lbnQgPSBwYXJzZUludCh5KSArIGk7XG4gICAgICAgICAgICBsZXQgY29sb3JDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0ke3lJbmNyZW1lbnR9YCk7XG4gICAgICAgICAgICBjb2xvckNlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNoaXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVHYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC1mYWN0b3J5JztcblxuLy8gRWFjaCBwbGF5ZXIgaGFzIHRoZWlyIG93biBnYW1lYm9hcmQsIGEgZnVuY3Rpb24gdG8gcGxhY2UgYSBzaGlwLCBhIGZ1bmN0aW9uIHRvIGF0dGFjaywgYW5kIGFuXG4vLyBhcnJheSBjb250YWluaW5nIHRoZWlyIHNoaXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuICAgY29uc3QgYkZhY3RvcnkgPSBjcmVhdGVHYW1lQm9hcmQoKTsgLy8gVGhlIGJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG5cbiAgIGZ1bmN0aW9uIHBsYWNlKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICBiRmFjdG9yeS5wbGFjZVNoaXAobGVuZ3RoLCBheGlzLCB4LCB5KTtcbiAgIH1cbiAgIFxuICAgZnVuY3Rpb24gYXR0YWNrZWQoeCwgeSkge1xuICAgICBiRmFjdG9yeS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgfVxuXG4gICByZXR1cm4ge1xuICAgIGJGYWN0b3J5LCBcbiAgICBwbGFjZSxcbiAgICBhdHRhY2tlZFxuICAgfTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgsIGFycmF5KSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhcnJheTtcbiAgICBsZXQgaGl0cyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoZmFsc2UpOyAvLyBGaWxsIHRoZSBoaXRzIGFycmF5IHdpdGggZmFsc2UgdmFsdWVzLlxuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gIFxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgLy8gRmluZCB0aGUgbmV4dCBhdmFpbGFibGUgaGl0IHRoYXQgaXMgZmFsc2UgYW5kIG1ha2UgaXQgdHJ1ZSBhbmQgdGhlbiBicmVhayB0aGUgbG9vcC5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZihoaXRzW2ldID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaGl0c1tpXSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIGhpdHMgYXJyYXkgaXMgdHJ1ZS5cbiAgICAgICAgaWYgKGhpdHMuZXZlcnkoaGl0ID0+IGhpdCkpIHtcbiAgICAgICAgICBzdW5rID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRIaXRzKCkge1xuICAgICAgcmV0dXJuIGhpdHMuc2xpY2UoKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGhpdCxcbiAgICAgIGdldExlbmd0aCxcbiAgICAgIGdldEhpdHMsXG4gICAgICBpc1N1bmssXG4gICAgICBjb29yZGluYXRlc1xuICAgIH07XG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=