(() => {
  // node_modules/split-type/dist/index.js
  (function() {
    function append() {
      var length = arguments.length;
      for (var i = 0; i < length; i++) {
        var node = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (node.nodeType === 1 || node.nodeType === 11)
          this.appendChild(node);
        else
          this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length)
        this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i = nodes.length;
      if (!parent)
        return;
      if (!i)
        parent.removeChild(this);
      while (i--) {
        var node = nodes[i];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source2 = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source2), true).forEach(function(key) {
          _defineProperty(target, key, source2[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source2));
      } else {
        ownKeys(Object(source2)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source2, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value))
      return value;
    if (value == null)
      return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(toArray(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "")
        return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray(toArray(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
        chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName))
        return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling)
        parent.insertBefore(element, nextSibling);
      else
        parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass(SplitType2, null, [{
      key: "clearData",
      value: function clearData() {
        clear();
      }
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        _defaults = extend(_defaults, parseSettings(options));
        return defaults;
      }
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
    }, {
      key: "data",
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults;
      },
      set: function set2(options) {
        _defaults = extend(_defaults, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
          _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/utilities.js
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "")
      return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean")
      return true;
    if (attrVal === "false" && defaultValType === "boolean")
      return false;
    if (isNaN(attrVal) && defaultValType === "string")
      return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number")
      return +attrVal;
    return defaultVal;
  };
  var runSplit = function(text) {
    if (!text)
      return;
    typeSplit = new SplitType(text, {
      types: "lines, words"
    });
    return typeSplit;
  };

  // src/index.js
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Flip);
    const LIGHTBOX_COMPONENT = '[lightbox-el="component"]';
    const LIGHTBOX_TRIGGER = '[lightbox-el="trigger"]';
    const LIGHTBOX_CLOSE_BTN = '[lightbox-el="close"]';
    const LIGHTBOX_NEXT_BTN = '[lightbox-el="next"]';
    const LIGHTBOX_PREVIOUS_BTN = '[lightbox-el="previous"]';
    const LIGHTBOX_IMAGE = '[lightbox-el="image"]';
    const LIGHTBOX_THUMBNAIL = '[lightbox-el="thumbnail"]';
    const LIGHTBOX_VID_THUMBNAIL = '[lightbox-el="video-thumbnail"]';
    const LIGHTBOX_VID = '[lightbox-el="video"]';
    const LIGHTBOX_VID_WRAP = '[lightbox-el="video-wrap"]';
    const WORKS_ITEM = '[lightbox-el="works-item"]';
    const WORKS_LIST = '[lightbox-el="works-list"]';
    const PASSWORD_COMPONENT = '[pass-el="component"]';
    const PASSWORD_BG = '[pass-el="bg"]';
    const PASSWORD_WRAP = '[pass-el="wrap"]';
    const PASSWORD_INPUT = '[pass-el="input"]';
    const PASSWORD_BUTTON = '[pass-el="button"]';
    const PASSWORD_ERROR = '[pass-el="error"]';
    const SCROLL_HEADING = '[gsap-scroll="heading"]';
    const SCROLL_EL = '[gsap-scroll="el"]';
    const SCROLL_LINE = '[gsap-scroll="line"]';
    const SCROLL_CONTAINER = '[gsap-scroll="container"]';
    const SCROLL_STAGGER = '[gsap-scroll="stagger"]';
    const TXT_LINK_COMPONENT = '[text-link="component"]';
    const TXT_LINK_FRONT = '[text-link="front"]';
    const TXT_LINK_BACK = '[text-link="back"]';
    const NO_SCROLL = "no-scroll";
    const HIDE_CLASS = "hide";
    const body = document.querySelector("body");
    let activeLightbox = false;
    let userInput;
    let password;
    const passwordFunction = function() {
      const passComponent = document.querySelector(PASSWORD_COMPONENT);
      const passInput = document.querySelector(PASSWORD_INPUT);
      const passButton = document.querySelector(PASSWORD_BUTTON);
      const passError = document.querySelector(PASSWORD_ERROR);
      let passSet = false;
      if (!passComponent || !passInput || !passButton)
        return;
      const checkPassword = function() {
        const passBg = document.querySelector(PASSWORD_BG);
        const passWrap = document.querySelector(PASSWORD_WRAP);
        if (userInput === password) {
          localStorage.setItem(page, "true");
          const tl = gsap.timeline({
            onComplete: () => {
              passComponent.classList.add(HIDE_CLASS);
              body.classList.remove(NO_SCROLL);
              headerIn();
            }
          });
          tl.fromTo(
            passBg,
            {
              height: "100%"
            },
            {
              duration: 1,
              height: "0%",
              ease: "power2.out"
            }
          );
          tl.fromTo(
            passWrap,
            {
              opacity: 1
            },
            {
              duration: 0.5,
              opacity: 0,
              ease: "power2.out"
            },
            0.2
          );
          tl.fromTo(
            passWrap,
            {
              scale: 1
            },
            {
              duration: 0.7,
              scale: 0.75,
              ease: "power2.in"
            },
            0
          );
        } else {
          passError.classList.remove(HIDE_CLASS);
        }
      };
      let visited = false;
      const page = window.location.pathname;
      if (localStorage.getItem(page) !== null) {
        visited = true;
      }
      if (!passComponent.classList.contains("w-condition-invisible") && visited === false) {
        passSet = true;
        window.scrollTo(0, 0);
        body.classList.add(NO_SCROLL);
        passInput.focus();
      } else {
        passComponent.classList.add(HIDE_CLASS);
        headerIn();
      }
      if (passSet) {
        password = attr("oovra", passButton.getAttribute("pass"));
        passInput.addEventListener("input", function() {
          userInput = this.value;
          passError.classList.add(HIDE_CLASS);
          passInput.addEventListener("change", function() {
            userInput = this.value;
            passError.classList.add(HIDE_CLASS);
          });
        });
        window.addEventListener("keydown", (e) => {
          if (e.key == "Tab" && e.target === passButton) {
            passInput.focus();
          }
          if (e.key == "Enter" && e.target === passInput) {
            checkPassword();
          }
        });
        passButton.addEventListener("click", function() {
          checkPassword();
        });
      }
    };
    const lightbox = function() {
      const worksItems = document.querySelectorAll(WORKS_ITEM);
      if (worksItems.length === 0)
        return;
      worksItems.forEach((item) => {
        const lightbox2 = item.querySelector(LIGHTBOX_COMPONENT);
        if (!lightbox2)
          return;
        const lightboxTrigger = item.querySelector(LIGHTBOX_TRIGGER);
        const videoWrap = item.querySelector(LIGHTBOX_VID_WRAP);
        const video = item.querySelector(LIGHTBOX_VID);
        let player = false;
        if (!videoWrap.classList.contains("w-condition-invisible")) {
          player = makeVideo(video);
        }
        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && e.target === lightboxTrigger) {
            openModal(lightbox2, player);
          }
          if (e.key === "Escape" && activeLightbox !== false) {
            closeModal(lightbox2, player);
          }
        });
        item.addEventListener("click", (e) => {
          if (e.target.closest(LIGHTBOX_TRIGGER) !== null) {
            openModal(lightbox2, player);
          } else if (e.target.closest(LIGHTBOX_CLOSE_BTN) !== null) {
            closeModal(lightbox2, player);
            if (player) {
              player.pause();
            }
          } else if (e.target.closest(LIGHTBOX_NEXT_BTN) !== null) {
            const nextItem = item.nextElementSibling;
            const nextLightbox = nextItem.querySelector(LIGHTBOX_COMPONENT);
            closeModal(lightbox2, player);
            if (player) {
              player.pause();
            }
            openModal(nextLightbox);
          } else if (e.target.closest(LIGHTBOX_PREVIOUS_BTN) !== null) {
            const previousItem = item.previousElementSibling;
            const previousLightbox = previousItem.querySelector(LIGHTBOX_COMPONENT);
            closeModal(lightbox2, player);
            if (player) {
              player.pause();
            }
            openModal(previousLightbox);
          }
        });
      });
      const openModal = function(lightbox2, player) {
        if (!lightbox2)
          return;
        lightbox2.showModal();
        lightboxThumbnails(lightbox2, player);
        body.classList.add(NO_SCROLL);
        activeLightbox = lightbox2;
      };
      const closeModal = function(lightbox2, player) {
        if (!lightbox2)
          return;
        if (player) {
          player.pause();
        }
        lightbox2.close();
        body.classList.remove(NO_SCROLL);
        activeLightbox = false;
      };
      const lightboxThumbnails = function(lightbox2, player) {
        const thumbnails = lightbox2.querySelectorAll(LIGHTBOX_THUMBNAIL);
        const lightboxImage = lightbox2.querySelector(LIGHTBOX_IMAGE);
        const videoThumbnail = lightbox2.querySelector(LIGHTBOX_VID_THUMBNAIL);
        const videoWrap = lightbox2.querySelector(LIGHTBOX_VID_WRAP);
        thumbnails.forEach(function(thumbnail) {
          thumbnail.addEventListener("click", function() {
            videoWrap.classList.add(HIDE_CLASS);
            source = thumbnail.src;
            lightboxImage.src = source;
            if (player) {
              player.pause();
            }
          });
        });
        videoThumbnail.addEventListener("click", function() {
          videoWrap.classList.remove(HIDE_CLASS);
        });
      };
    };
    const makeVideo = function(video) {
      let videoPlayer = new Plyr(video, {
        controls: ["play-large", "play", "progress", "current-time", "mute", "fullscreen"],
        resetOnEnd: true
      });
      return videoPlayer;
    };
    const scrollTL = function(item) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr(settings.toggleActions, item.getAttribute("gsap-toggle-actions"));
      settings.scrub = attr(settings.scrub, item.getAttribute("gsap-scrub"));
      settings.start = attr(settings.start, item.getAttribute("gsap-scroll-start"));
      settings.end = attr(settings.end, item.getAttribute("gsap-scroll-end"));
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power1.out"
        },
        scrollTrigger: {
          trigger: item,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl;
    };
    const scrollHeading = function() {
      const items = gsap.utils.toArray(SCROLL_HEADING);
      items.forEach((item) => {
        const splitText = runSplit(item);
        if (!splitText)
          return;
        item.style.opacity = 1;
        const tl = scrollTL(item);
        tl.fromTo(
          splitText.words,
          {
            opacity: 0,
            y: "2rem"
          },
          {
            opacity: 1,
            y: "0rem",
            stagger: { each: 0.1, from: "start" }
          }
        );
      });
    };
    const scrollEl = function() {
      const items = gsap.utils.toArray(SCROLL_EL);
      items.forEach((item) => {
        if (!item)
          return;
        item.style.opacity = 1;
        const tl = scrollTL(item);
        tl.fromTo(
          item,
          {
            opacity: 0,
            y: "2rem"
          },
          {
            opacity: 1,
            y: "0rem"
          }
        );
      });
    };
    const scrollLine = function() {
      const items = gsap.utils.toArray(SCROLL_LINE);
      items.forEach((item) => {
        if (!item)
          return;
        item.style.opacity = 1;
        const tl = scrollTL(item);
        tl.fromTo(
          item,
          {
            width: "0%"
          },
          {
            width: "100%"
          }
        );
      });
    };
    const scrollContainer = function() {
      const items = gsap.utils.toArray(SCROLL_CONTAINER);
      items.forEach((item) => {
        if (!item)
          return;
        const children = gsap.utils.toArray(item.children);
        if (children.length === 0)
          return;
        children.forEach((child) => {
          const tl = scrollTL(child);
          tl.fromTo(
            child,
            {
              opacity: 0,
              y: "2rem"
            },
            {
              opacity: 1,
              y: "0rem"
            }
          );
        });
      });
    };
    const scrollStagger = function() {
      const items = gsap.utils.toArray(SCROLL_STAGGER);
      items.forEach((item) => {
        const children = gsap.utils.toArray(item.children);
        if (children.length === 0)
          return;
        const tl = scrollTL(item);
        tl.fromTo(
          children,
          {
            opacity: 0,
            y: "2rem"
          },
          {
            opacity: 1,
            y: "0rem",
            stagger: { each: 0.1, from: "start" }
          }
        );
      });
    };
    const textLinks = function() {
      const items = gsap.utils.toArray(TXT_LINK_COMPONENT);
      items.forEach((item) => {
        if (!item)
          return;
        const front = item.querySelector(TXT_LINK_FRONT);
        const back = item.querySelector(TXT_LINK_BACK);
        if (!front || !back)
          return;
        const tl = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.3,
            ease: "power1.out"
          }
        });
        tl.fromTo(
          front,
          {
            y: "150%",
            rotateZ: 15
          },
          {
            y: "0%",
            rotateZ: 0
          }
        );
        tl.fromTo(
          back,
          {
            y: "0%",
            rotateZ: 0
          },
          {
            y: "-150%",
            rotateZ: -15
          },
          0
        );
        item.addEventListener("mouseover", function() {
          tl.play();
        });
        item.addEventListener("mouseleave", function() {
          tl.reverse();
        });
      });
    };
    const headerIn = function() {
      const header = document.querySelector(".header_component");
      const h1 = gsap.utils.toArray('[gsap-load="h1"]');
      const subtitles = gsap.utils.toArray(".header_left p");
      const horLine = document.querySelector(".header_left .line-fill");
      const links = gsap.utils.toArray(".nav_layout .text-link_component");
      const navLine = document.querySelector(".nav_line .line-fill");
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power1.out"
        }
      });
      tl.set(header, { opacity: 1 });
      tl.fromTo(
        h1,
        {
          opacity: 0,
          y: "2rem"
        },
        {
          opacity: 1,
          y: "0rem"
        }
      );
      tl.fromTo(
        subtitles,
        {
          opacity: 0,
          y: "2rem"
        },
        {
          opacity: 1,
          y: "0rem",
          stagger: { each: 0.1, from: "start" }
        },
        "<.2"
      );
      tl.fromTo(
        horLine,
        {
          width: "0%"
        },
        {
          width: "100%"
        },
        "<.2"
      );
      tl.fromTo(
        links,
        {
          opacity: 0,
          y: "2rem"
        },
        {
          opacity: 1,
          y: "0rem",
          stagger: { each: 0.2, from: "start" }
        },
        "<"
      );
      tl.fromTo(
        navLine,
        {
          height: "0%"
        },
        {
          height: "100%"
        },
        "<"
      );
    };
    passwordFunction();
    lightbox();
    const gsapInit = function() {
      let mm = gsap.matchMedia();
      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)  and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (context) => {
          let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;
          if (!reduceMotion) {
            scrollHeading();
            scrollEl();
            scrollContainer();
            scrollStagger();
            scrollLine();
            textLinks();
          }
        }
      );
    };
    gsapInit();
  });
})();
