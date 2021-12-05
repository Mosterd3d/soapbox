"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_ProductList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "ProductList",
  props: ['items'],
  data: function data() {
    return {
      deleteItems: [],
      select: '',
      all_select: false,
      select_delete_text: 'Delete All',
      fields: {} // errors: {}

    };
  },
  methods: {
    deleteProduct: function deleteProduct() {
      var _this = this;

      axios.post('api/remove', this.deleteItems).then(function (response) {
        _this.$emit('updateProducts', response.data);
      });
    },
    select_all_via_check_box: function select_all_via_check_box() {
      var _this2 = this;

      if (this.all_select === false) {
        this.all_select = true;
        this.items.forEach(function (item) {
          _this2.deleteItems.push(item.id);
        });
      } else {
        this.all_select = false;
        this.deleteItems = [];
      }
    },
    handleBlur: function handleBlur(product) {
      var _this3 = this;

      // this.errors = {};
      this.fields = {
        name: product.name,
        stock: product.stock,
        price: product.price
      };
      axios.post("api/update/".concat(product.id), this.fields).then(function (response) {
        _this3.$emit('updateProducts', response.data);
      })["catch"](function (error) {
        if (error.response.status === 422) {// TODO: @Do something with error handling :)
          // this.errors = error.response.data.errors || {};
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=821f64a6& */ "./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=template&id=821f64a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "productList" }, [
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.select,
            expression: "select",
          },
        ],
        staticStyle: { "margin-bottom": "10px" },
        on: {
          change: [
            function ($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function (o) {
                  return o.selected
                })
                .map(function (o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.select = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
            _vm.deleteProduct,
          ],
        },
      },
      [
        _c("option", { attrs: { value: "" } }, [_vm._v("Select")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "" } }, [_vm._v("Delete")]),
      ]
    ),
    _vm._v(" "),
    _c(
      "table",
      { staticClass: "table table-bordered table-responsive-lg" },
      [
        _c("tr", [
          _c("th", { staticStyle: { width: "1%" } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.all_select,
                  expression: "all_select",
                },
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.all_select)
                  ? _vm._i(_vm.all_select, null) > -1
                  : _vm.all_select,
              },
              on: {
                click: _vm.select_all_via_check_box,
                change: function ($event) {
                  var $$a = _vm.all_select,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.all_select = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.all_select = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.all_select = $$c
                  }
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "20%" } }, [_vm._v("Product Name")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "5%" } }, [
            _vm._v("Quantity in Stock"),
          ]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Price")]),
          _vm._v(" "),
          _c("th", { staticStyle: { width: "10%" } }, [_vm._v("Total")]),
        ]),
        _vm._v(" "),
        _vm._l(_vm.items, function (product, index) {
          return _c("tr", { staticClass: "single-product" }, [
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.deleteItems,
                    expression: "deleteItems",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  value: "" + product.id,
                  checked: Array.isArray(_vm.deleteItems)
                    ? _vm._i(_vm.deleteItems, "" + product.id) > -1
                    : _vm.deleteItems,
                },
                on: {
                  change: function ($event) {
                    var $$a = _vm.deleteItems,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "" + product.id,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.deleteItems = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.deleteItems = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.deleteItems = $$c
                    }
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: product.name,
                    expression: "product.name",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  size: "14",
                  type: "text",
                  placeholder: "Product Name*",
                  name: "name",
                  id: "name",
                },
                domProps: { value: product.name },
                on: {
                  blur: function ($event) {
                    return _vm.handleBlur(product)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(product, "name", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: product.stock,
                    expression: "product.stock",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  size: "4",
                  type: "number",
                  placeholder: "Quantity of stock*",
                  name: "stock",
                  id: "stock",
                },
                domProps: { value: product.stock },
                on: {
                  blur: function ($event) {
                    return _vm.handleBlur(product)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(product, "stock", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: product.price,
                    expression: "product.price",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  size: "10",
                  step: "0.01",
                  type: "number",
                  placeholder: "Price*",
                  name: "price",
                  id: "price",
                },
                domProps: { value: product.price },
                on: {
                  blur: function ($event) {
                    return _vm.handleBlur(product)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(product, "price", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(_vm._s((product.price * product.stock).toFixed(2))),
            ]),
          ])
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);