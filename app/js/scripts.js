!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.AOS = e());
})(this, function () {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        e = "Expected a function",
        n = NaN,
        i = "[object Symbol]",
        o = /^\s+|\s+$/g,
        r = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        a = /^0o[0-7]+$/i,
        c = parseInt,
        u = "object" == typeof t && t && t.Object === Object && t,
        l = "object" == typeof self && self && self.Object === Object && self,
        d = u || l || Function("return this")(),
        f = Object.prototype.toString,
        m = Math.max,
        v = Math.min,
        p = function () {
            return d.Date.now();
        };
    function h(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
    }
    function g(t) {
        if ("number" == typeof t) return t;
        if (
            (function (t) {
                return (
                    "symbol" == typeof t ||
                    ((function (t) {
                        return !!t && "object" == typeof t;
                    })(t) &&
                        f.call(t) == i)
                );
            })(t)
        )
            return n;
        if (h(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = h(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(o, "");
        var u = s.test(t);
        return u || a.test(t) ? c(t.slice(2), u ? 2 : 8) : r.test(t) ? n : +t;
    }
    var b = function (t, n, i) {
        var o = !0,
            r = !0;
        if ("function" != typeof t) throw new TypeError(e);
        return (
            h(i) && ((o = "leading" in i ? !!i.leading : o), (r = "trailing" in i ? !!i.trailing : r)),
            (function (t, n, i) {
                var o,
                    r,
                    s,
                    a,
                    c,
                    u,
                    l = 0,
                    d = !1,
                    f = !1,
                    b = !0;
                if ("function" != typeof t) throw new TypeError(e);
                function y(e) {
                    var n = o,
                        i = r;
                    return (o = r = void 0), (l = e), (a = t.apply(i, n));
                }
                function w(t) {
                    var e = t - u;
                    return void 0 === u || e >= n || e < 0 || (f && t - l >= s);
                }
                function _() {
                    var t = p();
                    if (w(t)) return k(t);
                    c = setTimeout(
                        _,
                        (function (t) {
                            var e = n - (t - u);
                            return f ? v(e, s - (t - l)) : e;
                        })(t)
                    );
                }
                function k(t) {
                    return (c = void 0), b && o ? y(t) : ((o = r = void 0), a);
                }
                function S() {
                    var t = p(),
                        e = w(t);
                    if (((o = arguments), (r = this), (u = t), e)) {
                        if (void 0 === c)
                            return (function (t) {
                                return (l = t), (c = setTimeout(_, n)), d ? y(t) : a;
                            })(u);
                        if (f) return (c = setTimeout(_, n)), y(u);
                    }
                    return void 0 === c && (c = setTimeout(_, n)), a;
                }
                return (
                    (n = g(n) || 0),
                    h(i) && ((d = !!i.leading), (s = (f = "maxWait" in i) ? m(g(i.maxWait) || 0, n) : s), (b = "trailing" in i ? !!i.trailing : b)),
                    (S.cancel = function () {
                        void 0 !== c && clearTimeout(c), (l = 0), (o = u = r = c = void 0);
                    }),
                    (S.flush = function () {
                        return void 0 === c ? a : k(p());
                    }),
                    S
                );
            })(t, n, { leading: o, maxWait: n, trailing: r })
        );
    },
        y = NaN,
        w = "[object Symbol]",
        _ = /^\s+|\s+$/g,
        k = /^[-+]0x[0-9a-f]+$/i,
        S = /^0b[01]+$/i,
        L = /^0o[0-7]+$/i,
        x = parseInt,
        O = "object" == typeof t && t && t.Object === Object && t,
        E = "object" == typeof self && self && self.Object === Object && self,
        T = O || E || Function("return this")(),
        A = Object.prototype.toString,
        q = Math.max,
        H = Math.min,
        C = function () {
            return T.Date.now();
        };
    function j(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
    }
    function M(t) {
        if ("number" == typeof t) return t;
        if (
            (function (t) {
                return (
                    "symbol" == typeof t ||
                    ((function (t) {
                        return !!t && "object" == typeof t;
                    })(t) &&
                        A.call(t) == w)
                );
            })(t)
        )
            return y;
        if (j(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = j(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(_, "");
        var n = S.test(t);
        return n || L.test(t) ? x(t.slice(2), n ? 2 : 8) : k.test(t) ? y : +t;
    }
    var z = function (t, e, n) {
        var i,
            o,
            r,
            s,
            a,
            c,
            u = 0,
            l = !1,
            d = !1,
            f = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function m(e) {
            var n = i,
                r = o;
            return (i = o = void 0), (u = e), (s = t.apply(r, n));
        }
        function v(t) {
            var n = t - c;
            return void 0 === c || n >= e || n < 0 || (d && t - u >= r);
        }
        function p() {
            var t = C();
            if (v(t)) return h(t);
            a = setTimeout(
                p,
                (function (t) {
                    var n = e - (t - c);
                    return d ? H(n, r - (t - u)) : n;
                })(t)
            );
        }
        function h(t) {
            return (a = void 0), f && i ? m(t) : ((i = o = void 0), s);
        }
        function g() {
            var t = C(),
                n = v(t);
            if (((i = arguments), (o = this), (c = t), n)) {
                if (void 0 === a)
                    return (function (t) {
                        return (u = t), (a = setTimeout(p, e)), l ? m(t) : s;
                    })(c);
                if (d) return (a = setTimeout(p, e)), m(c);
            }
            return void 0 === a && (a = setTimeout(p, e)), s;
        }
        return (
            (e = M(e) || 0),
            j(n) && ((l = !!n.leading), (r = (d = "maxWait" in n) ? q(M(n.maxWait) || 0, e) : r), (f = "trailing" in n ? !!n.trailing : f)),
            (g.cancel = function () {
                void 0 !== a && clearTimeout(a), (u = 0), (i = c = o = a = void 0);
            }),
            (g.flush = function () {
                return void 0 === a ? s : h(C());
            }),
            g
        );
    },
        N = function () { };
    function D(t) {
        t &&
            t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes),
                    n = Array.prototype.slice.call(t.removedNodes);
                if (
                    (function t(e) {
                        var n = void 0,
                            i = void 0;
                        for (n = 0; n < e.length; n += 1) {
                            if ((i = e[n]).dataset && i.dataset.aos) return !0;
                            if (i.children && t(i.children)) return !0;
                        }
                        return !1;
                    })(e.concat(n))
                )
                    return N();
            });
    }
    function I() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var P = function () {
        return !!I();
    },
        W = function (t, e) {
            var n = window.document,
                i = new (I())(D);
            (N = e), i.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
        },
        B = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        },
        R = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            };
        })(),
        $ =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            },
        V = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        F = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        G = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        Y = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function X() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var K = new ((function () {
        function t() {
            B(this, t);
        }
        return (
            R(t, [
                {
                    key: "phone",
                    value: function () {
                        var t = X();
                        return !(!V.test(t) && !F.test(t.substr(0, 4)));
                    },
                },
                {
                    key: "mobile",
                    value: function () {
                        var t = X();
                        return !(!G.test(t) && !Y.test(t.substr(0, 4)));
                    },
                },
                {
                    key: "tablet",
                    value: function () {
                        return this.mobile() && !this.phone();
                    },
                },
                {
                    key: "ie11",
                    value: function () {
                        return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                    },
                },
            ]),
            t
        );
    })())(),
        Z = function (t, e) {
            var n = void 0;
            return K.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, { detail: e }) : (n = new CustomEvent(t, { detail: e })), document.dispatchEvent(n);
        },
        J = function (t) {
            return t.forEach(function (t, e) {
                return (function (t, e) {
                    var n = t.options,
                        i = t.position,
                        o = t.node,
                        r =
                            (t.data,
                                function () {
                                    t.animated &&
                                        ((function (t, e) {
                                            e &&
                                                e.forEach(function (e) {
                                                    return t.classList.remove(e);
                                                });
                                        })(o, n.animatedClassNames),
                                            Z("aos:out", o),
                                            t.options.id && Z("aos:in:" + t.options.id, o),
                                            (t.animated = !1));
                                });
                    n.mirror && e >= i.out && !n.once
                        ? r()
                        : e >= i.in
                            ? t.animated ||
                            ((function (t, e) {
                                e &&
                                    e.forEach(function (e) {
                                        return t.classList.add(e);
                                    });
                            })(o, n.animatedClassNames),
                                Z("aos:in", o),
                                t.options.id && Z("aos:in:" + t.options.id, o),
                                (t.animated = !0))
                            : t.animated && !n.once && r();
                })(t, window.pageYOffset);
            });
        },
        U = function (t) {
            for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)), (n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)), (t = t.offsetParent);
            return { top: n, left: e };
        },
        Q = function (t, e, n) {
            var i = t.getAttribute("data-aos-" + e);
            if (void 0 !== i) {
                if ("true" === i) return !0;
                if ("false" === i) return !1;
            }
            return i || n;
        },
        tt = function () {
            var t = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(t, function (t) {
                return { node: t };
            });
        },
        et = [],
        nt = !1,
        it = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
        },
        ot = function () {
            return document.all && !window.atob;
        },
        rt = function () {
            var t, e;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (nt = !0),
                nt &&
                ((e = it),
                    (t = et).forEach(function (t, n) {
                        var i = Q(t.node, "mirror", e.mirror),
                            o = Q(t.node, "once", e.once),
                            r = Q(t.node, "id"),
                            s = e.useClassNames && t.node.getAttribute("data-aos"),
                            a = [e.animatedClassName].concat(s ? s.split(" ") : []).filter(function (t) {
                                return "string" == typeof t;
                            });
                        e.initClassName && t.node.classList.add(e.initClassName),
                            (t.position = {
                                in: (function (t, e, n) {
                                    var i = window.innerHeight,
                                        o = Q(t, "anchor"),
                                        r = Q(t, "anchor-placement"),
                                        s = Number(Q(t, "offset", r ? 0 : e)),
                                        a = r || n,
                                        c = t;
                                    o && document.querySelectorAll(o) && (c = document.querySelectorAll(o)[0]);
                                    var u = U(c).top - i;
                                    switch (a) {
                                        case "top-bottom":
                                            break;
                                        case "center-bottom":
                                            u += c.offsetHeight / 2;
                                            break;
                                        case "bottom-bottom":
                                            u += c.offsetHeight;
                                            break;
                                        case "top-center":
                                            u += i / 2;
                                            break;
                                        case "center-center":
                                            u += i / 2 + c.offsetHeight / 2;
                                            break;
                                        case "bottom-center":
                                            u += i / 2 + c.offsetHeight;
                                            break;
                                        case "top-top":
                                            u += i;
                                            break;
                                        case "bottom-top":
                                            u += i + c.offsetHeight;
                                            break;
                                        case "center-top":
                                            u += i + c.offsetHeight / 2;
                                    }
                                    return u + s;
                                })(t.node, e.offset, e.anchorPlacement),
                                out:
                                    i &&
                                    (function (t, e) {
                                        window.innerHeight;
                                        var n = Q(t, "anchor"),
                                            i = Q(t, "offset", e),
                                            o = t;
                                        return n && document.querySelectorAll(n) && (o = document.querySelectorAll(n)[0]), U(o).top + o.offsetHeight - i;
                                    })(t.node, e.offset),
                            }),
                            (t.options = { once: o, mirror: i, animatedClassNames: a, id: r });
                    }),
                    J((et = t)),
                    window.addEventListener(
                        "scroll",
                        b(function () {
                            J(et, it.once);
                        }, it.throttleDelay)
                    ));
        },
        st = function () {
            if (((et = tt()), ct(it.disable) || ot())) return at();
            rt();
        },
        at = function () {
            et.forEach(function (t, e) {
                t.node.removeAttribute("data-aos"),
                    t.node.removeAttribute("data-aos-easing"),
                    t.node.removeAttribute("data-aos-duration"),
                    t.node.removeAttribute("data-aos-delay"),
                    it.initClassName && t.node.classList.remove(it.initClassName),
                    it.animatedClassName && t.node.classList.remove(it.animatedClassName);
            });
        },
        ct = function (t) {
            return !0 === t || ("mobile" === t && K.mobile()) || ("phone" === t && K.phone()) || ("tablet" === t && K.tablet()) || ("function" == typeof t && !0 === t());
        };
    return {
        init: function (t) {
            return (
                (it = $(it, t)),
                (et = tt()),
                it.disableMutationObserver ||
                P() ||
                (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                    (it.disableMutationObserver = !0)),
                it.disableMutationObserver || W("[data-aos]", st),
                ct(it.disable) || ot()
                    ? at()
                    : (document.querySelector("body").setAttribute("data-aos-easing", it.easing),
                        document.querySelector("body").setAttribute("data-aos-duration", it.duration),
                        document.querySelector("body").setAttribute("data-aos-delay", it.delay),
                        -1 === ["DOMContentLoaded", "load"].indexOf(it.startEvent)
                            ? document.addEventListener(it.startEvent, function () {
                                rt(!0);
                            })
                            : window.addEventListener("load", function () {
                                rt(!0);
                            }),
                        "DOMContentLoaded" === it.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && rt(!0),
                        window.addEventListener("resize", z(rt, it.debounceDelay, !0)),
                        window.addEventListener("orientationchange", z(rt, it.debounceDelay, !0)),
                        et)
            );
        },
        refresh: rt,
        refreshHard: st,
    };
}),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.Glide = e());
    })(this, function () {
        "use strict";
        var t = {
            type: "slider",
            startAt: 0,
            perView: 1,
            focusAt: 0,
            gap: 10,
            autoplay: !1,
            hoverpause: !0,
            keyboard: !0,
            bound: !1,
            swipeThreshold: 80,
            dragThreshold: 120,
            perTouch: !1,
            touchRatio: 0.5,
            touchAngle: 45,
            animationDuration: 400,
            rewind: !0,
            rewindDuration: 800,
            animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
            throttle: 10,
            direction: "ltr",
            peek: 0,
            breakpoints: {},
            classes: {
                direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
                slider: "glide--slider",
                carousel: "glide--carousel",
                swipeable: "glide--swipeable",
                dragging: "glide--dragging",
                cloneSlide: "glide__slide--clone",
                activeNav: "glide__bullet--active",
                activeSlide: "glide__slide--active",
                disabledArrow: "glide__arrow--disabled",
            },
        };
        function e(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                },
            i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t;
            };
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        var r =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
                return t;
            };
        function s(t) {
            return parseInt(t);
        }
        function a(t) {
            return "string" == typeof t;
        }
        function c(t) {
            var e = void 0 === t ? "undefined" : n(t);
            return "function" === e || ("object" === e && !!t);
        }
        function u(t) {
            return "function" == typeof t;
        }
        function l(t) {
            return void 0 === t;
        }
        function d(t) {
            return t.constructor === Array;
        }
        function f(t, e, n) {
            Object.defineProperty(t, e, n);
        }
        function m(t, e) {
            var n = r({}, t, e);
            return (
                e.hasOwnProperty("classes") && ((n.classes = r({}, t.classes, e.classes)), e.classes.hasOwnProperty("direction") && (n.classes.direction = r({}, t.classes.direction, e.classes.direction))),
                e.hasOwnProperty("breakpoints") && (n.breakpoints = r({}, t.breakpoints, e.breakpoints)),
                n
            );
        }
        var v =
            (i(p, [
                {
                    key: "on",
                    value: function (t, e) {
                        if (d(t)) for (var n = 0; n < t.length; n++) this.on(t[n], e);
                        this.hop.call(this.events, t) || (this.events[t] = []);
                        var i = this.events[t].push(e) - 1;
                        return {
                            remove: function () {
                                delete this.events[t][i];
                            },
                        };
                    },
                },
                {
                    key: "emit",
                    value: function (t, e) {
                        if (d(t)) for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                        this.hop.call(this.events, t) &&
                            this.events[t].forEach(function (t) {
                                t(e || {});
                            });
                    },
                },
            ]),
                p);
        function p() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            e(this, p), (this.events = t), (this.hop = t.hasOwnProperty);
        }
        var h =
            (i(g, [
                {
                    key: "mount",
                    value: function (t) {
                        var e = 0 < arguments.length && void 0 !== t ? t : {};
                        return (
                            this._e.emit("mount.before"),
                            c(e) &&
                            (this._c = (function (t, e, n) {
                                var i = {};
                                for (var o in e) u(e[o]) && (i[o] = e[o](t, i, n));
                                for (var r in i) u(i[r].mount) && i[r].mount();
                                return i;
                            })(this, e, this._e)),
                            this._e.emit("mount.after"),
                            this
                        );
                    },
                },
                {
                    key: "mutate",
                    value: function (t) {
                        var e = 0 < arguments.length && void 0 !== t ? t : [];
                        return d(e) && (this._t = e), this;
                    },
                },
                {
                    key: "update",
                    value: function (t) {
                        var e = 0 < arguments.length && void 0 !== t ? t : {};
                        return (this.settings = m(this.settings, e)), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this;
                    },
                },
                {
                    key: "go",
                    value: function (t) {
                        return this._c.Run.make(t), this;
                    },
                },
                {
                    key: "move",
                    value: function (t) {
                        return this._c.Transition.disable(), this._c.Move.make(t), this;
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        return this._e.emit("destroy"), this;
                    },
                },
                {
                    key: "play",
                    value: function (t) {
                        var e = 0 < arguments.length && void 0 !== t && t;
                        return e && (this.settings.autoplay = e), this._e.emit("play"), this;
                    },
                },
                {
                    key: "pause",
                    value: function () {
                        return this._e.emit("pause"), this;
                    },
                },
                {
                    key: "disable",
                    value: function () {
                        return (this.disabled = !0), this;
                    },
                },
                {
                    key: "enable",
                    value: function () {
                        return (this.disabled = !1), this;
                    },
                },
                {
                    key: "on",
                    value: function (t, e) {
                        return this._e.on(t, e), this;
                    },
                },
                {
                    key: "isType",
                    value: function (t) {
                        return this.settings.type === t;
                    },
                },
                {
                    key: "settings",
                    get: function () {
                        return this._o;
                    },
                    set: function (t) {
                        c(t) && (this._o = t);
                    },
                },
                {
                    key: "index",
                    get: function () {
                        return this._i;
                    },
                    set: function (t) {
                        this._i = s(t);
                    },
                },
                {
                    key: "type",
                    get: function () {
                        return this.settings.type;
                    },
                },
                {
                    key: "disabled",
                    get: function () {
                        return this._d;
                    },
                    set: function (t) {
                        this._d = !!t;
                    },
                },
            ]),
                g);
        function g(n) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            e(this, g), (this._c = {}), (this._t = []), (this._e = new v()), (this.disabled = !1), (this.selector = n), (this.settings = m(t, i)), (this.index = this.settings.startAt);
        }
        function b() {
            return new Date().getTime();
        }
        function y(t, e, n) {
            var i = void 0,
                o = void 0,
                r = void 0,
                s = void 0,
                a = 0;
            function c() {
                (a = !1 === n.leading ? 0 : b()), (i = null), (s = t.apply(o, r)), i || (o = r = null);
            }
            function u() {
                var u = b();
                a || !1 !== n.leading || (a = u);
                var l = e - (u - a);
                return (o = this), (r = arguments), l <= 0 || e < l ? (i && (clearTimeout(i), (i = null)), (a = u), (s = t.apply(o, r)), i || (o = r = null)) : i || !1 === n.trailing || (i = setTimeout(c, l)), s;
            }
            return (
                (n = n || {}),
                (u.cancel = function () {
                    clearTimeout(i), (a = 0), (i = o = r = null);
                }),
                u
            );
        }
        var w = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] };
        function _(t) {
            if (t && t.parentNode) {
                for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }
            return [];
        }
        function k(t) {
            return !!(t && t instanceof window.HTMLElement);
        }
        var S =
            (i(L, [
                {
                    key: "on",
                    value: function (t, e, n, i) {
                        var o = 3 < arguments.length && void 0 !== i && i;
                        a(t) && (t = [t]);
                        for (var r = 0; r < t.length; r++) (this.listeners[t[r]] = n), e.addEventListener(t[r], this.listeners[t[r]], o);
                    },
                },
                {
                    key: "off",
                    value: function (t, e, n) {
                        var i = 2 < arguments.length && void 0 !== n && n;
                        a(t) && (t = [t]);
                        for (var o = 0; o < t.length; o++) e.removeEventListener(t[o], this.listeners[t[o]], i);
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        delete this.listeners;
                    },
                },
            ]),
                L);
        function L() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            e(this, L), (this.listeners = t);
        }
        var x = ["ltr", "rtl"],
            O = { ">": "<", "<": ">", "=": "=" };
        function E(t, e) {
            return {
                modify: function (t) {
                    return e.Direction.is("rtl") ? -t : t;
                },
            };
        }
        function T(t, e, n) {
            var i = [
                function (t, e) {
                    return {
                        modify: function (n) {
                            return n + e.Gaps.value * t.index;
                        },
                    };
                },
                function (t, e) {
                    return {
                        modify: function (t) {
                            return t + e.Clones.grow / 2;
                        },
                    };
                },
                function (t, e) {
                    return {
                        modify: function (n) {
                            if (0 <= t.settings.focusAt) {
                                var i = e.Peek.value;
                                return c(i) ? n - i.before : n - i;
                            }
                            return n;
                        },
                    };
                },
                function (t, e) {
                    return {
                        modify: function (n) {
                            var i = e.Gaps.value,
                                o = e.Sizes.width,
                                r = t.settings.focusAt,
                                s = e.Sizes.slideWidth;
                            return "center" === r ? n - (o / 2 - s / 2) : n - s * r - i * r;
                        },
                    };
                },
            ].concat(t._t, [E]);
            return {
                mutate: function (o) {
                    for (var r = 0; r < i.length; r++) {
                        var s = i[r];
                        u(s) && u(s().modify) && (o = s(t, e, n).modify(o));
                    }
                    return o;
                },
            };
        }
        var A = !1;
        try {
            var q = Object.defineProperty({}, "passive", {
                get: function () {
                    A = !0;
                },
            });
            window.addEventListener("testPassive", null, q), window.removeEventListener("testPassive", null, q);
        } catch (i) { }
        var H = A,
            C = ["touchstart", "mousedown"],
            j = ["touchmove", "mousemove"],
            M = ["touchend", "touchcancel", "mouseup", "mouseleave"],
            z = ["mousedown", "mousemove", "mouseup", "mouseleave"];
        function N(t) {
            return c(t)
                ? ((e = t),
                    Object.keys(e)
                        .sort()
                        .reduce(function (t, n) {
                            return (t[n] = e[n]), t[n], t;
                        }, {}))
                : {};
            var e;
        }
        var D = {
            Html: function (t, e) {
                var n = {
                    mount: function () {
                        (this.root = t.selector),
                            (this.track = this.root.querySelector('[data-glide-el="track"]')),
                            (this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (e) {
                                return !e.classList.contains(t.settings.classes.cloneSlide);
                            }));
                    },
                };
                return (
                    f(n, "root", {
                        get: function () {
                            return n._r;
                        },
                        set: function (t) {
                            a(t) && (t = document.querySelector(t)), k(t) && (n._r = t);
                        },
                    }),
                    f(n, "track", {
                        get: function () {
                            return n._t;
                        },
                        set: function (t) {
                            k(t) && (n._t = t);
                        },
                    }),
                    f(n, "wrapper", {
                        get: function () {
                            return n.track.children[0];
                        },
                    }),
                    n
                );
            },
            Translate: function (t, e, n) {
                var i = {
                    set: function (n) {
                        var i = T(t, e).mutate(n);
                        e.Html.wrapper.style.transform = "translate3d(" + -1 * i + "px, 0px, 0px)";
                    },
                    remove: function () {
                        e.Html.wrapper.style.transform = "";
                    },
                };
                return (
                    n.on("move", function (o) {
                        var r = e.Gaps.value,
                            s = e.Sizes.length,
                            a = e.Sizes.slideWidth;
                        return t.isType("carousel") && e.Run.isOffset("<")
                            ? (e.Transition.after(function () {
                                n.emit("translate.jump"), i.set(a * (s - 1));
                            }),
                                i.set(-a - r * s))
                            : t.isType("carousel") && e.Run.isOffset(">")
                                ? (e.Transition.after(function () {
                                    n.emit("translate.jump"), i.set(0);
                                }),
                                    i.set(a * s + r * s))
                                : i.set(o.movement);
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Transition: function (t, e, n) {
                var i = !1,
                    o = {
                        compose: function (e) {
                            var n = t.settings;
                            return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc;
                        },
                        set: function (t) {
                            var n = 0 < arguments.length && void 0 !== t ? t : "transform";
                            e.Html.wrapper.style.transition = this.compose(n);
                        },
                        remove: function () {
                            e.Html.wrapper.style.transition = "";
                        },
                        after: function (t) {
                            setTimeout(function () {
                                t();
                            }, this.duration);
                        },
                        enable: function () {
                            (i = !1), this.set();
                        },
                        disable: function () {
                            (i = !0), this.set();
                        },
                    };
                return (
                    f(o, "duration", {
                        get: function () {
                            var n = t.settings;
                            return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration;
                        },
                    }),
                    n.on("move", function () {
                        o.set();
                    }),
                    n.on(["build.before", "resize", "translate.jump"], function () {
                        o.disable();
                    }),
                    n.on("run", function () {
                        o.enable();
                    }),
                    n.on("destroy", function () {
                        o.remove();
                    }),
                    o
                );
            },
            Direction: function (t, e, n) {
                var i = {
                    mount: function () {
                        this.value = t.settings.direction;
                    },
                    resolve: function (t) {
                        var e = t.slice(0, 1);
                        return this.is("rtl") ? t.split(e).join(O[e]) : t;
                    },
                    is: function (t) {
                        return this.value === t;
                    },
                    addClass: function () {
                        e.Html.root.classList.add(t.settings.classes.direction[this.value]);
                    },
                    removeClass: function () {
                        e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
                    },
                };
                return (
                    f(i, "value", {
                        get: function () {
                            return i._v;
                        },
                        set: function (t) {
                            -1 < x.indexOf(t) && (i._v = t);
                        },
                    }),
                    n.on(["destroy", "update"], function () {
                        i.removeClass();
                    }),
                    n.on("update", function () {
                        i.mount();
                    }),
                    n.on(["build.before", "update"], function () {
                        i.addClass();
                    }),
                    i
                );
            },
            Peek: function (t, e, n) {
                var i = {
                    mount: function () {
                        this.value = t.settings.peek;
                    },
                };
                return (
                    f(i, "value", {
                        get: function () {
                            return i._v;
                        },
                        set: function (t) {
                            c(t) ? ((t.before = s(t.before)), (t.after = s(t.after))) : (t = s(t)), (i._v = t);
                        },
                    }),
                    f(i, "reductor", {
                        get: function () {
                            var e = i.value,
                                n = t.settings.perView;
                            return c(e) ? e.before / n + e.after / n : (2 * e) / n;
                        },
                    }),
                    n.on(["resize", "update"], function () {
                        i.mount();
                    }),
                    i
                );
            },
            Sizes: function (t, e, n) {
                var i = {
                    setupSlides: function () {
                        for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++) n[i].style.width = t;
                    },
                    setupWrapper: function (t) {
                        e.Html.wrapper.style.width = this.wrapperSize + "px";
                    },
                    remove: function () {
                        for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = "";
                        e.Html.wrapper.style.width = "";
                    },
                };
                return (
                    f(i, "length", {
                        get: function () {
                            return e.Html.slides.length;
                        },
                    }),
                    f(i, "width", {
                        get: function () {
                            return e.Html.root.offsetWidth;
                        },
                    }),
                    f(i, "wrapperSize", {
                        get: function () {
                            return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow;
                        },
                    }),
                    f(i, "slideWidth", {
                        get: function () {
                            return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor;
                        },
                    }),
                    n.on(["build.before", "resize", "update"], function () {
                        i.setupSlides(), i.setupWrapper();
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Gaps: function (t, e, n) {
                var i = {
                    apply: function (t) {
                        for (var n = 0, i = t.length; n < i; n++) {
                            var o = t[n].style,
                                r = e.Direction.value;
                            (o[w[r][0]] = 0 !== n ? this.value / 2 + "px" : ""), n !== t.length - 1 ? (o[w[r][1]] = this.value / 2 + "px") : (o[w[r][1]] = "");
                        }
                    },
                    remove: function (t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e].style;
                            (i.marginLeft = ""), (i.marginRight = "");
                        }
                    },
                };
                return (
                    f(i, "value", {
                        get: function () {
                            return s(t.settings.gap);
                        },
                    }),
                    f(i, "grow", {
                        get: function () {
                            return i.value * (e.Sizes.length - 1);
                        },
                    }),
                    f(i, "reductor", {
                        get: function () {
                            var e = t.settings.perView;
                            return (i.value * (e - 1)) / e;
                        },
                    }),
                    n.on(
                        ["build.after", "update"],
                        y(function () {
                            i.apply(e.Html.wrapper.children);
                        }, 30)
                    ),
                    n.on("destroy", function () {
                        i.remove(e.Html.wrapper.children);
                    }),
                    i
                );
            },
            Move: function (t, e, n) {
                var i = {
                    mount: function () {
                        this._o = 0;
                    },
                    make: function (t) {
                        var i = this,
                            o = 0 < arguments.length && void 0 !== t ? t : 0;
                        (this.offset = o),
                            n.emit("move", { movement: this.value }),
                            e.Transition.after(function () {
                                n.emit("move.after", { movement: i.value });
                            });
                    },
                };
                return (
                    f(i, "offset", {
                        get: function () {
                            return i._o;
                        },
                        set: function (t) {
                            i._o = l(t) ? 0 : s(t);
                        },
                    }),
                    f(i, "translate", {
                        get: function () {
                            return e.Sizes.slideWidth * t.index;
                        },
                    }),
                    f(i, "value", {
                        get: function () {
                            var t = this.offset,
                                n = this.translate;
                            return e.Direction.is("rtl") ? n + t : n - t;
                        },
                    }),
                    n.on(["build.before", "run"], function () {
                        i.make();
                    }),
                    i
                );
            },
            Clones: function (t, e, n) {
                var i = {
                    mount: function () {
                        (this.items = []), t.isType("carousel") && (this.items = this.collect());
                    },
                    collect: function (n) {
                        for (
                            var i = 0 < arguments.length && void 0 !== n ? n : [], o = e.Html.slides, r = t.settings, s = r.perView, a = r.classes, c = s + +!!t.settings.peek, u = o.slice(0, c), l = o.slice(-c), d = 0;
                            d < Math.max(1, Math.floor(s / o.length));
                            d++
                        ) {
                            for (var f = 0; f < u.length; f++) {
                                var m = u[f].cloneNode(!0);
                                m.classList.add(a.cloneSlide), i.push(m);
                            }
                            for (var v = 0; v < l.length; v++) {
                                var p = l[v].cloneNode(!0);
                                p.classList.add(a.cloneSlide), i.unshift(p);
                            }
                        }
                        return i;
                    },
                    append: function () {
                        for (var t = this.items, n = e.Html, i = n.wrapper, o = n.slides, r = Math.floor(t.length / 2), s = t.slice(0, r).reverse(), a = t.slice(r, t.length), c = e.Sizes.slideWidth + "px", u = 0; u < a.length; u++)
                            i.appendChild(a[u]);
                        for (var l = 0; l < s.length; l++) i.insertBefore(s[l], o[0]);
                        for (var d = 0; d < t.length; d++) t[d].style.width = c;
                    },
                    remove: function () {
                        for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n]);
                    },
                };
                return (
                    f(i, "grow", {
                        get: function () {
                            return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length;
                        },
                    }),
                    n.on("update", function () {
                        i.remove(), i.mount(), i.append();
                    }),
                    n.on("build.before", function () {
                        t.isType("carousel") && i.append();
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Resize: function (t, e, n) {
                var i = new S(),
                    o = {
                        mount: function () {
                            this.bind();
                        },
                        bind: function () {
                            i.on(
                                "resize",
                                window,
                                y(function () {
                                    n.emit("resize");
                                }, t.settings.throttle)
                            );
                        },
                        unbind: function () {
                            i.off("resize", window);
                        },
                    };
                return (
                    n.on("destroy", function () {
                        o.unbind(), i.destroy();
                    }),
                    o
                );
            },
            Build: function (t, e, n) {
                var i = {
                    mount: function () {
                        n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after");
                    },
                    typeClass: function () {
                        e.Html.root.classList.add(t.settings.classes[t.settings.type]);
                    },
                    activeClass: function () {
                        var n = t.settings.classes,
                            i = e.Html.slides[t.index];
                        i &&
                            (i.classList.add(n.activeSlide),
                                _(i).forEach(function (t) {
                                    t.classList.remove(n.activeSlide);
                                }));
                    },
                    removeClasses: function () {
                        var n = t.settings.classes;
                        e.Html.root.classList.remove(n[t.settings.type]),
                            e.Html.slides.forEach(function (t) {
                                t.classList.remove(n.activeSlide);
                            });
                    },
                };
                return (
                    n.on(["destroy", "update"], function () {
                        i.removeClasses();
                    }),
                    n.on(["resize", "update"], function () {
                        i.mount();
                    }),
                    n.on("move.after", function () {
                        i.activeClass();
                    }),
                    i
                );
            },
            Run: function (t, e, n) {
                var i = {
                    mount: function () {
                        this._o = !1;
                    },
                    make: function (i) {
                        var o = this;
                        t.disabled ||
                            (t.disable(),
                                (this.move = i),
                                n.emit("run.before", this.move),
                                this.calculate(),
                                n.emit("run", this.move),
                                e.Transition.after(function () {
                                    o.isStart() && n.emit("run.start", o.move),
                                        o.isEnd() && n.emit("run.end", o.move),
                                        (o.isOffset("<") || o.isOffset(">")) && ((o._o = !1), n.emit("run.offset", o.move)),
                                        n.emit("run.after", o.move),
                                        t.enable();
                                }));
                    },
                    calculate: function () {
                        var e = this.move,
                            n = this.length,
                            i = e.steps,
                            o = e.direction,
                            r = "number" == typeof s(i) && 0 !== s(i);
                        switch (o) {
                            case ">":
                                ">" === i ? (t.index = n) : this.isEnd() ? (t.isType("slider") && !t.settings.rewind) || ((this._o = !0), (t.index = 0)) : r ? (t.index += Math.min(n - t.index, -s(i))) : t.index++;
                                break;
                            case "<":
                                "<" === i ? (t.index = 0) : this.isStart() ? (t.isType("slider") && !t.settings.rewind) || ((this._o = !0), (t.index = n)) : r ? (t.index -= Math.min(t.index, s(i))) : t.index--;
                                break;
                            case "=":
                                t.index = i;
                        }
                    },
                    isStart: function () {
                        return 0 === t.index;
                    },
                    isEnd: function () {
                        return t.index === this.length;
                    },
                    isOffset: function (t) {
                        return this._o && this.move.direction === t;
                    },
                };
                return (
                    f(i, "move", {
                        get: function () {
                            return this._m;
                        },
                        set: function (t) {
                            var e = t.substr(1);
                            this._m = { direction: t.substr(0, 1), steps: e ? (s(e) ? s(e) : e) : 0 };
                        },
                    }),
                    f(i, "length", {
                        get: function () {
                            var n = t.settings,
                                i = e.Html.slides.length;
                            return t.isType("slider") && "center" !== n.focusAt && n.bound ? i - 1 - (s(n.perView) - 1) + s(n.focusAt) : i - 1;
                        },
                    }),
                    f(i, "offset", {
                        get: function () {
                            return this._o;
                        },
                    }),
                    i
                );
            },
            Swipe: function (t, e, n) {
                var i = new S(),
                    o = 0,
                    r = 0,
                    a = 0,
                    c = !1,
                    u = !!H && { passive: !0 },
                    l = {
                        mount: function () {
                            this.bindSwipeStart();
                        },
                        start: function (e) {
                            if (!c && !t.disabled) {
                                this.disable();
                                var i = this.touches(e);
                                (o = null), (r = s(i.pageX)), (a = s(i.pageY)), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start");
                            }
                        },
                        move: function (i) {
                            if (!t.disabled) {
                                var c = t.settings,
                                    u = c.touchAngle,
                                    l = c.touchRatio,
                                    d = c.classes,
                                    f = this.touches(i),
                                    m = s(f.pageX) - r,
                                    v = s(f.pageY) - a,
                                    p = Math.abs(m << 2),
                                    h = Math.abs(v << 2),
                                    g = Math.sqrt(p + h),
                                    b = Math.sqrt(h);
                                if (!((180 * (o = Math.asin(b / g))) / Math.PI < u)) return !1;
                                i.stopPropagation(), e.Move.make(m * parseFloat(l)), e.Html.root.classList.add(d.dragging), n.emit("swipe.move");
                            }
                        },
                        end: function (i) {
                            if (!t.disabled) {
                                var a = t.settings,
                                    c = this.touches(i),
                                    u = this.threshold(i),
                                    l = c.pageX - r,
                                    d = (180 * o) / Math.PI,
                                    f = Math.round(l / e.Sizes.slideWidth);
                                this.enable(),
                                    u < l && d < a.touchAngle
                                        ? (a.perTouch && (f = Math.min(f, s(a.perTouch))), e.Direction.is("rtl") && (f = -f), e.Run.make(e.Direction.resolve("<" + f)))
                                        : l < -u && d < a.touchAngle
                                            ? (a.perTouch && (f = Math.max(f, -s(a.perTouch))), e.Direction.is("rtl") && (f = -f), e.Run.make(e.Direction.resolve(">" + f)))
                                            : e.Move.make(),
                                    e.Html.root.classList.remove(a.classes.dragging),
                                    this.unbindSwipeMove(),
                                    this.unbindSwipeEnd(),
                                    n.emit("swipe.end");
                            }
                        },
                        bindSwipeStart: function () {
                            var n = this,
                                o = t.settings;
                            o.swipeThreshold &&
                                i.on(
                                    C[0],
                                    e.Html.wrapper,
                                    function (t) {
                                        n.start(t);
                                    },
                                    u
                                ),
                                o.dragThreshold &&
                                i.on(
                                    C[1],
                                    e.Html.wrapper,
                                    function (t) {
                                        n.start(t);
                                    },
                                    u
                                );
                        },
                        unbindSwipeStart: function () {
                            i.off(C[0], e.Html.wrapper, u), i.off(C[1], e.Html.wrapper, u);
                        },
                        bindSwipeMove: function () {
                            var n = this;
                            i.on(
                                j,
                                e.Html.wrapper,
                                y(function (t) {
                                    n.move(t);
                                }, t.settings.throttle),
                                u
                            );
                        },
                        unbindSwipeMove: function () {
                            i.off(j, e.Html.wrapper, u);
                        },
                        bindSwipeEnd: function () {
                            var t = this;
                            i.on(M, e.Html.wrapper, function (e) {
                                t.end(e);
                            });
                        },
                        unbindSwipeEnd: function () {
                            i.off(M, e.Html.wrapper);
                        },
                        touches: function (t) {
                            return -1 < z.indexOf(t.type) ? t : t.touches[0] || t.changedTouches[0];
                        },
                        threshold: function (e) {
                            var n = t.settings;
                            return -1 < z.indexOf(e.type) ? n.dragThreshold : n.swipeThreshold;
                        },
                        enable: function () {
                            return (c = !1), e.Transition.enable(), this;
                        },
                        disable: function () {
                            return (c = !0), e.Transition.disable(), this;
                        },
                    };
                return (
                    n.on("build.after", function () {
                        e.Html.root.classList.add(t.settings.classes.swipeable);
                    }),
                    n.on("destroy", function () {
                        l.unbindSwipeStart(), l.unbindSwipeMove(), l.unbindSwipeEnd(), i.destroy();
                    }),
                    l
                );
            },
            Images: function (t, e, n) {
                var i = new S(),
                    o = {
                        mount: function () {
                            this.bind();
                        },
                        bind: function () {
                            i.on("dragstart", e.Html.wrapper, this.dragstart);
                        },
                        unbind: function () {
                            i.off("dragstart", e.Html.wrapper);
                        },
                        dragstart: function (t) {
                            t.preventDefault();
                        },
                    };
                return (
                    n.on("destroy", function () {
                        o.unbind(), i.destroy();
                    }),
                    o
                );
            },
            Anchors: function (t, e, n) {
                var i = new S(),
                    o = !1,
                    r = !1,
                    s = {
                        mount: function () {
                            (this._a = e.Html.wrapper.querySelectorAll("a")), this.bind();
                        },
                        bind: function () {
                            i.on("click", e.Html.wrapper, this.click);
                        },
                        unbind: function () {
                            i.off("click", e.Html.wrapper);
                        },
                        click: function (t) {
                            r && (t.stopPropagation(), t.preventDefault());
                        },
                        detach: function () {
                            if (((r = !0), !o)) {
                                for (var t = 0; t < this.items.length; t++) (this.items[t].draggable = !1), this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href");
                                o = !0;
                            }
                            return this;
                        },
                        attach: function () {
                            if (((r = !1), o)) {
                                for (var t = 0; t < this.items.length; t++) (this.items[t].draggable = !0), this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                                o = !1;
                            }
                            return this;
                        },
                    };
                return (
                    f(s, "items", {
                        get: function () {
                            return s._a;
                        },
                    }),
                    n.on("swipe.move", function () {
                        s.detach();
                    }),
                    n.on("swipe.end", function () {
                        e.Transition.after(function () {
                            s.attach();
                        });
                    }),
                    n.on("destroy", function () {
                        s.attach(), s.unbind(), i.destroy();
                    }),
                    s
                );
            },
            Controls: function (t, e, n) {
                var i = new S(),
                    o = !!H && { passive: !0 },
                    r = {
                        mount: function () {
                            (this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]')), (this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]')), this.addBindings();
                        },
                        setActive: function () {
                            for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children);
                        },
                        removeActive: function () {
                            for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children);
                        },
                        addClass: function (e) {
                            var n = t.settings,
                                i = e[t.index];
                            i &&
                                (i.classList.add(n.classes.activeNav),
                                    _(i).forEach(function (t) {
                                        t.classList.remove(n.classes.activeNav);
                                    }));
                        },
                        removeClass: function (e) {
                            var n = e[t.index];
                            n && n.classList.remove(t.settings.classes.activeNav);
                        },
                        addBindings: function () {
                            for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children);
                        },
                        removeBindings: function () {
                            for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children);
                        },
                        bind: function (t) {
                            for (var e = 0; e < t.length; e++) i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, o);
                        },
                        unbind: function (t) {
                            for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e]);
                        },
                        click: function (t) {
                            t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")));
                        },
                    };
                return (
                    f(r, "items", {
                        get: function () {
                            return r._c;
                        },
                    }),
                    n.on(["mount.after", "move.after"], function () {
                        r.setActive();
                    }),
                    n.on("destroy", function () {
                        r.removeBindings(), r.removeActive(), i.destroy();
                    }),
                    r
                );
            },
            Keyboard: function (t, e, n) {
                var i = new S(),
                    o = {
                        mount: function () {
                            t.settings.keyboard && this.bind();
                        },
                        bind: function () {
                            i.on("keyup", document, this.press);
                        },
                        unbind: function () {
                            i.off("keyup", document);
                        },
                        press: function (t) {
                            39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<"));
                        },
                    };
                return (
                    n.on(["destroy", "update"], function () {
                        o.unbind();
                    }),
                    n.on("update", function () {
                        o.mount();
                    }),
                    n.on("destroy", function () {
                        i.destroy();
                    }),
                    o
                );
            },
            Autoplay: function (t, e, n) {
                var i = new S(),
                    o = {
                        mount: function () {
                            this.start(), t.settings.hoverpause && this.bind();
                        },
                        start: function () {
                            var n = this;
                            t.settings.autoplay &&
                                l(this._i) &&
                                (this._i = setInterval(function () {
                                    n.stop(), e.Run.make(">"), n.start();
                                }, this.time));
                        },
                        stop: function () {
                            this._i = clearInterval(this._i);
                        },
                        bind: function () {
                            var t = this;
                            i.on("mouseover", e.Html.root, function () {
                                t.stop();
                            }),
                                i.on("mouseout", e.Html.root, function () {
                                    t.start();
                                });
                        },
                        unbind: function () {
                            i.off(["mouseover", "mouseout"], e.Html.root);
                        },
                    };
                return (
                    f(o, "time", {
                        get: function () {
                            return s(e.Html.slides[t.index].getAttribute("data-glide-autoplay") || t.settings.autoplay);
                        },
                    }),
                    n.on(["destroy", "update"], function () {
                        o.unbind();
                    }),
                    n.on(["run.before", "pause", "destroy", "swipe.start", "update"], function () {
                        o.stop();
                    }),
                    n.on(["run.after", "play", "swipe.end"], function () {
                        o.start();
                    }),
                    n.on("update", function () {
                        o.mount();
                    }),
                    n.on("destroy", function () {
                        i.destroy();
                    }),
                    o
                );
            },
            Breakpoints: function (t, e, n) {
                var i = new S(),
                    o = t.settings,
                    s = N(o.breakpoints),
                    a = r({}, o),
                    c = {
                        match: function (t) {
                            if (void 0 !== window.matchMedia) for (var e in t) if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e];
                            return a;
                        },
                    };
                return (
                    r(o, c.match(s)),
                    i.on(
                        "resize",
                        window,
                        y(function () {
                            t.settings = m(o, c.match(s));
                        }, t.settings.throttle)
                    ),
                    n.on("update", function () {
                        (s = N(s)), (a = r({}, o));
                    }),
                    n.on("destroy", function () {
                        i.off("resize", window);
                    }),
                    c
                );
            },
        };
        function I() {
            return (
                e(this, I),
                (function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
                })(this, (I.__proto__ || Object.getPrototypeOf(I)).apply(this, arguments))
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
            })(I, h),
            i(I, [
                {
                    key: "mount",
                    value: function (t) {
                        var e = 0 < arguments.length && void 0 !== t ? t : {};
                        return (function t(e, n, i) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                                var r = Object.getPrototypeOf(e);
                                return null === r ? void 0 : t(r, n, i);
                            }
                            if ("value" in o) return o.value;
                            var s = o.get;
                            return void 0 !== s ? s.call(i) : void 0;
                        })(I.prototype.__proto__ || Object.getPrototypeOf(I.prototype), "mount", this).call(this, r({}, D, e));
                    },
                },
            ]),
            I
        );
    });
