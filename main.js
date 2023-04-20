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
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n}\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit {\n    background-color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n}\n\n.enemy-cell {\n    height: 50px;\n    width: 50px;\n    background-color: red;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit {\n    background-color: black;\n}"],"sourceRoot":""}]);
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





let one = ""; // player one
let two = ""; // player two
let main = ""; // main container (content)
let board = ""; // board container
let upper = ""; // upper container

function setupDOM(content, playerOne, playerTwo) {
    one = playerOne;
    two = playerTwo;
    main = content;

    const upperContainer = document.createElement('upper-container');
    upper = upperContainer;
    const startButton = document.createElement('button');
    startButton.textContent = "Start Game";

    startButton.addEventListener('click', () => {
        startButtonEvent(startButton);
    })
    
    const boardContainer = document.createElement('board-container');
    board = boardContainer;
    upperContainer.appendChild(startButton);
    content.appendChild(upperContainer);
    content.appendChild(boardContainer);
}

function axisSwap(axis) {
    if(axis == 'x')
        return 'y';
    else return 'x';
}

function startButtonEvent(startButton) {
    // Remove the start button
    upper.removeChild(startButton);

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
        if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_1__["default"])(two)) {
            handleGameOver("Player One", one);
        }
        else {
            // AI turn occurs after the player turn.
            (0,_main_phase__WEBPACK_IMPORTED_MODULE_2__.aiMainPhase)(one);

            // Check if player two wins.
            if((0,_game_over_check__WEBPACK_IMPORTED_MODULE_1__["default"])(one)) {
                handleGameOver("Player Two", two);
            }
        }
    }
}

