function labelFormatter(t, e) {
    return "<div style='text-anchor: start;font-family: Arial;font-size: 15px;text-align:center; padding:2px; color:white;'>" +
        t + "<br/>" + Math.round(e.percent) + "%</div>"
}

function afterChangeLang(t) {
    $("[data-i18n]").localize(), $(".i18n-title").each(function () {
            $(this).attr("title", i18next.t($(this).attr("title")))
        }), $(".intro-step").each(function () {
            $(this).attr("data-intro", i18next.t($(this).data("intro-key")))
        }), document.title = i18next.t("nav.home"), $.timeago.settings.strings = webLangCustom[t].translation.timeago,
        "en" == t && $("html").attr("lang", "en")
}

function copyStringToClipboard(t) {
    var e = document.createElement("textarea");
    e.value = t, e.setAttribute("readonly", ""), e.style = {
        position: "absolute",
        left: "-9999px"
    }, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e)
}
if (! function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) :
            function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = "length" in t && t.length,
                n = ot.type(t);
            return "function" !== n && !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e ||
                "number" == typeof e && e > 0 && e - 1 in t))
        }

        function i(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (dt.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function (t) {
                return ot.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = xt[t] = {};
            return ot.each(t.match(bt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load",
                a, !1)) : (pt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (s(), ot.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Tt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(
                            n) ? ot.parseJSON(n) : n)
                    } catch (o) {}
                    ot.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (ot.acceptData(t)) {
                var o, r, s = ot.expando,
                    a = t.nodeType,
                    l = a ? ot.cache : t,
                    c = a ? t[s] : t[s] && s;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[
                        s] = G.pop() || ot.guid++ : s), l[c] || (l[c] = a ? {} : {
                        toJSON: ot.noop
                    }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = ot.extend(l[c], e) : l[
                        c].data = ot.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r
                    .data), void 0 !== n && (r[ot.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null ==
                        o && (o = r[ot.camelCase(e)])) : o = r, o
            }
        }

        function h(t, e, n) {
            if (ot.acceptData(t)) {
                var i, o, r = t.nodeType,
                    s = r ? ot.cache : t,
                    a = r ? t[ot.expando] : ot.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot
                            .camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !c(i) : !ot.isEmptyObject(i)) return
                    }(n || (delete s[a].data, c(s[a]))) && (r ? ot.cleanData([t], !0) : nt.deleteExpando || s != s
                        .window ? delete s[a] : s[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return pt.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Lt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t
                .querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ot.nodeName(i, e) ? r.push(i) :
                    ot.merge(r, g(i, e));
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], r) : r
        }

        function v(t) {
            Nt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t
                .getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
        }

        function x(t) {
            var e = Qt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i],
                "globalEval"))
        }

        function _(t, e) {
            if (1 === e.nodeType && ot.hasData(t)) {
                var n, i, o, r = ot._data(t),
                    s = ot._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, o = a[n].length; o > i; i++) ot.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ot.extend({}, s.data))
            }
        }

        function k(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                    o = ot._data(e);
                    for (i in o.events) ot.removeEvent(e, i, o.handle);
                    e.removeAttribute(ot.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === n ? (e.parentNode &&
                        (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e
                            .innerHTML = t.innerHTML)) : "input" === n && Nt.test(t.type) ? (e.defaultChecked = e
                        .checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e
                    .defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e
                        .defaultValue = t.defaultValue)
            }
        }

        function C(e, n) {
            var i, o = ot(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0],
                    "display");
            return o.detach(), r
        }

        function T(t) {
            var e = pt,
                n = Zt[t];
            return n || (n = C(t, e), "none" !== n && n || (Kt = (Kt || ot(
                    "<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Kt[
                    0].contentWindow || Kt[0].contentDocument).document, e.write(), e.close(), n = C(t, e),
                Kt.detach()), Zt[t] = n), n
        }

        function S(t, e) {
            return {
                get: function () {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function $(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = de.length; o--;)
                if (e = de[o] + n, e in t) return e;
            return i
        }

        function E(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = ot._data(i,
                    "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display && Et(i) && (r[s] = ot._data(i, "olddisplay", T(i.nodeName)))) : (o =
                    Et(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))
                    ));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style
                .display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function N(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
                "margin" === n && (s += ot.css(t, n + $t[r], !0, o)), i ? ("content" === n && (s -= ot.css(t,
                    "padding" + $t[r], !0, o)), "margin" !== n && (s -= ot.css(t, "border" + $t[r] + "Width", !
                    0, o))) : (s += ot.css(t, "padding" + $t[r], !0, o), "padding" !== n && (s += ot.css(t,
                    "border" + $t[r] + "Width", !0, o)));
            return s
        }

        function j(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = te(t),
                s = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = ee(t, e, r), (0 > o || null == o) && (o = t.style[e]), ie.test(o)) return o;
                i = s && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + N(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function O(t, e, n, i, o) {
            return new O.prototype.init(t, e, n, i, o)
        }

        function D() {
            return setTimeout(function () {
                fe = void 0
            }), fe = ot.now()
        }

        function I(t, e) {
            var n, i = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = $t[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function P(t, e, n) {
            for (var i, o = (be[e] || []).concat(be["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function L(t, e, n) {
            var i, o, r, s, a, l, c, u, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && Et(t),
                m = ot._data(t, "fxshow");
            n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a
                .empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX,
                    f.overflowY
                ], c = ot.css(t, "display"), u = "none" === c ? ot._data(t, "olddisplay") || T(t.nodeName) : c,
                "inline" === u && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== T(
                    t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow =
                "hidden", nt.shrinkWrapBlocks() || h.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
            for (i in e)
                if (o = e[i], me.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    d[i] = m && m[i] || ot.style(t, i)
                } else c = void 0;
            if (ot.isEmptyObject(d)) "inline" === ("none" === c ? T(t.nodeName) : c) && (f.display = c);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = ot._data(t, "fxshow", {}), r && (m.hidden = !p), p ? ot(t)
                    .show() : h.done(function () {
                        ot(t).hide()
                    }), h.done(function () {
                        var e;
                        ot._removeData(t, "fxshow");
                        for (e in d) ot.style(t, e, d[e])
                    });
                for (i in d) s = P(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start =
                    "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = ot.camelCase(n), o = e[i], r = t[n], ot.isArray(r) && (o = r[1], r = t[n] = r[0]), n !==
                    i && (t[i] = r, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function R(t, e, n) {
            var i, o, r = 0,
                s = ye.length,
                a = ot.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var e = fe || D(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0,
                            r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: fe || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (M(u, c.opts.specialEasing); s > r; r++)
                if (i = ye[r].call(c, t, u, c.opts)) return i;
            return ot.map(u, P, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(
            l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts
                .always)
        }

        function W(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || [])
                        .unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function F(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, ot.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(
                        c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === Be;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function H(t, e) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function q(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    } if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function B(t, e, n, i) {
            var o, r, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t
                        .dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                            break
                        } if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function z(t, e, n, i) {
            var o;
            if (ot.isArray(e)) ot.each(e, function (e, o) {
                n || Qe.test(t) ? i(t, o) : z(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ot.type(e)) i(t, e);
            else
                for (o in e) z(t + "[" + o + "]", e[o], n, i)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function V() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Q(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var G = [],
            X = G.slice,
            J = G.concat,
            Y = G.push,
            K = G.indexOf,
            Z = {},
            tt = Z.toString,
            et = Z.hasOwnProperty,
            nt = {},
            it = "1.11.3",
            ot = function (t, e) {
                return new ot.fn.init(t, e)
            },
            rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            st = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function (t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: it,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function () {
                return X.call(this)
            },
            get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
            },
            pushStack: function (t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return ot.each(this, t, e)
            },
            map: function (t) {
                return this.pushStack(ot.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: G.sort,
            splice: G.splice
        }, ot.extend = ot.fn.extend = function () {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot
                .isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (i in o) t = s[i], n = o[i], s !== n && (c && n && (ot.isPlainObject(n) || (e = ot
                        .isArray(n))) ? (e ? (e = !1, r = t && ot.isArray(t) ? t : []) : r = t && ot
                        .isPlainObject(t) ? t : {}, s[i] = ot.extend(c, r, n)) : void 0 !== n && (s[i] =
                        n));
            return s
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray || function (t) {
                return "array" === ot.type(t)
            },
            isWindow: function (t) {
                return null != t && t == t.window
            },
            isNumeric: function (t) {
                return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype,
                            "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (nt.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(
                    t)] || "object" : typeof t
            },
            globalEval: function (e) {
                e && ot.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function (t) {
                return t.replace(st, "ms-").replace(at, lt)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(rt, "")
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : Y
                    .call(i, t)), i
            },
            inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (K) return K.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            },
            grep: function (t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a &&
                    o.push(t[r]);
                return o
            },
            map: function (t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && l.push(o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return J.apply([], l)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t) ? (n = X.call(
                    arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(X.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
            },
            now: function () {
                return +new Date
            },
            support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t,
        e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function (t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, h, f, p, m;
                if ((e ? e.ownerDocument || e : F) !== O && j(e), e = e || O, n = n || [], a = e.nodeType,
                    "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && I) {
                    if (11 !== a && (o = yt.exec(t)))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) &&
                                r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && w.getElementsByClassName) return K.apply(n, e
                                .getElementsByClassName(s)), n
                        } if (w.qsa && (!P || !P.test(t))) {
                        if (f = h = W, p = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName
                        .toLowerCase()) {
                            for (c = T(t), (h = e.getAttribute("id")) ? f = h.replace(xt, "\\$&") : e
                                .setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f +
                                d(c[l]);
                            p = bt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return K.apply(n, p.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return $(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) _.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex ||
                        Q);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (
                            n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = q++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, c = [H, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[W] || (e[W] = {}), (a = l[i]) && a[0] === H && a[1] === r)
                                return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function p(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i,
                    o)) && (s.push(r), c && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[W] && (o = v(o)), r && !r[W] && (r = v(r, s)), i(function (i, s, a, l) {
                    var c, u, h, d = [],
                        f = [],
                        p = s.length,
                        v = i || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, d, t, a, l),
                        b = n ? r || (i ? t : p || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (c = g(b, f), o(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[f[u]] = !(
                            y[f[u]] = h));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(h = b[u]) && (c = r ? tt(i, h) : d[u]) > -1 && (i[
                                c] = !(s[c] = h))
                        }
                    } else b = g(b === s ? b.splice(p, b.length) : b), r ? r(null, s, b, l) : K.apply(s,
                        b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 :
                        0, l = f(function (t) {
                            return t === e
                        }, s, !0), c = f(function (t) {
                            return tt(e, t) > -1
                        }, s, !0), u = [function (t, n, i) {
                            var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                            return e = null, o
                        }]; o > a; a++)
                    if (n = _.relative[t[a].type]) u = [f(p(u), n)];
                    else {
                        if (n = _.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                            for (i = ++a; o > i && !_.relative[t[i].type]; i++);
                            return v(a > 1 && p(u), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(
                                i)), o > i && d(t))
                        }
                        u.push(n)
                    } return p(u)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function (i, s, a, l, c) {
                        var u, h, d, f = 0,
                            p = "0",
                            m = i && [],
                            v = [],
                            y = E,
                            b = i || r && _.find.TAG("*", c),
                            x = H += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (E = s !== O && s); p !== w && null != (u = b[p]); p++) {
                            if (r && u) {
                                for (h = 0; d = t[h++];)
                                    if (d(u, s, a)) {
                                        l.push(u);
                                        break
                                    } c && (H = x)
                            }
                            o && ((u = !d && u) && f--, i && m.push(u))
                        }
                        if (f += p, o && p !== f) {
                            for (h = 0; d = n[h++];) d(m, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) m[p] || v[p] || (v[p] = J.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (H = x, E = y), m
                    };
                return o ? i(s) : s
            }
            var x, w, _, k, C, T, S, $, E, A, N, j, O, D, I, P, L, M, R, W = "sizzle" + 1 * new Date,
                F = t.document,
                H = 0,
                q = 0,
                B = n(),
                z = n(),
                U = n(),
                V = function (t, e) {
                    return t === e && (N = !0), 0
                },
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                X = [],
                J = X.pop,
                Y = X.push,
                K = X.push,
                Z = X.slice,
                tt = function (t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                st = ":(" + it +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt +
                ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(st),
                ft = new RegExp("^" + ot + "$"),
                pt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt +
                        "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                xt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                _t = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >>
                        10 | 55296, 1023 & i | 56320)
                },
                kt = function () {
                    j()
                };
            try {
                K.apply(X = Z.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
            } catch (Ct) {
                K = {
                    apply: X.length ? function (t, e) {
                        Y.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, j = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, D = i.documentElement, n =
                    i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener(
                        "unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), I = !C(i),
                    w.attributes = o(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = o(function (t) {
                        return t.appendChild(i.createComment("")), !t.getElementsByTagName("*")
                            .length
                    }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = o(
                        function (t) {
                            return D.appendChild(t).id = W, !i.getElementsByName || !i
                                .getElementsByName(W).length
                        }), w.getById ? (_.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && I) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function (t) {
                        var e = t.replace(wt, _t);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (t) {
                        var e = t.replace(wt, _t);
                        return function (t) {
                            var n = "undefined" != typeof t.getAttributeNode && t
                                .getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = w.getElementsByTagName ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(
                            t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, _.find.CLASS = w.getElementsByClassName && function (t, e) {
                        return I ? e.getElementsByClassName(t) : void 0
                    }, L = [], P = [], (w.qsa = vt.test(i.querySelectorAll)) && (o(function (t) {
                        D.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W +
                            "-\f]' msallowcapture=''><option selected=''></option></select>", t
                            .querySelectorAll("[msallowcapture^='']").length && P.push(
                                "[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll(
                                "[selected]").length || P.push("\\[" + nt + "*(?:value|" + et +
                                ")"), t.querySelectorAll("[id~=" + W + "-]").length || P.push(
                                "~="), t.querySelectorAll(":checked").length || P.push(
                                ":checked"), t.querySelectorAll("a#" + W + "+*").length || P
                            .push(".#.+[+~]")
                    }), o(function (t) {
                        var e = i.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name",
                                "D"), t.querySelectorAll("[name=d]").length && P.push("name" +
                                nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P
                            .push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(
                                ",.*:")
                    })), (w.matchesSelector = vt.test(M = D.matches || D.webkitMatchesSelector || D
                        .mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(
                        function (t) {
                            w.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), L.push("!=",
                                st)
                        }), P = P.length && new RegExp(P.join("|")), L = L.length && new RegExp(L.join(
                        "|")), e = vt.test(D.compareDocumentPosition), R = e || vt.test(D.contains) ?
                    function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t
                            .compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, V = e ? function (t, e) {
                        if (t === e) return N = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t
                            .compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e
                            .compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F &&
                            R(F, t) ? -1 : e === i || e.ownerDocument === F && R(F, e) ? 1 : A ? tt(
                                A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return N = !0, 0;
                        var n, o = 0,
                            r = t.parentNode,
                            a = e.parentNode,
                            l = [t],
                            c = [e];
                        if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : A ? tt(A,
                            t) - tt(A, e) : 0;
                        if (r === a) return s(t, e);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (; l[o] === c[o];) o++;
                        return o ? s(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                    }, i) : O
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== O && j(t), n = n.replace(ht, "='$1']"), !(!w
                        .matchesSelector || !I || L && L.test(n) || P && P.test(n))) try {
                    var i = M.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, O, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== O && j(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== O && j(t);
                var n = _.attrHandle[e.toLowerCase()],
                    i = n && G.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(
                    e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (N = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(V), N) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, k = e.getText = function (t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += k(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(
                            wt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(
                                t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] ||
                                "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e
                            .error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt
                            .test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n
                                .length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t
                            .slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, _t).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t,
                            function (t) {
                                return e.test("string" == typeof t.className && t.className ||
                                    "undefined" != typeof t.getAttribute && t.getAttribute(
                                        "class") || "")
                            })
                    },
                    ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i :
                                "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) :
                                "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(
                                    -i.length) === i : "~=" === n ? (" " + r.replace(at, " ") +
                                    " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0,
                                    i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, h, d, f, p, m = r !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h
                                                .nodeType) return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (u = g[W] || (g[W] = {}), c = u[t] || [], f = c[0] === H &&
                                        c[1], d = c[0] === H && c[2], h = f && g.childNodes[
                                        f]; h = ++f && h && h[m] || (d = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            u[t] = [H, f, d];
                                            break
                                        }
                                } else if (y && (c = (e[W] || (e[W] = {}))[t]) && c[0] === H) d = c[
                                    1];
                                else
                                    for (;
                                        (h = ++f && h && h[m] || (d = f = 0) || p.pop()) && ((a ? h
                                                .nodeName.toLowerCase() !== v : 1 !== h.nodeType) ||
                                            !++d || (y && ((h[W] || (h[W] = {}))[t] = [H, d]), h !==
                                                e)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, n) {
                        var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error(
                            "unsupported pseudo: " + t);
                        return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], _.setFilters
                            .hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[
                                    i] = !(e[i] = o[s])
                            }) : function (t) {
                                return r(t, 0, o)
                            }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [],
                            n = [],
                            o = S(t.replace(lt, "$1"));
                        return o[W] ? i(function (t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[
                                a]) && (t[a] = !(e[a] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function (t) {
                        return t = t.replace(wt, _t),
                            function (e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function (t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(
                                wt, _t).toLowerCase(),
                            function (e) {
                                var n;
                                do
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e
                                        .getAttribute("lang")) return n = n.toLowerCase(), n ===
                                        t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) &&
                                    1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === D
                    },
                    focus: function (t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t
                            .href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return t.disabled === !1
                    },
                    disabled: function (t) {
                        return t.disabled === !0
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !_.pseudos.empty(t)
                    },
                    header: function (t) {
                        return gt.test(t.nodeName)
                    },
                    input: function (t) {
                        return mt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (
                            e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (t, e) {
                        return [e - 1];
                    }),
                    eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[x] = l(x);
            return h.prototype = _.filters = _.pseudos, _.setFilters = new h, T = e.tokenize = function (t, n) {
                    var i, o, r, s, a, l, c, u = z[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, l = [], c = _.preFilter; a;) {
                        (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i
                            = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                                value: i,
                                type: o[0].replace(lt, " ")
                            }), a = a.slice(i.length));
                        for (s in _.filter) !(o = pt[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r
                            .push({
                                value: i,
                                type: s,
                                matches: o
                            }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
                }, S = e.compile = function (t, e) {
                    var n, i = [],
                        o = [],
                        r = U[t + " "];
                    if (!r) {
                        for (e || (e = T(t)), n = e.length; n--;) r = y(e[n]), r[W] ? i.push(r) : o.push(r);
                        r = U(t, b(o, i)), r.selector = t
                    }
                    return r
                }, $ = e.select = function (t, e, n, i) {
                    var o, r, s, a, l, c = "function" == typeof t && t,
                        h = !i && T(t = c.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById &&
                            9 === e.nodeType && I && _.relative[r[1].type]) {
                            if (e = (_.find.ID(s.matches[0].replace(wt, _t), e) || [])[0], !e) return n;
                            c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                        }
                        for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s
                                .type]);)
                            if ((l = _.find[a]) && (i = l(s.matches[0].replace(wt, _t), bt.test(r[0].type) && u(
                                    e.parentNode) || e))) {
                                if (r.splice(o, 1), t = i.length && d(r), !t) return K.apply(n, i), n;
                                break
                            }
                    }
                    return (c || S(t, h))(i, e, !I, n, bt.test(t) && u(e.parentNode) || e), n
                }, w.sortStable = W.split("").sort(V).join("") === W, w.detectDuplicates = !!N, j(), w
                .sortDetached = o(function (t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), o(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function (t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t
                        .firstChild.getAttribute("value")
                }) || r("value", function (t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), o(function (t) {
                    return null == t.getAttribute("disabled")
                }) || r(et, function (t, e, n) {
                    var i;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i
                        .specified ? i.value : null
                }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text =
            ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ut = ot.expr.match.needsContext,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            dt = /^.[^:#\[\.,]*$/;
        ot.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i,
                t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function (t) {
                var e, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
                    for (e = 0; o > e; e++)
                        if (ot.contains(i[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ot.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this
                    .selector + " " + t : t, n
            },
            filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function (t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var ft, pt = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = ot.fn.init = function (t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t,
                        null] : mt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ft).find(t) : this
                        .constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e
                                .ownerDocument || e : pt, !0)), ht.test(n[1]) && ot.isPlainObject(e))
                            for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = pt.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return ft.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = pt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ?
                    "undefined" != typeof ft.ready ? ft.ready(t) : t(ot) : (void 0 !== t.selector && (this
                        .selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            };
        gt.prototype = ot.fn, ft = ot(pt);
        var vt = /^(?:parents|prev(?:Until|All))/,
            yt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType ||
                        !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            },
            sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ot.fn.extend({
            has: function (t) {
                var e, n = ot(t, this),
                    i = n.length;
                return this.filter(function () {
                    for (e = 0; i > e; e++)
                        if (ot.contains(this, n[e])) return !0
                })
            },
            closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], s = ut.test(t) || "string" != typeof t ? ot(
                        t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find
                                .matchesSelector(n, t))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? ot.unique(r) : r)
            },
            index: function (t) {
                return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[
                        0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length :
                    -1
            },
            add: function (t, e) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return ot.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return ot.dir(t, "parentNode", n)
            },
            next: function (t) {
                return o(t, "nextSibling")
            },
            prev: function (t) {
                return o(t, "previousSibling")
            },
            nextAll: function (t) {
                return ot.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return ot.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return ot.dir(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return ot.dir(t, "previousSibling", n)
            },
            siblings: function (t) {
                return ot.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return ot.sibling(t.firstChild)
            },
            contents: function (t) {
                return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot
                    .merge([], t.childNodes)
            }
        }, function (t, e) {
            ot.fn[t] = function (n, i) {
                var o = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(
                    i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o
                    .reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g,
            xt = {};
        ot.Callbacks = function (t) {
            t = "string" == typeof t ? xt[t] || r(t) : ot.extend({}, t);
            var e, n, i, o, s, a, l = [],
                c = !t.once && [],
                u = function (r) {
                    for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                        if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        } e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : h.disable())
                },
                h = {
                    add: function () {
                        if (l) {
                            var i = l.length;
                            ! function r(e) {
                                ot.each(e, function (e, n) {
                                    var i = ot.type(n);
                                    "function" === i ? t.unique && h.has(n) || l.push(n) : n && n
                                        .length && "string" !== i && r(n)
                                })
                            }(arguments), e ? o = l.length : n && (a = i, u(n))
                        }
                        return this
                    },
                    remove: function () {
                        return l && ot.each(arguments, function (t, n) {
                            for (var i;
                                (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i &&
                                o--, s >= i && s--)
                        }), this
                    },
                    has: function (t) {
                        return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], o = 0, this
                    },
                    disable: function () {
                        return l = c = n = void 0, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return c = void 0, n || h.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (t, n) {
                        return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(
                            n) : u(n)), this
                    },
                    fire: function () {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return h
        }, ot.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return ot.Deferred(function (n) {
                                ot.each(e, function (e, r) {
                                    var s = ot.isFunction(t[e]) && t[e];
                                    o[r[1]](function () {
                                        var t = s && s.apply(this,
                                            arguments);
                                        t && ot.isFunction(t.promise) ? t
                                            .promise().done(n.resolve).fail(
                                                n.reject).progress(n
                                            .notify) : n[r[0] + "With"](
                                                this === i ? n.promise() :
                                                this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? ot.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ot.each(e, function (t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function (t) {
                var e, n, i, o = 0,
                    r = X.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    c = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : o, i ===
                                e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && ot
                        .isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject)
                        .progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var wt;
        ot.fn.ready = function (t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function (t) {
                if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!pt.body) return setTimeout(ot.ready);
                    ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (wt.resolveWith(pt, [ot]), ot.fn
                        .triggerHandler && (ot(pt).triggerHandler("ready"), ot(pt).off("ready")))
                }
            }
        }), ot.ready.promise = function (e) {
            if (!wt)
                if (wt = ot.Deferred(), "complete" === pt.readyState) setTimeout(ot.ready);
                else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", a, !1), t
                .addEventListener("load", a, !1);
            else {
                pt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && pt.documentElement
                } catch (i) {}
                n && n.doScroll && ! function o() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        s(), ot.ready()
                    }
                }()
            }
            return wt.promise(e)
        };
        var _t, kt = "undefined";
        for (_t in ot(nt)) break;
        nt.ownLast = "0" !== _t, nt.inlineBlockNeedsLayout = !1, ot(function () {
                var t, e, n, i;
                n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt
                    .createElement("div"), i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i)
                    .appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText =
                        "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt
                        .inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n
                    .removeChild(i))
            }),
            function () {
                var t = pt.createElement("div");
                if (null == nt.deleteExpando) {
                    nt.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        nt.deleteExpando = !1
                    }
                }
                t = null
            }(), ot.acceptData = function (t) {
                var e = ot.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
            };
        var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Tt = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !c(t)
            },
            data: function (t, e, n) {
                return u(t, e, n)
            },
            removeData: function (t, e) {
                return h(t, e)
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return h(t, e, !0)
            }
        }), ot.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r,
                        "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (
                            i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                        ot._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    ot.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ot.data(this, t, e)
                }) : r ? l(r, t, ot.data(r, t)) : void 0
            },
            removeData: function (t) {
                return this.each(function () {
                    ot.removeData(this, t)
                })
            }
        }), ot.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ?
                    i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = ot.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = ot._queueHooks(t, e),
                    s = function () {
                        ot.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"),
                    delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ot._data(t, n) || ot._data(t, n, {
                    empty: ot.Callbacks("once memory").add(function () {
                        ot._removeData(t, e + "queue"), ot._removeData(t, n)
                    })
                })
            }
        }), ot.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(
                    this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(
                        this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    o = ot.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = ot._data(r[
                    s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $t = ["Top", "Right", "Bottom", "Left"],
            Et = function (t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            At = ot.access = function (t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === ot.type(n)) {
                    o = !0;
                    for (a in n) ot.access(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e =
                        null) : (c = e, e = function (t, e, n) {
                            return c.call(ot(t), n)
                        })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            Nt = /^(?:checkbox|radio)$/i;
        ! function () {
            var t = pt.createElement("input"),
                e = pt.createElement("div"),
                n = pt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt
                .leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody")
                .length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone =
                "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t
                .checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML =
                "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n
                .appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e
                .cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e
                    .attachEvent("onclick", function () {
                        nt.noCloneEvent = !1
                    }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    nt.deleteExpando = !1
                }
            }
        }(),
        function () {
            var e, n, i = pt.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i
                .attributes[n].expando === !1);
            i = null
        }();
        var jt = /^(?:input|select|textarea)$/i,
            Ot = /^key/,
            Dt = /^(?:mouse|pointer|contextmenu)|click/,
            It = /^(?:focusinfocus|focusoutblur)$/,
            Pt = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, s, a, l, c, u, h, d, f, p, m, g = ot._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot
                        .guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle =
                            function (t) {
                                return typeof ot === kt || t && ot.event.triggered === t.type ? void 0 : ot
                                    .event.dispatch.apply(u.elem, arguments)
                            }, u.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) r = Pt
                        .exec(e[a]) || [], f = m = r[1], p = (r[2] || "").split(".").sort(), f && (c = ot
                            .event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ot
                            .event.special[f] || {}, h = ot.extend({
                                type: f,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && ot.expr.match.needsContext.test(o),
                                namespace: p.join(".")
                            }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, c.setup && c.setup
                                .call(t, i, p, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !
                                    1) : t.attachEvent && t.attachEvent("on" + f, u))), c.add && (c.add
                                .call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? d.splice(d
                                .delegateCount++, 0, h) : d.push(h), ot.event.global[f] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, s, a, l, c, u, h, d, f, p, m, g = ot.hasData(t) && ot._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                        if (a = Pt.exec(e[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (h = ot.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f,
                                d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") +
                                    "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && m !== s.origType ||
                                n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s
                                .selector && ("**" !== i || !s.selector) || (d.splice(r, 1), s.selector && d
                                    .delegateCount--, h.remove && h.remove.call(t, s));
                            l && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || ot
                                .removeEvent(t, f, g.handle), delete u[f])
                        } else
                            for (f in u) ot.event.remove(t, f + e[c], n, i, !0);
                    ot.isEmptyObject(u) && (delete g.handle, ot._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var r, s, a, l, c, u, h, d = [i || pt],
                    f = et.call(e, "type") ? e.type : e,
                    p = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(f + ot.event
                        .triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()),
                        s = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f,
                            "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = p.join("."),
                        e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") +
                            "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null ==
                        n ? [e] : ot.makeArray(n, [e]), c = ot.event.special[f] || {}, o || !c.trigger || c
                        .trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !ot.isWindow(i)) {
                        for (l = c.delegateType || f, It.test(l + f) || (a = a.parentNode); a; a = a
                            .parentNode) d.push(a), u = a;
                        u === (i.ownerDocument || pt) && d.push(u.defaultView || u.parentWindow || t)
                    }
                    for (h = 0;
                        (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : c.bindType || f,
                        r = (ot._data(a, "events") || {})[e.type] && ot._data(a, "handle"), r && r.apply(a,
                            n), r = s && a[s], r && r.apply && ot.acceptData(a) && (e.result = r.apply(a,
                            n), e.result === !1 && e.preventDefault());
                    if (e.type = f, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(d
                        .pop(), n) === !1) && ot.acceptData(i) && s && i[f] && !ot.isWindow(i)) {
                        u = i[s], u && (i[s] = null), ot.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        ot.event.triggered = void 0, u && (i[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = ot.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = X.call(arguments),
                    l = (ot._data(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !
                    1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re ||
                            t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n =
                            ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a),
                            void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t
                                .stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; a > r; r++) i = e[r], n = i.selector + " ", void 0 === o[
                                n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this,
                                    null, [l]).length), o[n] && o.push(i);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function (t) {
                if (t[ot.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Dt.test(o) ? this.mouseHooks : Ot.test(o) ? this
                        .keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot
                    .Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || pt), 3 === t.target.nodeType && (t.target = t
                    .target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
                .split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                    .split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pt, o = i
                        .documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n
                            .scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY =
                        e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop ||
                            n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t
                        .target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 :
                        2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this
                            .click(), !1) : void 0
                    },
                    _default: function (t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = ot.extend(new ot.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n
                    .preventDefault()
            }
        }, ot.removeEvent = pt.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === kt && (t[i] = null), t.detachEvent(i, n))
        }, ot.Event = function (t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this
                    .isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t
                    .returnValue === !1 ? d : f) : this.type = t, e && ot.extend(this, e), this.timeStamp =
                t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !
                    1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t
                    .cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t
                    .stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !ot.contains(i, o)) && (t.type = r.origType, n = r
                        .handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function () {
                return !ot.nodeName(this, "form") && void ot.event.add(this,
                    "click._submit keypress._submit",
                    function (t) {
                        var e = t.target,
                            n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form :
                            void 0;
                        n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit",
                            function (t) {
                                t._submit_bubble = !0
                            }), ot._data(n, "submitBubbles", !0))
                    })
            },
            postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot
                    .event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function () {
                return !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function () {
                return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) &&
                    (ot.event.add(this, "propertychange._change", function (t) {
                        "checked" === t.originalEvent.propertyName && (this
                            ._just_changed = !0)
                    }), ot.event.add(this, "click._change", function (t) {
                        this._just_changed && !t.isTrigger && (this._just_changed = !1), ot
                            .event.simulate("change", this, t, !0)
                    })), !1) : void ot.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    jt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e,
                        "change._change",
                        function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || ot.event
                                .simulate("change", this.parentNode, t, !0)
                        }), ot._data(e, "changeBubbles", !0))
                })
            },
            handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type &&
                    "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
            ot.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e);
                    o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        o = ot._data(i, e) - 1;
                    o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
                }
            }
        }), ot.fn.extend({
            on: function (t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" ==
                        typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === o && (s = i, i = function (t) {
                    return ot().off(t), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = ot.guid++)), this.each(function () {
                    ot.event.add(this, t, i, n, e)
                })
            },
            one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget)
                    .off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i
                        .handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f),
                    this.each(function () {
                        ot.event.remove(this, t, n, e)
                    })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                return n ? ot.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Lt =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Mt = / jQuery\d+="(?:null|\d+)"/g,
            Rt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
            Wt = /^\s+/,
            Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ht = /<([\w:]+)/,
            qt = /<tbody/i,
            Bt = /<|&#?\w+;/,
            zt = /<(?:script|style|link)/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Vt = /^$|\/(?:java|ecma)script/i,
            Qt = /^true\/(.*)/,
            Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Jt = m(pt),
            Yt = Jt.appendChild(pt.createElement("div"));
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, ot
            .extend({
                clone: function (t, e, n) {
                    var i, o, r, s, a, l = ot.contains(t.ownerDocument, t);
                    if (nt.html5Clone || ot.isXMLDoc(t) || !Rt.test("<" + t.nodeName + ">") ? r = t
                        .cloneNode(!0) : (Yt.innerHTML = t.outerHTML, Yt.removeChild(r = Yt.firstChild)), !(
                            nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType ||
                            ot.isXMLDoc(t)))
                        for (i = g(r), a = g(t), s = 0; null != (o = a[s]); ++s) i[s] && k(o, i[s]);
                    if (e)
                        if (n)
                            for (a = a || g(t), i = i || g(r), s = 0; null != (o = a[s]); s++) _(o, i[s]);
                        else _(t, r);
                    return i = g(r, "script"), i.length > 0 && w(i, !l && g(t, "script")), i = a = o = null,
                        r
                },
                buildFragment: function (t, e, n, i) {
                    for (var o, r, s, a, l, c, u, h = t.length, d = m(e), f = [], p = 0; h > p; p++)
                        if (r = t[p], r || 0 === r)
                            if ("object" === ot.type(r)) ot.merge(f, r.nodeType ? [r] : r);
                            else if (Bt.test(r)) {
                        for (a = a || d.appendChild(e.createElement("div")), l = (Ht.exec(r) || ["", ""])[1]
                            .toLowerCase(), u = Xt[l] || Xt._default, a.innerHTML = u[1] + r.replace(Ft,
                                "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                        if (!nt.leadingWhitespace && Wt.test(r) && f.push(e.createTextNode(Wt.exec(r)[0])),
                            !nt.tbody)
                            for (r = "table" !== l || qt.test(r) ? "<table>" !== u[1] || qt.test(r) ? 0 :
                                a : a.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r
                                .childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                        for (ot.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a
                            .firstChild);
                        a = d.lastChild
                    } else f.push(e.createTextNode(r));
                    for (a && d.removeChild(a), nt.appendChecked || ot.grep(g(f, "input"), v), p = 0; r = f[
                            p++];)
                        if ((!i || -1 === ot.inArray(r, i)) && (s = ot.contains(r.ownerDocument, r), a = g(d
                                .appendChild(r), "script"), s && w(a), n))
                            for (o = 0; r = a[o++];) Vt.test(r.type || "") && n.push(r);
                    return a = null, d
                },
                cleanData: function (t, e) {
                    for (var n, i, o, r, s = 0, a = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot
                            .event.special; null != (n = t[s]); s++)
                        if ((e || ot.acceptData(n)) && (o = n[a], r = o && l[o])) {
                            if (r.events)
                                for (i in r.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r
                                    .handle);
                            l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== kt ? n
                                .removeAttribute(a) : n[a] = null, G.push(o))
                        }
                }
            }), ot.fn.extend({
                text: function (t) {
                    return At(this, function (t) {
                        return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[
                            0].ownerDocument || pt).createTextNode(t))
                    }, null, t, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = y(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                remove: function (t, e) {
                    for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e ||
                        1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (e && ot.contains(n
                            .ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ot.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t
                            .firstChild);
                        t.options && ot.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return ot.clone(this, t, e)
                    })
                },
                html: function (t) {
                    return At(this, function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Mt, "") :
                            void 0;
                        if (!("string" != typeof t || zt.test(t) || !nt.htmlSerialize && Rt.test(
                                t) || !nt.leadingWhitespace && Wt.test(t) || Xt[(Ht.exec(t) || ["",
                                    ""
                                ])[1].toLowerCase()])) {
                            t = t.replace(Ft, "<$1></$2>");
                            try {
                                for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot
                                    .cleanData(g(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (o) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, ot.cleanData(g(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                },
                detach: function (t) {
                    return this.remove(t, !0)
                },
                domManip: function (t, e) {
                    t = J.apply([], t);
                    var n, i, o, r, s, a, l = 0,
                        c = this.length,
                        u = this,
                        h = c - 1,
                        d = t[0],
                        f = ot.isFunction(d);
                    if (f || c > 1 && "string" == typeof d && !nt.checkClone && Ut.test(d)) return this
                        .each(function (n) {
                            var i = u.eq(n);
                            f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                        });
                    if (c && (a = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild,
                            1 === a.childNodes.length && (a = n), n)) {
                        for (r = ot.map(g(a, "script"), b), o = r.length; c > l; l++) i = a, l !== h && (i =
                            ot.clone(i, !0, !0), o && ot.merge(r, g(i, "script"))), e.call(this[l], i,
                            l);
                        if (o)
                            for (s = r[r.length - 1].ownerDocument, ot.map(r, x), l = 0; o > l; l++) i = r[
                                l], Vt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(
                                s, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i
                                .text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                        a = n = null
                    }
                    return this
                }
            }), ot.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                ot.fn[t] = function (t) {
                    for (var n, i = 0, o = [], r = ot(t), s = r.length - 1; s >= i; i++) n = i === s ?
                        this : this.clone(!0), ot(r[i])[e](n), Y.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
        var Kt, Zt = {};
        ! function () {
            var t;
            nt.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = pt.getElementsByTagName("body")[0], n && n.style ? (e = pt.createElement("div"), i =
                    pt.createElement("div"), i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth
                        ), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/,
            ie = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
            oe = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e,
                null) : t.getComputedStyle(e, null)
        }, ee = function (t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || ot
                .contains(t.ownerDocument, t) || (s = ot.style(t, e)), ie.test(s) && ne.test(e) && (i =
                    a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s =
                    n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : pt.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || te(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), ie.test(
                s) && !oe.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t
                        .currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px",
                    a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }), ! function () {
            function e() {
                var e, n, i, o;
                n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt
                    .createElement("div"), i.style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i)
                    .appendChild(e), e.style.cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) ||
                        {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, o = e.appendChild(pt.createElement("div")), o.style.cssText = e.style
                        .cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t
                            .getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML =
                    "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0]
                    .style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0]
                    .offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[
                        0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, r, s, a, l;
            n = pt.createElement("div"), n.innerHTML =
                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n
                .getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt
                    .opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip =
                    "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle =
                    "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i
                    .MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                        reliableHiddenOffsets: function () {
                            return null == a && e(), a
                        },
                        boxSizingReliable: function () {
                            return null == s && e(), s
                        },
                        pixelPosition: function () {
                            return null == r && e(), r
                        },
                        reliableMarginRight: function () {
                            return null == l && e(), l
                        }
                    }))
        }(), ot.swap = function (t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = s[r];
            return o
        };
        var re = /alpha\([^)]*\)/i,
            se = /opacity\s*=\s*([^)]*)/,
            ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + St + ")(.*)$", "i"),
            ce = new RegExp("^([+-])=(" + St + ")", "i"),
            ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            he = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            de = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": nt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = ot.camelCase(e),
                        l = t.style;
                    if (e = ot.cssProps[a] || (ot.cssProps[a] = $(l, a)), s = ot.cssHooks[e] || ot
                        .cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !
                        1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = ce.exec(n)) && (n = (o[1] + 1) * o[2] +
                            parseFloat(ot.css(t, e)), r = "number"), null != n && n === n && (
                            "number" !== r || ot.cssNumber[a] || (n += "px"), nt.clearCloneStyle ||
                            "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s &&
                                "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (c) {}
                }
            },
            css: function (t, e, n, i) {
                var o, r, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = $(t.style, a)), s = ot.cssHooks[e] || ot
                    .cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = ee(t,
                        e, i)), "normal" === r && e in he && (r = he[e]), "" === n || n ? (o =
                        parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function (t, e) {
            ot.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? ae.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, ue,
                        function () {
                            return j(t, e, i)
                        }) : j(t, e, i) : void 0
                },
                set: function (t, n, i) {
                    var o = i && te(t);
                    return A(t, n, i ? N(t, e, i, nt.boxSizing && "border-box" === ot.css(t,
                        "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function (t, e) {
                return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ?
                    .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(r.replace(re, "")) && n
                    .removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n
                        .filter = re.test(r) ? r.replace(re, o) : r + " " + o)
            }
        }), ot.cssHooks.marginRight = S(nt.reliableMarginRight, function (t, e) {
            return e ? ot.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            ot.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 >
                        i; i++) o[t + $t[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ne.test(t) || (ot.cssHooks[t + e].set = A)
        }), ot.fn.extend({
            css: function (t, e) {
                return At(this, function (t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (ot.isArray(e)) {
                        for (i = te(t), o = e.length; o > s; s++) r[e[s]] = ot.css(t, e[s], !1,
                            i);
                        return r
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return E(this, !0)
            },
            hide: function () {
                return E(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Et(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = O, O.prototype = {
            constructor: O,
            init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start =
                    this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options
                    .duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this
                    .end - this.start) * e + this.start, this.options.step && this.options.step.call(
                    this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(
                    this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot
                        .css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function (t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot
                        .cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t
                        .unit) : t.elem[t.prop] = t.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ot.fx = O.prototype.init, ot.fx.step = {};
        var fe, pe, me = /^(?:toggle|show|hide)$/,
            ge = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/,
            ye = [L],
            be = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = ge.exec(e),
                        r = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                        s = (ot.cssNumber[t] || "px" !== r && +i) && ge.exec(ot.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, ot.style(n.elem, t, s + r); while (a !== (a = n.cur() /
                            i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[
                        2] : +o[2]), n
                }]
            };
        ot.Animation = ot.extend(R, {
                tweener: function (t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], be[n] = be[n] || [], be[n]
                        .unshift(e)
                },
                prefilter: function (t, e) {
                    e ? ye.unshift(t) : ye.push(t)
                }
            }), ot.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: n || !n && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ot.isFunction(e) && e
                };
                return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx
                    .speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !
                    0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                        ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
                    }, i
            }, ot.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Et).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var o = ot.isEmptyObject(t),
                        r = ot.speed(e, n, i),
                        s = function () {
                            var e = R(this, ot.extend({}, t), r);
                            (o || ot._data(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(
                        t || "fx", []), this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = ot.timers,
                            s = ot._data(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && ve.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !==
                            t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && ot.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = ot._data(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = ot.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this,
                                !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (
                            r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function (t, e) {
                var n = ot.fn[e];
                ot.fn[e] = function (t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e,
                        !0), t, i, o)
                }
            }), ot.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                ot.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ot.timers = [], ot.fx.tick = function () {
                var t, e = ot.timers,
                    n = 0;
                for (fe = ot.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
                e.length || ot.fx.stop(), fe = void 0
            }, ot.fx.timer = function (t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function () {
                pe || (pe = setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function () {
                clearInterval(pe), pe = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function (t, e) {
                return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            },
            function () {
                var t, e, n, i, o;
                e = pt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e
                    .getElementsByTagName("a")[0], n = pt.createElement("select"), o = n.appendChild(pt
                        .createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText =
                    "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute(
                        "style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt
                    .optSelected = o.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt
                    .optDisabled = !o.disabled, t = pt.createElement("input"), t.setAttribute("value", ""), nt
                    .input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt
                    .radioValue = "t" === t.value
            }();
        var xe = /\r/g;
        ot.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t,
                        null == o ? o = "" : "number" == typeof o ? o += "" : ot
                        .isArray(o) && (o = ot.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName
                            .toLowerCase()], e && "set" in e && void 0 !== e.set(this,
                            o, "value") || (this.value = o))
                })) : o ? (e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e &&
                    "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" ==
                        typeof n ? n.replace(xe, "") : null == n ? "" : n)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t
                                .type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ?
                                a : r ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled :
                                        null !== n.getAttribute("disabled")) || n.parentNode.disabled &&
                                    ot.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ot(n).val(), r) return e;
                                s.push(e)
                            } return s
                    },
                    set: function (t, e) {
                        for (var n, i, o = t.options, r = ot.makeArray(e), s = o.length; s--;)
                            if (i = o[s], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (a) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
                set: function (t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var we, _e, ke = ot.expr.attrHandle,
            Ce = /^(?:checked|selected)$/i,
            Te = nt.getSetAttribute,
            Se = nt.input;
        ot.fn.extend({
            attr: function (t, e) {
                return At(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === kt ? ot.prop(t,
                    e, n) : (1 === r && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot
                        .attrHooks[e] || (ot.expr.match.bool.test(e) ? _e : we)), void 0 === n ?
                    i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e),
                        null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (
                        o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot
                    .removeAttr(t, e))
            },
            removeAttr: function (t, e) {
                var n, i, o = 0,
                    r = e && e.match(bt);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Se && Te ||
                        !Ce.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(
                            t, n, ""), t.removeAttribute(Te ? n : i)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), _e = {
            set: function (t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : Se && Te || !Ce.test(n) ? t.setAttribute(!Te && ot
                    .propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = ke[e] || ot.find.attr;
            ke[e] = Se && Te || !Ce.test(e) ? function (t, e, i) {
                var o, r;
                return i || (r = ke[e], ke[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ke[
                    e] = r), o
            } : function (t, e, n) {
                return n ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Se && Te || (ot.attrHooks.value = {
            set: function (t, e, n) {
                return ot.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, n)
            }
        }), Te || (we = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e +=
                    "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, ke.id = ke.name = ke.coords = function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: we.set
        }, ot.attrHooks.contenteditable = {
            set: function (t, e, n) {
                we.set(t, "" !== e && e, n)
            }
        }, ot.each(["width", "height"], function (t, e) {
            ot.attrHooks[e] = {
                set: function (t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var $e = /^(?:input|select|textarea|button|object)$/i,
            Ee = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function (t, e) {
                return At(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return t = ot.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), ot.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !ot.isXMLDoc(t), r && (e =
                        ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set" in o &&
                    void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (
                        i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : $e.test(t.nodeName) || Ee.test(t.nodeName) && t
                            .href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function (t, e) {
            ot.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
            "useMap", "frameBorder", "contentEditable"
        ], function () {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Ae = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className +
                                " ").replace(Ae, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = ot.trim(i), n.className !== s && (n.className = s)
                        } return this
            },
            removeClass: function (t) {
                var e, n, i, o, r, s, a = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className +
                                " ").replace(Ae, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ",
                                " ");
                            s = t ? ot.trim(i) : "", n.className !== s && (n.className = s)
                        } return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this
                    .removeClass(t) : this.each(ot.isFunction(t) ? function (n) {
                        ot(this).toggleClass(t.call(this, n, this.className, e), e)
                    } : function () {
                        if ("string" === n)
                            for (var e, i = 0, o = ot(this), r = t.match(bt) || []; e = r[i++];) o
                                .hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else(n === kt || "boolean" === n) && (this.className && ot._data(this,
                                "__className__", this.className), this.className = this
                            .className || t === !1 ? "" : ot._data(this, "__className__") || "")
                    })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ")
                        .indexOf(e) >= 0) return !0;
                return !1
            }
        }), ot.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "),
            function (t, e) {
                ot.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), ot.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Ne = ot.now(),
            je = /\?/,
            Oe =
            /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                o = ot.trim(e + "");
            return o && !ot.trim(o.replace(Oe, function (t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
        }, ot.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n =
                    new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error(
                "Invalid XML: " + e), n
        };
        var De, Ie, Pe = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Me = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            We = /^(?:GET|HEAD)$/,
            Fe = /^\/\//,
            He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            qe = {},
            Be = {},
            ze = "*/".concat("*");
        try {
            Ie = location.href
        } catch (Ue) {
            Ie = pt.createElement("a"), Ie.href = "", Ie = Ie.href
        }
        De = He.exec(Ie.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ie,
                type: "GET",
                isLocal: Re.test(De[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? H(H(t, ot.ajaxSettings), e) : H(ot.ajaxSettings, t)
            },
            ajaxPrefilter: W(qe),
            ajaxTransport: W(Be),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var o, u, v, y, x, _ = e;
                    2 !== b && (b = 2, a && clearTimeout(a), c = void 0, s = i || "", w.readyState = t >
                        0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = q(h, w, n)), y =
                        B(h, y, w, o), o ? (h.ifModified && (x = w.getResponseHeader(
                                    "Last-Modified"), x && (ot.lastModified[r] = x), x = w
                                .getResponseHeader("etag"), x && (ot.etag[r] = x)), 204 === t ||
                            "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (
                                _ = y.state, u = y.data, v = y.error, o = !v)) : (v = _, (t || !
                            _) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (
                            e || _) + "", o ? p.resolveWith(d, [u, _, w]) : p.rejectWith(d, [w, _,
                            v]), w.statusCode(g), g = void 0, l && f.trigger(o ? "ajaxSuccess" :
                            "ajaxError", [w, h, o ? u : v]), m.fireWith(d, [w, _]), l && (f.trigger(
                                "ajaxComplete", [w, h]), --ot.active || ot.event.trigger(
                            "ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, c, u, h = ot.ajaxSetup({}, e),
                    d = h.context || h,
                    f = h.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
                    p = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    g = h.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = Me.exec(s);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t ||
                        h.url || Ie) + "").replace(Pe, "").replace(Fe, De[1] + "//"), h.type = e
                    .method || e.type || h.method || h.type, h.dataTypes = ot.trim(h.dataType || "*")
                    .toLowerCase().match(bt) || [""], null == h.crossDomain && (i = He.exec(h.url
                        .toLowerCase()), h.crossDomain = !(!i || i[1] === De[1] && i[2] === De[2] &&
                        (i[3] || ("http:" === i[1] ? "80" : "443")) === (De[3] || ("http:" === De[
                            1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h
                    .data && (h.data = ot.param(h.data, h.traditional)), F(qe, h, e, w), 2 === b)
                return w;
                l = ot.event && h.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), h
                    .type = h.type.toUpperCase(), h.hasContent = !We.test(h.type), r = h.url, h
                    .hasContent || (h.data && (r = h.url += (je.test(r) ? "&" : "?") + h.data, delete h
                        .data), h.cache === !1 && (h.url = Le.test(r) ? r.replace(Le, "$1_=" +
                        Ne++) : r + (je.test(r) ? "&" : "?") + "_=" + Ne++)), h.ifModified && (ot
                        .lastModified[r] && w.setRequestHeader("If-Modified-Since", ot.lastModified[r]),
                        ot.etag[r] && w.setRequestHeader("If-None-Match", ot.etag[r])), (h.data && h
                        .hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader(
                        "Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h
                        .accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ?
                            ", " + ze + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers) w.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[o](h[o]);
                if (c = F(Be, h, e, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (
                        a = setTimeout(function () {
                            w.abort("timeout")
                        }, h.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function (t, e) {
            ot[e] = function (t, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot._evalUrl = function (t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ot.fn.extend({
            wrapAll: function (t) {
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t
                            .firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                return this.each(ot.isFunction(t) ? function (e) {
                    ot(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = ot(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = ot.isFunction(t);
                return this.each(function (n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t
                .style && t.style.display || ot.css(t, "display"))
        }, ot.expr.filters.visible = function (t) {
            return !ot.expr.filters.hidden(t)
        };
        var Ve = /%20/g,
            Qe = /\[\]$/,
            Ge = /\r?\n/g,
            Xe = /^(?:submit|button|image|reset|file)$/i,
            Je = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (t, e) {
            var n, i = [],
                o = function (t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" +
                        encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t
                .jquery && !ot.isPlainObject(t)) ot.each(t, function () {
                o(this.name, this.value)
            });
            else
                for (n in t) z(n, t[n], e, o);
            return i.join("&").replace(Ve, "+")
        }, ot.fn.extend({
            serialize: function () {
                return ot.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Je.test(this.nodeName) && !
                        Xe.test(t) && (this.checked || !Nt.test(t))
                }).map(function (t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(Ge, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ge, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Ye = 0,
            Ke = {},
            Ze = ot.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Ke) Ke[t](void 0, !0)
        }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && ot.ajaxTransport(function (
        t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var o, r = t.xhr(),
                            s = ++Ye;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t
                            .crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] =
                                "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function (n, o) {
                            var a, l, c;
                            if (e && (o || 4 === r.readyState))
                                if (delete Ke[s], e = void 0, r.onreadystatechange = ot.noop, o)
                                    4 !== r.readyState && r.abort();
                                else {
                                    c = {}, a = r.status, "string" == typeof r.responseText && (c
                                        .text = r.responseText);
                                    try {
                                        l = r.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a =
                                        c.text ? 200 : 404
                                } c && i(a, l, c, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ke[
                            s] = e : e()
                    },
                    abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ot.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = pt.head || ot("head")[0] || pt.documentElement;
                return {
                    send: function (i, o) {
                        e = pt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t
                                .scriptCharset), e.src = t.url, e.onload = e.onreadystatechange =
                            function (t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e
                                    .onload = e.onreadystatechange = null, e.parentNode && e.parentNode
                                    .removeChild(e), e = null, n || o(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = tn.pop() || ot.expando + "_" + Ne++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e
                    .contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e
                .data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ?
                e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + o) : e.jsonp !==
                !1 && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters[
                    "script json"] = function () {
                    return s || ot.error(o + " was not called"), s[0]
                }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                    s = arguments
                }, i.always(function () {
                    t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, tn.push(o)), s && ot
                        .isFunction(r) && r(s[0]), s = r = void 0
                }), "script") : void 0
        }), ot.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || pt;
            var i = ht.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o)
                .remove(), ot.merge([], i.childNodes))
        };
        var nn = ot.fn.load;
        ot.fn.load = function (t, e, n) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = ot.trim(t.slice(a, t.length)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e,
                e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (
            t, e) {
            ot.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function (t) {
            return ot.grep(ot.timers, function (e) {
                return t === e.elem
            }).length
        };
        var on = t.document.documentElement;
        ot.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, s, a, l, c, u = ot.css(t, "position"),
                    h = ot(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), r = ot.css(t, "top"), l =
                    ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [r,
                    l]) > -1, c ? (i = h.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o =
                        parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d
                        .top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, ot.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (e = r.documentElement, ot.contains(e, o) ? (typeof o
                    .getBoundingClientRect !== kt && (i = o.getBoundingClientRect()), n = Q(
                    r), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i) : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this
                        .offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t
                            .offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot
                        .css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || on; t && !ot.nodeName(t, "html") &&
                        "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || on
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = /Y/.test(e);
            ot.fn[t] = function (i) {
                return At(this, function (t, i, o) {
                    var r = Q(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[
                        i] : void(r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r)
                        .scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function (t, e) {
            ot.cssHooks[e] = S(nt.pixelPosition, function (t, n) {
                return n ? (n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                ot.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return At(this, function (e, n, i) {
                        var o;
                        return ot.isWindow(e) ? e.document.documentElement["client" +
                            t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e
                                    .body["scroll" + t], o["scroll" + t], e.body[
                                        "offset" + t], o["offset" + t], o["client" + t]
                                    )) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n,
                                i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), ot.fn.size = function () {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [],
            function () {
                return ot
            });
        var rn = t.jQuery,
            sn = t.$;
        return ot.noConflict = function (e) {
            return t.$ === ot && (t.$ = sn), e && t.jQuery === ot && (t.jQuery = rn), ot
        }, typeof e === kt && (t.jQuery = t.$ = ot), ot
    }), function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" ==
            typeof define && define.amd ? define(e) : t.jqueryI18next = e()
    }(this, function () {
        "use strict";

        function t(t, i) {
            function o(n, i, o) {
                function r(t, n) {
                    return a.parseDefaultValueFromContent ? e({}, t, {
                        defaultValue: n
                    }) : t
                }
                if (0 !== i.length) {
                    var s = "text";
                    if (0 === i.indexOf("[")) {
                        var l = i.split("]");
                        i = l[1], s = l[0].substr(1, l[0].length - 1)
                    }
                    if (i.indexOf(";") === i.length - 1 && (i = i.substr(0, i.length - 2)), "html" === s) n.html(t
                        .t(i, r(o, n.html())));
                    else if ("text" === s) n.text(t.t(i, r(o, n.text())));
                    else if ("prepend" === s) n.prepend(t.t(i, r(o, n.html())));
                    else if ("append" === s) n.append(t.t(i, r(o, n.html())));
                    else if (0 === s.indexOf("data-")) {
                        var c = s.substr("data-".length),
                            u = t.t(i, r(o, n.data(c)));
                        n.data(c, u), n.attr(s, u)
                    } else n.attr(s, t.t(i, r(o, n.attr(s))))
                }
            }

            function r(t, n) {
                var r = t.attr(a.selectorAttr);
                if (r || "undefined" == typeof r || r === !1 || (r = t.text() || t.val()), r) {
                    var s = t,
                        l = t.data(a.targetAttr);
                    if (l && (s = t.find(l) || t), n || a.useOptionsAttr !== !0 || (n = t.data(a.optionsAttr)), n =
                        n || {}, r.indexOf(";") >= 0) {
                        var c = r.split(";");
                        i.each(c, function (t, e) {
                            "" !== e && o(s, e.trim(), n)
                        })
                    } else o(s, r, n);
                    if (a.useOptionsAttr === !0) {
                        var u = {};
                        u = e({
                            clone: u
                        }, n), delete u.lng, t.data(a.optionsAttr, u)
                    }
                }
            }

            function s(t) {
                return this.each(function () {
                    r(i(this), t);
                    var e = i(this).find("[" + a.selectorAttr + "]");
                    e.each(function () {
                        r(i(this), t)
                    })
                })
            }
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            a = e({}, n, a), i[a.tName] = t.t.bind(t), i[a.i18nName] = t, i.fn[a.handleName] = s
        }
        var e = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            n = {
                tName: "t",
                i18nName: "i18n",
                handleName: "localize",
                selectorAttr: "data-i18n",
                targetAttr: "i18n-target",
                optionsAttr: "i18n-options",
                useOptionsAttr: !1,
                parseDefaultValueFromContent: !0
            },
            i = {
                init: t
            };
        return i
    }), function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e() {
            if (!t.contains(document.documentElement, this)) return t(this).timeago("dispose"), this;
            var e = n(this),
                s = r.settings;
            return isNaN(e.datetime) || (0 == s.cutoff || Math.abs(o(e.datetime)) < s.cutoff) && t(this).text(i(e
                .datetime)), this
        }

        function n(e) {
            if (e = t(e), !e.data("timeago")) {
                e.data("timeago", {
                    datetime: r.datetime(e)
                });
                var n = t.trim(e.text());
                r.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(n.length >
                    0) || r.isTime(e) && e.attr("title") || e.attr("title", n)
            }
            return e.data("timeago")
        }

        function i(t) {
            return r.inWords(o(t))
        }

        function o(t) {
            return (new Date).getTime() - t.getTime()
        }
        t.timeago = function (e) {
            return i(e instanceof Date ? e : "string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ?
                new Date(e) : t.timeago.datetime(e))
        };
        var r = t.timeago;
        t.extend(t.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !0,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "前",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "1分鐘",
                    minute: "1分鐘",
                    minutes: "%d分鐘",
                    hour: "1小時",
                    hours: "%d小時",
                    day: "1天",
                    days: "%d天",
                    month: "1個月",
                    months: "%d個月",
                    year: "1年",
                    years: "%d年",
                    wordSeparator: "",
                    numbers: []
                }
            },
            inWords: function (e) {
                function n(n, o) {
                    var r = t.isFunction(n) ? n(o, e) : n,
                        s = i.numbers && i.numbers[o] || o;
                    return r.replace(/%d/i, s)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture)
                throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var i = this.settings.strings,
                    o = i.prefixAgo,
                    r = i.suffixAgo;
                if (this.settings.allowFuture && e < 0 && (o = i.prefixFromNow, r = i.suffixFromNow), !
                    this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
                var s = Math.abs(e) / 1e3,
                    a = s / 60,
                    l = a / 60,
                    c = l / 24,
                    u = c / 365,
                    h = s < 45 && n(i.seconds, Math.round(s)) || s < 90 && n(i.minute, 1) || a < 45 &&
                    n(i.minutes, Math.round(a)) || a < 90 && n(i.hour, 1) || l < 24 && n(i.hours, Math
                        .round(l)) || l < 42 && n(i.day, 1) || c < 30 && n(i.days, Math.round(c)) || c <
                    45 && n(i.month, 1) || c < 365 && n(i.months, Math.round(c / 30)) || u < 1.5 && n(i
                        .year, 1) || n(i.years, Math.round(u)),
                    d = i.wordSeparator || "";
                return void 0 === i.wordSeparator && (d = " "), t.trim([o, h, r].join(d))
            },
            parse: function (e) {
                if (e % 1 === 0) return new Date(parseInt(e));
                var n = t.trim(e);
                return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n
                    .replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/,
                        " $1$2"), n = n.replace(/([\+\-]\d\d)$/, " $100"), new Date(n)
            },
            datetime: function (e) {
                var n = r.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
                return r.parse(n)
            },
            isTime: function (e) {
                return "time" === t(e).get(0).tagName.toLowerCase()
            }
        });
        var s = {
            init: function () {
                var n = t.proxy(e, this);
                n();
                var i = r.settings;
                i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
            },
            update: function (n) {
                var i = r.parse(n);
                t(this).data("timeago", {
                    datetime: i
                }), r.settings.localeTitle && t(this).attr("title", i.toLocaleString()), e.apply(this)
            },
            updateFromDOM: function () {
                t(this).data("timeago", {
                    datetime: r.parse(r.isTime(this) ? t(this).attr("datetime") : t(this).attr(
                        "title"))
                }), e.apply(this)
            },
            dispose: function () {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this
                    ._timeagoInterval = null)
            }
        };
        t.fn.timeago = function (t, e) {
            var n = t ? s[t] : s.init;
            if (!n) throw new Error("Unknown function name '" + t + "' for timeago");
            return this.each(function () {
                n.call(this, e)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    }), ! function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
            define.amd ? define(e) : "object" == typeof exports ? exports.Vue = e() : t.Vue = e()
    }(this, function () {
        return function (t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            function i(t) {
                this._init(t)
            }
            var o = n(1),
                r = o.extend;
            r(i, n(9)), i.options = {
                replace: !0,
                directives: n(28),
                elementDirectives: n(50),
                filters: n(53),
                transitions: {},
                components: {},
                partials: {}
            };
            var s = i.prototype;
            Object.defineProperty(s, "$data", {
                get: function () {
                    return this._data
                },
                set: function (t) {
                    t !== this._data && this._setData(t)
                }
            }), r(s, n(55)), r(s, n(56)), r(s, n(57)), r(s, n(58)), r(s, n(60)), r(s, n(61)), r(s,
                n(62)), r(s, n(63)), r(s, n(64)), r(s, n(65)), t.exports = o.Vue = i
        }, function (t, e, n) {
            var i = n(4),
                o = i.extend;
            o(e, i), o(e, n(5)), o(e, n(6)), o(e, n(2)), o(e, n(7)), o(e, n(8))
        }, function (t, e, n) {
            var i = n(1),
                o = n(3);
            e.assertProp = function (t, e) {
                    var n, o = t.options,
                        r = o.type,
                        s = !0;
                    if (r && (r === String ? (n = "string", s = typeof e === n) : r === Number ? (n =
                                "number", s = "number" == typeof e) : r === Boolean ? (n = "boolean",
                                s = "boolean" == typeof e) : r === Function ? (n = "function", s =
                                "function" == typeof e) : r === Object ? (n = "object", s = i
                                .isPlainObject(e)) : r === Array ? (n = "array", s = i.isArray(e)) : s =
                            e instanceof r), !s) return !1;
                    var a = o.validator;
                    return !(a && !a.call(null, e))
                }, e.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/, e
                .checkComponent = function (t, n) {
                    var o = t.tagName.toLowerCase();
                    if ("component" === o) {
                        var r = t.getAttribute("is");
                        return t.removeAttribute("is"), r
                    }
                    return !e.commonTagRE.test(o) && i.resolveAsset(n, "components", o) ? o : (o = i
                        .attr(t, "component")) ? o : void 0
                }, e.createAnchor = function (t, e) {
                    return o.debug ? document.createComment(t) : document.createTextNode(e ? " " : "")
                }
        }, function (t, e, n) {
            t.exports = {
                prefix: "v-",
                debug: !1,
                silent: !1,
                proto: !0,
                interpolate: !0,
                async: !0,
                warnExpressionErrors: !0,
                _delimitersChanged: !0,
                _assetTypes: ["component", "directive", "elementDirective", "filter", "transition",
                    "partial"
                ],
                _propBindingModes: {
                    ONE_WAY: 0,
                    TWO_WAY: 1,
                    ONE_TIME: 2
                },
                _maxUpdateCount: 100
            };
            var i = ["{{", "}}"];
            Object.defineProperty(t.exports, "delimiters", {
                get: function () {
                    return i
                },
                set: function (t) {
                    i = t, this._delimitersChanged = !0
                }
            })
        }, function (t, e, n) {
            function i(t, e) {
                return e ? e.toUpperCase() : ""
            }
            e.isReserved = function (t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }, e.toString = function (t) {
                return null == t ? "" : t.toString()
            }, e.toNumber = function (t) {
                return isNaN(t) || null === t || "boolean" == typeof t ? t : Number(t)
            }, e.toBoolean = function (t) {
                return "true" === t || "false" !== t && t
            }, e.stripQuotes = function (t) {
                var e = t.charCodeAt(0),
                    n = t.charCodeAt(t.length - 1);
                return e === n && (34 === e || 39 === e) && t.slice(1, -1)
            }, e.camelize = function (t) {
                return t.replace(/-(\w)/g, i)
            }, e.hyphenate = function (t) {
                return t.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
            };
            var o = /(?:^|[-_\/])(\w)/g;
            e.classify = function (t) {
                return t.replace(o, i)
            }, e.bind = function (t, e) {
                return function (n) {
                    var i = arguments.length;
                    return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }
            }, e.toArray = function (t, e) {
                e = e || 0;
                for (var n = t.length - e, i = new Array(n); n--;) i[n] = t[n + e];
                return i
            }, e.extend = function (t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }, e.isObject = function (t) {
                return null !== t && "object" == typeof t
            };
            var r = Object.prototype.toString;
            e.isPlainObject = function (t) {
                return "[object Object]" === r.call(t)
            }, e.isArray = Array.isArray, e.define = function (t, e, n, i) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!i,
                    writable: !0,
                    configurable: !0
                })
            }, e.debounce = function (t, e) {
                var n, i, o, r, s, a = function () {
                    var l = Date.now() - r;
                    e > l && l >= 0 ? n = setTimeout(a, e - l) : (n = null, s = t.apply(o, i),
                        n || (o = i = null))
                };
                return function () {
                    return o = this, i = arguments, r = Date.now(), n || (n = setTimeout(a, e)),
                        s
                }
            }, e.indexOf = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            }, e.cancellable = function (t) {
                var e = function () {
                    return e.cancelled ? void 0 : t.apply(this, arguments)
                };
                return e.cancel = function () {
                    e.cancelled = !0
                }, e
            }
        }, function (t, e, n) {
            e.hasProto = "__proto__" in {};
            var i = e.inBrowser = "undefined" != typeof window && "[object Object]" !== Object.prototype
                .toString.call(window);
            if (e.isIE9 = i && navigator.userAgent.toLowerCase().indexOf("msie 9.0") > 0, e.isAndroid =
                i && navigator.userAgent.toLowerCase().indexOf("android") > 0, i && !e.isIE9) {
                var o = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
                    r = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;
                e.transitionProp = o ? "WebkitTransition" : "transition", e.transitionEndEvent = o ?
                    "webkitTransitionEnd" : "transitionend", e.animationProp = r ? "WebkitAnimation" :
                    "animation", e.animationEndEvent = r ? "webkitAnimationEnd" : "animationend"
            }
            e.nextTick = function () {
                function t() {
                    i = !1;
                    var t = n.slice(0);
                    n = [];
                    for (var e = 0; e < t.length; e++) t[e]()
                }
                var e, n = [],
                    i = !1;
                if ("undefined" != typeof MutationObserver) {
                    var o = 1,
                        r = new MutationObserver(t),
                        s = document.createTextNode(o);
                    r.observe(s, {
                        characterData: !0
                    }), e = function () {
                        o = (o + 1) % 2, s.data = o
                    }
                } else e = setTimeout;
                return function (o, r) {
                    var s = r ? function () {
                        o.call(r)
                    } : o;
                    n.push(s), i || (i = !0, e(t, 0))
                }
            }()
        }, function (t, e, n) {
            function i(t, e) {
                e && 3 === e.nodeType && !e.data.trim() && t.removeChild(e)
            }
            var o = (n(1), n(3));
            e.query = function (t) {
                return "string" == typeof t && (t = document.querySelector(t)), t
            }, e.inDoc = function (t) {
                var e = document.documentElement,
                    n = t && t.parentNode;
                return e === t || e === n || !(!n || 1 !== n.nodeType || !e.contains(n))
            }, e.attr = function (t, e) {
                e = o.prefix + e;
                var n = t.getAttribute(e);
                return null !== n && t.removeAttribute(e), n
            }, e.before = function (t, e) {
                e.parentNode.insertBefore(t, e)
            }, e.after = function (t, n) {
                n.nextSibling ? e.before(t, n.nextSibling) : n.parentNode.appendChild(t)
            }, e.remove = function (t) {
                t.parentNode.removeChild(t)
            }, e.prepend = function (t, n) {
                n.firstChild ? e.before(t, n.firstChild) : n.appendChild(t)
            }, e.replace = function (t, e) {
                var n = t.parentNode;
                n && n.replaceChild(e, t)
            }, e.on = function (t, e, n) {
                t.addEventListener(e, n)
            }, e.off = function (t, e, n) {
                t.removeEventListener(e, n)
            }, e.addClass = function (t, e) {
                if (t.classList) t.classList.add(e);
                else {
                    var n = " " + (t.getAttribute("class") || "") + " ";
                    n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                }
            }, e.removeClass = function (t, e) {
                if (t.classList) t.classList.remove(e);
                else {
                    for (var n = " " + (t.getAttribute("class") || "") + " ", i = " " + e + " "; n
                        .indexOf(i) >= 0;) n = n.replace(i, " ");
                    t.setAttribute("class", n.trim())
                }
            }, e.extractContent = function (t, n) {
                var o, r;
                if (e.isTemplate(t) && t.content instanceof DocumentFragment && (t = t.content), t
                    .hasChildNodes())
                    for (i(t, t.firstChild), i(t, t.lastChild), r = n ? document
                        .createDocumentFragment() : document.createElement("div"); o = t.firstChild;
                        ) r.appendChild(o);
                return r
            }, e.isTemplate = function (t) {
                return t.tagName && "template" === t.tagName.toLowerCase()
            }
        }, function (t, e, n) {
            n(3)
        }, function (t, e, n) {
            function i(t, e) {
                var n, o, r;
                for (n in e) o = t[n], r = e[n], t.hasOwnProperty(n) ? s.isObject(o) && s.isObject(r) &&
                    i(o, r) : t.$add(n, r);
                return t
            }

            function o(t) {
                if (t) {
                    var e;
                    for (var n in t) s.commonTagRE.test(n), e = t[n], s.isPlainObject(e) && (e.name = n,
                        t[n] = s.Vue.extend(e))
                }
            }

            function r(t) {
                var e = t.props;
                s.isPlainObject(e) ? t.props = Object.keys(e).map(function (t) {
                    var n = e[t];
                    return s.isPlainObject(n) || (n = {
                        type: n
                    }), n.name = t, n
                }) : s.isArray(e) && (t.props = e.map(function (t) {
                    return "string" == typeof t ? {
                        name: t
                    } : t
                }))
            }
            var s = n(1),
                a = s.extend,
                l = Object.create(null);
            l.data = function (t, e, n) {
                    return n ? t || e ? function () {
                        var o = "function" == typeof e ? e.call(n) : e,
                            r = "function" == typeof t ? t.call(n) : void 0;
                        return o ? i(o, r) : r
                    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
                        return i(e.call(this), t.call(this))
                    } : e : t
                }, l.el = function (t, e, n) {
                    if (n || !e || "function" == typeof e) {
                        var i = e || t;
                        return n && "function" == typeof i ? i.call(n) : i
                    }
                }, l.created = l.ready = l.attached = l.detached = l.beforeCompile = l.compiled = l
                .beforeDestroy = l.destroyed = l.props = function (t, e) {
                    return e ? t ? t.concat(e) : s.isArray(e) ? e : [e] : t
                }, l.paramAttributes = function () {}, l.directives = l.filters = l.transitions = l
                .components = l.partials = l.elementDirectives = function (t, e) {
                    var n = Object.create(t);
                    return e ? a(n, e) : n
                }, l.watch = l.events = function (t, e) {
                    if (!e) return t;
                    if (!t) return e;
                    var n = {};
                    a(n, t);
                    for (var i in e) {
                        var o = n[i],
                            r = e[i];
                        o && !s.isArray(o) && (o = [o]), n[i] = o ? o.concat(r) : [r]
                    }
                    return n
                }, l.methods = l.computed = function (t, e) {
                    if (!e) return t;
                    if (!t) return e;
                    var n = Object.create(t);
                    return a(n, e), n
                };
            var c = function (t, e) {
                return void 0 === e ? t : e
            };
            e.mergeOptions = function u(t, e, n) {
                function i(i) {
                    var o = l[i] || c;
                    a[i] = o(t[i], e[i], n, i)
                }
                o(e.components), r(e);
                var s, a = {};
                if (e.mixins)
                    for (var h = 0, d = e.mixins.length; d > h; h++) t = u(t, e.mixins[h], n);
                for (s in t) i(s);
                for (s in e) t.hasOwnProperty(s) || i(s);
                return a
            }, e.resolveAsset = function (t, e, n) {
                for (var i = t[e][n]; !i && t._parent;) t = t._parent.$options, i = t[e][n];
                return i
            }
        }, function (t, e, n) {
            function i(t) {
                return new Function("return function " + o.classify(t) +
                    " (options) { this._init(options) }")()
            }
            var o = n(1),
                r = n(3);
            e.util = o, e.nextTick = o.nextTick, e.config = n(3), e.compiler = n(10), e.parsers = {
                path: n(23),
                text: n(13),
                template: n(25),
                directive: n(15),
                expression: n(22)
            }, e.cid = 0;
            var s = 1;
            e.extend = function (t) {
                t = t || {};
                var e = this,
                    n = i(t.name || e.options.name || "VueComponent");
                return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n
                    .cid = s++, n.options = o.mergeOptions(e.options, t), n["super"] = e, n.extend =
                    e.extend, r._assetTypes.forEach(function (t) {
                        n[t] = e[t]
                    }), n
            }, e.use = function (t) {
                var e = o.toArray(arguments, 1);
                return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t
                    .apply(null, e), this
            }, r._assetTypes.forEach(function (t) {
                e[t] = function (e, n) {
                    return n ? ("component" === t && o.isPlainObject(n) && (n.name = e, n =
                            o.Vue.extend(n)), void(this.options[t + "s"][e] = n)) : this
                        .options[t + "s"][e]
                }
            })
        }, function (t, e, n) {
            var i = n(1);
            i.extend(e, n(11)), i.extend(e, n(27))
        }, function (t, e, n) {
            function i(t, e) {
                var n = e._directives.length;
                return t(), e._directives.slice(n)
            }

            function o(t, e, n, i) {
                return function (o) {
                    r(t, e, o), n && i && r(n, i)
                }
            }

            function r(t, e, n) {
                for (var i = e.length; i--;) e[i]._teardown(), n || t._directives.$remove(e[i])
            }

            function s(t, e) {
                var n = t.nodeType;
                return 1 === n && "SCRIPT" !== t.tagName ? a(t, e) : 3 === n && T.interpolate && t.data
                    .trim() ? l(t, e) : null
            }

            function a(t, e) {
                var n, i = t.hasAttributes();
                if (i && (n = m(t, e)), n || (n = f(t, e)), n || (n = p(t, e)), !n && i && (n = y(t,
                    e)), "TEXTAREA" === t.tagName) {
                    var o = n;
                    n = function (t, e) {
                        e.value = t.$interpolate(e.value), o && o(t, e)
                    }, n.terminal = !0
                }
                return n
            }

            function l(t, e) {
                var n = S.parse(t.data);
                if (!n) return null;
                for (var i, o, r = document.createDocumentFragment(), s = 0, a = n.length; a > s; s++)
                    o = n[s], i = o.tag ? c(o, e) : document.createTextNode(o.value), r.appendChild(i);
                return u(n, r, e)
            }

            function c(t, e) {
                function n(n) {
                    t.type = n, t.def = A(e, "directives", n), t.descriptor = $.parse(t.value)[0]
                }
                var i;
                return t.oneTime ? i = document.createTextNode(t.value) : t.html ? (i = document
                    .createComment("v-html"), n("html")) : (i = document.createTextNode(" "), n(
                    "text")), i
            }

            function u(t, e) {
                return function (n, i) {
                    for (var o, r, s, a = e.cloneNode(!0), l = k.toArray(a.childNodes), c = 0, u = t
                            .length; u > c; c++) o = t[c], r = o.value, o.tag && (s = l[c], o
                        .oneTime ? (r = n.$eval(r), o.html ? k.replace(s, E.parse(r, !0)) : s
                            .data = r) : n._bindDir(o.type, s, o.descriptor, o.def));
                    k.replace(i, a)
                }
            }

            function h(t, e) {
                for (var n, i, o, r = [], a = 0, l = t.length; l > a; a++) o = t[a], n = s(o, e), i =
                    n && n.terminal || "SCRIPT" === o.tagName || !o.hasChildNodes() ? null : h(o
                        .childNodes, e), r.push(n, i);
                return r.length ? d(r) : null
            }

            function d(t) {
                return function (e, n, i) {
                    for (var o, r, s, a = 0, l = 0, c = t.length; c > a; l++) {
                        o = n[l], r = t[a++], s = t[a++];
                        var u = k.toArray(o.childNodes);
                        r && r(e, o, i), s && s(e, u, i)
                    }
                }
            }

            function f(t, e) {
                var n = t.tagName.toLowerCase();
                if (!k.commonTagRE.test(n)) {
                    var i = A(e, "elementDirectives", n);
                    return i ? v(t, n, "", e, i) : void 0
                }
            }

            function p(t, e, n) {
                var i = k.checkComponent(t, e, n);
                if (i) {
                    var o = function (t, e, n) {
                        t._bindDir("component", e, {
                            expression: i
                        }, N, n)
                    };
                    return o.terminal = !0, o
                }
            }

            function m(t, e) {
                if (null !== k.attr(t, "pre")) return g;
                for (var n, i, o = 0, r = j.length; r > o; o++)
                    if (i = j[o], null !== (n = k.attr(t, i))) return v(t, i, n, e)
            }

            function g() {}

            function v(t, e, n, i, o) {
                var r = $.parse(n)[0];
                o = o || i.directives[e];
                var s = function (t, n, i) {
                    t._bindDir(e, n, r, o, i)
                };
                return s.terminal = !0, s
            }

            function y(t, e) {
                for (var n, i, o, r, s, a, l = k.isPlainObject(t) ? b(t) : t.attributes, c = l.length,
                        u = []; c--;) n = l[c], i = n.name, o = n.value, 0 === i.indexOf(T.prefix) ? (
                    s = i.slice(T.prefix.length), a = A(e, "directives", s), a && u.push({
                        name: s,
                        descriptors: $.parse(o),
                        def: a
                    })) : T.interpolate && (r = w(i, o, e), r && u.push(r));
                return u.length ? (u.sort(_), x(u)) : void 0
            }

            function b(t) {
                var e = [];
                for (var n in t) e.push({
                    name: n,
                    value: t[n]
                });
                return e
            }

            function x(t) {
                return function (e, n, i) {
                    for (var o, r, s, a = t.length; a--;)
                        if (o = t[a], o._link) o._link(e, n);
                        else
                            for (s = o.descriptors.length, r = 0; s > r; r++) e._bindDir(o.name, n,
                                o.descriptors[r], o.def, i)
                }
            }

            function w(t, e, n) {
                var i = S.parse(e);
                if (i) {
                    for (var o = n.directives.attr, r = i.length, s = !0; r--;) {
                        var a = i[r];
                        a.tag && !a.oneTime && (s = !1)
                    }
                    return {
                        def: o,
                        _link: s ? function (n, i) {
                            i.setAttribute(t, n.$interpolate(e))
                        } : function (e, n) {
                            var r = S.tokensToExp(i, e),
                                s = $.parse(t + ":" + r)[0];
                            e._bindDir("attr", n, s, o)
                        }
                    }
                }
            }

            function _(t, e) {
                return t = t.def.priority || 0, e = e.def.priority || 0, t > e ? 1 : -1
            }
            var k = n(1),
                C = n(12),
                T = n(3),
                S = n(13),
                $ = n(15),
                E = n(25),
                A = k.resolveAsset,
                N = n(26),
                j = ["repeat", "if"];
            e.compile = function (t, e, n, r) {
                var a = n || !e._asComponent ? s(t, e) : null,
                    l = a && a.terminal || "SCRIPT" === t.tagName || !t.hasChildNodes() ? null : h(t
                        .childNodes, e);
                return function (t, e) {
                    var n = k.toArray(e.childNodes),
                        s = i(function () {
                            a && a(t, e, r), l && l(t, n, r)
                        }, t);
                    return o(t, s)
                }
            }, e.compileAndLinkProps = function (t, e, n) {
                var r = C(e, n),
                    s = i(function () {
                        r(t, null)
                    }, t);
                return o(t, s)
            }, e.compileAndLinkRoot = function (t, e, n) {
                var r, s, a = n._containerAttrs,
                    l = n._replacerAttrs;
                11 !== e.nodeType && (n._asComponent ? (a && (r = y(a, n)), l && (s = y(l, n))) :
                    s = y(e, n));
                var c, u = t._context;
                u && r && (c = i(function () {
                    r(u, e)
                }, u));
                var h = i(function () {
                    s && s(t, e)
                }, t);
                return o(t, h, u, c)
            }, g.terminal = !0
        }, function (t, e, n) {
            function i(t) {
                return function (e, n) {
                    for (var i, r, l, c, u = t.length; u--;) i = t[u], r = i.path, l = i.options,
                        null === i.raw ? e._data[r] = l.type !== Boolean && (l.hasOwnProperty(
                            "default") ? l["default"] : void 0) : i.dynamic ? e._context && (i
                            .mode === a.ONE_TIME ? (c = e._context.$get(i.parentPath), o.assertProp(
                                i, c) && (e[r] = e._data[r] = c)) : e._bindDir("prop", n, i, s)) : (
                            c = l.type === Boolean && "" === i.raw || o.toBoolean(o.toNumber(i
                            .raw)), o.assertProp(i, c) && (e[r] = e._data[r] = c))
                }
            }
            var o = n(1),
                r = n(13),
                s = n(16),
                a = n(3)._propBindingModes,
                l = n(23).identRE,
                c = /^data-/,
                u = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,
                h = /^(true|false)$|^\d.*/;
            t.exports = function (t, e) {
                for (var n, s, d, f, p, m, g, v = [], y = e.length; y--;) {
                    if (n = e[y], s = n.name, f = o.camelize(s.replace(c, "")), !l.test(f), d = t
                        .getAttribute(o.hyphenate(s)), p = {
                            name: s,
                            raw: d,
                            path: f,
                            options: n,
                            mode: a.ONE_WAY
                        }, null !== d) {
                        t.removeAttribute(s);
                        var b = r.parse(d);
                        b && (t && 1 === t.nodeType && t.removeAttribute(s), p.dynamic = !0, p
                            .parentPath = r.tokensToExp(b), g = 1 === b.length, m = h.test(p
                                .parentPath), m || g && b[0].oneTime ? p.mode = a.ONE_TIME : !
                            m && g && b[0].twoWay && u.test(p.parentPath) && (p.mode = a
                                .TWO_WAY))
                    } else n && n.required;
                    v.push(p)
                }
                return i(v)
            }
        }, function (t, e, n) {
            function i(t) {
                return t.replace(m, "\\$&")
            }

            function o() {
                f._delimitersChanged = !1;
                var t = f.delimiters[0],
                    e = f.delimiters[1];
                u = t.charAt(0), h = e.charAt(e.length - 1);
                var n = i(u),
                    o = i(h),
                    r = i(t),
                    s = i(e);
                l = new RegExp(n + "?" + r + "(.+?)" + s + o + "?", "g"), c = new RegExp("^" + n + r +
                    ".*" + s + o + "$"), a = new d(1e3)
            }

            function r(t, e, n) {
                return t.tag ? e && t.oneTime ? '"' + e.$eval(t.value) + '"' : s(t.value, n) : '"' + t
                    .value + '"'
            }

            function s(t, e) {
                if (g.test(t)) {
                    var n = p.parse(t)[0];
                    return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(
                        n.filters) + ",false)" : "(" + t + ")"
                }
                return e ? t : "(" + t + ")"
            }
            var a, l, c, u, h, d = n(14),
                f = n(3),
                p = n(15),
                m = /[-.*+?^${}()|[\]\/\\]/g;
            e.parse = function (t) {
                f._delimitersChanged && o();
                var e = a.get(t);
                if (e) return e;
                if (t = t.replace(/\n/g, ""), !l.test(t)) return null;
                for (var n, i, r, s, u, h, d = [], p = l.lastIndex = 0; n = l.exec(t);) i = n.index,
                    i > p && d.push({
                        value: t.slice(p, i)
                    }), s = n[1].charCodeAt(0), u = 42 === s, h = 64 === s, r = u || h ? n[1].slice(
                        1) : n[1], d.push({
                        tag: !0,
                        value: r.trim(),
                        html: c.test(n[0]),
                        oneTime: u,
                        twoWay: h
                    }), p = i + n[0].length;
                return p < t.length && d.push({
                    value: t.slice(p)
                }), a.put(t, d), d
            }, e.tokensToExp = function (t, e) {
                return t.length > 1 ? t.map(function (t) {
                    return r(t, e)
                }).join("+") : r(t[0], e, !0)
            };
            var g = /[^|]\|[^|]/
        }, function (t, e, n) {
            function i(t) {
                this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = {}
            }
            var o = i.prototype;
            o.put = function (t, e) {
                var n = {
                    key: t,
                    value: e
                };
                return this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) :
                    this.head = n, this.tail = n, this.size === this.limit ? this.shift() :
                    void this.size++
            }, o.shift = function () {
                var t = this.head;
                return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t
                    .older = void 0, this._keymap[t.key] = void 0), t
            }, o.get = function (t, e) {
                var n = this._keymap[t];
                if (void 0 !== n) return n === this.tail ? e ? n : n.value : (n.newer && (n === this
                        .head && (this.head = n.newer), n.newer.older = n.older), n.older &&
                    (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this
                    .tail && (this.tail.newer = n), this.tail = n, e ? n : n.value)
            }, t.exports = i
        }, function (t, e, n) {
            function i() {
                y.raw = s.slice(m, l).trim(), void 0 === y.expression ? y.expression = s.slice(g, l)
                    .trim() : b !== m && o(), (0 === l || y.expression) && v.push(y)
            }

            function o() {
                var t, e = s.slice(b, l).trim();
                if (e) {
                    t = {};
                    var n = e.match(T);
                    t.name = n[0], n.length > 1 && (t.args = n.slice(1).map(r))
                }
                t && (y.filters = y.filters || []).push(t), b = l + 1
            }

            function r(t) {
                var e = S.test(t) ? t : w.stripQuotes(t);
                return {
                    value: e || t,
                    dynamic: !e
                }
            }
            var s, a, l, c, u, h, d, f, p, m, g, v, y, b, x, w = n(1),
                _ = n(14),
                k = new _(1e3),
                C = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,
                T = /[^\s'"]+|'[^']+'|"[^"]+"/g,
                S = /^in$|^-?\d+/;
            e.parse = function (t) {
                var e = k.get(t);
                if (e) return e;
                for (s = t, u = h = !1, d = f = p = m = g = 0, b = 0, v = [], y = {}, x = null, l =
                    0, c = s.length; c > l; l++)
                    if (a = s.charCodeAt(l), u) 39 === a && (u = !u);
                    else if (h) 34 === a && (h = !h);
                else if (44 !== a || p || d || f)
                    if (58 !== a || y.expression || y.arg)
                        if (124 === a && 124 !== s.charCodeAt(l + 1) && 124 !== s.charCodeAt(l - 1))
                            void 0 === y.expression ? (b = l + 1, y.expression = s.slice(g, l)
                            .trim()) : o();
                        else switch (a) {
                            case 34:
                                h = !0;
                                break;
                            case 39:
                                u = !0;
                                break;
                            case 40:
                                p++;
                                break;
                            case 41:
                                p--;
                                break;
                            case 91:
                                f++;
                                break;
                            case 93:
                                f--;
                                break;
                            case 123:
                                d++;
                                break;
                            case 125:
                                d--
                        } else x = s.slice(m, l).trim(), C.test(x) && (g = l + 1, y.arg = w
                            .stripQuotes(x) || x);
                else i(), y = {}, m = g = b = l + 1;
                return (0 === l || m !== l) && i(), k.put(t, v), v
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(17),
                r = n(3)._propBindingModes;
            t.exports = {
                bind: function () {
                    function t(t) {
                        return function (e) {
                            c || (c = !0, t(e), i.nextTick(function () {
                                c = !1
                            }))
                        }
                    }
                    var e = this.vm,
                        n = e._context,
                        s = this._descriptor,
                        a = s.path,
                        l = s.parentPath,
                        c = !1;
                    this.parentWatcher = new o(n, l, t(function (t) {
                        i.assertProp(s, t) && (e[a] = t)
                    }));
                    var u = this.parentWatcher.value;
                    if (i.assertProp(s, u) && ("$data" === a ? e._data = u : e[a] = e._data[a] =
                            u), s.mode === r.TWO_WAY) {
                        var h = this;
                        e.$once("hook:created", function () {
                            h.childWatcher = new o(e, a, t(function (t) {
                                n.$set(l, t)
                            }))
                        })
                    }
                },
                unbind: function () {
                    this.parentWatcher && this.parentWatcher.teardown(), this.childWatcher &&
                        this.childWatcher.teardown()
                }
            }
        }, function (t, e, n) {
            function i(t, e, n, i) {
                var o = "function" == typeof e;
                if (this.vm = t, t._watchers.push(this), this.expression = o ? "" : e, this.cb = n, this
                    .id = ++u, this.active = !0, i = i || {}, this.deep = !!i.deep, this.user = !!i
                    .user, this.twoWay = !!i.twoWay, this.filters = i.filters, this.preProcess = i
                    .preProcess, this.deps = [], this.newDeps = [], o) this.getter = e, this.setter =
                    void 0;
                else {
                    var r = l.parse(e, i.twoWay);
                    this.getter = r.get, this.setter = r.set
                }
                this.value = this.get()
            }

            function o(t) {
                var e, n, i;
                for (e in t)
                    if (n = t[e], r.isArray(n))
                        for (i = n.length; i--;) o(n[i]);
                    else r.isObject(n) && o(n)
            }
            var r = n(1),
                s = n(3),
                a = n(18),
                l = n(22),
                c = n(24),
                u = 0,
                h = i.prototype;
            h.addDep = function (t) {
                var e = this.newDeps,
                    n = this.deps;
                if (r.indexOf(e, t) < 0) {
                    e.push(t);
                    var i = r.indexOf(n, t);
                    0 > i ? t.addSub(this) : n[i] = null
                }
            }, h.get = function () {
                this.beforeGet();
                var t, e = this.vm;
                try {
                    t = this.getter.call(e, e)
                } catch (n) {
                    s.warnExpressionErrors
                }
                return this.deep && o(t), this.preProcess && (t = this.preProcess(t)), this
                    .filters && (t = e._applyFilters(t, null, this.filters, !1)), this.afterGet(), t
            }, h.set = function (t) {
                var e = this.vm;
                this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));
                try {
                    this.setter.call(e, e, t)
                } catch (n) {
                    s.warnExpressionErrors
                }
            }, h.beforeGet = function () {
                a.setTarget(this)
            }, h.afterGet = function () {
                a.setTarget(null);
                for (var t = this.deps.length; t--;) {
                    var e = this.deps[t];
                    e && e.removeSub(this)
                }
                this.deps = this.newDeps, this.newDeps = []
            }, h.update = function () {
                s.async ? c.push(this) : this.run()
            }, h.run = function () {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || r.isArray(t) || this.deep) {
                        var e = this.value;
                        this.value = t, this.cb(t, e)
                    }
                }
            }, h.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || this.vm._watchers.$remove(this);
                    for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                    this.active = !1, this.vm = this.cb = this.value = null
                }
            }, t.exports = i
        }, function (t, e, n) {
            function i(t, e) {
                if (this.id = ++h, this.value = t, this.active = !0, this.deps = [], s.define(t,
                        "__ob__", this), e === d) {
                    var n = a.proto && s.hasProto ? o : r;
                    n(t, c, u), this.observeArray(t)
                } else e === f && this.walk(t)
            }

            function o(t, e) {
                t.__proto__ = e
            }

            function r(t, e, n) {
                for (var i, o = n.length; o--;) i = n[o], s.define(t, i, e[i])
            }
            var s = n(1),
                a = n(3),
                l = n(19),
                c = n(20),
                u = Object.getOwnPropertyNames(c);
            n(21);
            var h = 0,
                d = 0,
                f = 1;
            i.create = function (t) {
                return t && t.hasOwnProperty("__ob__") && t.__ob__ instanceof i ? t.__ob__ : s
                    .isArray(t) ? new i(t, d) : s.isPlainObject(t) && !t._isVue ? new i(t, f) :
                    void 0
            }, i.setTarget = function (t) {
                l.target = t
            };
            var p = i.prototype;
            p.walk = function (t) {
                for (var e, n, i = Object.keys(t), o = i.length; o--;) e = i[o], n = e.charCodeAt(
                    0), 36 !== n && 95 !== n && this.convert(e, t[e])
            }, p.observe = function (t) {
                return i.create(t)
            }, p.observeArray = function (t) {
                for (var e = t.length; e--;) this.observe(t[e])
            }, p.convert = function (t, e) {
                var n = this,
                    i = n.observe(e),
                    o = new l;
                i && i.deps.push(o), Object.defineProperty(n.value, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                        return n.active && o.depend(), e
                    },
                    set: function (t) {
                        if (t !== e) {
                            var i = e && e.__ob__;
                            i && i.deps.$remove(o), e = t;
                            var r = n.observe(t);
                            r && r.deps.push(o), o.notify()
                        }
                    }
                })
            }, p.notify = function () {
                for (var t = this.deps, e = 0, n = t.length; n > e; e++) t[e].notify()
            }, p.addVm = function (t) {
                (this.vms || (this.vms = [])).push(t)
            }, p.removeVm = function (t) {
                this.vms.$remove(t)
            }, t.exports = i
        }, function (t, e, n) {
            function i() {
                this.subs = []
            }
            var o = n(1);
            i.target = null;
            var r = i.prototype;
            r.addSub = function (t) {
                this.subs.push(t)
            }, r.removeSub = function (t) {
                this.subs.$remove(t)
            }, r.depend = function () {
                i.target && i.target.addDep(this)
            }, r.notify = function () {
                for (var t = o.toArray(this.subs), e = 0, n = t.length; n > e; e++) t[e].update()
            }, t.exports = i
        }, function (t, e, n) {
            var i = n(1),
                o = Array.prototype,
                r = Object.create(o);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
                var e = o[t];
                i.define(r, t, function () {
                    for (var n = arguments.length, i = new Array(n); n--;) i[n] =
                        arguments[n];
                    var o, r = e.apply(this, i),
                        s = this.__ob__;
                    switch (t) {
                        case "push":
                            o = i;
                            break;
                        case "unshift":
                            o = i;
                            break;
                        case "splice":
                            o = i.slice(2)
                    }
                    return o && s.observeArray(o), s.notify(), r
                })
            }), i.define(o, "$set", function (t, e) {
                return t >= this.length && (this.length = t + 1), this.splice(t, 1, e)[0]
            }), i.define(o, "$remove", function (t) {
                return this.length ? ("number" != typeof t && (t = i.indexOf(this, t)), t > -1 ?
                    this.splice(t, 1) : void 0) : void 0
            }), t.exports = r
        }, function (t, e, n) {
            var i = n(1),
                o = Object.prototype;
            i.define(o, "$add", function (t, e) {
                if (!this.hasOwnProperty(t)) {
                    var n = this.__ob__;
                    if (!n || i.isReserved(t)) return void(this[t] = e);
                    if (n.convert(t, e), n.notify(), n.vms)
                        for (var o = n.vms.length; o--;) {
                            var r = n.vms[o];
                            r._proxy(t), r._digest()
                        }
                }
            }), i.define(o, "$set", function (t, e) {
                this.$add(t, e), this[t] = e
            }), i.define(o, "$delete", function (t) {
                if (this.hasOwnProperty(t)) {
                    delete this[t];
                    var e = this.__ob__;
                    if (e && !i.isReserved(t) && (e.notify(), e.vms))
                        for (var n = e.vms.length; n--;) {
                            var o = e.vms[n];
                            o._unproxy(t), o._digest()
                        }
                }
            })
        }, function (t, e, n) {
            function i(t, e) {
                var n = T.length;
                return T[n] = e ? t.replace(b, "\\n") : t, '"' + n + '"'
            }

            function o(t) {
                var e = t.charAt(0),
                    n = t.slice(1);
                return m.test(n) ? t : (n = n.indexOf('"') > -1 ? n.replace(w, r) : n, e + "scope." + n)
            }

            function r(t, e) {
                return T[e]
            }

            function s(t, e) {
                v.test(t), T.length = 0;
                var n = t.replace(x, i).replace(y, "");
                n = (" " + n).replace(k, o).replace(w, r);
                var s = l(n);
                return s ? {
                    get: s,
                    body: n,
                    set: e ? c(n) : null
                } : void 0
            }

            function a(t) {
                var e, n;
                return t.indexOf("[") < 0 ? (n = t.split("."), n.raw = t, e = h.compileGetter(n)) : (n =
                    h.parse(t), e = n.get), {
                    get: e,
                    set: function (t, e) {
                        h.set(t, n, e)
                    }
                }
            }

            function l(t) {
                try {
                    return new Function("scope", "return " + t + ";")
                } catch (e) {}
            }

            function c(t) {
                try {
                    return new Function("scope", "value", t + "=value;")
                } catch (e) {}
            }

            function u(t) {
                t.set || (t.set = c(t.body))
            }
            var h = (n(1), n(23)),
                d = n(14),
                f = new d(1e3),
                p =
                "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
                m = new RegExp("^(" + p.replace(/,/g, "\\b|") + "\\b)"),
                g =
                "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",
                v = new RegExp("^(" + g.replace(/,/g, "\\b|") + "\\b)"),
                y = /\s/g,
                b = /\n/g,
                x = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,
                w = /"(\d+)"/g,
                _ =
                /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
                k = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,
                C = /^(true|false)$/,
                T = [];
            e.parse = function (t, n) {
                t = t.trim();
                var i = f.get(t);
                if (i) return n && u(i), i;
                var o = e.isSimplePath(t) ? a(t) : s(t, n);
                return f.put(t, o), o
            }, e.isSimplePath = function (t) {
                return _.test(t) && !C.test(t) && "Math." !== t.slice(0, 5)
            }
        }, function (t, e, n) {
            function i() {}

            function o(t) {
                if (void 0 === t) return "eof";
                var e = t.charCodeAt(0);
                switch (e) {
                    case 91:
                    case 93:
                    case 46:
                    case 34:
                    case 39:
                    case 48:
                        return t;
                    case 95:
                    case 36:
                        return "ident";
                    case 32:
                    case 9:
                    case 10:
                    case 13:
                    case 160:
                    case 65279:
                    case 8232:
                    case 8233:
                        return "ws"
                }
                return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ?
                    "number" : "else"
            }

            function r(t) {
                function e() {
                    var e = t[f + 1];
                    return "inSingleQuote" === p && "'" === e || "inDoubleQuote" === p && '"' === e ? (
                        f++, r = e, m.append(), !0) : void 0
                }
                for (var n, r, s, a, l, c, u, h = [], f = -1, p = "beforePath", m = {
                        push: function () {
                            void 0 !== s && (h.push(s), s = void 0)
                        },
                        append: function () {
                            void 0 === s ? s = r : s += r
                        }
                    }; p;)
                    if (f++, n = t[f], "\\" !== n || !e()) {
                        if (a = o(n), u = d[p], l = u[a] || u["else"] || "error", "error" === l) return;
                        if (p = l[0], c = m[l[1]] || i,
                            r = l[2], r = void 0 === r ? n : "*" === r ? r + n : r, c(), "afterPath" ===
                            p) return h.raw = t, h
                    }
            }

            function s(t) {
                return h.test(t) ? "." + t : +t === t >>> 0 ? "[" + t + "]" : "*" === t.charAt(0) ?
                    "[o" + s(t.slice(1)) + "]" : '["' + t.replace(/"/g, '\\"') + '"]'
            }

            function a(t) {}
            var l = n(1),
                c = n(14),
                u = new c(1e3),
                h = e.identRE = /^[$_a-zA-Z]+[\w$]*$/,
                d = {
                    beforePath: {
                        ws: ["beforePath"],
                        ident: ["inIdent", "append"],
                        "[": ["beforeElement"],
                        eof: ["afterPath"]
                    },
                    inPath: {
                        ws: ["inPath"],
                        ".": ["beforeIdent"],
                        "[": ["beforeElement"],
                        eof: ["afterPath"]
                    },
                    beforeIdent: {
                        ws: ["beforeIdent"],
                        ident: ["inIdent", "append"]
                    },
                    inIdent: {
                        ident: ["inIdent", "append"],
                        0: ["inIdent", "append"],
                        number: ["inIdent", "append"],
                        ws: ["inPath", "push"],
                        ".": ["beforeIdent", "push"],
                        "[": ["beforeElement", "push"],
                        eof: ["afterPath", "push"],
                        "]": ["inPath", "push"]
                    },
                    beforeElement: {
                        ws: ["beforeElement"],
                        0: ["afterZero", "append"],
                        number: ["inIndex", "append"],
                        "'": ["inSingleQuote", "append", ""],
                        '"': ["inDoubleQuote", "append", ""],
                        ident: ["inIdent", "append", "*"]
                    },
                    afterZero: {
                        ws: ["afterElement", "push"],
                        "]": ["inPath", "push"]
                    },
                    inIndex: {
                        0: ["inIndex", "append"],
                        number: ["inIndex", "append"],
                        ws: ["afterElement"],
                        "]": ["inPath", "push"]
                    },
                    inSingleQuote: {
                        "'": ["afterElement"],
                        eof: "error",
                        "else": ["inSingleQuote", "append"]
                    },
                    inDoubleQuote: {
                        '"': ["afterElement"],
                        eof: "error",
                        "else": ["inDoubleQuote", "append"]
                    },
                    afterElement: {
                        ws: ["afterElement"],
                        "]": ["inPath", "push"]
                    }
                };
            e.compileGetter = function (t) {
                var e = "return o" + t.map(s).join("");
                return new Function("o", e)
            }, e.parse = function (t) {
                var n = u.get(t);
                return n || (n = r(t), n && (n.get = e.compileGetter(n), u.put(t, n))), n
            }, e.get = function (t, n) {
                return n = e.parse(n), n ? n.get(t) : void 0
            }, e.set = function (t, n, i) {
                var o = t;
                if ("string" == typeof n && (n = e.parse(n)), !n || !l.isObject(t)) return !1;
                for (var r, s, c = 0, u = n.length; u > c; c++) r = t, s = n[c], "*" === s.charAt(
                    0) && (s = o[s.slice(1)]), u - 1 > c ? (t = t[s], l.isObject(t) || (t = {}, r
                        .$add(s, t), a(n))) : l.isArray(t) ? t.$set(s, i) : s in t ? t[s] = i : (t
                        .$add(s, i), a(n));
                return !0
            }
        }, function (t, e, n) {
            function i() {
                l = [], c = [], u = {}, h = d = f = !1
            }

            function o() {
                d = !0, r(l), f = !0, r(c), i()
            }

            function r(t) {
                for (var e = 0; e < t.length; e++) t[e].run()
            }
            var s = n(1),
                a = n(3),
                l = [],
                c = [],
                u = {},
                h = !1,
                d = !1,
                f = !1;
            e.push = function (t) {
                var e = t.id;
                if (!e || !u[e] || d) {
                    if (u[e]) {
                        if (u[e]++, u[e] > a._maxUpdateCount) return
                    } else u[e] = 1;
                    if (d && !t.user && f) return void t.run();
                    (t.user ? c : l).push(t), h || (h = !0, s.nextTick(o))
                }
            }
        }, function (t, e, n) {
            function i(t) {
                var e = a.get(t);
                if (e) return e;
                var n = document.createDocumentFragment(),
                    i = t.match(u),
                    o = h.test(t);
                if (i || o) {
                    var r = i && i[1],
                        s = c[r] || c._default,
                        l = s[0],
                        d = s[1],
                        f = s[2],
                        p = document.createElement("div");
                    for (p.innerHTML = d + t.trim() + f; l--;) p = p.lastChild;
                    for (var m; m = p.firstChild;) n.appendChild(m)
                } else n.appendChild(document.createTextNode(t));
                return a.put(t, n), n
            }

            function o(t) {
                if (r.isTemplate(t) && t.content instanceof DocumentFragment) return t.content;
                if ("SCRIPT" === t.tagName) return i(t.textContent);
                for (var n, o = e.clone(t), s = document.createDocumentFragment(); n = o.firstChild;) s
                    .appendChild(n);
                return s
            }
            var r = n(1),
                s = n(14),
                a = new s(1e3),
                l = new s(1e3),
                c = {
                    _default: [0, "", ""],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
                };
            c.td = c.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], c.option = c.optgroup = [
                    1, '<select multiple="multiple">', "</select>"
                ], c.thead = c.tbody = c.colgroup = c.caption = c.tfoot = [1, "<table>", "</table>"], c
                .g = c.defs = c.symbol = c.use = c.image = c.text = c.circle = c.ellipse = c.line = c
                .path = c.polygon = c.polyline = c.rect = [1,
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',
                    "</svg>"
                ];
            var u = /<([\w:]+)/,
                h = /&\w+;/,
                d = !!r.inBrowser && function () {
                    var t = document.createElement("div");
                    return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML
                }(),
                f = !!r.inBrowser && function () {
                    var t = document.createElement("textarea");
                    return t.placeholder = "t", "t" === t.cloneNode(!0).value
                }();
            e.clone = function (t) {
                var e, n, i, o = t.cloneNode(!0);
                if (d && (n = t.querySelectorAll("template"), n.length))
                    for (i = o.querySelectorAll("template"), e = i.length; e--;) i[e].parentNode
                        .replaceChild(n[e].cloneNode(!0), i[e]);
                if (f)
                    if ("TEXTAREA" === t.tagName) o.value = t.value;
                    else if (n = t.querySelectorAll("textarea"), n.length)
                    for (i = o.querySelectorAll("textarea"), e = i.length; e--;) i[e].value = n[e]
                        .value;
                return o
            }, e.parse = function (t, n, r) {
                var s, a;
                return t instanceof DocumentFragment ? n ? t.cloneNode(!0) : t : ("string" ==
                    typeof t ? r || "#" !== t.charAt(0) ? a = i(t) : (a = l.get(t), a || (s =
                        document.getElementById(t.slice(1)), s && (a = o(s), l.put(t, a)))) : t
                    .nodeType && (a = o(t)), a && n ? e.clone(a) : a)
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(25);
            t.exports = {
                isLiteral: !0,
                bind: function () {
                    this.el.__vue__ || (this.anchor = i.createAnchor("v-component"), i.replace(
                            this.el, this.anchor), this.keepAlive = null != this
                        ._checkParam("keep-alive"), this.readyEvent = this._checkParam(
                            "wait-for"), this.refID = i.attr(this.el, "ref"), this
                        .keepAlive && (this.cache = {}), null !== this._checkParam(
                            "inline-template") && (this.template = i.extractContent(this.el,
                            !0)), this._pendingCb = this.ctorId = this.Ctor = null, this
                        ._isDynamicLiteral ? this.transMode = this._checkParam(
                            "transition-mode") : this.resolveCtor(this.expression, i.bind(
                            this.initStatic, this)))
                },
                initStatic: function () {
                    var t = this.build(),
                        e = this.anchor;
                    this.setCurrent(t), this.readyEvent ? t.$once(this.readyEvent, function () {
                        t.$before(e)
                    }) : t.$before(e)
                },
                update: function (t) {
                    this.setComponent(t)
                },
                setComponent: function (t, e, n, o) {
                    this.invalidatePending(), t ? this.resolveCtor(t, i.bind(function () {
                        this.unbuild(!0);
                        var t = this.build(e);
                        n && n(t);
                        var i = this;
                        this.readyEvent ? t.$once(this.readyEvent, function () {
                            i.transition(t, o)
                        }) : this.transition(t, o)
                    }, this)) : (this.unbuild(!0), this.remove(this.childVM, o), this
                        .unsetCurrent())
                },
                resolveCtor: function (t, e) {
                    var n = this;
                    this._pendingCb = i.cancellable(function (i) {
                        n.ctorId = t, n.Ctor = i, e()
                    }), this.vm._resolveComponent(t, this._pendingCb)
                },
                invalidatePending: function () {
                    this._pendingCb && (this._pendingCb.cancel(), this._pendingCb = null)
                },
                build: function (t) {
                    if (this.keepAlive) {
                        var e = this.cache[this.ctorId];
                        if (e) return e
                    }
                    if (this.Ctor) {
                        var n = this._host || this.vm,
                            i = o.clone(this.el),
                            r = n.$addChild({
                                el: i,
                                data: t,
                                template: this.template,
                                _linkerCachable: !this.template,
                                _asComponent: !0,
                                _isRouterView: this._isRouterView,
                                _context: this.vm
                            }, this.Ctor);
                        return this.keepAlive && (this.cache[this.ctorId] = r), r
                    }
                },
                unbuild: function (t) {
                    var e = this.childVM;
                    e && !this.keepAlive && e.$destroy(!1, t)
                },
                remove: function (t, e) {
                    var n = this.keepAlive;
                    t ? t.$remove(function () {
                        n || t._cleanup(), e && e()
                    }) : e && e()
                },
                transition: function (t, e) {
                    var n = this,
                        i = this.childVM;
                    switch (this.unsetCurrent(), this.setCurrent(t), n.transMode) {
                        case "in-out":
                            t.$before(n.anchor, function () {
                                n.remove(i, e)
                            });
                            break;
                        case "out-in":
                            n.remove(i, function () {
                                t._isDestroyed || t.$before(n.anchor, e)
                            });
                            break;
                        default:
                            n.remove(i), t.$before(n.anchor, e)
                    }
                },
                setCurrent: function (t) {
                    this.childVM = t;
                    var e = t._refID || this.refID;
                    e && (this.vm.$[e] = t)
                },
                unsetCurrent: function () {
                    var t = this.childVM;
                    this.childVM = null;
                    var e = t && t._refID || this.refID;
                    e && (this.vm.$[e] = null)
                },
                unbind: function () {
                    if (this.invalidatePending(), this.unbuild(), this.unsetCurrent(), this
                        .cache) {
                        for (var t in this.cache) this.cache[t].$destroy();
                        this.cache = null
                    }
                }
            }
        }, function (t, e, n) {
            function i(t, e) {
                var n = e.template,
                    i = l.parse(n, !0);
                if (i) {
                    var c = i.firstChild,
                        u = c.tagName && c.tagName.toLowerCase();
                    return e.replace ? (t === document.body, i.childNodes.length > 1 || 1 !== c
                        .nodeType || "component" === u || s.resolveAsset(e, "elementDirectives",
                        u) || c.hasAttribute(a.prefix + "repeat") ? i : (e._replacerAttrs = o(c), r(
                            t, c), c)) : (t.appendChild(i), t)
                }
            }

            function o(t) {
                if (1 === t.nodeType && t.hasAttributes()) {
                    for (var e = t.attributes, n = {}, i = e.length; i--;) n[e[i].name] = e[i].value;
                    return n
                }
            }

            function r(t, e) {
                for (var n, i, o = t.attributes, r = o.length; r--;) n = o[r].name, i = o[r].value, e
                    .hasAttribute(n) ? "class" === n && (e.className = e.className + " " + i) : e
                    .setAttribute(n, i)
            }
            var s = n(1),
                a = n(3),
                l = n(25);
            e.transclude = function (t, e) {
                return e && (e._containerAttrs = o(t)), s.isTemplate(t) && (t = l.parse(t)), e && (e
                        ._asComponent && !e.template && (e.template = "<content></content>"), e
                        .template && (e._content = s.extractContent(t), t = i(t, e))),
                    t instanceof DocumentFragment && (s.prepend(s.createAnchor("v-start", !0), t), t
                        .appendChild(s.createAnchor("v-end", !0))), t
            }
        }, function (t, e, n) {
            e.text = n(30), e.html = n(31), e.attr = n(32), e.show = n(33), e["class"] = n(35), e.el =
                n(36), e.ref = n(37), e.cloak = n(38), e.style = n(29), e.transition = n(39), e.on = n(
                    42), e.model = n(43), e.repeat = n(48), e["if"] = n(49), e._component = n(26), e
                ._prop = n(16)
        }, function (t, e, n) {
            function i(t) {
                if (h[t]) return h[t];
                var e = o(t);
                return h[t] = h[e] = e, e
            }

            function o(t) {
                t = t.replace(c, "$1-$2").toLowerCase();
                var e = r.camelize(t),
                    n = e.charAt(0).toUpperCase() + e.slice(1);
                if (u || (u = document.createElement("div")), e in u.style) return t;
                for (var i, o = s.length; o--;)
                    if (i = a[o] + n, i in u.style) return s[o] + t
            }
            var r = n(1),
                s = ["-webkit-", "-moz-", "-ms-"],
                a = ["Webkit", "Moz", "ms"],
                l = /!important;?$/,
                c = /([a-z])([A-Z])/g,
                u = null,
                h = {};
            t.exports = {
                deep: !0,
                update: function (t) {
                    this.arg ? this.setProp(this.arg, t) : "object" == typeof t ? this
                        .objectHandler(t) : this.el.style.cssText = t
                },
                objectHandler: function (t) {
                    var e, n, i = this.cache || (this.cache = {});
                    for (e in i) e in t || (this.setProp(e, null), delete i[e]);
                    for (e in t) n = t[e], n !== i[e] && (i[e] = n, this.setProp(e, n))
                },
                setProp: function (t, e) {
                    if (t = i(t))
                        if (null != e && (e += ""), e) {
                            var n = l.test(e) ? "important" : "";
                            n && (e = e.replace(l, "").trim()), this.el.style.setProperty(t, e,
                                n)
                        } else this.el.style.removeProperty(t)
                }
            }
        }, function (t, e, n) {
            var i = n(1);
            t.exports = {
                bind: function () {
                    this.attr = 3 === this.el.nodeType ? "data" : "textContent"
                },
                update: function (t) {
                    this.el[this.attr] = i.toString(t)
                }
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(25);
            t.exports = {
                bind: function () {
                    8 === this.el.nodeType && (this.nodes = [], this.anchor = i.createAnchor(
                        "v-html"), i.replace(this.el, this.anchor))
                },
                update: function (t) {
                    t = i.toString(t), this.nodes ? this.swap(t) : this.el.innerHTML = t
                },
                swap: function (t) {
                    for (var e = this.nodes.length; e--;) i.remove(this.nodes[e]);
                    var n = o.parse(t, !0, !0);
                    this.nodes = i.toArray(n.childNodes), i.before(n, this.anchor)
                }
            }
        }, function (t, e, n) {
            var i = "http://www.w3.org/1999/xlink",
                o = /^xlink:/;
            t.exports = {
                priority: 850,
                update: function (t) {
                    this.arg ? this.setAttr(this.arg, t) : "object" == typeof t && this
                        .objectHandler(t)
                },
                objectHandler: function (t) {
                    var e, n, i = this.cache || (this.cache = {});
                    for (e in i) e in t || (this.setAttr(e, null), delete i[e]);
                    for (e in t) n = t[e], n !== i[e] && (i[e] = n, this.setAttr(e, n))
                },
                setAttr: function (t, e) {
                    e || 0 === e ? o.test(t) ? this.el.setAttributeNS(i, t, e) : this.el
                        .setAttribute(t, e) : this.el.removeAttribute(t)
                }
            }
        }, function (t, e, n) {
            var i = n(34);
            t.exports = function (t) {
                var e = this.el;
                i.apply(e, t ? 1 : -1, function () {
                    e.style.display = t ? "" : "none"
                }, this.vm)
            }
        }, function (t, e, n) {
            var i = n(1);
            e.append = function (t, e, n, i) {
                o(t, 1, function () {
                    e.appendChild(t)
                }, n, i)
            }, e.before = function (t, e, n, r) {
                o(t, 1, function () {
                    i.before(t, e)
                }, n, r)
            }, e.remove = function (t, e, n) {
                o(t, -1, function () {
                    i.remove(t)
                }, e, n)
            }, e.removeThenAppend = function (t, e, n, i) {
                o(t, -1, function () {
                    e.appendChild(t)
                }, n, i)
            }, e.blockAppend = function (t, n, o) {
                for (var r = i.toArray(t.childNodes), s = 0, a = r.length; a > s; s++) e.before(r[
                    s], n, o)
            }, e.blockRemove = function (t, n, i) {
                for (var o, r = t.nextSibling; r !== n;) o = r.nextSibling, e.remove(r, i), r = o
            };
            var o = e.apply = function (t, e, n, o, r) {
                var s = t.__v_trans;
                if (!s || !s.hooks && !i.transitionEndEvent || !o._isCompiled || o.$parent && !o
                    .$parent._isCompiled) return n(), void(r && r());
                var a = e > 0 ? "enter" : "leave";
                s[a](n, r)
            }
        }, function (t, e, n) {
            var i = n(1),
                o = i.addClass,
                r = i.removeClass;
            t.exports = {
                update: function (t) {
                    if (this.arg) {
                        var e = t ? o : r;
                        e(this.el, this.arg)
                    } else if (this.cleanup(), t && "string" == typeof t) o(this.el, t), this
                        .lastVal = t;
                    else if (i.isPlainObject(t)) {
                        for (var n in t) t[n] ? o(this.el, n) : r(this.el, n);
                        this.prevKeys = Object.keys(t)
                    }
                },
                cleanup: function (t) {
                    if (this.lastVal && r(this.el, this.lastVal), this.prevKeys)
                        for (var e = this.prevKeys.length; e--;) t && t[this.prevKeys[e]] || r(
                            this.el, this.prevKeys[e])
                }
            }
        }, function (t, e, n) {
            t.exports = {
                isLiteral: !0,
                bind: function () {
                    this.vm.$$[this.expression] = this.el
                },
                unbind: function () {
                    delete this.vm.$$[this.expression]
                }
            }
        }, function (t, e, n) {
            n(1), t.exports = {
                isLiteral: !0,
                bind: function () {
                    var t = this.el.__vue__;
                    t && (t._refID = this.expression)
                }
            }
        }, function (t, e, n) {
            var i = n(3);
            t.exports = {
                bind: function () {
                    var t = this.el;
                    this.vm.$once("hook:compiled", function () {
                        t.removeAttribute(i.prefix + "cloak")
                    })
                }
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(40);
            t.exports = {
                priority: 1e3,
                isLiteral: !0,
                bind: function () {
                    this._isDynamicLiteral || this.update(this.expression)
                },
                update: function (t, e) {
                    var n = this.el,
                        r = this.el.__vue__ || this.vm,
                        s = i.resolveAsset(r.$options, "transitions", t);
                    t = t || "v", n.__v_trans = new o(n, t, s, r), e && i.removeClass(n, e +
                        "-transition"), i.addClass(n, t + "-transition")
                }
            }
        }, function (t, e, n) {
            function i(t, e, n, i) {
                this.el = t, this.enterClass = e + "-enter", this.leaveClass = e + "-leave", this
                    .hooks = n, this.vm = i, this.pendingCssEvent = this.pendingCssCb = this.cancel =
                    this.pendingJsCb = this.op = this.cb = null, this.typeCache = {};
                var r = this;
                ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
                    r[t] = o.bind(r[t], r)
                })
            }
            var o = n(1),
                r = n(41),
                s = o.addClass,
                a = o.removeClass,
                l = o.transitionEndEvent,
                c = o.animationEndEvent,
                u = o.transitionProp + "Duration",
                h = o.animationProp + "Duration",
                d = 1,
                f = 2,
                p = i.prototype;
            p.enter = function (t, e) {
                this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, s(this.el, this
                        .enterClass), t(), this.callHookWithCb("enter"), this.cancel = this.hooks &&
                    this.hooks.enterCancelled, r.push(this.enterNextTick)
            }, p.enterNextTick = function () {
                var t = this.getCssTransitionType(this.enterClass),
                    e = this.enterDone;
                t === d ? (a(this.el, this.enterClass), this.setupCssCb(l, e)) : t === f ? this
                    .setupCssCb(c, e) : this.pendingJsCb || e()
            }, p.enterDone = function () {
                this.cancel = this.pendingJsCb = null, a(this.el, this.enterClass), this.callHook(
                    "afterEnter"), this.cb && this.cb()
            }, p.leave = function (t, e) {
                this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, s(this
                        .el, this.leaveClass), this.callHookWithCb("leave"), this.cancel = this
                    .hooks && this.hooks.enterCancelled, this.pendingJsCb || r.push(this
                        .leaveNextTick)
            }, p.leaveNextTick = function () {
                var t = this.getCssTransitionType(this.leaveClass);
                if (t) {
                    var e = t === d ? l : c;
                    this.setupCssCb(e, this.leaveDone)
                } else this.leaveDone()
            }, p.leaveDone = function () {
                this.cancel = this.pendingJsCb = null, this.op(), a(this.el, this.leaveClass), this
                    .callHook("afterLeave"), this.cb && this.cb()
            }, p.cancelPending = function () {
                this.op = this.cb = null;
                var t = !1;
                this.pendingCssCb && (t = !0, o.off(this.el, this.pendingCssEvent, this
                        .pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this
                    .pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null),
                    t && (a(this.el, this.enterClass), a(this.el, this.leaveClass)), this.cancel &&
                    (this.cancel.call(this.vm, this.el), this.cancel = null)
            }, p.callHook = function (t) {
                this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el)
            }, p.callHookWithCb = function (t) {
                var e = this.hooks && this.hooks[t];
                e && (e.length > 1 && (this.pendingJsCb = o.cancellable(this[t + "Done"])), e.call(
                    this.vm, this.el, this.pendingJsCb))
            }, p.getCssTransitionType = function (t) {
                if (!(!l || document.hidden || this.hooks && this.hooks.css === !1)) {
                    var e = this.typeCache[t];
                    if (e) return e;
                    var n = this.el.style,
                        i = window.getComputedStyle(this.el),
                        o = n[u] || i[u];
                    if (o && "0s" !== o) e = d;
                    else {
                        var r = n[h] || i[h];
                        r && "0s" !== r && (e = f)
                    }
                    return e && (this.typeCache[t] = e), e
                }
            }, p.setupCssCb = function (t, e) {
                this.pendingCssEvent = t;
                var n = this,
                    i = this.el,
                    r = this.pendingCssCb = function (s) {
                        s.target === i && (o.off(i, t, r), n.pendingCssEvent = n.pendingCssCb =
                            null, !n.pendingJsCb && e && e())
                    };
                o.on(i, t, r)
            }, t.exports = i
        }, function (t, e, n) {
            function i() {
                for (var t = document.documentElement.offsetHeight, e = 0; e < r.length; e++) r[e]();
                return r = [], s = !1, t
            }
            var o = n(1),
                r = [],
                s = !1;
            e.push = function (t) {
                r.push(t), s || (s = !0, o.nextTick(i))
            }
        }, function (t, e, n) {
            var i = n(1);
            t.exports = {
                acceptStatement: !0,
                priority: 700,
                bind: function () {
                    if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
                        var t = this;
                        this.iframeBind = function () {
                            i.on(t.el.contentWindow, t.arg, t.handler)
                        }, i.on(this.el, "load", this.iframeBind)
                    }
                },
                update: function (t) {
                    if ("function" == typeof t) {
                        this.reset();
                        var e = this.vm;
                        this.handler = function (n) {
                            n.targetVM = e, e.$event = n;
                            var i = t(n);
                            return e.$event = null, i
                        }, this.iframeBind ? this.iframeBind() : i.on(this.el, this.arg,
                            this.handler)
                    }
                },
                reset: function () {
                    var t = this.iframeBind ? this.el.contentWindow : this.el;
                    this.handler && i.off(t, this.arg, this.handler)
                },
                unbind: function () {
                    this.reset(), i.off(this.el, "load", this.iframeBind)
                }
            }
        }, function (t, e, n) {
            var i = n(1),
                o = {
                    text: n(44),
                    radio: n(45),
                    select: n(46),
                    checkbox: n(47)
                };
            t.exports = {
                priority: 800,
                twoWay: !0,
                handlers: o,
                bind: function () {
                    this.checkFilters(), this.hasRead && !this.hasWrite;
                    var t, e = this.el,
                        n = e.tagName;
                    if ("INPUT" === n) t = o[e.type] || o.text;
                    else if ("SELECT" === n) t = o.select;
                    else {
                        if ("TEXTAREA" !== n) return;
                        t = o.text
                    }
                    t.bind.call(this), this.update = t.update, this.unbind = t.unbind
                },
                checkFilters: function () {
                    var t = this.filters;
                    if (t)
                        for (var e = t.length; e--;) {
                            var n = i.resolveAsset(this.vm.$options, "filters", t[e].name);
                            ("function" == typeof n || n.read) && (this.hasRead = !0), n
                                .write && (this.hasWrite = !0)
                        }
                }
            }
        }, function (t, e, n) {
            var i = n(1);
            t.exports = {
                bind: function () {
                    function t() {
                        var t = r ? i.toNumber(n.value) : n.value;
                        e.set(t)
                    }
                    var e = this,
                        n = this.el,
                        o = null != this._checkParam("lazy"),
                        r = null != this._checkParam("number"),
                        s = parseInt(this._checkParam("debounce"), 10),
                        a = !1;
                    i.isAndroid || (this.onComposeStart = function () {
                            a = !0
                        }, this.onComposeEnd = function () {
                            a = !1, e.listener()
                        }, i.on(n, "compositionstart", this.onComposeStart), i.on(n,
                            "compositionend", this.onComposeEnd)), this.hasRead || "range" === n
                        .type ? this.listener = function () {
                            if (!a) {
                                var o;
                                try {
                                    o = n.value.length - n.selectionStart
                                } catch (r) {}
                                0 > o || (t(), i.nextTick(function () {
                                    var t = e._watcher.value;
                                    if (e.update(t), null != o) {
                                        var r = i.toString(t).length - o;
                                        n.setSelectionRange(r, r)
                                    }
                                }))
                            }
                        } : this.listener = function () {
                            a || t()
                        }, s && (this.listener = i.debounce(this.listener, s)), this.event = o ?
                        "change" : "input", this.hasjQuery = "function" == typeof jQuery, this
                        .hasjQuery ? jQuery(n).on(this.event, this.listener) : i.on(n, this
                            .event, this.listener), !o && i.isIE9 && (this.onCut = function () {
                            i.nextTick(e.listener)
                        }, this.onDel = function (t) {
                            (46 === t.keyCode || 8 === t.keyCode) && e.listener()
                        }, i.on(n, "cut", this.onCut), i.on(n, "keyup", this.onDel)), (n
                            .hasAttribute("value") || "TEXTAREA" === n.tagName && n.value.trim()
                            ) && (this._initValue = r ? i.toNumber(n.value) : n.value)
                },
                update: function (t) {
                    this.el.value = i.toString(t)
                },
                unbind: function () {
                    var t = this.el;
                    this.hasjQuery ? jQuery(t).off(this.event, this.listener) : i.off(t, this
                        .event, this.listener), this.onComposeStart && (i.off(t,
                        "compositionstart", this.onComposeStart), i.off(t,
                        "compositionend", this.onComposeEnd)), this.onCut && (i.off(t,
                        "cut", this.onCut), i.off(t, "keyup", this.onDel))
                }
            }
        }, function (t, e, n) {
            var i = n(1);
            t.exports = {
                bind: function () {
                    var t = this,
                        e = this.el;
                    this.listener = function () {
                        t.set(e.value)
                    }, i.on(e, "change", this.listener), e.checked && (this._initValue = e
                        .value)
                },
                update: function (t) {
                    this.el.checked = t == this.el.value
                },
                unbind: function () {
                    i.off(this.el, "change", this.listener)
                }
            }
        }, function (t, e, n) {
            function i(t) {
                function e(t) {
                    u.isArray(t) && (n.el.innerHTML = "", o(n.el, t), n.forceUpdate())
                }
                var n = this,
                    i = d.parse(t)[0];
                this.optionWatcher = new h(this.vm, i.expression, e, {
                    deep: !0,
                    filters: i.filters
                }), e(this.optionWatcher.value)
            }

            function o(t, e) {
                for (var n, i, r = 0, s = e.length; s > r; r++) n = e[r], n.options ? (i = document
                    .createElement("optgroup"), i.label = n.label, o(i, n.options)) : (i = document
                    .createElement("option"), "string" == typeof n ? i.text = i.value = n : (null !=
                        n.value && (i.value = n.value), i.text = n.text || n.value || "", n
                        .disabled && (i.disabled = !0))), t.appendChild(i)
            }

            function r() {
                for (var t, e = this.el.options, n = 0, i = e.length; i > n; n++) e[n].hasAttribute(
                    "selected") && (this.multiple ? (t || (t = [])).push(e[n].value) : t = e[n]
                    .value);
                "undefined" != typeof t && (this._initValue = this.number ? u.toNumber(t) : t)
            }

            function s(t) {
                return Array.prototype.filter.call(t.options, a).map(l)
            }

            function a(t) {
                return t.selected
            }

            function l(t) {
                return t.value || t.text
            }

            function c(t, e) {
                for (var n = t.length; n--;)
                    if (t[n] == e) return n;
                return -1
            }
            var u = n(1),
                h = n(17),
                d = n(15);
            t.exports = {
                bind: function () {
                    var t = this,
                        e = this.el;
                    this.forceUpdate = function () {
                        t._watcher && t.update(t._watcher.get())
                    };
                    var n = this._checkParam("options");
                    n && i.call(this, n), this.number = null != this._checkParam("number"), this
                        .multiple = e.hasAttribute("multiple"), this.listener = function () {
                            var n = t.multiple ? s(e) : e.value;
                            n = t.number ? u.isArray(n) ? n.map(u.toNumber) : u.toNumber(n) : n,
                                t.set(n)
                        }, u.on(e, "change", this.listener), r.call(this), this.vm.$on(
                            "hook:attached", this.forceUpdate)
                },
                update: function (t) {
                    var e = this.el;
                    e.selectedIndex = -1;
                    for (var n, i = this.multiple && u.isArray(t), o = e.options, r = o
                        .length; r--;) n = o[r], n.selected = i ? c(t, n.value) > -1 : t == n
                        .value
                },
                unbind: function () {
                    u.off(this.el, "change", this.listener), this.vm.$off("hook:attached", this
                        .forceUpdate), this.optionWatcher && this.optionWatcher.teardown()
                }
            }
        }, function (t, e, n) {
            var i = n(1);
            t.exports = {
                bind: function () {
                    var t = this,
                        e = this.el;
                    this.listener = function () {
                        t.set(e.checked)
                    }, i.on(e, "change", this.listener), e.checked && (this._initValue = e
                        .checked)
                },
                update: function (t) {
                    this.el.checked = !!t
                },
                unbind: function () {
                    i.off(this.el, "change", this.listener)
                }
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                for (var i = t.$el.previousSibling;
                    (!i.__vue__ || i.__vue__.$options._repeatId !== n) && i !== e;) i = i
                    .previousSibling;
                return i.__vue__
            }

            function o(t) {
                for (var e = -1, n = new Array(t); ++e < t;) n[e] = e;
                return n
            }

            function r(t) {
                for (var e = {}, n = 0, i = t.length; i > n; n++) e[t[n].$key] = t[n];
                return e
            }
            var s = n(1),
                a = s.isObject,
                l = s.isPlainObject,
                c = n(13),
                u = n(22),
                h = n(25),
                d = n(10),
                f = 0,
                p = 0,
                m = 1,
                g = 2,
                v = 3;
            t.exports = {
                bind: function () {
                    this.id = "__v_repeat_" + ++f, this.start = s.createAnchor(
                        "v-repeat-start"), this.end = s.createAnchor("v-repeat-end"), s.replace(
                            this.el, this.end), s.before(this.start, this.end), this.template =
                        s.isTemplate(this.el) ? h.parse(this.el, !0) : this.el, this.checkIf(),
                        this.checkRef(), this.checkComponent(), this.idKey = this._checkParam(
                            "track-by") || this._checkParam("trackby");
                    var t = +this._checkParam("stagger");
                    this.enterStagger = +this._checkParam("enter-stagger") || t, this
                        .leaveStagger = +this._checkParam("leave-stagger") || t, this.cache =
                        Object.create(null)
                },
                checkIf: function () {
                    null !== s.attr(this.el, "if")
                },
                checkRef: function () {
                    var t = s.attr(this.el, "ref");
                    this.refID = t ? this.vm.$interpolate(t) : null;
                    var e = s.attr(this.el, "el");
                    this.elId = e ? this.vm.$interpolate(e) : null
                },
                checkComponent: function () {
                    this.componentState = p;
                    var t = this.vm.$options,
                        e = s.checkComponent(this.el, t);
                    if (e) {
                        this.Ctor = null, this.asComponent = !0, null !== this._checkParam(
                            "inline-template") && (this.inlineTemplate = s.extractContent(
                            this.el, !0));
                        var n = c.parse(e);
                        if (n) {
                            var i = c.tokensToExp(n);
                            this.ctorGetter = u.parse(i).get
                        } else this.componentId = e, this.pendingData = null
                    } else {
                        this.Ctor = s.Vue, this.inherit = !0, this.template = d.transclude(this
                            .template);
                        var o = s.extend({}, t);
                        o._asComponent = !1, this._linkFn = d.compile(this.template, o)
                    }
                },
                resolveComponent: function () {
                    this.componentState = m, this.vm._resolveComponent(this.componentId, s.bind(
                        function (t) {
                            this.componentState !== v && (this.Ctor = t, this
                                .componentState = g, this.realUpdate(this
                                    .pendingData), this.pendingData = null)
                        }, this))
                },
                resolveDynamicComponent: function (t, e) {
                    var n, i = Object.create(this.vm);
                    for (n in t) s.define(i, n, t[n]);
                    for (n in e) s.define(i, n, e[n]);
                    var o = this.ctorGetter.call(i, i),
                        r = s.resolveAsset(this.vm.$options, "components", o);
                    return r.options ? r : s.Vue
                },
                update: function (t) {
                    if (this.componentId) {
                        var e = this.componentState;
                        e === p ? (this.pendingData = t, this.resolveComponent()) : e === m ?
                            this.pendingData = t : e === g && this.realUpdate(t)
                    } else this.realUpdate(t)
                },
                realUpdate: function (t) {
                    this.vms = this.diff(t, this.vms), this.refID && (this.vm.$[this.refID] =
                        this.converted ? r(this.vms) : this.vms), this.elId && (this.vm.$$[
                        this.elId] = this.vms.map(function (t) {
                        return t.$el
                    }))
                },
                diff: function (t, e) {
                    var n, o, r, l, c, u, h = this.idKey,
                        d = this.converted,
                        f = this.start,
                        p = this.end,
                        m = s.inDoc(f),
                        g = this.arg,
                        v = !e,
                        y = new Array(t.length);
                    for (l = 0, c = t.length; c > l; l++) n = t[l], o = d ? n.$value : n, u = !
                        a(o), r = !v && this.getVm(o, l, d ? n.$key : null), r ? (r._reused = !
                            0, r.$index = l, (h || d || u) && (g ? r[g] = o : s.isPlainObject(
                                o) ? r.$data = o : r.$value = o)) : (r = this.build(n, l, !0), r
                            ._reused = !1), y[l] = r, v && r.$before(p);
                    if (v) return y;
                    var b = 0,
                        x = e.length - y.length;
                    for (l = 0, c = e.length; c > l; l++) r = e[l], r._reused || (this
                        .uncacheVm(r), r.$destroy(!1, !0), this.remove(r, b++, x, m));
                    var w, _, k, C = 0;
                    for (l = 0, c = y.length; c > l; l++) r = y[l], w = y[l - 1], _ = w ? w
                        ._staggerCb ? w._staggerAnchor : w._blockEnd || w.$el : f, r._reused &&
                        !r._staggerCb ? (k = i(r, f, this.id), k !== w && this.move(r, _)) :
                        this.insert(r, C++, _, m), r._reused = !1;
                    return y
                },
                build: function (t, e, n) {
                    var i = {
                        $index: e
                    };
                    this.converted && (i.$key = t.$key);
                    var o = this.converted ? t.$value : t,
                        r = this.arg;
                    r ? (t = {}, t[r] = o) : l(o) ? t = o : (t = {}, i.$value = o);
                    var a = this.Ctor || this.resolveDynamicComponent(t, i),
                        c = this._host || this.vm,
                        u = c.$addChild({
                            el: h.clone(this.template),
                            data: t,
                            inherit: this.inherit,
                            template: this.inlineTemplate,
                            _meta: i,
                            _repeat: this.inherit,
                            _asComponent: this.asComponent,
                            _linkerCachable: !this.inlineTemplate && a !== s.Vue,
                            _linkFn: this._linkFn,
                            _repeatId: this.id,
                            _context: this.vm
                        }, a);
                    n && this.cacheVm(o, u, e, this.converted ? i.$key : null);
                    var d = typeof o,
                        f = this;
                    return "object" !== this.rawType || "string" !== d && "number" !== d || u
                        .$watch(r || "$value", function (t) {
                            f.filters, f._withLock(function () {
                                f.converted ? f.rawValue[u.$key] = t : f.rawValue
                                    .$set(u.$index, t)
                            })
                        }), u
                },
                unbind: function () {
                    if (this.componentState = v, this.refID && (this.vm.$[this.refID] = null),
                        this.vms)
                        for (var t, e = this.vms.length; e--;) t = this.vms[e], this.uncacheVm(
                            t), t.$destroy()
                },
                cacheVm: function (t, e, n, i) {
                    var o, r = this.idKey,
                        l = this.cache,
                        c = !a(t);
                    i || r || c ? (o = r ? "$index" === r ? n : t[r] : i || n, l[o] || (l[o] =
                        e)) : (o = this.id, t.hasOwnProperty(o) ? null === t[o] && (t[o] =
                        e) : s.define(t, o, e)), e._raw = t
                },
                getVm: function (t, e, n) {
                    var i = this.idKey,
                        o = !a(t);
                    if (n || i || o) {
                        var r = i ? "$index" === i ? e : t[i] : n || e;
                        return this.cache[r]
                    }
                    return t[this.id]
                },
                uncacheVm: function (t) {
                    var e = t._raw,
                        n = this.idKey,
                        i = t.$index,
                        o = t.hasOwnProperty("$key") && t.$key,
                        r = !a(e);
                    if (n || o || r) {
                        var s = n ? "$index" === n ? i : e[n] : o || i;
                        this.cache[s] = null
                    } else e[this.id] = null, t._raw = null
                },
                _preProcess: function (t) {
                    this.rawValue = t;
                    var e = this.rawType = typeof t;
                    if (l(t)) {
                        for (var n, i = Object.keys(t), r = i.length, a = new Array(r); r--;)
                            n = i[r], a[r] = {
                                $key: n,
                                $value: t[n]
                            };
                        return this.converted = !0, a
                    }
                    return this.converted = !1, "number" === e ? t = o(t) : "string" === e && (
                        t = s.toArray(t)), t || []
                },
                insert: function (t, e, n, i) {
                    t._staggerCb && (t._staggerCb.cancel(), t._staggerCb = null);
                    var o = this.getStagger(t, e, null, "enter");
                    if (i && o) {
                        var r = t._staggerAnchor;
                        r || (r = t._staggerAnchor = s.createAnchor("stagger-anchor"), r
                            .__vue__ = t), s.after(r, n);
                        var a = t._staggerCb = s.cancellable(function () {
                            t._staggerCb = null, t.$before(r), s.remove(r)
                        });
                        setTimeout(a, o)
                    } else t.$after(n)
                },
                move: function (t, e) {
                    t.$after(e, null, !1)
                },
                remove: function (t, e, n, i) {
                    function o() {
                        t.$remove(function () {
                            t._cleanup()
                        })
                    }
                    if (t._staggerCb) return t._staggerCb.cancel(), void(t._staggerCb = null);
                    var r = this.getStagger(t, e, n, "leave");
                    if (i && r) {
                        var a = t._staggerCb = s.cancellable(function () {
                            t._staggerCb = null, o()
                        });
                        setTimeout(a, r)
                    } else o()
                },
                getStagger: function (t, e, n, i) {
                    i += "Stagger";
                    var o = t.$el.__v_trans,
                        r = o && o.hooks,
                        s = r && (r[i] || r.stagger);
                    return s ? s.call(t, e, n) : e * this[i]
                }
            }
        }, function (t, e, n) {
            function i(t) {
                t._isAttached || t._callHook("attached")
            }

            function o(t) {
                t._isAttached && t._callHook("detached")
            }
            var r = n(1),
                s = n(10),
                a = n(25),
                l = n(34);
            t.exports = {
                bind: function () {
                    var t = this.el;
                    t.__vue__ ? this.invalid = !0 : (this.start = r.createAnchor("v-if-start"),
                        this.end = r.createAnchor("v-if-end"), r.replace(t, this.end), r
                        .before(this.start, this.end), r.isTemplate(t) ? this.template = a
                        .parse(t, !0) : (this.template = document.createDocumentFragment(),
                            this.template.appendChild(a.clone(t))), this.linker = s.compile(
                            this.template, this.vm.$options, !0))
                },
                update: function (t) {
                    this.invalid || (t ? this.unlink || this.link(a.clone(this.template), this
                        .linker) : this.teardown())
                },
                link: function (t, e) {
                    var n = this.vm;
                    if (this.unlink = e(n, t), l.blockAppend(t, this.end, n), r.inDoc(n.$el)) {
                        var o = this.getContainedComponents();
                        o && o.forEach(i)
                    }
                },
                teardown: function () {
                    if (this.unlink) {
                        var t;
                        r.inDoc(this.vm.$el) && (t = this.getContainedComponents()), l
                            .blockRemove(this.start, this.end, this.vm), t && t.forEach(o), this
                            .unlink(), this.unlink = null
                    }
                },
                getContainedComponents: function () {
                    function t(t) {
                        for (var e, o = n; e !== i;) {
                            if (e = o.nextSibling, o === t.$el || o.contains && o.contains(t
                                    .$el)) return !0;
                            o = e
                        }
                        return !1
                    }
                    var e = this.vm,
                        n = this.start.nextSibling,
                        i = this.end;
                    return e.$children.length && e.$children.filter(t)
                },
                unbind: function () {
                    this.unlink && this.unlink()
                }
            }
        }, function (t, e, n) {
            e.content = n(51), e.partial = n(52)
        }, function (t, e, n) {
            function i(t, e, n) {
                for (var i = document.createDocumentFragment(), o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    n && !s.__v_selected ? i.appendChild(s.cloneNode(!0)) : n || s.parentNode !== e || (
                        s.__v_selected = !0, i.appendChild(s.cloneNode(!0)))
                }
                return i
            }
            var o = n(1);
            t.exports = {
                bind: function () {
                    for (var t = this.vm, e = t; e.$options._repeat;) e = e.$parent;
                    var n, o = e.$options._content;
                    if (!o) return void this.fallback();
                    var r = e._context,
                        s = this.el.getAttribute("select");
                    if (s) {
                        s = t.$interpolate(s);
                        var a = o.querySelectorAll(s);
                        a.length ? (n = i(a, o), n.hasChildNodes() ? this.compile(n, r, t) :
                            this.fallback()) : this.fallback()
                    } else {
                        var l = this,
                            c = function () {
                                l.compile(i(o.childNodes, o, !0), r, t)
                            };
                        e._isCompiled ? c() : e.$once("hook:compiled", c)
                    }
                },
                fallback: function () {
                    this.compile(o.extractContent(this.el, !0), this.vm)
                },
                compile: function (t, e, n) {
                    t && e && (this.unlink = e.$compile(t, n)), t ? o.replace(this.el, t) : o
                        .remove(this.el)
                },
                unbind: function () {
                    this.unlink && this.unlink()
                }
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(25),
                r = n(13),
                s = n(10),
                a = n(14),
                l = new a(1e3),
                c = n(49);
            t.exports = {
                link: c.link,
                teardown: c.teardown,
                getContainedComponents: c.getContainedComponents,
                bind: function () {
                    var t = this.el;
                    this.start = i.createAnchor("v-partial-start"), this.end = i.createAnchor(
                        "v-partial-end"), i.replace(t, this.end), i.before(this.start, this
                        .end);
                    var e = t.getAttribute("name"),
                        n = r.parse(e);
                    n ? this.setupDynamic(n) : this.insert(e)
                },
                setupDynamic: function (t) {
                    var e = this,
                        n = r.tokensToExp(t);
                    this.unwatch = this.vm.$watch(n, function (t) {
                        e.teardown(), e.insert(t)
                    }, {
                        immediate: !0,
                        user: !1
                    })
                },
                insert: function (t) {
                    var e = i.resolveAsset(this.vm.$options, "partials", t);
                    if (e) {
                        var n = o.parse(e, !0),
                            r = (this.vm.constructor.cid || "") + e,
                            s = this.compile(n, r);
                        this.link(n, s)
                    }
                },
                compile: function (t, e) {
                    var n = l.get(e);
                    if (n) return n;
                    var i = s.compile(t, this.vm.$options, !0);
                    return l.put(e, i), i
                },
                unbind: function () {
                    this.unlink && this.unlink(), this.unwatch && this.unwatch()
                }
            }
        }, function (t, e, n) {
            var i = n(1);
            e.json = {
                read: function (t, e) {
                    return "string" == typeof t ? t : JSON.stringify(t, null, Number(e) || 2)
                },
                write: function (t) {
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            }, e.capitalize = function (t) {
                return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) :
                    ""
            }, e.uppercase = function (t) {
                return t || 0 === t ? t.toString().toUpperCase() : ""
            }, e.lowercase = function (t) {
                return t || 0 === t ? t.toString().toLowerCase() : ""
            };
            var o = /(\d{3})(?=\d)/g;
            e.currency = function (t, e) {
                if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";
                e = e || "$";
                var n = Math.abs(t).toFixed(2),
                    i = n.slice(0, -3),
                    r = i.length % 3,
                    s = r > 0 ? i.slice(0, r) + (i.length > 3 ? "," : "") : "",
                    a = n.slice(-3),
                    l = 0 > t ? "-" : "";
                return e + l + s + i.slice(r).replace(o, "$1,") + a
            }, e.pluralize = function (t) {
                var e = i.toArray(arguments, 1);
                return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s")
            };
            var r = {
                esc: 27,
                tab: 9,
                enter: 13,
                "delete": 46,
                up: 38,
                left: 37,
                right: 39,
                down: 40
            };
            e.key = function (t, e) {
                if (t) {
                    var n = r[e];
                    return n || (n = parseInt(e, 10)),
                        function (e) {
                            return e.keyCode === n ? t.call(this, e) : void 0
                        }
                }
            }, e.key.keyCodes = r, i.extend(e, n(54))
        }, function (t, e, n) {
            function i(t, e) {
                if (o.isPlainObject(t)) {
                    for (var n in t)
                        if (i(t[n], e)) return !0
                } else if (o.isArray(t)) {
                    for (var r = t.length; r--;)
                        if (i(t[r], e)) return !0
                } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1
            }
            var o = n(1),
                r = n(23);
            e.filterBy = function (t, e, n, o) {
                return n && "in" !== n && (o = n), null == e ? t : (e = ("" + e).toLowerCase(), t
                    .filter(function (t) {
                        return o ? i(r.get(t, o), e) : i(t, e)
                    }))
            }, e.orderBy = function (t, e, n) {
                if (!e) return t;
                var i = 1;
                return arguments.length > 2 && (i = "-1" === n ? -1 : n ? -1 : 1), t.slice().sort(
                    function (t, n) {
                        return "$key" !== e && "$value" !== e && (t && "$value" in t && (t = t
                                .$value), n && "$value" in n && (n = n.$value)), t = o.isObject(
                                t) ? r.get(t, e) : t, n = o.isObject(n) ? r.get(n, e) : n, t ===
                            n ? 0 : t > n ? i : -i
                    })
            }
        }, function (t, e, n) {
            var i = n(1).mergeOptions;
            e._init = function (t) {
                t = t || {}, this.$el = null, this.$parent = t._parent, this.$root = t._root ||
                    this, this.$children = [], this.$ = {}, this.$$ = {}, this._watchers = [], this
                    ._directives = [], this._childCtors = {}, this._isVue = !0, this._events = {},
                    this._eventsCount = {}, this._eventCancelled = !1, this._isBlock = !1, this
                    ._blockStart = this._blockEnd = null, this._isCompiled = this._isDestroyed =
                    this._isReady = this._isAttached = this._isBeingDestroyed = !1, this._unlinkFn =
                    null, this._context = t._context || t._parent, this.$parent && this.$parent
                    .$children.push(this), this._reused = !1, this._staggerOp = null, t = this
                    .$options = i(this.constructor.options, t, this),
                    this._data = {}, this._initScope(), this._initEvents(), this._callHook(
                        "created"), t.el && this.$mount(t.el)
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                if (n) {
                    var i, r, s, a;
                    for (r in n)
                        if (i = n[r], c.isArray(i))
                            for (s = 0, a = i.length; a > s; s++) o(t, e, r, i[s]);
                        else o(t, e, r, i)
                }
            }

            function o(t, e, n, i, r) {
                var s = typeof i;
                if ("function" === s) t[e](n, i, r);
                else if ("string" === s) {
                    var a = t.$options.methods,
                        l = a && a[i];
                    l && t[e](n, l, r)
                } else i && "object" === s && o(t, e, n, i.handler, i)
            }

            function r() {
                this._isAttached || (this._isAttached = !0, this.$children.forEach(s))
            }

            function s(t) {
                !t._isAttached && u(t.$el) && t._callHook("attached")
            }

            function a() {
                this._isAttached && (this._isAttached = !1, this.$children.forEach(l))
            }

            function l(t) {
                t._isAttached && !u(t.$el) && t._callHook("detached")
            }
            var c = n(1),
                u = c.inDoc;
            e._initEvents = function () {
                var t = this.$options;
                i(this, "$on", t.events), i(this, "$watch", t.watch)
            }, e._initDOMHooks = function () {
                this.$on("hook:attached", r), this.$on("hook:detached", a)
            }, e._callHook = function (t) {
                var e = this.$options[t];
                if (e)
                    for (var n = 0, i = e.length; i > n; n++) e[n].call(this);
                this.$emit("hook:" + t)
            }
        }, function (t, e, n) {
            function i() {}
            var o = n(1),
                r = n(10),
                s = n(18),
                a = n(19);
            e._initScope = function () {
                this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this
                    ._initComputed()
            }, e._initProps = function () {
                var t = this.$options,
                    e = t.el,
                    n = t.props;
                e = t.el = o.query(e), this._propsUnlinkFn = e && n ? r.compileAndLinkProps(this, e,
                    n) : null
            }, e._initData = function () {
                var t = this._data,
                    e = this.$options.data,
                    n = e && e();
                if (n) {
                    this._data = n;
                    for (var i in t) n.hasOwnProperty(i) && void 0 === t[i] || n.$set(i, t[i])
                }
                var r, a, l = this._data,
                    c = Object.keys(l);
                for (r = c.length; r--;) a = c[r], o.isReserved(a) || this._proxy(a);
                s.create(l).addVm(this)
            }, e._setData = function (t) {
                t = t || {};
                var e = this._data;
                this._data = t;
                var n, i, r, a = this.$options.props;
                if (a)
                    for (r = a.length; r--;) i = a[r].name, "$data" === i || t.hasOwnProperty(i) ||
                        t.$set(i, e[i]);
                for (n = Object.keys(e), r = n.length; r--;) i = n[r], o.isReserved(i) || i in t ||
                    this._unproxy(i);
                for (n = Object.keys(t), r = n.length; r--;) i = n[r], this.hasOwnProperty(i) || o
                    .isReserved(i) || this._proxy(i);
                e.__ob__.removeVm(this), s.create(t).addVm(this), this._digest()
            }, e._proxy = function (t) {
                var e = this;
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return e._data[t]
                    },
                    set: function (n) {
                        e._data[t] = n
                    }
                })
            }, e._unproxy = function (t) {
                delete this[t]
            }, e._digest = function () {
                for (var t = this._watchers.length; t--;) this._watchers[t].update();
                var e = this.$children;
                for (t = e.length; t--;) {
                    var n = e[t];
                    n.$options.inherit && n._digest()
                }
            }, e._initComputed = function () {
                var t = this.$options.computed;
                if (t)
                    for (var e in t) {
                        var n = t[e],
                            r = {
                                enumerable: !0,
                                configurable: !0
                            };
                        "function" == typeof n ? (r.get = o.bind(n, this), r.set = i) : (r.get = n
                            .get ? o.bind(n.get, this) : i, r.set = n.set ? o.bind(n.set,
                            this) : i), Object.defineProperty(this, e, r)
                    }
            }, e._initMethods = function () {
                var t = this.$options.methods;
                if (t)
                    for (var e in t) this[e] = o.bind(t[e], this)
            }, e._initMeta = function () {
                var t = this.$options._meta;
                if (t)
                    for (var e in t) this._defineMeta(e, t[e])
            }, e._defineMeta = function (t, e) {
                var n = new a;
                Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                        return n.depend(), e
                    },
                    set: function (t) {
                        t !== e && (e = t, n.notify())
                    }
                })
            }
        }, function (t, e, n) {
            var i = n(1),
                o = n(59),
                r = n(10);
            e._compile = function (t) {
                var e = this.$options,
                    n = this._host;
                if (e._linkFn) this._initElement(t), this._unlinkFn = e._linkFn(this, t, n);
                else {
                    var o = t;
                    t = r.transclude(t, e), this._initElement(t);
                    var s, a = r.compileAndLinkRoot(this, t, e),
                        l = this.constructor;
                    e._linkerCachable && (s = l.linker, s || (s = l.linker = r.compile(t, e)));
                    var c = s ? s(this, t) : r.compile(t, e)(this, t, n);
                    this._unlinkFn = function () {
                        a(), c(!0)
                    }, e.replace && i.replace(o, t)
                }
                return t
            }, e._initElement = function (t) {
                t instanceof DocumentFragment ? (this._isBlock = !0, this.$el = this._blockStart = t
                        .firstChild, this._blockEnd = t.lastChild, 3 === this._blockStart
                        .nodeType && (this._blockStart.data = this._blockEnd.data = ""), this
                        ._blockFragment = t) : this.$el = t, this.$el.__vue__ = this, this
                    ._callHook("beforeCompile")
            }, e._bindDir = function (t, e, n, i, r) {
                this._directives.push(new o(t, e, this, n, i, r))
            }, e._destroy = function (t, e) {
                if (!this._isBeingDestroyed) {
                    this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;
                    var n, i = this.$parent;
                    for (i && !i._isBeingDestroyed && i.$children.$remove(this), n = this.$children
                        .length; n--;) this.$children[n].$destroy();
                    for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this
                        ._unlinkFn(), n = this._watchers.length; n--;) this._watchers[n].teardown();
                    this.$el && (this.$el.__vue__ = null);
                    var o = this;
                    t && this.$el ? this.$remove(function () {
                        o._cleanup()
                    }) : e || this._cleanup()
                }
            }, e._cleanup = function () {
                this._data.__ob__.removeVm(this), this._data = this._watchers = this.$el = this
                    .$parent = this.$root = this.$children = this._directives = null, this
                    ._isDestroyed = !0, this._callHook("destroyed"), this.$off()
            }
        }, function (t, e, n) {
            function i(t, e, n, i, o, r) {
                this.name = t, this.el = e, this.vm = n, this.raw = i.raw, this.expression = i
                    .expression, this.arg = i.arg, this.filters = i.filters, this._descriptor = i, this
                    ._host = r, this._locked = !1, this._bound = !1, this._bind(o)
            }
            var o = n(1),
                r = n(3),
                s = n(17),
                a = n(13),
                l = n(22),
                c = i.prototype;
            c._bind = function (t) {
                if ("cloak" !== this.name && this.el && this.el.removeAttribute && this.el
                    .removeAttribute(r.prefix + this.name), "function" == typeof t ? this.update =
                    t : o.extend(this, t), this._watcherExp = this.expression, this
                    ._checkDynamicLiteral(), this.bind && this.bind(), this._watcherExp && (this
                        .update || this.twoWay) && (!this.isLiteral || this._isDynamicLiteral) && !
                    this._checkStatement()) {
                    var e = this,
                        n = this._update = this.update ? function (t, n) {
                            e._locked || e.update(t, n)
                        } : function () {},
                        i = this._preProcess ? o.bind(this._preProcess, this) : null,
                        a = this._watcher = new s(this.vm, this._watcherExp, n, {
                            filters: this.filters,
                            twoWay: this.twoWay,
                            deep: this.deep,
                            preProcess: i
                        });
                    null != this._initValue ? a.set(this._initValue) : this.update && this.update(a
                        .value)
                }
                this._bound = !0
            }, c._checkDynamicLiteral = function () {
                var t = this.expression;
                if (t && this.isLiteral) {
                    var e = a.parse(t);
                    if (e) {
                        var n = a.tokensToExp(e);
                        this.expression = this.vm.$get(n), this._watcherExp = n, this
                            ._isDynamicLiteral = !0
                    }
                }
            }, c._checkStatement = function () {
                var t = this.expression;
                if (t && this.acceptStatement && !l.isSimplePath(t)) {
                    var e = l.parse(t).get,
                        n = this.vm,
                        i = function () {
                            e.call(n, n)
                        };
                    return this.filters && (i = n._applyFilters(i, null, this.filters)), this
                        .update(i), !0
                }
            }, c._checkParam = function (t) {
                var e = this.el.getAttribute(t);
                return null !== e && this.el.removeAttribute(t), e
            }, c._teardown = function () {
                this._bound && (this._bound = !1, this.unbind && this.unbind(), this._watcher &&
                    this._watcher.teardown(), this.vm = this.el = this._watcher = null)
            }, c.set = function (t) {
                this.twoWay && this._withLock(function () {
                    this._watcher.set(t)
                })
            }, c._withLock = function (t) {
                var e = this;
                e._locked = !0, t.call(e), o.nextTick(function () {
                    e._locked = !1
                })
            }, t.exports = i
        }, function (t, e, n) {
            var i = n(1);
            e._applyFilters = function (t, e, n, o) {
                var r, s, a, l, c, u, h, d, f;
                for (u = 0, h = n.length; h > u; u++)
                    if (r = n[u], s = i.resolveAsset(this.$options, "filters", r.name), s && (s =
                            o ? s.write : s.read || s, "function" == typeof s)) {
                        if (a = o ? [t, e] : [t], c = o ? 2 : 1, r.args)
                            for (d = 0, f = r.args.length; f > d; d++) l = r.args[d], a[d + c] = l
                                .dynamic ? this.$get(l.value) : l.value;
                        t = s.apply(this, a)
                    } return t
            }, e._resolveComponent = function (t, e) {
                var n = i.resolveAsset(this.$options, "components", t);
                if (n.options) e(n);
                else if (n.resolved) e(n.resolved);
                else if (n.requested) n.pendingCallbacks.push(e);
                else {
                    n.requested = !0;
                    var o = n.pendingCallbacks = [e];
                    n(function (t) {
                        i.isPlainObject(t) && (t = i.Vue.extend(t)), n.resolved = t;
                        for (var e = 0, r = o.length; r > e; e++) o[e](t)
                    }, function (t) {})
                }
            }
        }, function (t, e, n) {
            var i = n(17),
                o = n(23),
                r = n(13),
                s = n(15),
                a = n(22),
                l = /[^|]\|[^|]/;
            e.$get = function (t) {
                var e = a.parse(t);
                if (e) try {
                    return e.get.call(this, this)
                } catch (n) {}
            }, e.$set = function (t, e) {
                var n = a.parse(t, !0);
                n && n.set && n.set.call(this, this, e)
            }, e.$add = function (t, e) {
                this._data.$add(t, e)
            }, e.$delete = function (t) {
                this._data.$delete(t)
            }, e.$watch = function (t, e, n) {
                var o = this,
                    r = function (t, n) {
                        e.call(o, t, n)
                    },
                    s = new i(o, t, r, {
                        deep: n && n.deep,
                        user: !n || n.user !== !1
                    });
                return n && n.immediate && r(s.value),
                    function () {
                        s.teardown()
                    }
            }, e.$eval = function (t) {
                if (l.test(t)) {
                    var e = s.parse(t)[0],
                        n = this.$get(e.expression);
                    return e.filters ? this._applyFilters(n, null, e.filters) : n
                }
                return this.$get(t)
            }, e.$interpolate = function (t) {
                var e = r.parse(t),
                    n = this;
                return e ? 1 === e.length ? n.$eval(e[0].value) : e.map(function (t) {
                    return t.tag ? n.$eval(t.value) : t.value
                }).join("") : t
            }, e.$log = function (t) {
                var e = t ? o.get(this._data, t) : this._data;
                e && (e = JSON.parse(JSON.stringify(e))), console.log(e)
            }
        }, function (t, e, n) {
            function i(t, e, n, i, s, a) {
                e = r(e);
                var l = !c.inDoc(e),
                    u = i === !1 || l ? s : a,
                    h = !l && !t._isAttached && !c.inDoc(t.$el);
                return t._isBlock ? o(t, e, u, n) : u(t.$el, e, t, n), h && t._callHook("attached"), t
            }

            function o(t, e, n, i) {
                for (var o, r = t._blockStart, s = t._blockEnd; o !== s;) o = r.nextSibling, n(r, e, t),
                    r = o;
                n(s, e, t, i)
            }

            function r(t) {
                return "string" == typeof t ? document.querySelector(t) : t
            }

            function s(t, e, n, i) {
                e.appendChild(t), i && i()
            }

            function a(t, e, n, i) {
                c.before(t, e), i && i()
            }

            function l(t, e, n) {
                c.remove(t), n && n()
            }
            var c = n(1),
                u = n(34);
            e.$nextTick = function (t) {
                c.nextTick(t, this)
            }, e.$appendTo = function (t, e, n) {
                return i(this, t, e, n, s, u.append)
            }, e.$prependTo = function (t, e, n) {
                return t = r(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this
                    .$appendTo(t, e, n), this
            }, e.$before = function (t, e, n) {
                return i(this, t, e, n, a, u.before)
            }, e.$after = function (t, e, n) {
                return t = r(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(
                    t.parentNode, e, n), this
            }, e.$remove = function (t, e) {
                if (!this.$el.parentNode) return t && t();
                var n = this._isAttached && c.inDoc(this.$el);
                n || (e = !1);
                var i, r = this,
                    a = function () {
                        n && r._callHook("detached"), t && t()
                    };
                return this._isBlock && !this._blockFragment.hasChildNodes() ? (i = e === !1 ? s : u
                    .removeThenAppend, o(this, this._blockFragment, i, a)) : (i = e === !1 ? l :
                    u.remove)(this.$el, this, a), this
            }
        }, function (t, e, n) {
            function i(t, e, n) {
                var i = t.$parent;
                if (i && n && !r.test(e))
                    for (; i;) i._eventsCount[e] = (i._eventsCount[e] || 0) + n, i = i.$parent
            }
            var o = n(1);
            e.$on = function (t, e) {
                return (this._events[t] || (this._events[t] = [])).push(e), i(this, t, 1), this
            }, e.$once = function (t, e) {
                function n() {
                    i.$off(t, n), e.apply(this, arguments)
                }
                var i = this;
                return n.fn = e, this.$on(t, n), this
            }, e.$off = function (t, e) {
                var n;
                if (!arguments.length) {
                    if (this.$parent)
                        for (t in this._events) n = this._events[t], n && i(this, t, -n.length);
                    return this._events = {}, this
                }
                if (n = this._events[t], !n) return this;
                if (1 === arguments.length) return i(this, t, -n.length), this._events[t] = null,
                    this;
                for (var o, r = n.length; r--;)
                    if (o = n[r], o === e || o.fn === e) {
                        i(this, t, -1), n.splice(r, 1);
                        break
                    } return this
            }, e.$emit = function (t) {
                this._eventCancelled = !1;
                var e = this._events[t];
                if (e) {
                    for (var n = arguments.length - 1, i = new Array(n); n--;) i[n] = arguments[n +
                        1];
                    n = 0, e = e.length > 1 ? o.toArray(e) : e;
                    for (var r = e.length; r > n; n++) e[n].apply(this, i) === !1 && (this
                        ._eventCancelled = !0)
                }
                return this
            }, e.$broadcast = function (t) {
                if (this._eventsCount[t]) {
                    for (var e = this.$children, n = 0, i = e.length; i > n; n++) {
                        var o = e[n];
                        o.$emit.apply(o, arguments), o._eventCancelled || o.$broadcast.apply(o,
                            arguments)
                    }
                    return this
                }
            }, e.$dispatch = function () {
                for (var t = this.$parent; t;) t.$emit.apply(t, arguments), t = t._eventCancelled ?
                    null : t.$parent;
                return this
            };
            var r = /^hook:/
        }, function (t, e, n) {
            var i = n(1);
            e.$addChild = function (t, e) {
                e = e || i.Vue, t = t || {};
                var n, o = this,
                    r = void 0 !== t.inherit ? t.inherit : e.options.inherit;
                if (r) {
                    var s = o._childCtors;
                    if (n = s[e.cid], !n) {
                        var a = e.options.name,
                            l = a ? i.classify(a) : "VueComponent";
                        n = new Function("return function " + l +
                                " (options) {this.constructor = " + l + ";this._init(options) }")(),
                            n.options = e.options, n.linker = e.linker, n.prototype = this, s[e
                            .cid] = n
                    }
                } else n = e;
                t._parent = o, t._root = o.$root;
                var c = new n(t);
                return c
            }
        }, function (t, e, n) {
            function i() {
                this._isAttached = !0, this._isReady = !0, this._callHook("ready")
            }
            var o = n(1),
                r = n(10);
            e.$mount = function (t) {
                return this._isCompiled ? void 0 : (t = o.query(t), t || (t = document
                        .createElement("div")), this._compile(t), this._isCompiled = !0, this
                    ._callHook("compiled"), this._initDOMHooks(), o.inDoc(this.$el) ? (this
                        ._callHook("attached"), i.call(this)) : this.$once("hook:attached", i),
                    this)
            }, e.$destroy = function (t, e) {
                this._destroy(t, e)
            }, e.$compile = function (t, e) {
                return r.compile(t, this.$options, !0, e)(this, t)
            }
        }])
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error(
        "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e
            .isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(
                "bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i
                .addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n)
                .removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"),
                this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this
                .$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop(
                "checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass(
            "active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is(
            'input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r
                .interval && o.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this
            .paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this
            .options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" ==
            this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on(
                "mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this
                .cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !
            this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
            function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this
            .$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this
            .interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o
                .addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                    r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(
                        " ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(d)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass(
                "active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]",
        o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this,
                r)), "string" == typeof e && o[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t(
                '[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id +
                '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this
            .addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this
                            .transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i
                        .TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing")
                    .removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr(
                        "aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse")
                        .trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this))
                    .emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each(t.proxy(function (n, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function () {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t
                .contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n
                    .isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open")
                        .trigger("hidden.bs.dropdown", r))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.5", s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document
                    .createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown",
                    a)
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i
                    .trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c)
                        .trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (
        t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype
        .keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(
                ".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this
            .scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(
                ".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this
            .checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this
            .resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide,
                this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0),
                    i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i
                    .enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                o ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e
            .isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off(
                    "focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off(
                    "mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support
                .transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this
                    .hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element
                .trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off(
            "resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger(
                "hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this
                    .$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t
                        .target === t.currentTarget && ("static" == this.options.backdrop ? this
                            .$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css(
            "padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" ==
                typeof e && o[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null,
            this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this
            .$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport
                .call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this
            .inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error(
            "`selector` option must be specified when initializing " + this.type +
            " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle,
                this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this
                    .$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e
            .delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data(
            "bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" :
            "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (
            clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n
                .timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data(
            "bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" :
            "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n
            .options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation &&
                r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this
                    .$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options
                .container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                h = r[0].offsetWidth,
                d = r[0].offsetHeight;
            if (c) {
                var f = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > p.bottom ? "top" : "top" == a && u.top - d < p.top ? "bottom" :
                    "right" == a && u.right + h > p.width ? "left" : "left" == a && u.left - h < p.left ? "right" :
                    a, r.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, h, d);
            this.applyPlacement(m, a);
            var g = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n
                .TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var h = /top|bottom/.test(n),
            d = h ? 2 * u.left - o + l : 2 * u.top - r + c,
            f = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], h)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass(
            "fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o
                .type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support
            .transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n
                .TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t
            .attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type +
            " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this
                .getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n
                .inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) :
            n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip =
                null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" ==
                typeof e && o[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype
        .getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children()
                .detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t
                .removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(
                    ".popover-title").hide()
        }, n.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t
            .extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [],
            this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on(
                "scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement
            .scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this
            .$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this
            .selector).map(function () {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[
            t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger(
            "activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass(
            "active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find(
                    '[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find(
                    '[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e
                .removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass(
                    "active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s
            .removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api",
        '[data-toggle="pill"]', o)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on(
                "scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t
                .proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this
            .unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(t - i >= o +
            s) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            c = a ? s : e;
        return null != n && n >= o ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" ==
                typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element
                    .removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
                null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function (t, e) {
    "object" == typeof exports ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t)
}(this, function (t) {
    function e(t) {
        this._targetElement = t, this._options = {
            nextLabel: "Next &rarr;",
            prevLabel: "&larr; Back",
            skipLabel: "Skip",
            doneLabel: "Done",
            tooltipPosition: "bottom",
            tooltipClass: "",
            highlightClass: "",
            exitOnEsc: !0,
            exitOnOverlayClick: !0,
            showStepNumbers: !0,
            keyboardNavigation: !0,
            showButtons: !0,
            showBullets: !0,
            showProgress: !1,
            scrollToElement: !0,
            overlayOpacity: .8,
            positionPrecedence: ["bottom", "top", "right", "left"],
            disableInteraction: !1
        }
    }

    function n(t) {
        var e = [],
            n = this;
        if (this._options.steps)
            for (var a = [], l = 0, a = this._options.steps.length; l < a; l++) {
                var u = i(this._options.steps[l]);
                if (u.step = e.length + 1, "string" == typeof u.element && (u.element = document.querySelector(u
                        .element)), "undefined" == typeof u.element || null == u.element) {
                    var h = document.querySelector(".introjsFloatingElement");
                    null == h && (h = document.createElement("div"), h.className = "introjsFloatingElement",
                        document.body.appendChild(h)), u.element = h, u.position = "floating"
                }
                null != u.element && e.push(u)
            } else {
                if (a = t.querySelectorAll("*[data-intro]"), 1 > a.length) return !1;
                for (l = 0, u = a.length; l < u; l++) {
                    var h = a[l],
                        d = parseInt(h.getAttribute("data-step"), 10);
                    0 < d && (e[d - 1] = {
                        element: h,
                        intro: h.getAttribute("data-intro"),
                        step: parseInt(h.getAttribute("data-step"), 10),
                        tooltipClass: h.getAttribute("data-tooltipClass"),
                        highlightClass: h.getAttribute("data-highlightClass"),
                        position: h.getAttribute("data-position") || this._options.tooltipPosition
                    })
                }
                for (l = d = 0, u = a.length; l < u; l++)
                    if (h = a[l], null == h.getAttribute("data-step")) {
                        for (;
                            "undefined" != typeof e[d];) d++;
                        e[d] = {
                            element: h,
                            intro: h.getAttribute("data-intro"),
                            step: d + 1,
                            tooltipClass: h.getAttribute("data-tooltipClass"),
                            highlightClass: h.getAttribute("data-highlightClass"),
                            position: h.getAttribute("data-position") || this._options.tooltipPosition
                        }
                    }
            }
        for (l = [], a = 0; a < e.length; a++) e[a] && l.push(e[a]);
        return e = l, e.sort(function (t, e) {
            return t.step - e.step
        }), n._introItems = e, m.call(n, t) && (o.call(n), t.querySelector(".introjs-skipbutton"), t
            .querySelector(".introjs-nextbutton"), n._onKeyDown = function (e) {
                if (27 === e.keyCode && 1 == n._options.exitOnEsc) s.call(n, t), void 0 != n
                    ._introExitCallback && n._introExitCallback.call(n);
                else if (37 === e.keyCode) r.call(n);
                else if (39 === e.keyCode) o.call(n);
                else if (13 === e.keyCode) {
                    var i = e.target || e.srcElement;
                    i && 0 < i.className.indexOf("introjs-prevbutton") ? r.call(n) : i && 0 < i.className
                        .indexOf("introjs-skipbutton") ? s.call(n, t) : o.call(n), e.preventDefault ? e
                        .preventDefault() : e.returnValue = !1
                }
            }, n._onResize = function (t) {
                c.call(n, document.querySelector(".introjs-helperLayer")), c.call(n, document.querySelector(
                    ".introjs-tooltipReferenceLayer"))
            }, window.addEventListener ? (this._options.keyboardNavigation && window.addEventListener("keydown",
                n._onKeyDown, !0), window.addEventListener("resize", n._onResize, !0)) : document.attachEvent &&
            (this._options.keyboardNavigation && document.attachEvent("onkeydown", n._onKeyDown), document
                .attachEvent("onresize", n._onResize))), !1
    }

    function i(t) {
        if (null == t || "object" != typeof t || "undefined" != typeof t.nodeType) return t;
        var e, n = {};
        for (e in t) n[e] = i(t[e]);
        return n
    }

    function o() {
        if (this._direction = "forward", "undefined" == typeof this._currentStep ? this._currentStep = 0 : ++this
            ._currentStep, this._introItems.length <= this._currentStep) "function" == typeof this
            ._introCompleteCallback && this._introCompleteCallback.call(this), s.call(this, this._targetElement);
        else {
            var t = this._introItems[this._currentStep];
            "undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t
                .element), h.call(this, t)
        }
    }

    function r() {
        if (this._direction = "backward", 0 === this._currentStep) return !1;
        var t = this._introItems[--this._currentStep];
        "undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t
            .element), h.call(this, t)
    }

    function s(t) {
        var e = t.querySelector(".introjs-overlay");
        if (null != e) {
            e.style.opacity = 0, setTimeout(function () {
                e.parentNode && e.parentNode.removeChild(e)
            }, 500);
            var n = t.querySelector(".introjs-helperLayer");
            if (n && n.parentNode.removeChild(n), (n = t.querySelector(".introjs-tooltipReferenceLayer")) && n
                .parentNode.removeChild(n), (t = t.querySelector(".introjs-disableInteraction")) && t.parentNode
                .removeChild(t), (t = document.querySelector(".introjsFloatingElement")) && t.parentNode
                .removeChild(t), (t = document.querySelector(".introjs-showElement")) && (t.className = t.className
                    .replace(/introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, "")), (t = document.querySelectorAll(
                    ".introjs-fixParent")) && 0 < t.length)
                for (n = t.length - 1; 0 <= n; n--) t[n].className = t[n].className.replace(/introjs-fixParent/g,
                    "").replace(/^\s+|\s+$/g, "");
            window.removeEventListener ? window.removeEventListener("keydown", this._onKeyDown, !0) : document
                .detachEvent && document.detachEvent("onkeydown", this._onKeyDown), this._currentStep = void 0
        }
    }

    function a(t, e, n, i) {
        var o = "";
        if (e.style.top = null, e.style.right = null, e.style.bottom = null, e.style.left = null, e.style
            .marginLeft = null, e.style.marginTop = null, n.style.display = "inherit", "undefined" != typeof i &&
            null != i && (i.style.top = null, i.style.left = null), this._introItems[this._currentStep]) {
            if (o = this._introItems[this._currentStep], o = "string" == typeof o.tooltipClass ? o.tooltipClass :
                this._options.tooltipClass, e.className = ("introjs-tooltip " + o).replace(/^\s+|\s+$/g, ""),
                currentTooltipPosition = this._introItems[this._currentStep].position, ("auto" ==
                    currentTooltipPosition || "auto" == this._options.tooltipPosition) && "floating" !=
                currentTooltipPosition) {
                var o = currentTooltipPosition,
                    r = this._options.positionPrecedence.slice(),
                    s = f(),
                    a = g(e).height + 10,
                    c = g(e).width + 20,
                    u = g(t),
                    h = "floating";
                u.left + c > s.width || 0 > u.left + u.width / 2 - c ? (l(r, "bottom"), l(r, "top")) : (u.height + u
                        .top + a > s.height && l(r, "bottom"), 0 > u.top - a && l(r, "top")), u.width + u.left + c >
                    s.width && l(r, "right"), 0 > u.left - c && l(r, "left"), 0 < r.length && (h = r[0]), o &&
                    "auto" != o && -1 < r.indexOf(o) && (h = o), currentTooltipPosition = h
            }
            switch (o = g(t), r = g(e).height, s = f(), currentTooltipPosition) {
                case "top":
                    e.style.left = "15px", e.style.top = "-" + (r + 10) + "px", n.className =
                    "introjs-arrow bottom";
                    break;
                case "right":
                    e.style.left = g(t).width + 20 + "px", o.top + r > s.height && (n.className =
                            "introjs-arrow left-bottom", e.style.top = "-" + (r - o.height - 20) + "px"), n
                        .className = "introjs-arrow left";
                    break;
                case "left":
                    1 == this._options.showStepNumbers && (e.style.top = "15px"), o.top + r > s.height ? (e.style
                            .top = "-" + (r - o.height - 20) + "px", n.className = "introjs-arrow right-bottom") : n
                        .className = "introjs-arrow right", e.style.right = o.width + 20 + "px";
                    break;
                case "floating":
                    n.style.display = "none", t = g(e), e.style.left = "50%", e.style.top = "50%", e.style
                        .marginLeft = "-" + t.width / 2 + "px", e.style.marginTop = "-" + t.height / 2 + "px",
                        "undefined" != typeof i && null != i && (i.style.left = "-" + (t.width / 2 + 18) + "px", i
                            .style.top = "-" + (t.height / 2 + 18) + "px");
                    break;
                case "bottom-right-aligned":
                    n.className = "introjs-arrow top-right", e.style.right = "0px", e.style.bottom = "-" + (g(e)
                        .height + 10) + "px";
                    break;
                case "bottom-middle-aligned":
                    i = g(t), t = g(e), n.className = "introjs-arrow top-middle", e.style.left = i.width / 2 - t
                        .width / 2 + "px", e.style.bottom = "-" + (t.height + 10) + "px";
                    break;
                default:
                    e.style.bottom = "-" + (g(e).height + 10) + "px", e.style.left = g(t).width / 2 - g(e).width /
                        2 + "px", n.className = "introjs-arrow top"
            }
        }
    }

    function l(t, e) {
        -1 < t.indexOf(e) && t.splice(t.indexOf(e), 1)
    }

    function c(t) {
        if (t && this._introItems[this._currentStep]) {
            var e = this._introItems[this._currentStep],
                n = g(e.element),
                i = 10;
            "floating" == e.position && (i = 0), t.setAttribute("style", "width: " + (n.width + i) + "px; height:" +
                (n.height + i) + "px; top:" + (n.top - 5) + "px;left: " + (n.left - 5) + "px;")
        }
    }

    function u() {
        var t = document.querySelector(".introjs-disableInteraction");
        null === t && (t = document.createElement("div"), t.className = "introjs-disableInteraction", this
            ._targetElement.appendChild(t)), c.call(this, t)
    }

    function h(t) {
        "undefined" != typeof this._introChangeCallback && this._introChangeCallback.call(this, t.element);
        var e = this,
            n = document.querySelector(".introjs-helperLayer"),
            i = document.querySelector(".introjs-tooltipReferenceLayer"),
            l = "introjs-helperLayer";
        if (g(t.element), "string" == typeof t.highlightClass && (l += " " + t.highlightClass), "string" ==
            typeof this._options.highlightClass && (l += " " + this._options.highlightClass), null != n) {
            var h = i.querySelector(".introjs-helperNumberLayer"),
                m = i.querySelector(".introjs-tooltiptext"),
                y = i.querySelector(".introjs-arrow"),
                b = i.querySelector(".introjs-tooltip"),
                x = i.querySelector(".introjs-skipbutton"),
                w = i.querySelector(".introjs-prevbutton"),
                _ = i.querySelector(".introjs-nextbutton");
            if (n.className = l, b.style.opacity = 0, b.style.display = "none", null != h) {
                var k = this._introItems[0 <= t.step - 2 ? t.step - 2 : 0];
                (null != k && "forward" == this._direction && "floating" == k.position || "backward" == this
                    ._direction && "floating" == t.position) && (h.style.opacity = 0)
            }
            if (c.call(e, n), c.call(e, i), (k = document.querySelectorAll(".introjs-fixParent")) && 0 < k.length)
                for (l = k.length - 1; 0 <= l; l--) k[l].className = k[l].className.replace(/introjs-fixParent/g,
                    "").replace(/^\s+|\s+$/g, "");
            k = document.querySelector(".introjs-showElement"), k.className = k.className.replace(
                /introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, ""), e._lastShowElementTimer && clearTimeout(e
                ._lastShowElementTimer), e._lastShowElementTimer = setTimeout(function () {
                null != h && (h.innerHTML = t.step), m.innerHTML = t.intro, b.style.display = "block", a
                    .call(e, t.element, b, y, h), i.querySelector(".introjs-bullets li > a.active")
                    .className = "", i.querySelector('.introjs-bullets li > a[data-stepnumber="' + t.step +
                        '"]').className = "active", i.querySelector(
                        ".introjs-progress .introjs-progressbar").setAttribute("style", "width:" + v.call(
                        e) + "%;"), b.style.opacity = 1, h && (h.style.opacity = 1), -1 === _.tabIndex ? x
                    .focus() : _.focus()
            }, 350)
        } else {
            var C = document.createElement("div"),
                w = document.createElement("div"),
                n = document.createElement("div"),
                T = document.createElement("div"),
                S = document.createElement("div"),
                $ = document.createElement("div"),
                E = document.createElement("div"),
                A = document.createElement("div");
            C.className = l, w.className = "introjs-tooltipReferenceLayer", c.call(e, C), c.call(e, w), this
                ._targetElement.appendChild(C), this._targetElement.appendChild(w), n.className = "introjs-arrow", S
                .className = "introjs-tooltiptext", S.innerHTML = t.intro, $.className = "introjs-bullets", !1 ===
                this._options.showBullets && ($.style.display = "none");
            for (var C = document.createElement("ul"), l = 0, N = this._introItems.length; l < N; l++) {
                var j = document.createElement("li"),
                    O = document.createElement("a");
                O.onclick = function () {
                        e.goToStep(this.getAttribute("data-stepnumber"))
                    }, l === t.step - 1 && (O.className = "active"), O.href = "javascript:void(0);", O.innerHTML =
                    "&nbsp;", O.setAttribute("data-stepnumber", this._introItems[l].step), j.appendChild(O), C
                    .appendChild(j)
            }
            $.appendChild(C), E.className = "introjs-progress", !1 === this._options.showProgress && (E.style
                    .display = "none"), l = document.createElement("div"), l.className = "introjs-progressbar", l
                .setAttribute("style", "width:" + v.call(this) + "%;"), E.appendChild(l), A.className =
                "introjs-tooltipbuttons", !1 === this._options.showButtons && (A.style.display = "none"), T
                .className = "introjs-tooltip", T.appendChild(S), T.appendChild($), T.appendChild(E), 1 == this
                ._options.showStepNumbers && (k = document.createElement("span"), k.className =
                    "introjs-helperNumberLayer", k.innerHTML = t.step, w.appendChild(k)), T.appendChild(n), w
                .appendChild(T), _ = document.createElement("a"), _.onclick = function () {
                    e._introItems.length - 1 != e._currentStep && o.call(e)
                }, _.href = "javascript:void(0);", _.innerHTML = this._options.nextLabel, w = document
                .createElement("a"), w.onclick = function () {
                    0 != e._currentStep && r.call(e)
                }, w.href = "javascript:void(0);", w.innerHTML = this._options.prevLabel, x = document
                .createElement("a"), x.className = "introjs-button introjs-skipbutton", x.href =
                "javascript:void(0);", x.innerHTML = this._options.skipLabel, x.onclick = function () {
                    e._introItems.length - 1 == e._currentStep && "function" == typeof e._introCompleteCallback && e
                        ._introCompleteCallback.call(e), e._introItems.length - 1 != e._currentStep && "function" ==
                        typeof e._introExitCallback && e._introExitCallback.call(e), s.call(e, e._targetElement)
                }, A.appendChild(x), 1 < this._introItems.length && (A.appendChild(w), A.appendChild(_)), T
                .appendChild(A), a.call(e, t.element, T, n, k)
        }
        for (!0 === this._options.disableInteraction && u.call(e), w.removeAttribute("tabIndex"), _.removeAttribute(
                "tabIndex"), 0 == this._currentStep && 1 < this._introItems.length ? (w.className =
                "introjs-button introjs-prevbutton introjs-disabled", w.tabIndex = "-1", _.className =
                "introjs-button introjs-nextbutton", x.innerHTML = this._options.skipLabel) : this._introItems
            .length - 1 == this._currentStep || 1 == this._introItems.length ? (x.innerHTML = this._options
                .doneLabel, w.className = "introjs-button introjs-prevbutton", _.className =
                "introjs-button introjs-nextbutton introjs-disabled", _.tabIndex = "-1") : (w.className =
                "introjs-button introjs-prevbutton", _.className = "introjs-button introjs-nextbutton", x
                .innerHTML = this._options.skipLabel), _.focus(), t.element.className += " introjs-showElement", k =
            d(t.element, "position"), "absolute" !== k && "relative" !== k && (t.element.className +=
                " introjs-relativePosition"), k = t.element.parentNode; null != k && "body" !== k.tagName
            .toLowerCase();) n = d(k, "z-index"), T = parseFloat(d(k, "opacity")), A = d(k, "transform") || d(k,
                "-webkit-transform") || d(k, "-moz-transform") || d(k, "-ms-transform") || d(k, "-o-transform"), (
                /[0-9]+/.test(n) || 1 > T || "none" !== A) && (k.className += " introjs-fixParent"), k = k
            .parentNode;
        p(t.element) || !0 !== this._options.scrollToElement || (T = t.element.getBoundingClientRect(), k = f()
                .height, n = T.bottom - (T.bottom - T.top), T = T.bottom - k, 0 > n || t.element.clientHeight > k ?
                window.scrollBy(0, n - 30) : window.scrollBy(0, T + 100)), "undefined" != typeof this
            ._introAfterChangeCallback && this._introAfterChangeCallback.call(this, t.element)
    }

    function d(t, e) {
        var n = "";
        return t.currentStyle ? n = t.currentStyle[e] : document.defaultView && document.defaultView
            .getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), n && n
            .toLowerCase ? n.toLowerCase() : n
    }

    function f() {
        if (void 0 != window.innerWidth) return {
            width: window.innerWidth,
            height: window.innerHeight
        };
        var t = document.documentElement;
        return {
            width: t.clientWidth,
            height: t.clientHeight
        }
    }

    function p(t) {
        return t = t.getBoundingClientRect(), 0 <= t.top && 0 <= t.left && t.bottom + 80 <= window.innerHeight && t
            .right <= window.innerWidth
    }

    function m(t) {
        var e = document.createElement("div"),
            n = "",
            i = this;
        if (e.className = "introjs-overlay", "body" === t.tagName.toLowerCase()) n +=
            "top: 0;bottom: 0; left: 0;right: 0;position: fixed;", e.setAttribute("style", n);
        else {
            var o = g(t);
            o && (n += "width: " + o.width + "px; height:" + o.height + "px; top:" + o.top + "px;left: " + o.left +
                "px;", e.setAttribute("style", n))
        }
        return t.appendChild(e), e.onclick = function () {
            1 == i._options.exitOnOverlayClick && (s.call(i, t), void 0 != i._introExitCallback && i
                ._introExitCallback.call(i))
        }, setTimeout(function () {
            n += "opacity: " + i._options.overlayOpacity.toString() + ";", e.setAttribute("style", n)
        }, 10), !0
    }

    function g(t) {
        var e = {};
        e.width = t.offsetWidth, e.height = t.offsetHeight;
        for (var n = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) n += t.offsetLeft, i += t
            .offsetTop, t = t.offsetParent;
        return e.top = i, e.left = n, e
    }

    function v() {
        return 100 * (parseInt(this._currentStep + 1, 10) / this._introItems.length)
    }
    var y = function (t) {
        if ("object" == typeof t) return new e(t);
        if ("string" == typeof t) {
            if (t = document.querySelector(t)) return new e(t);
            throw Error("There is no element with given selector.")
        }
        return new e(document.body)
    };
    return y.version = "1.0.0", y.fn = e.prototype = {
        clone: function () {
            return new e(this)
        },
        setOption: function (t, e) {
            return this._options[t] = e, this
        },
        setOptions: function (t) {
            var e, n = this._options,
                i = {};
            for (e in n) i[e] = n[e];
            for (e in t) i[e] = t[e];
            return this._options = i, this
        },
        start: function () {
            return n.call(this, this._targetElement), this
        },
        goToStep: function (t) {
            return this._currentStep = t - 2, "undefined" != typeof this._introItems && o.call(this), this
        },
        nextStep: function () {
            return o.call(this), this
        },
        previousStep: function () {
            return r.call(this), this
        },
        exit: function () {
            return s.call(this, this._targetElement), this
        },
        refresh: function () {
            return c.call(this, document.querySelector(".introjs-helperLayer")), c.call(this, document
                .querySelector(".introjs-tooltipReferenceLayer")), this
        },
        onbeforechange: function (t) {
            if ("function" != typeof t) throw Error(
                "Provided callback for onbeforechange was not a function");
            return this._introBeforeChangeCallback = t, this
        },
        onchange: function (t) {
            if ("function" != typeof t) throw Error("Provided callback for onchange was not a function.");
            return this._introChangeCallback = t, this
        },
        onafterchange: function (t) {
            if ("function" != typeof t) throw Error(
                "Provided callback for onafterchange was not a function");
            return this._introAfterChangeCallback = t, this
        },
        oncomplete: function (t) {
            if ("function" != typeof t) throw Error("Provided callback for oncomplete was not a function.");
            return this._introCompleteCallback = t, this
        },
        onexit: function (t) {
            if ("function" != typeof t) throw Error("Provided callback for onexit was not a function.");
            return this._introExitCallback = t, this
        }
    }, t.introJs = y
}),
function ($) {
    for (var supportedCSS, supportedCSSOrigin, styles = document.getElementsByTagName("head")[0].style, toCheck =
            "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "), a = 0; a < toCheck
        .length; a++) void 0 !== styles[toCheck[a]] && (supportedCSS = toCheck[a]);
    supportedCSS && (supportedCSSOrigin = supportedCSS.replace(/[tT]ransform/, "TransformOrigin"), "T" ==
        supportedCSSOrigin[0] && (supportedCSSOrigin[0] = "t")), eval('IE = "v"=="\x0B"'), jQuery.fn.extend({
        rotate: function (t) {
            if (0 !== this.length && "undefined" != typeof t) {
                "number" == typeof t && (t = {
                    angle: t
                });
                for (var e = [], n = 0, i = this.length; n < i; n++) {
                    var o = this.get(n);
                    if (o.Wilq32 && o.Wilq32.PhotoEffect) o.Wilq32.PhotoEffect._handleRotation(t);
                    else {
                        var r = $.extend(!0, {}, t),
                            s = new Wilq32.PhotoEffect(o, r)._rootObj;
                        e.push($(s))
                    }
                }
                return e
            }
        },
        getRotateAngle: function () {
            for (var t = [], e = 0, n = this.length; e < n; e++) {
                var i = this.get(e);
                i.Wilq32 && i.Wilq32.PhotoEffect && (t[e] = i.Wilq32.PhotoEffect._angle)
            }
            return t
        },
        stopRotate: function () {
            for (var t = 0, e = this.length; t < e; t++) {
                var n = this.get(t);
                n.Wilq32 && n.Wilq32.PhotoEffect && clearTimeout(n.Wilq32.PhotoEffect._timer)
            }
        }
    }), Wilq32 = window.Wilq32 || {}, Wilq32.PhotoEffect = function () {
        return supportedCSS ? function (t, e) {
            t.Wilq32 = {
                PhotoEffect: this
            }, this._img = this._rootObj = this._eventObj = t, this._handleRotation(e)
        } : function (t, e) {
            if (this._img = t, this._onLoadDelegate = [e], this._rootObj = document.createElement("span"), this
                ._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {
                    PhotoEffect: this
                }, t.parentNode.insertBefore(this._rootObj, t), t.complete) this._Loader();
            else {
                var n = this;
                jQuery(this._img).bind("load", function () {
                    n._Loader()
                })
            }
        }
    }(), Wilq32.PhotoEffect.prototype = {
        _setupParameters: function (t) {
            this._parameters = this._parameters || {}, "number" != typeof this._angle && (this._angle = 0),
                "number" == typeof t.angle && (this._angle = t.angle), this._parameters.animateTo = "number" ==
                typeof t.animateTo ? t.animateTo : this._angle, this._parameters.step = t.step || this
                ._parameters.step || null, this._parameters.easing = t.easing || this._parameters.easing || this
                ._defaultEasing, this._parameters.duration = t.duration || this._parameters.duration || 1e3,
                this._parameters.callback = t.callback || this._parameters.callback || this._emptyFunction, this
                ._parameters.center = t.center || this._parameters.center || ["50%", "50%"], "string" ==
                typeof this._parameters.center[0] ? this._rotationCenterX = parseInt(this._parameters.center[0],
                    10) / 100 * this._imgWidth * this._aspectW : this._rotationCenterX = this._parameters
                .center[0], "string" == typeof this._parameters.center[1] ? this._rotationCenterY = parseInt(
                    this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this
                ._rotationCenterY = this._parameters.center[1], t.bind && t.bind != this._parameters.bind &&
                this._BindEvents(t.bind)
        },
        _emptyFunction: function () {},
        _defaultEasing: function (t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        },
        _handleRotation: function (t, e) {
            return supportedCSS || this._img.complete || e ? (this._setupParameters(t), void(this._angle == this
                    ._parameters.animateTo ? this._rotate(this._angle) : this._animateStart())) : void this
                ._onLoadDelegate.push(t)
        },
        _BindEvents: function (t) {
            if (t && this._eventObj) {
                if (this._parameters.bind) {
                    var e = this._parameters.bind;
                    for (var n in e) e.hasOwnProperty(n) && jQuery(this._eventObj).unbind(n, e[n])
                }
                this._parameters.bind = t;
                for (var n in t) t.hasOwnProperty(n) && jQuery(this._eventObj).bind(n, t[n])
            }
        },
        _Loader: function () {
            return IE ? function () {
                var t = this._img.width,
                    e = this._img.height;
                this._imgWidth = t, this._imgHeight = e, this._img.parentNode.removeChild(this._img), this
                    ._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage
                    .style.height = e + "px", this._vimage.style.width = t + "px", this._vimage.style
                    .position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px",
                    this._aspectW = this._aspectH = 1, this._container = this.createVMLNode("group"), this
                    ._container.style.width = t, this._container.style.height = e, this._container.style
                    .position = "absolute", this._container.style.top = "0px", this._container.style.left =
                    "0px", this._container.setAttribute("coordsize", t - 1 + "," + (e - 1)), this._container
                    .appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj
                    .style.position = "relative", this._rootObj.style.width = t + "px", this._rootObj.style
                    .height = e + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this
                    ._rootObj.className = this._img.className, this._eventObj = this._rootObj;
                for (var n; n = this._onLoadDelegate.shift();) this._handleRotation(n, !0)
            } : function () {
                this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className =
                    this._img.className, this._imgWidth = this._img.naturalWidth, this._imgHeight = this
                    ._img.naturalHeight;
                var t = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                this._width = 3 * t, this._height = 3 * t, this._aspectW = this._img.offsetWidth / this._img
                    .naturalWidth, this._aspectH = this._img.offsetHeight / this._img.naturalHeight, this
                    ._img.parentNode.removeChild(this._img), this._canvas = document.createElement(
                    "canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style
                    .position = "relative", this._canvas.style.left = -this._img.height * this._aspectW +
                    "px", this._canvas.style.top = -this._img.width * this._aspectH + "px", this._canvas
                    .Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas), this._rootObj
                    .style.width = this._img.width * this._aspectW + "px", this._rootObj.style.height = this
                    ._img.height * this._aspectH + "px", this._eventObj = this._canvas, this._cnv = this
                    ._canvas.getContext("2d");
                for (var e; e = this._onLoadDelegate.shift();) this._handleRotation(e, !0)
            }
        }(),
        _animateStart: function () {
            this._timer && clearTimeout(this._timer), this._animateStartTime = +new Date, this
                ._animateStartAngle = this._angle, this._animate()
        },
        _animate: function () {
            var t = +new Date,
                e = t - this._animateStartTime > this._parameters.duration;
            if (e && !this._parameters.animatedGif) clearTimeout(this._timer);
            else {
                if (this._canvas || this._vimage || this._img) {
                    var n = this._parameters.easing(0, t - this._animateStartTime, this._animateStartAngle, this
                        ._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                    this._rotate(~~(10 * n) / 10)
                }
                this._parameters.step && this._parameters.step(this._angle);
                var i = this;
                this._timer = setTimeout(function () {
                    i._animate.call(i)
                }, 10)
            }
            this._parameters.callback && e && (this._angle = this._parameters.animateTo, this._rotate(this
                ._angle), this._parameters.callback.call(this._rootObj))
        },
        _rotate: function () {
            var t = Math.PI / 180;
            return IE ? function (t) {
                this._angle = t, this._container.style.rotation = t % 360 + "deg", this._vimage.style
                    .top = -(this._rotationCenterY - this._imgHeight / 2) + "px", this._vimage.style
                    .left = -(this._rotationCenterX - this._imgWidth / 2) + "px", this._container.style
                    .top = this._rotationCenterY - this._imgHeight / 2 + "px", this._container.style.left =
                    this._rotationCenterX - this._imgWidth / 2 + "px"
            } : supportedCSS ? function (t) {
                this._angle = t, this._img.style[supportedCSS] = "rotate(" + t % 360 + "deg)", this._img
                    .style[supportedCSSOrigin] = this._parameters.center.join(" ")
            } : function (e) {
                this._angle = e, e = e % 360 * t, this._canvas.width = this._width, this._canvas.height =
                    this._height, this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this
                        ._aspectH), this._cnv.translate(this._rotationCenterX, this._rotationCenterY), this
                    ._cnv.rotate(e), this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY),
                    this._cnv.scale(this._aspectW, this._aspectH), this._cnv.drawImage(this._img, 0, 0)
            }
        }()
    }, IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function () {
        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            return !document.namespaces.rvml && document.namespaces.add("rvml",
                "urn:schemas-microsoft-com:vml"),
                function (t) {
                    return document.createElement("<rvml:" + t + ' class="rvml">')
                }
        } catch (t) {
            return function (t) {
                return document.createElement("<" + t +
                    ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }())
}(jQuery),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require(
        "jquery") : jQuery)
}(function (t) {
    function e(t) {
        return a.raw ? t : encodeURIComponent(t)
    }

    function n(t) {
        return a.raw ? t : decodeURIComponent(t)
    }

    function i(t) {
        return e(a.json ? JSON.stringify(t) : String(t))
    }

    function o(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(s, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }

    function r(e, n) {
        var i = a.raw ? e : o(e);
        return t.isFunction(n) ? n(i) : i
    }
    var s = /\+/g,
        a = t.cookie = function (o, s, l) {
            if (void 0 !== s && !t.isFunction(s)) {
                if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires,
                        u = l.expires = new Date;
                    u.setTime(+u + 864e5 * c)
                }
                return document.cookie = [e(o), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "",
                    l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ?
                    "; secure" : ""
                ].join("")
            }
            for (var h = o ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, p = d
                    .length; f < p; f++) {
                var m = d[f].split("="),
                    g = n(m.shift()),
                    v = m.join("=");
                if (o && o === g) {
                    h = r(v, s);
                    break
                }
                o || void 0 === (v = r(v)) || (h[g] = v)
            }
            return h
        };
    a.defaults = {}, t.removeCookie = function (e, n) {
        return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })), !t.cookie(e))
    }
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, n, i, o) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
        },
        easeInQuad: function (t, e, n, i, o) {
            return i * (e /= o) * e + n
        },
        easeOutQuad: function (t, e, n, i, o) {
            return -i * (e /= o) * (e - 2) + n
        },
        easeInOutQuad: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function (t, e, n, i, o) {
            return i * (e /= o) * e * e + n
        },
        easeOutCubic: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e + 1) + n
        },
        easeInOutCubic: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e + n
        },
        easeOutQuart: function (t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e * e + n
        },
        easeOutQuint: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function (t, e, n, i, o) {
            return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (t, e, n, i, o) {
            return i * Math.sin(e / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function (t, e, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
        },
        easeInExpo: function (t, e, n, i, o) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
        },
        easeOutExpo: function (t, e, n, i, o) {
            return e == o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
        },
        easeInOutExpo: function (t, e, n, i, o) {
            return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i /
                2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function (t, e, n, i, o) {
            return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
        },
        easeOutCirc: function (t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        },
        easeInOutCirc: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -=
                2) * e) + 1) + n
        },
        easeInElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) + n
        },
        easeOutElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= o / 2)) return n + i;
            if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) +
                n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
        },
        easeOutBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
        },
        easeInOutBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * (((r *= 1.525) + 1) * e -
                r)) + n : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n
        },
        easeInBounce: function (t, e, n, i, o) {
            return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
        },
        easeOutBounce: function (t, e, n, i, o) {
            return (e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 /
                    2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n :
                i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function (t, e, n, i, o) {
            return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing
                .easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
        }
    }),
    function (t) {
        t.color = {}, t.color.make = function (e, n, i, o) {
            var r = {};
            return r.r = e || 0, r.g = n || 0, r.b = i || 0, r.a = null != o ? o : 1, r.add = function (t, e) {
                for (var n = 0; n < t.length; ++n) r[t.charAt(n)] += e;
                return r.normalize()
            }, r.scale = function (t, e) {
                for (var n = 0; n < t.length; ++n) r[t.charAt(n)] *= e;
                return r.normalize()
            }, r.toString = function () {
                return r.a >= 1 ? "rgb(" + [r.r, r.g, r.b].join(",") + ")" : "rgba(" + [r.r, r.g, r.b, r.a]
                    .join(",") + ")"
            }, r.normalize = function () {
                function t(t, e, n) {
                    return e < t ? t : e > n ? n : e
                }
                return r.r = t(0, parseInt(r.r), 255), r.g = t(0, parseInt(r.g), 255), r.b = t(0, parseInt(r.b),
                    255), r.a = t(0, r.a, 1), r
            }, r.clone = function () {
                return t.color.make(r.r, r.b, r.g, r.a)
            }, r.normalize()
        }, t.color.extract = function (e, n) {
            var i;
            do {
                if (i = e.css(n).toLowerCase(), "" != i && "transparent" != i) break;
                e = e.parent()
            } while (e.length && !t.nodeName(e.get(0), "body"));
            return "rgba(0, 0, 0, 0)" == i && (i = "transparent"), t.color.parse(i)
        }, t.color.parse = function (n) {
            var i, o = t.color.make;
            if (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return o(parseInt(i[
                1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
            if (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/
                .exec(n)) return o(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4]));
            if (i =
                /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/
                .exec(n)) return o(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]));
            if (i =
                /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/
                .exec(n)) return o(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]),
                parseFloat(i[4]));
            if (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return o(parseInt(i[1], 16),
                parseInt(i[2], 16), parseInt(i[3], 16));
            if (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return o(parseInt(i[1] + i[1], 16),
                parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16));
            var r = t.trim(n).toLowerCase();
            return "transparent" == r ? o(255, 255, 255, 0) : (i = e[r] || [0, 0, 0], o(i[0], i[1], i[2]))
        };
        var e = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0]
        }
    }(jQuery),
    function (t) {
        function e(e, n) {
            var i = n.children("." + e)[0];
            if (null == i && (i = document.createElement("canvas"), i.className = e, t(i).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(n), !i.getContext)) {
                if (!window.G_vmlCanvasManager) throw new Error(
                    "Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode."
                    );
                i = window.G_vmlCanvasManager.initElement(i)
            }
            this.element = i;
            var o = this.context = i.getContext("2d"),
                r = window.devicePixelRatio || 1,
                s = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o
                .oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
            this.pixelRatio = r / s, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this
                ._textCache = {}
        }

        function n(n, o, r, s) {
            function a(t, e) {
                e = [gt].concat(e);
                for (var n = 0; n < t.length; ++n) t[n].apply(this, e)
            }

            function l() {
                for (var n = {
                        Canvas: e
                    }, i = 0; i < s.length; ++i) {
                    var o = s[i];
                    o.init(gt, n), o.options && t.extend(!0, ot, o.options)
                }
            }

            function c(e) {
                t.extend(!0, ot, e), e && e.colors && (ot.colors = e.colors), null == ot.xaxis.color && (ot.xaxis
                        .color = t.color.parse(ot.grid.color).scale("a", .22).toString()), null == ot.yaxis.color && (ot
                        .yaxis.color = t.color.parse(ot.grid.color).scale("a", .22).toString()), null == ot.xaxis
                    .tickColor && (ot.xaxis.tickColor = ot.grid.tickColor || ot.xaxis.color), null == ot.yaxis
                    .tickColor && (ot.yaxis.tickColor = ot.grid.tickColor || ot.yaxis.color), null == ot.grid
                    .borderColor && (ot.grid.borderColor = ot.grid.color), null == ot.grid.tickColor && (ot.grid
                        .tickColor = t.color.parse(ot.grid.color).scale("a", .22).toString());
                var i, o, r, s = n.css("font-size"),
                    l = s ? +s.replace("px", "") : 13,
                    c = {
                        style: n.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: n.css("font-variant"),
                        weight: n.css("font-weight"),
                        family: n.css("font-family")
                    };
                for (r = ot.xaxes.length || 1, i = 0; i < r; ++i) o = ot.xaxes[i], o && !o.tickColor && (o.tickColor = o
                    .color), o = t.extend(!0, {}, ot.xaxis, o), ot.xaxes[i] = o, o.font && (o.font = t.extend({}, c,
                    o.font), o.font.color || (o.font.color = o.color), o.font.lineHeight || (o.font.lineHeight =
                    Math.round(1.15 * o.font.size)));
                for (r = ot.yaxes.length || 1, i = 0; i < r; ++i) o = ot.yaxes[i], o && !o.tickColor && (o.tickColor = o
                    .color), o = t.extend(!0, {}, ot.yaxis, o), ot.yaxes[i] = o, o.font && (o.font = t.extend({}, c,
                    o.font), o.font.color || (o.font.color = o.color), o.font.lineHeight || (o.font.lineHeight =
                    Math.round(1.15 * o.font.size)));
                for (ot.xaxis.noTicks && null == ot.xaxis.ticks && (ot.xaxis.ticks = ot.xaxis.noTicks), ot.yaxis
                    .noTicks && null == ot.yaxis.ticks && (ot.yaxis.ticks = ot.yaxis.noTicks), ot.x2axis && (ot.xaxes[
                        1] = t.extend(!0, {}, ot.xaxis, ot.x2axis), ot.xaxes[1].position = "top", null == ot.x2axis
                        .min && (ot.xaxes[1].min = null), null == ot.x2axis.max && (ot.xaxes[1].max = null)), ot
                    .y2axis && (ot.yaxes[1] = t.extend(!0, {}, ot.yaxis, ot.y2axis), ot.yaxes[1].position = "right",
                        null == ot.y2axis.min && (ot.yaxes[1].min = null), null == ot.y2axis.max && (ot.yaxes[1].max =
                            null)), ot.grid.coloredAreas && (ot.grid.markings = ot.grid.coloredAreas), ot.grid
                    .coloredAreasColor && (ot.grid.markingsColor = ot.grid.coloredAreasColor), ot.lines && t.extend(!0,
                        ot.series.lines, ot.lines), ot.points && t.extend(!0, ot.series.points, ot.points), ot.bars && t
                    .extend(!0, ot.series.bars, ot.bars), null != ot.shadowSize && (ot.series.shadowSize = ot
                        .shadowSize), null != ot.highlightColor && (ot.series.highlightColor = ot.highlightColor), i =
                    0; i < ot.xaxes.length; ++i) g(ut, i + 1).options = ot.xaxes[i];
                for (i = 0; i < ot.yaxes.length; ++i) g(ht, i + 1).options = ot.yaxes[i];
                for (var u in mt) ot.hooks[u] && ot.hooks[u].length && (mt[u] = mt[u].concat(ot.hooks[u]));
                a(mt.processOptions, [ot])
            }

            function u(t) {
                it = h(t), v(), y()
            }

            function h(e) {
                for (var n = [], i = 0; i < e.length; ++i) {
                    var o = t.extend(!0, {}, ot.series);
                    null != e[i].data ? (o.data = e[i].data, delete e[i].data, t.extend(!0, o, e[i]), e[i].data = o
                        .data) : o.data = e[i], n.push(o)
                }
                return n
            }

            function d(t, e) {
                var n = t[e + "axis"];
                return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
            }

            function f() {
                return t.grep(ut.concat(ht), function (t) {
                    return t
                })
            }

            function p(t) {
                var e, n, i = {};
                for (e = 0; e < ut.length; ++e) n = ut[e], n && n.used && (i["x" + n.n] = n.c2p(t.left));
                for (e = 0; e < ht.length; ++e) n = ht[e], n && n.used && (i["y" + n.n] = n.c2p(t.top));
                return void 0 !== i.x1 && (i.x = i.x1), void 0 !== i.y1 && (i.y = i.y1), i
            }

            function m(t) {
                var e, n, i, o = {};
                for (e = 0; e < ut.length; ++e)
                    if (n = ut[e], n && n.used && (i = "x" + n.n, null == t[i] && 1 == n.n && (i = "x"), null != t[
                        i])) {
                        o.left = n.p2c(t[i]);
                        break
                    } for (e = 0; e < ht.length; ++e)
                    if (n = ht[e], n && n.used && (i = "y" + n.n, null == t[i] && 1 == n.n && (i = "y"), null != t[
                        i])) {
                        o.top = n.p2c(t[i]);
                        break
                    } return o
            }

            function g(e, n) {
                return e[n - 1] || (e[n - 1] = {
                    n: n,
                    direction: e == ut ? "x" : "y",
                    options: t.extend(!0, {}, e == ut ? ot.xaxis : ot.yaxis)
                }), e[n - 1]
            }

            function v() {
                var e, n = it.length,
                    i = -1;
                for (e = 0; e < it.length; ++e) {
                    var o = it[e].color;
                    null != o && (n--, "number" == typeof o && o > i && (i = o))
                }
                n <= i && (n = i + 1);
                var r, s = [],
                    a = ot.colors,
                    l = a.length,
                    c = 0;
                for (e = 0; e < n; e++) r = t.color.parse(a[e % l] || "#666"), e % l == 0 && e && (c = c >= 0 ? c < .5 ?
                    -c - .2 : 0 : -c), s[e] = r.scale("rgb", 1 + c);
                var u, h = 0;
                for (e = 0; e < it.length; ++e) {
                    if (u = it[e], null == u.color ? (u.color = s[h].toString(), ++h) : "number" == typeof u.color && (u
                            .color = s[u.color].toString()), null == u.lines.show) {
                        var f, p = !0;
                        for (f in u)
                            if (u[f] && u[f].show) {
                                p = !1;
                                break
                            } p && (u.lines.show = !0)
                    }
                    null == u.lines.zero && (u.lines.zero = !!u.lines.fill), u.xaxis = g(ut, d(u, "x")), u.yaxis = g(ht,
                        d(u, "y"))
                }
            }

            function y() {
                function e(t, e, n) {
                    e < t.datamin && e != -y && (t.datamin = e), n > t.datamax && n != y && (t.datamax = n)
                }
                var n, i, o, r, s, l, c, u, h, d, p, m, g = Number.POSITIVE_INFINITY,
                    v = Number.NEGATIVE_INFINITY,
                    y = Number.MAX_VALUE;
                for (t.each(f(), function (t, e) {
                        e.datamin = g, e.datamax = v, e.used = !1
                    }), n = 0; n < it.length; ++n) s = it[n], s.datapoints = {
                    points: []
                }, a(mt.processRawData, [s, s.data, s.datapoints]);
                for (n = 0; n < it.length; ++n) {
                    if (s = it[n], p = s.data, m = s.datapoints.format, !m) {
                        if (m = [], m.push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), m.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), s.bars.show || s.lines.show && s.lines.fill) {
                            var b = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
                            m.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: b
                            }), s.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
                        }
                        s.datapoints.format = m
                    }
                    if (null == s.datapoints.pointsize) {
                        s.datapoints.pointsize = m.length, c = s.datapoints.pointsize, l = s.datapoints.points;
                        var x = s.lines.show && s.lines.steps;
                        for (s.xaxis.used = s.yaxis.used = !0, i = o = 0; i < p.length; ++i, o += c) {
                            d = p[i];
                            var w = null == d;
                            if (!w)
                                for (r = 0; r < c; ++r) u = d[r], h = m[r], h && (h.number && null != u && (u = +u,
                                        isNaN(u) ? u = null : u == 1 / 0 ? u = y : u == -(1 / 0) && (u = -y)),
                                    null == u && (h.required && (w = !0), null != h.defaultValue && (u = h
                                        .defaultValue))), l[o + r] = u;
                            if (w)
                                for (r = 0; r < c; ++r) u = l[o + r], null != u && (h = m[r], h.autoscale !== !1 && (h
                                    .x && e(s.xaxis, u, u), h.y && e(s.yaxis, u, u))), l[o + r] = null;
                            else if (x && o > 0 && null != l[o - c] && l[o - c] != l[o] && l[o - c + 1] != l[o + 1]) {
                                for (r = 0; r < c; ++r) l[o + c + r] = l[o + r];
                                l[o + 1] = l[o - c + 1], o += c
                            }
                        }
                    }
                }
                for (n = 0; n < it.length; ++n) s = it[n], a(mt.processDatapoints, [s, s.datapoints]);
                for (n = 0; n < it.length; ++n) {
                    s = it[n], l = s.datapoints.points, c = s.datapoints.pointsize, m = s.datapoints.format;
                    var _ = g,
                        k = g,
                        C = v,
                        T = v;
                    for (i = 0; i < l.length; i += c)
                        if (null != l[i])
                            for (r = 0; r < c; ++r) u = l[i + r], h = m[r], h && h.autoscale !== !1 && u != y && u != -
                                y && (h.x && (u < _ && (_ = u), u > C && (C = u)), h.y && (u < k && (k = u), u > T && (
                                    T = u)));
                    if (s.bars.show) {
                        var S;
                        switch (s.bars.align) {
                            case "left":
                                S = 0;
                                break;
                            case "right":
                                S = -s.bars.barWidth;
                                break;
                            default:
                                S = -s.bars.barWidth / 2
                        }
                        s.bars.horizontal ? (k += S, T += S + s.bars.barWidth) : (_ += S, C += S + s.bars.barWidth)
                    }
                    e(s.xaxis, _, C), e(s.yaxis, k, T)
                }
                t.each(f(), function (t, e) {
                    e.datamin == g && (e.datamin = null), e.datamax == v && (e.datamax = null)
                })
            }

            function b() {
                n.css("padding", 0).children().filter(function () {
                    return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                }).remove(), "static" == n.css("position") && n.css("position", "relative"), rt = new e("flot-base",
                    n), st = new e("flot-overlay", n), lt = rt.context, ct = st.context, at = t(st.element).unbind();
                var i = n.data("plot");
                i && (i.shutdown(), st.clear()), n.data("plot", gt)
            }

            function x() {
                ot.grid.hoverable && (at.mousemove(U), at.bind("mouseleave", V)), ot.grid.clickable && at.click(Q), a(mt
                    .bindEvents, [at])
            }

            function w() {
                yt && clearTimeout(yt), at.unbind("mousemove", U), at.unbind("mouseleave", V), at.unbind("click", Q), a(
                    mt.shutdown, [at])
            }

            function _(t) {
                function e(t) {
                    return t
                }
                var n, i, o = t.options.transform || e,
                    r = t.options.inverseTransform;
                "x" == t.direction ? (n = t.scale = ft / Math.abs(o(t.max) - o(t.min)), i = Math.min(o(t.max), o(t
                    .min))) : (n = t.scale = pt / Math.abs(o(t.max) - o(t.min)), n = -n, i = Math.max(o(t.max), o(t
                    .min))), o == e ? t.p2c = function (t) {
                    return (t - i) * n
                } : t.p2c = function (t) {
                    return (o(t) - i) * n
                }, r ? t.c2p = function (t) {
                    return r(i + t / n)
                } : t.c2p = function (t) {
                    return i + t / n
                }
            }

            function k(t) {
                for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, o = e.labelHeight || 0, r = i || (
                            "x" == t.direction ? Math.floor(rt.width / (n.length || 1)) : null), s = t.direction +
                        "Axis " + t.direction + t.n + "Axis", a = "flot-" + t.direction + "-axis flot-" + t.direction +
                        t.n + "-axis " + s, l = e.font || "flot-tick-label tickLabel", c = 0; c < n.length; ++c) {
                    var u = n[c];
                    if (u.label) {
                        var h = rt.getTextInfo(a, u.label, l, null, r);
                        i = Math.max(i, h.width), o = Math.max(o, h.height)
                    }
                }
                t.labelWidth = e.labelWidth || i, t.labelHeight = e.labelHeight || o
            }

            function C(e) {
                var n = e.labelWidth,
                    i = e.labelHeight,
                    o = e.options.position,
                    r = "x" === e.direction,
                    s = e.options.tickLength,
                    a = ot.grid.axisMargin,
                    l = ot.grid.labelMargin,
                    c = !0,
                    u = !0,
                    h = !0,
                    d = !1;
                t.each(r ? ut : ht, function (t, n) {
                    n && (n.show || n.reserveSpace) && (n === e ? d = !0 : n.options.position === o && (d ?
                        u = !1 : c = !1), d || (h = !1))
                }), u && (a = 0), null == s && (s = h ? "full" : 5), isNaN(+s) || (l += +s), r ? (i += l,
                    "bottom" == o ? (dt.bottom += i + a, e.box = {
                        top: rt.height - dt.bottom,
                        height: i
                    }) : (e.box = {
                        top: dt.top + a,
                        height: i
                    }, dt.top += i + a)) : (n += l, "left" == o ? (e.box = {
                    left: dt.left + a,
                    width: n
                }, dt.left += n + a) : (dt.right += n + a, e.box = {
                    left: rt.width - dt.right,
                    width: n
                })), e.position = o, e.tickLength = s, e.box.padding = l, e.innermost = c
            }

            function T(t) {
                "x" == t.direction ? (t.box.left = dt.left - t.labelWidth / 2, t.box.width = rt.width - dt.left - dt
                    .right + t.labelWidth) : (t.box.top = dt.top - t.labelHeight / 2, t.box.height = rt.height - dt
                    .bottom - dt.top + t.labelHeight)
            }

            function S() {
                var e, n = ot.grid.minBorderMargin;
                if (null == n)
                    for (n = 0, e = 0; e < it.length; ++e) n = Math.max(n, 2 * (it[e].points.radius + it[e].points
                        .lineWidth / 2));
                var i = {
                    left: n,
                    right: n,
                    top: n,
                    bottom: n
                };
                t.each(f(), function (t, e) {
                    e.reserveSpace && e.ticks && e.ticks.length && ("x" === e.direction ? (i.left = Math.max(i
                        .left, e.labelWidth / 2), i.right = Math.max(i.right, e.labelWidth / 2)) : (i
                        .bottom = Math.max(i.bottom, e.labelHeight / 2), i.top = Math.max(i.top, e
                            .labelHeight / 2)))
                }), dt.left = Math.ceil(Math.max(i.left, dt.left)), dt.right = Math.ceil(Math.max(i.right, dt
                    .right)), dt.top = Math.ceil(Math.max(i.top, dt.top)), dt.bottom = Math.ceil(Math.max(i.bottom,
                    dt.bottom))
            }

            function $() {
                var e, n = f(),
                    i = ot.grid.show;
                for (var o in dt) {
                    var r = ot.grid.margin || 0;
                    dt[o] = "number" == typeof r ? r : r[o] || 0
                }
                a(mt.processOffset, [dt]);
                for (var o in dt) "object" == typeof ot.grid.borderWidth ? dt[o] += i ? ot.grid.borderWidth[o] : 0 : dt[
                    o] += i ? ot.grid.borderWidth : 0;
                if (t.each(n, function (t, e) {
                        var n = e.options;
                        e.show = null == n.show ? e.used : n.show, e.reserveSpace = null == n.reserveSpace ? e
                            .show : n.reserveSpace, E(e)
                    }), i) {
                    var s = t.grep(n, function (t) {
                        return t.show || t.reserveSpace
                    });
                    for (t.each(s, function (t, e) {
                            A(e), N(e), j(e, e.ticks), k(e)
                        }), e = s.length - 1; e >= 0; --e) C(s[e]);
                    S(), t.each(s, function (t, e) {
                        T(e)
                    })
                }
                ft = rt.width - dt.left - dt.right, pt = rt.height - dt.bottom - dt.top, t.each(n, function (t, e) {
                    _(e)
                }), i && L(), B()
            }

            function E(t) {
                var e = t.options,
                    n = +(null != e.min ? e.min : t.datamin),
                    i = +(null != e.max ? e.max : t.datamax),
                    o = i - n;
                if (0 == o) {
                    var r = 0 == i ? 1 : .01;
                    null == e.min && (n -= r), null != e.max && null == e.min || (i += r)
                } else {
                    var s = e.autoscaleMargin;
                    null != s && (null == e.min && (n -= o * s, n < 0 && null != t.datamin && t.datamin >= 0 && (n =
                        0)), null == e.max && (i += o * s, i > 0 && null != t.datamax && t.datamax <= 0 && (i = 0)))
                }
                t.min = n, t.max = i
            }

            function A(e) {
                var n, o = e.options;
                n = "number" == typeof o.ticks && o.ticks > 0 ? o.ticks : .3 * Math.sqrt("x" == e.direction ? rt.width :
                    rt.height);
                var r = (e.max - e.min) / n,
                    s = -Math.floor(Math.log(r) / Math.LN10),
                    a = o.tickDecimals;
                null != a && s > a && (s = a);
                var l, c = Math.pow(10, -s),
                    u = r / c;
                if (u < 1.5 ? l = 1 : u < 3 ? (l = 2, u > 2.25 && (null == a || s + 1 <= a) && (l = 2.5, ++s)) : l = u <
                    7.5 ? 5 : 10, l *= c, null != o.minTickSize && l < o.minTickSize && (l = o.minTickSize), e.delta =
                    r, e.tickDecimals = Math.max(0, null != a ? a : s), e.tickSize = o.tickSize || l, "time" == o
                    .mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                if (e.tickGenerator || (e.tickGenerator = function (t) {
                        var e, n = [],
                            o = i(t.min, t.tickSize),
                            r = 0,
                            s = Number.NaN;
                        do e = s, s = o + r * t.tickSize, n.push(s), ++r; while (s < t.max && s != e);
                        return n
                    }, e.tickFormatter = function (t, e) {
                        var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                            i = "" + Math.round(t * n) / n;
                        if (null != e.tickDecimals) {
                            var o = i.indexOf("."),
                                r = o == -1 ? 0 : i.length - o - 1;
                            if (r < e.tickDecimals) return (r ? i : i + ".") + ("" + n).substr(1, e.tickDecimals -
                                r)
                        }
                        return i
                    }), t.isFunction(o.tickFormatter) && (e.tickFormatter = function (t, e) {
                        return "" + o.tickFormatter(t, e)
                    }), null != o.alignTicksWithAxis) {
                    var h = ("x" == e.direction ? ut : ht)[o.alignTicksWithAxis - 1];
                    if (h && h.used && h != e) {
                        var d = e.tickGenerator(e);
                        if (d.length > 0 && (null == o.min && (e.min = Math.min(e.min, d[0])), null == o.max && d
                                .length > 1 && (e.max = Math.max(e.max, d[d.length - 1]))), e.tickGenerator = function (
                                t) {
                                var e, n, i = [];
                                for (n = 0; n < h.ticks.length; ++n) e = (h.ticks[n].v - h.min) / (h.max - h.min), e = t
                                    .min + e * (t.max - t.min), i.push(e);
                                return i
                            }, !e.mode && null == o.tickDecimals) {
                            var f = Math.max(0, -Math.floor(Math.log(e.delta) / Math.LN10) + 1),
                                p = e.tickGenerator(e);
                            p.length > 1 && /\..*0$/.test((p[1] - p[0]).toFixed(f)) || (e.tickDecimals = f)
                        }
                    }
                }
            }

            function N(e) {
                var n = e.options.ticks,
                    i = [];
                null == n || "number" == typeof n && n > 0 ? i = e.tickGenerator(e) : n && (i = t.isFunction(n) ? n(e) :
                    n);
                var o, r;
                for (e.ticks = [], o = 0; o < i.length; ++o) {
                    var s = null,
                        a = i[o];
                    "object" == typeof a ? (r = +a[0], a.length > 1 && (s = a[1])) : r = +a, null == s && (s = e
                        .tickFormatter(r, e)), isNaN(r) || e.ticks.push({
                        v: r,
                        label: s
                    })
                }
            }

            function j(t, e) {
                t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0]
                    .v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
            }

            function O() {
                rt.clear(), a(mt.drawBackground, [lt]);
                var t = ot.grid;
                t.show && t.backgroundColor && I(), t.show && !t.aboveData && P();
                for (var e = 0; e < it.length; ++e) a(mt.drawSeries, [lt, it[e]]), M(it[e]);
                a(mt.draw, [lt]), t.show && t.aboveData && P(), rt.render(), X()
            }

            function D(t, e) {
                for (var n, i, o, r, s = f(), a = 0; a < s.length; ++a)
                    if (n = s[a], n.direction == e && (r = e + n.n + "axis", t[r] || 1 != n.n || (r = e + "axis"), t[
                        r])) {
                        i = t[r].from, o = t[r].to;
                        break
                    } if (t[r] || (n = "x" == e ? ut[0] : ht[0], i = t[e + "1"], o = t[e + "2"]), null != i && null !=
                    o && i > o) {
                    var l = i;
                    i = o, o = l
                }
                return {
                    from: i,
                    to: o,
                    axis: n
                }
            }

            function I() {
                lt.save(), lt.translate(dt.left, dt.top), lt.fillStyle = nt(ot.grid.backgroundColor, pt, 0,
                    "rgba(255, 255, 255, 0)"), lt.fillRect(0, 0, ft, pt), lt.restore()
            }

            function P() {
                var e, n, i, o;
                lt.save(), lt.translate(dt.left, dt.top);
                var r = ot.grid.markings;
                if (r)
                    for (t.isFunction(r) && (n = gt.getAxes(), n.xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n
                            .yaxis.min, n.ymax = n.yaxis.max, r = r(n)), e = 0; e < r.length; ++e) {
                        var s = r[e],
                            a = D(s, "x"),
                            l = D(s, "y");
                        if (null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), null == l
                            .from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), !(a.to < a.axis.min ||
                                a.from > a.axis.max || l.to < l.axis.min || l.from > l.axis.max)) {
                            a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), l.from = Math.max(
                                l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max);
                            var c = a.from === a.to,
                                u = l.from === l.to;
                            if (!c || !u)
                                if (a.from = Math.floor(a.axis.p2c(a.from)), a.to = Math.floor(a.axis.p2c(a.to)), l
                                    .from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), c || u
                                    ) {
                                    var h = s.lineWidth || ot.grid.markingsLineWidth,
                                        d = h % 2 ? .5 : 0;
                                    lt.beginPath(), lt.strokeStyle = s.color || ot.grid.markingsColor, lt.lineWidth = h,
                                        c ? (lt.moveTo(a.to + d, l.from), lt.lineTo(a.to + d, l.to)) : (lt.moveTo(a
                                            .from, l.to + d), lt.lineTo(a.to, l.to + d)), lt.stroke()
                                } else lt.fillStyle = s.color || ot.grid.markingsColor, lt.fillRect(a.from, l.to, a.to -
                                    a.from, l.from - l.to)
                        }
                    }
                n = f(), i = ot.grid.borderWidth;
                for (var p = 0; p < n.length; ++p) {
                    var m, g, v, y, b = n[p],
                        x = b.box,
                        w = b.tickLength;
                    if (b.show && 0 != b.ticks.length) {
                        for (lt.lineWidth = 1, "x" == b.direction ? (m = 0, g = "full" == w ? "top" == b.position ? 0 :
                                pt : x.top - dt.top + ("top" == b.position ? x.height : 0)) : (g = 0, m = "full" == w ?
                                "left" == b.position ? 0 : ft : x.left - dt.left + ("left" == b.position ? x.width : 0)
                                ), b.innermost || (lt.strokeStyle = b.options.color, lt.beginPath(), v = y = 0, "x" == b
                                .direction ? v = ft + 1 : y = pt + 1, 1 == lt.lineWidth && ("x" == b.direction ? g =
                                    Math.floor(g) + .5 : m = Math.floor(m) + .5),
                                lt.moveTo(m, g), lt.lineTo(m + v, g + y), lt.stroke()), lt.strokeStyle = b.options
                            .tickColor, lt.beginPath(), e = 0; e < b.ticks.length; ++e) {
                            var _ = b.ticks[e].v;
                            v = y = 0, isNaN(_) || _ < b.min || _ > b.max || "full" == w && ("object" == typeof i && i[b
                                .position] > 0 || i > 0) && (_ == b.min || _ == b.max) || ("x" == b.direction ? (m =
                                    b.p2c(_), y = "full" == w ? -pt : w, "top" == b.position && (y = -y)) : (g = b
                                    .p2c(_), v = "full" == w ? -ft : w, "left" == b.position && (v = -v)), 1 == lt
                                .lineWidth && ("x" == b.direction ? m = Math.floor(m) + .5 : g = Math.floor(g) +
                                .5), lt.moveTo(m, g), lt.lineTo(m + v, g + y))
                        }
                        lt.stroke()
                    }
                }
                i && (o = ot.grid.borderColor, "object" == typeof i || "object" == typeof o ? ("object" != typeof i && (
                        i = {
                            top: i,
                            right: i,
                            bottom: i,
                            left: i
                        }), "object" != typeof o && (o = {
                        top: o,
                        right: o,
                        bottom: o,
                        left: o
                    }), i.top > 0 && (lt.strokeStyle = o.top, lt.lineWidth = i.top, lt.beginPath(), lt.moveTo(
                        0 - i.left, 0 - i.top / 2), lt.lineTo(ft, 0 - i.top / 2), lt.stroke()), i.right > 0 && (
                        lt.strokeStyle = o.right, lt.lineWidth = i.right, lt.beginPath(), lt.moveTo(ft + i
                            .right / 2, 0 - i.top), lt.lineTo(ft + i.right / 2, pt), lt.stroke()), i.bottom >
                    0 && (lt.strokeStyle = o.bottom, lt.lineWidth = i.bottom, lt.beginPath(), lt.moveTo(ft + i
                        .right, pt + i.bottom / 2), lt.lineTo(0, pt + i.bottom / 2), lt.stroke()), i.left > 0 &&
                    (lt.strokeStyle = o.left, lt.lineWidth = i.left, lt.beginPath(), lt.moveTo(0 - i.left / 2,
                        pt + i.bottom), lt.lineTo(0 - i.left / 2, 0), lt.stroke())) : (lt.lineWidth = i, lt
                    .strokeStyle = ot.grid.borderColor, lt.strokeRect(-i / 2, -i / 2, ft + i, pt + i))), lt
                .restore()
            }

            function L() {
                t.each(f(), function (t, e) {
                    var n, i, o, r, s, a = e.box,
                        l = e.direction + "Axis " + e.direction + e.n + "Axis",
                        c = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                        u = e.options.font || "flot-tick-label tickLabel";
                    if (rt.removeText(c), e.show && 0 != e.ticks.length)
                        for (var h = 0; h < e.ticks.length; ++h) n = e.ticks[h], !n.label || n.v < e.min || n
                            .v > e.max || ("x" == e.direction ? (r = "center", i = dt.left + e.p2c(n.v),
                                "bottom" == e.position ? o = a.top + a.padding : (o = a.top + a.height - a
                                    .padding, s = "bottom")) : (s = "middle", o = dt.top + e.p2c(n.v),
                                "left" == e.position ? (i = a.left + a.width - a.padding, r = "right") : i =
                                a.left + a.padding), rt.addText(c, i, o, n.label, u, null, null, r, s))
                })
            }

            function M(t) {
                t.lines.show && R(t), t.bars.show && H(t), t.points.show && W(t)
            }

            function R(t) {
                function e(t, e, n, i, o) {
                    var r = t.points,
                        s = t.pointsize,
                        a = null,
                        l = null;
                    lt.beginPath();
                    for (var c = s; c < r.length; c += s) {
                        var u = r[c - s],
                            h = r[c - s + 1],
                            d = r[c],
                            f = r[c + 1];
                        if (null != u && null != d) {
                            if (h <= f && h < o.min) {
                                if (f < o.min) continue;
                                u = (o.min - h) / (f - h) * (d - u) + u, h = o.min
                            } else if (f <= h && f < o.min) {
                                if (h < o.min) continue;
                                d = (o.min - h) / (f - h) * (d - u) + u, f = o.min
                            }
                            if (h >= f && h > o.max) {
                                if (f > o.max) continue;
                                u = (o.max - h) / (f - h) * (d - u) + u, h = o.max
                            } else if (f >= h && f > o.max) {
                                if (h > o.max) continue;
                                d = (o.max - h) / (f - h) * (d - u) + u, f = o.max
                            }
                            if (u <= d && u < i.min) {
                                if (d < i.min) continue;
                                h = (i.min - u) / (d - u) * (f - h) + h, u = i.min
                            } else if (d <= u && d < i.min) {
                                if (u < i.min) continue;
                                f = (i.min - u) / (d - u) * (f - h) + h, d = i.min
                            }
                            if (u >= d && u > i.max) {
                                if (d > i.max) continue;
                                h = (i.max - u) / (d - u) * (f - h) + h, u = i.max
                            } else if (d >= u && d > i.max) {
                                if (u > i.max) continue;
                                f = (i.max - u) / (d - u) * (f - h) + h, d = i.max
                            }
                            u == a && h == l || lt.moveTo(i.p2c(u) + e, o.p2c(h) + n), a = d, l = f, lt.lineTo(i.p2c(
                                d) + e, o.p2c(f) + n)
                        }
                    }
                    lt.stroke()
                }

                function n(t, e, n) {
                    for (var i = t.points, o = t.pointsize, r = Math.min(Math.max(0, n.min), n.max), s = 0, a = !1, l =
                            1, c = 0, u = 0;;) {
                        if (o > 0 && s > i.length + o) break;
                        s += o;
                        var h = i[s - o],
                            d = i[s - o + l],
                            f = i[s],
                            p = i[s + l];
                        if (a) {
                            if (o > 0 && null != h && null == f) {
                                u = s, o = -o, l = 2;
                                continue
                            }
                            if (o < 0 && s == c + o) {
                                lt.fill(), a = !1, o = -o, l = 1, s = c = u + o;
                                continue
                            }
                        }
                        if (null != h && null != f) {
                            if (h <= f && h < e.min) {
                                if (f < e.min) continue;
                                d = (e.min - h) / (f - h) * (p - d) + d, h = e.min
                            } else if (f <= h && f < e.min) {
                                if (h < e.min) continue;
                                p = (e.min - h) / (f - h) * (p - d) + d, f = e.min
                            }
                            if (h >= f && h > e.max) {
                                if (f > e.max) continue;
                                d = (e.max - h) / (f - h) * (p - d) + d, h = e.max
                            } else if (f >= h && f > e.max) {
                                if (h > e.max) continue;
                                p = (e.max - h) / (f - h) * (p - d) + d, f = e.max
                            }
                            if (a || (lt.beginPath(), lt.moveTo(e.p2c(h), n.p2c(r)), a = !0), d >= n.max && p >= n.max)
                                lt.lineTo(e.p2c(h), n.p2c(n.max)), lt.lineTo(e.p2c(f), n.p2c(n.max));
                            else if (d <= n.min && p <= n.min) lt.lineTo(e.p2c(h), n.p2c(n.min)), lt.lineTo(e.p2c(f), n
                                .p2c(n.min));
                            else {
                                var m = h,
                                    g = f;
                                d <= p && d < n.min && p >= n.min ? (h = (n.min - d) / (p - d) * (f - h) + h, d = n
                                    .min) : p <= d && p < n.min && d >= n.min && (f = (n.min - d) / (p - d) * (f - h) +
                                        h, p = n.min), d >= p && d > n.max && p <= n.max ? (h = (n.max - d) / (p - d) *
                                        (f - h) + h, d = n.max) : p >= d && p > n.max && d <= n.max && (f = (n.max -
                                        d) / (p - d) * (f - h) + h, p = n.max), h != m && lt.lineTo(e.p2c(m), n.p2c(d)),
                                    lt.lineTo(e.p2c(h), n.p2c(d)), lt.lineTo(e.p2c(f), n.p2c(p)), f != g && (lt.lineTo(e
                                        .p2c(f), n.p2c(p)), lt.lineTo(e.p2c(g), n.p2c(p)))
                            }
                        }
                    }
                }
                lt.save(), lt.translate(dt.left, dt.top), lt.lineJoin = "round";
                var i = t.lines.lineWidth,
                    o = t.shadowSize;
                if (i > 0 && o > 0) {
                    lt.lineWidth = o, lt.strokeStyle = "rgba(0,0,0,0.1)";
                    var r = Math.PI / 18;
                    e(t.datapoints, Math.sin(r) * (i / 2 + o / 2), Math.cos(r) * (i / 2 + o / 2), t.xaxis, t.yaxis), lt
                        .lineWidth = o / 2, e(t.datapoints, Math.sin(r) * (i / 2 + o / 4), Math.cos(r) * (i / 2 + o /
                            4), t.xaxis, t.yaxis)
                }
                lt.lineWidth = i, lt.strokeStyle = t.color;
                var s = q(t.lines, t.color, 0, pt);
                s && (lt.fillStyle = s, n(t.datapoints, t.xaxis, t.yaxis)), i > 0 && e(t.datapoints, 0, 0, t.xaxis, t
                    .yaxis), lt.restore()
            }

            function W(t) {
                function e(t, e, n, i, o, r, s, a) {
                    for (var l = t.points, c = t.pointsize, u = 0; u < l.length; u += c) {
                        var h = l[u],
                            d = l[u + 1];
                        null == h || h < r.min || h > r.max || d < s.min || d > s.max || (lt.beginPath(), h = r.p2c(h),
                            d = s.p2c(d) + i, "circle" == a ? lt.arc(h, d, e, 0, o ? Math.PI : 2 * Math.PI, !1) : a(
                                lt, h, d, e, o), lt.closePath(), n && (lt.fillStyle = n, lt.fill()), lt.stroke())
                    }
                }
                lt.save(), lt.translate(dt.left, dt.top);
                var n = t.points.lineWidth,
                    i = t.shadowSize,
                    o = t.points.radius,
                    r = t.points.symbol;
                if (0 == n && (n = 1e-4), n > 0 && i > 0) {
                    var s = i / 2;
                    lt.lineWidth = s, lt.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, o, null, s + s / 2, !0, t
                        .xaxis, t.yaxis, r), lt.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, o, null, s / 2, !0,
                        t.xaxis, t.yaxis, r)
                }
                lt.lineWidth = n, lt.strokeStyle = t.color, e(t.datapoints, o, q(t.points, t.color), 0, !1, t.xaxis, t
                    .yaxis, r), lt.restore()
            }

            function F(t, e, n, i, o, r, s, a, l, c, u) {
                var h, d, f, p, m, g, v, y, b;
                c ? (y = g = v = !0, m = !1, h = n, d = t, p = e + i, f = e + o, d < h && (b = d, d = h, h = b, m = !0,
                    g = !1)) : (m = g = v = !0, y = !1, h = t + i, d = t + o, f = n, p = e, p < f && (b = p, p = f,
                    f = b, y = !0, v = !1)), d < s.min || h > s.max || p < a.min || f > a.max || (h < s.min && (h =
                        s.min, m = !1), d > s.max && (d = s.max, g = !1), f < a.min && (f = a.min, y = !1), p > a
                    .max && (p = a.max, v = !1), h = s.p2c(h), f = a.p2c(f), d = s.p2c(d), p = a.p2c(p), r && (l
                        .fillStyle = r(f, p), l.fillRect(h, p, d - h, f - p)), u > 0 && (m || g || v || y) && (l
                        .beginPath(), l.moveTo(h, f), m ? l.lineTo(h, p) : l.moveTo(h, p), v ? l.lineTo(d, p) : l
                        .moveTo(d, p), g ? l.lineTo(d, f) : l.moveTo(d, f), y ? l.lineTo(h, f) : l.moveTo(h, f), l
                        .stroke()))
            }

            function H(t) {
                function e(e, n, i, o, r, s) {
                    for (var a = e.points, l = e.pointsize, c = 0; c < a.length; c += l) null != a[c] && F(a[c], a[c +
                        1], a[c + 2], n, i, o, r, s, lt, t.bars.horizontal, t.bars.lineWidth)
                }
                lt.save(), lt.translate(dt.left, dt.top), lt.lineWidth = t.bars.lineWidth, lt.strokeStyle = t.color;
                var n;
                switch (t.bars.align) {
                    case "left":
                        n = 0;
                        break;
                    case "right":
                        n = -t.bars.barWidth;
                        break;
                    default:
                        n = -t.bars.barWidth / 2
                }
                var i = t.bars.fill ? function (e, n) {
                    return q(t.bars, t.color, e, n)
                } : null;
                e(t.datapoints, n, n + t.bars.barWidth, i, t.xaxis, t.yaxis), lt.restore()
            }

            function q(e, n, i, o) {
                var r = e.fill;
                if (!r) return null;
                if (e.fillColor) return nt(e.fillColor, i, o, n);
                var s = t.color.parse(n);
                return s.a = "number" == typeof r ? r : .4, s.normalize(), s.toString()
            }

            function B() {
                if (null != ot.legend.container ? t(ot.legend.container).html("") : n.find(".legend").remove(), ot
                    .legend.show) {
                    for (var e, i, o = [], r = [], s = !1, a = ot.legend.labelFormatter, l = 0; l < it.length; ++l) e =
                        it[l], e.label && (i = a ? a(e.label, e) : e.label, i && r.push({
                            label: i,
                            color: e.color
                        }));
                    if (ot.legend.sorted)
                        if (t.isFunction(ot.legend.sorted)) r.sort(ot.legend.sorted);
                        else if ("reverse" == ot.legend.sorted) r.reverse();
                    else {
                        var c = "descending" != ot.legend.sorted;
                        r.sort(function (t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != c ? 1 : -1
                        })
                    }
                    for (var l = 0; l < r.length; ++l) {
                        var u = r[l];
                        l % ot.legend.noColumns == 0 && (s && o.push("</tr>"), o.push("<tr>"), s = !0), o.push(
                            '<td class="legendColorBox"><div style="border:1px solid ' + ot.legend
                            .labelBoxBorderColor +
                            ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + u.color +
                            ';overflow:hidden"></div></div></td><td class="legendLabel">' + u.label + "</td>")
                    }
                    if (s && o.push("</tr>"), 0 != o.length) {
                        var h = '<table style="font-size:smaller;color:' + ot.grid.color + '">' + o.join("") +
                            "</table>";
                        if (null != ot.legend.container) t(ot.legend.container).html(h);
                        else {
                            var d = "",
                                f = ot.legend.position,
                                p = ot.legend.margin;
                            null == p[0] && (p = [p, p]), "n" == f.charAt(0) ? d += "top:" + (p[1] + dt.top) + "px;" :
                                "s" == f.charAt(0) && (d += "bottom:" + (p[1] + dt.bottom) + "px;"), "e" == f.charAt(
                                1) ? d += "right:" + (p[0] + dt.right) + "px;" : "w" == f.charAt(1) && (d += "left:" + (
                                    p[0] + dt.left) + "px;");
                            var m = t('<div class="legend">' + h.replace('style="', 'style="position:absolute;' + d +
                                ";") + "</div>").appendTo(n);
                            if (0 != ot.legend.backgroundOpacity) {
                                var g = ot.legend.backgroundColor;
                                null == g && (g = ot.grid.backgroundColor, g = g && "string" == typeof g ? t.color
                                    .parse(g) : t.color.extract(m, "background-color"), g.a = 1, g = g.toString());
                                var v = m.children();
                                t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() +
                                    "px;" + d + "background-color:" + g + ';"> </div>').prependTo(m).css("opacity",
                                    ot.legend.backgroundOpacity)
                            }
                        }
                    }
                }
            }

            function z(t, e, n) {
                var i, o, r, s = ot.grid.mouseActiveRadius,
                    a = s * s + 1,
                    l = null;
                for (i = it.length - 1; i >= 0; --i)
                    if (n(it[i])) {
                        var c = it[i],
                            u = c.xaxis,
                            h = c.yaxis,
                            d = c.datapoints.points,
                            f = u.c2p(t),
                            p = h.c2p(e),
                            m = s / u.scale,
                            g = s / h.scale;
                        if (r = c.datapoints.pointsize, u.options.inverseTransform && (m = Number.MAX_VALUE), h.options
                            .inverseTransform && (g = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (o = 0; o < d.length; o += r) {
                                var v = d[o],
                                    y = d[o + 1];
                                if (null != v && !(v - f > m || v - f < -m || y - p > g || y - p < -g)) {
                                    var b = Math.abs(u.p2c(v) - t),
                                        x = Math.abs(h.p2c(y) - e),
                                        w = b * b + x * x;
                                    w < a && (a = w, l = [i, o / r])
                                }
                            }
                        if (c.bars.show && !l) {
                            var _, k;
                            switch (c.bars.align) {
                                case "left":
                                    _ = 0;
                                    break;
                                case "right":
                                    _ = -c.bars.barWidth;
                                    break;
                                default:
                                    _ = -c.bars.barWidth / 2
                            }
                            for (k = _ + c.bars.barWidth, o = 0; o < d.length; o += r) {
                                var v = d[o],
                                    y = d[o + 1],
                                    C = d[o + 2];
                                null != v && (it[i].bars.horizontal ? f <= Math.max(C, v) && f >= Math.min(C, v) && p >=
                                    y + _ && p <= y + k : f >= v + _ && f <= v + k && p >= Math.min(C, y) && p <=
                                    Math.max(C, y)) && (l = [i, o / r])
                            }
                        }
                    } return l ? (i = l[0], o = l[1], r = it[i].datapoints.pointsize, {
                    datapoint: it[i].datapoints.points.slice(o * r, (o + 1) * r),
                    dataIndex: o,
                    series: it[i],
                    seriesIndex: i
                }) : null
            }

            function U(t) {
                ot.grid.hoverable && G("plothover", t, function (t) {
                    return 0 != t.hoverable
                })
            }

            function V(t) {
                ot.grid.hoverable && G("plothover", t, function (t) {
                    return !1
                })
            }

            function Q(t) {
                G("plotclick", t, function (t) {
                    return 0 != t.clickable
                })
            }

            function G(t, e, i) {
                var o = at.offset(),
                    r = e.pageX - o.left - dt.left,
                    s = e.pageY - o.top - dt.top,
                    a = p({
                        left: r,
                        top: s
                    });
                a.pageX = e.pageX, a.pageY = e.pageY;
                var l = z(r, s, i);
                if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + o.left + dt.left, 10), l.pageY =
                        parseInt(l.series.yaxis.p2c(l.datapoint[1]) + o.top + dt.top, 10)), ot.grid.autoHighlight) {
                    for (var c = 0; c < vt.length; ++c) {
                        var u = vt[c];
                        u.auto != t || l && u.series == l.series && u.point[0] == l.datapoint[0] && u.point[1] == l
                            .datapoint[1] || K(u.series, u.point)
                    }
                    l && Y(l.series, l.datapoint, t)
                }
                n.trigger(t, [a, l])
            }

            function X() {
                var t = ot.interaction.redrawOverlayInterval;
                return t == -1 ? void J() : void(yt || (yt = setTimeout(J, t)))
            }

            function J() {
                yt = null, ct.save(), st.clear(), ct.translate(dt.left, dt.top);
                var t, e;
                for (t = 0; t < vt.length; ++t) e = vt[t], e.series.bars.show ? et(e.series, e.point) : tt(e.series, e
                    .point);
                ct.restore(), a(mt.drawOverlay, [ct])
            }

            function Y(t, e, n) {
                if ("number" == typeof t && (t = it[t]), "number" == typeof e) {
                    var i = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(i * e, i * (e + 1))
                }
                var o = Z(t, e);
                o == -1 ? (vt.push({
                    series: t,
                    point: e,
                    auto: n
                }), X()) : n || (vt[o].auto = !1)
            }

            function K(t, e) {
                if (null == t && null == e) return vt = [], void X();
                if ("number" == typeof t && (t = it[t]), "number" == typeof e) {
                    var n = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(n * e, n * (e + 1))
                }
                var i = Z(t, e);
                i != -1 && (vt.splice(i, 1), X())
            }

            function Z(t, e) {
                for (var n = 0; n < vt.length; ++n) {
                    var i = vt[n];
                    if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1]) return n
                }
                return -1
            }

            function tt(e, n) {
                var i = n[0],
                    o = n[1],
                    r = e.xaxis,
                    s = e.yaxis,
                    a = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5)
                    .toString();
                if (!(i < r.min || i > r.max || o < s.min || o > s.max)) {
                    var l = e.points.radius + e.points.lineWidth / 2;
                    ct.lineWidth = l, ct.strokeStyle = a;
                    var c = 1.5 * l;
                    i = r.p2c(i), o = s.p2c(o), ct.beginPath(), "circle" == e.points.symbol ? ct.arc(i, o, c, 0, 2 *
                        Math.PI, !1) : e.points.symbol(ct, i, o, c, !1), ct.closePath(), ct.stroke()
                }
            }

            function et(e, n) {
                var i, o = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a",
                        .5).toString(),
                    r = o;
                switch (e.bars.align) {
                    case "left":
                        i = 0;
                        break;
                    case "right":
                        i = -e.bars.barWidth;
                        break;
                    default:
                        i = -e.bars.barWidth / 2
                }
                ct.lineWidth = e.bars.lineWidth, ct.strokeStyle = o, F(n[0], n[1], n[2] || 0, i, i + e.bars.barWidth,
                    function () {
                        return r
                    }, e.xaxis, e.yaxis, ct, e.bars.horizontal, e.bars.lineWidth)
            }

            function nt(e, n, i, o) {
                if ("string" == typeof e) return e;
                for (var r = lt.createLinearGradient(0, i, 0, n), s = 0, a = e.colors.length; s < a; ++s) {
                    var l = e.colors[s];
                    if ("string" != typeof l) {
                        var c = t.color.parse(o);
                        null != l.brightness && (c = c.scale("rgb", l.brightness)), null != l.opacity && (c.a *= l
                            .opacity), l = c.toString()
                    }
                    r.addColorStop(s / (a - 1), l)
                }
                return r
            }
            var it = [],
                ot = {
                    colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                    legend: {
                        show: !0,
                        noColumns: 1,
                        labelFormatter: null,
                        labelBoxBorderColor: "#ccc",
                        container: null,
                        position: "ne",
                        margin: 5,
                        backgroundColor: null,
                        backgroundOpacity: .85,
                        sorted: null
                    },
                    xaxis: {
                        show: null,
                        position: "bottom",
                        mode: null,
                        font: null,
                        color: null,
                        tickColor: null,
                        transform: null,
                        inverseTransform: null,
                        min: null,
                        max: null,
                        autoscaleMargin: null,
                        ticks: null,
                        tickFormatter: null,
                        labelWidth: null,
                        labelHeight: null,
                        reserveSpace: null,
                        tickLength: null,
                        alignTicksWithAxis: null,
                        tickDecimals: null,
                        tickSize: null,
                        minTickSize: null
                    },
                    yaxis: {
                        autoscaleMargin: .02,
                        position: "left"
                    },
                    xaxes: [],
                    yaxes: [],
                    series: {
                        points: {
                            show: !1,
                            radius: 3,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: "#ffffff",
                            symbol: "circle"
                        },
                        lines: {
                            lineWidth: 2,
                            fill: !1,
                            fillColor: null,
                            steps: !1
                        },
                        bars: {
                            show: !1,
                            lineWidth: 2,
                            barWidth: 1,
                            fill: !0,
                            fillColor: null,
                            align: "left",
                            horizontal: !1,
                            zero: !0
                        },
                        shadowSize: 3,
                        highlightColor: null
                    },
                    grid: {
                        show: !0,
                        aboveData: !1,
                        color: "#545454",
                        backgroundColor: null,
                        borderColor: null,
                        tickColor: null,
                        margin: 0,
                        labelMargin: 5,
                        axisMargin: 8,
                        borderWidth: 2,
                        minBorderMargin: null,
                        markings: null,
                        markingsColor: "#f4f4f4",
                        markingsLineWidth: 2,
                        clickable: !1,
                        hoverable: !1,
                        autoHighlight: !0,
                        mouseActiveRadius: 10
                    },
                    interaction: {
                        redrawOverlayInterval: 1e3 / 60
                    },
                    hooks: {}
                },
                rt = null,
                st = null,
                at = null,
                lt = null,
                ct = null,
                ut = [],
                ht = [],
                dt = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                ft = 0,
                pt = 0,
                mt = {
                    processOptions: [],
                    processRawData: [],
                    processDatapoints: [],
                    processOffset: [],
                    drawBackground: [],
                    drawSeries: [],
                    draw: [],
                    bindEvents: [],
                    drawOverlay: [],
                    shutdown: []
                },
                gt = this;
            gt.setData = u, gt.setupGrid = $, gt.draw = O, gt.getPlaceholder = function () {
                return n
            }, gt.getCanvas = function () {
                return rt.element
            }, gt.getPlotOffset = function () {
                return dt
            }, gt.width = function () {
                return ft
            }, gt.height = function () {
                return pt
            }, gt.offset = function () {
                var t = at.offset();
                return t.left += dt.left, t.top += dt.top, t
            }, gt.getData = function () {
                return it
            }, gt.getAxes = function () {
                var e = {};
                return t.each(ut.concat(ht), function (t, n) {
                    n && (e[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
                }), e
            }, gt.getXAxes = function () {
                return ut
            }, gt.getYAxes = function () {
                return ht
            }, gt.c2p = p, gt.p2c = m, gt.getOptions = function () {
                return ot
            }, gt.highlight = Y, gt.unhighlight = K, gt.triggerRedrawOverlay = X, gt.pointOffset = function (t) {
                return {
                    left: parseInt(ut[d(t, "x") - 1].p2c(+t.x) + dt.left, 10),
                    top: parseInt(ht[d(t, "y") - 1].p2c(+t.y) + dt.top, 10)
                }
            }, gt.shutdown = w, gt.destroy = function () {
                w(), n.removeData("plot").empty(), it = [], ot = null, rt = null, st = null, at = null, lt = null,
                    ct = null, ut = [], ht = [], mt = null, vt = [], gt = null
            }, gt.resize = function () {
                var t = n.width(),
                    e = n.height();
                rt.resize(t, e), st.resize(t, e)
            }, gt.hooks = mt, l(gt), c(r), b(), u(o), $(), O(), x();
            var vt = [],
                yt = null
        }

        function i(t, e) {
            return e * Math.floor(t / e)
        }
        var o = Object.prototype.hasOwnProperty;
        t.fn.detach || (t.fn.detach = function () {
            return this.each(function () {
                this.parentNode && this.parentNode.removeChild(this)
            })
        }), e.prototype.resize = function (t, e) {
            if (t <= 0 || e <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
            var n = this.element,
                i = this.context,
                o = this.pixelRatio;
            this.width != t && (n.width = t * o, n.style.width = t + "px", this.width = t), this.height != e && (n
                .height = e * o, n.style.height = e + "px", this.height = e), i.restore(), i.save(), i.scale(o,
                o)
        }, e.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height)
        }, e.prototype.render = function () {
            var t = this._textCache;
            for (var e in t)
                if (o.call(t, e)) {
                    var n = this.getTextLayer(e),
                        i = t[e];
                    n.hide();
                    for (var r in i)
                        if (o.call(i, r)) {
                            var s = i[r];
                            for (var a in s)
                                if (o.call(s, a)) {
                                    for (var l, c = s[a].positions, u = 0; l = c[u]; u++) l.active ? l.rendered || (
                                        n.append(l.element), l.rendered = !0) : (c.splice(u--, 1), l.rendered &&
                                        l.element.detach());
                                    0 == c.length && delete s[a]
                                }
                        } n.show()
                }
        }, e.prototype.getTextLayer = function (e) {
            var n = this.text[e];
            return null == n && (null == this.textContainer && (this.textContainer = t(
                "<div class='flot-text'></div>").css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "font-size": "smaller",
                color: "#545454"
            }).insertAfter(this.element)), n = this.text[e] = t("<div></div>").addClass(e).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)), n
        }, e.prototype.getTextInfo = function (e, n, i, o, r) {
            var s, a, l, c;
            if (n = "" + n, s = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size +
                "px/" + i.lineHeight + "px " + i.family : i, a = this._textCache[e], null == a && (a = this
                    ._textCache[e] = {}), l = a[s], null == l && (l = a[s] = {}), c = l[n], null == c) {
                var u = t("<div></div>").html(n).css({
                    position: "absolute",
                    "max-width": r,
                    top: -9999
                }).appendTo(this.getTextLayer(e));
                "object" == typeof i ? u.css({
                    font: s,
                    color: i.color
                }) : "string" == typeof i && u.addClass(i), c = l[n] = {
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    element: u,
                    positions: []
                }, u.detach()
            }
            return c
        }, e.prototype.addText = function (t, e, n, i, o, r, s, a, l) {
            var c = this.getTextInfo(t, i, o, r, s),
                u = c.positions;
            "center" == a ? e -= c.width / 2 : "right" == a && (e -= c.width), "middle" == l ? n -= c.height / 2 :
                "bottom" == l && (n -= c.height);
            for (var h, d = 0; h = u[d]; d++)
                if (h.x == e && h.y == n) return void(h.active = !0);
            h = {
                active: !0,
                rendered: !1,
                element: u.length ? c.element.clone() : c.element,
                x: e,
                y: n
            }, u.push(h), h.element.css({
                top: Math.round(n),
                left: Math.round(e),
                "text-align": a
            })
        }, e.prototype.removeText = function (t, e, n, i, r, s) {
            if (null == i) {
                var a = this._textCache[t];
                if (null != a)
                    for (var l in a)
                        if (o.call(a, l)) {
                            var c = a[l];
                            for (var u in c)
                                if (o.call(c, u))
                                    for (var h, d = c[u].positions, f = 0; h = d[f]; f++) h.active = !1
                        }
            } else
                for (var h, d = this.getTextInfo(t, i, r, s).positions, f = 0; h = d[f]; f++) h.x == e && h.y ==
                    n && (h.active = !1)
        }, t.plot = function (e, i, o) {
            var r = new n(t(e), i, o, t.plot.plugins);
            return r
        }, t.plot.version = "0.8.3", t.plot.plugins = [], t.fn.plot = function (e, n) {
            return this.each(function () {
                t.plot(this, e, n)
            })
        }
    }(jQuery),
    function (t) {
        function e(e) {
            function o(e, n, i) {
                k || (k = !0, v = e.getCanvas(), y = t(v).parent(), b = e.getOptions(), e.setData(r(e.getData())))
            }

            function r(e) {
                for (var n = 0, i = 0, o = 0, r = b.series.pie.combine.color, s = [], a = 0; a < e.length; ++a) {
                    var l = e[a].data;
                    t.isArray(l) && 1 == l.length && (l = l[0]), t.isArray(l) ? !isNaN(parseFloat(l[1])) && isFinite(l[
                            1]) ? l[1] = +l[1] : l[1] = 0 : l = !isNaN(parseFloat(l)) && isFinite(l) ? [1, +l] : [1, 0],
                        e[a].data = [l]
                }
                for (var a = 0; a < e.length; ++a) n += e[a].data[0][1];
                for (var a = 0; a < e.length; ++a) {
                    var l = e[a].data[0][1];
                    l / n <= b.series.pie.combine.threshold && (i += l, o++, r || (r = e[a].color))
                }
                for (var a = 0; a < e.length; ++a) {
                    var l = e[a].data[0][1];
                    (o < 2 || l / n > b.series.pie.combine.threshold) && s.push(t.extend(e[a], {
                        data: [
                            [1, l]
                        ],
                        color: e[a].color,
                        label: e[a].label,
                        angle: l * Math.PI * 2 / n,
                        percent: l / (n / 100)
                    }))
                }
                return o > 1 && s.push({
                    data: [
                        [1, i]
                    ],
                    color: r,
                    label: b.series.pie.combine.label,
                    angle: i * Math.PI * 2 / n,
                    percent: i / (n / 100)
                }), s
            }

            function s(e, o) {
                function r() {
                    C.clearRect(0, 0, c, u), y.children().filter(".pieLabel, .pieLabelBackground").remove()
                }

                function s() {
                    var t = b.series.pie.shadow.left,
                        e = b.series.pie.shadow.top,
                        n = 10,
                        i = b.series.pie.shadow.alpha,
                        o = b.series.pie.radius > 1 ? b.series.pie.radius : x * b.series.pie.radius;
                    if (!(o >= c / 2 - t || o * b.series.pie.tilt >= u / 2 - e || o <= n)) {
                        C.save(), C.translate(t, e), C.globalAlpha = i, C.fillStyle = "#000", C.translate(w, _), C
                            .scale(1, b.series.pie.tilt);
                        for (var r = 1; r <= n; r++) C.beginPath(), C.arc(0, 0, o, 0, 2 * Math.PI, !1), C.fill(), o -=
                        r;
                        C.restore()
                    }
                }

                function l() {
                    function e(t, e, n) {
                        t <= 0 || isNaN(t) || (n ? C.fillStyle = e : (C.strokeStyle = e, C.lineJoin = "round"), C
                            .beginPath(), Math.abs(t - 2 * Math.PI) > 1e-9 && C.moveTo(0, 0), C.arc(0, 0, o, r, r +
                                t / 2, !1), C.arc(0, 0, o, r + t / 2, r + t, !1), C.closePath(), r += t, n ? C
                            .fill() : C.stroke())
                    }

                    function n() {
                        function e(e, n, i) {
                            if (0 == e.data[0][1]) return !0;
                            var r, s = b.legend.labelFormatter,
                                a = b.series.pie.label.formatter;
                            r = s ? s(e.label, e) : e.label, a && (r = a(r, e));
                            var l = (n + e.angle + n) / 2,
                                h = w + Math.round(Math.cos(l) * o),
                                d = _ + Math.round(Math.sin(l) * o) * b.series.pie.tilt,
                                f = "<span class='pieLabel' id='pieLabel" + i + "' style='position:absolute;top:" + d +
                                "px;left:" + h + "px;'>" + r + "</span>";
                            y.append(f);
                            var p = y.children("#pieLabel" + i),
                                m = d - p.height() / 2,
                                g = h - p.width() / 2;
                            if (p.css("top", m), p.css("left", g), 0 - m > 0 || 0 - g > 0 || u - (m + p.height()) < 0 ||
                                c - (g + p.width()) < 0) return !1;
                            if (0 != b.series.pie.label.background.opacity) {
                                var v = b.series.pie.label.background.color;
                                null == v && (v = e.color);
                                var x = "top:" + m + "px;left:" + g + "px;";
                                t("<div class='pieLabelBackground' style='position:absolute;width:" + p.width() +
                                        "px;height:" + p.height() + "px;" + x + "background-color:" + v + ";'></div>")
                                    .css("opacity", b.series.pie.label.background.opacity).insertBefore(p)
                            }
                            return !0
                        }
                        for (var n = i, o = b.series.pie.label.radius > 1 ? b.series.pie.label.radius : x * b.series.pie
                                .label.radius, r = 0; r < d.length; ++r) {
                            if (d[r].percent >= 100 * b.series.pie.label.threshold && !e(d[r], n, r)) return !1;
                            n += d[r].angle
                        }
                        return !0
                    }
                    var i = Math.PI * b.series.pie.startAngle,
                        o = b.series.pie.radius > 1 ? b.series.pie.radius : x * b.series.pie.radius;
                    C.save(), C.translate(w, _), C.scale(1, b.series.pie.tilt), C.save();
                    for (var r = i, s = 0; s < d.length; ++s) d[s].startAngle = r, e(d[s].angle, d[s].color, !0);
                    if (C.restore(), b.series.pie.stroke.width > 0) {
                        C.save(), C.lineWidth = b.series.pie.stroke.width, r = i;
                        for (var s = 0; s < d.length; ++s) e(d[s].angle, b.series.pie.stroke.color, !1);
                        C.restore()
                    }
                    return a(C), C.restore(), !b.series.pie.label.show || n()
                }
                if (y) {
                    var c = e.getPlaceholder().width(),
                        u = e.getPlaceholder().height(),
                        h = y.children().filter(".legend").children().width() || 0;
                    C = o, k = !1, x = Math.min(c, u / b.series.pie.tilt) / 2, _ = u / 2 + b.series.pie.offset.top, w =
                        c / 2, "auto" == b.series.pie.offset.left ? (b.legend.position.match("w") ? w += h / 2 : w -=
                            h / 2, w < x ? w = x : w > c - x && (w = c - x)) : w += b.series.pie.offset.left;
                    var d = e.getData(),
                        f = 0;
                    do f > 0 && (x *= i), f += 1, r(), b.series.pie.tilt <= .8 && s(); while (!l() && f < n);
                    f >= n && (r(), y.prepend(
                            "<div class='error'>Could not draw pie with labels contained inside canvas</div>")), e
                        .setSeries && e.insertLegend && (e.setSeries(d), e.insertLegend())
                }
            }

            function a(t) {
                if (b.series.pie.innerRadius > 0) {
                    t.save();
                    var e = b.series.pie.innerRadius > 1 ? b.series.pie.innerRadius : x * b.series.pie.innerRadius;
                    t.globalCompositeOperation = "destination-out", t.beginPath(), t.fillStyle = b.series.pie.stroke
                        .color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.fill(), t.closePath(), t.restore(), t.save(), t
                        .beginPath(), t.strokeStyle = b.series.pie.stroke.color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t
                        .stroke(), t.closePath(), t.restore()
                }
            }

            function l(t, e) {
                for (var n = !1, i = -1, o = t.length, r = o - 1; ++i < o; r = i)(t[i][1] <= e[1] && e[1] < t[r][1] ||
                    t[r][1] <= e[1] && e[1] < t[i][1]) && e[0] < (t[r][0] - t[i][0]) * (e[1] - t[i][1]) / (t[r][1] -
                    t[i][1]) + t[i][0] && (n = !n);
                return n
            }

            function c(t, n) {
                for (var i, o, r = e.getData(), s = e.getOptions(), a = s.series.pie.radius > 1 ? s.series.pie.radius :
                        x * s.series.pie.radius, c = 0; c < r.length; ++c) {
                    var u = r[c];
                    if (u.pie.show) {
                        if (C.save(), C.beginPath(), C.moveTo(0, 0), C.arc(0, 0, a, u.startAngle, u.startAngle + u
                                .angle / 2, !1), C.arc(0, 0, a, u.startAngle + u.angle / 2, u.startAngle + u.angle, !1),
                            C.closePath(), i = t - w, o = n - _, C.isPointInPath) {
                            if (C.isPointInPath(t - w, n - _)) return C.restore(), {
                                datapoint: [u.percent, u.data],
                                dataIndex: 0,
                                series: u,
                                seriesIndex: c
                            }
                        } else {
                            var h = a * Math.cos(u.startAngle),
                                d = a * Math.sin(u.startAngle),
                                f = a * Math.cos(u.startAngle + u.angle / 4),
                                p = a * Math.sin(u.startAngle + u.angle / 4),
                                m = a * Math.cos(u.startAngle + u.angle / 2),
                                g = a * Math.sin(u.startAngle + u.angle / 2),
                                v = a * Math.cos(u.startAngle + u.angle / 1.5),
                                y = a * Math.sin(u.startAngle + u.angle / 1.5),
                                b = a * Math.cos(u.startAngle + u.angle),
                                k = a * Math.sin(u.startAngle + u.angle),
                                T = [
                                    [0, 0],
                                    [h, d],
                                    [f, p],
                                    [m, g],
                                    [v, y],
                                    [b, k]
                                ],
                                S = [i, o];
                            if (l(T, S)) return C.restore(), {
                                datapoint: [u.percent, u.data],
                                dataIndex: 0,
                                series: u,
                                seriesIndex: c
                            }
                        }
                        C.restore()
                    }
                }
                return null
            }

            function u(t) {
                d("plothover", t)
            }

            function h(t) {
                d("plotclick", t)
            }

            function d(t, n) {
                var i = e.offset(),
                    o = parseInt(n.pageX - i.left),
                    r = parseInt(n.pageY - i.top),
                    s = c(o, r);
                if (b.grid.autoHighlight)
                    for (var a = 0; a < T.length; ++a) {
                        var l = T[a];
                        l.auto != t || s && l.series == s.series || p(l.series)
                    }
                s && f(s.series, t);
                var u = {
                    pageX: n.pageX,
                    pageY: n.pageY
                };
                y.trigger(t, [u, s])
            }

            function f(t, n) {
                var i = m(t);
                i == -1 ? (T.push({
                    series: t,
                    auto: n
                }), e.triggerRedrawOverlay()) : n || (T[i].auto = !1)
            }

            function p(t) {
                null == t && (T = [], e.triggerRedrawOverlay());
                var n = m(t);
                n != -1 && (T.splice(n, 1), e.triggerRedrawOverlay())
            }

            function m(t) {
                for (var e = 0; e < T.length; ++e) {
                    var n = T[e];
                    if (n.series == t) return e
                }
                return -1
            }

            function g(t, e) {
                function n(t) {
                    t.angle <= 0 || isNaN(t.angle) || (e.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight
                        .opacity + ")", e.beginPath(), Math.abs(t.angle - 2 * Math.PI) > 1e-9 && e.moveTo(0, 0), e
                        .arc(0, 0, o, t.startAngle, t.startAngle + t.angle / 2, !1), e.arc(0, 0, o, t.startAngle + t
                            .angle / 2, t.startAngle + t.angle, !1), e.closePath(), e.fill())
                }
                var i = t.getOptions(),
                    o = i.series.pie.radius > 1 ? i.series.pie.radius : x * i.series.pie.radius;
                e.save(), e.translate(w, _), e.scale(1, i.series.pie.tilt);
                for (var r = 0; r < T.length; ++r) n(T[r].series);
                a(e), e.restore()
            }
            var v = null,
                y = null,
                b = null,
                x = null,
                w = null,
                _ = null,
                k = !1,
                C = null,
                T = [];
            e.hooks.processOptions.push(function (t, e) {
                e.series.pie.show && (e.grid.show = !1, "auto" == e.series.pie.label.show && (e.legend.show ? e
                        .series.pie.label.show = !1 : e.series.pie.label.show = !0), "auto" == e.series.pie
                    .radius && (e.series.pie.label.show ? e.series.pie.radius = .75 : e.series.pie.radius =
                        1), e.series.pie.tilt > 1 ? e.series.pie.tilt = 1 : e.series.pie.tilt < 0 && (e
                        .series.pie.tilt = 0))
            }), e.hooks.bindEvents.push(function (t, e) {
                var n = t.getOptions();
                n.series.pie.show && (n.grid.hoverable && e.unbind("mousemove").mousemove(u), n.grid
                    .clickable && e.unbind("click").click(h))
            }), e.hooks.processDatapoints.push(function (t, e, n, i) {
                var r = t.getOptions();
                r.series.pie.show && o(t, e, n, i)
            }), e.hooks.drawOverlay.push(function (t, e) {
                var n = t.getOptions();
                n.series.pie.show && g(t, e)
            }), e.hooks.draw.push(function (t, e) {
                var n = t.getOptions();
                n.series.pie.show && s(t, e)
            })
        }
        var n = 10,
            i = .95,
            o = {
                series: {
                    pie: {
                        show: !1,
                        radius: "auto",
                        innerRadius: 0,
                        startAngle: 1.5,
                        tilt: 1,
                        shadow: {
                            left: 5,
                            top: 15,
                            alpha: .02
                        },
                        offset: {
                            top: 0,
                            left: "auto"
                        },
                        stroke: {
                            color: "#fff",
                            width: 1
                        },
                        label: {
                            show: "auto",
                            formatter: function (t, e) {
                                return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + e
                                    .color + ";'>" + t + "<br/>" + Math.round(e.percent) + "%</div>"
                            },
                            radius: 1,
                            background: {
                                color: null,
                                opacity: 0
                            },
                            threshold: 0
                        },
                        combine: {
                            threshold: -1,
                            color: null,
                            label: "Other"
                        },
                        highlight: {
                            opacity: .5
                        }
                    }
                }
            };
        t.plot.plugins.push({
            init: e,
            options: o,
            name: "pie",
            version: "1.1"
        })
    }(jQuery);
var webLangCustom = {
        en: {
            translation: {
                nav: {
                    home: "Custom Roulette",
                    hot: "Hot",
                    "new": "New",
                    edit: "Edit",
                    save: "Save",
                    saveAs: "Save As",
                    comment: "Comment",
                    login: "Login",
                    my: "My Roulette",
                    logout: "Logout",
                    "delete": "Delete My Account",
                    deleteConfirm: "Confirm Delete Account"
                },
                alert: {
                    result: "Result:",
                    loop1: "Continuous rotation",
                    loop2: "remain",
                    loop3: "times",
                    bigLoop1: "Chosen mode",
                    bigLoop2: "Stop until get",
                    bigLoop3: "",
                    stop: "stop",
                    hide: "hide",
                    show: "show"
                },
                tab: {
                    records: "Records",
                    analytics: "Analytics",
                    settings: "Settings"
                },
                tabc: {
                    times: "times",
                    option: "option",
                    time: "time",
                    times2: "times",
                    probability: "Probability",
                    probability2: "Expected probability",
                    open: "Opened option",
                    settings: "Settings",
                    use: "Use",
                    arrow: "Arrow rotation",
                    outside: "Turntable rotate",
                    clockwise: "Clockwise",
                    counterclockwise: "Counterclockwise",
                    rseconds: "Rotate Seconds",
                    second: "Seconds",
                    rtimes: "Rotate times",
                    bigr: "Continuous rotation Go",
                    bigrtext: "Chosen mode (Stop until get option)",
                    "delete": "Delete all records"
                },
                modal: {
                    m1: "Option Settings",
                    m2: "Roulette title",
                    m3: "Set options via upload csv",
                    m4: "Download options as csv",
                    m5: "Roulette options",
                    m6: "title",
                    m7: "weight",
                    m8: "insert",
                    m9: "delete",
                    m10: "ok",
                    m11: "only show 50 items",
                    m12: "hot",
                    m13: "Save",
                    m14: "Save as",
                    m15: "Give a titlte for this Roulette",
                    m16: "Private Roulette",
                    m17: "will not show at public list",
                    m18: ", you can login , than the Roulette will show in My Roulette",
                    m19: ",the Roulette will show in My Roulette",
                    m20: "cancel",
                    m21: "ok",
                    m22: "Comment",
                    m23: "Give suggestion"
                },
                js: {
                    j1: "RM 400",
                    j2: "RM 300",
                    j3: "RM 200",
                    j4: "RM 100",
                    j5: "What do you want to eat today?",
                    j6: "title",
                    j7: "weight",
                    j8: "Save failed!",
                    j9: "Save Successfully!",
                    j10: "Save failed!",
                    j11: "Save Successfully!",
                    j12: "Hot",
                    j13: "My Roulette",
                    j15: " - Custom Roulette",
                    j16: "-Roulette options.csv",
                    j17: "New"
                },
                timeago: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                },
                intro: {
                    i1: "click here to start",
                    i2: "full introduce",
                    s1: "Custom Roulette, Option, Weight",
                    s2: "This is the current turntable, and the area occupied by each option is the probability.",
                    s3: "Click here to start",
                    s4: "Change Roulette, Option, Weight",
                    s5: "Save Roulette online",
                    s6: "See the hot or new Roulette",
                    s7: "Login for edit your online Roulette and list your Roulettes",
                    s8: "click here to watch it again"
                },
                introOption: {
                    prevLabel: "&larr; prev",
                    nextLabel: "next &rarr;",
                    skipLabel: "skip",
                    doneLabel: "done"
                }
            }
        },
        tw: {
            translation: {
                nav: {
                    home: "自訂轉盤",
                    hot: "熱門轉盤",
                    "new": "最新上架",
                    edit: "修改轉盤",
                    save: "儲存轉盤",
                    saveAs: "另存轉盤",
                    comment: "留言",
                    login: "登入",
                    my: "我的轉盤",
                    logout: "登出",
                    "delete": "刪除我的帳號",
                    deleteConfirm: "確定要刪除帳號？"
                },
                alert: {
                    result: "結果:",
                    loop1: "連續旋轉模式中",
                    loop2: "還有",
                    loop3: "次",
                    bigLoop1: "血統模式中",
                    bigLoop2: "不轉到",
                    bigLoop3: "不罷休",
                    stop: "停止",
                    hide: "隱藏",
                    show: "顯示"
                },
                tab: {
                    records: "紀錄",
                    analytics: "分析",
                    settings: "轉盤設定/功能"
                },
                tabc: {
                    times: "次數",
                    option: "選項",
                    time: "時間",
                    times2: "次",
                    probability: "機率",
                    probability2: "期望機率",
                    open: "啟用選項",
                    settings: "轉盤設定",
                    use: "使用",
                    arrow: "箭頭旋轉",
                    outside: "轉盤旋轉",
                    clockwise: "順時針旋轉",
                    counterclockwise: "逆時針旋轉",
                    rseconds: "旋轉秒數",
                    second: "秒",
                    rtimes: "旋轉次數",
                    bigr: "連續旋轉Go！",
                    bigrtext: "血統模式 (轉到該選項才停止)",
                    "delete": "刪除所有紀錄"
                },
                modal: {
                    m1: "設定轉盤內容",
                    m2: "轉盤標題",
                    m3: "上傳內容csv",
                    m4: "下載內容csv",
                    m5: "轉盤選項",
                    m6: "名稱",
                    m7: "比重",
                    m8: "新增",
                    m9: "刪除",
                    m10: "確定",
                    m11: "僅顯示前50筆",
                    m12: "人氣",
                    m13: "儲存轉盤",
                    m14: "另存轉盤",
                    m15: "給他個標題吧！",
                    m16: "不公開的轉盤",
                    m17: "不會出現在公開列表裡",
                    m18: "，可以先登入帳號，就會出現在[我的轉盤]中",
                    m19: "，會出現在[我的轉盤]中",
                    m20: "取消",
                    m21: "確定",
                    m22: "留言",
                    m23: "歡迎提供意見"
                },
                js: {
                    j1: "我隨便",
                    j2: "我都好",
                    j3: "都可以",
                    j4: "看你",
                    j5: "今天想吃什麼?",
                    j6: "名稱",
                    j7: "比重",
                    j8: "儲存轉盤 失敗!",
                    j9: "儲存轉盤 成功!",
                    j10: "新增轉盤 失敗!",
                    j11: "新增轉盤 成功!",
                    j12: "熱門轉盤",
                    j13: "我的轉盤",
                    j15: " - 自訂轉盤",
                    j16: "-轉盤內容.csv",
                    j17: "最新上架"
                },
                timeago: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "前",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "1分鐘",
                    minute: "1分鐘",
                    minutes: "%d分鐘",
                    hour: "1小時",
                    hours: "%d小時",
                    day: "1天",
                    days: "%d天",
                    month: "1個月",
                    months: "%d個月",
                    year: "1年",
                    years: "%d年",
                    wordSeparator: "",
                    numbers: []
                },
                intro: {
                    i1: "點選此箭頭即可開始旋轉！",
                    i2: "介紹，點我點我!",
                    s1: "自訂轉盤、機率、選項！",
                    s2: "這是目前的轉盤，每個選項佔的面積就是機率。",
                    s3: "點選此箭頭即可開始旋轉！",
                    s4: "點此可以自行設定轉盤內容、選項、機率！",
                    s5: "轉盤設定完成後，點此即可儲存內容！",
                    s6: "點此可察看那些轉盤很熱門，旁邊則是可以看最新的轉盤！",
                    s7: "登入使用更方便，支援修改轉盤，我的轉盤！",
                    s8: "感謝耐心看完介紹，點此可以再看一次喔!"
                },
                introOption: {
                    prevLabel: "&larr; 上一步",
                    nextLabel: "下一步 &rarr;",
                    skipLabel: "跳過",
                    doneLabel: "結束"
                }
            }
        }
    },
    i18nextDefaultLang = "tw",
    userLang = navigator.language || navigator.userLanguage;
/^en\b/.test(userLang) && (i18nextDefaultLang = "en"), i18next.init({
    lng: i18nextDefaultLang,
    resources: webLangCustom
}, function (t, e) {
    jqueryI18next.init(i18next, $), afterChangeLang(i18next.language)
});
var fire, db;
$.cookie.json = !0;
var vue = new Vue({
        el: "#main",
        data: {
            set: {
                options: [],
                title: "",
                ts: 0,
                hot: 0,
                uid: "",
                isPrivate: !1
            },
            onlineSet: {},
            c: {
                setTurn: 1,
                duration: 3e3,
                volume: !0,
                targetTag: "piechart",
                chatType: "plot",
                angleType: 1
            },
            s: {
                _url: "http://z358z358.github.io/Roulette/",
                url: "http://z358z358.github.io/Roulette/",
                text: $("meta[name='description']").attr("content"),
                title: $("title").text()
            },
            user: {
                provider: "",
                uid: "",
                displayName: ""
            },
            Msg: {
                type: "",
                msg: ""
            },
            cookieKey: "z358z358-roulette",
            cookieKeyLang: "z358z358-roulette-lang",
            hotKey: "hot-cd",
            rid: "",
            turnFlag: -1,
            goFlag: !1,
            targetUntil: {
                target: -1,
                count: 0,
                action: ""
            },
            saveType: "",
            angle: 0,
            target: 0,
            turn: 0,
            sum: 0,
            logs: [],
            list: [],
            max: 50,
            uploadReady: !0,
            lang: i18nextDefaultLang,
            getOptions: {},
            copiedMsg: "",
            navigatorShare: !1
        },
        components: {
            options: {
                watch: {
                    on: function (t) {
                        vue.draw()
                    }
                }
            }
        },
        watch: {
            logs: function (t, e) {
                jQuery(".timeago").timeago()
            },
            list: function (t, e) {
                jQuery(".timeago").timeago()
            },
            "c.chatType": "draw",
            "c.targetTag": "draw",
            "set.options": "draw"
        },
        filters: {
            persent: function (t) {
                return parseFloat((100 * t).toFixed(3)) + "%"
            }
        },
        computed: {
            showHideBtn: function () {
                var t = !0;
                if (this.logs.length) {
                    var e = 0,
                        n = this.logs[0].target,
                        i = null;
                    this.set.options.map(function (t, n) {
                        t.on !== !1 && (e++, i = n)
                    }), e <= 0 ? t = !1 : 1 == e && i == n && (t = !1)
                }
                return t
            }
        },
        ready: function () {
            var t = new URL(window.location.href),
                e = t.searchParams.get("lang");
            if (e) return this.changeLang(e, "getLang"), void(window.location.href = this.s.url);
            var n = $.cookie(this.cookieKeyLang);
            n && this.changeLang(n, "cookie");
            var i = $.cookie(this.cookieKey);
            i && Object.keys(this.c).length == Object.keys(i).length ? this.c = i : ($(".first-intro").tooltip(
                "show"), setTimeout(function () {
                $(".first-intro").tooltip("hide")
            }, 3e3)), this.setOptionOn(), this.sendGa("網址", window.location.href), navigator.share && (this
                .navigatorShare = !0)
        },
        methods: {
            draw: function () {
                this.getSum(), 0 != this.sum && ("plot" == this.c.chatType ? this.drawByPlot() : this
                    .drawByGoole(), $("#piechart,#lotteryBtn").css("transform", "rotate(0)"), this
                    .saveConfig())
            },
            drawByGoole: function () {
                var t = [
                    [i18next.t("js.j6"), i18next.t("js.j7")]
                ];
                if (this.set.options.map(function (e) {
                        if (e.on !== !1) {
                            var n = parseFloat(e.weight, 10);
                            t.push([e.name, n])
                        }
                    }), "undefined" == typeof google || "undefined" == typeof google.visualization ||
                    "function" != typeof google.visualization.arrayToDataTable) return !1;
                var e = google.visualization.arrayToDataTable(t),
                    n = {
                        pieSliceText: "label",
                        title: this.set.title,
                        pieHole: .3,
                        legend: {
                            alignment: "center",
                            position: "bottom"
                        }
                    },
                    i = new google.visualization.PieChart(document.getElementById("piechart"));
                i.draw(e, n)
            },
            drawByPlot: function () {
                var t = [];
                this.set.options.map(function (e) {
                    if (e.on !== !1) {
                        var n = parseFloat(e.weight, 10);
                        t.push({
                            data: n,
                            label: e.name
                        })
                    }
                }), $.plot("#piechart", t, {
                    series: {
                        pie: {
                            show: !0,
                            radius: 1,
                            label: {
                                show: !0,
                                radius: 2 / 3,
                                formatter: labelFormatter,
                                threshold: .1
                            }
                        }
                    },
                    legend: {
                        show: !1
                    }
                })
            },
            addOption: function () {
                this.sendGa("點擊按鈕", "新增選項"), this.set.options.unshift({
                    name: "",
                    weight: 1,
                    on: !0
                }), this.$nextTick(function () {
                    $("#option-table input:first").focus()
                })
            },
            removeOption: function (t) {
                this.sendGa("點擊按鈕", "刪除選項"), this.set.options.$remove(t.$data)
            },
            copyOption: function (t, e) {
                this.sendGa("點擊按鈕", "複製選項");
                var n = _.clone(t.$data);
                this.set.options.splice(e, 0, n)
            },
            getRandomArbitrary: function (t, e) {
                return Math.random() * (e - t) + t
            },
            go: function (t, e) {
                var n = this.set.options,
                    i = this.angle,
                    o = 0,
                    r = 1800;
                this.getSum();
                var s = this.getRandomArbitrary(0, this.sum);
                if (1 != this.goFlag && 0 != this.sum) {
                    if ("c" == t) this.turnFlag = this.c.setTurn, this.saveConfig();
                    else if ("option" == t) {
                        if (n[e].on === !1) return;
                        this.sendGa("點擊按鈕", "血統模式開始"), this.targetUntil.target = e, this.targetUntil.count = 0,
                            this.targetUntil.action = "run", this.saveConfig()
                    }
                    for (var a = 0; a <= n.length - 1; a++)
                        if (n[a].on !== !1 && (o += n[a].weight, o > s)) {
                            this.target = a;
                            var l = 0,
                                c = Math.floor(o / this.sum * 360);
                            if (n[a - 1]) var l = Math.floor((o - n[a].weight) / this.sum * 360);
                            console.log(l, c), s = l + this.getRandomArbitrary(0, c - l);
                            break
                        }
                    "google" == this.c.chatType && (this.c.targetTag = "lotteryBtn"), "piechart" == this.c
                        .targetTag && (s = 360 - s), this.c.angleType == -1 && (r *= -1, s -= 360), this
                        .goFlag = !0, this.angle = s, this.c.volume && document.getElementById("sound").play(),
                        $("#" + this.c.targetTag).rotate({
                            angle: i,
                            duration: this.c.duration,
                            animateTo: s + r,
                            callback: this.goDone
                        })
                }
            },
            goDone: function () {
                var t = {},
                    e = (parseInt(this.set.options[this.target].times) || 0) + 1;
                this.goFlag = !1, this.turn = this.turn + 1, t.ts = (new Date).getTime(), t.target = this
                    .target, t.content = this.set.options[this.target].name, this.logs.unshift(t), this.logs
                    .length > 1e3 && this.logs.pop(), "piechart" == this.c.targetTag && $("#piechart .pieLabel")
                    .css("transform", "rotate(" + (360 - this.angle) + "deg)"), this.set.options[t.target].$set(
                        "times", e), this.turnFlag >= 1 ? (this.turnFlag--, this.turnFlag >= 1 && this.go()) :
                    "run" == this.targetUntil.action ? (this.targetUntil.count++, this.targetUntil.target !==
                        this.target ? this.go() : (this.targetUntil.action = "end", this.$nextTick(function () {
                            $("[data-i18n]").localize()
                        }))) : (this.saveConfig(), this.c.volume && document.getElementById("end").play())
            },
            saveOnFireBase: function () {
                for (var t = this, e = $.extend({}, this.set), n = e.options.length - 1; n >= 0; n--) delete e
                    .options[n].times, delete e.options[n].on;
                if (delete e.hot, e.uid && e.uid === this.user.uid && this.rid && "save" == this.saveType) e
                    .ts = (new Date).getTime(), db.collection("list").doc(this.rid).set(e).then(function () {
                        t.$set("Msg", {
                            type: "success",
                            msg: i18next.t("js.j9")
                        })
                    })["catch"](function (e) {
                        console.error("Error writing document: ", e), t.$set("Msg", {
                            type: "error",
                            msg: i18next.t("js.j8")
                        })
                    });
                else {
                    if (this.set.uid = e.uid = this.user.uid, this.onlineSet.title) {
                        var i = !0;
                        delete this.onlineSet.ts, delete this.onlineSet.hot, delete e.ts;
                        for (var n = e.options.length - 1; n >= 0; n--)
                            if (0 == _.isEqual(e.options[n], this.onlineSet.options[n])) {
                                i = !1;
                                break
                            } if (_.isEqual(e, this.onlineSet) && i) return console.error("重複儲存" + e.title),
                            this.sendGa("重複儲存", e.title), !1
                    }
                    e.ts = (new Date).getTime(), e.hot = 0, db.collection("list").add(e).then(function (n) {
                        t.onlineSet = _.cloneDeep(e), t.rid = window.location.hash = n.id, t.$set(
                        "Msg", {
                            type: "success",
                            msg: i18next.t("js.j11")
                        })
                    })["catch"](function (e) {
                        console.error("Error adding document: ", e), t.$set("Msg", {
                            type: "error",
                            msg: i18next.t("js.j10")
                        })
                    })
                }
                this.sendGa("點擊按鈕", "儲存轉盤"), this.draw()
            },
            getList: function (t) {
                var e = this,
                    n = "hot" == t ? i18next.t("js.j12") : i18next.t("js.j17"),
                    i = db.collection("list"),
                    o = "my" == t ? "ts" : t;
                n = "my" == t ? i18next.t("js.j13") : n, "my" != t && this.$set("list", []), this.$set(
                        "listOrder", o), this.$set("listType", t), this.$set("listTitle", n), i = "my" == t &&
                    this.user.uid ? i.where("uid", "==", this.user.uid).orderBy("ts", "desc") : i.where(
                        "isPrivate", "==", !1).orderBy(t, "desc");
                i.limit(e.max).get().then(function (t) {
                    var n = [];
                    t.forEach(function (t) {
                        var e = t.data();
                        e.id = t.id, n.push(e)
                    }), e.list = n, $("[data-i18n]").localize()
                })["catch"](function (t) {
                    console.log("Error getting document:", t)
                }), this.sendGa("取得list", t)
            },
            loadOption: function (t) {
                var e = this,
                    n = db.collection("list").doc(t);
                n.get(this.getOptions).then(function (n) {
                    e.setOptions(n), $("#list-modal").modal("hide"), $(".navbar-toggle:not(.collapsed)")
                        .click(), window.location.hash = t
                })["catch"](function (t) {
                    console.log("Error getting cached document:", t)
                })
            },
            setOptions: function (t) {
                this.rid;
                if (t.exists === !1) return this.rid = "", this.loadDefaultOption(), void this.draw();
                var e = t.data(),
                    n = e.title + i18next.t("js.j15");
                this.set = e, this.onlineSet = _.cloneDeep(e), $("title").text(n), this.sendGa("讀取option", e
                        .title), this.s.title = n, this.setOptionOn(), this.draw(), this.rid = t.id, this.s
                    .url = this.s._url + "#" + this.rid, $.cookie(this.hotKey) || ($.cookie(this.hotKey, "1", {
                        path: "/",
                        expires: 1
                    }), this.incHot(t.id)), this.$nextTick(function () {
                        "undefined" != typeof FB && FB.XFBML.parse()
                    })
            },
            incHot: function (t) {
                var e = this,
                    n = db.collection("list").doc(t);
                db.runTransaction(function (t) {
                    return t.get(n).then(function (e) {
                        if (!e.exists) throw "Document does not exist!";
                        var i = e.data().hot ? e.data().hot : 0;
                        i++, t.update(n, {
                            hot: i
                        })
                    })
                }).then(function () {
                    e.sendGa("人氣inc", e.s.title)
                })["catch"](function (t) {
                    console.log("Transaction failed: ", t)
                })
            },
            login: function (t) {
                var e = this;
                if ("logout" == t) this.sendGa("登出"), firebase.auth().signOut().then(function () {
                    e.$set("user", {
                        uid: "",
                        provider: "",
                        displayName: ""
                    })
                }, function (t) {});
                else {
                    if (this.sendGa("登入", t), "facebook" == t) var n = new firebase.auth.FacebookAuthProvider;
                    else if ("google" == t) var n = new firebase.auth.GoogleAuthProvider;
                    else if ("yahoo" == t) var n = new firebase.auth.OAuthProvider("yahoo.com");
                    firebase.auth().signInWithPopup(n).then(function (t) {
                        var n = (t.credential.accessToken, t.user);
                        e.loginBack(n)
                    })["catch"](function (t) {
                        console.log(t);
                        t.code, t.message, t.email, t.credential
                    })
                }
            },
            loginBack: function (t) {
                this.user.uid = t.uid, this.user.displayName = t.providerData[0].displayName, $(
                    ".navbar-toggle:not(.collapsed)").click()
            },
            deleteLog: function (t) {
                "all" == t && (this.$set("logs", []), this.set.options.map(function (t) {
                    t.$set("times", 0)
                }), this.turn = 0)
            },
            setVolume: function (t) {
                this.c.$set("volume", t), this.saveConfig(), this.sendGa("聲音", t)
            },
            showIntro: function () {
                this.sendGa("介紹");
                var t = webLangCustom[this.lang].translation.introOption;
                introJs().setOptions(t).start()
            },
            goOffline: function () {
                Firebase.goOffline()
            },
            goOnline: function () {
                Firebase.goOnline()
            },
            showDsq: function () {
                this.dsq || (! function () {
                    var t = document.createElement("script");
                    t.type = "text/javascript", t.async = !0, t.src = "//" + disqus_shortname +
                        ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document
                            .getElementsByTagName("body")[0]).appendChild(t)
                }(), this.$set("dsq", !0), this.sendGa("留言"))
            },
            fireOn: function () {
                var t = this;
                window.location.hash ? (this.rid = window.location.hash.substring(1), this.loadOption(this
                    .rid)) : (this.loadDefaultOption(), this.draw()), firebase.auth().onAuthStateChanged(
                        function (e) {
                            e && t.loginBack(e)
                        })
            },
            getSum: function () {
                var t = 0;
                this.set.options.map(function (e) {
                    e.$set("weight", Math.abs(e.weight)), e.on !== !1 && (t += parseFloat(e.weight, 10))
                }), this.sum = t
            },
            setOptionOn: function () {
                this.set.options.map(function (t) {
                    t.$set("on", !0)
                })
            },
            saveConfig: function () {
                $.cookie(this.cookieKey, this.c, {
                    path: "/",
                    expires: 365
                })
            },
            deleteData: function (t) {
                var e = this;
                db.collection("list").doc(t)["delete"]().then(function () {
                    e.getList("my"), e.sendGa("刪除轉盤", t)
                })["catch"](function (t) {
                    console.error("Error removing document: ", t)
                })
            },
            csvDownload: function () {
                var t = this.set.title + i18next.t("js.j16"),
                    e = [
                        [i18next.t("js.j6"), i18next.t("js.j7")]
                    ];
                this.set.options.map(function (t) {
                    var n = parseFloat(t.weight, 10);
                    e.push([t.name, n])
                });
                for (var n = function (t) {
                        for (var e = "", n = 0; n < t.length; n++) {
                            var i = null === t[n] ? "" : t[n].toString();
                            t[n] instanceof Date && (i = t[n].toLocaleString());
                            var o = i.replace(/"/g, '""');
                            o.search(/("|,|\n)/g) >= 0 && (o = '"' + o + '"'), n > 0 && (e += ","), e += o
                        }
                        return e + "\n"
                    }, i = "", o = 0; o < e.length; o++) i += n(e[o]);
                var r = new Blob(["\ufeff" + i], {
                    type: "text/csv;charset=utf-8;"
                });
                if (navigator.msSaveBlob) navigator.msSaveBlob(r, t);
                else {
                    var s = document.createElement("a");
                    if (void 0 !== s.download) {
                        var a = URL.createObjectURL(r);
                        s.setAttribute("href", a), s.setAttribute("download", t), s.style.visibility = "hidden",
                            document.body.appendChild(s), s.click(), document.body.removeChild(s)
                    }
                }
                this.sendGa("csv", "下載")
            },
            csvUpload: function (t) {
                this.sendGa("csv", "上傳");
                var e = this,
                    n = t.target.files,
                    o = new FileReader;
                o.onload = function (t) {
                    var n = [],
                        o = t.target.result.split("\n");
                    for (i in o)
                        if (0 != i) {
                            var r = o[i].split(",").map(function (t) {
                                return t.trim()
                            });
                            if (2 == r.length) {
                                var s = parseFloat(r[1], 10);
                                n.push({
                                    name: r[0],
                                    weight: s,
                                    on: !0
                                })
                            }
                        } n && e.set.$set("options", n)
                }, o.readAsText(n.item(0)), this.uploadReady = !1, this.$nextTick(function () {
                    e.uploadReady = !0
                })
            },
            changeLang: function (t, e) {
                "nav" == e && this.sendGa("lang", t);
                var n = ["tw", "en"];
                n.indexOf(t) !== -1 && (this.lang = t, $.cookie(this.cookieKeyLang, t, {
                    path: "/",
                    expires: 365
                }), i18next.changeLanguage(t), afterChangeLang(t))
            },
            sendGa: function (t, e, n) {
                gtag("event", e, {
                    event_category: t,
                    event_label: n
                })
            },
            loadDefaultOption: function () {
                this.set.options = [{
                    name: i18next.t("js.j1"),
                    weight: 1,
                    on: !0
                }, {
                    name: i18next.t("js.j2"),
                    weight: 1,
                    on: !0
                }, {
                    name: i18next.t("js.j3"),
                    weight: 1,
                    on: !0
                }, {
                    name: i18next.t("js.j4"),
                    weight: 1,
                    on: !0
                }], this.set.title = i18next.t("js.j5")
            },
            copyLink: function () {
                var t = this;
                copyStringToClipboard(this.s.url), this.copiedMsg = "Copied", setTimeout(function () {
                    t.copiedMsg = ""
                }, 3e3), this.sendGa("點擊按鈕", "複製連結")
            },
            mobileShare: function () {
                const t = {
                    title: this.s.title,
                    text: this.s.title,
                    url: this.s.url
                };
                navigator.share(t), this.sendGa("點擊按鈕", "手機分享")
            },
            toggleTarget: function (t) {
                var e = "隱藏選項";
                this.set.options[t].on === !1 && (e = "顯示選項"), this.set.options[t].on = !this.set.options[t].on,
                    this.sendGa("點擊按鈕", e)
            },
            deleteMyAccount: function (t) {
                var e = this;
                if (t || confirm(i18next.t("nav.deleteConfirm"))) {
                    var n = db.collection("list").where("uid", "==", this.user.uid).orderBy("ts", "desc");
                    n.limit(e.max).get().then(function (t) {
                        var n = 0;
                        if (t.forEach(function (t) {
                                db.collection("list").doc(t.id)["delete"](), n++
                            }), 0 == n) {
                            const i = firebase.auth().currentUser;
                            i["delete"](), e.sendGa("刪除帳號"), firebase.auth().signOut().then(
                        function () {
                                e.$set("user", {
                                    uid: "",
                                    provider: "",
                                    displayName: ""
                                })
                            }, function (t) {})
                        } else e.deleteMyAccount(!0)
                    })["catch"](function (t) {
                        console.log("Error getting document:", t)
                    })
                }
            }
        }
    }),
    script = document.createElement("script");
script.onload = function () {
        var t = {
            apiKey: "AIzaSyAtoSqn428jHyekJoMuhPXYJeWQtH8O6Mk",
            authDomain: "z358z358-roulette.firebaseapp.com",
            databaseURL: "https://z358z358-roulette.firebaseio.com",
            projectId: "z358z358-roulette",
            storageBucket: "z358z358-roulette.appspot.com",
            messagingSenderId: "1095342180247",
            appId: "1:1095342180247:web:575ab78fd455546c9b66d2",
            measurementId: "G-4HJT8VYHTF"
        };
        firebase.initializeApp(t), firebase.analytics(), db = firebase.firestore(), vue.fireOn()
    }, script.async = !0, script.src = "https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js", document
    .getElementsByTagName("head")[0].appendChild(script), $(window).resize(vue.draw);
