(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datatable */ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DatatableFactory: vuejs_datatable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  data: function data() {
    return {
      columns: [{
        label: 'id',
        field: 'id'
      }, {
        label: 'Title',
        field: 'title'
      }, {
        label: 'Slug',
        field: 'slug'
      }],
      rows: [],
      page: 1,
      per_page: 10
    };
  },
  methods: {
    getPosts: function getPosts() {
      axios.get('api/list').then(function (response) {
        this.rows = response.data;
      }.bind(this));
    }
  },
  created: function created() {
    this.getPosts();
  }
});

/***/ }),

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory()
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this, function () {
  'use strict'

  var toStr = Object.prototype.toString

  function hasOwnProperty (obj, prop) {
    if (obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty (value) {
    if (!value) {
      return true
    }
    if (isArray(value) && value.length === 0) {
      return true
    } else if (typeof value !== 'string') {
      for (var i in value) {
        if (hasOwnProperty(value, i)) {
          return false
        }
      }
      return true
    }
    return false
  }

  function toString (type) {
    return toStr.call(type)
  }

  function isObject (obj) {
    return typeof obj === 'object' && toString(obj) === '[object Object]'
  }

  var isArray = Array.isArray || function (obj) {
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]'
  }

  function isBoolean (obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]'
  }

  function getKey (key) {
    var intKey = parseInt(key)
    if (intKey.toString() === key) {
      return intKey
    }
    return key
  }

  function factory (options) {
    options = options || {}

    var objectPath = function (obj) {
      return Object.keys(objectPath).reduce(function (proxy, prop) {
        if (prop === 'create') {
          return proxy
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj)
        }

        return proxy
      }, {})
    }

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty (obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop]
      }
    }

    var getShallowPropertySafely
    if (options.includeInheritedProps) {
      getShallowPropertySafely = function (obj, currentPath) {
        if (typeof currentPath !== 'string' && typeof currentPath !== 'number') {
          currentPath = String(currentPath)
        }
        var currentValue = getShallowProperty(obj, currentPath)
        if (currentPath === '__proto__' || currentPath === 'prototype' ||
          (currentPath === 'constructor' && typeof currentValue === 'function')) {
          throw new Error('For security reasons, object\'s magic properties cannot be set')
        }
        return currentValue
      }
    } else {
      getShallowPropertySafely = function (obj, currentPath) {
        return getShallowProperty(obj, currentPath)
      }
    }

    function set (obj, path, value, doNotReplace) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace)
      }
      var currentPath = path[0]
      var currentValue = getShallowPropertySafely(obj, currentPath)
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value
        }
        return currentValue
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if (typeof path[1] === 'number') {
          obj[currentPath] = []
        } else {
          obj[currentPath] = {}
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace)
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      } else if (typeof path === 'string') {
        path = path.split('.')
      }

      if (!path || path.length === 0) {
        return !!obj
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i])

        if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j]
        } else {
          return false
        }
      }

      return true
    }

    objectPath.ensureExists = function (obj, path, value) {
      return set(obj, path, value, true)
    }

    objectPath.set = function (obj, path, value, doNotReplace) {
      return set(obj, path, value, doNotReplace)
    }

    objectPath.insert = function (obj, path, value, at) {
      var arr = objectPath.get(obj, path)
      at = ~~at
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }
      arr.splice(at, 0, value)
    }

    objectPath.empty = function (obj, path) {
      if (isEmpty(path)) {
        return void 0
      }
      if (obj == null) {
        return void 0
      }

      var value, i
      if (!(value = objectPath.get(obj, path))) {
        return void 0
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '')
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false)
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0)
      } else if (isArray(value)) {
        value.length = 0
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i]
          }
        }
      } else {
        return objectPath.set(obj, path, null)
      }
    }

    objectPath.push = function (obj, path /*, values */) {
      var arr = objectPath.get(obj, path)
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2))
    }

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value
        }
      }

      return defaultValue
    }

    objectPath.get = function (obj, path, defaultValue) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (obj == null) {
        return defaultValue
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue)
      }

      var currentPath = getKey(path[0])
      var nextObj = getShallowPropertySafely(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue
      }

      if (path.length === 1) {
        return nextObj
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue)
    }

    objectPath.del = function del (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      }

      if (obj == null) {
        return obj
      }

      if (isEmpty(path)) {
        return obj
      }
      if (typeof path === 'string') {
        return objectPath.del(obj, path.split('.'))
      }

      var currentPath = getKey(path[0])
      getShallowPropertySafely(obj, currentPath)
      if (!hasShallowProperty(obj, currentPath)) {
        return obj
      }

      if (path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1)
        } else {
          delete obj[currentPath]
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1))
      }

      return obj
    }

    return objectPath
  }

  var mod = factory()
  mod.create = factory
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod
})


