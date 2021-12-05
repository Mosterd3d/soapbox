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
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProductList",
  props: ['items'],
  methods: {
    edit: function edit(key, id) {
      console.log("Removing", key);
      console.log('lets edit ' + id);
    },
    remove: function remove(index, id) {
      var _this = this;

      console.log("Removing", index);
      console.log('lets remove ' + id);
      axios["delete"]('api/product/delete/' + id).then(function (response) {
        console.log(response);

        _this.$emit('updateProducts', response.data);
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
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
  return _c(
    "table",
    { staticClass: "table table-bordered table-responsive-lg" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.items, function (product, index) {
        return _c(
          "tr",
          { staticClass: "single-product", on: { if: _vm.items } },
          [
            _c("td", [_vm._v(_vm._s(product.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.stock))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.price))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(product.price * product.stock))]),
            _vm._v(" "),
            _c("td", [
              _c("form", { attrs: { action: "", method: "POST" } }, [
                _c(
                  "a",
                  {
                    attrs: { href: "", title: "edit" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.edit(index, product.id)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fas fa-edit  fa-lg" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticStyle: {
                      border: "none",
                      "background-color": "transparent",
                    },
                    attrs: { type: "submit", title: "delete" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.remove(index, product.id)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fas fa-trash fa-lg text-danger" })]
                ),
              ]),
            ]),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Quantity in Stock")]),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Total")]),
      _vm._v(" "),
      _c("th", [_vm._v("Actions")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);