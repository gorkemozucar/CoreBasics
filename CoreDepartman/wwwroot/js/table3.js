﻿/*!
 DataTables UIkit 3 integration
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (a, b, c) { a instanceof String && (a = String(a)); for (var e = a.length, d = 0; d < e; d++) { var f = a[d]; if (b.call(c, f, d, a)) return { i: d, v: f } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) { if (a == Array.prototype || a == Object.prototype) return a; a[b] = c.value; return a }; $jscomp.getGlobal = function (a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x"); $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; var $jscomp$lookupPolyfilledValue = function (a, b) { var c = $jscomp.propertyToPolyfillSymbol[b]; if (null == c) return a[b]; c = a[c]; return void 0 !== c ? c : a[b] };
$jscomp.polyfill = function (a, b, c, e) { b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e)) }; $jscomp.polyfillUnisolated = function (a, b, c, e) { c = $jscomp.global; a = a.split("."); for (e = 0; e < a.length - 1; e++) { var d = a[e]; if (!(d in c)) return; c = c[d] } a = a[a.length - 1]; e = c[a]; b = b(e); b != e && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b }) };
$jscomp.polyfillIsolated = function (a, b, c, e) {
    var d = a.split("."); a = 1 === d.length; e = d[0]; e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var f = 0; f < d.length - 1; f++) { var l = d[f]; if (!(l in e)) return; e = e[l] } d = d[d.length - 1]; c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null; b = b(c); null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: b }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
        $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, { configurable: !0, writable: !0, value: b })))
}; $jscomp.polyfill("Array.prototype.find", function (a) { return a ? a : function (b, c) { return $jscomp.findInternal(this, b, c).v } }, "es6", "es3");
(function (a) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (b) { return a(b, window, document) }) : "object" === typeof exports ? module.exports = function (b, c) { b || (b = window); c && c.fn.dataTable || (c = require("datatables.net")(b, c).$); return a(c, b, b.document) } : a(jQuery, window, document) })(function (a, b, c, e) {
    var d = a.fn.dataTable; a.extend(!0, d.defaults, {
        dom: "<'row uk-grid'<'uk-width-1-2'l><'uk-width-1-2'f>><'row uk-grid dt-merge-grid'<'uk-width-1-1'tr>><'row uk-grid dt-merge-grid'<'uk-width-2-5'i><'uk-width-3-5'p>>",
        renderer: "uikit"
    }); a.extend(d.ext.classes, { sWrapper: "dataTables_wrapper uk-form dt-uikit", sFilterInput: "uk-form-small uk-input", sLengthSelect: "uk-form-small uk-select", sProcessing: "dataTables_processing uk-panel" }); d.ext.renderer.pageButton.uikit = function (f, l, A, B, m, t) {
        var u = new d.Api(f), C = f.oClasses, n = f.oLanguage.oPaginate, D = f.oLanguage.oAria.paginate || {}, h, g, v = 0, y = function (q, w) {
            var x, E = function (p) { p.preventDefault(); a(p.currentTarget).hasClass("disabled") || u.page() == p.data.action || u.page(p.data.action).draw("page") };
            var r = 0; for (x = w.length; r < x; r++) {
                var k = w[r]; if (Array.isArray(k)) y(q, k); else {
                    g = h = ""; switch (k) {
                        case "ellipsis": h = '<i class="uk-icon-ellipsis-h"></i>'; g = "uk-disabled disabled"; break; case "first": h = '<i class="uk-icon-angle-double-left"></i> ' + n.sFirst; g = 0 < m ? "" : " uk-disabled disabled"; break; case "previous": h = '<i class="uk-icon-angle-left"></i> ' + n.sPrevious; g = 0 < m ? "" : "uk-disabled disabled"; break; case "next": h = n.sNext + ' <i class="uk-icon-angle-right"></i>'; g = m < t - 1 ? "" : "uk-disabled disabled"; break; case "last": h =
                            n.sLast + ' <i class="uk-icon-angle-double-right"></i>'; g = m < t - 1 ? "" : " uk-disabled disabled"; break; default: h = k + 1, g = m === k ? "uk-active" : ""
                    }if (h) { var F = a("<li>", { "class": C.sPageButton + " " + g, id: 0 === A && "string" === typeof k ? f.sTableId + "_" + k : null }).append(a(-1 != g.indexOf("disabled") || -1 != g.indexOf("active") ? "<span>" : "<a>", { href: "#", "aria-controls": f.sTableId, "aria-label": D[k], "data-dt-idx": v, tabindex: f.iTabIndex }).html(h)).appendTo(q); f.oApi._fnBindAction(F, { action: k }, E); v++ }
                }
            }
        }; try { var z = a(l).find(c.activeElement).data("dt-idx") } catch (q) { } y(a(l).empty().html('<ul class="uk-pagination uk-pagination-right uk-flex-right"/>').children("ul"),
            B); z && a(l).find("[data-dt-idx=" + z + "]").trigger("focus")
    }; return d
});