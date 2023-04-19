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
___CSS_LOADER_EXPORT___.push([module.id, ".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".cell {\n    height: 50px;\n    width: 50px;\n    background-color: blue;\n}\n\n.number-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n.letter-cell {\n    height: 50px;\n    width: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\nboard-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.player-ship {\n    background-color: gold;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ displayBoard)
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
/* harmony import */ var _main_phase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-phase */ "./src/main-phase.js");
/* harmony import */ var _place_phase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-phase */ "./src/place-phase.js");




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
    placeShipsDescription.textContent = "Place Your Ships";
    upper.appendChild(placeShipsDescription);

    // Display the player's grid to place ships.
    const gridPlayerOne = (0,_display_board__WEBPACK_IMPORTED_MODULE_0__["default"])(one);
    board.appendChild(gridPlayerOne);

    placeShipsEvent();
}

function placeShipsEvent() {
    let axis = 'x'; // default axis for placing ships
    let length = 2; // The first ship to place is the patrol ship.

    // Click to change the axis the player wishes to place his ships.
    let axisButton = document.createElement('button');
    axisButton.textContent = "Swap Axis";
    axisButton.addEventListener('click', () => axis = axisSwap(axis));
    upper.appendChild(axisButton);

    // Get all the tiles and create a click event.
    const playerTiles = document.querySelectorAll('.cell');
    playerTiles.forEach(tile => {
        tile.addEventListener('click', (event) => {
            let ships = one.bFactory.ships;
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
            else;
                (0,_main_phase__WEBPACK_IMPORTED_MODULE_1__.mainPhase)(); // remember to remove all the event listeners for the tiles before adding ones

            (0,_place_phase__WEBPACK_IMPORTED_MODULE_2__.placePhase)(one, event.target.id, axis, length);
        })
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
    for(let i = 0; i < player.bFactory.ships.length; i++) {
        if(player.bFactory.ships[i].isSunk()) {
            return true;
        }
    }
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
/* harmony export */   "defaultMainPhase": () => (/* binding */ defaultMainPhase),
/* harmony export */   "mainPhase": () => (/* binding */ mainPhase)
/* harmony export */ });
/* harmony import */ var _game_over_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-over-check */ "./src/game-over-check.js");