/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "createDecorator": () => (/* binding */ createDecorator),
/* harmony export */   "mixins": () => (/* binding */ mixins)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (true) {
    if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0__["default"]) && Object.keys(plainData).length > 0) {
      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');
    }
  }

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0__["default"] ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0__["default"];
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if ( true && reservedPropertyNames.indexOf(key) >= 0) {
      warn("Static property name '".concat(key, "' declared on class '").concat(Original.name, "' ") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');
    }

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);



/***/ }),

/***/ "./resources/js/components/products/list.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/products/list.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=a62a24a4& */ "./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/products/list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/list.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/products/list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_a62a24a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=template&id=a62a24a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/list.vue?vue&type=template&id=a62a24a4& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Laravel Vue Datatables Component Example - CodeCheef"),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("datatable", {
                attrs: { columns: _vm.columns, data: _vm.rows },
              }),
              _vm._v(" "),
              _c("datatable-pager", {
                attrs: { type: "abbreviated", "per-page": _vm.per_page },
                model: {
                  value: _vm.page,
                  callback: function ($$v) {
                    _vm.page = $$v
                  },
                  expression: "page",
                },
              }),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/vue-property-decorator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ vue_class_component__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Vue": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Mixins": () => (/* reexport safe */ vue_class_component__WEBPACK_IMPORTED_MODULE_0__.mixins),
/* harmony export */   "Inject": () => (/* binding */ Inject),
/* harmony export */   "InjectReactive": () => (/* binding */ InjectReactive),
/* harmony export */   "Provide": () => (/* binding */ Provide),
/* harmony export */   "ProvideReactive": () => (/* binding */ ProvideReactive),
/* harmony export */   "Model": () => (/* binding */ Model),
/* harmony export */   "Prop": () => (/* binding */ Prop),
/* harmony export */   "PropSync": () => (/* binding */ PropSync),
/* harmony export */   "Watch": () => (/* binding */ Watch),
/* harmony export */   "Emit": () => (/* binding */ Emit),
/* harmony export */   "Ref": () => (/* binding */ Ref)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/** vue-property-decorator verson 8.5.1 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    if (args.length === 0) {
                        _this.$emit(emitName, returnValue);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, returnValue, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName, returnValue].concat(args));
                    }
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__.createDecorator)(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ "./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuejs-datatable/dist/vuejs-datatable.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultHandler": () => (/* binding */ C),
/* harmony export */   "VueDatatable": () => (/* binding */ $),
/* harmony export */   "VuejsDatatableFactory": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/**
 * vuejs-datatable v2.0.0-alpha.7, module vuejs-datatable build esm
 * License: MIT (see git+https://github.com/GerkinDev/vuejs-datatable.git/blob/master/LICENSE for the full license)
 * Repository: git+https://github.com/GerkinDev/vuejs-datatable.git
 * Generated on 2019-12-29 at 17:05:12.
 * By Patrick Stephan<pstephan1187@gmail.com>, GerkinDev<agermain@ithoughts.io> (https://ithoughts.io/)
 */

