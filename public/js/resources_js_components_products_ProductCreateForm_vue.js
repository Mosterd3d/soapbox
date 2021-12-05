"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_ProductCreateForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: {},
      errors: {}
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.errors = {};
      axios.post('api/submit', this.fields).then(function (response) {
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

/***/ "./resources/js/components/products/ProductCreateForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/products/ProductCreateForm.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCreateForm.vue?vue&type=template&id=7e473aaf& */ "./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf&");
/* harmony import */ var _ProductCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCreateForm.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductCreateForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCreateForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreateForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCreateForm_vue_vue_type_template_id_7e473aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCreateForm.vue?vue&type=template&id=7e473aaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductCreateForm.vue?vue&type=template&id=7e473aaf& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.fields.name,
              expression: "fields.name",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: "Product Name*",
            name: "name",
            id: "name",
          },
          domProps: { value: _vm.fields.name },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.fields, "name", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors && _vm.errors.name
          ? _c("div", { staticClass: "text-danger" }, [
              _vm._v(_vm._s(_vm.errors.name[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.fields.stock,
              expression: "fields.stock",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "number",
            placeholder: "Quantity of stock*",
            name: "stock",
            id: "stock",
          },
          domProps: { value: _vm.fields.stock },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.fields, "stock", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors && _vm.errors.stock
          ? _c("div", { staticClass: "text-danger" }, [
              _vm._v(_vm._s(_vm.errors.stock[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.fields.price,
              expression: "fields.price",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "number",
            name: "price",
            id: "price",
            step: "0.01",
            placeholder: "price*",
          },
          domProps: { value: _vm.fields.price },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.fields, "price", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _vm.errors && _vm.errors.price
          ? _c("div", { staticClass: "text-danger" }, [
              _vm._v(_vm._s(_vm.errors.price[0])),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);