function mainPhase() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLWFuZC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLW92ZXItY2hlY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVzdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi1waGFzZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlLXBoYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC1mYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubnVtYmVyLWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGV0dGVyLWNlbGwge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ucGxheWVyLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm51bWJlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmxldHRlci1jZWxsIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuXFxuYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnBsYXllci1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTsgLy8gVGhlIHRhYmxlIHRvIGhvbGQgdGhlIGJvYXJkLlxuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJGYWN0b3J5LmJvYXJkOyAvLyBUaGUgYm9hcmQgYXJyYXkuXG5cbiAgICBjb25zdCBudW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7IC8vIFRvIGhvbGQgdGhlIG51bWJlciByb3cgYWJvdmUgdGhlIGdhbWVib2FyZC5cbiAgICBudW1Sb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBBZGQgYW4gZW1wdHkgY2VsbCB0byB0aGUgbGVmdCBvZiB0aGUgbnVtYmVycyBhbmQgYWJvdmUgdGhlIGxldHRlcnMuXG4gICAgY29uc3QgZW1wdHlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1jZWxsJyk7XG4gICAgbnVtUm93LmFwcGVuZENoaWxkKGVtcHR5Q2VsbCk7XG5cbiAgICAvLyBMb29wIHRvIGFkZCB0aGUgbnVtYmVyIHJvdyBhYm92ZSB0aGUgZ2FtZWJvYXJkLlxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBudW1iZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBudW1iZXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItY2VsbFwiKTtcbiAgICAgICAgbnVtYmVyQ2VsbC50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICBudW1Sb3cuYXBwZW5kQ2hpbGQobnVtYmVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKG51bVJvdyk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAgICAgY29uc3QgbGV0dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbGV0dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItY2VsbCcpO1xuICAgICAgICBsZXR0ZXJDZWxsLnRleHRDb250ZW50ID0gbGV0dGVyQ2VsbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGxldHRlckNlbGwpO1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBqLnRvU3RyaW5nKCkgKyBpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBjb29yZCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRhYmxlO1xufSIsImltcG9ydCBkaXNwbGF5Qm9hcmQgZnJvbSBcIi4vZGlzcGxheS1ib2FyZFwiO1xuaW1wb3J0IHsgbWFpblBoYXNlIH0gZnJvbSBcIi4vbWFpbi1waGFzZVwiO1xuaW1wb3J0IHsgcGxhY2VQaGFzZSB9IGZyb20gXCIuL3BsYWNlLXBoYXNlXCI7XG5cbmxldCBvbmUgPSBcIlwiOyAvLyBwbGF5ZXIgb25lXG5sZXQgdHdvID0gXCJcIjsgLy8gcGxheWVyIHR3b1xubGV0IG1haW4gPSBcIlwiOyAvLyBtYWluIGNvbnRhaW5lciAoY29udGVudClcbmxldCBib2FyZCA9IFwiXCI7IC8vIGJvYXJkIGNvbnRhaW5lclxubGV0IHVwcGVyID0gXCJcIjsgLy8gdXBwZXIgY29udGFpbmVyXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cERPTShjb250ZW50LCBwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICAgIG9uZSA9IHBsYXllck9uZTtcbiAgICB0d28gPSBwbGF5ZXJUd287XG4gICAgbWFpbiA9IGNvbnRlbnQ7XG5cbiAgICBjb25zdCB1cHBlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VwcGVyLWNvbnRhaW5lcicpO1xuICAgIHVwcGVyID0gdXBwZXJDb250YWluZXI7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0QnV0dG9uRXZlbnQoc3RhcnRCdXR0b24pO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2FyZC1jb250YWluZXInKTtcbiAgICBib2FyZCA9IGJvYXJkQ29udGFpbmVyO1xuICAgIHVwcGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHVwcGVyQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvYXJkQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gYXhpc1N3YXAoYXhpcykge1xuICAgIGlmKGF4aXMgPT0gJ3gnKVxuICAgICAgICByZXR1cm4gJ3knO1xuICAgIGVsc2UgcmV0dXJuICd4Jztcbn1cblxuZnVuY3Rpb24gc3RhcnRCdXR0b25FdmVudChzdGFydEJ1dHRvbikge1xuICAgIC8vIFJlbW92ZSB0aGUgc3RhcnQgYnV0dG9uXG4gICAgdXBwZXIucmVtb3ZlQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG4gICAgLy8gRGVzY3JpcHRvclxuICAgIGxldCBwbGFjZVNoaXBzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBsYWNlU2hpcHNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiUGxhY2UgWW91ciBTaGlwc1wiO1xuICAgIHVwcGVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBEaXNwbGF5IHRoZSBwbGF5ZXIncyBncmlkIHRvIHBsYWNlIHNoaXBzLlxuICAgIGNvbnN0IGdyaWRQbGF5ZXJPbmUgPSBkaXNwbGF5Qm9hcmQob25lKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChncmlkUGxheWVyT25lKTtcblxuICAgIHBsYWNlU2hpcHNFdmVudCgpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzRXZlbnQoKSB7XG4gICAgbGV0IGF4aXMgPSAneCc7IC8vIGRlZmF1bHQgYXhpcyBmb3IgcGxhY2luZyBzaGlwc1xuICAgIGxldCBsZW5ndGggPSAyOyAvLyBUaGUgZmlyc3Qgc2hpcCB0byBwbGFjZSBpcyB0aGUgcGF0cm9sIHNoaXAuXG5cbiAgICAvLyBDbGljayB0byBjaGFuZ2UgdGhlIGF4aXMgdGhlIHBsYXllciB3aXNoZXMgdG8gcGxhY2UgaGlzIHNoaXBzLlxuICAgIGxldCBheGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXhpc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dhcCBBeGlzXCI7XG4gICAgYXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGF4aXMgPSBheGlzU3dhcChheGlzKSk7XG4gICAgdXBwZXIuYXBwZW5kQ2hpbGQoYXhpc0J1dHRvbik7XG5cbiAgICAvLyBHZXQgYWxsIHRoZSB0aWxlcyBhbmQgY3JlYXRlIGEgY2xpY2sgZXZlbnQuXG4gICAgY29uc3QgcGxheWVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIHBsYXllclRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBzaGlwcyA9IG9uZS5iRmFjdG9yeS5zaGlwcztcbiAgICAgICAgICAgIGlmKHNoaXBzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDI7IC8vIHBsYWNlIHRoZSBwYXRyb2wgYm9hdFxuICAgICAgICAgICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMSkgXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMzsgLy8gcGxhY2UgdGhlIHN1Ym1hcmluZVxuICAgICAgICAgICAgZWxzZSBpZihzaGlwcy5sZW5ndGggPT0gMilcbiAgICAgICAgICAgICAgICBsZW5ndGggPSAzOyAvLyBwbGFjZSB0aGUgZGVzdHJveWVyXG4gICAgICAgICAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSAzKVxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDQ7IC8vIHBsYWNlIHRoZSBiYXR0bGVzaGlwXG4gICAgICAgICAgICBlbHNlIGlmKHNoaXBzLmxlbmd0aCA9PSA0KVxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IDU7IC8vIHBsYWNlIHRoZSBjYXJyaWVyXG4gICAgICAgICAgICBlbHNlO1xuICAgICAgICAgICAgICAgIG1haW5QaGFzZSgpOyAvLyByZW1lbWJlciB0byByZW1vdmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSB0aWxlcyBiZWZvcmUgYWRkaW5nIG9uZXNcblxuICAgICAgICAgICAgcGxhY2VQaGFzZShvbmUsIGV2ZW50LnRhcmdldC5pZCwgYXhpcywgbGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVPdmVyQ2hlY2socGxheWVyKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllci5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihwbGF5ZXIuYkZhY3Rvcnkuc2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcC1mYWN0b3J5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gbmV3IEFycmF5KDEwKTtcbiAgICBnZW5lcmF0ZUJvYXJkKGJvYXJkKTtcbiAgICBsZXQgc2hpcHMgPSBuZXcgQXJyYXkoKTtcbiAgICBsZXQgb2NjdXBpZWRTcGFjZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyAxMCBieSAxMCBhcnJheVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBnaXZlbiBzcGFjZSBpcyBvY2N1cGllZCBieSBhbm90aGVyIHNoaXBcbiAgICBmdW5jdGlvbiBpc09jY3VwaWVkU3BhY2UoeCwgeSkge1xuICAgICAgICByZXR1cm4gb2NjdXBpZWRTcGFjZXMuaGFzKGAke3h9JHt5fWApO1xuICAgIH1cblxuICAgIC8vIFRlc3QgZm9yIGEgc2hpcCBwbGFjZWQgb3V0IG9mIGJvdW5kcy4gRnVuY3Rpb24gcmV0dXJucyBudWxsIGlmIG91dCBvZiBib3VuZHMuXG4gICAgZnVuY3Rpb24gb3V0T2ZCb3VuZHMobGVuZ3RoLCBheGlzLCB4LCB5KSB7XG4gICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRzID0gcGFyc2VJbnQoeCkgKyBsZW5ndGg7XG4gICAgICAgICAgICBpZihvdXRPZkJvdW5kcyA+IDkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kcyA9IHBhcnNlSW50KHkpICsgbGVuZ3RoO1xuICAgICAgICAgICAgaWYob3V0T2ZCb3VuZHMgPiA5KVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gXCJsZW5ndGhcIiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuICAgIC8vIFwiYXhpc1wiIGlzIHRoZSBheGlzIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkLlxuICAgIC8vIFwieFwiIGFuZCBcInlcIiBhcmUgdGhlIHN0YXJ0aW5nIHggYW5kIHkgY29vcmRpbmF0ZXMgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWQuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSkge1xuICAgICAgICAvLyBUZXN0IG91dCBvZiBib3VuZHMuXG4gICAgICAgIGlmKG91dE9mQm91bmRzKGxlbmd0aCwgYXhpcywgeCwgeSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPdXQgb2YgYm91bmRzLicpO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBzOyAvLyByZXR1cm4gc2hpcHMgd2l0aG91dCBjcmVhdGluZyBhbnl0aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGxldCB4SW5jcmVtZW50ID0gcGFyc2VJbnQoeCkgKyBpO1xuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc3BhY2UgaXMgb2NjdXBpZWQuXG4gICAgICAgICAgICAgICAgaWYoaXNPY2N1cGllZFNwYWNlKHhJbmNyZW1lbnQsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGlwcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uW2ldID0gYCR7eEluY3JlbWVudH0ke3l9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZihheGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgICAgICBpZihpc09jY3VwaWVkU3BhY2UoeCwgeUluY3JlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlwUG9zaXRpb25baV0gPSBgJHt4fSR7eUluY3JlbWVudH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgc2hpcCdzIGNvb3JkaW5hdGVzIHRvIHRoZSBvY2N1cGllZFNwYWNlcyBTZXRcbiAgICAgICAgc2hpcFBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICBvY2N1cGllZFNwYWNlcy5hZGQoY29vcmQpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKGxlbmd0aCwgc2hpcFBvc2l0aW9uKTsgLy8gQ3JlYXRlIHRoZSBzaGlwLlxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApOyAvLyBQdXNoIHRoZSBuZXcgc2hpcCBvbnRvIHRoZSBzaGlwcyBhcnJheS5cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHNoaXBzIGFycmF5LlxuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgLy8gUmVjZWl2ZXMgYW4geCx5IGNvb3JkaW5hdGUgZm9yIGF0dGFjay5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBib2FyZCBjb29yZGluYXRlIGhhcyBhIG1pc3MvaGl0IGluIGl0IGFscmVhZHkuXG4gICAgLy8gTmVzdGVkIGxvb3BzIHRvIGdvIHRocm91Z2ggZWFjaCBzaGlwJ3MgY29vcmRpbmF0ZXMuIFxuICAgIC8vIE8obl5tKSB0aW1lIGNvbXBsZXhpdHkuIFdoZXJlIG4gaXMgdGhlIG51bWJlciBvZiBzaGlwcyBhbmQgbSBpcyB0aGUgeHkgb2YgZWFjaCBzaGlwLlxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBsZXQgeHkgPSB4LnRvU3RyaW5nKCkgKyB5LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmKGJvYXJkW3hdW3ldKSByZXR1cm4gZmFsc2U7IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJvYXJkW3hdW3ldID0gXCJtaXNzXCI7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcHNbaV0uY29vcmRpbmF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNbaV0uY29vcmRpbmF0ZXNbal0gPT09IHh5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFt4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBvY2N1cGllZFNwYWNlcyxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgIH07XG59IiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IHBsYWNlUGhhc2UsIGRlZmF1bHRQbGFjZVBoYXNlLCBkZWZhdWx0UGxhY2VQaGFzZTIgfSBmcm9tIFwiLi9wbGFjZS1waGFzZVwiO1xuaW1wb3J0IHsgbWFpblBoYXNlLCBkZWZhdWx0TWFpblBoYXNlIH0gZnJvbSBcIi4vbWFpbi1waGFzZVwiO1xuaW1wb3J0IHsgc2V0dXBET00gfSBmcm9tIFwiLi9kb20tYW5kLWV2ZW50LWxpc3RlbmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lU3RhdGUoY29udGVudCkge1xuICAgIGNvbnN0IHBsYXllck9uZSA9IGNyZWF0ZVBsYXllcigpOyAvLyBUd28gc2VwYXJhdGUgYm9hcmRzLlxuICAgIGNvbnN0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpO1xuXG4gICAgc2V0dXBET00oY29udGVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgLy8gRnVuY3Rpb25zIHRvIGhlbHAgdGVzdCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyB3b3JrcyBvdXRzaWRlIG9mIHRoZSBET00gYW5kIGJlZm9yZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgLy8gZGVmYXVsdFBsYWNlUGhhc2UocGxheWVyT25lKTtcbiAgICAvLyBkZWZhdWx0UGxhY2VQaGFzZTIocGxheWVyVHdvKTtcbiAgICAvLyBkZWZhdWx0TWFpblBoYXNlKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lU3RhdGUgZnJvbSAnLi9nYW1lc3RhdGUnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvbnRlbnQnKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbmdhbWVTdGF0ZShjb250ZW50KTsiLCJpbXBvcnQgZ2FtZU92ZXJDaGVjayBmcm9tIFwiLi9nYW1lLW92ZXItY2hlY2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW5QaGFzZSgpIHtcblxufVxuXG4vLyBUbyBoZWxwIHRlc3QgdGhlIGdhbWUgbG9naWMgd2l0aG91dCB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNYWluUGhhc2Uob25lLCB0d28pIHtcbiAgICB0d28uYXR0YWNrZWQoMCwgMCk7IC8vIHBhdHJvbFxuICAgIHR3by5hdHRhY2tlZCgxLCAwKTtcblxuICAgIHR3by5hdHRhY2tlZCgxLCAxKTsgLy8gc3ViXG4gICAgdHdvLmF0dGFja2VkKDIsIDEpO1xuICAgIHR3by5hdHRhY2tlZCgzLCAxKTtcblxuICAgIHR3by5hdHRhY2tlZCgyLCAyKTsgLy8gZGVzdHJveWVyXG4gICAgdHdvLmF0dGFja2VkKDMsIDIpO1xuICAgIHR3by5hdHRhY2tlZCg0LCAyKTtcblxuICAgIHR3by5hdHRhY2tlZCgzLCAzKTsgLy8gYmF0dGxlc2hpcFxuICAgIHR3by5hdHRhY2tlZCg0LCAzKTtcbiAgICB0d28uYXR0YWNrZWQoNSwgMyk7XG4gICAgdHdvLmF0dGFja2VkKDYsIDMpO1xuXG4gICAgdHdvLmF0dGFja2VkKDQsIDQpOyAvLyBjYXJyaWVyXG4gICAgdHdvLmF0dGFja2VkKDUsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDYsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDcsIDQpOyAgXG4gICAgdHdvLmF0dGFja2VkKDgsIDQpO1xuXG4gICAgaWYoZ2FtZU92ZXJDaGVjayhvbmUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGdhbWUgaXMgb3Zlci4gUGxheWVyIHR3byB3aW5zLlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihnYW1lT3ZlckNoZWNrKHR3bykpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBpcyBvdmVyLiBQbGF5ZXIgb25lIHdpbnMuXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBvbmUgd29uLiBTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxufSIsIi8vIFRha2UgdGhlIHBsYXllcidzIGJvYXJkLCB0aGUgdGlsZSBpZCwgdGhlIGF4aXMgdG8gcGxhY2UgdGhlIHNoaXAsIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLlxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUGhhc2Uob25lLCBpZCwgYXhpcywgbGVuZ3RoKSB7XG4gICAgbGV0IHNoaXBOdW1iZXIgPSBvbmUuYkZhY3Rvcnkuc2hpcHMubGVuZ3RoOyAvLyBnZXQgdGhlIG51bWJlciBvZiBzaGlwc1xuICAgIGxldCB4ID0gaWQuY2hhckF0KDApOyAvLyBnZXQgeCBmcm9tIHRoZSB0aWxlIGlkXG4gICAgbGV0IHkgPSBpZC5jaGFyQXQoMSk7IC8vIGdldCB5IGZyb20gdGhlIHRpbGUgaWRcbiAgICBvbmUucGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KTsgLy8gcGxhY2UgdGhlIHNoaXBcbiAgICBsZXQgbmV3U2hpcE51bWJlciA9IG9uZS5iRmFjdG9yeS5zaGlwcy5sZW5ndGg7IC8vIGdldCB0aGUgbmV3IG51bWJlciBvZiBzaGlwc1xuXG4gICAgLy8gSWYgdGhlIG5ldyBudW1iZXIgb2Ygc2hpcHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvbGQgbnVtYmVyLCB0aGUgc2hpcCB3YXMgc3VjY2Vzc2Z1bGx5IHBsYWNlZCBhbmRcbiAgICAvLyBjYW4gYmUgY29sb3JlZC5cbiAgICBpZihuZXdTaGlwTnVtYmVyID4gc2hpcE51bWJlcilcbiAgICAgICAgY29sb3JTaGlwKGxlbmd0aCwgYXhpcywgeCwgeSk7XG59XG5cbi8vIFRvIGhlbHAgdGVzdCB0aGUgZ2FtZSBzdGF0ZSB3aXRob3V0IHRoZSB1c2Ugb2YgdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZShvbmUpIHtcbiAgICBvbmUucGxhY2UoMiwgJ3gnLCAwLCAwKTsgLy8gc2hpcCBvZiBsZW5ndGggMiBvbiB0aGUgJ3gnIGF4aXMgYXQgY29vcmRpbmF0ZTogMCwwXG4gICAgb25lLnBsYWNlKDMsICd4JywgMSwgMSk7XG4gICAgb25lLnBsYWNlKDMsICd4JywgMiwgMik7XG4gICAgb25lLnBsYWNlKDQsICd4JywgMywgMyk7XG4gICAgb25lLnBsYWNlKDUsICd4JywgNCwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxhY2VQaGFzZTIodHdvKSB7XG4gICAgdHdvLnBsYWNlKDIsICd4JywgMCwgMCk7IC8vIHNoaXAgb2YgbGVuZ3RoIDIgb24gdGhlICd4JyBheGlzIGF0IGNvb3JkaW5hdGU6IDAsMFxuICAgIHR3by5wbGFjZSgzLCAneCcsIDEsIDEpO1xuICAgIHR3by5wbGFjZSgzLCAneCcsIDIsIDIpO1xuICAgIHR3by5wbGFjZSg0LCAneCcsIDMsIDMpO1xuICAgIHR3by5wbGFjZSg1LCAneCcsIDQsIDQpO1xufVxuXG4vLyBsZW5ndGgsIGF4aXMsIHggc3RhcnRpbmcgY29vcmRpbmF0ZSwgeSBzdGFydGluZyBjb29yZGluYXRlXG4vLyBhZGRpbmcgYSBjbGFzcyB0byBzdHlsZSB0aGUgdGlsZXMgd2l0aCBzaGlwc1xuZnVuY3Rpb24gY29sb3JTaGlwKGwsIGEsIHgsIHkpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmKGEgPT09ICd4Jykge1xuICAgICAgICAgICAgbGV0IHhJbmNyZW1lbnQgPSBwYXJzZUludCh4KSArIGk7XG4gICAgICAgICAgICBsZXQgY29sb3JDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eEluY3JlbWVudH0ke3l9YCk7XG4gICAgICAgICAgICBjb2xvckNlbGwuY2xhc3NMaXN0LmFkZChcInBsYXllci1zaGlwXCIpO1xuICAgICAgICB9IGVsc2UgaWYoYSA9PT0gJ3knKSB7XG4gICAgICAgICAgICBsZXQgeUluY3JlbWVudCA9IHBhcnNlSW50KHkpICsgaTtcbiAgICAgICAgICAgIGxldCBjb2xvckNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSR7eUluY3JlbWVudH1gKTtcbiAgICAgICAgICAgIGNvbG9yQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc2hpcCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUdhbWVCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLWZhY3RvcnknO1xuXG4vLyBFYWNoIHBsYXllciBoYXMgdGhlaXIgb3duIGdhbWVib2FyZCwgYSBmdW5jdGlvbiB0byBwbGFjZSBhIHNoaXAsIGEgZnVuY3Rpb24gdG8gYXR0YWNrLCBhbmQgYW5cbi8vIGFycmF5IGNvbnRhaW5pbmcgdGhlaXIgc2hpcHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIoKSB7XG4gICBjb25zdCBiRmFjdG9yeSA9IGNyZWF0ZUdhbWVCb2FyZCgpOyAvLyBUaGUgYm9hcmQgZmFjdG9yeSBmdW5jdGlvbi5cblxuICAgZnVuY3Rpb24gcGxhY2UobGVuZ3RoLCBheGlzLCB4LCB5KSB7XG4gICAgIGJGYWN0b3J5LnBsYWNlU2hpcChsZW5ndGgsIGF4aXMsIHgsIHkpO1xuICAgfVxuICAgXG4gICBmdW5jdGlvbiBhdHRhY2tlZCh4LCB5KSB7XG4gICAgIGJGYWN0b3J5LnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICB9XG5cbiAgIHJldHVybiB7XG4gICAgYkZhY3RvcnksIFxuICAgIHBsYWNlLFxuICAgIGF0dGFja2VkXG4gICB9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCwgYXJyYXkpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGFycmF5O1xuICAgIGxldCBoaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7IC8vIEZpbGwgdGhlIGhpdHMgYXJyYXkgd2l0aCBmYWxzZSB2YWx1ZXMuXG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBuZXh0IGF2YWlsYWJsZSBoaXQgdGhhdCBpcyBmYWxzZSBhbmQgbWFrZSBpdCB0cnVlIGFuZCB0aGVuIGJyZWFrIHRoZSBsb29wLlxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKGhpdHNbaV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBoaXRzW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgZXZlcnkgZWxlbWVudCBpbiB0aGUgaGl0cyBhcnJheSBpcyB0cnVlLlxuICAgICAgICBpZiAoaGl0cy5ldmVyeShoaXQgPT4gaGl0KSkge1xuICAgICAgICAgIHN1bmsgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0cy5zbGljZSgpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgaGl0LFxuICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgZ2V0SGl0cyxcbiAgICAgIGlzU3VuayxcbiAgICAgIGNvb3JkaW5hdGVzXG4gICAgfTtcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==