// Passes the ai player object, the ai tile id, and the ai tile.
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
function gameOverCheck(player) {
    let count = 0;

    for(let i = 0; i < player.bFactory.ships.length; i++) {
        if(player.bFactory.ships[i].isSunk()) {
            count++;
        }
    }
    if(count == 5) return true;

    return false;
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
            if(outOfBounds > 9)
                return null;
        } else if(axis === 'y') {
            let outOfBounds = parseInt(y) + length;
            if(outOfBounds > 9)
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

    return {
        board,
        ships,
        occupiedSpaces,
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

        if(opponent.bFactory.board[x][y] === 'miss')
            tile.classList.add('miss'); // if miss, add class 'miss' for styling
        else
            tile.classList.add('hit'); // if hit, add class 'hit' for styling
        resolve();
        });
}

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

    if(opponent.bFactory.board[x][y] === 'miss')
        tile.classList.add('miss');
    else
        tile.classList.add('hit');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLHVEQUF1RCxXQUFXLEVBQUUsRUFBRTtBQUN0RTtBQUNBLFVBQVU7QUFDVjtBQUNBLHVEQUF1RCxFQUFFLEVBQUUsV0FBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckZzRDs7QUFFdEQ7QUFDQTtBQUNlO0FBQ2Ysb0JBQW9CLG1FQUFlLElBQUk7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1hbmQtZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1vdmVyLWNoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lc3RhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4tcGhhc2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZS1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtZmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5udW1iZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5sZXR0ZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmVuZW15LWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5udW1iZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5sZXR0ZXItY2VsbCB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5wbGF5ZXItc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7IC8vIFRoZSB0YWJsZSB0byBob2xkIHRoZSBib2FyZC5cbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5iRmFjdG9yeS5ib2FyZDsgLy8gVGhlIGJvYXJkIGFycmF5LlxuXG4gICAgY29uc3QgbnVtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpOyAvLyBUbyBob2xkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgbnVtUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgLy8gQWRkIGFuIGVtcHR5IGNlbGwgdG8gdGhlIGxlZnQgb2YgdGhlIG51bWJlcnMgYW5kIGFib3ZlIHRoZSBsZXR0ZXJzLlxuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBlbXB0eUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHktY2VsbCcpO1xuICAgIG51bVJvdy5hcHBlbmRDaGlsZChlbXB0eUNlbGwpO1xuXG4gICAgLy8gTG9vcCB0byBhZGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtYmVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLWNlbGxcIik7XG4gICAgICAgIG51bWJlckNlbGwudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICAgICAgbnVtUm93LmFwcGVuZENoaWxkKG51bWJlckNlbGwpO1xuICAgIH1cbiAgICBcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChudW1Sb3cpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGxldHRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGxldHRlckNlbGwuY2xhc3NMaXN0LmFkZCgnbGV0dGVyLWNlbGwnKTtcbiAgICAgICAgbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChsZXR0ZXJDZWxsKTtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gai50b1N0cmluZygpICsgaS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFbmVteUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAvLyBUaGUgdGFibGUgdG8gaG9sZCB0aGUgYm9hcmQuXG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuYkZhY3RvcnkuYm9hcmQ7IC8vIFRoZSBib2FyZCBhcnJheS5cblxuICAgIGNvbnN0IG51bVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTsgLy8gVG8gaG9sZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIG51bVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIC8vIEFkZCBhbiBlbXB0eSBjZWxsIHRvIHRoZSBsZWZ0IG9mIHRoZSBudW1iZXJzIGFuZCBhYm92ZSB0aGUgbGV0dGVycy5cbiAgICBjb25zdCBlbXB0eUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgZW1wdHlDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWNlbGwnKTtcbiAgICBudW1Sb3cuYXBwZW5kQ2hpbGQoZW1wdHlDZWxsKTtcblxuICAgIC8vIExvb3AgdG8gYWRkIHRoZSBudW1iZXIgcm93IGFib3ZlIHRoZSBnYW1lYm9hcmQuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG51bWJlckNlbGwuY2xhc3NMaXN0LmFkZChcIm51bWJlci1jZWxsXCIpO1xuICAgICAgICBudW1iZXJDZWxsLnRleHRDb250ZW50ID0gaSArIDE7XG4gICAgICAgIG51bVJvdy5hcHBlbmRDaGlsZChudW1iZXJDZWxsKTtcbiAgICB9XG4gICAgXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobnVtUm93KTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgICAgICBjb25zdCBsZXR0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBsZXR0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2xldHRlci1jZWxsJyk7XG4gICAgICAgIGxldHRlckNlbGwudGV4dENvbnRlbnQgPSBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGV0dGVyQ2VsbCk7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFwiZVwiICsgai50b1N0cmluZygpICsgaS50b1N0cmluZygpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgY29vcmQpO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0YWJsZTtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIGRpc3BsYXlFbmVteUJvYXJkIH0gZnJvbSBcIi4vZGlzcGxheS1ib2FyZFwiO1xuaW1wb3J0IGdhbWVPdmVyQ2hlY2sgZnJvbSBcIi4vZ2FtZS1vdmVyLWNoZWNrXCI7XG5pbXBvcnQgeyBwbGF5ZXJNYWluUGhhc2UsIGFpTWFpblBoYXNlIH0gZnJvbSBcIi4vbWFpbi1waGFzZVwiO1xuaW1wb3J0IHsgYWlQbGFjZVBoYXNlLCBwbGFjZVBoYXNlIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcblxubGV0IG9uZSA9IFwiXCI7IC8vIHBsYXllciBvbmVcbmxldCB0d28gPSBcIlwiOyAvLyBwbGF5ZXIgdHdvXG5sZXQgbWFpbiA9IFwiXCI7IC8vIG1haW4gY29udGFpbmVyIChjb250ZW50KVxubGV0IGJvYXJkID0gXCJcIjsgLy8gYm9hcmQgY29udGFpbmVyXG5sZXQgdXBwZXIgPSBcIlwiOyAvLyB1cHBlciBjb250YWluZXJcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gICAgb25lID0gcGxheWVyT25lO1xuICAgIHR3byA9IHBsYXllclR3bztcbiAgICBtYWluID0gY29udGVudDtcblxuICAgIGNvbnN0IHVwcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndXBwZXItY29udGFpbmVyJyk7XG4gICAgdXBwZXIgPSB1cHBlckNvbnRhaW5lcjtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRCdXR0b25FdmVudChzdGFydEJ1dHRvbik7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGJvYXJkID0gYm9hcmRDb250YWluZXI7XG4gICAgdXBwZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBheGlzU3dhcChheGlzKSB7XG4gICAgaWYoYXhpcyA9PSAneCcpXG4gICAgICAgIHJldHVybiAneSc7XG4gICAgZWxzZSByZXR1cm4gJ3gnO1xufVxuXG5mdW5jdGlvbiBzdGFydEJ1dHRvbkV2ZW50KHN0YXJ0QnV0dG9uKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzdGFydCBidXR0b25cbiAgICB1cHBlci5yZW1vdmVDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAvLyBEZXNjcmlwdG9yXG4gICAgbGV0IHBsYWNlU2hpcHNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLmlkID0gJ2hlYWRlci1kZXNjcmlwdGlvbic7XG4gICAgcGxhY2VTaGlwc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBZb3VyIFNoaXBzXCI7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc0Rlc2NyaXB0aW9uKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIHBsYXllcidzIGdyaWQgdG8gcGxhY2Ugc2hpcHMuXG4gICAgY29uc3QgZ3JpZFBsYXllck9uZSA9IGRpc3BsYXlCb2FyZChvbmUpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdyaWRQbGF5ZXJPbmUpO1xuXG4gICAgcGxhY2VTaGlwc0V2ZW50KCk7XG59XG5cbmxldCBheGlzID0gJ3gnOyAvLyBkZWZhdWx0IGF4aXMgZm9yIHBsYWNpbmcgc2hpcHNcblxuZnVuY3Rpb24gaGFuZGxlUGxhY2VTaGlwcyhldmVudCkge1xuICAgIGxldCBzaGlwcyA9IG9uZS5iRmFjdG9yeS5zaGlwcztcbiAgICBsZXQgbGVuZ3RoID0gMjsgLy8gVGhlIGZpcnN0IHNoaXAgaXMgdGhlIHBhdHJvbCBib2F0LlxuXG4gICAgaWYoc2hpcHMubGVuZ3RoID09IDApXG4gICAgICBsZW5ndGggPSAyOyAvLyBwbGFjZSB0aGUgcGF0cm9sIGJvYXRcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAxKSBcbiAgICAgIGxlbmd0aCA9IDM7IC8vIHBsYWNlIHRoZSBzdWJtYXJpbmVcbiAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAyKVxuICAgICAgbGVuZ3RoID0gMzsgLy8gcGxhY2UgdGhlIGRlc3Ryb3llclxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDMpXG4gICAgICBsZW5ndGggPSA0OyAvLyBwbGFjZSB0aGUgYmF0dGxlc2hpcFxuICAgIGVsc2UgaWYoc2hpcHMubGVuZ3RoID09IDQpXG4gICAgICBsZW5ndGggPSA1OyAvLyBwbGFjZSB0aGUgY2FycmllclxuICBcbiAgICBpZihzaGlwcy5sZW5ndGggPCA1KVxuICAgICAgcGxhY2VQaGFzZShvbmUsIGV2ZW50LnRhcmdldC5pZCwgYXhpcywgbGVuZ3RoKTtcbiAgXG4gICAgaWYoc2hpcHMubGVuZ3RoID09IDUpIHtcbiAgICAgIGFpUGxhY2VQaGFzZSh0d28pOyAvLyBBSSBwbGFjZXMgc2hpcHMgcmFuZG9tbHlcbiAgICAgIGNvbnN0IHBsYXllclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICAgIHBsYXllclRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBsYWNlU2hpcHMpO1xuICAgICAgfSlcbiAgICAgIG1haW5QaGFzZUV2ZW50KCk7XG4gICAgfVxufVxuICBcbmZ1bmN0aW9uIHBsYWNlU2hpcHNFdmVudCgpIHtcbiAgICAvLyBDbGljayB0byBjaGFuZ2UgdGhlIGF4aXMgdGhlIHBsYXllciB3aXNoZXMgdG8gcGxhY2UgaGlzIHNoaXBzLlxuICAgIGxldCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi5pZCA9ICdheGlzLWJ1dHRvbic7XG4gICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dhcCBBeGlzXCI7XG4gICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGF4aXMgPSBheGlzU3dhcChheGlzKSk7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG4gIFxuICAgIC8vIEdldCBhbGwgdGhlIHRpbGVzIGFuZCBjcmVhdGUgYSBjbGljayBldmVudC5cbiAgICBjb25zdCBwbGF5ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgcGxheWVyVGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGFjZVNoaXBzKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWluUGhhc2VFdmVudCgpIHtcbiAgICBsZXQgYXhpc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdheGlzLWJ1dHRvbicpO1xuICAgIHVwcGVyLnJlbW92ZUNoaWxkKGF4aXNCdXR0b24pO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0Nob29zZSBhIFRpbGUgdG8gU3RyaWtlJztcblxuICAgIGNvbnN0IGdyaWRQbGF5ZXJUd28gPSBkaXNwbGF5RW5lbXlCb2FyZCh0d28pO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGdyaWRQbGF5ZXJUd28pO1xuXG4gICAgY29uc3QgZW5lbXlUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jZWxsJyk7XG4gICAgZW5lbXlUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWFpblBoYXNlKTtcbiAgICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1haW5QaGFzZShldmVudCkge1xuICAgIC8vIERvbid0IGluY3JlbWVudCB0aGUgdHVybiBpZiB0aGUgcGxheWVyIGlzIGhpdHRpbmcgdGhlIHNhbWUgc3F1YXJlLlxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSk7XG4gICAgZWxzZSB7XG4gICAgICAgIHdhaXRGb3JQbGF5ZXJQaGFzZShldmVudCk7IC8vIHdhaXQgZm9yIHRoZSBwbGF5ZXIgdHVyblxuXG4gICAgICAgIC8vIENoZWNrIGlmIHBsYXllciBvbmUgd2lucy5cbiAgICAgICAgaWYoZ2FtZU92ZXJDaGVjayh0d28pKSB7XG4gICAgICAgICAgICBoYW5kbGVHYW1lT3ZlcihcIlBsYXllciBPbmVcIiwgb25lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFJIHR1cm4gb2NjdXJzIGFmdGVyIHRoZSBwbGF5ZXIgdHVybi5cbiAgICAgICAgICAgIGFpTWFpblBoYXNlKG9uZSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHBsYXllciB0d28gd2lucy5cbiAgICAgICAgICAgIGlmKGdhbWVPdmVyQ2hlY2sob25lKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUdhbWVPdmVyKFwiUGxheWVyIFR3b1wiLCB0d28pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQYXNzZXMgdGhlIGFpIHBsYXllciBvYmplY3QsIHRoZSBhaSB0aWxlIGlkLCBhbmQgdGhlIGFpIHRpbGUuXG5hc3luYyBmdW5jdGlvbiB3YWl0Rm9yUGxheWVyUGhhc2UoZXZlbnQpIHtcbiAgICBhd2FpdCBwbGF5ZXJNYWluUGhhc2UodHdvLCBldmVudC50YXJnZXQuaWQsIGV2ZW50LnRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdhbWVPdmVyKHdpbm5lciwgd2lubmVyT2JqZWN0KSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItZGVzY3JpcHRpb24nKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVGhlIHdpbm5lciBpcyAnICsgd2lubmVyICsgJyEnO1xuXG4gICAgY29uc3Qgb2NjdXBpZWRTcGFjZXMgPSB3aW5uZXJPYmplY3QuYkZhY3Rvcnkub2NjdXBpZWRTcGFjZXM7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgdGhlIGNvb3JkaW5hdGVzIHdpdGggYSBzaGlwLlxuICAgIG9jY3VwaWVkU3BhY2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSBcIlwiO1xuICAgICAgICBpZih3aW5uZXIgPT0gXCJQbGF5ZXIgVHdvXCIpXG4gICAgICAgICAgICB0aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGUke2l0ZW19YCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtfWApO1xuICAgICAgICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB0aWxlIHRvIHNob3cgdGhlIGxvc2VyIHRoZSBsb2NhdGlvbiBvZiB0aGUgZW5lbXkgc2hpcHMuXG4gICAgICAgIGlmKCF0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5ZXItc2hpcCcpKVxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcCcpO1xuICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHRpbGUuXG4gICAgY29uc3QgZW5lbXlUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS1jZWxsJyk7XG4gICAgZW5lbXlUaWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWFpblBoYXNlKTtcbiAgICAgIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXJDaGVjayhwbGF5ZXIpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllci5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihwbGF5ZXIuYkZhY3Rvcnkuc2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYoY291bnQgPT0gNSkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXAtZmFjdG9yeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IG5ldyBBcnJheSgxMCk7XG4gICAgZ2VuZXJhdGVCb2FyZChib2FyZCk7XG4gICAgbGV0IHNoaXBzID0gbmV3IEFycmF5KCk7XG4gICAgbGV0IG9jY3VwaWVkU3BhY2VzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gMTAgYnkgMTAgYXJyYXlcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZ2l2ZW4gc3BhY2UgaXMgb2NjdXBpZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgZnVuY3Rpb24gaXNPY2N1cGllZFNwYWNlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIG9jY3VwaWVkU3BhY2VzLmhhcyhgJHt4fSR7eX1gKTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGZvciBhIHNoaXAgcGxhY2VkIG91dCBvZiBib3VuZHMuIEZ1bmN0aW9uIHJldHVybnMgbnVsbCBpZiBvdXQgb2YgYm91bmRzLlxuICAgIGZ1bmN0aW9uIG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHgpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiA5KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZHMgPSBwYXJzZUludCh5KSArIGxlbmd0aDtcbiAgICAgICAgICAgIGlmKG91dE9mQm91bmRzID4gOSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFwibGVuZ3RoXCIgaXMgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cbiAgICAvLyBcImF4aXNcIiBpcyB0aGUgYXhpcyB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZC5cbiAgICAvLyBcInhcIiBhbmQgXCJ5XCIgYXJlIHRoZSBzdGFydGluZyB4IGFuZCB5IGNvb3JkaW5hdGVzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChsZW5ndGgsIGF4aXMsIHgsIHkpIHtcbiAgICAgICAgLy8gVGVzdCBvdXQgb2YgYm91bmRzLlxuICAgICAgICBpZihvdXRPZkJvdW5kcyhsZW5ndGgsIGF4aXMsIHgsIHkpID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT3V0IG9mIGJvdW5kcy4nKTtcbiAgICAgICAgICAgIHJldHVybiBzaGlwczsgLy8gcmV0dXJuIHNoaXBzIHdpdGhvdXQgY3JlYXRpbmcgYW55dGhpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGlwUG9zaXRpb24gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgeEluY3JlbWVudCA9IHBhcnNlSW50KHgpICsgaTtcbiAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHNwYWNlIGlzIG9jY3VwaWVkLlxuICAgICAgICAgICAgICAgIGlmKGlzT2NjdXBpZWRTcGFjZSh4SW5jcmVtZW50LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaXBQb3NpdGlvbltpXSA9IGAke3hJbmNyZW1lbnR9JHt5fWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYoYXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgbGV0IHlJbmNyZW1lbnQgPSBwYXJzZUludCh5KSArIGk7XG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHgsIHlJbmNyZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eH0ke3lJbmNyZW1lbnR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IHNoaXAncyBjb29yZGluYXRlcyB0byB0aGUgb2NjdXBpZWRTcGFjZXMgU2V0XG4gICAgICAgIHNoaXBQb3NpdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgb2NjdXBpZWRTcGFjZXMuYWRkKGNvb3JkKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChsZW5ndGgsIHNoaXBQb3NpdGlvbik7IC8vIENyZWF0ZSB0aGUgc2hpcC5cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTsgLy8gUHVzaCB0aGUgbmV3IHNoaXAgb250byB0aGUgc2hpcHMgYXJyYXkuXG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBzaGlwcyBhcnJheS5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIC8vIFJlY2VpdmVzIGFuIHgseSBjb29yZGluYXRlIGZvciBhdHRhY2suXG4gICAgLy8gRGV0ZXJtaW5lcyBpZiB0aGUgYm9hcmQgY29vcmRpbmF0ZSBoYXMgYSBtaXNzL2hpdCBpbiBpdCBhbHJlYWR5LlxuICAgIC8vIE5lc3RlZCBsb29wcyB0byBnbyB0aHJvdWdoIGVhY2ggc2hpcCdzIGNvb3JkaW5hdGVzLiBcbiAgICAvLyBPKG5ebSkgdGltZSBjb21wbGV4aXR5LiBXaGVyZSBuIGlzIHRoZSBudW1iZXIgb2Ygc2hpcHMgYW5kIG0gaXMgdGhlIHh5IG9mIGVhY2ggc2hpcC5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgbGV0IHh5ID0geC50b1N0cmluZygpICsgeS50b1N0cmluZygpO1xuICAgICAgICBpZihib2FyZFt4XVt5XSkgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldLmNvb3JkaW5hdGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBzW2ldLmNvb3JkaW5hdGVzW2pdID09PSB4eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRbeF1beV0gPSBcImhpdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgb2NjdXBpZWRTcGFjZXMsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICB9O1xufSIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBwbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZSwgZGVmYXVsdFBsYWNlUGhhc2UyIH0gZnJvbSBcIi4vcGxhY2UtcGhhc2VcIjtcbmltcG9ydCB7IG1haW5QaGFzZSwgZGVmYXVsdE1haW5QaGFzZSB9IGZyb20gXCIuL21haW4tcGhhc2VcIjtcbmltcG9ydCB7IHNldHVwRE9NIH0gZnJvbSBcIi4vZG9tLWFuZC1ldmVudC1saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZVN0YXRlKGNvbnRlbnQpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoKTsgLy8gVHdvIHNlcGFyYXRlIGJvYXJkcy5cbiAgICBjb25zdCBwbGF5ZXJUd28gPSBjcmVhdGVQbGF5ZXIoKTtcblxuICAgIHNldHVwRE9NKGNvbnRlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICAgIC8vIEZ1bmN0aW9ucyB0byBoZWxwIHRlc3QgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgd29ya3Mgb3V0c2lkZSBvZiB0aGUgRE9NIGFuZCBiZWZvcmUgZXZlbnQgbGlzdGVuZXJzLlxuICAgIC8vIGRlZmF1bHRQbGFjZVBoYXNlKHBsYXllck9uZSk7XG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UyKHBsYXllclR3byk7XG4gICAgLy8gZGVmYXVsdE1haW5QaGFzZShwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZVN0YXRlIGZyb20gJy4vZ2FtZXN0YXRlJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb250ZW50Jyk7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5nYW1lU3RhdGUoY29udGVudCk7IiwiaW1wb3J0IGdhbWVPdmVyQ2hlY2sgZnJvbSBcIi4vZ2FtZS1vdmVyLWNoZWNrXCI7XG5cbi8vIEZ1bmN0aW9uIGF0dGFja3MgdGhlIG9wcG9uZW50J3MgdGlsZS4gQSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgdGlsZSB0byBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzXG4vLyB2aWEgQ1NTLiBUaGUgQUkgdGlsZSBpZCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgcGxheWVyJ3MuIEl0IGlzIGluIHRoZSBmb3JtYXQ6IGUwMCwgZTAxIC4uLiBlOTgsIGU5OVxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1haW5QaGFzZShvcHBvbmVudCwgaWQsIHRpbGUpIHtcbiAgICAvLyBXcmFwIHRoZSBjb2RlIGluIGEgcHJvbWlzZSwgc28gdGhlIGFpTWFpblBoYXNlIHdhaXRzIGZvciB0aGUgcGxheWVyTWFpblBoYXNlLlxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChpZC5jaGFyQXQoMSkpOyAvLyBnZXQgY29vcmRpbmF0ZXMgZnJvbSB0aWxlIGlkXG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoaWQuY2hhckF0KDIpKTtcblxuICAgICAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTsgLy8gYXR0YWNrIHRoZSBlbmVteSBwbGF5ZXJcblxuICAgICAgICBpZihvcHBvbmVudC5iRmFjdG9yeS5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKVxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7IC8vIGlmIG1pc3MsIGFkZCBjbGFzcyAnbWlzcycgZm9yIHN0eWxpbmdcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTsgLy8gaWYgaGl0LCBhZGQgY2xhc3MgJ2hpdCcgZm9yIHN0eWxpbmdcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFpTWFpblBoYXNlKG9wcG9uZW50KSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IHRpbGU7XG5cbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IC8vIGdldCByYW5kb20geCB5IGNvb3JkaW5hdGVzXG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eX1gKTsgLy8gZmluZCB0aGUgY29ycmVzcG9uZGluZyB0aWxlXG5cbiAgICAgICAgLy8gVGhlIEFJIHdpbGwgY29udGludWUgdG8gZmluZCBjb29yZGluYXRlcyB1bnRpbCBpdCBmaW5kcyBhIHNwYWNlIGl0IGhhcyBub3QgdGFyZ2V0ZWQuXG4gICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgfHwgdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcbiAgICAgICAgZWxzZSBicmVhaztcbiAgICB9XG4gICAgXG5cbiAgICBvcHBvbmVudC5hdHRhY2tlZCh4LCB5KTtcblxuICAgIGlmKG9wcG9uZW50LmJGYWN0b3J5LmJvYXJkW3hdW3ldID09PSAnbWlzcycpXG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIGVsc2VcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbn1cblxuLy8gVG8gaGVscCB0ZXN0IHRoZSBnYW1lIGxvZ2ljIHdpdGhvdXQgdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWFpblBoYXNlKG9uZSwgdHdvKSB7XG4gICAgdHdvLmF0dGFja2VkKDAsIDApOyAvLyBwYXRyb2xcbiAgICB0d28uYXR0YWNrZWQoMSwgMCk7XG5cbiAgICB0d28uYXR0YWNrZWQoMSwgMSk7IC8vIHN1YlxuICAgIHR3by5hdHRhY2tlZCgyLCAxKTtcbiAgICB0d28uYXR0YWNrZWQoMywgMSk7XG5cbiAgICB0d28uYXR0YWNrZWQoMiwgMik7IC8vIGRlc3Ryb3llclxuICAgIHR3by5hdHRhY2tlZCgzLCAyKTtcbiAgICB0d28uYXR0YWNrZWQoNCwgMik7XG5cbiAgICB0d28uYXR0YWNrZWQoMywgMyk7IC8vIGJhdHRsZXNoaXBcbiAgICB0d28uYXR0YWNrZWQoNCwgMyk7XG4gICAgdHdvLmF0dGFja2VkKDUsIDMpO1xuICAgIHR3by5hdHRhY2tlZCg2LCAzKTtcblxuICAgIHR3by5hdHRhY2tlZCg0LCA0KTsgLy8gY2FycmllclxuICAgIHR3by5hdHRhY2tlZCg1LCA0KTsgIFxuICAgIHR3by5hdHRhY2tlZCg2LCA0KTsgIFxuICAgIHR3by5hdHRhY2tlZCg3LCA0KTsgIFxuICAgIHR3by5hdHRhY2tlZCg4LCA0KTtcblxuICAgIGlmKGdhbWVPdmVyQ2hlY2sob25lKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBnYW1lIGlzIG92ZXIuIFBsYXllciB0d28gd2lucy5cIik7XG4gICAgfVxuICAgIGVsc2UgaWYoZ2FtZU92ZXJDaGVjayh0d28pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGdhbWUgaXMgb3Zlci4gUGxheWVyIG9uZSB3aW5zLlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gb25lIHdvbi4gU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIpO1xuICAgIH1cbn0iLCIvLyBUYWtlIHRoZSBwbGF5ZXIncyBib2FyZCwgdGhlIHRpbGUgaWQsIHRoZSBheGlzIHRvIHBsYWNlIHRoZSBzaGlwLCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcC5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVBoYXNlKG9uZSwgaWQsIGF4aXMsIGxlbmd0aCkge1xuICAgIGxldCBzaGlwTnVtYmVyID0gb25lLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gZ2V0IHRoZSBudW1iZXIgb2Ygc2hpcHNcbiAgICBsZXQgeCA9IGlkLmNoYXJBdCgwKTsgLy8gZ2V0IHggZnJvbSB0aGUgdGlsZSBpZFxuICAgIGxldCB5ID0gaWQuY2hhckF0KDEpOyAvLyBnZXQgeSBmcm9tIHRoZSB0aWxlIGlkXG4gICAgb25lLnBsYWNlKGxlbmd0aCwgYXhpcywgeCwgeSk7IC8vIHBsYWNlIHRoZSBzaGlwXG4gICAgbGV0IG5ld1NoaXBOdW1iZXIgPSBvbmUuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBnZXQgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHNcblxuICAgIC8vIElmIHRoZSBuZXcgbnVtYmVyIG9mIHNoaXBzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgb2xkIG51bWJlciwgdGhlIHNoaXAgd2FzIHN1Y2Nlc3NmdWxseSBwbGFjZWQgYW5kXG4gICAgLy8gY2FuIGJlIGNvbG9yZWQuXG4gICAgaWYobmV3U2hpcE51bWJlciA+IHNoaXBOdW1iZXIpXG4gICAgICAgIGNvbG9yU2hpcChsZW5ndGgsIGF4aXMsIHgsIHkpO1xufVxuXG4vLyBUbyBoZWxwIHRlc3QgdGhlIGdhbWUgc3RhdGUgd2l0aG91dCB0aGUgdXNlIG9mIHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFBsYWNlUGhhc2Uob25lKSB7XG4gICAgb25lLnBsYWNlKDIsICd4JywgMCwgMCk7IC8vIHNoaXAgb2YgbGVuZ3RoIDIgb24gdGhlICd4JyBheGlzIGF0IGNvb3JkaW5hdGU6IDAsMFxuICAgIG9uZS5wbGFjZSgzLCAneCcsIDEsIDEpO1xuICAgIG9uZS5wbGFjZSgzLCAneCcsIDIsIDIpO1xuICAgIG9uZS5wbGFjZSg0LCAneCcsIDMsIDMpO1xuICAgIG9uZS5wbGFjZSg1LCAneCcsIDQsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFBsYWNlUGhhc2UyKHR3bykge1xuICAgIHR3by5wbGFjZSgyLCAneCcsIDAsIDApOyAvLyBzaGlwIG9mIGxlbmd0aCAyIG9uIHRoZSAneCcgYXhpcyBhdCBjb29yZGluYXRlOiAwLDBcbiAgICB0d28ucGxhY2UoMywgJ3gnLCAxLCAxKTtcbiAgICB0d28ucGxhY2UoMywgJ3gnLCAyLCAyKTtcbiAgICB0d28ucGxhY2UoNCwgJ3gnLCAzLCAzKTtcbiAgICB0d28ucGxhY2UoNSwgJ3gnLCA0LCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFpUGxhY2VQaGFzZSh0d28pIHtcbiAgXG4gICAgLy8gQXJyYXkgb2Ygc2hpcCBsZW5ndGhzIHRvIHJhbmRvbWx5IGNob29zZSBmcm9tXG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbMiwgMywgMywgNCwgNV07XG4gIFxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgc2hpcCBsZW5ndGhzIGFuZCBwbGFjZSBlYWNoIHNoaXBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hpcE51bWJlciA9IHR3by5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIEdldCB0aGUgbnVtYmVyIG9mIHNoaXBzIGluIHRoZSBwbGF5ZXIgb2JqZWN0XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwTGVuZ3Roc1tpXTtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ3gnIDogJ3knO1xuICBcblxuICAgICAgLy8gVGhpcyBsb29wIGVuc3VyZXMgYSBzaGlwIGlzIGJlaW5nIHBsYWNlZCBvbiB0aGUgYm9hcmQuXG4gICAgICAvLyBJZiB0aGUgcGxhY2UgZnVuY3Rpb24gaXMgZmVkIGNvb3JkaW5hdGVzIG9mIGFuIG9jY3VwaWVkIHNwYWNlLCBhIHNoaXAgd2lsbCBub3QgYmUgcGxhY2VkLlxuICAgICAgLy8gVGhpcyBsb29wIHdpbGwgcmVwZWF0IHVudGlsIHRoZSBudW1iZXIgb2Ygc2hpcHMgcGxhY2VkIGhhcyBpbmNyZWFzZWQuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgeCwgeTtcblxuICAgICAgICAvLyBEZXBlbmRpbmcgb24gdGhlIGF4aXMsIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHNoaXAncyBzdGFydGluZyBjb29yZGluYXRlIHdpbGwgdmFyeVxuICAgICAgICAvLyBieSB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIGJlaW5nIHBsYWNlZC5cbiAgICAgICAgaWYoYXhpcyA9PSAneCcpIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBsZW5ndGgpKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0d28ucGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KTtcbiAgXG4gICAgICAgIGxldCBuZXdTaGlwTnVtYmVyID0gdHdvLmJGYWN0b3J5LnNoaXBzLmxlbmd0aDsgLy8gR2V0IHRoZSBuZXcgbnVtYmVyIG9mIHNoaXBzXG4gIFxuICAgICAgICBpZiAobmV3U2hpcE51bWJlciA+IHNoaXBOdW1iZXIpIHtcbiAgICAgICAgICAgIGJyZWFrOyAvLyBFeGl0IHRoZSBsb29wIGlmIHRoZSBuZXcgbnVtYmVyIG9mIHNoaXBzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgb2xkIG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi8vIGxlbmd0aCwgYXhpcywgeCBzdGFydGluZyBjb29yZGluYXRlLCB5IHN0YXJ0aW5nIGNvb3JkaW5hdGVcbi8vIGFkZGluZyBhIGNsYXNzIHRvIHN0eWxlIHRoZSB0aWxlcyB3aXRoIHNoaXBzXG5leHBvcnQgZnVuY3Rpb24gY29sb3JTaGlwKGwsIGEsIHgsIHkpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGEgPT09ICd4Jykge1xuICAgICAgICAgICAgbGV0IHhJbmNyZW1lbnQgPSBwYXJzZUludCh4KSArIGk7XG4gICAgICAgICAgICBsZXQgY29sb3JDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eEluY3JlbWVudH0ke3l9YCk7XG4gICAgICAgICAgICBjb2xvckNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zaGlwXCIpO1xuICAgICAgICB9IGVsc2UgaWYoYSA9PT0gJ3knKSB7XG4gICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eUluY3JlbWVudH1gKTtcbiAgICAgICAgICAgIGNvbG9yQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLWZhY3RvcnknO1xuXG4vLyBFYWNoIHBsYXllciBoYXMgdGhlaXIgb3duIGdhbWVib2FyZCwgYSBmdW5jdGlvbiB0byBwbGFjZSBhIHNoaXAsIGEgZnVuY3Rpb24gdG8gYXR0YWNrLCBhbmQgYW5cbi8vIGFycmF5IGNvbnRhaW5pbmcgdGhlaXIgc2hpcHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIoKSB7XG4gICBjb25zdCBiRmFjdG9yeSA9IGNyZWF0ZUdhbWVCb2FyZCgpOyAvLyBUaGUgYm9hcmQgZmFjdG9yeSBmdW5jdGlvbi5cblxuICAgZnVuY3Rpb24gcGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KSB7XG4gICAgIGJGYWN0b3J5LnBsYWNlU2hpcChsZW5ndGgsIGF4aXMsIHgsIHkpO1xuICAgfVxuICAgXG4gICBmdW5jdGlvbiBhdHRhY2tlZCh4LCB5KSB7XG4gICAgIGJGYWN0b3J5LnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICB9XG5cbiAgIHJldHVybiB7XG4gICAgYkZhY3RvcnksIFxuICAgIHBsYWNlLFxuICAgIGF0dGFja2VkXG4gICB9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCwgYXJyYXkpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGFycmF5O1xuICAgIGxldCBoaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7IC8vIEZpbGwgdGhlIGhpdHMgYXJyYXkgd2l0aCBmYWxzZSB2YWx1ZXMuXG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBuZXh0IGF2YWlsYWJsZSBoaXQgdGhhdCBpcyBmYWxzZSBhbmQgbWFrZSBpdCB0cnVlIGFuZCB0aGVuIGJyZWFrIHRoZSBsb29wLlxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKGhpdHNbaV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBoaXRzW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgZXZlcnkgZWxlbWVudCBpbiB0aGUgaGl0cyBhcnJheSBpcyB0cnVlLlxuICAgICAgICBpZiAoaGl0cy5ldmVyeShoaXQgPT4gaGl0KSkge1xuICAgICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0cy5zbGljZSgpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgaGl0LFxuICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgZ2V0SGl0cyxcbiAgICAgIGlzU3VuayxcbiAgICAgIGNvb3JkaW5hdGVzXG4gICAgfTtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==