class TabList {
    constructor(t, e) {
        (this.buttonsContainer = t),
            (this.tabs = e),
            this.buttonsContainer.addEventListener("click", (t) => {
                if (t.target.closest(".tab")) {
                    const e = t.target.closest(".tab").dataset.value;
                    this.openTab(e);
                }
            });
    }
    openTab(t) {
        this.buttonsContainer.querySelector(".tab_active").classList.remove("tab_active"),
            this.buttonsContainer.querySelector(`.tab--${t}`).classList.add("tab_active"),
            this.tabs.querySelector(".tabContent_active").classList.remove("tabContent_active"),
            this.tabs.querySelector(`.tabContent--${t}`).classList.add("tabContent_active");
    }
}
function playVideo() {
    document.querySelector(".banner__videoBg").play();
}
document.addEventListener("DOMContentLoaded", () => {
    const t = document.querySelector(".preloader");
    if (-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome")) (t.style.display = "none"), playVideo(), AOS.init();
    else {
        const e = bodymovin.loadAnimation({ container: document.getElementById("bm"), renderer: "svg", loop: !1, autoplay: !0, path: "../data.json", rendererSettings: { preserveAspectRatio: "xMidYMid slice" } });
        e.addEventListener("complete", () => {
            t.classList.add("preloader_hidden"), e.destroy(), (t.style.display = "none"), playVideo(), AOS.init();
        });
    }
    let e = document.querySelector(".header"),
        n = e.offsetTop;
    const i = document.querySelector(".services__tabs"),
        o = document.querySelector(".services__tabsContentWrap"),
        r = document.querySelector(".cases__tabs"),
        s = document.querySelector(".cases__tabsContentWrap");
    let a = document.querySelectorAll(".contact__fileInput");
    document.querySelector(".contact__fileInput");
    const c = document.querySelector(".contact__deleteFileBtn"),
        u = document.querySelector(".header__burgerBtn"),
        l = document.querySelector(".mobileMenu__closeBtn"),
        d = document.querySelector(".mobileMenu"),
        f = document.getElementById("contactUs"),
        m = document.querySelector(".successSend__closeBtn"),
        v = document.querySelector(".successSend");
    f.addEventListener("submit", async function (t) {
        t.preventDefault();

        const e = document.querySelector("#name").value || "",
            n = document.querySelector("#email").value || "",
            i = document.querySelector("#comment").value || "",
            o = JSON.stringify({ comment: i, email: n, name: e });
        let messageFormData = new FormData();
        messageFormData.append('name', e);
        messageFormData.append('email', n);
        messageFormData.append('message', i);
        try {
            const t = await fetch(
                "https://script.google.com/macros/s/AKfycbw4eWVM2nSmJz7FUnLCUdKDC8mKJNCRpGSAC1P2/exec",
                {
                    method: "POST",
                    body: messageFormData,
                    // headers: { "Content-Type": "application/json" }
                }
            );
            console.log({ res: t }),
                t.ok && (v.classList.add("successSend_show"), f.reset());
        } catch (t) {
            console.log({ error: t });
        }
    }),
        m.addEventListener("click", function (t) {
            v.classList.remove("successSend_show");
        }),
        u.addEventListener("click", function (t) {
            d.classList.contains("mobileMenu_active") ? d.classList.remove("mobileMenu_active") : d.classList.add("mobileMenu_active");
        }),
        l.addEventListener("click", function (t) {
            d.classList.remove("mobileMenu_active");
        }),
        (window.onscroll = function () {
            window.pageYOffset > n ? e.classList.add("header_sticky") : e.classList.remove("header_sticky");
        });
    const p = new Glide(document.querySelector(".clients__carousel"), { type: "carousel", perView: 4, breakpoints: { 1440: { perView: 3 }, 767: { perView: 1 } } }),
        h = document.querySelector(".clients__navBtn_left"),
        g = document.querySelector(".clients__navBtn_right");
    p.mount(),
        h.addEventListener("click", function (t) {
            p.go("<");
        }),
        g.addEventListener("click", function (t) {
            p.go(">");
        });
    const b = document.querySelectorAll(".cases__carousel");
    Object.values(b).map((t) => {
        const e = new Glide(t, { type: "carousel" });
        e.mount();
        const n = t.nextElementSibling,
            i = n.querySelector(".cases__navBtn_left"),
            o = n.querySelector(".cases__navBtn_right"),
            r = n.querySelector(".cases__navItems"),
            s = n.querySelectorAll(".cases__navItem");
        r.addEventListener("click", function (t) {
            let n;
            t.target.closest(".cases__navItem") &&
                ((n = Number(t.target.closest(".cases__navItem").dataset.navIndex)),
                    r.querySelector(".cases__navItem_active").classList.remove("cases__navItem_active"),
                    t.target.closest(".cases__navItem").classList.add("cases__navItem_active"),
                    e.go(`=${n}`));
        }),
            i.addEventListener("click", function (t) {
                e.go("<"), r.querySelector(".cases__navItem_active").classList.remove("cases__navItem_active"), s[e.index].classList.add("cases__navItem_active");
            }),
            o.addEventListener("click", function (t) {
                e.go(">"), r.querySelector(".cases__navItem_active").classList.remove("cases__navItem_active"), s[e.index].classList.add("cases__navItem_active");
            }),
            e.on("swipe.end", () => {
                r.querySelector(".cases__navItem_active").classList.remove("cases__navItem_active"), s[e.index].classList.add("cases__navItem_active");
            }),
            window.addEventListener("resize", () => {
                e.update();
            });
    }),
        new TabList(i, o),
        new TabList(r, s);
    const y = (t, e) => {
        const n = t.parentNode;
        e ? n.classList.add(`${n.classList[0]}_active`) : (n.classList.remove(`${n.classList[0]}_active`), "" === t.value ? n.classList.remove(`${n.classList[0]}_isFilled`) : n.classList.add(`${n.classList[0]}_isFilled`));
    };
    [].forEach.call(document.querySelectorAll(".contact__input, .contact__textarea"), (t) => {
        (t.onblur = () => {
            y(t, !1);
        }),
            (t.onfocus = () => {
                y(t, !0);
            });
    }),
        Array.prototype.forEach.call(a, function (t) {
            t.nextElementSibling;
            let e = t.nextElementSibling.nextElementSibling;
            e.innerHTML;
            (inputWrap = t.parentNode),
                t.addEventListener("change", function (t) {
                    let n = "";
                    (n = t.target.value.split("\\").pop()) && (inputWrap.classList.add("contact__inputZone_hasFile"), (e.innerHTML = n));
                }),
                c.addEventListener("click", function (n) {
                    (t.value = ""), inputWrap.classList.remove("contact__inputZone_hasFile"), (e.innerHTML = "");
                });
        }),
        document.querySelectorAll('a[href^="#"]').forEach((t) => {
            t.addEventListener("click", function (t) {
                t.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" }), d.classList.contains("mobileMenu_active") && d.classList.remove("mobileMenu_active");
            });
        });
});