const h=t=>(t=>t&&"function"==typeof t.then)(t)?t:Promise.resolve(t),d=[String,Array,Object],u=(t,...e)=>Object.entries(Object.assign(g(t),...e.map(t=>g(t)))).filter(([,t])=>t).map(([t])=>t),g=t=>("string"==typeof t&&(t=t.split(/\s+/g)),Array.isArray(t)?t.reduce((t,e)=>(t[e]=!0,t),{}):t||{}),b=t=>`vue-datatable::${t}`,y=t=>null==t?"":t.toString();class m{constructor(t){this.interpolate=!1,this.headerClass="",this.label="";const e=Object.assign(Object.assign({class:null,component:null,field:null,representedAs:null},t),{align:m.normalizeAlignment(t.align,"left"),headerAlign:m.normalizeAlignment(t.headerAlign,"center")});Object.assign(this,e,{filterable:m.isFilterable(t),sortable:m.isSortable(t)})}static normalizeAlignment(t,e="left"){if("string"==typeof t){const s=(t||e).toLowerCase();if(["left","center","right"].includes(s))return s}return e.toLowerCase()}static isPlainTextField(t){return!(!t.field&&!t.representedAs)}static isFilterable(t){return!1!==t.filterable&&this.isPlainTextField(t)}static isSortable(t){return!1!==t.sortable&&this.isPlainTextField(t)}getRepresentation(e){return this.representedAs&&"function"==typeof this.representedAs?y(this.representedAs(e)):this.field?y((0,object_path__WEBPACK_IMPORTED_MODULE_0__.get)(e,this.field.toString())):""}matches(t,e){return this.getRepresentation(t).toLowerCase().indexOf(e.toLowerCase())>-1}}function f(t,e,s,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(i<3?r(a):i>3?r(e,s,a):r(e,s))||a);return i>3&&a&&Object.defineProperty(e,s,a),a}let T=class t extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{get content(){return this.column.getRepresentation(this.row)}get cellStyles(){return{"text-align":this.column.align}}get cellClass(){return"function"==typeof this.column.class?this.column.class(this.row):this.column.class?this.column.class:void 0}};f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:m,required:!0})],T.prototype,"column",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Object,required:!0})],T.prototype,"row",void 0),T=f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.column.component?s("td",{class:t.cellClass,style:t.cellStyles},[t.column.component?s(t.column.component,{tag:"component",attrs:{row:t.row,column:t.column}}):t._e()],1):t.column.interpolate?s("td",{class:t.cellClass,style:t.cellStyles,domProps:{innerHTML:t._s(t.content)}}):s("td",{class:t.cellClass,style:t.cellStyles},[t._v(" "+t._s(t.content)+" ")])},staticRenderFns:[]}))],T);let w=class t extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{get canSort(){return this.column.sortable}get isSortedAscending(){return"asc"===this.direction}get isSortedDescending(){return"desc"===this.direction}get sortButtonHtml(){const t=this.tableType.setting("table.sorting");return this.isSortedAscending?t.sortAsc:this.isSortedDescending?t.sortDesc:t.sortNone}toggleSort(){this.canSort&&(this.direction&&null!==this.direction?"asc"===this.direction?this.$emit("change","desc",this.column):this.$emit("change",null,this.column):this.$emit("change","asc",this.column))}};f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Model)("change",{type:String})],w.prototype,"direction",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Object,required:!0})],w.prototype,"column",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Inject)("table-type")],w.prototype,"tableType",void 0),w=f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("th",{class:t.column.headerClass,style:{"text-align":t.column.headerAlign,cursor:t.canSort?"pointer":"auto"},on:{click:t.toggleSort}},[t.column.headerComponent?s(t.column.headerComponent,{tag:"component",attrs:{column:t.column}}):s("span",[t._v(" "+t._s(t.column.label)+" ")]),t.canSort?s("span",{domProps:{innerHTML:t._s(t.sortButtonHtml)}}):t._e()],1)},staticRenderFns:[]}))],w);const v=(t,e)=>t.map((t,e)=>({index:e,item:t})).sort((t,s)=>e(t.item,s.item)||t.index-s.index).map(({item:t})=>t);class C{filterHandler(t,e,s){const n=(Array.isArray(e)?e:(e||"").split(/\s/)).filter(t=>!!t);return 0===n.length?t:t.filter(t=>n.some(e=>this.rowMatches(t,e,s)))}sortHandler(t,e,s){return e&&null!==s?v(t,(t,n)=>{const r=e.getRepresentation(t),i=e.getRepresentation(n);if(r===i)return 0;let a=r>i?1:-1;return"desc"===s&&(a*=-1),a}):t}paginateHandler(t,e,s){if(null===e||e<1||s<1)return t;const n=(s-1)*e,r=s*e;return t.slice(n,r)}displayHandler({sorted:t,paged:e}){return{rows:e,totalRowCount:t.length}}rowMatches(t,e,s){return!(s.filter(t=>t.filterable).length>0)||s.some(s=>s.matches(t,e))}}class P{constructor(){this.properties={table:{class:"",row:{class:""},sorting:{sortAsc:"???",sortDesc:"???",sortNone:"???"}},pager:{classes:{disabled:"disabled",li:"",pager:"",selected:"active"},icons:{next:"&gt;",previous:"&lt;"}}}}get(e){return (0,object_path__WEBPACK_IMPORTED_MODULE_0__.get)(this.properties,e)}set(t,s){return (0,object_path__WEBPACK_IMPORTED_MODULE_0__.set)(this.properties,t,s),this}merge(t){return this.properties=P.mergeObjects(this.properties,t),this}static mergeObjects(t,e){for(const s in e)"object"==typeof e[s]?t[s]=P.mergeObjects(t[s]||{},e[s]):t[s]=e[s];return t}}const _=t=>{let e=class e extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{get tableType(){return t}};return f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Provide)("table-type")],e.prototype,"tableType",null),f([vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component],e)};let R=class t extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{get liClasses(){return u(this.tableType.setting("pager.classes.li"),this.disabled?this.tableType.setting("pager.classes.disabled"):void 0,this.selected?this.tableType.setting("pager.classes.selected"):void 0)}get liStyles(){return{cursor:this.disabled?"not-allowed":"pointer"}}sendClick(){this.disabled||this.$parent.$emit(b("set-page"),this.value)}};f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Boolean,default:!1})],R.prototype,"disabled",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Boolean,default:!1})],R.prototype,"selected",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Number})],R.prototype,"value",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Inject)("table-type")],R.prototype,"tableType",void 0),R=f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)(Object.assign({},{render:function(){var t=this.$createElement;return(this._self._c||t)("li",{class:this.liClasses,style:this.liStyles,on:{click:this.sendClick}},[this._t("default",[this._v(this._s(this.value))])],2)},staticRenderFns:[]}))],R);let S=class t extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{constructor(){super(...arguments),this.ptableInstance=null,this.totalPages=0,this.page=1}get sidesIndexes(){return[...Array(this.sidesCount).keys()].map(t=>t+1)}get tableInstance(){if(!this.ptableInstance)throw new ReferenceError("Invalid operation: the pager must be attached to a table.");return this.ptableInstance}get show(){return this.totalRows>0}get totalRows(){try{return this.tableInstance.totalRows}catch(t){return 0}}get paginationClass(){return this.tableType.setting("pager.classes.pager")}get previousIcon(){return this.tableType.setting("pager.icons.previous")}get nextIcon(){return this.tableType.setting("pager.icons.next")}get identifier(){return this.tableType.id+"-pager"}created(){if(!this.linkWithTable(this.table)){const t=e=>{e===this.table&&this.linkWithTable(e)&&this.$root.$off(b("ready"),t)};this.$root.$on(b("ready"),t)}}linkWithTable(t){if(this.$datatables&&this.$datatables[t]){const e=this.$datatables[t];return this.ptableInstance=e,e.pagers.push(this),e.$emit(b("pager-bound"),this),e.$on(b("page-count-changed"),this.onPageCountChanged),e.$on(b("page-changed"),this.onPageChanged),this.$on(b("set-page"),this.onSetPage),!0}return!1}onPageCountChanged(t){this.totalPages=t}onPageChanged(t){this.page=t}onSetPage(t){this.ptableInstance&&(this.ptableInstance.page=t)}};f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:String,default:"default"})],S.prototype,"table",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:String,default:"long"})],S.prototype,"type",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Number,default:2})],S.prototype,"sidesCount",void 0),S=f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)(Object.assign(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("nav",[s("ul",{class:t.paginationClass},["abbreviated"===t.type?[t.page-t.sidesCount>1?s("pager-button",{attrs:{value:1}}):t._e(),t.page-t.sidesCount>2?s("pager-button",{attrs:{disabled:""}},[t._v(" ... ")]):t._e(),t._l(t.sidesIndexes.slice().reverse(),(function(e){return[t.page-e>=1?s("pager-button",{attrs:{value:t.page-e}}):t._e()]})),s("pager-button",{attrs:{value:t.page,selected:""}}),t._l(t.sidesIndexes,(function(e){return[t.page+e<=t.totalPages?s("pager-button",{attrs:{value:t.page+e}}):t._e()]})),t.page+t.sidesCount<t.totalPages-1?s("pager-button",{attrs:{disabled:""}},[t._v(" ... ")]):t._e(),t.page+t.sidesCount<t.totalPages?s("pager-button",{attrs:{value:t.totalPages}}):t._e()]:"long"===t.type?t._l(t.totalPages,(function(e){return s("pager-button",{key:e,attrs:{value:e,selected:e===t.page}})})):"short"===t.type?[t.page>1?s("pager-button",{attrs:{value:t.page-1}},[s("span",{domProps:{innerHTML:t._s(t.previousIcon)}})]):t._e(),s("pager-button",{attrs:{value:t.page,selected:""}}),t.page<t.totalPages?s("pager-button",{attrs:{value:t.page+1}},[s("span",{domProps:{innerHTML:t._s(t.nextIcon)}})]):t._e()]:t._e()],2)]):t._e()},staticRenderFns:[]}),{components:{PagerButton:R}}))],S);let $=class t extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Vue{constructor(){super(...arguments),this.sortBy=null,this.sortDir=null,this.page=1,this.totalRows=0,this.displayedRows=[],this.pagers=[]}get totalPages(){return this.totalRows<=0||this.perPage<=0?0:isFinite(this.perPage)?Math.ceil(this.totalRows/this.perPage):1}get currentPageRange(){return this.perPage===1/0?{from:1,of:this.totalRows,to:this.totalRows+1}:{from:Math.min((this.page-1)*this.perPage+1,Math.max(this.totalRows,1)),of:this.totalRows,to:Math.min(this.page*this.perPage,this.totalRows+1)}}get normalizedColumns(){return this.columns.map(t=>new m(t))}get tableClass(){return u(this.tableType.setting("table.class"),this.$attrs.class).join(" ")}get handler(){return this.tableType.handler}get identifier(){return this.tableType.id}created(){this.$datatables[this.name]=this,this.$root.$emit(b("ready"),this.name),this.$nextTick(()=>{this.waitForPager&&0===this.pagers.length?this.$on(b("pager-bound"),()=>this.initWatchCriterions()):this.initWatchCriterions()})}getSortDirectionForColumn(t){return this.sortBy!==t?null:this.sortDir}setSortDirectionForColumn(t,e){this.sortBy=e,this.sortDir=t}processRowsIn(){if("function"==typeof this.data){const t={filter:this.filter,page:this.page,perPage:this.perPage,sortBy:this.sortBy?this.sortBy.field:null,sortDir:this.sortDir};return this.data(t)}{const t={source:this.data};return h(this.handler.filterHandler(this.data,this.filter,this.normalizedColumns)).then(e=>h(this.handler.sortHandler(t.filtered=e,this.sortBy,this.sortDir))).then(e=>h(this.handler.paginateHandler(t.sorted=e,this.perPage,this.page))).then(e=>h(this.handler.displayHandler(Object.assign(Object.assign({},t),{paged:e}))))}}processRows(){return h(this.processRowsIn()).then(t=>this.setTableContent(t))}setTableContent({rows:t,totalRowCount:e}={}){"object"==typeof t&&(this.displayedRows=t),"number"==typeof e&&(this.totalRows=e)}emitNewPage(){return this.page}getRowClasses(t){const e="function"==typeof this.rowClasses?this.rowClasses(t):this.rowClasses,s=this.tableType.setting("table.row.class");return u(s,e)}initWatchCriterions(){for(const t of["filter","perPage","page","sortBy","sortDir"])this.$watch(t,this.processRows,{immediate:!1,deep:!0});return this.processRows()}refreshPageCount(){return this.totalPages}refreshPage(){return this.page}};f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:String,default:"default"})],$.prototype,"name",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Boolean,default:!1})],$.prototype,"waitForPager",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Array,required:!0})],$.prototype,"columns",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({required:!0})],$.prototype,"data",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:[String,Array],default:null})],$.prototype,"filter",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:Number,default:1/0})],$.prototype,"perPage",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Prop)({type:d.concat([Function]),default:null})],$.prototype,"rowClasses",void 0),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("data",{deep:!0,immediate:!1}),(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("columns",{deep:!0,immediate:!1})],$.prototype,"processRows",null),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("page",{immediate:!0}),(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Emit)(b("page-changed"))],$.prototype,"emitNewPage",null),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("totalRows"),(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("perPage"),(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Emit)(b("page-count-changed"))],$.prototype,"refreshPageCount",null),f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Watch)("page"),(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Emit)(b("page-changed"))],$.prototype,"refreshPage",null),$=f([(0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Component)(Object.assign({},{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{class:t.tableClass},[s("thead",[s("tr",t._l(t.normalizedColumns,(function(e,n){return s("datatable-header",{key:n,attrs:{column:e,direction:t.getSortDirectionForColumn(e)},on:{change:t.setSortDirectionForColumn}})})),1)]),s("tbody",[t._l(t.displayedRows,(function(e,n){return t._t("default",[s("tr",{key:n,class:t.getRowClasses(e)},t._l(t.normalizedColumns,(function(t,n){return s("datatable-cell",{key:n,attrs:{column:t,row:e}})})),1)],{row:e,index:n,columns:t.normalizedColumns})})),0==t.displayedRows.length?s("tr",[s("td",{attrs:{colspan:t.normalizedColumns.length}},[t._t("no-results")],2)]):t._e()],2),t.$slots.footer||t.$scopedSlots.footer?s("tfoot",[t._t("footer",null,{rows:t.displayedRows,columns:t.normalizedColumns,pagination:t.currentPageRange})],2):t._e()])},staticRenderFns:[]}))],$);class j{constructor(t,e=new C){this.id=t,this.handler=e,this.settings=new P,this.setFilterHandler=this.setHandler.bind(this,"filter"),this.setSortHandler=this.setHandler.bind(this,"sort"),this.setPaginateHandler=this.setHandler.bind(this,"paginate"),this.setDisplayHandler=this.setHandler.bind(this,"display")}get tableTypeConsumer(){return _(this)}setHandler(t,e){return this.handler[t+"Handler"]=e,this}setting(t,e){return void 0===e?this.settings.get(t):(this.settings.set(t,e),this)}mergeSettings(t){return this.settings.merge(t),this}getTableDefinition(){return (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Mixins)($,this.tableTypeConsumer)}getPagerDefinition(){return (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__.Mixins)(S,this.tableTypeConsumer)}}const x=new class I{constructor(){this.tableTypes={},this.defaultTableType=new j("datatable"),this.tableTypes={},this.useDefaultType(!0)}getTableType(t="datatable"){return this.tableTypes[t]}useDefaultType(t){return"boolean"==typeof t||t?(t?this.registerTableType(this.defaultTableType):this.deregisterTableType(this.defaultTableType),this):this.tableTypes.datatable===this.defaultTableType}registerTableType(t,e){const s=t instanceof j?t:new j(t),n=e&&"function"==typeof e&&e(s)||s,r=n.id;return this.tableTypes[r]=n,this.vueInstance&&this.installTableType(r),this}deregisterTableType(t){const e=t instanceof j?t.id:t;return this.vueInstance&&this.uninstallTableType(e),delete this.tableTypes[e],this}install(t){this.vueInstance=t,t.prototype.$datatables={},t.component("datatable-cell",T),t.component("datatable-header",w);for(const t of Object.values(this.tableTypes))this.installTableType(t.id)}installTableType(t){if(!this.vueInstance)throw Error("Not installed yet.");const e=this.tableTypes[t],s=e.getTableDefinition();this.vueInstance.component(t,s);const n=e.getPagerDefinition();return this.vueInstance.component(t+"-pager",n),this}uninstallTableType(t){const e=this.vueInstance.options.components;return delete e[t],delete e[t+"-pager"],this}};
//# sourceMappingURL=vuejs-datatable.esm.js.map


/***/ })

}]);