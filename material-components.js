! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.mdc = e() : t.mdc = e()
}(this, function() {
    return i = {}, r.m = n = [function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (Object.defineProperty(r, "cssClasses", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r, "strings", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r, "numbers", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r, "defaultAdapter", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.init = function() {}, r.prototype.destroy = function() {}, r);

        function r(t) {
            void 0 === t && (t = {}), this.adapter_ = t
        }
        e.MDCFoundation = i, e.default = i
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i, r, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || 0 < e--) && !(i = o.next()).done;) s.push(i.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            },
            r = this && this.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(0),
            s = (a.attachTo = function(t) {
                return new a(t, new o.MDCFoundation({}))
            }, a.prototype.initialize = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            }, a.prototype.getDefaultFoundation = function() {
                throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
            }, a.prototype.initialSyncWithDOM = function() {}, a.prototype.destroy = function() {
                this.foundation_.destroy()
            }, a.prototype.listen = function(t, e, n) {
                this.root_.addEventListener(t, e, n)
            }, a.prototype.unlisten = function(t, e, n) {
                this.root_.removeEventListener(t, e, n)
            }, a.prototype.emit = function(t, e, n) {
                var i;
                void 0 === n && (n = !1), "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                    bubbles: n,
                    detail: e
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e), this.root_.dispatchEvent(i)
            }, a);

        function a(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            this.root_ = t, this.initialize.apply(this, r(n)), this.foundation_ = void 0 === e ? this.getDefaultFoundation() : e, this.foundation_.init(), this.initialSyncWithDOM()
        }
        e.MDCComponent = s, e.default = s
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.closest = function(t, e) {
            if (t.closest) return t.closest(e);
            for (var n = t; n;) {
                if (i(n, e)) return n;
                n = n.parentElement
            }
            return null
        }, e.matches = i
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(5),
            u = n(2),
            l = n(4),
            d = o(n(16)),
            p = (s = a.MDCComponent, r(_, s), _.attachTo = function(t, e) {
                void 0 === e && (e = {
                    isUnbounded: void 0
                });
                var n = new _(t);
                return void 0 !== e.isUnbounded && (n.unbounded = e.isUnbounded), n
            }, _.createAdapter = function(n) {
                return {
                    addClass: function(t) {
                        return n.root_.classList.add(t)
                    },
                    browserSupportsCssVars: function() {
                        return d.supportsCssVariables(window)
                    },
                    computeBoundingRect: function() {
                        return n.root_.getBoundingClientRect()
                    },
                    containsEventTarget: function(t) {
                        return n.root_.contains(t)
                    },
                    deregisterDocumentInteractionHandler: function(t, e) {
                        return document.documentElement.removeEventListener(t, e, c.applyPassive())
                    },
                    deregisterInteractionHandler: function(t, e) {
                        return n.root_.removeEventListener(t, e, c.applyPassive())
                    },
                    deregisterResizeHandler: function(t) {
                        return window.removeEventListener("resize", t)
                    },
                    getWindowPageOffset: function() {
                        return {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }
                    },
                    isSurfaceActive: function() {
                        return u.matches(n.root_, ":active")
                    },
                    isSurfaceDisabled: function() {
                        return Boolean(n.disabled)
                    },
                    isUnbounded: function() {
                        return Boolean(n.unbounded)
                    },
                    registerDocumentInteractionHandler: function(t, e) {
                        return document.documentElement.addEventListener(t, e, c.applyPassive())
                    },
                    registerInteractionHandler: function(t, e) {
                        return n.root_.addEventListener(t, e, c.applyPassive())
                    },
                    registerResizeHandler: function(t) {
                        return window.addEventListener("resize", t)
                    },
                    removeClass: function(t) {
                        return n.root_.classList.remove(t)
                    },
                    updateCssVariable: function(t, e) {
                        return n.root_.style.setProperty(t, e)
                    }
                }
            }, Object.defineProperty(_.prototype, "unbounded", {
                get: function() {
                    return Boolean(this.unbounded_)
                },
                set: function(t) {
                    this.unbounded_ = Boolean(t), this.setUnbounded_()
                },
                enumerable: !0,
                configurable: !0
            }), _.prototype.activate = function() {
                this.foundation_.activate()
            }, _.prototype.deactivate = function() {
                this.foundation_.deactivate()
            }, _.prototype.layout = function() {
                this.foundation_.layout()
            }, _.prototype.getDefaultFoundation = function() {
                return new l.MDCRippleFoundation(_.createAdapter(this))
            }, _.prototype.initialSyncWithDOM = function() {
                var t = this.root_;
                this.unbounded = "mdcRippleIsUnbounded" in t.dataset
            }, _.prototype.setUnbounded_ = function() {
                this.foundation_.setUnbounded(Boolean(this.unbounded_))
            }, _);

        function _() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t.disabled = !1, t
        }
        e.MDCRipple = p
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(37),
            u = n(16),
            l = ["touchstart", "pointerdown", "mousedown", "keydown"],
            d = ["touchend", "pointerup", "mouseup", "contextmenu"],
            p = [],
            _ = (s = a.MDCFoundation, r(f, s), Object.defineProperty(f, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        browserSupportsCssVars: function() {
                            return !0
                        },
                        computeBoundingRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        containsEventTarget: function() {
                            return !0
                        },
                        deregisterDocumentInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {},
                        deregisterResizeHandler: function() {},
                        getWindowPageOffset: function() {
                            return {
                                x: 0,
                                y: 0
                            }
                        },
                        isSurfaceActive: function() {
                            return !0
                        },
                        isSurfaceDisabled: function() {
                            return !0
                        },
                        isUnbounded: function() {
                            return !0
                        },
                        registerDocumentInteractionHandler: function() {},
                        registerInteractionHandler: function() {},
                        registerResizeHandler: function() {},
                        removeClass: function() {},
                        updateCssVariable: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), f.prototype.init = function() {
                var t = this,
                    e = this.supportsPressRipple_();
                if (this.registerRootHandlers_(e), e) {
                    var n = f.cssClasses,
                        i = n.ROOT,
                        r = n.UNBOUNDED;
                    requestAnimationFrame(function() {
                        t.adapter_.addClass(i), t.adapter_.isUnbounded() && (t.adapter_.addClass(r), t.layoutInternal_())
                    })
                }
            }, f.prototype.destroy = function() {
                var t = this;
                if (this.supportsPressRipple_()) {
                    this.activationTimer_ && (clearTimeout(this.activationTimer_), this.activationTimer_ = 0, this.adapter_.removeClass(f.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_), this.fgDeactivationRemovalTimer_ = 0, this.adapter_.removeClass(f.cssClasses.FG_DEACTIVATION));
                    var e = f.cssClasses,
                        n = e.ROOT,
                        i = e.UNBOUNDED;
                    requestAnimationFrame(function() {
                        t.adapter_.removeClass(n), t.adapter_.removeClass(i), t.removeCssVars_()
                    })
                }
                this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_()
            }, f.prototype.activate = function(t) {
                this.activate_(t)
            }, f.prototype.deactivate = function() {
                this.deactivate_()
            }, f.prototype.layout = function() {
                var t = this;
                this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
                    t.layoutInternal_(), t.layoutFrame_ = 0
                })
            }, f.prototype.setUnbounded = function(t) {
                var e = f.cssClasses.UNBOUNDED;
                t ? this.adapter_.addClass(e) : this.adapter_.removeClass(e)
            }, f.prototype.handleFocus = function() {
                var t = this;
                requestAnimationFrame(function() {
                    return t.adapter_.addClass(f.cssClasses.BG_FOCUSED)
                })
            }, f.prototype.handleBlur = function() {
                var t = this;
                requestAnimationFrame(function() {
                    return t.adapter_.removeClass(f.cssClasses.BG_FOCUSED)
                })
            }, f.prototype.supportsPressRipple_ = function() {
                return this.adapter_.browserSupportsCssVars()
            }, f.prototype.defaultActivationState_ = function() {
                return {
                    activationEvent: void 0,
                    hasDeactivationUXRun: !1,
                    isActivated: !1,
                    isProgrammatic: !1,
                    wasActivatedByPointer: !1,
                    wasElementMadeActive: !1
                }
            }, f.prototype.registerRootHandlers_ = function(t) {
                var e = this;
                t && (l.forEach(function(t) {
                    e.adapter_.registerInteractionHandler(t, e.activateHandler_)
                }), this.adapter_.isUnbounded() && this.adapter_.registerResizeHandler(this.resizeHandler_)), this.adapter_.registerInteractionHandler("focus", this.focusHandler_), this.adapter_.registerInteractionHandler("blur", this.blurHandler_)
            }, f.prototype.registerDeactivationHandlers_ = function(t) {
                var e = this;
                "keydown" === t.type ? this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_) : d.forEach(function(t) {
                    e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_)
                })
            }, f.prototype.deregisterRootHandlers_ = function() {
                var e = this;
                l.forEach(function(t) {
                    e.adapter_.deregisterInteractionHandler(t, e.activateHandler_)
                }), this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter_.isUnbounded() && this.adapter_.deregisterResizeHandler(this.resizeHandler_)
            }, f.prototype.deregisterDeactivationHandlers_ = function() {
                var e = this;
                this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_), d.forEach(function(t) {
                    e.adapter_.deregisterDocumentInteractionHandler(t, e.deactivateHandler_)
                })
            }, f.prototype.removeCssVars_ = function() {
                var e = this,
                    n = f.strings;
                Object.keys(n).forEach(function(t) {
                    0 === t.indexOf("VAR_") && e.adapter_.updateCssVariable(n[t], null)
                })
            }, f.prototype.activate_ = function(t) {
                var e = this;
                if (!this.adapter_.isSurfaceDisabled()) {
                    var n = this.activationState_;
                    if (!n.isActivated) {
                        var i = this.previousActivationEvent_;
                        i && void 0 !== t && i.type !== t.type || (n.isActivated = !0, n.isProgrammatic = void 0 === t, n.activationEvent = t, n.wasActivatedByPointer = !n.isProgrammatic && void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type), void 0 !== t && 0 < p.length && p.some(function(t) {
                            return e.adapter_.containsEventTarget(t)
                        }) ? this.resetActivationState_() : (void 0 !== t && (p.push(t.target), this.registerDeactivationHandlers_(t)), n.wasElementMadeActive = this.checkElementMadeActive_(t), n.wasElementMadeActive && this.animateActivation_(), requestAnimationFrame(function() {
                            p = [], n.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (n.wasElementMadeActive = e.checkElementMadeActive_(t), n.wasElementMadeActive && e.animateActivation_()), n.wasElementMadeActive || (e.activationState_ = e.defaultActivationState_())
                        })))
                    }
                }
            }, f.prototype.checkElementMadeActive_ = function(t) {
                return void 0 === t || "keydown" !== t.type || this.adapter_.isSurfaceActive()
            }, f.prototype.animateActivation_ = function() {
                var t = this,
                    e = f.strings,
                    n = e.VAR_FG_TRANSLATE_START,
                    i = e.VAR_FG_TRANSLATE_END,
                    r = f.cssClasses,
                    o = r.FG_DEACTIVATION,
                    s = r.FG_ACTIVATION,
                    a = f.numbers.DEACTIVATION_TIMEOUT_MS;
                this.layoutInternal_();
                var c = "",
                    u = "";
                if (!this.adapter_.isUnbounded()) {
                    var l = this.getFgTranslationCoordinates_(),
                        d = l.startPoint,
                        p = l.endPoint;
                    c = d.x + "px, " + d.y + "px", u = p.x + "px, " + p.y + "px"
                }
                this.adapter_.updateCssVariable(n, c), this.adapter_.updateCssVariable(i, u), clearTimeout(this.activationTimer_), clearTimeout(this.fgDeactivationRemovalTimer_), this.rmBoundedActivationClasses_(), this.adapter_.removeClass(o), this.adapter_.computeBoundingRect(), this.adapter_.addClass(s), this.activationTimer_ = setTimeout(function() {
                    return t.activationTimerCallback_()
                }, a)
            }, f.prototype.getFgTranslationCoordinates_ = function() {
                var t, e = this.activationState_,
                    n = e.activationEvent;
                return {
                    startPoint: t = {
                        x: (t = e.wasActivatedByPointer ? u.getNormalizedEventCoords(n, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2
                        }).x - this.initialSize_ / 2,
                        y: t.y - this.initialSize_ / 2
                    },
                    endPoint: {
                        x: this.frame_.width / 2 - this.initialSize_ / 2,
                        y: this.frame_.height / 2 - this.initialSize_ / 2
                    }
                }
            }, f.prototype.runDeactivationUXLogicIfReady_ = function() {
                var t = this,
                    e = f.cssClasses.FG_DEACTIVATION,
                    n = this.activationState_,
                    i = n.hasDeactivationUXRun,
                    r = n.isActivated;
                !i && r || !this.activationAnimationHasEnded_ || (this.rmBoundedActivationClasses_(), this.adapter_.addClass(e), this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                    t.adapter_.removeClass(e)
                }, c.numbers.FG_DEACTIVATION_MS))
            }, f.prototype.rmBoundedActivationClasses_ = function() {
                var t = f.cssClasses.FG_ACTIVATION;
                this.adapter_.removeClass(t), this.activationAnimationHasEnded_ = !1, this.adapter_.computeBoundingRect()
            }, f.prototype.resetActivationState_ = function() {
                var t = this;
                this.previousActivationEvent_ = this.activationState_.activationEvent, this.activationState_ = this.defaultActivationState_(), setTimeout(function() {
                    return t.previousActivationEvent_ = void 0
                }, f.numbers.TAP_DELAY_MS)
            }, f.prototype.deactivate_ = function() {
                var t = this,
                    e = this.activationState_;
                if (e.isActivated) {
                    var n = o({}, e);
                    e.isProgrammatic ? (requestAnimationFrame(function() {
                        return t.animateDeactivation_(n)
                    }), this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(), requestAnimationFrame(function() {
                        t.activationState_.hasDeactivationUXRun = !0, t.animateDeactivation_(n), t.resetActivationState_()
                    }))
                }
            }, f.prototype.animateDeactivation_ = function(t) {
                var e = t.wasActivatedByPointer,
                    n = t.wasElementMadeActive;
                (e || n) && this.runDeactivationUXLogicIfReady_()
            }, f.prototype.layoutInternal_ = function() {
                var t = this;
                this.frame_ = this.adapter_.computeBoundingRect();
                var e = Math.max(this.frame_.height, this.frame_.width);
                this.maxRadius_ = this.adapter_.isUnbounded() ? e : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) + f.numbers.PADDING;
                var n = Math.floor(e * f.numbers.INITIAL_ORIGIN_SCALE);
                this.adapter_.isUnbounded() && n % 2 != 0 ? this.initialSize_ = n - 1 : this.initialSize_ = n, this.fgScale_ = "" + this.maxRadius_ / this.initialSize_, this.updateLayoutCssVars_()
            }, f.prototype.updateLayoutCssVars_ = function() {
                var t = f.strings,
                    e = t.VAR_FG_SIZE,
                    n = t.VAR_LEFT,
                    i = t.VAR_TOP,
                    r = t.VAR_FG_SCALE;
                this.adapter_.updateCssVariable(e, this.initialSize_ + "px"), this.adapter_.updateCssVariable(r, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = {
                    left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                    top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                }, this.adapter_.updateCssVariable(n, this.unboundedCoords_.left + "px"), this.adapter_.updateCssVariable(i, this.unboundedCoords_.top + "px"))
            }, f);

        function f(t) {
            var e = s.call(this, o({}, f.defaultAdapter, t)) || this;
            return e.activationAnimationHasEnded_ = !1, e.activationTimer_ = 0, e.fgDeactivationRemovalTimer_ = 0, e.fgScale_ = "0", e.frame_ = {
                width: 0,
                height: 0
            }, e.initialSize_ = 0, e.layoutFrame_ = 0, e.maxRadius_ = 0, e.unboundedCoords_ = {
                left: 0,
                top: 0
            }, e.activationState_ = e.defaultActivationState_(), e.activationTimerCallback_ = function() {
                e.activationAnimationHasEnded_ = !0, e.runDeactivationUXLogicIfReady_()
            }, e.activateHandler_ = function(t) {
                return e.activate_(t)
            }, e.deactivateHandler_ = function() {
                return e.deactivate_()
            }, e.focusHandler_ = function() {
                return e.handleFocus()
            }, e.blurHandler_ = function() {
                return e.handleBlur()
            }, e.resizeHandler_ = function() {
                return e.layout()
            }, e
        }
        e.MDCRippleFoundation = _, e.default = _
    }, function(t, e, n) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.applyPassive = function(t, e) {
            if (void 0 === t && (t = window), void 0 === e && (e = !1), void 0 === i || e) {
                var n = !1;
                try {
                    t.document.addEventListener("test", function() {}, {get passive() {
                            return n = !0
                        }
                    })
                } catch (t) {}
                i = n
            }
            return !!i && {
                passive: !0
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ANCHOR: "mdc-menu-surface--anchor",
            ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
            ANIMATING_OPEN: "mdc-menu-surface--animating-open",
            FIXED: "mdc-menu-surface--fixed",
            OPEN: "mdc-menu-surface--open",
            ROOT: "mdc-menu-surface"
        };
        var i = {
            CLOSED_EVENT: "MDCMenuSurface:closed",
            OPENED_EVENT: "MDCMenuSurface:opened",
            FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
        };
        e.strings = i;
        var r, o, s, a;
        e.numbers = {
            TRANSITION_OPEN_DURATION: 120,
            TRANSITION_CLOSE_DURATION: 75,
            MARGIN_TO_EDGE: 32,
            ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
        }, (o = r = r || {})[o.BOTTOM = 1] = "BOTTOM", o[o.CENTER = 2] = "CENTER", o[o.RIGHT = 4] = "RIGHT", o[o.FLIP_RTL = 8] = "FLIP_RTL", e.CornerBit = r, (a = s = s || {})[a.TOP_LEFT = 0] = "TOP_LEFT", a[a.TOP_RIGHT = 4] = "TOP_RIGHT", a[a.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", a[a.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", a[a.TOP_START = 8] = "TOP_START", a[a.TOP_END = 12] = "TOP_END", a[a.BOTTOM_START = 9] = "BOTTOM_START", a[a.BOTTOM_END = 13] = "BOTTOM_END", e.Corner = s
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            FIXED_CLASS: "mdc-top-app-bar--fixed",
            FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
            SHORT_CLASS: "mdc-top-app-bar--short",
            SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
            SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
        };
        e.numbers = {
            DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
            MAX_TOP_APP_BAR_HEIGHT: 128
        };
        e.strings = {
            ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
            NAVIGATION_EVENT: "MDCTopAppBar:nav",
            NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
            ROOT_SELECTOR: ".mdc-top-app-bar",
            TITLE_SELECTOR: ".mdc-top-app-bar__title"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), (i = e.Direction || (e.Direction = {}))[i.RIGHT = 0] = "RIGHT", i[i.LEFT = 1] = "LEFT", (r = e.EventSource || (e.EventSource = {}))[r.PRIMARY = 0] = "PRIMARY", r[r.TRAILING = 1] = "TRAILING", r[r.NONE = 2] = "NONE", e.strings = {
            ARIA_CHECKED: "aria-checked",
            ARROW_DOWN_KEY: "ArrowDown",
            ARROW_LEFT_KEY: "ArrowLeft",
            ARROW_RIGHT_KEY: "ArrowRight",
            ARROW_UP_KEY: "ArrowUp",
            BACKSPACE_KEY: "Backspace",
            CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
            DELETE_KEY: "Delete",
            END_KEY: "End",
            ENTER_KEY: "Enter",
            ENTRY_ANIMATION_NAME: "mdc-chip-entry",
            HOME_KEY: "Home",
            INTERACTION_EVENT: "MDCChip:interaction",
            LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
            NAVIGATION_EVENT: "MDCChip:navigation",
            PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
            REMOVAL_EVENT: "MDCChip:removal",
            SELECTION_EVENT: "MDCChip:selection",
            SPACEBAR_KEY: " ",
            TAB_INDEX: "tabindex",
            TRAILING_ACTION_SELECTOR: ".mdc-chip__trailing-action",
            TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
            TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
        }, e.cssClasses = {
            CHECKMARK: "mdc-chip__checkmark",
            CHIP_EXIT: "mdc-chip--exit",
            DELETABLE: "mdc-chip--deletable",
            HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
            LEADING_ICON: "mdc-chip__icon--leading",
            PRIMARY_ACTION: "mdc-chip__primary-action",
            SELECTED: "mdc-chip--selected",
            TEXT: "mdc-chip__text",
            TRAILING_ACTION: "mdc-chip__trailing-action",
            TRAILING_ICON: "mdc-chip__icon--trailing"
        }, e.navigationKeys = new Set, e.navigationKeys.add(e.strings.ARROW_LEFT_KEY), e.navigationKeys.add(e.strings.ARROW_RIGHT_KEY), e.navigationKeys.add(e.strings.ARROW_DOWN_KEY), e.navigationKeys.add(e.strings.ARROW_UP_KEY), e.navigationKeys.add(e.strings.END_KEY), e.navigationKeys.add(e.strings.HOME_KEY), e.jumpChipKeys = new Set, e.jumpChipKeys.add(e.strings.ARROW_UP_KEY), e.jumpChipKeys.add(e.strings.ARROW_DOWN_KEY), e.jumpChipKeys.add(e.strings.HOME_KEY), e.jumpChipKeys.add(e.strings.END_KEY)
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
                LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
                LIST_ITEM_CLASS: "mdc-list-item",
                LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
                LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
                ROOT: "mdc-list"
            },
            r = {
                ACTION_EVENT: "MDCList:action",
                ARIA_CHECKED: "aria-checked",
                ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
                ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
                ARIA_CURRENT: "aria-current",
                ARIA_DISABLED: "aria-disabled",
                ARIA_ORIENTATION: "aria-orientation",
                ARIA_ORIENTATION_HORIZONTAL: "horizontal",
                ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
                ARIA_SELECTED: "aria-selected",
                CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
                CHECKBOX_SELECTOR: 'input[type="checkbox"]',
                CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + (e.cssClasses = i).LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + i.LIST_ITEM_CLASS + " a\n  ",
                FOCUSABLE_CHILD_ELEMENTS: "\n    ." + i.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + i.LIST_ITEM_CLASS + " a,\n    ." + i.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + i.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
                RADIO_SELECTOR: 'input[type="radio"]'
            };
        e.strings = r;
        e.numbers = {
            UNSET_INDEX: -1
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(0),
            a = n(9),
            c = ["input", "button", "textarea", "select"];
        var u, l = (u = s.MDCFoundation, r(d, u), Object.defineProperty(d, "strings", {
            get: function() {
                return a.strings
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d, "cssClasses", {
            get: function() {
                return a.cssClasses
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d, "numbers", {
            get: function() {
                return a.numbers
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d, "defaultAdapter", {
            get: function() {
                return {
                    addClassForElementIndex: function() {},
                    focusItemAtIndex: function() {},
                    getAttributeForElementIndex: function() {
                        return null
                    },
                    getFocusedElementIndex: function() {
                        return 0
                    },
                    getListItemCount: function() {
                        return 0
                    },
                    hasCheckboxAtIndex: function() {
                        return !1
                    },
                    hasRadioAtIndex: function() {
                        return !1
                    },
                    isCheckboxCheckedAtIndex: function() {
                        return !1
                    },
                    isFocusInsideList: function() {
                        return !1
                    },
                    isRootFocused: function() {
                        return !1
                    },
                    listItemAtIndexHasClass: function() {
                        return !1
                    },
                    notifyAction: function() {},
                    removeClassForElementIndex: function() {},
                    setAttributeForElementIndex: function() {},
                    setCheckedCheckboxOrRadioAtIndex: function() {},
                    setTabIndexForListItemChildren: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.layout = function() {
            0 !== this.adapter_.getListItemCount() && (this.adapter_.hasCheckboxAtIndex(0) ? this.isCheckboxList_ = !0 : this.adapter_.hasRadioAtIndex(0) && (this.isRadioList_ = !0))
        }, d.prototype.setWrapFocus = function(t) {
            this.wrapFocus_ = t
        }, d.prototype.setVerticalOrientation = function(t) {
            this.isVertical_ = t
        }, d.prototype.setSingleSelection = function(t) {
            this.isSingleSelectionList_ = t
        }, d.prototype.setUseActivatedClass = function(t) {
            this.useActivatedClass_ = t
        }, d.prototype.getSelectedIndex = function() {
            return this.selectedIndex_
        }, d.prototype.setSelectedIndex = function(t) {
            this.isIndexValid_(t) && (this.isCheckboxList_ ? this.setCheckboxAtIndex_(t) : this.isRadioList_ ? this.setRadioAtIndex_(t) : this.setSingleSelectionAtIndex_(t))
        }, d.prototype.handleFocusIn = function(t, e) {
            0 <= e && this.adapter_.setTabIndexForListItemChildren(e, "0")
        }, d.prototype.handleFocusOut = function(t, e) {
            var n = this;
            0 <= e && this.adapter_.setTabIndexForListItemChildren(e, "-1"), setTimeout(function() {
                n.adapter_.isFocusInsideList() || n.setTabindexToFirstSelectedItem_()
            }, 0)
        }, d.prototype.handleKeydown = function(t, e, n) {
            var i = "ArrowLeft" === t.key || 37 === t.keyCode,
                r = "ArrowUp" === t.key || 38 === t.keyCode,
                o = "ArrowRight" === t.key || 39 === t.keyCode,
                s = "ArrowDown" === t.key || 40 === t.keyCode,
                a = "Home" === t.key || 36 === t.keyCode,
                c = "End" === t.key || 35 === t.keyCode,
                u = "Enter" === t.key || 13 === t.keyCode,
                l = "Space" === t.key || 32 === t.keyCode;
            if (this.adapter_.isRootFocused()) r || c ? (t.preventDefault(), this.focusLastElement()) : (s || a) && (t.preventDefault(), this.focusFirstElement());
            else {
                var d = this.adapter_.getFocusedElementIndex();
                if (!(-1 === d && (d = n) < 0)) {
                    var p;
                    if (this.isVertical_ && s || !this.isVertical_ && o) this.preventDefaultEvent_(t), p = this.focusNextElement(d);
                    else if (this.isVertical_ && r || !this.isVertical_ && i) this.preventDefaultEvent_(t), p = this.focusPrevElement(d);
                    else if (a) this.preventDefaultEvent_(t), p = this.focusFirstElement();
                    else if (c) this.preventDefaultEvent_(t), p = this.focusLastElement();
                    else if ((u || l) && e) {
                        var _ = t.target;
                        if (_ && "A" === _.tagName && u) return;
                        this.preventDefaultEvent_(t), this.isSelectableList_() && this.setSelectedIndexOnAction_(d), this.adapter_.notifyAction(d)
                    }
                    this.focusedItemIndex_ = d, void 0 !== p && (this.setTabindexAtIndex_(p), this.focusedItemIndex_ = p)
                }
            }
        }, d.prototype.handleClick = function(t, e) {
            t !== a.numbers.UNSET_INDEX && (this.isSelectableList_() && this.setSelectedIndexOnAction_(t, e), this.adapter_.notifyAction(t), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t)
        }, d.prototype.focusNextElement = function(t) {
            var e = t + 1;
            if (this.adapter_.getListItemCount() <= e) {
                if (!this.wrapFocus_) return t;
                e = 0
            }
            return this.adapter_.focusItemAtIndex(e), e
        }, d.prototype.focusPrevElement = function(t) {
            var e = t - 1;
            if (e < 0) {
                if (!this.wrapFocus_) return t;
                e = this.adapter_.getListItemCount() - 1
            }
            return this.adapter_.focusItemAtIndex(e), e
        }, d.prototype.focusFirstElement = function() {
            return this.adapter_.focusItemAtIndex(0), 0
        }, d.prototype.focusLastElement = function() {
            var t = this.adapter_.getListItemCount() - 1;
            return this.adapter_.focusItemAtIndex(t), t
        }, d.prototype.setEnabled = function(t, e) {
            this.isIndexValid_(t) && (e ? (this.adapter_.removeClassForElementIndex(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter_.setAttributeForElementIndex(t, a.strings.ARIA_DISABLED, "false")) : (this.adapter_.addClassForElementIndex(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter_.setAttributeForElementIndex(t, a.strings.ARIA_DISABLED, "true")))
        }, d.prototype.preventDefaultEvent_ = function(t) {
            var e = ("" + t.target.tagName).toLowerCase(); - 1 === c.indexOf(e) && t.preventDefault()
        }, d.prototype.setSingleSelectionAtIndex_ = function(t) {
            if (this.selectedIndex_ !== t) {
                var e = a.cssClasses.LIST_ITEM_SELECTED_CLASS;
                this.useActivatedClass_ && (e = a.cssClasses.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter_.removeClassForElementIndex(this.selectedIndex_, e), this.adapter_.addClassForElementIndex(t, e), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t
            }
        }, d.prototype.setAriaForSingleSelectionAtIndex_ = function(t) {
            this.selectedIndex_ === a.numbers.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(t, a.strings.ARIA_CURRENT));
            var e = null !== this.ariaCurrentAttrValue_,
                n = e ? a.strings.ARIA_CURRENT : a.strings.ARIA_SELECTED;
            this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter_.setAttributeForElementIndex(this.selectedIndex_, n, "false");
            var i = e ? this.ariaCurrentAttrValue_ : "true";
            this.adapter_.setAttributeForElementIndex(t, n, i)
        }, d.prototype.setRadioAtIndex_ = function(t) {
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(t, !0), this.selectedIndex_ !== a.numbers.UNSET_INDEX && this.adapter_.setAttributeForElementIndex(this.selectedIndex_, a.strings.ARIA_CHECKED, "false"), this.adapter_.setAttributeForElementIndex(t, a.strings.ARIA_CHECKED, "true"), this.selectedIndex_ = t
        }, d.prototype.setCheckboxAtIndex_ = function(t) {
            for (var e = 0; e < this.adapter_.getListItemCount(); e++) {
                var n = !1;
                0 <= t.indexOf(e) && (n = !0), this.adapter_.setCheckedCheckboxOrRadioAtIndex(e, n), this.adapter_.setAttributeForElementIndex(e, a.strings.ARIA_CHECKED, n ? "true" : "false")
            }
            this.selectedIndex_ = t
        }, d.prototype.setTabindexAtIndex_ = function(t) {
            this.focusedItemIndex_ === a.numbers.UNSET_INDEX && 0 !== t ? this.adapter_.setAttributeForElementIndex(0, "tabindex", "-1") : 0 <= this.focusedItemIndex_ && this.focusedItemIndex_ !== t && this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, "tabindex", "-1"), this.adapter_.setAttributeForElementIndex(t, "tabindex", "0")
        }, d.prototype.isSelectableList_ = function() {
            return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_
        }, d.prototype.setTabindexToFirstSelectedItem_ = function() {
            var t = 0;
            this.isSelectableList_() && ("number" == typeof this.selectedIndex_ && this.selectedIndex_ !== a.numbers.UNSET_INDEX ? t = this.selectedIndex_ : function(t) {
                return t instanceof Array
            }(this.selectedIndex_) && 0 < this.selectedIndex_.length && (t = this.selectedIndex_.reduce(function(t, e) {
                return Math.min(t, e)
            }))), this.setTabindexAtIndex_(t)
        }, d.prototype.isIndexValid_ = function(t) {
            var e = this;
            if (t instanceof Array) {
                if (!this.isCheckboxList_) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                return 0 === t.length || t.some(function(t) {
                    return e.isIndexInRange_(t)
                })
            }
            if ("number" != typeof t) return !1;
            if (this.isCheckboxList_) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
            return this.isIndexInRange_(t)
        }, d.prototype.isIndexInRange_ = function(t) {
            var e = this.adapter_.getListItemCount();
            return 0 <= t && t < e
        }, d.prototype.setSelectedIndexOnAction_ = function(t, e) {
            void 0 === e && (e = !0), this.adapter_.listItemAtIndexHasClass(t, a.cssClasses.LIST_ITEM_DISABLED_CLASS) || (this.isCheckboxList_ ? this.toggleCheckboxAtIndex_(t, e) : this.setSelectedIndex(t))
        }, d.prototype.toggleCheckboxAtIndex_ = function(e, t) {
            var n = this.adapter_.isCheckboxCheckedAtIndex(e);
            t && (n = !n, this.adapter_.setCheckedCheckboxOrRadioAtIndex(e, n)), this.adapter_.setAttributeForElementIndex(e, a.strings.ARIA_CHECKED, n ? "true" : "false");
            var i = this.selectedIndex_ === a.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
            n ? i.push(e) : i = i.filter(function(t) {
                return t !== e
            }), this.selectedIndex_ = i
        }, d);

        function d(t) {
            var e = u.call(this, o({}, d.defaultAdapter, t)) || this;
            return e.wrapFocus_ = !1, e.isVertical_ = !0, e.isSingleSelectionList_ = !1, e.selectedIndex_ = a.numbers.UNSET_INDEX, e.focusedItemIndex_ = a.numbers.UNSET_INDEX, e.useActivatedClass_ = !1, e.ariaCurrentAttrValue_ = null, e.isCheckboxList_ = !1, e.isRadioList_ = !1, e
        }
        e.MDCListFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            d = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            g = n(6),
            c = (s = a.MDCFoundation, r(u, s), Object.defineProperty(u, "cssClasses", {
                get: function() {
                    return g.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u, "strings", {
                get: function() {
                    return g.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u, "numbers", {
                get: function() {
                    return g.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u, "Corner", {
                get: function() {
                    return g.Corner
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        hasAnchor: function() {
                            return !1
                        },
                        isElementInContainer: function() {
                            return !1
                        },
                        isFocused: function() {
                            return !1
                        },
                        isRtl: function() {
                            return !1
                        },
                        getInnerDimensions: function() {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getAnchorDimensions: function() {
                            return null
                        },
                        getWindowDimensions: function() {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getBodyDimensions: function() {
                            return {
                                height: 0,
                                width: 0
                            }
                        },
                        getWindowScroll: function() {
                            return {
                                x: 0,
                                y: 0
                            }
                        },
                        setPosition: function() {},
                        setMaxHeight: function() {},
                        setTransformOrigin: function() {},
                        saveFocus: function() {},
                        restoreFocus: function() {},
                        notifyClose: function() {},
                        notifyOpen: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.init = function() {
                var t = u.cssClasses,
                    e = t.ROOT,
                    n = t.OPEN;
                if (!this.adapter_.hasClass(e)) throw new Error(e + " class required in root element.");
                this.adapter_.hasClass(n) && (this.isOpen_ = !0)
            }, u.prototype.destroy = function() {
                clearTimeout(this.openAnimationEndTimerId_), clearTimeout(this.closeAnimationEndTimerId_), cancelAnimationFrame(this.animationRequestId_)
            }, u.prototype.setAnchorCorner = function(t) {
                this.anchorCorner_ = t
            }, u.prototype.setAnchorMargin = function(t) {
                this.anchorMargin_.top = t.top || 0, this.anchorMargin_.right = t.right || 0, this.anchorMargin_.bottom = t.bottom || 0, this.anchorMargin_.left = t.left || 0
            }, u.prototype.setIsHoisted = function(t) {
                this.isHoistedElement_ = t
            }, u.prototype.setFixedPosition = function(t) {
                this.isFixedPosition_ = t
            }, u.prototype.setAbsolutePosition = function(t, e) {
                this.position_.x = this.isFinite_(t) ? t : 0, this.position_.y = this.isFinite_(e) ? e : 0
            }, u.prototype.setQuickOpen = function(t) {
                this.isQuickOpen_ = t
            }, u.prototype.isOpen = function() {
                return this.isOpen_
            }, u.prototype.open = function() {
                var t = this;
                this.adapter_.saveFocus(), this.isQuickOpen_ || this.adapter_.addClass(u.cssClasses.ANIMATING_OPEN), this.animationRequestId_ = requestAnimationFrame(function() {
                    t.adapter_.addClass(u.cssClasses.OPEN), t.dimensions_ = t.adapter_.getInnerDimensions(), t.autoPosition_(), t.isQuickOpen_ ? t.adapter_.notifyOpen() : t.openAnimationEndTimerId_ = setTimeout(function() {
                        t.openAnimationEndTimerId_ = 0, t.adapter_.removeClass(u.cssClasses.ANIMATING_OPEN), t.adapter_.notifyOpen()
                    }, g.numbers.TRANSITION_OPEN_DURATION)
                }), this.isOpen_ = !0
            }, u.prototype.close = function(t) {
                var e = this;
                void 0 === t && (t = !1), this.isQuickOpen_ || this.adapter_.addClass(u.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
                    e.adapter_.removeClass(u.cssClasses.OPEN), e.isQuickOpen_ ? e.adapter_.notifyClose() : e.closeAnimationEndTimerId_ = setTimeout(function() {
                        e.closeAnimationEndTimerId_ = 0, e.adapter_.removeClass(u.cssClasses.ANIMATING_CLOSED), e.adapter_.notifyClose()
                    }, g.numbers.TRANSITION_CLOSE_DURATION)
                }), this.isOpen_ = !1, t || this.maybeRestoreFocus_()
            }, u.prototype.handleBodyClick = function(t) {
                var e = t.target;
                this.adapter_.isElementInContainer(e) || this.close()
            }, u.prototype.handleKeydown = function(t) {
                var e = t.keyCode;
                "Escape" !== t.key && 27 !== e || this.close()
            }, u.prototype.autoPosition_ = function() {
                var t;
                this.measurements_ = this.getAutoLayoutMeasurements_();
                var e = this.getOriginCorner_(),
                    n = this.getMenuSurfaceMaxHeight_(e),
                    i = this.hasBit_(e, g.CornerBit.BOTTOM) ? "bottom" : "top",
                    r = this.hasBit_(e, g.CornerBit.RIGHT) ? "right" : "left",
                    o = this.getHorizontalOriginOffset_(e),
                    s = this.getVerticalOriginOffset_(e),
                    a = this.measurements_,
                    c = a.anchorSize,
                    u = a.surfaceSize,
                    l = ((t = {})[r] = o, t[i] = s, t);
                c.width / u.width > g.numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (r = "center"), (this.isHoistedElement_ || this.isFixedPosition_) && this.adjustPositionForHoistedElement_(l), this.adapter_.setTransformOrigin(r + " " + i), this.adapter_.setPosition(l), this.adapter_.setMaxHeight(n ? n + "px" : "")
            }, u.prototype.getAutoLayoutMeasurements_ = function() {
                var t = this.adapter_.getAnchorDimensions(),
                    e = this.adapter_.getBodyDimensions(),
                    n = this.adapter_.getWindowDimensions(),
                    i = this.adapter_.getWindowScroll();
                return {
                    anchorSize: t = t || {
                        top: this.position_.y,
                        right: this.position_.x,
                        bottom: this.position_.y,
                        left: this.position_.x,
                        width: 0,
                        height: 0
                    },
                    bodySize: e,
                    surfaceSize: this.dimensions_,
                    viewportDistance: {
                        top: t.top,
                        right: n.width - t.right,
                        bottom: n.height - t.bottom,
                        left: t.left
                    },
                    viewportSize: n,
                    windowScroll: i
                }
            }, u.prototype.getOriginCorner_ = function() {
                var t = g.Corner.TOP_LEFT,
                    e = this.measurements_,
                    n = e.viewportDistance,
                    i = e.anchorSize,
                    r = e.surfaceSize,
                    o = this.hasBit_(this.anchorCorner_, g.CornerBit.BOTTOM),
                    s = o ? n.top + i.height + this.anchorMargin_.bottom : n.top + this.anchorMargin_.top,
                    a = o ? n.bottom - this.anchorMargin_.bottom : n.bottom + i.height - this.anchorMargin_.top,
                    c = r.height - s,
                    u = r.height - a;
                0 < u && c < u && (t = this.setBit_(t, g.CornerBit.BOTTOM));
                var l = this.adapter_.isRtl(),
                    d = this.hasBit_(this.anchorCorner_, g.CornerBit.FLIP_RTL),
                    p = this.hasBit_(this.anchorCorner_, g.CornerBit.RIGHT),
                    _ = p && !l || !p && d && l,
                    f = _ ? n.left + i.width + this.anchorMargin_.right : n.left + this.anchorMargin_.left,
                    h = _ ? n.right - this.anchorMargin_.right : n.right + i.width - this.anchorMargin_.left,
                    y = r.width - f,
                    C = r.width - h;
                return (y < 0 && _ && l || p && !_ && y < 0 || 0 < C && y < C) && (t = this.setBit_(t, g.CornerBit.RIGHT)), t
            }, u.prototype.getMenuSurfaceMaxHeight_ = function(t) {
                var e = this.measurements_.viewportDistance,
                    n = 0,
                    i = this.hasBit_(t, g.CornerBit.BOTTOM),
                    r = this.hasBit_(this.anchorCorner_, g.CornerBit.BOTTOM),
                    o = u.numbers.MARGIN_TO_EDGE;
                return i ? (n = e.top + this.anchorMargin_.top - o, r || (n += this.measurements_.anchorSize.height)) : (n = e.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - o, r && (n -= this.measurements_.anchorSize.height)), n
            }, u.prototype.getHorizontalOriginOffset_ = function(t) {
                var e = this.measurements_.anchorSize,
                    n = this.hasBit_(t, g.CornerBit.RIGHT),
                    i = this.hasBit_(this.anchorCorner_, g.CornerBit.RIGHT);
                if (n) {
                    var r = i ? e.width - this.anchorMargin_.left : this.anchorMargin_.right;
                    return this.isHoistedElement_ || this.isFixedPosition_ ? r - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width) : r
                }
                return i ? e.width - this.anchorMargin_.right : this.anchorMargin_.left
            }, u.prototype.getVerticalOriginOffset_ = function(t) {
                var e = this.measurements_.anchorSize,
                    n = this.hasBit_(t, g.CornerBit.BOTTOM),
                    i = this.hasBit_(this.anchorCorner_, g.CornerBit.BOTTOM);
                return n ? i ? e.height - this.anchorMargin_.top : -this.anchorMargin_.bottom : i ? e.height + this.anchorMargin_.bottom : this.anchorMargin_.top
            }, u.prototype.adjustPositionForHoistedElement_ = function(t) {
                var e, n, i = this.measurements_,
                    r = i.windowScroll,
                    o = i.viewportDistance,
                    s = Object.keys(t);
                try {
                    for (var a = d(s), c = a.next(); !c.done; c = a.next()) {
                        var u = c.value,
                            l = t[u] || 0;
                        l += o[u], this.isFixedPosition_ || ("top" === u ? l += r.y : "bottom" === u ? l -= r.y : "left" === u ? l += r.x : l -= r.x), t[u] = l
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (n = a.return) && n.call(a)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, u.prototype.maybeRestoreFocus_ = function() {
                var t = this.adapter_.isFocused(),
                    e = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
                (t || e) && this.adapter_.restoreFocus()
            }, u.prototype.hasBit_ = function(t, e) {
                return Boolean(t & e)
            }, u.prototype.setBit_ = function(t, e) {
                return t | e
            }, u.prototype.isFinite_ = function(t) {
                return "number" == typeof t && isFinite(t)
            }, u);

        function u(t) {
            var e = s.call(this, o({}, u.defaultAdapter, t)) || this;
            return e.isOpen_ = !1, e.isQuickOpen_ = !1, e.isHoistedElement_ = !1, e.isFixedPosition_ = !1, e.openAnimationEndTimerId_ = 0, e.closeAnimationEndTimerId_ = 0, e.animationRequestId_ = 0, e.anchorCorner_ = g.Corner.TOP_START, e.anchorMargin_ = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e.position_ = {
                x: 0,
                y: 0
            }, e
        }
        e.MDCMenuSurfaceFoundation = c, e.default = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
            MENU_SELECTION_GROUP: "mdc-menu__selection-group",
            ROOT: "mdc-menu"
        };
        e.strings = {
            ARIA_CHECKED_ATTR: "aria-checked",
            ARIA_DISABLED_ATTR: "aria-disabled",
            CHECKBOX_SELECTOR: 'input[type="checkbox"]',
            LIST_SELECTOR: ".mdc-list",
            SELECTED_EVENT: "MDCMenu:selected"
        };
        var i, r;
        e.numbers = {
            FOCUS_ROOT_INDEX: -1
        }, (r = i = i || {})[r.NONE = 0] = "NONE", r[r.LIST_ROOT = 1] = "LIST_ROOT", r[r.FIRST_ITEM = 2] = "FIRST_ITEM", r[r.LAST_ITEM = 3] = "LAST_ITEM", e.DefaultFocusState = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            CLOSING: "mdc-snackbar--closing",
            OPEN: "mdc-snackbar--open",
            OPENING: "mdc-snackbar--opening"
        };
        e.strings = {
            ACTION_SELECTOR: ".mdc-snackbar__action",
            ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
            CLOSED_EVENT: "MDCSnackbar:closed",
            CLOSING_EVENT: "MDCSnackbar:closing",
            DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
            LABEL_SELECTOR: ".mdc-snackbar__label",
            OPENED_EVENT: "MDCSnackbar:opened",
            OPENING_EVENT: "MDCSnackbar:opening",
            REASON_ACTION: "action",
            REASON_DISMISS: "dismiss",
            SURFACE_SELECTOR: ".mdc-snackbar__surface"
        };
        e.numbers = {
            DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
            INDETERMINATE: -1,
            MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
            MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
            SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
            SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
            ARIA_LIVE_DELAY_MS: 1e3
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(87),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        computeContentClientRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        setContentStyleProperty: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.computeContentClientRect = function() {
                return this.adapter_.computeContentClientRect()
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCTabIndicatorFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
                animation: {
                    prefixed: "-webkit-animation",
                    standard: "animation"
                },
                transform: {
                    prefixed: "-webkit-transform",
                    standard: "transform"
                },
                transition: {
                    prefixed: "-webkit-transition",
                    standard: "transition"
                }
            },
            a = {
                animationend: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationEnd",
                    standard: "animationend"
                },
                animationiteration: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationIteration",
                    standard: "animationiteration"
                },
                animationstart: {
                    cssProperty: "animation",
                    prefixed: "webkitAnimationStart",
                    standard: "animationstart"
                },
                transitionend: {
                    cssProperty: "transition",
                    prefixed: "webkitTransitionEnd",
                    standard: "transitionend"
                }
            };

        function c(t) {
            return Boolean(t.document) && "function" == typeof t.document.createElement
        }
        e.getCorrectPropertyName = function(t, e) {
            if (c(t) && e in s) {
                var n = t.document.createElement("div"),
                    i = s[e],
                    r = i.standard,
                    o = i.prefixed;
                return r in n.style ? r : o
            }
            return e
        }, e.getCorrectEventName = function(t, e) {
            if (c(t) && e in a) {
                var n = t.document.createElement("div"),
                    i = a[e],
                    r = i.standard,
                    o = i.prefixed;
                return i.cssProperty in n.style ? r : o
            }
            return e
        }
    }, function(t, e, n) {
        "use strict";
        var s;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.supportsCssVariables = function(t, e) {
            void 0 === e && (e = !1);
            var n = t.CSS,
                i = s;
            if ("boolean" == typeof s && !e) return s;
            if (!(n && "function" == typeof n.supports)) return !1;
            var r = n.supports("--css-vars", "yes"),
                o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
            return i = !(!r && !o) && ! function(t) {
                var e = t.document,
                    n = e.createElement("div");
                n.className = "mdc-ripple-surface--test-edge-var-bug", e.head.appendChild(n);
                var i = t.getComputedStyle(n),
                    r = null !== i && "solid" === i.borderTopStyle;
                return n.parentNode && n.parentNode.removeChild(n), r
            }(t), e || (s = i), i
        }, e.getNormalizedEventCoords = function(t, e, n) {
            if (!t) return {
                x: 0,
                y: 0
            };
            var i, r, o = e.x,
                s = e.y,
                a = o + n.left,
                c = s + n.top;
            if ("touchstart" === t.type) {
                var u = t;
                i = u.changedTouches[0].pageX - a, r = u.changedTouches[0].pageY - c
            } else {
                var l = t;
                i = l.pageX - a, r = l.pageY - c
            }
            return {
                x: i,
                y: r
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(8),
            u = {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
            },
            l = (s = a.MDCFoundation, r(d, s), Object.defineProperty(d, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        addClassToLeadingIcon: function() {},
                        eventTargetHasClass: function() {
                            return !1
                        },
                        focusPrimaryAction: function() {},
                        focusTrailingAction: function() {},
                        getCheckmarkBoundingClientRect: function() {
                            return u
                        },
                        getComputedStyleValue: function() {
                            return ""
                        },
                        getRootBoundingClientRect: function() {
                            return u
                        },
                        hasClass: function() {
                            return !1
                        },
                        hasLeadingIcon: function() {
                            return !1
                        },
                        hasTrailingAction: function() {
                            return !1
                        },
                        isRTL: function() {
                            return !1
                        },
                        notifyInteraction: function() {},
                        notifyNavigation: function() {},
                        notifyRemoval: function() {},
                        notifySelection: function() {},
                        notifyTrailingIconInteraction: function() {},
                        removeClass: function() {},
                        removeClassFromLeadingIcon: function() {},
                        setPrimaryActionAttr: function() {},
                        setStyleProperty: function() {},
                        setTrailingActionAttr: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.isSelected = function() {
                return this.adapter_.hasClass(c.cssClasses.SELECTED)
            }, d.prototype.setSelected = function(t) {
                this.setSelected_(t), this.notifySelection_(t)
            }, d.prototype.setSelectedFromChipSet = function(t, e) {
                this.setSelected_(t), e && this.notifyIgnoredSelection_(t)
            }, d.prototype.getShouldRemoveOnTrailingIconClick = function() {
                return this.shouldRemoveOnTrailingIconClick_
            }, d.prototype.setShouldRemoveOnTrailingIconClick = function(t) {
                this.shouldRemoveOnTrailingIconClick_ = t
            }, d.prototype.getDimensions = function() {
                function t() {
                    return e.adapter_.getRootBoundingClientRect()
                }
                var e = this;
                if (!this.adapter_.hasLeadingIcon()) {
                    var n = e.adapter_.getCheckmarkBoundingClientRect();
                    if (n) {
                        var i = t();
                        return {
                            bottom: i.bottom,
                            height: i.height,
                            left: i.left,
                            right: i.right,
                            top: i.top,
                            width: i.width + n.height
                        }
                    }
                }
                return t()
            }, d.prototype.beginExit = function() {
                this.adapter_.addClass(c.cssClasses.CHIP_EXIT)
            }, d.prototype.handleInteraction = function(t) {
                this.shouldHandleInteraction_(t) && (this.adapter_.notifyInteraction(), this.focusPrimaryAction_())
            }, d.prototype.handleTransitionEnd = function(t) {
                var e = this,
                    n = this.adapter_.eventTargetHasClass(t.target, c.cssClasses.CHIP_EXIT),
                    i = "width" === t.propertyName,
                    r = "opacity" === t.propertyName;
                if (n && r) {
                    var o = this.adapter_.getComputedStyleValue("width");
                    requestAnimationFrame(function() {
                        e.adapter_.setStyleProperty("width", o), e.adapter_.setStyleProperty("padding", "0"), e.adapter_.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
                            e.adapter_.setStyleProperty("width", "0")
                        })
                    })
                } else if (n && i && (this.removeFocus_(), this.adapter_.notifyRemoval()), r) {
                    var s = this.adapter_.eventTargetHasClass(t.target, c.cssClasses.LEADING_ICON) && this.adapter_.hasClass(c.cssClasses.SELECTED),
                        a = this.adapter_.eventTargetHasClass(t.target, c.cssClasses.CHECKMARK) && !this.adapter_.hasClass(c.cssClasses.SELECTED);
                    return s ? this.adapter_.addClassToLeadingIcon(c.cssClasses.HIDDEN_LEADING_ICON) : a ? this.adapter_.removeClassFromLeadingIcon(c.cssClasses.HIDDEN_LEADING_ICON) : void 0
                }
            }, d.prototype.handleTrailingIconInteraction = function(t) {
                this.shouldHandleInteraction_(t) && (this.adapter_.notifyTrailingIconInteraction(), this.removeChip_(t))
            }, d.prototype.handleKeydown = function(t) {
                if (this.shouldRemoveChip_(t)) return this.removeChip_(t);
                var e = t.key;
                c.navigationKeys.has(e) && (t.preventDefault(), this.focusNextAction_(t))
            }, d.prototype.removeFocus = function() {
                this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX, "-1"), this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX, "-1")
            }, d.prototype.focusPrimaryAction = function() {
                this.focusPrimaryAction_()
            }, d.prototype.focusTrailingAction = function() {
                if (!this.adapter_.hasTrailingAction()) return this.focusPrimaryAction_();
                this.focusTrailingAction_()
            }, d.prototype.focusNextAction_ = function(t) {
                var e = t.key,
                    n = this.adapter_.hasTrailingAction(),
                    i = this.getDirection_(e),
                    r = this.getEvtSource_(t);
                if (!c.jumpChipKeys.has(e) && n) return r === c.EventSource.PRIMARY && i === c.Direction.RIGHT ? this.focusTrailingAction_() : r === c.EventSource.TRAILING && i === c.Direction.LEFT ? this.focusPrimaryAction_() : void this.adapter_.notifyNavigation(e, c.EventSource.NONE);
                this.adapter_.notifyNavigation(e, r)
            }, d.prototype.getEvtSource_ = function(t) {
                return this.adapter_.eventTargetHasClass(t.target, c.cssClasses.PRIMARY_ACTION) ? c.EventSource.PRIMARY : this.adapter_.eventTargetHasClass(t.target, c.cssClasses.TRAILING_ACTION) ? c.EventSource.TRAILING : c.EventSource.NONE
            }, d.prototype.getDirection_ = function(t) {
                var e = this.adapter_.isRTL();
                return t === c.strings.ARROW_LEFT_KEY && !e || t === c.strings.ARROW_RIGHT_KEY && e ? c.Direction.LEFT : c.Direction.RIGHT
            }, d.prototype.focusPrimaryAction_ = function() {
                this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX, "0"), this.adapter_.focusPrimaryAction(), this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX, "-1")
            }, d.prototype.focusTrailingAction_ = function() {
                this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX, "0"), this.adapter_.focusTrailingAction(), this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX, "-1")
            }, d.prototype.removeFocus_ = function() {
                this.adapter_.setTrailingActionAttr(c.strings.TAB_INDEX, "-1"), this.adapter_.setPrimaryActionAttr(c.strings.TAB_INDEX, "-1")
            }, d.prototype.removeChip_ = function(t) {
                t.stopPropagation(), this.shouldRemoveOnTrailingIconClick_ && this.beginExit()
            }, d.prototype.shouldHandleInteraction_ = function(t) {
                if ("click" === t.type) return !0;
                var e = t;
                return e.key === c.strings.ENTER_KEY || e.key === c.strings.SPACEBAR_KEY
            }, d.prototype.shouldRemoveChip_ = function(t) {
                return this.adapter_.hasClass(c.cssClasses.DELETABLE) && (t.key === c.strings.BACKSPACE_KEY || t.key === c.strings.DELETE_KEY)
            }, d.prototype.setSelected_ = function(t) {
                t ? (this.adapter_.addClass(c.cssClasses.SELECTED), this.adapter_.setPrimaryActionAttr(c.strings.ARIA_CHECKED, "true")) : (this.adapter_.removeClass(c.cssClasses.SELECTED), this.adapter_.setPrimaryActionAttr(c.strings.ARIA_CHECKED, "false"))
            }, d.prototype.notifySelection_ = function(t) {
                this.adapter_.notifySelection(t, !1)
            }, d.prototype.notifyIgnoredSelection_ = function(t) {
                this.adapter_.notifySelection(t, !0)
            }, d);

        function d(t) {
            var e = s.call(this, o({}, d.defaultAdapter, t)) || this;
            return e.shouldRemoveOnTrailingIconClick_ = !0, e
        }
        e.MDCChipFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            CELL: "mdc-data-table__cell",
            CELL_NUMERIC: "mdc-data-table__cell--numeric",
            CONTENT: "mdc-data-table__content",
            HEADER_ROW: "mdc-data-table__header-row",
            HEADER_ROW_CHECKBOX: "mdc-data-table__header-row-checkbox",
            ROOT: "mdc-data-table",
            ROW: "mdc-data-table__row",
            ROW_CHECKBOX: "mdc-data-table__row-checkbox",
            ROW_SELECTED: "mdc-data-table__row--selected"
        }, e.strings = {
            ARIA_SELECTED: "aria-selected",
            DATA_ROW_ID_ATTR: "data-row-id",
            HEADER_ROW_CHECKBOX_SELECTOR: "." + e.cssClasses.HEADER_ROW_CHECKBOX,
            ROW_CHECKBOX_SELECTOR: "." + e.cssClasses.ROW_CHECKBOX,
            ROW_SELECTED_SELECTOR: "." + e.cssClasses.ROW_SELECTED,
            ROW_SELECTOR: "." + e.cssClasses.ROW
        }, e.events = {
            ROW_SELECTION_CHANGED: "MDCDataTable:rowSelectionChanged",
            SELECTED_ALL: "MDCDataTable:selectedAll",
            UNSELECTED_ALL: "MDCDataTable:unselectedAll"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(2),
            c = n(9),
            u = n(10),
            l = (o = s.MDCComponent, r(d, o), Object.defineProperty(d.prototype, "vertical", {
                set: function(t) {
                    this.foundation_.setVerticalOrientation(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "listElements", {
                get: function() {
                    return [].slice.call(this.root_.querySelectorAll("." + c.cssClasses.LIST_ITEM_CLASS))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "wrapFocus", {
                set: function(t) {
                    this.foundation_.setWrapFocus(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "singleSelection", {
                set: function(t) {
                    this.foundation_.setSingleSelection(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "selectedIndex", {
                get: function() {
                    return this.foundation_.getSelectedIndex()
                },
                set: function(t) {
                    this.foundation_.setSelectedIndex(t)
                },
                enumerable: !0,
                configurable: !0
            }), d.attachTo = function(t) {
                return new d(t)
            }, d.prototype.initialSyncWithDOM = function() {
                this.handleClick_ = this.handleClickEvent_.bind(this), this.handleKeydown_ = this.handleKeydownEvent_.bind(this), this.focusInEventListener_ = this.handleFocusInEvent_.bind(this), this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this), this.listen("keydown", this.handleKeydown_), this.listen("click", this.handleClick_), this.listen("focusin", this.focusInEventListener_), this.listen("focusout", this.focusOutEventListener_), this.layout(), this.initializeListType()
            }, d.prototype.destroy = function() {
                this.unlisten("keydown", this.handleKeydown_), this.unlisten("click", this.handleClick_), this.unlisten("focusin", this.focusInEventListener_), this.unlisten("focusout", this.focusOutEventListener_)
            }, d.prototype.layout = function() {
                var t = this.root_.getAttribute(c.strings.ARIA_ORIENTATION);
                this.vertical = t !== c.strings.ARIA_ORIENTATION_HORIZONTAL, [].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(t) {
                    t.setAttribute("tabindex", "-1")
                }), [].slice.call(this.root_.querySelectorAll(c.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(t) {
                    return t.setAttribute("tabindex", "-1")
                }), this.foundation_.layout()
            }, d.prototype.initializeListType = function() {
                var e = this,
                    t = this.root_.querySelectorAll(c.strings.ARIA_ROLE_CHECKBOX_SELECTOR),
                    n = this.root_.querySelector("\n      ." + c.cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + c.cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    "),
                    i = this.root_.querySelector(c.strings.ARIA_CHECKED_RADIO_SELECTOR);
                if (t.length) {
                    var r = this.root_.querySelectorAll(c.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
                    this.selectedIndex = [].map.call(r, function(t) {
                        return e.listElements.indexOf(t)
                    })
                } else n ? (n.classList.contains(c.cssClasses.LIST_ITEM_ACTIVATED_CLASS) && this.foundation_.setUseActivatedClass(!0), this.singleSelection = !0, this.selectedIndex = this.listElements.indexOf(n)) : i && (this.selectedIndex = this.listElements.indexOf(i))
            }, d.prototype.setEnabled = function(t, e) {
                this.foundation_.setEnabled(t, e)
            }, d.prototype.getDefaultFoundation = function() {
                var r = this,
                    t = {
                        addClassForElementIndex: function(t, e) {
                            var n = r.listElements[t];
                            n && n.classList.add(e)
                        },
                        focusItemAtIndex: function(t) {
                            var e = r.listElements[t];
                            e && e.focus()
                        },
                        getAttributeForElementIndex: function(t, e) {
                            return r.listElements[t].getAttribute(e)
                        },
                        getFocusedElementIndex: function() {
                            return r.listElements.indexOf(document.activeElement)
                        },
                        getListItemCount: function() {
                            return r.listElements.length
                        },
                        hasCheckboxAtIndex: function(t) {
                            return !!r.listElements[t].querySelector(c.strings.CHECKBOX_SELECTOR)
                        },
                        hasRadioAtIndex: function(t) {
                            return !!r.listElements[t].querySelector(c.strings.RADIO_SELECTOR)
                        },
                        isCheckboxCheckedAtIndex: function(t) {
                            return r.listElements[t].querySelector(c.strings.CHECKBOX_SELECTOR).checked
                        },
                        isFocusInsideList: function() {
                            return r.root_.contains(document.activeElement)
                        },
                        isRootFocused: function() {
                            return document.activeElement === r.root_
                        },
                        listItemAtIndexHasClass: function(t, e) {
                            return r.listElements[t].classList.contains(e)
                        },
                        notifyAction: function(t) {
                            r.emit(c.strings.ACTION_EVENT, {
                                index: t
                            }, !0)
                        },
                        removeClassForElementIndex: function(t, e) {
                            var n = r.listElements[t];
                            n && n.classList.remove(e)
                        },
                        setAttributeForElementIndex: function(t, e, n) {
                            var i = r.listElements[t];
                            i && i.setAttribute(e, n)
                        },
                        setCheckedCheckboxOrRadioAtIndex: function(t, e) {
                            var n = r.listElements[t].querySelector(c.strings.CHECKBOX_RADIO_SELECTOR);
                            n.checked = e;
                            var i = document.createEvent("Event");
                            i.initEvent("change", !0, !0), n.dispatchEvent(i)
                        },
                        setTabIndexForListItemChildren: function(t, e) {
                            var n = r.listElements[t];
                            [].slice.call(n.querySelectorAll(c.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach(function(t) {
                                return t.setAttribute("tabindex", e)
                            })
                        }
                    };
                return new u.MDCListFoundation(t)
            }, d.prototype.getListItemIndex_ = function(t) {
                var e = t.target,
                    n = a.closest(e, "." + c.cssClasses.LIST_ITEM_CLASS + ", ." + c.cssClasses.ROOT);
                return n && a.matches(n, "." + c.cssClasses.LIST_ITEM_CLASS) ? this.listElements.indexOf(n) : -1
            }, d.prototype.handleFocusInEvent_ = function(t) {
                var e = this.getListItemIndex_(t);
                this.foundation_.handleFocusIn(t, e)
            }, d.prototype.handleFocusOutEvent_ = function(t) {
                var e = this.getListItemIndex_(t);
                this.foundation_.handleFocusOut(t, e)
            }, d.prototype.handleKeydownEvent_ = function(t) {
                var e = this.getListItemIndex_(t),
                    n = t.target;
                this.foundation_.handleKeydown(t, n.classList.contains(c.cssClasses.LIST_ITEM_CLASS), e)
            }, d.prototype.handleClickEvent_ = function(t) {
                var e = this.getListItemIndex_(t),
                    n = t.target,
                    i = !a.matches(n, c.strings.CHECKBOX_RADIO_SELECTOR);
                this.foundation_.handleClick(e, i)
            }, d);

        function d() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCList = l
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(49),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        elementHasClass: function() {
                            return !1
                        },
                        notifyClose: function() {},
                        notifyOpen: function() {},
                        saveFocus: function() {},
                        restoreFocus: function() {},
                        focusActiveNavigationItem: function() {},
                        trapFocus: function() {},
                        releaseFocus: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.destroy = function() {
                this.animationFrame_ && cancelAnimationFrame(this.animationFrame_), this.animationTimer_ && clearTimeout(this.animationTimer_)
            }, l.prototype.open = function() {
                var t = this;
                this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter_.addClass(c.cssClasses.OPEN), this.adapter_.addClass(c.cssClasses.ANIMATE), this.runNextAnimationFrame_(function() {
                    t.adapter_.addClass(c.cssClasses.OPENING)
                }), this.adapter_.saveFocus())
            }, l.prototype.close = function() {
                !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter_.addClass(c.cssClasses.CLOSING)
            }, l.prototype.isOpen = function() {
                return this.adapter_.hasClass(c.cssClasses.OPEN)
            }, l.prototype.isOpening = function() {
                return this.adapter_.hasClass(c.cssClasses.OPENING) || this.adapter_.hasClass(c.cssClasses.ANIMATE)
            }, l.prototype.isClosing = function() {
                return this.adapter_.hasClass(c.cssClasses.CLOSING)
            }, l.prototype.handleKeydown = function(t) {
                var e = t.keyCode;
                "Escape" !== t.key && 27 !== e || this.close()
            }, l.prototype.handleTransitionEnd = function(t) {
                var e = c.cssClasses.OPENING,
                    n = c.cssClasses.CLOSING,
                    i = c.cssClasses.OPEN,
                    r = c.cssClasses.ANIMATE,
                    o = c.cssClasses.ROOT;
                this.isElement_(t.target) && this.adapter_.elementHasClass(t.target, o) && (this.isClosing() ? (this.adapter_.removeClass(i), this.closed_(), this.adapter_.restoreFocus(), this.adapter_.notifyClose()) : (this.adapter_.focusActiveNavigationItem(), this.opened_(), this.adapter_.notifyOpen()), this.adapter_.removeClass(r), this.adapter_.removeClass(e), this.adapter_.removeClass(n))
            }, l.prototype.opened_ = function() {}, l.prototype.closed_ = function() {}, l.prototype.runNextAnimationFrame_ = function(t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function() {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                })
            }, l.prototype.isElement_ = function(t) {
                return Boolean(t.classList)
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.animationFrame_ = 0, e.animationTimer_ = 0, e
        }
        e.MDCDismissibleDrawerFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(22),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, u.prototype.shake = function(t) {
                this.foundation_.shake(t)
            }, u.prototype.float = function(t) {
                this.foundation_.float(t)
            }, u.prototype.getWidth = function() {
                return this.foundation_.getWidth()
            }, u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        getWidth: function() {
                            return n.root_.scrollWidth
                        },
                        registerInteractionHandler: function(t, e) {
                            return n.listen(t, e)
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return n.unlisten(t, e)
                        }
                    };
                return new a.MDCFloatingLabelFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCFloatingLabel = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(51),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        getWidth: function() {
                            return 0
                        },
                        registerInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.adapter_.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, l.prototype.destroy = function() {
                this.adapter_.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_)
            }, l.prototype.getWidth = function() {
                return this.adapter_.getWidth()
            }, l.prototype.shake = function(t) {
                var e = l.cssClasses.LABEL_SHAKE;
                t ? this.adapter_.addClass(e) : this.adapter_.removeClass(e)
            }, l.prototype.float = function(t) {
                var e = l.cssClasses,
                    n = e.LABEL_FLOAT_ABOVE,
                    i = e.LABEL_SHAKE;
                t ? this.adapter_.addClass(n) : (this.adapter_.removeClass(n), this.adapter_.removeClass(i))
            }, l.prototype.handleShakeAnimationEnd_ = function() {
                var t = l.cssClasses.LABEL_SHAKE;
                this.adapter_.removeClass(t)
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.shakeAnimationEndHandler_ = function() {
                return e.handleShakeAnimationEnd_()
            }, e
        }
        e.MDCFloatingLabelFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(58),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, u.prototype.activate = function() {
                this.foundation_.activate()
            }, u.prototype.deactivate = function() {
                this.foundation_.deactivate()
            }, u.prototype.setRippleCenter = function(t) {
                this.foundation_.setRippleCenter(t)
            }, u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        setStyle: function(t, e) {
                            return n.root_.style.setProperty(t, e)
                        },
                        registerEventHandler: function(t, e) {
                            return n.listen(t, e)
                        },
                        deregisterEventHandler: function(t, e) {
                            return n.unlisten(t, e)
                        }
                    };
                return new a.MDCLineRippleFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCLineRipple = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(22),
            c = n(25),
            u = n(66),
            l = (o = s.MDCComponent, r(d, o), d.attachTo = function(t) {
                return new d(t)
            }, d.prototype.initialSyncWithDOM = function() {
                this.notchElement_ = this.root_.querySelector(c.strings.NOTCH_ELEMENT_SELECTOR);
                var t = this.root_.querySelector("." + a.MDCFloatingLabelFoundation.cssClasses.ROOT);
                t ? (t.style.transitionDuration = "0s", this.root_.classList.add(c.cssClasses.OUTLINE_UPGRADED), requestAnimationFrame(function() {
                    t.style.transitionDuration = ""
                })) : this.root_.classList.add(c.cssClasses.NO_LABEL)
            }, d.prototype.notch = function(t) {
                this.foundation_.notch(t)
            }, d.prototype.closeNotch = function() {
                this.foundation_.closeNotch()
            }, d.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        setNotchWidthProperty: function(t) {
                            return e.notchElement_.style.setProperty("width", t + "px")
                        },
                        removeNotchWidthProperty: function() {
                            return e.notchElement_.style.removeProperty("width")
                        }
                    };
                return new u.MDCNotchedOutlineFoundation(t)
            }, d);

        function d() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCNotchedOutline = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
        };
        e.numbers = {
            NOTCH_ELEMENT_PADDING: 8
        };
        e.cssClasses = {
            NO_LABEL: "mdc-notched-outline--no-label",
            OUTLINE_NOTCHED: "mdc-notched-outline--notched",
            OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
                ACTIVATED: "mdc-select--activated",
                DISABLED: "mdc-select--disabled",
                FOCUSED: "mdc-select--focused",
                INVALID: "mdc-select--invalid",
                OUTLINED: "mdc-select--outlined",
                REQUIRED: "mdc-select--required",
                ROOT: "mdc-select",
                SELECTED_ITEM_CLASS: "mdc-list-item--selected",
                WITH_LEADING_ICON: "mdc-select--with-leading-icon"
            },
            r = {
                ARIA_CONTROLS: "aria-controls",
                ARIA_SELECTED_ATTR: "aria-selected",
                CHANGE_EVENT: "MDCSelect:change",
                LABEL_SELECTOR: ".mdc-floating-label",
                LEADING_ICON_SELECTOR: ".mdc-select__icon",
                LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
                MENU_SELECTOR: ".mdc-select__menu",
                OUTLINE_SELECTOR: ".mdc-notched-outline",
                SELECTED_ITEM_SELECTOR: "." + (e.cssClasses = i).SELECTED_ITEM_CLASS,
                SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
                SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
                VALUE_ATTR: "data-value"
            };
        e.strings = r;
        e.numbers = {
            LABEL_SCALE: .75,
            UNSET_INDEX: -1
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ACTIVE: "mdc-slider--active",
            DISABLED: "mdc-slider--disabled",
            DISCRETE: "mdc-slider--discrete",
            FOCUS: "mdc-slider--focus",
            HAS_TRACK_MARKER: "mdc-slider--display-markers",
            IN_TRANSIT: "mdc-slider--in-transit",
            IS_DISCRETE: "mdc-slider--discrete"
        };
        e.strings = {
            ARIA_DISABLED: "aria-disabled",
            ARIA_VALUEMAX: "aria-valuemax",
            ARIA_VALUEMIN: "aria-valuemin",
            ARIA_VALUENOW: "aria-valuenow",
            CHANGE_EVENT: "MDCSlider:change",
            INPUT_EVENT: "MDCSlider:input",
            PIN_VALUE_MARKER_SELECTOR: ".mdc-slider__pin-value-marker",
            STEP_DATA_ATTR: "data-step",
            THUMB_CONTAINER_SELECTOR: ".mdc-slider__thumb-container",
            TRACK_MARKER_CONTAINER_SELECTOR: ".mdc-slider__track-marker-container",
            TRACK_SELECTOR: ".mdc-slider__track"
        };
        e.numbers = {
            PAGE_FACTOR: 4
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ANIMATING: "mdc-tab-scroller--animating",
            SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
            SCROLL_TEST: "mdc-tab-scroller__test"
        };
        e.strings = {
            AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
            CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });

        function i(t) {
            this.adapter_ = t
        }
        e.MDCTabScrollerRTL = i, e.default = i
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(89),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setAttr: function() {},
                        activateIndicator: function() {},
                        deactivateIndicator: function() {},
                        notifyInteracted: function() {},
                        getOffsetLeft: function() {
                            return 0
                        },
                        getOffsetWidth: function() {
                            return 0
                        },
                        getContentOffsetLeft: function() {
                            return 0
                        },
                        getContentOffsetWidth: function() {
                            return 0
                        },
                        focus: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.handleClick = function() {
                this.adapter_.notifyInteracted()
            }, l.prototype.isActive = function() {
                return this.adapter_.hasClass(c.cssClasses.ACTIVE)
            }, l.prototype.setFocusOnActivate = function(t) {
                this.focusOnActivate_ = t
            }, l.prototype.activate = function(t) {
                this.adapter_.addClass(c.cssClasses.ACTIVE), this.adapter_.setAttr(c.strings.ARIA_SELECTED, "true"), this.adapter_.setAttr(c.strings.TABINDEX, "0"), this.adapter_.activateIndicator(t), this.focusOnActivate_ && this.adapter_.focus()
            }, l.prototype.deactivate = function() {
                this.isActive() && (this.adapter_.removeClass(c.cssClasses.ACTIVE), this.adapter_.setAttr(c.strings.ARIA_SELECTED, "false"), this.adapter_.setAttr(c.strings.TABINDEX, "-1"), this.adapter_.deactivateIndicator())
            }, l.prototype.computeDimensions = function() {
                var t = this.adapter_.getOffsetWidth(),
                    e = this.adapter_.getOffsetLeft(),
                    n = this.adapter_.getContentOffsetWidth(),
                    i = this.adapter_.getContentOffsetLeft();
                return {
                    contentLeft: e + i,
                    contentRight: e + i + n,
                    rootLeft: e,
                    rootRight: e + t
                }
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.focusOnActivate_ = !0, e
        }
        e.MDCTabFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(93),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        setContent: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.setCounterValue = function(t, e) {
                t = Math.min(t, e), this.adapter_.setContent(t + " / " + e)
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCTextFieldCharacterCounterFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            ARIA_CONTROLS: "aria-controls",
            ICON_SELECTOR: ".mdc-text-field__icon",
            INPUT_SELECTOR: ".mdc-text-field__input",
            LABEL_SELECTOR: ".mdc-floating-label",
            LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
            OUTLINE_SELECTOR: ".mdc-notched-outline"
        };
        e.cssClasses = {
            DENSE: "mdc-text-field--dense",
            DISABLED: "mdc-text-field--disabled",
            FOCUSED: "mdc-text-field--focused",
            FULLWIDTH: "mdc-text-field--fullwidth",
            HELPER_LINE: "mdc-text-field-helper-line",
            INVALID: "mdc-text-field--invalid",
            NO_LABEL: "mdc-text-field--no-label",
            OUTLINED: "mdc-text-field--outlined",
            ROOT: "mdc-text-field",
            TEXTAREA: "mdc-text-field--textarea",
            WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
            WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon"
        };
        e.numbers = {
            DENSE_LABEL_SCALE: .923,
            LABEL_SCALE: .75
        };
        e.VALIDATION_ATTR_WHITELIST = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"];
        e.ALWAYS_FLOAT_TYPES = ["color", "date", "datetime-local", "month", "range", "time", "week"]
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(96),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setAttr: function() {},
                        removeAttr: function() {},
                        setContent: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.setContent = function(t) {
                this.adapter_.setContent(t)
            }, l.prototype.setPersistent = function(t) {
                t ? this.adapter_.addClass(c.cssClasses.HELPER_TEXT_PERSISTENT) : this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_PERSISTENT)
            }, l.prototype.setValidation = function(t) {
                t ? this.adapter_.addClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG) : this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)
            }, l.prototype.showToScreenReader = function() {
                this.adapter_.removeAttr(c.strings.ARIA_HIDDEN)
            }, l.prototype.setValidity = function(t) {
                var e = this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_PERSISTENT),
                    n = this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG) && !t;
                n ? this.adapter_.setAttr(c.strings.ROLE, "alert") : this.adapter_.removeAttr(c.strings.ROLE), e || n || this.hide_()
            }, l.prototype.hide_ = function() {
                this.adapter_.setAttr(c.strings.ARIA_HIDDEN, "true")
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCTextFieldHelperTextFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(7),
            a = n(35),
            c = (o = a.MDCTopAppBarBaseFoundation, r(u, o), u.prototype.destroy = function() {
                o.prototype.destroy.call(this), this.adapter_.setStyle("top", "")
            }, u.prototype.handleTargetScroll = function() {
                var t = Math.max(this.adapter_.getViewportScrollY(), 0),
                    e = t - this.lastScrollPosition_;
                this.lastScrollPosition_ = t, this.isCurrentlyBeingResized_ || (this.currentAppBarOffsetTop_ -= e, 0 < this.currentAppBarOffsetTop_ ? this.currentAppBarOffsetTop_ = 0 : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ && (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_), this.moveTopAppBar_())
            }, u.prototype.handleWindowResize = function() {
                var t = this;
                this.resizeThrottleId_ || (this.resizeThrottleId_ = setTimeout(function() {
                    t.resizeThrottleId_ = 0, t.throttledResizeHandler_()
                }, s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)), this.isCurrentlyBeingResized_ = !0, this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_), this.resizeDebounceId_ = setTimeout(function() {
                    t.handleTargetScroll(), t.isCurrentlyBeingResized_ = !1, t.resizeDebounceId_ = 0
                }, s.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)
            }, u.prototype.checkForUpdate_ = function() {
                var t = -this.topAppBarHeight_,
                    e = this.currentAppBarOffsetTop_ < 0,
                    n = this.currentAppBarOffsetTop_ > t,
                    i = e && n;
                if (i) this.wasDocked_ = !1;
                else {
                    if (!this.wasDocked_) return this.wasDocked_ = !0;
                    if (this.isDockedShowing_ !== n) return this.isDockedShowing_ = n, !0
                }
                return i
            }, u.prototype.moveTopAppBar_ = function() {
                if (this.checkForUpdate_()) {
                    var t = this.currentAppBarOffsetTop_;
                    Math.abs(t) >= this.topAppBarHeight_ && (t = -s.numbers.MAX_TOP_APP_BAR_HEIGHT), this.adapter_.setStyle("top", t + "px")
                }
            }, u.prototype.throttledResizeHandler_ = function() {
                var t = this.adapter_.getTopAppBarHeight();
                this.topAppBarHeight_ !== t && (this.wasDocked_ = !1, this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t, this.topAppBarHeight_ = t), this.handleTargetScroll()
            }, u);

        function u(t) {
            var e = o.call(this, t) || this;
            return e.wasDocked_ = !0, e.isDockedShowing_ = !0, e.currentAppBarOffsetTop_ = 0, e.isCurrentlyBeingResized_ = !1, e.resizeThrottleId_ = 0, e.resizeDebounceId_ = 0, e.lastScrollPosition_ = e.adapter_.getViewportScrollY(), e.topAppBarHeight_ = e.adapter_.getTopAppBarHeight(), e
        }
        e.MDCTopAppBarFoundation = c, e.default = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(7),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setStyle: function() {},
                        getTopAppBarHeight: function() {
                            return 0
                        },
                        notifyNavigationIconClicked: function() {},
                        getViewportScrollY: function() {
                            return 0
                        },
                        getTotalActionItems: function() {
                            return 0
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.handleTargetScroll = function() {}, l.prototype.handleWindowResize = function() {}, l.prototype.handleNavigationClick = function() {
                this.adapter_.notifyNavigationIconClicked()
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCTopAppBarBaseFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(15),
            c = n(1),
            u = n(5),
            l = n(2),
            d = n(3),
            p = n(4),
            _ = n(38),
            f = ["checked", "indeterminate"],
            h = (s = c.MDCComponent, r(y, s), y.attachTo = function(t) {
                return new y(t)
            }, Object.defineProperty(y.prototype, "ripple", {
                get: function() {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "checked", {
                get: function() {
                    return this.nativeControl_.checked
                },
                set: function(t) {
                    this.nativeControl_.checked = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "indeterminate", {
                get: function() {
                    return this.nativeControl_.indeterminate
                },
                set: function(t) {
                    this.nativeControl_.indeterminate = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "disabled", {
                get: function() {
                    return this.nativeControl_.disabled
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "value", {
                get: function() {
                    return this.nativeControl_.value
                },
                set: function(t) {
                    this.nativeControl_.value = t
                },
                enumerable: !0,
                configurable: !0
            }), y.prototype.initialSyncWithDOM = function() {
                var t = this;
                this.handleChange_ = function() {
                    return t.foundation_.handleChange()
                }, this.handleAnimationEnd_ = function() {
                    return t.foundation_.handleAnimationEnd()
                }, this.nativeControl_.addEventListener("change", this.handleChange_), this.listen(a.getCorrectEventName(window, "animationend"), this.handleAnimationEnd_), this.installPropertyChangeHooks_()
            }, y.prototype.destroy = function() {
                this.ripple_.destroy(), this.nativeControl_.removeEventListener("change", this.handleChange_), this.unlisten(a.getCorrectEventName(window, "animationend"), this.handleAnimationEnd_), this.uninstallPropertyChangeHooks_(), s.prototype.destroy.call(this)
            }, y.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        forceLayout: function() {
                            return n.root_.offsetWidth
                        },
                        hasNativeControl: function() {
                            return !!n.nativeControl_
                        },
                        isAttachedToDOM: function() {
                            return Boolean(n.root_.parentNode)
                        },
                        isChecked: function() {
                            return n.checked
                        },
                        isIndeterminate: function() {
                            return n.indeterminate
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        removeNativeControlAttr: function(t) {
                            return n.nativeControl_.removeAttribute(t)
                        },
                        setNativeControlAttr: function(t, e) {
                            return n.nativeControl_.setAttribute(t, e)
                        },
                        setNativeControlDisabled: function(t) {
                            return n.nativeControl_.disabled = t
                        }
                    };
                return new _.MDCCheckboxFoundation(t)
            }, y.prototype.createRipple_ = function() {
                var n = this,
                    t = o({}, d.MDCRipple.createAdapter(this), {
                        deregisterInteractionHandler: function(t, e) {
                            return n.nativeControl_.removeEventListener(t, e, u.applyPassive())
                        },
                        isSurfaceActive: function() {
                            return l.matches(n.nativeControl_, ":active")
                        },
                        isUnbounded: function() {
                            return !0
                        },
                        registerInteractionHandler: function(t, e) {
                            return n.nativeControl_.addEventListener(t, e, u.applyPassive())
                        }
                    });
                return new d.MDCRipple(this.root_, new p.MDCRippleFoundation(t))
            }, y.prototype.installPropertyChangeHooks_ = function() {
                var r = this,
                    o = this.nativeControl_,
                    s = Object.getPrototypeOf(o);
                f.forEach(function(t) {
                    var e = Object.getOwnPropertyDescriptor(s, t);
                    if (C(e)) {
                        var n = e.get,
                            i = {
                                configurable: e.configurable,
                                enumerable: e.enumerable,
                                get: n,
                                set: function(t) {
                                    e.set.call(o, t), r.foundation_.handleChange()
                                }
                            };
                        Object.defineProperty(o, t, i)
                    }
                })
            }, y.prototype.uninstallPropertyChangeHooks_ = function() {
                var n = this.nativeControl_,
                    i = Object.getPrototypeOf(n);
                f.forEach(function(t) {
                    var e = Object.getOwnPropertyDescriptor(i, t);
                    C(e) && Object.defineProperty(n, t, e)
                })
            }, Object.defineProperty(y.prototype, "nativeControl_", {
                get: function() {
                    var t = _.MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR,
                        e = this.root_.querySelector(t);
                    if (!e) throw new Error("Checkbox component requires a " + t + " element");
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), y);

        function y() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t.ripple_ = t.createRipple_(), t
        }

        function C(t) {
            return !!t && "function" == typeof t.set
        }
        e.MDCCheckbox = h
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
            FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
            FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
            ROOT: "mdc-ripple-upgraded",
            UNBOUNDED: "mdc-ripple-upgraded--unbounded"
        }, e.strings = {
            VAR_FG_SCALE: "--mdc-ripple-fg-scale",
            VAR_FG_SIZE: "--mdc-ripple-fg-size",
            VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
            VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
            VAR_LEFT: "--mdc-ripple-left",
            VAR_TOP: "--mdc-ripple-top"
        }, e.numbers = {
            DEACTIVATION_TIMEOUT_MS: 225,
            FG_DEACTIVATION_MS: 150,
            INITIAL_ORIGIN_SCALE: .6,
            PADDING: 10,
            TAP_DELAY_MS: 300
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            p = n(39),
            c = (s = a.MDCFoundation, r(_, s), Object.defineProperty(_, "cssClasses", {
                get: function() {
                    return p.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_, "strings", {
                get: function() {
                    return p.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_, "numbers", {
                get: function() {
                    return p.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        forceLayout: function() {},
                        hasNativeControl: function() {
                            return !1
                        },
                        isAttachedToDOM: function() {
                            return !1
                        },
                        isChecked: function() {
                            return !1
                        },
                        isIndeterminate: function() {
                            return !1
                        },
                        removeClass: function() {},
                        removeNativeControlAttr: function() {},
                        setNativeControlAttr: function() {},
                        setNativeControlDisabled: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), _.prototype.init = function() {
                this.currentCheckState_ = this.determineCheckState_(), this.updateAriaChecked_(), this.adapter_.addClass(p.cssClasses.UPGRADED)
            }, _.prototype.destroy = function() {
                clearTimeout(this.animEndLatchTimer_)
            }, _.prototype.setDisabled = function(t) {
                this.adapter_.setNativeControlDisabled(t), t ? this.adapter_.addClass(p.cssClasses.DISABLED) : this.adapter_.removeClass(p.cssClasses.DISABLED)
            }, _.prototype.handleAnimationEnd = function() {
                var t = this;
                this.enableAnimationEndHandler_ && (clearTimeout(this.animEndLatchTimer_), this.animEndLatchTimer_ = setTimeout(function() {
                    t.adapter_.removeClass(t.currentAnimationClass_), t.enableAnimationEndHandler_ = !1
                }, p.numbers.ANIM_END_LATCH_MS))
            }, _.prototype.handleChange = function() {
                this.transitionCheckState_()
            }, _.prototype.transitionCheckState_ = function() {
                if (this.adapter_.hasNativeControl()) {
                    var t = this.currentCheckState_,
                        e = this.determineCheckState_();
                    if (t !== e) {
                        this.updateAriaChecked_();
                        var n = p.strings.TRANSITION_STATE_UNCHECKED,
                            i = p.cssClasses.SELECTED;
                        e === n ? this.adapter_.removeClass(i) : this.adapter_.addClass(i), 0 < this.currentAnimationClass_.length && (clearTimeout(this.animEndLatchTimer_), this.adapter_.forceLayout(), this.adapter_.removeClass(this.currentAnimationClass_)), this.currentAnimationClass_ = this.getTransitionAnimationClass_(t, e), this.currentCheckState_ = e, this.adapter_.isAttachedToDOM() && 0 < this.currentAnimationClass_.length && (this.adapter_.addClass(this.currentAnimationClass_), this.enableAnimationEndHandler_ = !0)
                    }
                }
            }, _.prototype.determineCheckState_ = function() {
                var t = p.strings.TRANSITION_STATE_INDETERMINATE,
                    e = p.strings.TRANSITION_STATE_CHECKED,
                    n = p.strings.TRANSITION_STATE_UNCHECKED;
                return this.adapter_.isIndeterminate() ? t : this.adapter_.isChecked() ? e : n
            }, _.prototype.getTransitionAnimationClass_ = function(t, e) {
                var n = p.strings.TRANSITION_STATE_INIT,
                    i = p.strings.TRANSITION_STATE_CHECKED,
                    r = p.strings.TRANSITION_STATE_UNCHECKED,
                    o = _.cssClasses,
                    s = o.ANIM_UNCHECKED_CHECKED,
                    a = o.ANIM_UNCHECKED_INDETERMINATE,
                    c = o.ANIM_CHECKED_UNCHECKED,
                    u = o.ANIM_CHECKED_INDETERMINATE,
                    l = o.ANIM_INDETERMINATE_CHECKED,
                    d = o.ANIM_INDETERMINATE_UNCHECKED;
                switch (t) {
                    case n:
                        return e === r ? "" : e === i ? l : d;
                    case r:
                        return e === i ? s : a;
                    case i:
                        return e === r ? c : u;
                    default:
                        return e === i ? l : d
                }
            }, _.prototype.updateAriaChecked_ = function() {
                this.adapter_.isIndeterminate() ? this.adapter_.setNativeControlAttr(p.strings.ARIA_CHECKED_ATTR, p.strings.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter_.removeNativeControlAttr(p.strings.ARIA_CHECKED_ATTR)
            }, _);

        function _(t) {
            var e = s.call(this, o({}, _.defaultAdapter, t)) || this;
            return e.currentCheckState_ = p.strings.TRANSITION_STATE_INIT, e.currentAnimationClass_ = "", e.animEndLatchTimer_ = 0, e.enableAnimationEndHandler_ = !1, e
        }
        e.MDCCheckboxFoundation = c, e.default = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
            ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
            ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
            ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
            ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
            ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
            BACKGROUND: "mdc-checkbox__background",
            CHECKED: "mdc-checkbox--checked",
            CHECKMARK: "mdc-checkbox__checkmark",
            CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
            DISABLED: "mdc-checkbox--disabled",
            INDETERMINATE: "mdc-checkbox--indeterminate",
            MIXEDMARK: "mdc-checkbox__mixedmark",
            NATIVE_CONTROL: "mdc-checkbox__native-control",
            ROOT: "mdc-checkbox",
            SELECTED: "mdc-checkbox--selected",
            UPGRADED: "mdc-checkbox--upgraded"
        }, e.strings = {
            ARIA_CHECKED_ATTR: "aria-checked",
            ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
            NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
            TRANSITION_STATE_CHECKED: "checked",
            TRANSITION_STATE_INDETERMINATE: "indeterminate",
            TRANSITION_STATE_INIT: "init",
            TRANSITION_STATE_UNCHECKED: "unchecked"
        }, e.numbers = {
            ANIM_END_LATCH_MS: 250
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(3),
            u = n(4),
            l = n(8),
            d = n(17),
            p = ["click", "keydown"],
            _ = (s = a.MDCComponent, r(f, s), Object.defineProperty(f.prototype, "selected", {
                get: function() {
                    return this.foundation_.isSelected()
                },
                set: function(t) {
                    this.foundation_.setSelected(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "shouldRemoveOnTrailingIconClick", {
                get: function() {
                    return this.foundation_.getShouldRemoveOnTrailingIconClick()
                },
                set: function(t) {
                    this.foundation_.setShouldRemoveOnTrailingIconClick(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "ripple", {
                get: function() {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "id", {
                get: function() {
                    return this.root_.id
                },
                enumerable: !0,
                configurable: !0
            }), f.attachTo = function(t) {
                return new f(t)
            }, f.prototype.initialize = function(t) {
                var e = this;
                void 0 === t && (t = function(t, e) {
                    return new c.MDCRipple(t, e)
                }), this.leadingIcon_ = this.root_.querySelector(l.strings.LEADING_ICON_SELECTOR), this.trailingIcon_ = this.root_.querySelector(l.strings.TRAILING_ICON_SELECTOR), this.checkmark_ = this.root_.querySelector(l.strings.CHECKMARK_SELECTOR), this.primaryAction_ = this.root_.querySelector(l.strings.PRIMARY_ACTION_SELECTOR), this.trailingAction_ = this.root_.querySelector(l.strings.TRAILING_ACTION_SELECTOR);
                var n = o({}, c.MDCRipple.createAdapter(this), {
                    computeBoundingRect: function() {
                        return e.foundation_.getDimensions()
                    }
                });
                this.ripple_ = t(this.root_, new u.MDCRippleFoundation(n))
            }, f.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.handleInteraction_ = function(t) {
                    return e.foundation_.handleInteraction(t)
                }, this.handleTransitionEnd_ = function(t) {
                    return e.foundation_.handleTransitionEnd(t)
                }, this.handleTrailingIconInteraction_ = function(t) {
                    return e.foundation_.handleTrailingIconInteraction(t)
                }, this.handleKeydown_ = function(t) {
                    return e.foundation_.handleKeydown(t)
                }, p.forEach(function(t) {
                    e.listen(t, e.handleInteraction_)
                }), this.listen("transitionend", this.handleTransitionEnd_), this.listen("keydown", this.handleKeydown_), this.trailingIcon_ && p.forEach(function(t) {
                    e.trailingIcon_.addEventListener(t, e.handleTrailingIconInteraction_)
                })
            }, f.prototype.destroy = function() {
                var e = this;
                this.ripple_.destroy(), p.forEach(function(t) {
                    e.unlisten(t, e.handleInteraction_)
                }), this.unlisten("transitionend", this.handleTransitionEnd_), this.unlisten("keydown", this.handleKeydown_), this.trailingIcon_ && p.forEach(function(t) {
                    e.trailingIcon_.removeEventListener(t, e.handleTrailingIconInteraction_)
                }), s.prototype.destroy.call(this)
            }, f.prototype.beginExit = function() {
                this.foundation_.beginExit()
            }, f.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        addClassToLeadingIcon: function(t) {
                            n.leadingIcon_ && n.leadingIcon_.classList.add(t)
                        },
                        eventTargetHasClass: function(t, e) {
                            return !!t && t.classList.contains(e)
                        },
                        focusPrimaryAction: function() {
                            n.primaryAction_ && n.primaryAction_.focus()
                        },
                        focusTrailingAction: function() {
                            n.trailingAction_ && n.trailingAction_.focus()
                        },
                        getCheckmarkBoundingClientRect: function() {
                            return n.checkmark_ ? n.checkmark_.getBoundingClientRect() : null
                        },
                        getComputedStyleValue: function(t) {
                            return window.getComputedStyle(n.root_).getPropertyValue(t)
                        },
                        getRootBoundingClientRect: function() {
                            return n.root_.getBoundingClientRect()
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        hasLeadingIcon: function() {
                            return !!n.leadingIcon_
                        },
                        hasTrailingAction: function() {
                            return !!n.trailingAction_
                        },
                        isRTL: function() {
                            return "rtl" === window.getComputedStyle(n.root_).getPropertyValue("direction")
                        },
                        notifyInteraction: function() {
                            return n.emit(l.strings.INTERACTION_EVENT, {
                                chipId: n.id
                            }, !0)
                        },
                        notifyNavigation: function(t, e) {
                            return n.emit(l.strings.NAVIGATION_EVENT, {
                                chipId: n.id,
                                key: t,
                                source: e
                            }, !0)
                        },
                        notifyRemoval: function() {
                            n.emit(l.strings.REMOVAL_EVENT, {
                                chipId: n.id,
                                root: n.root_
                            }, !0)
                        },
                        notifySelection: function(t, e) {
                            return n.emit(l.strings.SELECTION_EVENT, {
                                chipId: n.id,
                                selected: t,
                                shouldIgnore: e
                            }, !0)
                        },
                        notifyTrailingIconInteraction: function() {
                            return n.emit(l.strings.TRAILING_ICON_INTERACTION_EVENT, {
                                chipId: n.id
                            }, !0)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        removeClassFromLeadingIcon: function(t) {
                            n.leadingIcon_ && n.leadingIcon_.classList.remove(t)
                        },
                        setPrimaryActionAttr: function(t, e) {
                            n.primaryAction_ && n.primaryAction_.setAttribute(t, e)
                        },
                        setStyleProperty: function(t, e) {
                            return n.root_.style.setProperty(t, e)
                        },
                        setTrailingActionAttr: function(t, e) {
                            n.trailingAction_ && n.trailingAction_.setAttribute(t, e)
                        }
                    };
                return new d.MDCChipFoundation(t)
            }, f.prototype.setSelectedFromChipSet = function(t, e) {
                this.foundation_.setSelectedFromChipSet(t, e)
            }, f.prototype.focusPrimaryAction = function() {
                this.foundation_.focusPrimaryAction()
            }, f.prototype.focusTrailingAction = function() {
                this.foundation_.focusTrailingAction()
            }, f.prototype.removeFocus = function() {
                this.foundation_.removeFocus()
            }, f.prototype.remove = function() {
                var t = this.root_.parentNode;
                null !== t && t.removeChild(this.root_)
            }, f);

        function f() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.MDCChip = _
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            u = n(8),
            c = n(42),
            l = (s = a.MDCFoundation, r(d, s), Object.defineProperty(d, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        focusChipPrimaryActionAtIndex: function() {},
                        focusChipTrailingActionAtIndex: function() {},
                        getChipListCount: function() {
                            return -1
                        },
                        getIndexOfChipById: function() {
                            return -1
                        },
                        hasClass: function() {
                            return !1
                        },
                        isRTL: function() {
                            return !1
                        },
                        removeChipAtIndex: function() {},
                        removeFocusFromChipAtIndex: function() {},
                        selectChipAtIndex: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.getSelectedChipIds = function() {
                return this.selectedChipIds_.slice()
            }, d.prototype.select = function(t) {
                this.select_(t, !1)
            }, d.prototype.handleChipInteraction = function(t) {
                var e = this.adapter_.getIndexOfChipById(t);
                this.removeFocusFromChipsExcept_(e), (this.adapter_.hasClass(c.cssClasses.CHOICE) || this.adapter_.hasClass(c.cssClasses.FILTER)) && this.toggleSelect_(t)
            }, d.prototype.handleChipSelection = function(t, e, n) {
                if (!n) {
                    var i = 0 <= this.selectedChipIds_.indexOf(t);
                    e && !i ? this.select(t) : !e && i && this.deselect_(t)
                }
            }, d.prototype.handleChipRemoval = function(t) {
                var e = this.adapter_.getIndexOfChipById(t);
                this.deselectAndNotifyClients_(t), this.adapter_.removeChipAtIndex(e);
                var n = this.adapter_.getChipListCount() - 1,
                    i = Math.min(e, n);
                this.removeFocusFromChipsExcept_(i), this.adapter_.focusChipTrailingActionAtIndex(i)
            }, d.prototype.handleChipNavigation = function(t, e, n) {
                var i = this.adapter_.getChipListCount() - 1,
                    r = this.adapter_.getIndexOfChipById(t);
                if (-1 !== r && u.navigationKeys.has(e)) {
                    var o = this.adapter_.isRTL(),
                        s = e === u.strings.ARROW_RIGHT_KEY && !o || e === u.strings.ARROW_LEFT_KEY && o || e === u.strings.ARROW_DOWN_KEY,
                        a = e === u.strings.HOME_KEY,
                        c = e === u.strings.END_KEY;
                    s ? r++ : a ? r = 0 : c ? r = i : r--, r < 0 || i < r || (this.removeFocusFromChipsExcept_(r), this.focusChipAction_(r, e, n))
                }
            }, d.prototype.focusChipAction_ = function(t, e, n) {
                var i = u.jumpChipKeys.has(e);
                if (i && n === u.EventSource.PRIMARY) return this.adapter_.focusChipPrimaryActionAtIndex(t);
                if (i && n === u.EventSource.TRAILING) return this.adapter_.focusChipTrailingActionAtIndex(t);
                var r = this.getDirection_(e);
                return r === u.Direction.LEFT ? this.adapter_.focusChipTrailingActionAtIndex(t) : r === u.Direction.RIGHT ? this.adapter_.focusChipPrimaryActionAtIndex(t) : void 0
            }, d.prototype.getDirection_ = function(t) {
                var e = this.adapter_.isRTL();
                return t === u.strings.ARROW_LEFT_KEY && !e || t === u.strings.ARROW_RIGHT_KEY && e ? u.Direction.LEFT : u.Direction.RIGHT
            }, d.prototype.deselect_ = function(t, e) {
                void 0 === e && (e = !1);
                var n = this.selectedChipIds_.indexOf(t);
                if (0 <= n) {
                    this.selectedChipIds_.splice(n, 1);
                    var i = this.adapter_.getIndexOfChipById(t);
                    this.adapter_.selectChipAtIndex(i, !1, e)
                }
            }, d.prototype.deselectAndNotifyClients_ = function(t) {
                this.deselect_(t, !0)
            }, d.prototype.toggleSelect_ = function(t) {
                0 <= this.selectedChipIds_.indexOf(t) ? this.deselectAndNotifyClients_(t) : this.selectAndNotifyClients_(t)
            }, d.prototype.removeFocusFromChipsExcept_ = function(t) {
                for (var e = this.adapter_.getChipListCount(), n = 0; n < e; n++) n !== t && this.adapter_.removeFocusFromChipAtIndex(n)
            }, d.prototype.selectAndNotifyClients_ = function(t) {
                this.select_(t, !0)
            }, d.prototype.select_ = function(t, e) {
                if (!(0 <= this.selectedChipIds_.indexOf(t))) {
                    if (this.adapter_.hasClass(c.cssClasses.CHOICE) && 0 < this.selectedChipIds_.length) {
                        var n = this.selectedChipIds_[0],
                            i = this.adapter_.getIndexOfChipById(n);
                        this.selectedChipIds_ = [], this.adapter_.selectChipAtIndex(i, !1, e)
                    }
                    this.selectedChipIds_.push(t);
                    var r = this.adapter_.getIndexOfChipById(t);
                    this.adapter_.selectChipAtIndex(r, !0, e)
                }
            }, d);

        function d(t) {
            var e = s.call(this, o({}, d.defaultAdapter, t)) || this;
            return e.selectedChipIds_ = [], e
        }
        e.MDCChipSetFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.strings = {
            CHIP_SELECTOR: ".mdc-chip"
        }, e.cssClasses = {
            CHOICE: "mdc-chip-set--choice",
            FILTER: "mdc-chip-set--filter"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__awaiter || function(o, s, a, c) {
                return new(a = a || Promise)(function(t, e) {
                    function n(t) {
                        try {
                            r(c.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(t) {
                        try {
                            r(c.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function r(e) {
                        e.done ? t(e.value) : new a(function(t) {
                            t(e.value)
                        }).then(n, i)
                    }
                    r((c = c.apply(o, s || [])).next())
                })
            },
            a = this && this.__generator || function(n, i) {
                var r, o, s, t, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                e = i.call(n, a)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c, u = n(0),
            l = n(18),
            d = (c = u.MDCFoundation, r(p, c), Object.defineProperty(p, "defaultAdapter", {
                get: function() {
                    return {
                        addClassAtRowIndex: function() {},
                        getRowCount: function() {
                            return 0
                        },
                        getRowElements: function() {
                            return []
                        },
                        getRowIdAtIndex: function() {
                            return ""
                        },
                        getRowIndexByChildElement: function() {
                            return 0
                        },
                        getSelectedRowCount: function() {
                            return 0
                        },
                        isCheckboxAtRowIndexChecked: function() {
                            return !1
                        },
                        isHeaderRowCheckboxChecked: function() {
                            return !1
                        },
                        isRowsSelectable: function() {
                            return !1
                        },
                        notifyRowSelectionChanged: function() {},
                        notifySelectedAll: function() {},
                        notifyUnselectedAll: function() {},
                        registerHeaderRowCheckbox: function() {},
                        registerRowCheckboxes: function() {},
                        removeClassAtRowIndex: function() {},
                        setAttributeAtRowIndex: function() {},
                        setHeaderRowCheckboxChecked: function() {},
                        setHeaderRowCheckboxIndeterminate: function() {},
                        setRowCheckboxCheckedAtIndex: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.layout = function() {
                this.adapter_.isRowsSelectable() && (this.adapter_.registerHeaderRowCheckbox(), this.adapter_.registerRowCheckboxes(), this.setHeaderRowCheckboxState_())
            }, p.prototype.layoutAsync = function() {
                return s(this, void 0, void 0, function() {
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.adapter_.isRowsSelectable() ? [4, this.adapter_.registerHeaderRowCheckbox()] : [3, 3];
                            case 1:
                                return t.sent(), [4, this.adapter_.registerRowCheckboxes()];
                            case 2:
                                t.sent(), this.setHeaderRowCheckboxState_(), t.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, p.prototype.getRows = function() {
                return this.adapter_.getRowElements()
            }, p.prototype.setSelectedRowIds = function(t) {
                for (var e = 0; e < this.adapter_.getRowCount(); e++) {
                    var n = this.adapter_.getRowIdAtIndex(e),
                        i = !1;
                    n && 0 <= t.indexOf(n) && (i = !0), this.adapter_.setRowCheckboxCheckedAtIndex(e, i), this.selectRowAtIndex_(e, i)
                }
                this.setHeaderRowCheckboxState_()
            }, p.prototype.getSelectedRowIds = function() {
                for (var t = [], e = 0; e < this.adapter_.getRowCount(); e++) this.adapter_.isCheckboxAtRowIndexChecked(e) && t.push(this.adapter_.getRowIdAtIndex(e));
                return t
            }, p.prototype.handleHeaderRowCheckboxChange = function() {
                for (var t = this.adapter_.isHeaderRowCheckboxChecked(), e = 0; e < this.adapter_.getRowCount(); e++) this.adapter_.setRowCheckboxCheckedAtIndex(e, t), this.selectRowAtIndex_(e, t);
                t ? this.adapter_.notifySelectedAll() : this.adapter_.notifyUnselectedAll()
            }, p.prototype.handleRowCheckboxChange = function(t) {
                var e = this.adapter_.getRowIndexByChildElement(t.target);
                if (-1 !== e) {
                    var n = this.adapter_.isCheckboxAtRowIndexChecked(e);
                    this.selectRowAtIndex_(e, n), this.setHeaderRowCheckboxState_();
                    var i = this.adapter_.getRowIdAtIndex(e);
                    this.adapter_.notifyRowSelectionChanged({
                        rowId: i,
                        rowIndex: e,
                        selected: n
                    })
                }
            }, p.prototype.setHeaderRowCheckboxState_ = function() {
                this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount() ? (this.adapter_.setHeaderRowCheckboxChecked(!0), this.adapter_.setHeaderRowCheckboxIndeterminate(!1)) : (0 === this.adapter_.getSelectedRowCount() ? this.adapter_.setHeaderRowCheckboxIndeterminate(!1) : this.adapter_.setHeaderRowCheckboxIndeterminate(!0), this.adapter_.setHeaderRowCheckboxChecked(!1))
            }, p.prototype.selectRowAtIndex_ = function(t, e) {
                e ? (this.adapter_.addClassAtRowIndex(t, l.cssClasses.ROW_SELECTED), this.adapter_.setAttributeAtRowIndex(t, l.strings.ARIA_SELECTED, "true")) : (this.adapter_.removeClassAtRowIndex(t, l.cssClasses.ROW_SELECTED), this.adapter_.setAttributeAtRowIndex(t, l.strings.ARIA_SELECTED, "false"))
            }, p);

        function p(t) {
            return c.call(this, o({}, p.defaultAdapter, t)) || this
        }
        e.MDCDataTableFoundation = d
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n(114));
        e.createFocusTrapInstance = function(t, e, n) {
            return void 0 === e && (e = r.default), e(t, {
                clickOutsideDeactivates: !0,
                escapeDeactivates: !1,
                initialFocus: n
            })
        }, e.isScrollable = function(t) {
            return !!t && t.scrollHeight > t.offsetHeight
        }, e.areTopsMisaligned = function(t) {
            var e = new Set;
            return [].forEach.call(t, function(t) {
                return e.add(t.offsetTop)
            }), 1 < e.size
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(46),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addBodyClass: function() {},
                        addClass: function() {},
                        areButtonsStacked: function() {
                            return !1
                        },
                        clickDefaultButton: function() {},
                        eventTargetMatches: function() {
                            return !1
                        },
                        getActionFromEvent: function() {
                            return ""
                        },
                        getInitialFocusEl: function() {
                            return null
                        },
                        hasClass: function() {
                            return !1
                        },
                        isContentScrollable: function() {
                            return !1
                        },
                        notifyClosed: function() {},
                        notifyClosing: function() {},
                        notifyOpened: function() {},
                        notifyOpening: function() {},
                        releaseFocus: function() {},
                        removeBodyClass: function() {},
                        removeClass: function() {},
                        reverseButtons: function() {},
                        trapFocus: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.adapter_.hasClass(c.cssClasses.STACKED) && this.setAutoStackButtons(!1)
            }, l.prototype.destroy = function() {
                this.isOpen_ && this.close(c.strings.DESTROY_ACTION), this.animationTimer_ && (clearTimeout(this.animationTimer_), this.handleAnimationTimerEnd_()), this.layoutFrame_ && (cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = 0)
            }, l.prototype.open = function() {
                var t = this;
                this.isOpen_ = !0, this.adapter_.notifyOpening(), this.adapter_.addClass(c.cssClasses.OPENING), this.runNextAnimationFrame_(function() {
                    t.adapter_.addClass(c.cssClasses.OPEN), t.adapter_.addBodyClass(c.cssClasses.SCROLL_LOCK), t.layout(), t.animationTimer_ = setTimeout(function() {
                        t.handleAnimationTimerEnd_(), t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()), t.adapter_.notifyOpened()
                    }, c.numbers.DIALOG_ANIMATION_OPEN_TIME_MS)
                })
            }, l.prototype.close = function(t) {
                var e = this;
                void 0 === t && (t = ""), this.isOpen_ && (this.isOpen_ = !1, this.adapter_.notifyClosing(t), this.adapter_.addClass(c.cssClasses.CLOSING), this.adapter_.removeClass(c.cssClasses.OPEN), this.adapter_.removeBodyClass(c.cssClasses.SCROLL_LOCK), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout(function() {
                    e.adapter_.releaseFocus(), e.handleAnimationTimerEnd_(), e.adapter_.notifyClosed(t)
                }, c.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS))
            }, l.prototype.isOpen = function() {
                return this.isOpen_
            }, l.prototype.getEscapeKeyAction = function() {
                return this.escapeKeyAction_
            }, l.prototype.setEscapeKeyAction = function(t) {
                this.escapeKeyAction_ = t
            }, l.prototype.getScrimClickAction = function() {
                return this.scrimClickAction_
            }, l.prototype.setScrimClickAction = function(t) {
                this.scrimClickAction_ = t
            }, l.prototype.getAutoStackButtons = function() {
                return this.autoStackButtons_
            }, l.prototype.setAutoStackButtons = function(t) {
                this.autoStackButtons_ = t
            }, l.prototype.layout = function() {
                var t = this;
                this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function() {
                    t.layoutInternal_(), t.layoutFrame_ = 0
                })
            }, l.prototype.handleClick = function(t) {
                if (this.adapter_.eventTargetMatches(t.target, c.strings.SCRIM_SELECTOR) && "" !== this.scrimClickAction_) this.close(this.scrimClickAction_);
                else {
                    var e = this.adapter_.getActionFromEvent(t);
                    e && this.close(e)
                }
            }, l.prototype.handleKeydown = function(t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                if (e && !this.adapter_.getActionFromEvent(t)) {
                    var n = !this.adapter_.eventTargetMatches(t.target, c.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR);
                    e && n && this.adapter_.clickDefaultButton()
                }
            }, l.prototype.handleDocumentKeydown = function(t) {
                "Escape" !== t.key && 27 !== t.keyCode || "" === this.escapeKeyAction_ || this.close(this.escapeKeyAction_)
            }, l.prototype.layoutInternal_ = function() {
                this.autoStackButtons_ && this.detectStackedButtons_(), this.detectScrollableContent_()
            }, l.prototype.handleAnimationTimerEnd_ = function() {
                this.animationTimer_ = 0, this.adapter_.removeClass(c.cssClasses.OPENING), this.adapter_.removeClass(c.cssClasses.CLOSING)
            }, l.prototype.runNextAnimationFrame_ = function(t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function() {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                })
            }, l.prototype.detectStackedButtons_ = function() {
                this.adapter_.removeClass(c.cssClasses.STACKED);
                var t = this.adapter_.areButtonsStacked();
                t && this.adapter_.addClass(c.cssClasses.STACKED), t !== this.areButtonsStacked_ && (this.adapter_.reverseButtons(), this.areButtonsStacked_ = t)
            }, l.prototype.detectScrollableContent_ = function() {
                this.adapter_.removeClass(c.cssClasses.SCROLLABLE), this.adapter_.isContentScrollable() && this.adapter_.addClass(c.cssClasses.SCROLLABLE)
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.isOpen_ = !1, e.animationFrame_ = 0, e.animationTimer_ = 0, e.layoutFrame_ = 0, e.escapeKeyAction_ = c.strings.CLOSE_ACTION, e.scrimClickAction_ = c.strings.CLOSE_ACTION, e.autoStackButtons_ = !0, e.areButtonsStacked_ = !1, e
        }
        e.MDCDialogFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            CLOSING: "mdc-dialog--closing",
            OPEN: "mdc-dialog--open",
            OPENING: "mdc-dialog--opening",
            SCROLLABLE: "mdc-dialog--scrollable",
            SCROLL_LOCK: "mdc-dialog-scroll-lock",
            STACKED: "mdc-dialog--stacked"
        }, e.strings = {
            ACTION_ATTRIBUTE: "data-mdc-dialog-action",
            BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
            BUTTON_SELECTOR: ".mdc-dialog__button",
            CLOSED_EVENT: "MDCDialog:closed",
            CLOSE_ACTION: "close",
            CLOSING_EVENT: "MDCDialog:closing",
            CONTAINER_SELECTOR: ".mdc-dialog__container",
            CONTENT_SELECTOR: ".mdc-dialog__content",
            DESTROY_ACTION: "destroy",
            INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
            OPENED_EVENT: "MDCDialog:opened",
            OPENING_EVENT: "MDCDialog:opening",
            SCRIM_SELECTOR: ".mdc-dialog__scrim",
            SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".mdc-menu .mdc-list-item"].join(", "),
            SURFACE_SELECTOR: ".mdc-dialog__surface"
        }, e.numbers = {
            DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
            DIALOG_ANIMATION_OPEN_TIME_MS: 150
        }
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n(48));
        e.createFocusTrapInstance = function(t, e) {
            return void 0 === e && (e = r.default), e(t, {
                clickOutsideDeactivates: !0,
                escapeDeactivates: !1,
                initialFocus: void 0,
                returnFocusOnDeactivate: !1
            })
        }
    }, function(t, e, n) {
        var i, g = n(120),
            m = n(121),
            v = (i = [], {
                activateTrap: function(t) {
                    if (0 < i.length) {
                        var e = i[i.length - 1];
                        e !== t && e.pause()
                    }
                    var n = i.indexOf(t); - 1 === n || i.splice(n, 1), i.push(t)
                },
                deactivateTrap: function(t) {
                    var e = i.indexOf(t); - 1 !== e && i.splice(e, 1), 0 < i.length && i[i.length - 1].unpause()
                }
            });

        function E(t) {
            return setTimeout(t, 0)
        }
        t.exports = function(t, e) {
            var i = document,
                n = "string" == typeof t ? i.querySelector(t) : t,
                r = m({
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0
                }, e),
                o = {
                    firstTabbableNode: null,
                    lastTabbableNode: null,
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1
                },
                s = {
                    activate: function(t) {
                        if (o.active) return;
                        y(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = i.activeElement;
                        var e = t && t.onActivate ? t.onActivate : r.onActivate;
                        e && e();
                        return c(), s
                    },
                    deactivate: a,
                    pause: function() {
                        if (o.paused || !o.active) return;
                        o.paused = !0, u()
                    },
                    unpause: function() {
                        if (!o.paused || !o.active) return;
                        o.paused = !1, y(), c()
                    }
                };
            return s;

            function a(t) {
                if (o.active) {
                    u(), o.active = !1, o.paused = !1, v.deactivateTrap(s);
                    var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : r.onDeactivate;
                    return e && e(), (t && void 0 !== t.returnFocus ? t.returnFocus : r.returnFocusOnDeactivate) && E(function() {
                        C(o.nodeFocusedBeforeActivation)
                    }), s
                }
            }

            function c() {
                if (o.active) return v.activateTrap(s), E(function() {
                    C(d())
                }), i.addEventListener("focusin", _, !0), i.addEventListener("mousedown", p, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("touchstart", p, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("click", h, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("keydown", f, {
                    capture: !0,
                    passive: !1
                }), s
            }

            function u() {
                if (o.active) return i.removeEventListener("focusin", _, !0), i.removeEventListener("mousedown", p, !0), i.removeEventListener("touchstart", p, !0), i.removeEventListener("click", h, !0), i.removeEventListener("keydown", f, !0), s
            }

            function l(t) {
                var e = r[t],
                    n = e;
                if (!e) return null;
                if ("string" == typeof e && !(n = i.querySelector(e))) throw new Error("`" + t + "` refers to no known node");
                if ("function" == typeof e && !(n = e())) throw new Error("`" + t + "` did not return a node");
                return n
            }

            function d() {
                var t;
                if (!(t = null !== l("initialFocus") ? l("initialFocus") : n.contains(i.activeElement) ? i.activeElement : o.firstTabbableNode || l("fallbackFocus"))) throw new Error("You can't have a focus-trap without at least one focusable element");
                return t
            }

            function p(t) {
                n.contains(t.target) || (r.clickOutsideDeactivates ? a({
                    returnFocus: !g.isFocusable(t.target)
                }) : t.preventDefault())
            }

            function _(t) {
                n.contains(t.target) || t.target instanceof Document || (t.stopImmediatePropagation(), C(o.mostRecentlyFocusedNode || d()))
            }

            function f(t) {
                if (!1 !== r.escapeDeactivates && function(t) {
                        return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
                    }(t)) return t.preventDefault(), void a();
                ! function(t) {
                    return "Tab" === t.key || 9 === t.keyCode
                }(t) || function(t) {
                    if (y(), t.shiftKey && t.target === o.firstTabbableNode) return t.preventDefault(), C(o.lastTabbableNode);
                    if (!t.shiftKey && t.target === o.lastTabbableNode) t.preventDefault(), C(o.firstTabbableNode)
                }(t)
            }

            function h(t) {
                r.clickOutsideDeactivates || n.contains(t.target) || (t.preventDefault(), t.stopImmediatePropagation())
            }

            function y() {
                var t = g(n);
                o.firstTabbableNode = t[0] || d(), o.lastTabbableNode = t[t.length - 1] || d()
            }

            function C(t) {
                t !== i.activeElement && (t && t.focus ? (t.focus(), function(t) {
                    return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
                }(o.mostRecentlyFocusedNode = t) && t.select()) : C(d()))
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ANIMATE: "mdc-drawer--animate",
            CLOSING: "mdc-drawer--closing",
            DISMISSIBLE: "mdc-drawer--dismissible",
            MODAL: "mdc-drawer--modal",
            OPEN: "mdc-drawer--open",
            OPENING: "mdc-drawer--opening",
            ROOT: "mdc-drawer"
        };
        e.strings = {
            APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
            CLOSE_EVENT: "MDCDrawer:closed",
            OPEN_EVENT: "MDCDrawer:opened",
            SCRIM_SELECTOR: ".mdc-drawer-scrim"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(20),
            a = (o = s.MDCDismissibleDrawerFoundation, r(c, o), c.prototype.handleScrimClick = function() {
                this.close()
            }, c.prototype.opened_ = function() {
                this.adapter_.trapFocus()
            }, c.prototype.closed_ = function() {
                this.adapter_.releaseFocus()
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCModalDrawerFoundation = a, e.default = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
            LABEL_SHAKE: "mdc-floating-label--shake",
            ROOT: "mdc-floating-label"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(53),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        activateInputRipple: function() {},
                        deactivateInputRipple: function() {},
                        deregisterInteractionHandler: function() {},
                        registerInteractionHandler: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.adapter_.registerInteractionHandler("click", this.clickHandler_)
            }, l.prototype.destroy = function() {
                this.adapter_.deregisterInteractionHandler("click", this.clickHandler_)
            }, l.prototype.handleClick_ = function() {
                var t = this;
                this.adapter_.activateInputRipple(), requestAnimationFrame(function() {
                    return t.adapter_.deactivateInputRipple()
                })
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.clickHandler_ = function() {
                return e.handleClick_()
            }, e
        }
        e.MDCFormFieldFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            ROOT: "mdc-form-field"
        }, e.strings = {
            LABEL_SELECTOR: ".mdc-form-field > label"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(55),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        deregisterResizeHandler: function() {},
                        getNumberOfTiles: function() {
                            return 0
                        },
                        getOffsetWidth: function() {
                            return 0
                        },
                        getOffsetWidthForTileAtIndex: function() {
                            return 0
                        },
                        registerResizeHandler: function() {},
                        setStyleForTilesElement: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.alignCenter(), this.adapter_.registerResizeHandler(this.resizeHandler_)
            }, l.prototype.destroy = function() {
                this.adapter_.deregisterResizeHandler(this.resizeHandler_)
            }, l.prototype.alignCenter = function() {
                var t = this;
                cancelAnimationFrame(this.resizeFrame_), this.resizeFrame_ = requestAnimationFrame(function() {
                    t.alignCenter_(), t.resizeFrame_ = 0
                })
            }, l.prototype.alignCenter_ = function() {
                if (0 !== this.adapter_.getNumberOfTiles()) {
                    var t = this.adapter_.getOffsetWidth(),
                        e = this.adapter_.getOffsetWidthForTileAtIndex(0),
                        n = e * Math.floor(t / e);
                    this.adapter_.setStyleForTilesElement("width", n + "px")
                }
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.resizeFrame_ = 0, e.resizeHandler_ = e.alignCenter.bind(e), e
        }
        e.MDCGridListFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.strings = {
            TILES_SELECTOR: ".mdc-grid-list__tiles",
            TILE_SELECTOR: ".mdc-grid-tile"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(57),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        notifyChange: function() {},
                        removeClass: function() {},
                        setAttr: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.adapter_.setAttr(c.strings.ARIA_PRESSED, "" + this.isOn())
            }, l.prototype.handleClick = function() {
                this.toggle(), this.adapter_.notifyChange({
                    isOn: this.isOn()
                })
            }, l.prototype.isOn = function() {
                return this.adapter_.hasClass(c.cssClasses.ICON_BUTTON_ON)
            }, l.prototype.toggle = function(t) {
                void 0 === t && (t = !this.isOn()), t ? this.adapter_.addClass(c.cssClasses.ICON_BUTTON_ON) : this.adapter_.removeClass(c.cssClasses.ICON_BUTTON_ON), this.adapter_.setAttr(c.strings.ARIA_PRESSED, "" + t)
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCIconButtonToggleFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            ICON_BUTTON_ON: "mdc-icon-button--on",
            ROOT: "mdc-icon-button"
        }, e.strings = {
            ARIA_PRESSED: "aria-pressed",
            CHANGE_EVENT: "MDCIconButtonToggle:change"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(59),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setStyle: function() {},
                        registerEventHandler: function() {},
                        deregisterEventHandler: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.init = function() {
                this.adapter_.registerEventHandler("transitionend", this.transitionEndHandler_)
            }, l.prototype.destroy = function() {
                this.adapter_.deregisterEventHandler("transitionend", this.transitionEndHandler_)
            }, l.prototype.activate = function() {
                this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING), this.adapter_.addClass(c.cssClasses.LINE_RIPPLE_ACTIVE)
            }, l.prototype.setRippleCenter = function(t) {
                this.adapter_.setStyle("transform-origin", t + "px center")
            }, l.prototype.deactivate = function() {
                this.adapter_.addClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING)
            }, l.prototype.handleTransitionEnd = function(t) {
                var e = this.adapter_.hasClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING);
                "opacity" === t.propertyName && e && (this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_ACTIVE), this.adapter_.removeClass(c.cssClasses.LINE_RIPPLE_DEACTIVATING))
            }, l);

        function l(t) {
            var e = s.call(this, o({}, l.defaultAdapter, t)) || this;
            return e.transitionEndHandler_ = function(t) {
                return e.handleTransitionEnd(t)
            }, e
        }
        e.MDCLineRippleFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
            LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(15),
            c = n(0),
            u = n(61),
            l = (s = c.MDCFoundation, r(d, s), Object.defineProperty(d, "cssClasses", {
                get: function() {
                    return u.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "strings", {
                get: function() {
                    return u.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        forceLayout: function() {},
                        getBuffer: function() {
                            return null
                        },
                        getPrimaryBar: function() {
                            return null
                        },
                        hasClass: function() {
                            return !1
                        },
                        removeClass: function() {},
                        setStyle: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.init = function() {
                this.isDeterminate_ = !this.adapter_.hasClass(u.cssClasses.INDETERMINATE_CLASS), this.isReversed_ = this.adapter_.hasClass(u.cssClasses.REVERSED_CLASS), this.progress_ = 0, this.buffer_ = 1
            }, d.prototype.setDeterminate = function(t) {
                this.isDeterminate_ = t, this.isDeterminate_ ? (this.adapter_.removeClass(u.cssClasses.INDETERMINATE_CLASS), this.setScale_(this.adapter_.getPrimaryBar(), this.progress_), this.setScale_(this.adapter_.getBuffer(), this.buffer_)) : (this.isReversed_ && (this.adapter_.removeClass(u.cssClasses.REVERSED_CLASS), this.adapter_.forceLayout(), this.adapter_.addClass(u.cssClasses.REVERSED_CLASS)), this.adapter_.addClass(u.cssClasses.INDETERMINATE_CLASS), this.setScale_(this.adapter_.getPrimaryBar(), 1), this.setScale_(this.adapter_.getBuffer(), 1))
            }, d.prototype.setProgress = function(t) {
                this.progress_ = t, this.isDeterminate_ && this.setScale_(this.adapter_.getPrimaryBar(), t)
            }, d.prototype.setBuffer = function(t) {
                this.buffer_ = t, this.isDeterminate_ && this.setScale_(this.adapter_.getBuffer(), t)
            }, d.prototype.setReverse = function(t) {
                this.isReversed_ = t, this.isDeterminate_ || (this.adapter_.removeClass(u.cssClasses.INDETERMINATE_CLASS), this.adapter_.forceLayout(), this.adapter_.addClass(u.cssClasses.INDETERMINATE_CLASS)), this.isReversed_ ? this.adapter_.addClass(u.cssClasses.REVERSED_CLASS) : this.adapter_.removeClass(u.cssClasses.REVERSED_CLASS)
            }, d.prototype.open = function() {
                this.adapter_.removeClass(u.cssClasses.CLOSED_CLASS)
            }, d.prototype.close = function() {
                this.adapter_.addClass(u.cssClasses.CLOSED_CLASS)
            }, d.prototype.setScale_ = function(t, e) {
                if (t) {
                    var n = "scaleX(" + e + ")";
                    this.adapter_.setStyle(t, a.getCorrectPropertyName(window, "transform"), n)
                }
            }, d);

        function d(t) {
            return s.call(this, o({}, d.defaultAdapter, t)) || this
        }
        e.MDCLinearProgressFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.cssClasses = {
            CLOSED_CLASS: "mdc-linear-progress--closed",
            INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
            REVERSED_CLASS: "mdc-linear-progress--reversed"
        }, e.strings = {
            BUFFER_SELECTOR: ".mdc-linear-progress__buffer",
            PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
        }
    }, function(t, e, n) {
        "use strict";
        var i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getTransformPropertyName = function(t, e) {
            if (void 0 === e && (e = !1), void 0 === i || e) {
                var n = t.document.createElement("div");
                i = "transform" in n.style ? "transform" : "webkitTransform"
            }
            return i
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(6),
            u = n(11),
            l = o(n(62)),
            d = (s = a.MDCComponent, r(p, s), p.attachTo = function(t) {
                return new p(t)
            }, p.prototype.initialSyncWithDOM = function() {
                var e = this,
                    t = this.root_.parentElement;
                this.anchorElement = t && t.classList.contains(c.cssClasses.ANCHOR) ? t : null, this.root_.classList.contains(c.cssClasses.FIXED) && this.setFixedPosition(!0), this.handleKeydown_ = function(t) {
                    return e.foundation_.handleKeydown(t)
                }, this.handleBodyClick_ = function(t) {
                    return e.foundation_.handleBodyClick(t)
                }, this.registerBodyClickListener_ = function() {
                    return document.body.addEventListener("click", e.handleBodyClick_)
                }, this.deregisterBodyClickListener_ = function() {
                    return document.body.removeEventListener("click", e.handleBodyClick_)
                }, this.listen("keydown", this.handleKeydown_), this.listen(c.strings.OPENED_EVENT, this.registerBodyClickListener_), this.listen(c.strings.CLOSED_EVENT, this.deregisterBodyClickListener_)
            }, p.prototype.destroy = function() {
                this.unlisten("keydown", this.handleKeydown_), this.unlisten(c.strings.OPENED_EVENT, this.registerBodyClickListener_), this.unlisten(c.strings.CLOSED_EVENT, this.deregisterBodyClickListener_), s.prototype.destroy.call(this)
            }, p.prototype.isOpen = function() {
                return this.foundation_.isOpen()
            }, p.prototype.open = function() {
                this.foundation_.open()
            }, p.prototype.close = function(t) {
                void 0 === t && (t = !1), this.foundation_.close(t)
            }, Object.defineProperty(p.prototype, "quickOpen", {
                set: function(t) {
                    this.foundation_.setQuickOpen(t)
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.setIsHoisted = function(t) {
                this.foundation_.setIsHoisted(t)
            }, p.prototype.setMenuSurfaceAnchorElement = function(t) {
                this.anchorElement = t
            }, p.prototype.setFixedPosition = function(t) {
                t ? this.root_.classList.add(c.cssClasses.FIXED) : this.root_.classList.remove(c.cssClasses.FIXED), this.foundation_.setFixedPosition(t)
            }, p.prototype.setAbsolutePosition = function(t, e) {
                this.foundation_.setAbsolutePosition(t, e), this.setIsHoisted(!0)
            }, p.prototype.setAnchorCorner = function(t) {
                this.foundation_.setAnchorCorner(t)
            }, p.prototype.setAnchorMargin = function(t) {
                this.foundation_.setAnchorMargin(t)
            }, p.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        hasAnchor: function() {
                            return !!n.anchorElement
                        },
                        notifyClose: function() {
                            return n.emit(u.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {})
                        },
                        notifyOpen: function() {
                            return n.emit(u.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {})
                        },
                        isElementInContainer: function(t) {
                            return n.root_.contains(t)
                        },
                        isRtl: function() {
                            return "rtl" === getComputedStyle(n.root_).getPropertyValue("direction")
                        },
                        setTransformOrigin: function(t) {
                            var e = l.getTransformPropertyName(window) + "-origin";
                            n.root_.style.setProperty(e, t)
                        },
                        isFocused: function() {
                            return document.activeElement === n.root_
                        },
                        saveFocus: function() {
                            n.previousFocus_ = document.activeElement
                        },
                        restoreFocus: function() {
                            n.root_.contains(document.activeElement) && n.previousFocus_ && n.previousFocus_.focus && n.previousFocus_.focus()
                        },
                        getInnerDimensions: function() {
                            return {
                                width: n.root_.offsetWidth,
                                height: n.root_.offsetHeight
                            }
                        },
                        getAnchorDimensions: function() {
                            return n.anchorElement ? n.anchorElement.getBoundingClientRect() : null
                        },
                        getWindowDimensions: function() {
                            return {
                                width: window.innerWidth,
                                height: window.innerHeight
                            }
                        },
                        getBodyDimensions: function() {
                            return {
                                width: document.body.clientWidth,
                                height: document.body.clientHeight
                            }
                        },
                        getWindowScroll: function() {
                            return {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            }
                        },
                        setPosition: function(t) {
                            n.root_.style.left = "left" in t ? t.left + "px" : "", n.root_.style.right = "right" in t ? t.right + "px" : "", n.root_.style.top = "top" in t ? t.top + "px" : "", n.root_.style.bottom = "bottom" in t ? t.bottom + "px" : ""
                        },
                        setMaxHeight: function(t) {
                            n.root_.style.maxHeight = t
                        }
                    };
                return new u.MDCMenuSurfaceFoundation(t)
            }, p);

        function p() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.MDCMenuSurface = d
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(2),
            c = n(19),
            u = n(10),
            l = n(63),
            d = n(11),
            p = n(12),
            _ = n(65),
            f = (o = s.MDCComponent, r(h, o), h.attachTo = function(t) {
                return new h(t)
            }, h.prototype.initialize = function(t, e) {
                void 0 === t && (t = function(t) {
                    return new l.MDCMenuSurface(t)
                }), void 0 === e && (e = function(t) {
                    return new c.MDCList(t)
                }), this.menuSurfaceFactory_ = t, this.listFactory_ = e
            }, h.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
                var t = this.root_.querySelector(p.strings.LIST_SELECTOR);
                t ? (this.list_ = this.listFactory_(t), this.list_.wrapFocus = !0) : this.list_ = null, this.handleKeydown_ = function(t) {
                    return e.foundation_.handleKeydown(t)
                }, this.handleItemAction_ = function(t) {
                    return e.foundation_.handleItemAction(e.items[t.detail.index])
                }, this.handleMenuSurfaceOpened_ = function() {
                    return e.foundation_.handleMenuSurfaceOpened()
                }, this.menuSurface_.listen(d.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_), this.listen("keydown", this.handleKeydown_), this.listen(u.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_)
            }, h.prototype.destroy = function() {
                this.list_ && this.list_.destroy(), this.menuSurface_.destroy(), this.menuSurface_.unlisten(d.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_), this.unlisten("keydown", this.handleKeydown_), this.unlisten(u.MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_), o.prototype.destroy.call(this)
            }, Object.defineProperty(h.prototype, "open", {
                get: function() {
                    return this.menuSurface_.isOpen()
                },
                set: function(t) {
                    t ? this.menuSurface_.open() : this.menuSurface_.close()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "wrapFocus", {
                get: function() {
                    return !!this.list_ && this.list_.wrapFocus
                },
                set: function(t) {
                    this.list_ && (this.list_.wrapFocus = t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "items", {
                get: function() {
                    return this.list_ ? this.list_.listElements : []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "quickOpen", {
                set: function(t) {
                    this.menuSurface_.quickOpen = t
                },
                enumerable: !0,
                configurable: !0
            }), h.prototype.setDefaultFocusState = function(t) {
                this.foundation_.setDefaultFocusState(t)
            }, h.prototype.setAnchorCorner = function(t) {
                this.menuSurface_.setAnchorCorner(t)
            }, h.prototype.setAnchorMargin = function(t) {
                this.menuSurface_.setAnchorMargin(t)
            }, h.prototype.setSelectedIndex = function(t) {
                this.foundation_.setSelectedIndex(t)
            }, h.prototype.setEnabled = function(t, e) {
                this.foundation_.setEnabled(t, e)
            }, h.prototype.getOptionByIndex = function(t) {
                return t < this.items.length ? this.items[t] : null
            }, h.prototype.setFixedPosition = function(t) {
                this.menuSurface_.setFixedPosition(t)
            }, h.prototype.setIsHoisted = function(t) {
                this.menuSurface_.setIsHoisted(t)
            }, h.prototype.setAbsolutePosition = function(t, e) {
                this.menuSurface_.setAbsolutePosition(t, e)
            }, h.prototype.setAnchorElement = function(t) {
                this.menuSurface_.anchorElement = t
            }, h.prototype.getDefaultFoundation = function() {
                var i = this,
                    t = {
                        addClassToElementAtIndex: function(t, e) {
                            i.items[t].classList.add(e)
                        },
                        removeClassFromElementAtIndex: function(t, e) {
                            i.items[t].classList.remove(e)
                        },
                        addAttributeToElementAtIndex: function(t, e, n) {
                            i.items[t].setAttribute(e, n)
                        },
                        removeAttributeFromElementAtIndex: function(t, e) {
                            i.items[t].removeAttribute(e)
                        },
                        elementContainsClass: function(t, e) {
                            return t.classList.contains(e)
                        },
                        closeSurface: function(t) {
                            return i.menuSurface_.close(t)
                        },
                        getElementIndex: function(t) {
                            return i.items.indexOf(t)
                        },
                        notifySelected: function(t) {
                            return i.emit(p.strings.SELECTED_EVENT, {
                                index: t.index,
                                item: i.items[t.index]
                            })
                        },
                        getMenuItemCount: function() {
                            return i.items.length
                        },
                        focusItemAtIndex: function(t) {
                            return i.items[t].focus()
                        },
                        focusListRoot: function() {
                            return i.root_.querySelector(p.strings.LIST_SELECTOR).focus()
                        },
                        isSelectableItemAtIndex: function(t) {
                            return !!a.closest(i.items[t], "." + p.cssClasses.MENU_SELECTION_GROUP)
                        },
                        getSelectedSiblingOfItemAtIndex: function(t) {
                            var e = a.closest(i.items[t], "." + p.cssClasses.MENU_SELECTION_GROUP).querySelector("." + p.cssClasses.MENU_SELECTED_LIST_ITEM);
                            return e ? i.items.indexOf(e) : -1
                        }
                    };
                return new _.MDCMenuFoundation(t)
            }, h);

        function h() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCMenu = f
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(9),
            u = n(11),
            l = n(12),
            d = (s = a.MDCFoundation, r(p, s), Object.defineProperty(p, "cssClasses", {
                get: function() {
                    return l.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "strings", {
                get: function() {
                    return l.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "numbers", {
                get: function() {
                    return l.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "defaultAdapter", {
                get: function() {
                    return {
                        addClassToElementAtIndex: function() {},
                        removeClassFromElementAtIndex: function() {},
                        addAttributeToElementAtIndex: function() {},
                        removeAttributeFromElementAtIndex: function() {},
                        elementContainsClass: function() {
                            return !1
                        },
                        closeSurface: function() {},
                        getElementIndex: function() {
                            return -1
                        },
                        notifySelected: function() {},
                        getMenuItemCount: function() {
                            return 0
                        },
                        focusItemAtIndex: function() {},
                        focusListRoot: function() {},
                        getSelectedSiblingOfItemAtIndex: function() {
                            return -1
                        },
                        isSelectableItemAtIndex: function() {
                            return !1
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.destroy = function() {
                this.closeAnimationEndTimerId_ && clearTimeout(this.closeAnimationEndTimerId_), this.adapter_.closeSurface()
            }, p.prototype.handleKeydown = function(t) {
                var e = t.key,
                    n = t.keyCode;
                "Tab" !== e && 9 !== n || this.adapter_.closeSurface(!0)
            }, p.prototype.handleItemAction = function(e) {
                var n = this,
                    t = this.adapter_.getElementIndex(e);
                t < 0 || (this.adapter_.notifySelected({
                    index: t
                }), this.adapter_.closeSurface(), this.closeAnimationEndTimerId_ = setTimeout(function() {
                    var t = n.adapter_.getElementIndex(e);
                    n.adapter_.isSelectableItemAtIndex(t) && n.setSelectedIndex(t)
                }, u.MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION))
            }, p.prototype.handleMenuSurfaceOpened = function() {
                switch (this.defaultFocusState_) {
                    case l.DefaultFocusState.FIRST_ITEM:
                        this.adapter_.focusItemAtIndex(0);
                        break;
                    case l.DefaultFocusState.LAST_ITEM:
                        this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                        break;
                    case l.DefaultFocusState.NONE:
                        break;
                    default:
                        this.adapter_.focusListRoot()
                }
            }, p.prototype.setDefaultFocusState = function(t) {
                this.defaultFocusState_ = t
            }, p.prototype.setSelectedIndex = function(t) {
                if (this.validatedIndex_(t), !this.adapter_.isSelectableItemAtIndex(t)) throw new Error("MDCMenuFoundation: No selection group at specified index.");
                var e = this.adapter_.getSelectedSiblingOfItemAtIndex(t);
                0 <= e && (this.adapter_.removeAttributeFromElementAtIndex(e, l.strings.ARIA_CHECKED_ATTR), this.adapter_.removeClassFromElementAtIndex(e, l.cssClasses.MENU_SELECTED_LIST_ITEM)), this.adapter_.addClassToElementAtIndex(t, l.cssClasses.MENU_SELECTED_LIST_ITEM), this.adapter_.addAttributeToElementAtIndex(t, l.strings.ARIA_CHECKED_ATTR, "true")
            }, p.prototype.setEnabled = function(t, e) {
                this.validatedIndex_(t), e ? (this.adapter_.removeClassFromElementAtIndex(t, c.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter_.addAttributeToElementAtIndex(t, l.strings.ARIA_DISABLED_ATTR, "false")) : (this.adapter_.addClassToElementAtIndex(t, c.cssClasses.LIST_ITEM_DISABLED_CLASS), this.adapter_.addAttributeToElementAtIndex(t, l.strings.ARIA_DISABLED_ATTR, "true"))
            }, p.prototype.validatedIndex_ = function(t) {
                var e = this.adapter_.getMenuItemCount();
                if (!(0 <= t && t < e)) throw new Error("MDCMenuFoundation: No list item at specified index.")
            }, p);

        function p(t) {
            var e = s.call(this, o({}, p.defaultAdapter, t)) || this;
            return e.closeAnimationEndTimerId_ = 0, e.defaultFocusState_ = l.DefaultFocusState.LIST_ROOT, e
        }
        e.MDCMenuFoundation = d, e.default = d
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(25),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        setNotchWidthProperty: function() {},
                        removeNotchWidthProperty: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.notch = function(t) {
                var e = l.cssClasses.OUTLINE_NOTCHED;
                0 < t && (t += c.numbers.NOTCH_ELEMENT_PADDING), this.adapter_.setNotchWidthProperty(t), this.adapter_.addClass(e)
            }, l.prototype.closeNotch = function() {
                var t = l.cssClasses.OUTLINE_NOTCHED;
                this.adapter_.removeClass(t), this.adapter_.removeNotchWidthProperty()
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCNotchedOutlineFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(68),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        setNativeControlDisabled: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.setDisabled = function(t) {
                var e = l.cssClasses.DISABLED;
                this.adapter_.setNativeControlDisabled(t), t ? this.adapter_.addClass(e) : this.adapter_.removeClass(e)
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCRadioFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
        };
        e.cssClasses = {
            DISABLED: "mdc-radio--disabled",
            ROOT: "mdc-radio"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(6),
            u = n(26),
            l = (s = a.MDCFoundation, r(d, s), Object.defineProperty(d, "cssClasses", {
                get: function() {
                    return u.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "numbers", {
                get: function() {
                    return u.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "strings", {
                get: function() {
                    return u.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        activateBottomLine: function() {},
                        deactivateBottomLine: function() {},
                        getSelectedMenuItem: function() {
                            return null
                        },
                        hasLabel: function() {
                            return !1
                        },
                        floatLabel: function() {},
                        getLabelWidth: function() {
                            return 0
                        },
                        hasOutline: function() {
                            return !1
                        },
                        notchOutline: function() {},
                        closeOutline: function() {},
                        setRippleCenter: function() {},
                        notifyChange: function() {},
                        setSelectedText: function() {},
                        isSelectedTextFocused: function() {
                            return !1
                        },
                        getSelectedTextAttr: function() {
                            return ""
                        },
                        setSelectedTextAttr: function() {},
                        openMenu: function() {},
                        closeMenu: function() {},
                        getAnchorElement: function() {
                            return null
                        },
                        setMenuAnchorElement: function() {},
                        setMenuAnchorCorner: function() {},
                        setMenuWrapFocus: function() {},
                        setAttributeAtIndex: function() {},
                        removeAttributeAtIndex: function() {},
                        focusMenuItemAtIndex: function() {},
                        getMenuItemCount: function() {
                            return 0
                        },
                        getMenuItemValues: function() {
                            return []
                        },
                        getMenuItemTextAtIndex: function() {
                            return ""
                        },
                        getMenuItemAttr: function() {
                            return ""
                        },
                        addClassAtIndex: function() {},
                        removeClassAtIndex: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.getSelectedIndex = function() {
                return this.selectedIndex_
            }, d.prototype.setSelectedIndex = function(t, e) {
                if (void 0 === e && (e = !1), !(t >= this.adapter_.getMenuItemCount())) {
                    var n = this.selectedIndex_;
                    this.selectedIndex_ = t, this.selectedIndex_ === u.numbers.UNSET_INDEX ? this.adapter_.setSelectedText("") : this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim()), n !== u.numbers.UNSET_INDEX && (this.adapter_.removeClassAtIndex(n, u.cssClasses.SELECTED_ITEM_CLASS), this.adapter_.removeAttributeAtIndex(n, u.strings.ARIA_SELECTED_ATTR)), this.selectedIndex_ !== u.numbers.UNSET_INDEX && (this.adapter_.addClassAtIndex(this.selectedIndex_, u.cssClasses.SELECTED_ITEM_CLASS), this.adapter_.setAttributeAtIndex(this.selectedIndex_, u.strings.ARIA_SELECTED_ATTR, "true")), this.layout(), e && this.adapter_.closeMenu(), this.handleChange()
                }
            }, d.prototype.setValue = function(t) {
                var e = this.menuItemValues_.indexOf(t);
                this.setSelectedIndex(e), this.handleChange()
            }, d.prototype.getValue = function() {
                var t = this.adapter_.getSelectedMenuItem();
                return t && this.adapter_.getMenuItemAttr(t, u.strings.VALUE_ATTR) || ""
            }, d.prototype.getDisabled = function() {
                return this.disabled_
            }, d.prototype.setDisabled = function(t) {
                this.disabled_ = t, this.disabled_ ? (this.adapter_.addClass(u.cssClasses.DISABLED), this.adapter_.closeMenu()) : this.adapter_.removeClass(u.cssClasses.DISABLED), this.leadingIcon_ && this.leadingIcon_.setDisabled(this.disabled_), this.adapter_.setSelectedTextAttr("tabindex", this.disabled_ ? "-1" : "0"), this.adapter_.setSelectedTextAttr("aria-disabled", this.disabled_.toString())
            }, d.prototype.setHelperTextContent = function(t) {
                this.helperText_ && this.helperText_.setContent(t)
            }, d.prototype.layout = function() {
                if (this.adapter_.hasLabel()) {
                    var t = 0 < this.getValue().length;
                    this.notchOutline(t)
                }
            }, d.prototype.handleMenuOpened = function() {
                if (0 !== this.adapter_.getMenuItemValues().length) {
                    this.adapter_.addClass(u.cssClasses.ACTIVATED);
                    var t = 0 <= this.selectedIndex_ ? this.selectedIndex_ : 0;
                    this.adapter_.focusMenuItemAtIndex(t)
                }
            }, d.prototype.handleMenuClosed = function() {
                this.adapter_.removeClass(u.cssClasses.ACTIVATED), this.isMenuOpen_ = !1, this.adapter_.setSelectedTextAttr("aria-expanded", "false"), this.adapter_.isSelectedTextFocused() || this.blur_()
            }, d.prototype.handleChange = function() {
                this.updateLabel_(), this.adapter_.notifyChange(this.getValue()), this.adapter_.hasClass(u.cssClasses.REQUIRED) && (this.setValid(this.isValid()), this.helperText_ && this.helperText_.setValidity(this.isValid()))
            }, d.prototype.handleMenuItemAction = function(t) {
                this.setSelectedIndex(t, !0)
            }, d.prototype.handleFocus = function() {
                this.adapter_.addClass(u.cssClasses.FOCUSED), this.adapter_.hasLabel() && (this.adapter_.floatLabel(!0), this.notchOutline(!0)), this.adapter_.activateBottomLine(), this.helperText_ && this.helperText_.showToScreenReader()
            }, d.prototype.handleBlur = function() {
                this.isMenuOpen_ || this.blur_()
            }, d.prototype.handleClick = function(t) {
                this.isMenuOpen_ || (this.adapter_.setRippleCenter(t), this.adapter_.openMenu(), this.isMenuOpen_ = !0, this.adapter_.setSelectedTextAttr("aria-expanded", "true"))
            }, d.prototype.handleKeydown = function(t) {
                if (!this.isMenuOpen_) {
                    var e = "Enter" === t.key || 13 === t.keyCode,
                        n = "Space" === t.key || 32 === t.keyCode,
                        i = "ArrowUp" === t.key || 38 === t.keyCode,
                        r = "ArrowDown" === t.key || 40 === t.keyCode;
                    this.adapter_.hasClass(u.cssClasses.FOCUSED) && (e || n || i || r) && (this.adapter_.openMenu(), this.isMenuOpen_ = !0, this.adapter_.setSelectedTextAttr("aria-expanded", "true"), t.preventDefault())
                }
            }, d.prototype.notchOutline = function(t) {
                if (this.adapter_.hasOutline()) {
                    var e = this.adapter_.hasClass(u.cssClasses.FOCUSED);
                    if (t) {
                        var n = u.numbers.LABEL_SCALE,
                            i = this.adapter_.getLabelWidth() * n;
                        this.adapter_.notchOutline(i)
                    } else e || this.adapter_.closeOutline()
                }
            }, d.prototype.setLeadingIconAriaLabel = function(t) {
                this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t)
            }, d.prototype.setLeadingIconContent = function(t) {
                this.leadingIcon_ && this.leadingIcon_.setContent(t)
            }, d.prototype.setValid = function(t) {
                this.adapter_.setSelectedTextAttr("aria-invalid", (!t).toString()), t ? this.adapter_.removeClass(u.cssClasses.INVALID) : this.adapter_.addClass(u.cssClasses.INVALID)
            }, d.prototype.isValid = function() {
                return !(this.adapter_.hasClass(u.cssClasses.REQUIRED) && !this.adapter_.hasClass(u.cssClasses.DISABLED)) || this.selectedIndex_ !== u.numbers.UNSET_INDEX && (0 !== this.selectedIndex_ || Boolean(this.getValue()))
            }, d.prototype.setRequired = function(t) {
                t ? this.adapter_.addClass(u.cssClasses.REQUIRED) : this.adapter_.removeClass(u.cssClasses.REQUIRED), this.adapter_.setSelectedTextAttr("aria-required", t.toString())
            }, d.prototype.getRequired = function() {
                return "true" === this.adapter_.getSelectedTextAttr("aria-required")
            }, d.prototype.init = function() {
                var t = this.adapter_.getAnchorElement();
                t && (this.adapter_.setMenuAnchorElement(t), this.adapter_.setMenuAnchorCorner(c.Corner.BOTTOM_START)), this.adapter_.setMenuWrapFocus(!1);
                var e = this.getValue();
                e && this.setValue(e), this.updateLabel_()
            }, d.prototype.updateLabel_ = function() {
                var t = 0 < this.getValue().length;
                this.adapter_.hasLabel() && (this.notchOutline(t), this.adapter_.hasClass(u.cssClasses.FOCUSED) || this.adapter_.floatLabel(t))
            }, d.prototype.blur_ = function() {
                this.adapter_.removeClass(u.cssClasses.FOCUSED), this.updateLabel_(), this.adapter_.deactivateBottomLine(), this.adapter_.hasClass(u.cssClasses.REQUIRED) && (this.setValid(this.isValid()), this.helperText_ && this.helperText_.setValidity(this.isValid()))
            }, d);

        function d(t, e) {
            void 0 === e && (e = {});
            var n = s.call(this, o({}, d.defaultAdapter, t)) || this;
            return n.selectedIndex_ = u.numbers.UNSET_INDEX, n.disabled_ = !1, n.isMenuOpen_ = !1, n.leadingIcon_ = e.leadingIcon, n.helperText_ = e.helperText, n.menuItemValues_ = n.adapter_.getMenuItemValues(), n
        }
        e.MDCSelectFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(71),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "foundation", {
                get: function() {
                    return this.foundation_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        },
                        removeAttr: function(t) {
                            return n.root_.removeAttribute(t)
                        },
                        setContent: function(t) {
                            n.root_.textContent = t
                        }
                    };
                return new a.MDCSelectHelperTextFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCSelectHelperText = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(72),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !1
                        },
                        setAttr: function() {},
                        removeAttr: function() {},
                        setContent: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.setContent = function(t) {
                this.adapter_.setContent(t)
            }, l.prototype.setPersistent = function(t) {
                t ? this.adapter_.addClass(c.cssClasses.HELPER_TEXT_PERSISTENT) : this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_PERSISTENT)
            }, l.prototype.setValidation = function(t) {
                t ? this.adapter_.addClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG) : this.adapter_.removeClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG)
            }, l.prototype.showToScreenReader = function() {
                this.adapter_.removeAttr(c.strings.ARIA_HIDDEN)
            }, l.prototype.setValidity = function(t) {
                var e = this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_PERSISTENT),
                    n = this.adapter_.hasClass(c.cssClasses.HELPER_TEXT_VALIDATION_MSG) && !t;
                n ? this.adapter_.setAttr(c.strings.ROLE, "alert") : this.adapter_.removeAttr(c.strings.ROLE), e || n || this.hide_()
            }, l.prototype.hide_ = function() {
                this.adapter_.setAttr(c.strings.ARIA_HIDDEN, "true")
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCSelectHelperTextFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            ARIA_HIDDEN: "aria-hidden",
            ROLE: "role"
        };
        e.cssClasses = {
            HELPER_TEXT_PERSISTENT: "mdc-select-helper-text--persistent",
            HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(74),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "foundation", {
                get: function() {
                    return this.foundation_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        getAttr: function(t) {
                            return n.root_.getAttribute(t)
                        },
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        },
                        removeAttr: function(t) {
                            return n.root_.removeAttribute(t)
                        },
                        setContent: function(t) {
                            n.root_.textContent = t
                        },
                        registerInteractionHandler: function(t, e) {
                            return n.listen(t, e)
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return n.unlisten(t, e)
                        },
                        notifyIconAction: function() {
                            return n.emit(a.MDCSelectIconFoundation.strings.ICON_EVENT, {}, !0)
                        }
                    };
                return new a.MDCSelectIconFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCSelectIcon = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(75),
            u = ["click", "keydown"],
            l = (s = a.MDCFoundation, r(d, s), Object.defineProperty(d, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        getAttr: function() {
                            return null
                        },
                        setAttr: function() {},
                        removeAttr: function() {},
                        setContent: function() {},
                        registerInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {},
                        notifyIconAction: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.init = function() {
                var e = this;
                this.savedTabIndex_ = this.adapter_.getAttr("tabindex"), u.forEach(function(t) {
                    e.adapter_.registerInteractionHandler(t, e.interactionHandler_)
                })
            }, d.prototype.destroy = function() {
                var e = this;
                u.forEach(function(t) {
                    e.adapter_.deregisterInteractionHandler(t, e.interactionHandler_)
                })
            }, d.prototype.setDisabled = function(t) {
                this.savedTabIndex_ && (t ? (this.adapter_.setAttr("tabindex", "-1"), this.adapter_.removeAttr("role")) : (this.adapter_.setAttr("tabindex", this.savedTabIndex_), this.adapter_.setAttr("role", c.strings.ICON_ROLE)))
            }, d.prototype.setAriaLabel = function(t) {
                this.adapter_.setAttr("aria-label", t)
            }, d.prototype.setContent = function(t) {
                this.adapter_.setContent(t)
            }, d.prototype.handleInteraction = function(t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                "click" !== t.type && !e || this.adapter_.notifyIconAction()
            }, d);

        function d(t) {
            var e = s.call(this, o({}, d.defaultAdapter, t)) || this;
            return e.savedTabIndex_ = null, e.interactionHandler_ = function(t) {
                return e.handleInteraction(t)
            }, e
        }
        e.MDCSelectIconFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            ICON_EVENT: "MDCSelect:icon",
            ICON_ROLE: "button"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(15),
            c = n(0),
            u = n(27),
            l = ["mousedown", "pointerdown", "touchstart"],
            d = ["mouseup", "pointerup", "touchend"],
            p = {
                mousedown: "mousemove",
                pointerdown: "pointermove",
                touchstart: "touchmove"
            },
            _ = "ArrowDown",
            f = "ArrowLeft",
            h = "ArrowRight",
            y = "ArrowUp",
            C = "End",
            g = "Home",
            m = "PageDown",
            v = "PageUp",
            E = (s = c.MDCFoundation, r(b, s), Object.defineProperty(b, "cssClasses", {
                get: function() {
                    return u.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b, "strings", {
                get: function() {
                    return u.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b, "numbers", {
                get: function() {
                    return u.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b, "defaultAdapter", {
                get: function() {
                    return {
                        hasClass: function() {
                            return !1
                        },
                        addClass: function() {},
                        removeClass: function() {},
                        getAttribute: function() {
                            return null
                        },
                        setAttribute: function() {},
                        removeAttribute: function() {},
                        computeBoundingRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        getTabIndex: function() {
                            return 0
                        },
                        registerInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {},
                        registerThumbContainerInteractionHandler: function() {},
                        deregisterThumbContainerInteractionHandler: function() {},
                        registerBodyInteractionHandler: function() {},
                        deregisterBodyInteractionHandler: function() {},
                        registerResizeHandler: function() {},
                        deregisterResizeHandler: function() {},
                        notifyInput: function() {},
                        notifyChange: function() {},
                        setThumbContainerStyleProperty: function() {},
                        setTrackStyleProperty: function() {},
                        setMarkerValue: function() {},
                        setTrackMarkers: function() {},
                        isRTL: function() {
                            return !1
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.init = function() {
                var e = this;
                this.isDiscrete_ = this.adapter_.hasClass(u.cssClasses.IS_DISCRETE), this.hasTrackMarker_ = this.adapter_.hasClass(u.cssClasses.HAS_TRACK_MARKER), l.forEach(function(t) {
                    e.adapter_.registerInteractionHandler(t, e.interactionStartHandler_), e.adapter_.registerThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_)
                }), this.adapter_.registerInteractionHandler("keydown", this.keydownHandler_), this.adapter_.registerInteractionHandler("focus", this.focusHandler_), this.adapter_.registerInteractionHandler("blur", this.blurHandler_), this.adapter_.registerResizeHandler(this.resizeHandler_), this.layout(), this.isDiscrete_ && 0 === this.getStep() && (this.step_ = 1)
            }, b.prototype.destroy = function() {
                var e = this;
                l.forEach(function(t) {
                    e.adapter_.deregisterInteractionHandler(t, e.interactionStartHandler_), e.adapter_.deregisterThumbContainerInteractionHandler(t, e.thumbContainerPointerHandler_)
                }), this.adapter_.deregisterInteractionHandler("keydown", this.keydownHandler_), this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_), this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_), this.adapter_.deregisterResizeHandler(this.resizeHandler_)
            }, b.prototype.setupTrackMarker = function() {
                this.isDiscrete_ && this.hasTrackMarker_ && 0 !== this.getStep() && this.adapter_.setTrackMarkers(this.getStep(), this.getMax(), this.getMin())
            }, b.prototype.layout = function() {
                this.rect_ = this.adapter_.computeBoundingRect(), this.updateUIForCurrentValue_()
            }, b.prototype.getValue = function() {
                return this.value_
            }, b.prototype.setValue = function(t) {
                this.setValue_(t, !1)
            }, b.prototype.getMax = function() {
                return this.max_
            }, b.prototype.setMax = function(t) {
                if (t < this.min_) throw new Error("Cannot set max to be less than the slider's minimum value");
                this.max_ = t, this.setValue_(this.value_, !1, !0), this.adapter_.setAttribute(u.strings.ARIA_VALUEMAX, String(this.max_)), this.setupTrackMarker()
            }, b.prototype.getMin = function() {
                return this.min_
            }, b.prototype.setMin = function(t) {
                if (t > this.max_) throw new Error("Cannot set min to be greater than the slider's maximum value");
                this.min_ = t, this.setValue_(this.value_, !1, !0), this.adapter_.setAttribute(u.strings.ARIA_VALUEMIN, String(this.min_)), this.setupTrackMarker()
            }, b.prototype.getStep = function() {
                return this.step_
            }, b.prototype.setStep = function(t) {
                if (t < 0) throw new Error("Step cannot be set to a negative number");
                this.isDiscrete_ && ("number" != typeof t || t < 1) && (t = 1), this.step_ = t, this.setValue_(this.value_, !1, !0), this.setupTrackMarker()
            }, b.prototype.isDisabled = function() {
                return this.disabled_
            }, b.prototype.setDisabled = function(t) {
                this.disabled_ = t, this.toggleClass_(u.cssClasses.DISABLED, this.disabled_), this.disabled_ ? (this.savedTabIndex_ = this.adapter_.getTabIndex(), this.adapter_.setAttribute(u.strings.ARIA_DISABLED, "true"), this.adapter_.removeAttribute("tabindex")) : (this.adapter_.removeAttribute(u.strings.ARIA_DISABLED), isNaN(this.savedTabIndex_) || this.adapter_.setAttribute("tabindex", String(this.savedTabIndex_)))
            }, b.prototype.handleDown_ = function(t) {
                var n = this;
                if (!this.disabled_) {
                    this.preventFocusState_ = !0, this.setInTransit_(!this.handlingThumbTargetEvt_), this.handlingThumbTargetEvt_ = !1, this.setActive_(!0);
                    var i = function(t) {
                            n.handleMove_(t)
                        },
                        r = p[t.type],
                        e = function e() {
                            n.handleUp_(), n.adapter_.deregisterBodyInteractionHandler(r, i), d.forEach(function(t) {
                                return n.adapter_.deregisterBodyInteractionHandler(t, e)
                            })
                        };
                    this.adapter_.registerBodyInteractionHandler(r, i), d.forEach(function(t) {
                        return n.adapter_.registerBodyInteractionHandler(t, e)
                    }), this.setValueFromEvt_(t)
                }
            }, b.prototype.handleMove_ = function(t) {
                t.preventDefault(), this.setValueFromEvt_(t)
            }, b.prototype.handleUp_ = function() {
                this.setActive_(!1), this.adapter_.notifyChange()
            }, b.prototype.getPageX_ = function(t) {
                return t.targetTouches && 0 < t.targetTouches.length ? t.targetTouches[0].pageX : t.pageX
            }, b.prototype.setValueFromEvt_ = function(t) {
                var e = this.getPageX_(t),
                    n = this.computeValueFromPageX_(e);
                this.setValue_(n, !0)
            }, b.prototype.computeValueFromPageX_ = function(t) {
                var e = this.max_,
                    n = this.min_,
                    i = (t - this.rect_.left) / this.rect_.width;
                return this.adapter_.isRTL() && (i = 1 - i), n + i * (e - n)
            }, b.prototype.handleKeydown_ = function(t) {
                var e = this.getKeyId_(t),
                    n = this.getValueForKeyId_(e);
                isNaN(n) || (t.preventDefault(), this.adapter_.addClass(u.cssClasses.FOCUS), this.setValue_(n, !0), this.adapter_.notifyChange())
            }, b.prototype.getKeyId_ = function(t) {
                return t.key === f || 37 === t.keyCode ? f : t.key === h || 39 === t.keyCode ? h : t.key === y || 38 === t.keyCode ? y : t.key === _ || 40 === t.keyCode ? _ : t.key === g || 36 === t.keyCode ? g : t.key === C || 35 === t.keyCode ? C : t.key === v || 33 === t.keyCode ? v : t.key === m || 34 === t.keyCode ? m : ""
            }, b.prototype.getValueForKeyId_ = function(t) {
                var e = this.max_,
                    n = this.min_,
                    i = this.step_ || (e - n) / 100;
                switch (!this.adapter_.isRTL() || t !== f && t !== h || (i = -i), t) {
                    case f:
                    case _:
                        return this.value_ - i;
                    case h:
                    case y:
                        return this.value_ + i;
                    case g:
                        return this.min_;
                    case C:
                        return this.max_;
                    case v:
                        return this.value_ + i * u.numbers.PAGE_FACTOR;
                    case m:
                        return this.value_ - i * u.numbers.PAGE_FACTOR;
                    default:
                        return NaN
                }
            }, b.prototype.handleFocus_ = function() {
                this.preventFocusState_ || this.adapter_.addClass(u.cssClasses.FOCUS)
            }, b.prototype.handleBlur_ = function() {
                this.preventFocusState_ = !1, this.adapter_.removeClass(u.cssClasses.FOCUS)
            }, b.prototype.setValue_ = function(t, e, n) {
                if (void 0 === n && (n = !1), t !== this.value_ || n) {
                    var i = this.min_,
                        r = this.max_,
                        o = t === i || t === r;
                    this.step_ && !o && (t = this.quantize_(t)), t < i ? t = i : r < t && (t = r), this.value_ = t, this.adapter_.setAttribute(u.strings.ARIA_VALUENOW, String(this.value_)), this.updateUIForCurrentValue_(), e && (this.adapter_.notifyInput(), this.isDiscrete_ && this.adapter_.setMarkerValue(t))
                }
            }, b.prototype.quantize_ = function(t) {
                return Math.round(t / this.step_) * this.step_
            }, b.prototype.updateUIForCurrentValue_ = function() {
                var e = this,
                    t = this.max_,
                    n = this.min_,
                    i = (this.value_ - n) / (t - n),
                    r = i * this.rect_.width;
                this.adapter_.isRTL() && (r = this.rect_.width - r);
                var o = a.getCorrectPropertyName(window, "transform"),
                    s = a.getCorrectEventName(window, "transitionend");
                this.inTransit_ && this.adapter_.registerThumbContainerInteractionHandler(s, function t() {
                    e.setInTransit_(!1), e.adapter_.deregisterThumbContainerInteractionHandler(s, t)
                }), requestAnimationFrame(function() {
                    e.adapter_.setThumbContainerStyleProperty(o, "translateX(" + r + "px) translateX(-50%)"), e.adapter_.setTrackStyleProperty(o, "scaleX(" + i + ")")
                })
            }, b.prototype.setActive_ = function(t) {
                this.active_ = t, this.toggleClass_(u.cssClasses.ACTIVE, this.active_)
            }, b.prototype.setInTransit_ = function(t) {
                this.inTransit_ = t, this.toggleClass_(u.cssClasses.IN_TRANSIT, this.inTransit_)
            }, b.prototype.toggleClass_ = function(t, e) {
                e ? this.adapter_.addClass(t) : this.adapter_.removeClass(t)
            }, b);

        function b(t) {
            var e = s.call(this, o({}, b.defaultAdapter, t)) || this;
            return e.savedTabIndex_ = NaN, e.active_ = !1, e.inTransit_ = !1, e.isDiscrete_ = !1, e.hasTrackMarker_ = !1, e.handlingThumbTargetEvt_ = !1, e.min_ = 0, e.max_ = 100, e.step_ = 0, e.value_ = 0, e.disabled_ = !1, e.preventFocusState_ = !1, e.thumbContainerPointerHandler_ = function() {
                return e.handlingThumbTargetEvt_ = !0
            }, e.interactionStartHandler_ = function(t) {
                return e.handleDown_(t)
            }, e.keydownHandler_ = function(t) {
                return e.handleKeydown_(t)
            }, e.focusHandler_ = function() {
                return e.handleFocus_()
            }, e.blurHandler_ = function() {
                return e.handleBlur_()
            }, e.resizeHandler_ = function() {
                return e.layout()
            }, e
        }
        e.MDCSliderFoundation = E, e.default = E
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = i.numbers.ARIA_LIVE_DELAY_MS,
            o = i.strings.ARIA_LIVE_LABEL_TEXT_ATTR;
        e.announce = function(t, e) {
            void 0 === e && (e = t);
            var n = t.getAttribute("aria-live"),
                i = e.textContent.trim();
            i && n && (t.setAttribute("aria-live", "off"), e.textContent = "", e.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>', e.setAttribute(o, i), setTimeout(function() {
                t.setAttribute("aria-live", n), e.removeAttribute(o), e.textContent = i
            }, r))
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(13),
            u = c.cssClasses.OPENING,
            l = c.cssClasses.OPEN,
            d = c.cssClasses.CLOSING,
            p = c.strings.REASON_ACTION,
            _ = c.strings.REASON_DISMISS,
            f = (s = a.MDCFoundation, r(h, s), Object.defineProperty(h, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        announce: function() {},
                        notifyClosed: function() {},
                        notifyClosing: function() {},
                        notifyOpened: function() {},
                        notifyOpening: function() {},
                        removeClass: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), h.prototype.destroy = function() {
                this.clearAutoDismissTimer_(), cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, clearTimeout(this.animationTimer_), this.animationTimer_ = 0, this.adapter_.removeClass(u), this.adapter_.removeClass(l), this.adapter_.removeClass(d)
            }, h.prototype.open = function() {
                var e = this;
                this.clearAutoDismissTimer_(), this.isOpen_ = !0, this.adapter_.notifyOpening(), this.adapter_.removeClass(d), this.adapter_.addClass(u), this.adapter_.announce(), this.runNextAnimationFrame_(function() {
                    e.adapter_.addClass(l), e.animationTimer_ = setTimeout(function() {
                        var t = e.getTimeoutMs();
                        e.handleAnimationTimerEnd_(), e.adapter_.notifyOpened(), t !== c.numbers.INDETERMINATE && (e.autoDismissTimer_ = setTimeout(function() {
                            e.close(_)
                        }, t))
                    }, c.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS)
                })
            }, h.prototype.close = function(t) {
                var e = this;
                void 0 === t && (t = ""), this.isOpen_ && (cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = 0, this.clearAutoDismissTimer_(), this.isOpen_ = !1, this.adapter_.notifyClosing(t), this.adapter_.addClass(c.cssClasses.CLOSING), this.adapter_.removeClass(c.cssClasses.OPEN), this.adapter_.removeClass(c.cssClasses.OPENING), clearTimeout(this.animationTimer_), this.animationTimer_ = setTimeout(function() {
                    e.handleAnimationTimerEnd_(), e.adapter_.notifyClosed(t)
                }, c.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS))
            }, h.prototype.isOpen = function() {
                return this.isOpen_
            }, h.prototype.getTimeoutMs = function() {
                return this.autoDismissTimeoutMs_
            }, h.prototype.setTimeoutMs = function(t) {
                var e = c.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,
                    n = c.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS,
                    i = c.numbers.INDETERMINATE;
                if (!(t === c.numbers.INDETERMINATE || t <= n && e <= t)) throw new Error("\n        timeoutMs must be an integer in the range " + e + "–" + n + "\n        (or " + i + " to disable), but got '" + t + "'");
                this.autoDismissTimeoutMs_ = t
            }, h.prototype.getCloseOnEscape = function() {
                return this.closeOnEscape_
            }, h.prototype.setCloseOnEscape = function(t) {
                this.closeOnEscape_ = t
            }, h.prototype.handleKeyDown = function(t) {
                "Escape" !== t.key && 27 !== t.keyCode || !this.getCloseOnEscape() || this.close(_)
            }, h.prototype.handleActionButtonClick = function(t) {
                this.close(p)
            }, h.prototype.handleActionIconClick = function(t) {
                this.close(_)
            }, h.prototype.clearAutoDismissTimer_ = function() {
                clearTimeout(this.autoDismissTimer_), this.autoDismissTimer_ = 0
            }, h.prototype.handleAnimationTimerEnd_ = function() {
                this.animationTimer_ = 0, this.adapter_.removeClass(c.cssClasses.OPENING), this.adapter_.removeClass(c.cssClasses.CLOSING)
            }, h.prototype.runNextAnimationFrame_ = function(t) {
                var e = this;
                cancelAnimationFrame(this.animationFrame_), this.animationFrame_ = requestAnimationFrame(function() {
                    e.animationFrame_ = 0, clearTimeout(e.animationTimer_), e.animationTimer_ = setTimeout(t, 0)
                })
            }, h);

        function h(t) {
            var e = s.call(this, o({}, h.defaultAdapter, t)) || this;
            return e.isOpen_ = !1, e.animationFrame_ = 0, e.animationTimer_ = 0, e.autoDismissTimer_ = 0, e.autoDismissTimeoutMs_ = c.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, e.closeOnEscape_ = !0, e
        }
        e.MDCSnackbarFoundation = f, e.default = f
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(80),
            u = (s = a.MDCFoundation, r(l, s), Object.defineProperty(l, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        setNativeControlChecked: function() {},
                        setNativeControlDisabled: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.setChecked = function(t) {
                this.adapter_.setNativeControlChecked(t), this.updateCheckedStyling_(t)
            }, l.prototype.setDisabled = function(t) {
                this.adapter_.setNativeControlDisabled(t), t ? this.adapter_.addClass(c.cssClasses.DISABLED) : this.adapter_.removeClass(c.cssClasses.DISABLED)
            }, l.prototype.handleChange = function(t) {
                var e = t.target;
                this.updateCheckedStyling_(e.checked)
            }, l.prototype.updateCheckedStyling_ = function(t) {
                t ? this.adapter_.addClass(c.cssClasses.CHECKED) : this.adapter_.removeClass(c.cssClasses.CHECKED)
            }, l);

        function l(t) {
            return s.call(this, o({}, l.defaultAdapter, t)) || this
        }
        e.MDCSwitchFoundation = u, e.default = u
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            CHECKED: "mdc-switch--checked",
            DISABLED: "mdc-switch--disabled"
        };
        e.strings = {
            NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
            RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(5),
            u = n(2),
            l = n(82),
            d = o(n(83)),
            p = (s = a.MDCComponent, r(_, s), _.attachTo = function(t) {
                return new _(t)
            }, _.prototype.initialize = function() {
                this.area_ = this.root_.querySelector(l.MDCTabScrollerFoundation.strings.AREA_SELECTOR), this.content_ = this.root_.querySelector(l.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)
            }, _.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.handleInteraction_ = function() {
                    return e.foundation_.handleInteraction()
                }, this.handleTransitionEnd_ = function(t) {
                    return e.foundation_.handleTransitionEnd(t)
                }, this.area_.addEventListener("wheel", this.handleInteraction_, c.applyPassive()), this.area_.addEventListener("touchstart", this.handleInteraction_, c.applyPassive()), this.area_.addEventListener("pointerdown", this.handleInteraction_, c.applyPassive()), this.area_.addEventListener("mousedown", this.handleInteraction_, c.applyPassive()), this.area_.addEventListener("keydown", this.handleInteraction_, c.applyPassive()), this.content_.addEventListener("transitionend", this.handleTransitionEnd_)
            }, _.prototype.destroy = function() {
                s.prototype.destroy.call(this), this.area_.removeEventListener("wheel", this.handleInteraction_, c.applyPassive()), this.area_.removeEventListener("touchstart", this.handleInteraction_, c.applyPassive()), this.area_.removeEventListener("pointerdown", this.handleInteraction_, c.applyPassive()), this.area_.removeEventListener("mousedown", this.handleInteraction_, c.applyPassive()), this.area_.removeEventListener("keydown", this.handleInteraction_, c.applyPassive()), this.content_.removeEventListener("transitionend", this.handleTransitionEnd_)
            }, _.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        eventTargetMatchesSelector: function(t, e) {
                            return u.matches(t, e)
                        },
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        addScrollAreaClass: function(t) {
                            return n.area_.classList.add(t)
                        },
                        setScrollAreaStyleProperty: function(t, e) {
                            return n.area_.style.setProperty(t, e)
                        },
                        setScrollContentStyleProperty: function(t, e) {
                            return n.content_.style.setProperty(t, e)
                        },
                        getScrollContentStyleValue: function(t) {
                            return window.getComputedStyle(n.content_).getPropertyValue(t)
                        },
                        setScrollAreaScrollLeft: function(t) {
                            return n.area_.scrollLeft = t
                        },
                        getScrollAreaScrollLeft: function() {
                            return n.area_.scrollLeft
                        },
                        getScrollContentOffsetWidth: function() {
                            return n.content_.offsetWidth
                        },
                        getScrollAreaOffsetWidth: function() {
                            return n.area_.offsetWidth
                        },
                        computeScrollAreaClientRect: function() {
                            return n.area_.getBoundingClientRect()
                        },
                        computeScrollContentClientRect: function() {
                            return n.content_.getBoundingClientRect()
                        },
                        computeHorizontalScrollbarHeight: function() {
                            return d.computeHorizontalScrollbarHeight(document)
                        }
                    };
                return new l.MDCTabScrollerFoundation(t)
            }, _.prototype.getScrollPosition = function() {
                return this.foundation_.getScrollPosition()
            }, _.prototype.getScrollContentWidth = function() {
                return this.content_.offsetWidth
            }, _.prototype.incrementScroll = function(t) {
                this.foundation_.incrementScroll(t)
            }, _.prototype.scrollTo = function(t) {
                this.foundation_.scrollTo(t)
            }, _);

        function _() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.MDCTabScroller = p
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i, r, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || 0 < e--) && !(i = o.next()).done;) s.push(i.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, c = n(0),
            u = n(28),
            l = n(152),
            d = n(153),
            p = n(154),
            _ = (a = c.MDCFoundation, r(f, a), Object.defineProperty(f, "cssClasses", {
                get: function() {
                    return u.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f, "strings", {
                get: function() {
                    return u.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f, "defaultAdapter", {
                get: function() {
                    return {
                        eventTargetMatchesSelector: function() {
                            return !1
                        },
                        addClass: function() {},
                        removeClass: function() {},
                        addScrollAreaClass: function() {},
                        setScrollAreaStyleProperty: function() {},
                        setScrollContentStyleProperty: function() {},
                        getScrollContentStyleValue: function() {
                            return ""
                        },
                        setScrollAreaScrollLeft: function() {},
                        getScrollAreaScrollLeft: function() {
                            return 0
                        },
                        getScrollContentOffsetWidth: function() {
                            return 0
                        },
                        getScrollAreaOffsetWidth: function() {
                            return 0
                        },
                        computeScrollAreaClientRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        computeScrollContentClientRect: function() {
                            return {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }
                        },
                        computeHorizontalScrollbarHeight: function() {
                            return 0
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), f.prototype.init = function() {
                var t = this.adapter_.computeHorizontalScrollbarHeight();
                this.adapter_.setScrollAreaStyleProperty("margin-bottom", -t + "px"), this.adapter_.addScrollAreaClass(f.cssClasses.SCROLL_AREA_SCROLL)
            }, f.prototype.getScrollPosition = function() {
                if (this.isRTL_()) return this.computeCurrentScrollPositionRTL_();
                var t = this.calculateCurrentTranslateX_();
                return this.adapter_.getScrollAreaScrollLeft() - t
            }, f.prototype.handleInteraction = function() {
                this.isAnimating_ && this.stopScrollAnimation_()
            }, f.prototype.handleTransitionEnd = function(t) {
                var e = t.target;
                this.isAnimating_ && this.adapter_.eventTargetMatchesSelector(e, f.strings.CONTENT_SELECTOR) && (this.isAnimating_ = !1, this.adapter_.removeClass(f.cssClasses.ANIMATING))
            }, f.prototype.incrementScroll = function(t) {
                0 !== t && this.animate_(this.getIncrementScrollOperation_(t))
            }, f.prototype.incrementScrollImmediate = function(t) {
                if (0 !== t) {
                    var e = this.getIncrementScrollOperation_(t);
                    0 !== e.scrollDelta && (this.stopScrollAnimation_(), this.adapter_.setScrollAreaScrollLeft(e.finalScrollPosition))
                }
            }, f.prototype.scrollTo = function(t) {
                if (this.isRTL_()) return this.scrollToRTL_(t);
                this.scrollTo_(t)
            }, f.prototype.getRTLScroller = function() {
                return this.rtlScrollerInstance_ || (this.rtlScrollerInstance_ = this.rtlScrollerFactory_()), this.rtlScrollerInstance_
            }, f.prototype.calculateCurrentTranslateX_ = function() {
                var t = this.adapter_.getScrollContentStyleValue("transform");
                if ("none" === t) return 0;
                var e = /\((.+?)\)/.exec(t);
                if (!e) return 0;
                var n = e[1],
                    i = s(n.split(","), 6),
                    r = (i[0], i[1], i[2], i[3], i[4]);
                return i[5], parseFloat(r)
            }, f.prototype.clampScrollValue_ = function(t) {
                var e = this.calculateScrollEdges_();
                return Math.min(Math.max(e.left, t), e.right)
            }, f.prototype.computeCurrentScrollPositionRTL_ = function() {
                var t = this.calculateCurrentTranslateX_();
                return this.getRTLScroller().getScrollPositionRTL(t)
            }, f.prototype.calculateScrollEdges_ = function() {
                return {
                    left: 0,
                    right: this.adapter_.getScrollContentOffsetWidth() - this.adapter_.getScrollAreaOffsetWidth()
                }
            }, f.prototype.scrollTo_ = function(t) {
                var e = this.getScrollPosition(),
                    n = this.clampScrollValue_(t),
                    i = n - e;
                this.animate_({
                    finalScrollPosition: n,
                    scrollDelta: i
                })
            }, f.prototype.scrollToRTL_ = function(t) {
                var e = this.getRTLScroller().scrollToRTL(t);
                this.animate_(e)
            }, f.prototype.getIncrementScrollOperation_ = function(t) {
                if (this.isRTL_()) return this.getRTLScroller().incrementScrollRTL(t);
                var e = this.getScrollPosition(),
                    n = t + e,
                    i = this.clampScrollValue_(n);
                return {
                    finalScrollPosition: i,
                    scrollDelta: i - e
                }
            }, f.prototype.animate_ = function(t) {
                var e = this;
                0 !== t.scrollDelta && (this.stopScrollAnimation_(), this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition), this.adapter_.setScrollContentStyleProperty("transform", "translateX(" + t.scrollDelta + "px)"), this.adapter_.computeScrollAreaClientRect(), requestAnimationFrame(function() {
                    e.adapter_.addClass(f.cssClasses.ANIMATING), e.adapter_.setScrollContentStyleProperty("transform", "none")
                }), this.isAnimating_ = !0)
            }, f.prototype.stopScrollAnimation_ = function() {
                this.isAnimating_ = !1;
                var t = this.getAnimatingScrollPosition_();
                this.adapter_.removeClass(f.cssClasses.ANIMATING), this.adapter_.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter_.setScrollAreaScrollLeft(t)
            }, f.prototype.getAnimatingScrollPosition_ = function() {
                var t = this.calculateCurrentTranslateX_(),
                    e = this.adapter_.getScrollAreaScrollLeft();
                return this.isRTL_() ? this.getRTLScroller().getAnimatingScrollPosition(e, t) : e - t
            }, f.prototype.rtlScrollerFactory_ = function() {
                var t = this.adapter_.getScrollAreaScrollLeft();
                this.adapter_.setScrollAreaScrollLeft(t - 1);
                var e = this.adapter_.getScrollAreaScrollLeft();
                if (e < 0) return this.adapter_.setScrollAreaScrollLeft(t), new d.MDCTabScrollerRTLNegative(this.adapter_);
                var n = this.adapter_.computeScrollAreaClientRect(),
                    i = this.adapter_.computeScrollContentClientRect(),
                    r = Math.round(i.right - n.right);
                return this.adapter_.setScrollAreaScrollLeft(t), r === e ? new p.MDCTabScrollerRTLReverse(this.adapter_) : new l.MDCTabScrollerRTLDefault(this.adapter_)
            }, f.prototype.isRTL_ = function() {
                return "rtl" === this.adapter_.getScrollContentStyleValue("direction")
            }, f);

        function f(t) {
            var e = a.call(this, o({}, f.defaultAdapter, t)) || this;
            return e.isAnimating_ = !1, e
        }
        e.MDCTabScrollerFoundation = _, e.default = _
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o = n(28);
        e.computeHorizontalScrollbarHeight = function(t, e) {
            if (void 0 === e && (e = !0), e && void 0 !== r) return r;
            var n = t.createElement("div");
            n.classList.add(o.cssClasses.SCROLL_TEST), t.body.appendChild(n);
            var i = n.offsetHeight - n.clientHeight;
            return t.body.removeChild(n), e && (r = i), i
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            s = this && this.__assign || function() {
                return (s = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, a = n(1),
            c = n(3),
            u = n(4),
            l = n(85),
            d = n(30),
            p = (o = a.MDCComponent, r(_, o), _.attachTo = function(t) {
                return new _(t)
            }, _.prototype.initialize = function(t, e) {
                void 0 === t && (t = function(t, e) {
                    return new c.MDCRipple(t, e)
                }), void 0 === e && (e = function(t) {
                    return new l.MDCTabIndicator(t)
                }), this.id = this.root_.id;
                var n = this.root_.querySelector(d.MDCTabFoundation.strings.RIPPLE_SELECTOR),
                    i = s({}, c.MDCRipple.createAdapter(this), {
                        addClass: function(t) {
                            return n.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.classList.remove(t)
                        },
                        updateCssVariable: function(t, e) {
                            return n.style.setProperty(t, e)
                        }
                    }),
                    r = new u.MDCRippleFoundation(i);
                this.ripple_ = t(this.root_, r);
                var o = this.root_.querySelector(d.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
                this.tabIndicator_ = e(o), this.content_ = this.root_.querySelector(d.MDCTabFoundation.strings.CONTENT_SELECTOR)
            }, _.prototype.initialSyncWithDOM = function() {
                var t = this;
                this.handleClick_ = function() {
                    return t.foundation_.handleClick()
                }, this.listen("click", this.handleClick_)
            }, _.prototype.destroy = function() {
                this.unlisten("click", this.handleClick_), this.ripple_.destroy(), o.prototype.destroy.call(this)
            }, _.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        },
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        activateIndicator: function(t) {
                            return n.tabIndicator_.activate(t)
                        },
                        deactivateIndicator: function() {
                            return n.tabIndicator_.deactivate()
                        },
                        notifyInteracted: function() {
                            return n.emit(d.MDCTabFoundation.strings.INTERACTED_EVENT, {
                                tabId: n.id
                            }, !0)
                        },
                        getOffsetLeft: function() {
                            return n.root_.offsetLeft
                        },
                        getOffsetWidth: function() {
                            return n.root_.offsetWidth
                        },
                        getContentOffsetLeft: function() {
                            return n.content_.offsetLeft
                        },
                        getContentOffsetWidth: function() {
                            return n.content_.offsetWidth
                        },
                        focus: function() {
                            return n.root_.focus()
                        }
                    };
                return new d.MDCTabFoundation(t)
            }, Object.defineProperty(_.prototype, "active", {
                get: function() {
                    return this.foundation_.isActive()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_.prototype, "focusOnActivate", {
                set: function(t) {
                    this.foundation_.setFocusOnActivate(t)
                },
                enumerable: !0,
                configurable: !0
            }), _.prototype.activate = function(t) {
                this.foundation_.activate(t)
            }, _.prototype.deactivate = function() {
                this.foundation_.deactivate()
            }, _.prototype.computeIndicatorClientRect = function() {
                return this.tabIndicator_.computeContentClientRect()
            }, _.prototype.computeDimensions = function() {
                return this.foundation_.computeDimensions()
            }, _.prototype.focus = function() {
                this.root_.focus()
            }, _);

        function _() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTab = p
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(86),
            c = n(14),
            u = n(88),
            l = (o = s.MDCComponent, r(d, o), d.attachTo = function(t) {
                return new d(t)
            }, d.prototype.initialize = function() {
                this.content_ = this.root_.querySelector(c.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR)
            }, d.prototype.computeContentClientRect = function() {
                return this.foundation_.computeContentClientRect()
            }, d.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        computeContentClientRect: function() {
                            return n.content_.getBoundingClientRect()
                        },
                        setContentStyleProperty: function(t, e) {
                            return n.content_.style.setProperty(t, e)
                        }
                    };
                return this.root_.classList.contains(c.MDCTabIndicatorFoundation.cssClasses.FADE) ? new a.MDCFadingTabIndicatorFoundation(t) : new u.MDCSlidingTabIndicatorFoundation(t)
            }, d.prototype.activate = function(t) {
                this.foundation_.activate(t)
            }, d.prototype.deactivate = function() {
                this.foundation_.deactivate()
            }, d);

        function d() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTabIndicator = l
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(14),
            a = (o = s.MDCTabIndicatorFoundation, r(c, o), c.prototype.activate = function() {
                this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)
            }, c.prototype.deactivate = function() {
                this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCFadingTabIndicatorFoundation = a, e.default = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ACTIVE: "mdc-tab-indicator--active",
            FADE: "mdc-tab-indicator--fade",
            NO_TRANSITION: "mdc-tab-indicator--no-transition"
        };
        e.strings = {
            CONTENT_SELECTOR: ".mdc-tab-indicator__content"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(14),
            a = (o = s.MDCTabIndicatorFoundation, r(c, o), c.prototype.activate = function(t) {
                if (t) {
                    var e = this.computeContentClientRect(),
                        n = t.width / e.width,
                        i = t.left - e.left;
                    this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION), this.adapter_.setContentStyleProperty("transform", "translateX(" + i + "px) scaleX(" + n + ")"), this.computeContentClientRect(), this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION), this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE), this.adapter_.setContentStyleProperty("transform", "")
                } else this.adapter_.addClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)
            }, c.prototype.deactivate = function() {
                this.adapter_.removeClass(s.MDCTabIndicatorFoundation.cssClasses.ACTIVE)
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCSlidingTabIndicatorFoundation = a, e.default = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.cssClasses = {
            ACTIVE: "mdc-tab--active"
        };
        e.strings = {
            ARIA_SELECTED: "aria-selected",
            CONTENT_SELECTOR: ".mdc-tab__content",
            INTERACTED_EVENT: "MDCTab:interacted",
            RIPPLE_SELECTOR: ".mdc-tab__ripple",
            TABINDEX: "tabIndex",
            TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n(0),
            u = n(91),
            a = new Set;
        a.add(u.strings.ARROW_LEFT_KEY), a.add(u.strings.ARROW_RIGHT_KEY), a.add(u.strings.END_KEY), a.add(u.strings.HOME_KEY), a.add(u.strings.ENTER_KEY), a.add(u.strings.SPACE_KEY);
        var c = new Map;
        c.set(u.numbers.ARROW_LEFT_KEYCODE, u.strings.ARROW_LEFT_KEY), c.set(u.numbers.ARROW_RIGHT_KEYCODE, u.strings.ARROW_RIGHT_KEY), c.set(u.numbers.END_KEYCODE, u.strings.END_KEY), c.set(u.numbers.HOME_KEYCODE, u.strings.HOME_KEY), c.set(u.numbers.ENTER_KEYCODE, u.strings.ENTER_KEY), c.set(u.numbers.SPACE_KEYCODE, u.strings.SPACE_KEY);
        var l, d = (l = s.MDCFoundation, r(p, l), Object.defineProperty(p, "strings", {
            get: function() {
                return u.strings
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(p, "numbers", {
            get: function() {
                return u.numbers
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(p, "defaultAdapter", {
            get: function() {
                return {
                    scrollTo: function() {},
                    incrementScroll: function() {},
                    getScrollPosition: function() {
                        return 0
                    },
                    getScrollContentWidth: function() {
                        return 0
                    },
                    getOffsetWidth: function() {
                        return 0
                    },
                    isRTL: function() {
                        return !1
                    },
                    setActiveTab: function() {},
                    activateTabAtIndex: function() {},
                    deactivateTabAtIndex: function() {},
                    focusTabAtIndex: function() {},
                    getTabIndicatorClientRectAtIndex: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    getTabDimensionsAtIndex: function() {
                        return {
                            rootLeft: 0,
                            rootRight: 0,
                            contentLeft: 0,
                            contentRight: 0
                        }
                    },
                    getPreviousActiveTabIndex: function() {
                        return -1
                    },
                    getFocusedTabIndex: function() {
                        return -1
                    },
                    getIndexOfTabById: function() {
                        return -1
                    },
                    getTabListLength: function() {
                        return 0
                    },
                    notifyTabActivated: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }), p.prototype.setUseAutomaticActivation = function(t) {
            this.useAutomaticActivation_ = t
        }, p.prototype.activateTab = function(t) {
            var e, n = this.adapter_.getPreviousActiveTabIndex();
            this.indexIsInRange_(t) && t !== n && (-1 !== n && (this.adapter_.deactivateTabAtIndex(n), e = this.adapter_.getTabIndicatorClientRectAtIndex(n)), this.adapter_.activateTabAtIndex(t, e), this.scrollIntoView(t), this.adapter_.notifyTabActivated(t))
        }, p.prototype.handleKeyDown = function(t) {
            var e = this.getKeyFromEvent_(t);
            if (void 0 !== e)
                if (this.isActivationKey_(e) || t.preventDefault(), this.useAutomaticActivation_) {
                    if (this.isActivationKey_(e)) return;
                    var n = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), e);
                    this.adapter_.setActiveTab(n), this.scrollIntoView(n)
                } else {
                    var i = this.adapter_.getFocusedTabIndex();
                    this.isActivationKey_(e) ? this.adapter_.setActiveTab(i) : (n = this.determineTargetFromKey_(i, e), this.adapter_.focusTabAtIndex(n), this.scrollIntoView(n))
                }
        }, p.prototype.handleTabInteraction = function(t) {
            this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(t.detail.tabId))
        }, p.prototype.scrollIntoView = function(t) {
            if (this.indexIsInRange_(t)) return 0 === t ? this.adapter_.scrollTo(0) : t === this.adapter_.getTabListLength() - 1 ? this.adapter_.scrollTo(this.adapter_.getScrollContentWidth()) : this.isRTL_() ? this.scrollIntoViewRTL_(t) : void this.scrollIntoView_(t)
        }, p.prototype.determineTargetFromKey_ = function(t, e) {
            var n = this.isRTL_(),
                i = this.adapter_.getTabListLength() - 1,
                r = e === u.strings.END_KEY,
                o = e === u.strings.ARROW_LEFT_KEY && !n || e === u.strings.ARROW_RIGHT_KEY && n,
                s = e === u.strings.ARROW_RIGHT_KEY && !n || e === u.strings.ARROW_LEFT_KEY && n,
                a = t;
            return r ? a = i : o ? a -= 1 : s ? a += 1 : a = 0, a < 0 ? a = i : i < a && (a = 0), a
        }, p.prototype.calculateScrollIncrement_ = function(t, e, n, i) {
            var r = this.adapter_.getTabDimensionsAtIndex(e),
                o = r.contentLeft - n - i,
                s = r.contentRight - n - u.numbers.EXTRA_SCROLL_AMOUNT,
                a = o + u.numbers.EXTRA_SCROLL_AMOUNT;
            return e < t ? Math.min(s, 0) : Math.max(a, 0)
        }, p.prototype.calculateScrollIncrementRTL_ = function(t, e, n, i, r) {
            var o = this.adapter_.getTabDimensionsAtIndex(e),
                s = r - o.contentLeft - n,
                a = r - o.contentRight - n - i + u.numbers.EXTRA_SCROLL_AMOUNT,
                c = s - u.numbers.EXTRA_SCROLL_AMOUNT;
            return t < e ? Math.max(a, 0) : Math.min(c, 0)
        }, p.prototype.findAdjacentTabIndexClosestToEdge_ = function(t, e, n, i) {
            var r = e.rootLeft - n,
                o = e.rootRight - n - i,
                s = r + o;
            return r < 0 || s < 0 ? t - 1 : 0 < o || 0 < s ? t + 1 : -1
        }, p.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function(t, e, n, i, r) {
            var o = r - e.rootLeft - i - n,
                s = r - e.rootRight - n,
                a = o + s;
            return 0 < o || 0 < a ? t + 1 : s < 0 || a < 0 ? t - 1 : -1
        }, p.prototype.getKeyFromEvent_ = function(t) {
            return a.has(t.key) ? t.key : c.get(t.keyCode)
        }, p.prototype.isActivationKey_ = function(t) {
            return t === u.strings.SPACE_KEY || t === u.strings.ENTER_KEY
        }, p.prototype.indexIsInRange_ = function(t) {
            return 0 <= t && t < this.adapter_.getTabListLength()
        }, p.prototype.isRTL_ = function() {
            return this.adapter_.isRTL()
        }, p.prototype.scrollIntoView_ = function(t) {
            var e = this.adapter_.getScrollPosition(),
                n = this.adapter_.getOffsetWidth(),
                i = this.adapter_.getTabDimensionsAtIndex(t),
                r = this.findAdjacentTabIndexClosestToEdge_(t, i, e, n);
            if (this.indexIsInRange_(r)) {
                var o = this.calculateScrollIncrement_(t, r, e, n);
                this.adapter_.incrementScroll(o)
            }
        }, p.prototype.scrollIntoViewRTL_ = function(t) {
            var e = this.adapter_.getScrollPosition(),
                n = this.adapter_.getOffsetWidth(),
                i = this.adapter_.getTabDimensionsAtIndex(t),
                r = this.adapter_.getScrollContentWidth(),
                o = this.findAdjacentTabIndexClosestToEdgeRTL_(t, i, e, n, r);
            if (this.indexIsInRange_(o)) {
                var s = this.calculateScrollIncrementRTL_(t, o, e, n, r);
                this.adapter_.incrementScroll(s)
            }
        }, p);

        function p(t) {
            var e = l.call(this, o({}, p.defaultAdapter, t)) || this;
            return e.useAutomaticActivation_ = !1, e
        }
        e.MDCTabBarFoundation = d, e.default = d
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            ARROW_LEFT_KEY: "ArrowLeft",
            ARROW_RIGHT_KEY: "ArrowRight",
            END_KEY: "End",
            ENTER_KEY: "Enter",
            HOME_KEY: "Home",
            SPACE_KEY: "Space",
            TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
            TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
            TAB_SELECTOR: ".mdc-tab"
        };
        e.numbers = {
            ARROW_LEFT_KEYCODE: 37,
            ARROW_RIGHT_KEYCODE: 39,
            END_KEYCODE: 35,
            ENTER_KEYCODE: 13,
            EXTRA_SCROLL_AMOUNT: 20,
            HOME_KEYCODE: 36,
            SPACE_KEYCODE: 32
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(31),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "foundation", {
                get: function() {
                    return this.foundation_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        setContent: function(t) {
                            e.root_.textContent = t
                        }
                    };
                return new a.MDCTextFieldCharacterCounterFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTextFieldCharacterCounter = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
                ROOT: "mdc-text-field-character-counter"
            },
            r = {
                ROOT_SELECTOR: "." + (e.cssClasses = i).ROOT
            };
        e.strings = r
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(32),
            u = ["mousedown", "touchstart"],
            l = ["click", "keydown"],
            d = (s = a.MDCFoundation, r(p, s), Object.defineProperty(p, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "numbers", {
                get: function() {
                    return c.numbers
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "shouldAlwaysFloat_", {
                get: function() {
                    var t = this.getNativeInput_().type;
                    return 0 <= c.ALWAYS_FLOAT_TYPES.indexOf(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "shouldFloat", {
                get: function() {
                    return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p.prototype, "shouldShake", {
                get: function() {
                    return !this.isFocused_ && !this.isValid() && !!this.getValue()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(p, "defaultAdapter", {
                get: function() {
                    return {
                        addClass: function() {},
                        removeClass: function() {},
                        hasClass: function() {
                            return !0
                        },
                        registerTextFieldInteractionHandler: function() {},
                        deregisterTextFieldInteractionHandler: function() {},
                        registerInputInteractionHandler: function() {},
                        deregisterInputInteractionHandler: function() {},
                        registerValidationAttributeChangeHandler: function() {
                            return new MutationObserver(function() {})
                        },
                        deregisterValidationAttributeChangeHandler: function() {},
                        getNativeInput: function() {
                            return null
                        },
                        isFocused: function() {
                            return !1
                        },
                        activateLineRipple: function() {},
                        deactivateLineRipple: function() {},
                        setLineRippleTransformOrigin: function() {},
                        shakeLabel: function() {},
                        floatLabel: function() {},
                        hasLabel: function() {
                            return !1
                        },
                        getLabelWidth: function() {
                            return 0
                        },
                        hasOutline: function() {
                            return !1
                        },
                        notchOutline: function() {},
                        closeOutline: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), p.prototype.init = function() {
                var e = this;
                this.adapter_.isFocused() ? this.inputFocusHandler_() : this.adapter_.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter_.floatLabel(!0)), this.adapter_.registerInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.registerInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.registerInputInteractionHandler("input", this.inputInputHandler_), u.forEach(function(t) {
                    e.adapter_.registerInputInteractionHandler(t, e.setPointerXOffset_)
                }), l.forEach(function(t) {
                    e.adapter_.registerTextFieldInteractionHandler(t, e.textFieldInteractionHandler_)
                }), this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_), this.setCharacterCounter_(this.getValue().length)
            }, p.prototype.destroy = function() {
                var e = this;
                this.adapter_.deregisterInputInteractionHandler("focus", this.inputFocusHandler_), this.adapter_.deregisterInputInteractionHandler("blur", this.inputBlurHandler_), this.adapter_.deregisterInputInteractionHandler("input", this.inputInputHandler_), u.forEach(function(t) {
                    e.adapter_.deregisterInputInteractionHandler(t, e.setPointerXOffset_)
                }), l.forEach(function(t) {
                    e.adapter_.deregisterTextFieldInteractionHandler(t, e.textFieldInteractionHandler_)
                }), this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)
            }, p.prototype.handleTextFieldInteraction = function() {
                var t = this.adapter_.getNativeInput();
                t && t.disabled || (this.receivedUserInput_ = !0)
            }, p.prototype.handleValidationAttributeChange = function(t) {
                var e = this;
                t.some(function(t) {
                    return -1 < c.VALIDATION_ATTR_WHITELIST.indexOf(t) && (e.styleValidity_(!0), !0)
                }), -1 < t.indexOf("maxlength") && this.setCharacterCounter_(this.getValue().length)
            }, p.prototype.notchOutline = function(t) {
                if (this.adapter_.hasOutline())
                    if (t) {
                        var e = this.adapter_.hasClass(c.cssClasses.DENSE) ? c.numbers.DENSE_LABEL_SCALE : c.numbers.LABEL_SCALE,
                            n = this.adapter_.getLabelWidth() * e;
                        this.adapter_.notchOutline(n)
                    } else this.adapter_.closeOutline()
            }, p.prototype.activateFocus = function() {
                this.isFocused_ = !0, this.styleFocused_(this.isFocused_), this.adapter_.activateLineRipple(), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.helperText_ && this.helperText_.showToScreenReader()
            }, p.prototype.setTransformOrigin = function(t) {
                var e = t.touches,
                    n = e ? e[0] : t,
                    i = n.target.getBoundingClientRect(),
                    r = n.clientX - i.left;
                this.adapter_.setLineRippleTransformOrigin(r)
            }, p.prototype.handleInput = function() {
                this.autoCompleteFocus(), this.setCharacterCounter_(this.getValue().length)
            }, p.prototype.autoCompleteFocus = function() {
                this.receivedUserInput_ || this.activateFocus()
            }, p.prototype.deactivateFocus = function() {
                this.isFocused_ = !1, this.adapter_.deactivateLineRipple();
                var t = this.isValid();
                this.styleValidity_(t), this.styleFocused_(this.isFocused_), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput_ = !1)
            }, p.prototype.getValue = function() {
                return this.getNativeInput_().value
            }, p.prototype.setValue = function(t) {
                this.getValue() !== t && (this.getNativeInput_().value = t), this.setCharacterCounter_(t.length);
                var e = this.isValid();
                this.styleValidity_(e), this.adapter_.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter_.floatLabel(this.shouldFloat), this.adapter_.shakeLabel(this.shouldShake))
            }, p.prototype.isValid = function() {
                return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_
            }, p.prototype.setValid = function(t) {
                this.isValid_ = t, this.styleValidity_(t);
                var e = !t && !this.isFocused_ && !!this.getValue();
                this.adapter_.hasLabel() && this.adapter_.shakeLabel(e)
            }, p.prototype.setUseNativeValidation = function(t) {
                this.useNativeValidation_ = t
            }, p.prototype.isDisabled = function() {
                return this.getNativeInput_().disabled
            }, p.prototype.setDisabled = function(t) {
                this.getNativeInput_().disabled = t, this.styleDisabled_(t)
            }, p.prototype.setHelperTextContent = function(t) {
                this.helperText_ && this.helperText_.setContent(t)
            }, p.prototype.setLeadingIconAriaLabel = function(t) {
                this.leadingIcon_ && this.leadingIcon_.setAriaLabel(t)
            }, p.prototype.setLeadingIconContent = function(t) {
                this.leadingIcon_ && this.leadingIcon_.setContent(t)
            }, p.prototype.setTrailingIconAriaLabel = function(t) {
                this.trailingIcon_ && this.trailingIcon_.setAriaLabel(t)
            }, p.prototype.setTrailingIconContent = function(t) {
                this.trailingIcon_ && this.trailingIcon_.setContent(t)
            }, p.prototype.setCharacterCounter_ = function(t) {
                if (this.characterCounter_) {
                    var e = this.getNativeInput_().maxLength;
                    if (-1 === e) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
                    this.characterCounter_.setCounterValue(t, e)
                }
            }, p.prototype.isBadInput_ = function() {
                return this.getNativeInput_().validity.badInput || !1
            }, p.prototype.isNativeInputValid_ = function() {
                return this.getNativeInput_().validity.valid
            }, p.prototype.styleValidity_ = function(t) {
                var e = p.cssClasses.INVALID;
                t ? this.adapter_.removeClass(e) : this.adapter_.addClass(e), this.helperText_ && this.helperText_.setValidity(t)
            }, p.prototype.styleFocused_ = function(t) {
                var e = p.cssClasses.FOCUSED;
                t ? this.adapter_.addClass(e) : this.adapter_.removeClass(e)
            }, p.prototype.styleDisabled_ = function(t) {
                var e = p.cssClasses,
                    n = e.DISABLED,
                    i = e.INVALID;
                t ? (this.adapter_.addClass(n), this.adapter_.removeClass(i)) : this.adapter_.removeClass(n), this.leadingIcon_ && this.leadingIcon_.setDisabled(t), this.trailingIcon_ && this.trailingIcon_.setDisabled(t)
            }, p.prototype.getNativeInput_ = function() {
                return (this.adapter_ ? this.adapter_.getNativeInput() : null) || {
                    disabled: !1,
                    maxLength: -1,
                    type: "input",
                    validity: {
                        badInput: !1,
                        valid: !0
                    },
                    value: ""
                }
            }, p);

        function p(t, e) {
            void 0 === e && (e = {});
            var n = s.call(this, o({}, p.defaultAdapter, t)) || this;
            return n.isFocused_ = !1, n.receivedUserInput_ = !1, n.isValid_ = !0, n.useNativeValidation_ = !0, n.helperText_ = e.helperText, n.characterCounter_ = e.characterCounter, n.leadingIcon_ = e.leadingIcon, n.trailingIcon_ = e.trailingIcon, n.inputFocusHandler_ = function() {
                return n.activateFocus()
            }, n.inputBlurHandler_ = function() {
                return n.deactivateFocus()
            }, n.inputInputHandler_ = function() {
                return n.handleInput()
            }, n.setPointerXOffset_ = function(t) {
                return n.setTransformOrigin(t)
            }, n.textFieldInteractionHandler_ = function() {
                return n.handleTextFieldInteraction()
            }, n.validationAttributeChangeHandler_ = function(t) {
                return n.handleValidationAttributeChange(t)
            }, n
        }
        e.MDCTextFieldFoundation = d, e.default = d
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(33),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "foundation", {
                get: function() {
                    return this.foundation_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        },
                        removeAttr: function(t) {
                            return n.root_.removeAttribute(t)
                        },
                        setContent: function(t) {
                            n.root_.textContent = t
                        }
                    };
                return new a.MDCTextFieldHelperTextFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTextFieldHelperText = c
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = {
                HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
                HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
                ROOT: "mdc-text-field-helper-text"
            },
            r = {
                ARIA_HIDDEN: "aria-hidden",
                ROLE: "role",
                ROOT_SELECTOR: "." + (e.cssClasses = i).ROOT
            };
        e.strings = r
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(98),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "foundation", {
                get: function() {
                    return this.foundation_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        getAttr: function(t) {
                            return n.root_.getAttribute(t)
                        },
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        },
                        removeAttr: function(t) {
                            return n.root_.removeAttribute(t)
                        },
                        setContent: function(t) {
                            n.root_.textContent = t
                        },
                        registerInteractionHandler: function(t, e) {
                            return n.listen(t, e)
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return n.unlisten(t, e)
                        },
                        notifyIconAction: function() {
                            return n.emit(a.MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, !0)
                        }
                    };
                return new a.MDCTextFieldIconFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTextFieldIcon = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(0),
            c = n(99),
            u = ["click", "keydown"],
            l = (s = a.MDCFoundation, r(d, s), Object.defineProperty(d, "strings", {
                get: function() {
                    return c.strings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "cssClasses", {
                get: function() {
                    return c.cssClasses
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d, "defaultAdapter", {
                get: function() {
                    return {
                        getAttr: function() {
                            return null
                        },
                        setAttr: function() {},
                        removeAttr: function() {},
                        setContent: function() {},
                        registerInteractionHandler: function() {},
                        deregisterInteractionHandler: function() {},
                        notifyIconAction: function() {}
                    }
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.init = function() {
                var e = this;
                this.savedTabIndex_ = this.adapter_.getAttr("tabindex"), u.forEach(function(t) {
                    e.adapter_.registerInteractionHandler(t, e.interactionHandler_)
                })
            }, d.prototype.destroy = function() {
                var e = this;
                u.forEach(function(t) {
                    e.adapter_.deregisterInteractionHandler(t, e.interactionHandler_)
                })
            }, d.prototype.setDisabled = function(t) {
                this.savedTabIndex_ && (t ? (this.adapter_.setAttr("tabindex", "-1"), this.adapter_.removeAttr("role")) : (this.adapter_.setAttr("tabindex", this.savedTabIndex_), this.adapter_.setAttr("role", c.strings.ICON_ROLE)))
            }, d.prototype.setAriaLabel = function(t) {
                this.adapter_.setAttr("aria-label", t)
            }, d.prototype.setContent = function(t) {
                this.adapter_.setContent(t)
            }, d.prototype.handleInteraction = function(t) {
                var e = "Enter" === t.key || 13 === t.keyCode;
                "click" !== t.type && !e || this.adapter_.notifyIconAction()
            }, d);

        function d(t) {
            var e = s.call(this, o({}, d.defaultAdapter, t)) || this;
            return e.savedTabIndex_ = null, e.interactionHandler_ = function(t) {
                return e.handleInteraction(t)
            }, e
        }
        e.MDCTextFieldIconFoundation = l, e.default = l
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.strings = {
            ICON_EVENT: "MDCTextField:icon",
            ICON_ROLE: "button"
        };
        e.cssClasses = {
            ROOT: "mdc-text-field__icon"
        }
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(7),
            a = n(34),
            c = (o = a.MDCTopAppBarFoundation, r(u, o), u.prototype.handleTargetScroll = function() {
                this.adapter_.getViewportScrollY() <= 0 ? this.wasScrolled_ && (this.adapter_.removeClass(s.cssClasses.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !1) : this.wasScrolled_ || (this.adapter_.addClass(s.cssClasses.FIXED_SCROLLED_CLASS), this.wasScrolled_ = !0)
            }, u);

        function u() {
            var t = null !== o && o.apply(this, arguments) || this;
            return t.wasScrolled_ = !1, t
        }
        e.MDCFixedTopAppBarFoundation = c, e.default = c
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(7),
            a = n(35),
            c = (o = a.MDCTopAppBarBaseFoundation, r(u, o), Object.defineProperty(u.prototype, "isCollapsed", {
                get: function() {
                    return this.isCollapsed_
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.init = function() {
                o.prototype.init.call(this), 0 < this.adapter_.getTotalActionItems() && this.adapter_.addClass(s.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS), this.setAlwaysCollapsed(this.adapter_.hasClass(s.cssClasses.SHORT_COLLAPSED_CLASS))
            }, u.prototype.setAlwaysCollapsed = function(t) {
                this.isAlwaysCollapsed_ = !!t, this.isAlwaysCollapsed_ ? this.collapse_() : this.maybeCollapseBar_()
            }, u.prototype.getAlwaysCollapsed = function() {
                return this.isAlwaysCollapsed_
            }, u.prototype.handleTargetScroll = function() {
                this.maybeCollapseBar_()
            }, u.prototype.maybeCollapseBar_ = function() {
                this.isAlwaysCollapsed_ || (this.adapter_.getViewportScrollY() <= 0 ? this.isCollapsed_ && this.uncollapse_() : this.isCollapsed_ || this.collapse_())
            }, u.prototype.uncollapse_ = function() {
                this.adapter_.removeClass(s.cssClasses.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !1
            }, u.prototype.collapse_ = function() {
                this.adapter_.addClass(s.cssClasses.SHORT_COLLAPSED_CLASS), this.isCollapsed_ = !0
            }, u);

        function u(t) {
            var e = o.call(this, t) || this;
            return e.isCollapsed_ = !1, e.isAlwaysCollapsed_ = !1, e
        }
        e.MDCShortTopAppBarFoundation = c, e.default = c
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            },
            r = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(n(103));
        e.autoInit = o.default;
        var s = r(n(105));
        e.base = s;
        var a = r(n(106));
        e.checkbox = a;
        var c = r(n(107));
        e.chips = c;
        var u = r(n(111));
        e.dataTable = u;
        var l = r(n(113));
        e.dialog = l;
        var d = r(n(118));
        e.dom = d;
        var p = r(n(119));
        e.drawer = p;
        var _ = r(n(123));
        e.floatingLabel = _;
        var f = r(n(124));
        e.formField = f;
        var h = r(n(126));
        e.gridList = h;
        var y = r(n(128));
        e.iconButton = y;
        var C = r(n(130));
        e.lineRipple = C;
        var g = r(n(131));
        e.linearProgress = g;
        var m = r(n(133));
        e.list = m;
        var v = r(n(134));
        e.menuSurface = v;
        var E = r(n(135));
        e.menu = E;
        var b = r(n(136));
        e.notchedOutline = b;
        var T = r(n(137));
        e.radio = T;
        var O = r(n(139));
        e.ripple = O;
        var A = r(n(140));
        e.select = A;
        var I = r(n(144));
        e.slider = I;
        var S = r(n(146));
        e.snackbar = S;
        var L = r(n(148));
        e.switchControl = L;
        var R = r(n(150));
        e.tabBar = R;
        var D = r(n(155));
        e.tabIndicator = D;
        var M = r(n(156));
        e.tabScroller = M;
        var P = r(n(157));
        e.tab = P;
        var N = r(n(158));
        e.textField = N;
        var w = r(n(163));
        e.topAppBar = w, o.default.register("MDCCheckbox", a.MDCCheckbox), o.default.register("MDCChip", c.MDCChip), o.default.register("MDCChipSet", c.MDCChipSet), o.default.register("MDCDataTable", u.MDCDataTable), o.default.register("MDCDialog", l.MDCDialog), o.default.register("MDCDrawer", p.MDCDrawer), o.default.register("MDCFloatingLabel", _.MDCFloatingLabel), o.default.register("MDCFormField", f.MDCFormField), o.default.register("MDCGridList", h.MDCGridList), o.default.register("MDCIconButtonToggle", y.MDCIconButtonToggle), o.default.register("MDCLineRipple", C.MDCLineRipple), o.default.register("MDCLinearProgress", g.MDCLinearProgress), o.default.register("MDCList", m.MDCList), o.default.register("MDCMenu", E.MDCMenu), o.default.register("MDCMenuSurface", v.MDCMenuSurface), o.default.register("MDCNotchedOutline", b.MDCNotchedOutline), o.default.register("MDCRadio", T.MDCRadio), o.default.register("MDCRipple", O.MDCRipple), o.default.register("MDCSelect", A.MDCSelect), o.default.register("MDCSlider", I.MDCSlider), o.default.register("MDCSnackbar", S.MDCSnackbar), o.default.register("MDCSwitch", L.MDCSwitch), o.default.register("MDCTabBar", R.MDCTabBar), o.default.register("MDCTextField", N.MDCTextField), o.default.register("MDCTopAppBar", w.MDCTopAppBar)
    }, function(t, e, n) {
        "use strict";
        var d = this && this.__values || function(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
                n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(104),
            p = i.strings.AUTO_INIT_ATTR,
            _ = i.strings.AUTO_INIT_STATE_ATTR,
            f = i.strings.INITIALIZED_STATE,
            h = {},
            r = console.warn.bind(console);

        function o(t) {
            var e, n;
            void 0 === t && (t = document);
            var i = [],
                r = [].slice.call(t.querySelectorAll("[" + p + "]"));
            r = r.filter(function(t) {
                return t.getAttribute(_) !== f
            });
            try {
                for (var o = d(r), s = o.next(); !s.done; s = o.next()) {
                    var a = s.value,
                        c = a.getAttribute(p);
                    if (!c) throw new Error("(mdc-auto-init) Constructor name must be given.");
                    var u = h[c];
                    if ("function" != typeof u) throw new Error("(mdc-auto-init) Could not find constructor in registry for " + c);
                    var l = u.attachTo(a);
                    Object.defineProperty(a, c, {
                        configurable: !0,
                        enumerable: !1,
                        value: l,
                        writable: !1
                    }), i.push(l), a.setAttribute(_, f)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return function(t, e, n) {
                var i;
                void 0 === n && (n = !1), "function" == typeof CustomEvent ? i = new CustomEvent(t, {
                    bubbles: n,
                    detail: e
                }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e), document.dispatchEvent(i)
            }("MDCAutoInit:End", {}), i
        }(e.mdcAutoInit = o).register = function(t, e, n) {
            if (void 0 === n && (n = r), "function" != typeof e) throw new Error("(mdc-auto-init) Invalid Constructor value: " + e + ". Expected function.");
            var i = h[t];
            i && n("(mdc-auto-init) Overriding registration for " + t + " with " + e + ". Was: " + i), h[t] = e
        }, o.deregister = function(t) {
            delete h[t]
        }, o.deregisterAll = function() {
            Object.keys(h).forEach(this.deregister, this)
        }, e.default = o
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.strings = {
            AUTO_INIT_ATTR: "data-mdc-auto-init",
            AUTO_INIT_STATE_ATTR: "data-mdc-auto-init-state",
            INITIALIZED_STATE: "initialized"
        }
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(1)), i(e(0))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(36)), i(e(39)), i(e(38))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(108)), i(e(109))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(40)), i(e(17));
        var r = e(8);
        n.chipCssClasses = r.cssClasses, n.chipStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(110)), i(e(41));
        var r = e(42);
        n.chipSetCssClasses = r.cssClasses, n.chipSetStrings = r.strings
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(40),
            c = n(17),
            u = n(41),
            l = c.MDCChipFoundation.strings,
            d = l.INTERACTION_EVENT,
            p = l.SELECTION_EVENT,
            _ = l.REMOVAL_EVENT,
            f = l.NAVIGATION_EVENT,
            h = u.MDCChipSetFoundation.strings.CHIP_SELECTOR,
            y = 0,
            C = (o = s.MDCComponent, r(g, o), g.attachTo = function(t) {
                return new g(t)
            }, Object.defineProperty(g.prototype, "chips", {
                get: function() {
                    return this.chips_.slice()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(g.prototype, "selectedChipIds", {
                get: function() {
                    return this.foundation_.getSelectedChipIds()
                },
                enumerable: !0,
                configurable: !0
            }), g.prototype.initialize = function(t) {
                void 0 === t && (t = function(t) {
                    return new a.MDCChip(t)
                }), this.chipFactory_ = t, this.chips_ = this.instantiateChips_(this.chipFactory_)
            }, g.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.chips_.forEach(function(t) {
                    t.id && t.selected && e.foundation_.select(t.id)
                }), this.handleChipInteraction_ = function(t) {
                    return e.foundation_.handleChipInteraction(t.detail.chipId)
                }, this.handleChipSelection_ = function(t) {
                    e.foundation_.handleChipSelection(t.detail.chipId, t.detail.selected, t.detail.shouldIgnore)
                }, this.handleChipRemoval_ = function(t) {
                    return e.foundation_.handleChipRemoval(t.detail.chipId)
                }, this.handleChipNavigation_ = function(t) {
                    return e.foundation_.handleChipNavigation(t.detail.chipId, t.detail.key, t.detail.source)
                }, this.listen(d, this.handleChipInteraction_), this.listen(p, this.handleChipSelection_), this.listen(_, this.handleChipRemoval_), this.listen(f, this.handleChipNavigation_)
            }, g.prototype.destroy = function() {
                this.chips_.forEach(function(t) {
                    t.destroy()
                }), this.unlisten(d, this.handleChipInteraction_), this.unlisten(p, this.handleChipSelection_), this.unlisten(_, this.handleChipRemoval_), this.unlisten(f, this.handleChipNavigation_), o.prototype.destroy.call(this)
            }, g.prototype.addChip = function(t) {
                t.id = t.id || "mdc-chip-" + ++y, this.chips_.push(this.chipFactory_(t))
            }, g.prototype.getDefaultFoundation = function() {
                var i = this,
                    t = {
                        focusChipPrimaryActionAtIndex: function(t) {
                            i.chips_[t].focusPrimaryAction()
                        },
                        focusChipTrailingActionAtIndex: function(t) {
                            i.chips_[t].focusTrailingAction()
                        },
                        getChipListCount: function() {
                            return i.chips_.length
                        },
                        getIndexOfChipById: function(t) {
                            return i.findChipIndex_(t)
                        },
                        hasClass: function(t) {
                            return i.root_.classList.contains(t)
                        },
                        isRTL: function() {
                            return "rtl" === window.getComputedStyle(i.root_).getPropertyValue("direction")
                        },
                        removeChipAtIndex: function(t) {
                            0 <= t && t < i.chips_.length && (i.chips_[t].destroy(), i.chips_[t].remove(), i.chips_.splice(t, 1))
                        },
                        removeFocusFromChipAtIndex: function(t) {
                            i.chips_[t].removeFocus()
                        },
                        selectChipAtIndex: function(t, e, n) {
                            0 <= t && t < i.chips_.length && i.chips_[t].setSelectedFromChipSet(e, n)
                        }
                    };
                return new u.MDCChipSetFoundation(t)
            }, g.prototype.instantiateChips_ = function(e) {
                return [].slice.call(this.root_.querySelectorAll(h)).map(function(t) {
                    return t.id = t.id || "mdc-chip-" + ++y, e(t)
                })
            }, g.prototype.findChipIndex_ = function(t) {
                for (var e = 0; e < this.chips_.length; e++)
                    if (this.chips_[e].id === t) return e;
                return -1
            }, g);

        function g() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCChipSet = C
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(112)), i(e(43)), i(e(18))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(36),
            c = n(2),
            u = n(18),
            l = n(43),
            d = (o = s.MDCComponent, r(p, o), p.attachTo = function(t) {
                return new p(t)
            }, p.prototype.initialize = function(t) {
                void 0 === t && (t = function(t) {
                    return new a.MDCCheckbox(t)
                }), this.checkboxFactory_ = t
            }, p.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.headerRow_ = this.root_.querySelector("." + u.cssClasses.HEADER_ROW), this.handleHeaderRowCheckboxChange_ = function() {
                    return e.foundation_.handleHeaderRowCheckboxChange()
                }, this.headerRow_.addEventListener("change", this.handleHeaderRowCheckboxChange_), this.content_ = this.root_.querySelector("." + u.cssClasses.CONTENT), this.handleRowCheckboxChange_ = function(t) {
                    return e.foundation_.handleRowCheckboxChange(t)
                }, this.content_.addEventListener("change", this.handleRowCheckboxChange_), this.layout()
            }, p.prototype.layout = function() {
                this.foundation_.layout()
            }, p.prototype.getRows = function() {
                return this.foundation_.getRows()
            }, p.prototype.getSelectedRowIds = function() {
                return this.foundation_.getSelectedRowIds()
            }, p.prototype.setSelectedRowIds = function(t) {
                this.foundation_.setSelectedRowIds(t)
            }, p.prototype.destroy = function() {
                this.headerRow_.removeEventListener("change", this.handleHeaderRowCheckboxChange_), this.content_.removeEventListener("change", this.handleRowCheckboxChange_), this.headerRowCheckbox_.destroy(), this.rowCheckboxList_.forEach(function(t) {
                    return t.destroy()
                })
            }, p.prototype.getDefaultFoundation = function() {
                var i = this,
                    t = {
                        addClassAtRowIndex: function(t, e) {
                            return i.getRows()[t].classList.add(e)
                        },
                        getRowCount: function() {
                            return i.getRows().length
                        },
                        getRowElements: function() {
                            return [].slice.call(i.root_.querySelectorAll(u.strings.ROW_SELECTOR))
                        },
                        getRowIdAtIndex: function(t) {
                            return i.getRows()[t].getAttribute(u.strings.DATA_ROW_ID_ATTR)
                        },
                        getRowIndexByChildElement: function(t) {
                            return i.getRows().indexOf(c.closest(t, u.strings.ROW_SELECTOR))
                        },
                        getSelectedRowCount: function() {
                            return i.root_.querySelectorAll(u.strings.ROW_SELECTED_SELECTOR).length
                        },
                        isCheckboxAtRowIndexChecked: function(t) {
                            return i.rowCheckboxList_[t].checked
                        },
                        isHeaderRowCheckboxChecked: function() {
                            return i.headerRowCheckbox_.checked
                        },
                        isRowsSelectable: function() {
                            return !!i.root_.querySelector(u.strings.ROW_CHECKBOX_SELECTOR)
                        },
                        notifyRowSelectionChanged: function(t) {
                            i.emit(u.events.ROW_SELECTION_CHANGED, {
                                row: i.getRowByIndex_(t.rowIndex),
                                rowId: i.getRowIdByIndex_(t.rowIndex),
                                rowIndex: t.rowIndex,
                                selected: t.selected
                            }, !0)
                        },
                        notifySelectedAll: function() {
                            return i.emit(u.events.SELECTED_ALL, {}, !0)
                        },
                        notifyUnselectedAll: function() {
                            return i.emit(u.events.UNSELECTED_ALL, {}, !0)
                        },
                        registerHeaderRowCheckbox: function() {
                            i.headerRowCheckbox_ && i.headerRowCheckbox_.destroy();
                            var t = i.root_.querySelector(u.strings.HEADER_ROW_CHECKBOX_SELECTOR);
                            i.headerRowCheckbox_ = i.checkboxFactory_(t)
                        },
                        registerRowCheckboxes: function() {
                            i.rowCheckboxList_ && i.rowCheckboxList_.forEach(function(t) {
                                return t.destroy()
                            }), i.rowCheckboxList_ = [], i.getRows().forEach(function(t) {
                                var e = i.checkboxFactory_(t.querySelector(u.strings.ROW_CHECKBOX_SELECTOR));
                                i.rowCheckboxList_.push(e)
                            })
                        },
                        removeClassAtRowIndex: function(t, e) {
                            i.getRows()[t].classList.remove(e)
                        },
                        setAttributeAtRowIndex: function(t, e, n) {
                            i.getRows()[t].setAttribute(e, n)
                        },
                        setHeaderRowCheckboxChecked: function(t) {
                            i.headerRowCheckbox_.checked = t
                        },
                        setHeaderRowCheckboxIndeterminate: function(t) {
                            i.headerRowCheckbox_.indeterminate = t
                        },
                        setRowCheckboxCheckedAtIndex: function(t, e) {
                            i.rowCheckboxList_[t].checked = e
                        }
                    };
                return new l.MDCDataTableFoundation(t)
            }, p.prototype.getRowByIndex_ = function(t) {
                return this.getRows()[t]
            }, p.prototype.getRowIdByIndex_ = function(t) {
                return this.getRowByIndex_(t).getAttribute(u.strings.DATA_ROW_ID_ATTR)
            }, p);

        function p() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCDataTable = d
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(44));
        n.util = o, i(e(117)), i(e(46)), i(e(45))
    }, function(t, e, n) {
        var i, g = n(115),
            m = n(116),
            v = (i = [], {
                activateTrap: function(t) {
                    if (0 < i.length) {
                        var e = i[i.length - 1];
                        e !== t && e.pause()
                    }
                    var n = i.indexOf(t); - 1 === n || i.splice(n, 1), i.push(t)
                },
                deactivateTrap: function(t) {
                    var e = i.indexOf(t); - 1 !== e && i.splice(e, 1), 0 < i.length && i[i.length - 1].unpause()
                }
            });

        function E(t) {
            return setTimeout(t, 0)
        }
        t.exports = function(t, e) {
            var i = document,
                n = "string" == typeof t ? i.querySelector(t) : t,
                r = m({
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0
                }, e),
                o = {
                    firstTabbableNode: null,
                    lastTabbableNode: null,
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1
                },
                s = {
                    activate: function(t) {
                        if (o.active) return;
                        y(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = i.activeElement;
                        var e = t && t.onActivate ? t.onActivate : r.onActivate;
                        e && e();
                        return c(), s
                    },
                    deactivate: a,
                    pause: function() {
                        if (o.paused || !o.active) return;
                        o.paused = !0, u()
                    },
                    unpause: function() {
                        if (!o.paused || !o.active) return;
                        o.paused = !1, y(), c()
                    }
                };
            return s;

            function a(t) {
                if (o.active) {
                    u(), o.active = !1, o.paused = !1, v.deactivateTrap(s);
                    var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : r.onDeactivate;
                    return e && e(), (t && void 0 !== t.returnFocus ? t.returnFocus : r.returnFocusOnDeactivate) && E(function() {
                        C(o.nodeFocusedBeforeActivation)
                    }), s
                }
            }

            function c() {
                if (o.active) return v.activateTrap(s), E(function() {
                    C(d())
                }), i.addEventListener("focusin", _, !0), i.addEventListener("mousedown", p, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("touchstart", p, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("click", h, {
                    capture: !0,
                    passive: !1
                }), i.addEventListener("keydown", f, {
                    capture: !0,
                    passive: !1
                }), s
            }

            function u() {
                if (o.active) return i.removeEventListener("focusin", _, !0), i.removeEventListener("mousedown", p, !0), i.removeEventListener("touchstart", p, !0), i.removeEventListener("click", h, !0), i.removeEventListener("keydown", f, !0), s
            }

            function l(t) {
                var e = r[t],
                    n = e;
                if (!e) return null;
                if ("string" == typeof e && !(n = i.querySelector(e))) throw new Error("`" + t + "` refers to no known node");
                if ("function" == typeof e && !(n = e())) throw new Error("`" + t + "` did not return a node");
                return n
            }

            function d() {
                var t;
                if (!(t = null !== l("initialFocus") ? l("initialFocus") : n.contains(i.activeElement) ? i.activeElement : o.firstTabbableNode || l("fallbackFocus"))) throw new Error("You can't have a focus-trap without at least one focusable element");
                return t
            }

            function p(t) {
                n.contains(t.target) || (r.clickOutsideDeactivates ? a({
                    returnFocus: !g.isFocusable(t.target)
                }) : t.preventDefault())
            }

            function _(t) {
                n.contains(t.target) || t.target instanceof Document || (t.stopImmediatePropagation(), C(o.mostRecentlyFocusedNode || d()))
            }

            function f(t) {
                if (!1 !== r.escapeDeactivates && function(t) {
                        return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
                    }(t)) return t.preventDefault(), void a();
                ! function(t) {
                    return "Tab" === t.key || 9 === t.keyCode
                }(t) || function(t) {
                    if (y(), t.shiftKey && t.target === o.firstTabbableNode) return t.preventDefault(), C(o.lastTabbableNode);
                    if (!t.shiftKey && t.target === o.lastTabbableNode) t.preventDefault(), C(o.firstTabbableNode)
                }(t)
            }

            function h(t) {
                r.clickOutsideDeactivates || n.contains(t.target) || (t.preventDefault(), t.stopImmediatePropagation())
            }

            function y() {
                var t = g(n);
                o.firstTabbableNode = t[0] || d(), o.lastTabbableNode = t[t.length - 1] || d()
            }

            function C(t) {
                t !== i.activeElement && (t && t.focus ? (t.focus(), function(t) {
                    return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
                }(o.mostRecentlyFocusedNode = t) && t.select()) : C(d()))
            }
        }
    }, function(t, e) {
        var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
            c = n.join(","),
            u = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

        function i(t, e) {
            e = e || {};
            var n, i, r, o = [],
                s = [],
                a = t.querySelectorAll(c);
            for (e.includeContainer && u.call(t, c) && (a = Array.prototype.slice.apply(a)).unshift(t), n = 0; n < a.length; n++) l(i = a[n]) && (0 === (r = d(i)) ? o.push(i) : s.push({
                documentOrder: n,
                tabIndex: r,
                node: i
            }));
            return s.sort(p).map(function(t) {
                return t.node
            }).concat(o)
        }

        function l(t) {
            return !(!r(t) || function(t) {
                return function(t) {
                    return s(t) && "radio" === t.type
                }(t) && ! function(t) {
                    if (!t.name) return !0;
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].checked) return t[e]
                    }(t.ownerDocument.querySelectorAll('input[type="radio"][name="' + t.name + '"]'));
                    return !e || e === t
                }(t)
            }(t) || d(t) < 0)
        }

        function r(t) {
            return !(t.disabled || function(t) {
                return s(t) && "hidden" === t.type
            }(t) || function(t) {
                return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility
            }(t))
        }
        i.isTabbable = function(t) {
            if (!t) throw new Error("No node provided");
            return !1 !== u.call(t, c) && l(t)
        }, i.isFocusable = function(t) {
            if (!t) throw new Error("No node provided");
            return !1 !== u.call(t, o) && r(t)
        };
        var o = n.concat("iframe").join(",");

        function d(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return isNaN(e) ? function(t) {
                return "true" === t.contentEditable
            }(t) ? 0 : t.tabIndex : e
        }

        function p(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        }

        function s(t) {
            return "INPUT" === t.tagName
        }
        t.exports = i
    }, function(t, e) {
        t.exports = function() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) r.call(n, i) && (t[i] = n[i])
            }
            return t
        };
        var r = Object.prototype.hasOwnProperty
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            a = this && this.__values || function(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            },
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, c = n(1),
            u = n(2),
            l = n(3),
            d = n(45),
            p = o(n(44)),
            _ = d.MDCDialogFoundation.strings,
            f = (s = c.MDCComponent, r(h, s), Object.defineProperty(h.prototype, "isOpen", {
                get: function() {
                    return this.foundation_.isOpen()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "escapeKeyAction", {
                get: function() {
                    return this.foundation_.getEscapeKeyAction()
                },
                set: function(t) {
                    this.foundation_.setEscapeKeyAction(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "scrimClickAction", {
                get: function() {
                    return this.foundation_.getScrimClickAction()
                },
                set: function(t) {
                    this.foundation_.setScrimClickAction(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(h.prototype, "autoStackButtons", {
                get: function() {
                    return this.foundation_.getAutoStackButtons()
                },
                set: function(t) {
                    this.foundation_.setAutoStackButtons(t)
                },
                enumerable: !0,
                configurable: !0
            }), h.attachTo = function(t) {
                return new h(t)
            }, h.prototype.initialize = function(t) {
                var e, n, i = this.root_.querySelector(_.CONTAINER_SELECTOR);
                if (!i) throw new Error("Dialog component requires a " + _.CONTAINER_SELECTOR + " container element");
                this.container_ = i, this.content_ = this.root_.querySelector(_.CONTENT_SELECTOR), this.buttons_ = [].slice.call(this.root_.querySelectorAll(_.BUTTON_SELECTOR)), this.defaultButton_ = this.root_.querySelector("[" + _.BUTTON_DEFAULT_ATTRIBUTE + "]"), this.focusTrapFactory_ = t, this.buttonRipples_ = [];
                try {
                    for (var r = a(this.buttons_), o = r.next(); !o.done; o = r.next()) {
                        var s = o.value;
                        this.buttonRipples_.push(new l.MDCRipple(s))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, h.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.focusTrap_ = p.createFocusTrapInstance(this.container_, this.focusTrapFactory_, this.getInitialFocusEl_() || void 0), this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_), this.handleKeydown_ = this.foundation_.handleKeydown.bind(this.foundation_), this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_), this.handleLayout_ = this.layout.bind(this);
                var t = ["resize", "orientationchange"];
                this.handleOpening_ = function() {
                    t.forEach(function(t) {
                        return window.addEventListener(t, e.handleLayout_)
                    }), document.addEventListener("keydown", e.handleDocumentKeydown_)
                }, this.handleClosing_ = function() {
                    t.forEach(function(t) {
                        return window.removeEventListener(t, e.handleLayout_)
                    }), document.removeEventListener("keydown", e.handleDocumentKeydown_)
                }, this.listen("click", this.handleClick_), this.listen("keydown", this.handleKeydown_), this.listen(_.OPENING_EVENT, this.handleOpening_), this.listen(_.CLOSING_EVENT, this.handleClosing_)
            }, h.prototype.destroy = function() {
                this.unlisten("click", this.handleClick_), this.unlisten("keydown", this.handleKeydown_), this.unlisten(_.OPENING_EVENT, this.handleOpening_), this.unlisten(_.CLOSING_EVENT, this.handleClosing_), this.handleClosing_(), this.buttonRipples_.forEach(function(t) {
                    return t.destroy()
                }), s.prototype.destroy.call(this)
            }, h.prototype.layout = function() {
                this.foundation_.layout()
            }, h.prototype.open = function() {
                this.foundation_.open()
            }, h.prototype.close = function(t) {
                void 0 === t && (t = ""), this.foundation_.close(t)
            }, h.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addBodyClass: function(t) {
                            return document.body.classList.add(t)
                        },
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        areButtonsStacked: function() {
                            return p.areTopsMisaligned(e.buttons_)
                        },
                        clickDefaultButton: function() {
                            return e.defaultButton_ && e.defaultButton_.click()
                        },
                        eventTargetMatches: function(t, e) {
                            return !!t && u.matches(t, e)
                        },
                        getActionFromEvent: function(t) {
                            if (!t.target) return "";
                            var e = u.closest(t.target, "[" + _.ACTION_ATTRIBUTE + "]");
                            return e && e.getAttribute(_.ACTION_ATTRIBUTE)
                        },
                        getInitialFocusEl: function() {
                            return e.getInitialFocusEl_()
                        },
                        hasClass: function(t) {
                            return e.root_.classList.contains(t)
                        },
                        isContentScrollable: function() {
                            return p.isScrollable(e.content_)
                        },
                        notifyClosed: function(t) {
                            return e.emit(_.CLOSED_EVENT, t ? {
                                action: t
                            } : {})
                        },
                        notifyClosing: function(t) {
                            return e.emit(_.CLOSING_EVENT, t ? {
                                action: t
                            } : {})
                        },
                        notifyOpened: function() {
                            return e.emit(_.OPENED_EVENT, {})
                        },
                        notifyOpening: function() {
                            return e.emit(_.OPENING_EVENT, {})
                        },
                        releaseFocus: function() {
                            return e.focusTrap_.deactivate()
                        },
                        removeBodyClass: function(t) {
                            return document.body.classList.remove(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        reverseButtons: function() {
                            e.buttons_.reverse(), e.buttons_.forEach(function(t) {
                                t.parentElement.appendChild(t)
                            })
                        },
                        trapFocus: function() {
                            return e.focusTrap_.activate()
                        }
                    };
                return new d.MDCDialogFoundation(t)
            }, h.prototype.getInitialFocusEl_ = function() {
                return document.querySelector("[" + _.INITIAL_FOCUS_ATTRIBUTE + "]")
            }, h);

        function h() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.MDCDialog = f
    }, function(t, e, n) {
        "use strict";
        var i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n(5));
        e.events = r;
        var o = i(n(2));
        e.ponyfill = o
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(47));
        n.util = o, i(e(122)), i(e(49)), i(e(20)), i(e(50))
    }, function(t, e) {
        var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
            c = n.join(","),
            u = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

        function i(t, e) {
            e = e || {};
            var n, i, r, o = [],
                s = [],
                a = t.querySelectorAll(c);
            for (e.includeContainer && u.call(t, c) && (a = Array.prototype.slice.apply(a)).unshift(t), n = 0; n < a.length; n++) l(i = a[n]) && (0 === (r = d(i)) ? o.push(i) : s.push({
                documentOrder: n,
                tabIndex: r,
                node: i
            }));
            return s.sort(p).map(function(t) {
                return t.node
            }).concat(o)
        }

        function l(t) {
            return !(!r(t) || function(t) {
                return function(t) {
                    return s(t) && "radio" === t.type
                }(t) && ! function(t) {
                    if (!t.name) return !0;
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (t[e].checked) return t[e]
                    }(t.ownerDocument.querySelectorAll('input[type="radio"][name="' + t.name + '"]'));
                    return !e || e === t
                }(t)
            }(t) || d(t) < 0)
        }

        function r(t) {
            return !(t.disabled || function(t) {
                return s(t) && "hidden" === t.type
            }(t) || function(t) {
                return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility
            }(t))
        }
        i.isTabbable = function(t) {
            if (!t) throw new Error("No node provided");
            return !1 !== u.call(t, c) && l(t)
        }, i.isFocusable = function(t) {
            if (!t) throw new Error("No node provided");
            return !1 !== u.call(t, o) && r(t)
        };
        var o = n.concat("iframe").join(",");

        function d(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return isNaN(e) ? function(t) {
                return "true" === t.contentEditable
            }(t) ? 0 : t.tabIndex : e
        }

        function p(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        }

        function s(t) {
            return "INPUT" === t.tagName
        }
        t.exports = i
    }, function(t, e) {
        t.exports = function() {
            for (var t = {}, e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) r.call(n, i) && (t[i] = n[i])
            }
            return t
        };
        var r = Object.prototype.hasOwnProperty
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            },
            s = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, c = n(1),
            u = n(19),
            l = n(10),
            d = o(n(48)),
            p = n(20),
            _ = n(50),
            f = s(n(47)),
            h = p.MDCDismissibleDrawerFoundation.cssClasses,
            y = p.MDCDismissibleDrawerFoundation.strings,
            C = (a = c.MDCComponent, r(g, a), g.attachTo = function(t) {
                return new g(t)
            }, Object.defineProperty(g.prototype, "open", {
                get: function() {
                    return this.foundation_.isOpen()
                },
                set: function(t) {
                    t ? this.foundation_.open() : this.foundation_.close()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(g.prototype, "list", {
                get: function() {
                    return this.list_
                },
                enumerable: !0,
                configurable: !0
            }), g.prototype.initialize = function(t, e) {
                void 0 === t && (t = d.default), void 0 === e && (e = function(t) {
                    return new u.MDCList(t)
                });
                var n = this.root_.querySelector("." + l.MDCListFoundation.cssClasses.ROOT);
                n && (this.list_ = e(n), this.list_.wrapFocus = !0), this.focusTrapFactory_ = t
            }, g.prototype.initialSyncWithDOM = function() {
                var e = this,
                    t = h.MODAL,
                    n = y.SCRIM_SELECTOR;
                this.scrim_ = this.root_.parentNode.querySelector(n), this.scrim_ && this.root_.classList.contains(t) && (this.handleScrimClick_ = function() {
                    return e.foundation_.handleScrimClick()
                }, this.scrim_.addEventListener("click", this.handleScrimClick_), this.focusTrap_ = f.createFocusTrapInstance(this.root_, this.focusTrapFactory_)), this.handleKeydown_ = function(t) {
                    return e.foundation_.handleKeydown(t)
                }, this.handleTransitionEnd_ = function(t) {
                    return e.foundation_.handleTransitionEnd(t)
                }, this.listen("keydown", this.handleKeydown_), this.listen("transitionend", this.handleTransitionEnd_)
            }, g.prototype.destroy = function() {
                this.unlisten("keydown", this.handleKeydown_), this.unlisten("transitionend", this.handleTransitionEnd_), this.list_ && this.list_.destroy();
                var t = h.MODAL;
                this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(t) && (this.scrim_.removeEventListener("click", this.handleScrimClick_), this.open = !1)
            }, g.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        hasClass: function(t) {
                            return e.root_.classList.contains(t)
                        },
                        elementHasClass: function(t, e) {
                            return t.classList.contains(e)
                        },
                        saveFocus: function() {
                            return e.previousFocus_ = document.activeElement
                        },
                        restoreFocus: function() {
                            var t = e.previousFocus_;
                            t && t.focus && e.root_.contains(document.activeElement) && t.focus()
                        },
                        focusActiveNavigationItem: function() {
                            var t = e.root_.querySelector("." + l.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
                            t && t.focus()
                        },
                        notifyClose: function() {
                            return e.emit(y.CLOSE_EVENT, {}, !0)
                        },
                        notifyOpen: function() {
                            return e.emit(y.OPEN_EVENT, {}, !0)
                        },
                        trapFocus: function() {
                            return e.focusTrap_.activate()
                        },
                        releaseFocus: function() {
                            return e.focusTrap_.deactivate()
                        }
                    },
                    n = h.DISMISSIBLE,
                    i = h.MODAL;
                if (this.root_.classList.contains(n)) return new p.MDCDismissibleDrawerFoundation(t);
                if (this.root_.classList.contains(i)) return new _.MDCModalDrawerFoundation(t);
                throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + n + " and " + i + ".")
            }, g);

        function g() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.MDCDrawer = C
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(21)), i(e(51)), i(e(22))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(125)), i(e(53)), i(e(52))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(52),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "input", {
                get: function() {
                    return this.input_
                },
                set: function(t) {
                    this.input_ = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u.prototype, "label_", {
                get: function() {
                    var t = a.MDCFormFieldFoundation.strings.LABEL_SELECTOR;
                    return this.root_.querySelector(t)
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        activateInputRipple: function() {
                            n.input_ && n.input_.ripple && n.input_.ripple.activate()
                        },
                        deactivateInputRipple: function() {
                            n.input_ && n.input_.ripple && n.input_.ripple.deactivate()
                        },
                        deregisterInteractionHandler: function(t, e) {
                            n.label_ && n.label_.removeEventListener(t, e)
                        },
                        registerInteractionHandler: function(t, e) {
                            n.label_ && n.label_.addEventListener(t, e)
                        }
                    };
                return new a.MDCFormFieldFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCFormField = c
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(127)), i(e(55)), i(e(54))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(54),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, u.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        deregisterResizeHandler: function(t) {
                            return window.removeEventListener("resize", t)
                        },
                        getNumberOfTiles: function() {
                            return n.root_.querySelectorAll(a.MDCGridListFoundation.strings.TILE_SELECTOR).length
                        },
                        getOffsetWidth: function() {
                            return n.root_.offsetWidth
                        },
                        getOffsetWidthForTileAtIndex: function(t) {
                            return n.root_.querySelectorAll(a.MDCGridListFoundation.strings.TILE_SELECTOR)[t].offsetWidth
                        },
                        registerResizeHandler: function(t) {
                            return window.addEventListener("resize", t)
                        },
                        setStyleForTilesElement: function(t, e) {
                            n.root_.querySelector(a.MDCGridListFoundation.strings.TILES_SELECTOR).style[t] = e
                        }
                    };
                return new a.MDCGridListFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCGridList = c
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(129)), i(e(57)), i(e(56))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(3),
            c = n(56),
            u = c.MDCIconButtonToggleFoundation.strings,
            l = (o = s.MDCComponent, r(d, o), d.attachTo = function(t) {
                return new d(t)
            }, d.prototype.initialSyncWithDOM = function() {
                var t = this;
                this.handleClick_ = function() {
                    return t.foundation_.handleClick()
                }, this.listen("click", this.handleClick_)
            }, d.prototype.destroy = function() {
                this.unlisten("click", this.handleClick_), this.ripple_.destroy(), o.prototype.destroy.call(this)
            }, d.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        notifyChange: function(t) {
                            return n.emit(u.CHANGE_EVENT, t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        setAttr: function(t, e) {
                            return n.root_.setAttribute(t, e)
                        }
                    };
                return new c.MDCIconButtonToggleFoundation(t)
            }, Object.defineProperty(d.prototype, "ripple", {
                get: function() {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "on", {
                get: function() {
                    return this.foundation_.isOn()
                },
                set: function(t) {
                    this.foundation_.toggle(t)
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.createRipple_ = function() {
                var t = new a.MDCRipple(this.root_);
                return t.unbounded = !0, t
            }, d);

        function d() {
            var t = null !== o && o.apply(this, arguments) || this;
            return t.ripple_ = t.createRipple_(), t
        }
        e.MDCIconButtonToggle = l
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(23)), i(e(59)), i(e(58))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(132)), i(e(61)), i(e(60))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(60),
            c = (o = s.MDCComponent, r(u, o), u.attachTo = function(t) {
                return new u(t)
            }, Object.defineProperty(u.prototype, "determinate", {
                set: function(t) {
                    this.foundation_.setDeterminate(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u.prototype, "progress", {
                set: function(t) {
                    this.foundation_.setProgress(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u.prototype, "buffer", {
                set: function(t) {
                    this.foundation_.setBuffer(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(u.prototype, "reverse", {
                set: function(t) {
                    this.foundation_.setReverse(t)
                },
                enumerable: !0,
                configurable: !0
            }), u.prototype.open = function() {
                this.foundation_.open()
            }, u.prototype.close = function() {
                this.foundation_.close()
            }, u.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        forceLayout: function() {
                            return e.root_.offsetWidth
                        },
                        getBuffer: function() {
                            return e.root_.querySelector(a.MDCLinearProgressFoundation.strings.BUFFER_SELECTOR)
                        },
                        getPrimaryBar: function() {
                            return e.root_.querySelector(a.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR)
                        },
                        hasClass: function(t) {
                            return e.root_.classList.contains(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        setStyle: function(t, e, n) {
                            return t.style.setProperty(e, n)
                        }
                    };
                return new a.MDCLinearProgressFoundation(t)
            }, u);

        function u() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCLinearProgress = c
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(19)), i(e(9)), i(e(10))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(62));
        n.util = o, i(e(63)), i(e(6)), i(e(11))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(6);
        n.Corner = r.Corner, i(e(64)), i(e(12)), i(e(65))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(24)), i(e(25)), i(e(66))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(138)), i(e(68)), i(e(67))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(5),
            u = n(3),
            l = n(4),
            d = n(67),
            p = (s = a.MDCComponent, r(_, s), _.attachTo = function(t) {
                return new _(t)
            }, Object.defineProperty(_.prototype, "checked", {
                get: function() {
                    return this.nativeControl_.checked
                },
                set: function(t) {
                    this.nativeControl_.checked = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_.prototype, "disabled", {
                get: function() {
                    return this.nativeControl_.disabled
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_.prototype, "value", {
                get: function() {
                    return this.nativeControl_.value
                },
                set: function(t) {
                    this.nativeControl_.value = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(_.prototype, "ripple", {
                get: function() {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), _.prototype.destroy = function() {
                this.ripple_.destroy(), s.prototype.destroy.call(this)
            }, _.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        setNativeControlDisabled: function(t) {
                            return e.nativeControl_.disabled = t
                        }
                    };
                return new d.MDCRadioFoundation(t)
            }, _.prototype.createRipple_ = function() {
                var n = this,
                    t = o({}, u.MDCRipple.createAdapter(this), {
                        registerInteractionHandler: function(t, e) {
                            return n.nativeControl_.addEventListener(t, e, c.applyPassive())
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return n.nativeControl_.removeEventListener(t, e, c.applyPassive())
                        },
                        isSurfaceActive: function() {
                            return !1
                        },
                        isUnbounded: function() {
                            return !0
                        }
                    });
                return new u.MDCRipple(this.root_, new l.MDCRippleFoundation(t))
            }, Object.defineProperty(_.prototype, "nativeControl_", {
                get: function() {
                    var t = d.MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR,
                        e = this.root_.querySelector(t);
                    if (!e) throw new Error("Radio component requires a " + t + " element");
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), _);

        function _() {
            var t = null !== s && s.apply(this, arguments) || this;
            return t.ripple_ = t.createRipple_(), t
        }
        e.MDCRadio = p
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(16));
        n.util = o, i(e(3)), i(e(37)), i(e(4))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(141)), i(e(26)), i(e(69)), i(e(142)), i(e(143))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, c = n(1),
            d = n(21),
            p = n(23),
            u = s(n(6)),
            _ = n(64),
            l = s(n(12)),
            f = n(24),
            h = n(3),
            y = n(4),
            C = n(26),
            g = n(69),
            m = n(70),
            v = n(73),
            E = (a = c.MDCComponent, r(b, a), b.attachTo = function(t) {
                return new b(t)
            }, b.prototype.initialize = function(t, e, n, i, r, o) {
                if (void 0 === t && (t = function(t) {
                        return new d.MDCFloatingLabel(t)
                    }), void 0 === e && (e = function(t) {
                        return new p.MDCLineRipple(t)
                    }), void 0 === n && (n = function(t) {
                        return new f.MDCNotchedOutline(t)
                    }), void 0 === i && (i = function(t) {
                        return new _.MDCMenu(t)
                    }), void 0 === r && (r = function(t) {
                        return new v.MDCSelectIcon(t)
                    }), void 0 === o && (o = function(t) {
                        return new m.MDCSelectHelperText(t)
                    }), this.selectAnchor_ = this.root_.querySelector(C.strings.SELECT_ANCHOR_SELECTOR), this.selectedText_ = this.root_.querySelector(C.strings.SELECTED_TEXT_SELECTOR), !this.selectedText_) throw new Error("MDCSelect: Missing required element: The following selector must be present: '" + C.strings.SELECTED_TEXT_SELECTOR + "'");
                if (this.selectedText_.hasAttribute(C.strings.ARIA_CONTROLS)) {
                    var s = document.getElementById(this.selectedText_.getAttribute(C.strings.ARIA_CONTROLS));
                    s && (this.helperText_ = o(s))
                }
                this.menuSetup_(i);
                var a = this.root_.querySelector(C.strings.LABEL_SELECTOR);
                this.label_ = a ? t(a) : null;
                var c = this.root_.querySelector(C.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple_ = c ? e(c) : null;
                var u = this.root_.querySelector(C.strings.OUTLINE_SELECTOR);
                this.outline_ = u ? n(u) : null;
                var l = this.root_.querySelector(C.strings.LEADING_ICON_SELECTOR);
                l && (this.leadingIcon_ = r(l)), this.root_.classList.contains(C.cssClasses.OUTLINED) || (this.ripple_ = this.createRipple_())
            }, b.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.handleChange_ = function() {
                    return e.foundation_.handleChange()
                }, this.handleFocus_ = function() {
                    return e.foundation_.handleFocus()
                }, this.handleBlur_ = function() {
                    return e.foundation_.handleBlur()
                }, this.handleClick_ = function(t) {
                    e.selectedText_.focus(), e.foundation_.handleClick(e.getNormalizedXCoordinate_(t))
                }, this.handleKeydown_ = function(t) {
                    return e.foundation_.handleKeydown(t)
                }, this.handleMenuItemAction_ = function(t) {
                    return e.foundation_.handleMenuItemAction(t.detail.index)
                }, this.handleMenuOpened_ = function() {
                    return e.foundation_.handleMenuOpened()
                }, this.handleMenuClosed_ = function() {
                    return e.foundation_.handleMenuClosed()
                }, this.selectedText_.addEventListener("focus", this.handleFocus_), this.selectedText_.addEventListener("blur", this.handleBlur_), this.selectedText_.addEventListener("click", this.handleClick_), this.selectedText_.addEventListener("keydown", this.handleKeydown_), this.menu_.listen(u.strings.CLOSED_EVENT, this.handleMenuClosed_), this.menu_.listen(u.strings.OPENED_EVENT, this.handleMenuOpened_), this.menu_.listen(l.strings.SELECTED_EVENT, this.handleMenuItemAction_), this.foundation_.init(), this.disabled = this.root_.classList.contains(C.cssClasses.DISABLED)
            }, b.prototype.destroy = function() {
                this.selectedText_.removeEventListener("change", this.handleChange_), this.selectedText_.removeEventListener("focus", this.handleFocus_), this.selectedText_.removeEventListener("blur", this.handleBlur_), this.selectedText_.removeEventListener("keydown", this.handleKeydown_), this.selectedText_.removeEventListener("click", this.handleClick_), this.menu_.unlisten(u.strings.CLOSED_EVENT, this.handleMenuClosed_), this.menu_.unlisten(u.strings.OPENED_EVENT, this.handleMenuOpened_), this.menu_.unlisten(l.strings.SELECTED_EVENT, this.handleMenuItemAction_), this.menu_.destroy(), this.ripple_ && this.ripple_.destroy(), this.outline_ && this.outline_.destroy(), this.leadingIcon_ && this.leadingIcon_.destroy(), this.helperText_ && this.helperText_.destroy(), a.prototype.destroy.call(this)
            }, Object.defineProperty(b.prototype, "value", {
                get: function() {
                    return this.foundation_.getValue()
                },
                set: function(t) {
                    this.foundation_.setValue(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "selectedIndex", {
                get: function() {
                    return this.foundation_.getSelectedIndex()
                },
                set: function(t) {
                    this.foundation_.setSelectedIndex(t, !0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "disabled", {
                get: function() {
                    return this.foundation_.getDisabled()
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "leadingIconAriaLabel", {
                set: function(t) {
                    this.foundation_.setLeadingIconAriaLabel(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "leadingIconContent", {
                set: function(t) {
                    this.foundation_.setLeadingIconContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "helperTextContent", {
                set: function(t) {
                    this.foundation_.setHelperTextContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "valid", {
                get: function() {
                    return this.foundation_.isValid()
                },
                set: function(t) {
                    this.foundation_.setValid(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(b.prototype, "required", {
                get: function() {
                    return this.foundation_.getRequired()
                },
                set: function(t) {
                    this.foundation_.setRequired(t)
                },
                enumerable: !0,
                configurable: !0
            }), b.prototype.layout = function() {
                this.foundation_.layout()
            }, b.prototype.getDefaultFoundation = function() {
                var t = o({}, this.getSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());
                return new g.MDCSelectFoundation(t, this.getFoundationMap_())
            }, b.prototype.menuSetup_ = function(t) {
                this.menuElement_ = this.root_.querySelector(C.strings.MENU_SELECTOR), this.menu_ = t(this.menuElement_)
            }, b.prototype.createRipple_ = function() {
                var n = this,
                    t = o({}, h.MDCRipple.createAdapter({
                        root_: this.selectAnchor_
                    }), {
                        registerInteractionHandler: function(t, e) {
                            return n.selectedText_.addEventListener(t, e)
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return n.selectedText_.removeEventListener(t, e)
                        }
                    });
                return new h.MDCRipple(this.selectAnchor_, new y.MDCRippleFoundation(t))
            }, b.prototype.getSelectAdapterMethods_ = function() {
                var i = this;
                return {
                    getSelectedMenuItem: function() {
                        return i.menuElement_.querySelector(C.strings.SELECTED_ITEM_SELECTOR)
                    },
                    getMenuItemAttr: function(t, e) {
                        return t.getAttribute(e)
                    },
                    setSelectedText: function(t) {
                        return i.selectedText_.textContent = t
                    },
                    isSelectedTextFocused: function() {
                        return document.activeElement === i.selectedText_
                    },
                    getSelectedTextAttr: function(t) {
                        return i.selectedText_.getAttribute(t)
                    },
                    setSelectedTextAttr: function(t, e) {
                        return i.selectedText_.setAttribute(t, e)
                    },
                    openMenu: function() {
                        return i.menu_.open = !0
                    },
                    closeMenu: function() {
                        return i.menu_.open = !1
                    },
                    getAnchorElement: function() {
                        return i.root_.querySelector(C.strings.SELECT_ANCHOR_SELECTOR)
                    },
                    setMenuAnchorElement: function(t) {
                        return i.menu_.setAnchorElement(t)
                    },
                    setMenuAnchorCorner: function(t) {
                        return i.menu_.setAnchorCorner(t)
                    },
                    setMenuWrapFocus: function(t) {
                        return i.menu_.wrapFocus = t
                    },
                    setAttributeAtIndex: function(t, e, n) {
                        return i.menu_.items[t].setAttribute(e, n)
                    },
                    removeAttributeAtIndex: function(t, e) {
                        return i.menu_.items[t].removeAttribute(e)
                    },
                    focusMenuItemAtIndex: function(t) {
                        return i.menu_.items[t].focus()
                    },
                    getMenuItemCount: function() {
                        return i.menu_.items.length
                    },
                    getMenuItemValues: function() {
                        return i.menu_.items.map(function(t) {
                            return t.getAttribute(C.strings.VALUE_ATTR) || ""
                        })
                    },
                    getMenuItemTextAtIndex: function(t) {
                        return i.menu_.items[t].textContent
                    },
                    addClassAtIndex: function(t, e) {
                        return i.menu_.items[t].classList.add(e)
                    },
                    removeClassAtIndex: function(t, e) {
                        return i.menu_.items[t].classList.remove(e)
                    }
                }
            }, b.prototype.getCommonAdapterMethods_ = function() {
                var n = this;
                return {
                    addClass: function(t) {
                        return n.root_.classList.add(t)
                    },
                    removeClass: function(t) {
                        return n.root_.classList.remove(t)
                    },
                    hasClass: function(t) {
                        return n.root_.classList.contains(t)
                    },
                    setRippleCenter: function(t) {
                        return n.lineRipple_ && n.lineRipple_.setRippleCenter(t)
                    },
                    activateBottomLine: function() {
                        return n.lineRipple_ && n.lineRipple_.activate()
                    },
                    deactivateBottomLine: function() {
                        return n.lineRipple_ && n.lineRipple_.deactivate()
                    },
                    notifyChange: function(t) {
                        var e = n.selectedIndex;
                        n.emit(C.strings.CHANGE_EVENT, {
                            value: t,
                            index: e
                        }, !0)
                    }
                }
            }, b.prototype.getOutlineAdapterMethods_ = function() {
                var e = this;
                return {
                    hasOutline: function() {
                        return Boolean(e.outline_)
                    },
                    notchOutline: function(t) {
                        return e.outline_ && e.outline_.notch(t)
                    },
                    closeOutline: function() {
                        return e.outline_ && e.outline_.closeNotch()
                    }
                }
            }, b.prototype.getLabelAdapterMethods_ = function() {
                var e = this;
                return {
                    hasLabel: function() {
                        return !!e.label_
                    },
                    floatLabel: function(t) {
                        return e.label_ && e.label_.float(t)
                    },
                    getLabelWidth: function() {
                        return e.label_ ? e.label_.getWidth() : 0
                    }
                }
            }, b.prototype.getNormalizedXCoordinate_ = function(t) {
                var e = t.target.getBoundingClientRect();
                return (this.isTouchEvent_(t) ? t.touches[0].clientX : t.clientX) - e.left
            }, b.prototype.isTouchEvent_ = function(t) {
                return Boolean(t.touches)
            }, b.prototype.getFoundationMap_ = function() {
                return {
                    helperText: this.helperText_ ? this.helperText_.foundation : void 0,
                    leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : void 0
                }
            }, b);

        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.MDCSelect = E
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(70)), i(e(71));
        var r = e(72);
        n.helperTextCssClasses = r.cssClasses, n.helperTextStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(73)), i(e(74));
        var r = e(75);
        n.iconStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(145)), i(e(27)), i(e(76))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(5),
            c = n(27),
            u = n(76),
            l = (o = s.MDCComponent, r(d, o), d.attachTo = function(t) {
                return new d(t)
            }, Object.defineProperty(d.prototype, "value", {
                get: function() {
                    return this.foundation_.getValue()
                },
                set: function(t) {
                    this.foundation_.setValue(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "min", {
                get: function() {
                    return this.foundation_.getMin()
                },
                set: function(t) {
                    this.foundation_.setMin(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "max", {
                get: function() {
                    return this.foundation_.getMax()
                },
                set: function(t) {
                    this.foundation_.setMax(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "step", {
                get: function() {
                    return this.foundation_.getStep()
                },
                set: function(t) {
                    this.foundation_.setStep(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(d.prototype, "disabled", {
                get: function() {
                    return this.foundation_.isDisabled()
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), d.prototype.initialize = function() {
                this.thumbContainer_ = this.root_.querySelector(c.strings.THUMB_CONTAINER_SELECTOR), this.track_ = this.root_.querySelector(c.strings.TRACK_SELECTOR), this.pinValueMarker_ = this.root_.querySelector(c.strings.PIN_VALUE_MARKER_SELECTOR), this.trackMarkerContainer_ = this.root_.querySelector(c.strings.TRACK_MARKER_CONTAINER_SELECTOR)
            }, d.prototype.getDefaultFoundation = function() {
                var o = this,
                    t = {
                        hasClass: function(t) {
                            return o.root_.classList.contains(t)
                        },
                        addClass: function(t) {
                            return o.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return o.root_.classList.remove(t)
                        },
                        getAttribute: function(t) {
                            return o.root_.getAttribute(t)
                        },
                        setAttribute: function(t, e) {
                            return o.root_.setAttribute(t, e)
                        },
                        removeAttribute: function(t) {
                            return o.root_.removeAttribute(t)
                        },
                        computeBoundingRect: function() {
                            return o.root_.getBoundingClientRect()
                        },
                        getTabIndex: function() {
                            return o.root_.tabIndex
                        },
                        registerInteractionHandler: function(t, e) {
                            return o.listen(t, e, a.applyPassive())
                        },
                        deregisterInteractionHandler: function(t, e) {
                            return o.unlisten(t, e, a.applyPassive())
                        },
                        registerThumbContainerInteractionHandler: function(t, e) {
                            o.thumbContainer_.addEventListener(t, e, a.applyPassive())
                        },
                        deregisterThumbContainerInteractionHandler: function(t, e) {
                            o.thumbContainer_.removeEventListener(t, e, a.applyPassive())
                        },
                        registerBodyInteractionHandler: function(t, e) {
                            return document.body.addEventListener(t, e)
                        },
                        deregisterBodyInteractionHandler: function(t, e) {
                            return document.body.removeEventListener(t, e)
                        },
                        registerResizeHandler: function(t) {
                            return window.addEventListener("resize", t)
                        },
                        deregisterResizeHandler: function(t) {
                            return window.removeEventListener("resize", t)
                        },
                        notifyInput: function() {
                            return o.emit(c.strings.INPUT_EVENT, o)
                        },
                        notifyChange: function() {
                            return o.emit(c.strings.CHANGE_EVENT, o)
                        },
                        setThumbContainerStyleProperty: function(t, e) {
                            o.thumbContainer_.style.setProperty(t, e)
                        },
                        setTrackStyleProperty: function(t, e) {
                            return o.track_.style.setProperty(t, e)
                        },
                        setMarkerValue: function(t) {
                            return o.pinValueMarker_.innerText = t.toLocaleString()
                        },
                        setTrackMarkers: function(t, e, n) {
                            var i = t.toLocaleString(),
                                r = "linear-gradient(to right, currentColor 2px, transparent 0) 0 center / calc((100% - 2px) / ((" + e.toLocaleString() + " - " + n.toLocaleString() + ") / " + i + ")) 100% repeat-x";
                            o.trackMarkerContainer_.style.setProperty("background", r)
                        },
                        isRTL: function() {
                            return "rtl" === getComputedStyle(o.root_).direction
                        }
                    };
                return new u.MDCSliderFoundation(t)
            }, d.prototype.initialSyncWithDOM = function() {
                var t = this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUENOW), this.value),
                    e = this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUEMIN), this.min),
                    n = this.parseFloat_(this.root_.getAttribute(c.strings.ARIA_VALUEMAX), this.max);
                e >= this.max ? (this.max = n, this.min = e) : (this.min = e, this.max = n), this.step = this.parseFloat_(this.root_.getAttribute(c.strings.STEP_DATA_ATTR), this.step), this.value = t, this.disabled = this.root_.hasAttribute(c.strings.ARIA_DISABLED) && "false" !== this.root_.getAttribute(c.strings.ARIA_DISABLED), this.foundation_.setupTrackMarker()
            }, d.prototype.layout = function() {
                this.foundation_.layout()
            }, d.prototype.stepUp = function(t) {
                void 0 === t && (t = this.step || 1), this.value += t
            }, d.prototype.stepDown = function(t) {
                void 0 === t && (t = this.step || 1), this.value -= t
            }, d.prototype.parseFloat_ = function(t, e) {
                var n = parseFloat(t);
                return "number" == typeof n && isFinite(n) ? n : e
            }, d);

        function d() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCSlider = l
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(77));
        n.util = o, i(e(147)), i(e(13)), i(e(78))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s, a = n(1),
            c = n(2),
            u = n(13),
            l = n(78),
            d = o(n(77)),
            p = u.strings.SURFACE_SELECTOR,
            _ = u.strings.LABEL_SELECTOR,
            f = u.strings.ACTION_SELECTOR,
            h = u.strings.DISMISS_SELECTOR,
            y = u.strings.OPENING_EVENT,
            C = u.strings.OPENED_EVENT,
            g = u.strings.CLOSING_EVENT,
            m = u.strings.CLOSED_EVENT,
            v = (s = a.MDCComponent, r(E, s), E.attachTo = function(t) {
                return new E(t)
            }, E.prototype.initialize = function(t) {
                void 0 === t && (t = function() {
                    return d.announce
                }), this.announce_ = t()
            }, E.prototype.initialSyncWithDOM = function() {
                var n = this;
                this.surfaceEl_ = this.root_.querySelector(p), this.labelEl_ = this.root_.querySelector(_), this.actionEl_ = this.root_.querySelector(f), this.handleKeyDown_ = function(t) {
                    return n.foundation_.handleKeyDown(t)
                }, this.handleSurfaceClick_ = function(t) {
                    var e = t.target;
                    n.isActionButton_(e) ? n.foundation_.handleActionButtonClick(t) : n.isActionIcon_(e) && n.foundation_.handleActionIconClick(t)
                }, this.registerKeyDownHandler_(this.handleKeyDown_), this.registerSurfaceClickHandler_(this.handleSurfaceClick_)
            }, E.prototype.destroy = function() {
                s.prototype.destroy.call(this), this.deregisterKeyDownHandler_(this.handleKeyDown_), this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)
            }, E.prototype.open = function() {
                this.foundation_.open()
            }, E.prototype.close = function(t) {
                void 0 === t && (t = ""), this.foundation_.close(t)
            }, E.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        announce: function() {
                            return e.announce_(e.labelEl_)
                        },
                        notifyClosed: function(t) {
                            return e.emit(m, t ? {
                                reason: t
                            } : {})
                        },
                        notifyClosing: function(t) {
                            return e.emit(g, t ? {
                                reason: t
                            } : {})
                        },
                        notifyOpened: function() {
                            return e.emit(C, {})
                        },
                        notifyOpening: function() {
                            return e.emit(y, {})
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        }
                    };
                return new l.MDCSnackbarFoundation(t)
            }, Object.defineProperty(E.prototype, "timeoutMs", {
                get: function() {
                    return this.foundation_.getTimeoutMs()
                },
                set: function(t) {
                    this.foundation_.setTimeoutMs(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(E.prototype, "closeOnEscape", {
                get: function() {
                    return this.foundation_.getCloseOnEscape()
                },
                set: function(t) {
                    this.foundation_.setCloseOnEscape(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(E.prototype, "isOpen", {
                get: function() {
                    return this.foundation_.isOpen()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(E.prototype, "labelText", {
                get: function() {
                    return this.labelEl_.textContent
                },
                set: function(t) {
                    this.labelEl_.textContent = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(E.prototype, "actionButtonText", {
                get: function() {
                    return this.actionEl_.textContent
                },
                set: function(t) {
                    this.actionEl_.textContent = t
                },
                enumerable: !0,
                configurable: !0
            }), E.prototype.registerKeyDownHandler_ = function(t) {
                this.listen("keydown", t)
            }, E.prototype.deregisterKeyDownHandler_ = function(t) {
                this.unlisten("keydown", t)
            }, E.prototype.registerSurfaceClickHandler_ = function(t) {
                this.surfaceEl_.addEventListener("click", t)
            }, E.prototype.deregisterSurfaceClickHandler_ = function(t) {
                this.surfaceEl_.removeEventListener("click", t)
            }, E.prototype.isActionButton_ = function(t) {
                return Boolean(c.closest(t, f))
            }, E.prototype.isActionIcon_ = function(t) {
                return Boolean(c.closest(t, h))
            }, E);

        function E() {
            return null !== s && s.apply(this, arguments) || this
        }
        e.MDCSnackbar = v
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(149)), i(e(80)), i(e(79))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var i, r, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || 0 < e--) && !(i = o.next()).done;) s.push(i.value)
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return s
            },
            a = this && this.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c, u = n(1),
            l = n(5),
            d = n(2),
            p = n(3),
            _ = n(4),
            f = n(79),
            h = (c = u.MDCComponent, r(y, c), y.attachTo = function(t) {
                return new y(t)
            }, y.prototype.destroy = function() {
                c.prototype.destroy.call(this), this.ripple_.destroy(), this.nativeControl_.removeEventListener("change", this.changeHandler_)
            }, y.prototype.initialSyncWithDOM = function() {
                var i = this;
                this.changeHandler_ = function() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return (t = i.foundation_).handleChange.apply(t, a(e))
                }, this.nativeControl_.addEventListener("change", this.changeHandler_), this.checked = this.checked
            }, y.prototype.getDefaultFoundation = function() {
                var e = this,
                    t = {
                        addClass: function(t) {
                            return e.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return e.root_.classList.remove(t)
                        },
                        setNativeControlChecked: function(t) {
                            return e.nativeControl_.checked = t
                        },
                        setNativeControlDisabled: function(t) {
                            return e.nativeControl_.disabled = t
                        }
                    };
                return new f.MDCSwitchFoundation(t)
            }, Object.defineProperty(y.prototype, "ripple", {
                get: function() {
                    return this.ripple_
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "checked", {
                get: function() {
                    return this.nativeControl_.checked
                },
                set: function(t) {
                    this.foundation_.setChecked(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(y.prototype, "disabled", {
                get: function() {
                    return this.nativeControl_.disabled
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), y.prototype.createRipple_ = function() {
                var n = this,
                    t = f.MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,
                    i = this.root_.querySelector(t),
                    e = o({}, p.MDCRipple.createAdapter(this), {
                        addClass: function(t) {
                            return i.classList.add(t)
                        },
                        computeBoundingRect: function() {
                            return i.getBoundingClientRect()
                        },
                        deregisterInteractionHandler: function(t, e) {
                            n.nativeControl_.removeEventListener(t, e, l.applyPassive())
                        },
                        isSurfaceActive: function() {
                            return d.matches(n.nativeControl_, ":active")
                        },
                        isUnbounded: function() {
                            return !0
                        },
                        registerInteractionHandler: function(t, e) {
                            n.nativeControl_.addEventListener(t, e, l.applyPassive())
                        },
                        removeClass: function(t) {
                            return i.classList.remove(t)
                        },
                        updateCssVariable: function(t, e) {
                            i.style.setProperty(t, e)
                        }
                    });
                return new p.MDCRipple(this.root_, new _.MDCRippleFoundation(e))
            }, Object.defineProperty(y.prototype, "nativeControl_", {
                get: function() {
                    var t = f.MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;
                    return this.root_.querySelector(t)
                },
                enumerable: !0,
                configurable: !0
            }), y);

        function y() {
            var t = null !== c && c.apply(this, arguments) || this;
            return t.ripple_ = t.createRipple_(), t
        }
        e.MDCSwitch = h
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(151)), i(e(91)), i(e(90))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(81),
            c = n(84),
            u = n(30),
            l = n(90),
            d = l.MDCTabBarFoundation.strings,
            p = 0,
            _ = (o = s.MDCComponent, r(f, o), f.attachTo = function(t) {
                return new f(t)
            }, Object.defineProperty(f.prototype, "focusOnActivate", {
                set: function(e) {
                    this.tabList_.forEach(function(t) {
                        return t.focusOnActivate = e
                    })
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "useAutomaticActivation", {
                set: function(t) {
                    this.foundation_.setUseAutomaticActivation(t)
                },
                enumerable: !0,
                configurable: !0
            }), f.prototype.initialize = function(t, e) {
                void 0 === t && (t = function(t) {
                    return new c.MDCTab(t)
                }), void 0 === e && (e = function(t) {
                    return new a.MDCTabScroller(t)
                }), this.tabList_ = this.instantiateTabs_(t), this.tabScroller_ = this.instantiateTabScroller_(e)
            }, f.prototype.initialSyncWithDOM = function() {
                var e = this;
                this.handleTabInteraction_ = function(t) {
                    return e.foundation_.handleTabInteraction(t)
                }, this.handleKeyDown_ = function(t) {
                    return e.foundation_.handleKeyDown(t)
                }, this.listen(u.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_), this.listen("keydown", this.handleKeyDown_);
                for (var t = 0; t < this.tabList_.length; t++)
                    if (this.tabList_[t].active) {
                        this.scrollIntoView(t);
                        break
                    }
            }, f.prototype.destroy = function() {
                o.prototype.destroy.call(this), this.unlisten(u.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_), this.unlisten("keydown", this.handleKeyDown_), this.tabList_.forEach(function(t) {
                    return t.destroy()
                }), this.tabScroller_ && this.tabScroller_.destroy()
            }, f.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        scrollTo: function(t) {
                            return n.tabScroller_.scrollTo(t)
                        },
                        incrementScroll: function(t) {
                            return n.tabScroller_.incrementScroll(t)
                        },
                        getScrollPosition: function() {
                            return n.tabScroller_.getScrollPosition()
                        },
                        getScrollContentWidth: function() {
                            return n.tabScroller_.getScrollContentWidth()
                        },
                        getOffsetWidth: function() {
                            return n.root_.offsetWidth
                        },
                        isRTL: function() {
                            return "rtl" === window.getComputedStyle(n.root_).getPropertyValue("direction")
                        },
                        setActiveTab: function(t) {
                            return n.foundation_.activateTab(t)
                        },
                        activateTabAtIndex: function(t, e) {
                            return n.tabList_[t].activate(e)
                        },
                        deactivateTabAtIndex: function(t) {
                            return n.tabList_[t].deactivate()
                        },
                        focusTabAtIndex: function(t) {
                            return n.tabList_[t].focus()
                        },
                        getTabIndicatorClientRectAtIndex: function(t) {
                            return n.tabList_[t].computeIndicatorClientRect()
                        },
                        getTabDimensionsAtIndex: function(t) {
                            return n.tabList_[t].computeDimensions()
                        },
                        getPreviousActiveTabIndex: function() {
                            for (var t = 0; t < n.tabList_.length; t++)
                                if (n.tabList_[t].active) return t;
                            return -1
                        },
                        getFocusedTabIndex: function() {
                            var t = n.getTabElements_(),
                                e = document.activeElement;
                            return t.indexOf(e)
                        },
                        getIndexOfTabById: function(t) {
                            for (var e = 0; e < n.tabList_.length; e++)
                                if (n.tabList_[e].id === t) return e;
                            return -1
                        },
                        getTabListLength: function() {
                            return n.tabList_.length
                        },
                        notifyTabActivated: function(t) {
                            return n.emit(d.TAB_ACTIVATED_EVENT, {
                                index: t
                            }, !0)
                        }
                    };
                return new l.MDCTabBarFoundation(t)
            }, f.prototype.activateTab = function(t) {
                this.foundation_.activateTab(t)
            }, f.prototype.scrollIntoView = function(t) {
                this.foundation_.scrollIntoView(t)
            }, f.prototype.getTabElements_ = function() {
                return [].slice.call(this.root_.querySelectorAll(d.TAB_SELECTOR))
            }, f.prototype.instantiateTabs_ = function(e) {
                return this.getTabElements_().map(function(t) {
                    return t.id = t.id || "mdc-tab-" + ++p, e(t)
                })
            }, f.prototype.instantiateTabScroller_ = function(t) {
                var e = this.root_.querySelector(d.TAB_SCROLLER_SELECTOR);
                return e ? t(e) : null
            }, f);

        function f() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTabBar = _
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(29),
            a = (o = s.MDCTabScrollerRTL, r(c, o), c.prototype.getScrollPositionRTL = function() {
                var t = this.adapter_.getScrollAreaScrollLeft(),
                    e = this.calculateScrollEdges_().right;
                return Math.round(e - t)
            }, c.prototype.scrollToRTL = function(t) {
                var e = this.calculateScrollEdges_(),
                    n = this.adapter_.getScrollAreaScrollLeft(),
                    i = this.clampScrollValue_(e.right - t);
                return {
                    finalScrollPosition: i,
                    scrollDelta: i - n
                }
            }, c.prototype.incrementScrollRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft(),
                    n = this.clampScrollValue_(e - t);
                return {
                    finalScrollPosition: n,
                    scrollDelta: n - e
                }
            }, c.prototype.getAnimatingScrollPosition = function(t) {
                return t
            }, c.prototype.calculateScrollEdges_ = function() {
                return {
                    left: 0,
                    right: this.adapter_.getScrollContentOffsetWidth() - this.adapter_.getScrollAreaOffsetWidth()
                }
            }, c.prototype.clampScrollValue_ = function(t) {
                var e = this.calculateScrollEdges_();
                return Math.min(Math.max(e.left, t), e.right)
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTabScrollerRTLDefault = a, e.default = a
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(29),
            a = (o = s.MDCTabScrollerRTL, r(c, o), c.prototype.getScrollPositionRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft();
                return Math.round(t - e)
            }, c.prototype.scrollToRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft(),
                    n = this.clampScrollValue_(-t);
                return {
                    finalScrollPosition: n,
                    scrollDelta: n - e
                }
            }, c.prototype.incrementScrollRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft(),
                    n = this.clampScrollValue_(e - t);
                return {
                    finalScrollPosition: n,
                    scrollDelta: n - e
                }
            }, c.prototype.getAnimatingScrollPosition = function(t, e) {
                return t - e
            }, c.prototype.calculateScrollEdges_ = function() {
                var t = this.adapter_.getScrollContentOffsetWidth();
                return {
                    left: this.adapter_.getScrollAreaOffsetWidth() - t,
                    right: 0
                }
            }, c.prototype.clampScrollValue_ = function(t) {
                var e = this.calculateScrollEdges_();
                return Math.max(Math.min(e.right, t), e.left)
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTabScrollerRTLNegative = a, e.default = a
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(29),
            a = (o = s.MDCTabScrollerRTL, r(c, o), c.prototype.getScrollPositionRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft();
                return Math.round(e - t)
            }, c.prototype.scrollToRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft(),
                    n = this.clampScrollValue_(t);
                return {
                    finalScrollPosition: n,
                    scrollDelta: e - n
                }
            }, c.prototype.incrementScrollRTL = function(t) {
                var e = this.adapter_.getScrollAreaScrollLeft(),
                    n = this.clampScrollValue_(e + t);
                return {
                    finalScrollPosition: n,
                    scrollDelta: e - n
                }
            }, c.prototype.getAnimatingScrollPosition = function(t, e) {
                return t + e
            }, c.prototype.calculateScrollEdges_ = function() {
                return {
                    left: this.adapter_.getScrollContentOffsetWidth() - this.adapter_.getScrollAreaOffsetWidth(),
                    right: 0
                }
            }, c.prototype.clampScrollValue_ = function(t) {
                var e = this.calculateScrollEdges_();
                return Math.min(Math.max(e.right, t), e.left)
            }, c);

        function c() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTabScrollerRTLReverse = a, e.default = a
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(85)), i(e(87)), i(e(14)), i(e(86)), i(e(88))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        var r = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = r(e(83));
        n.util = o, i(e(81)), i(e(28)), i(e(82))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(84)), i(e(89)), i(e(30))
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(159)), i(e(32)), i(e(94)), i(e(160)), i(e(161)), i(e(162))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__assign || function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            },
            s = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a, c = n(1),
            u = n(5),
            l = s(n(2)),
            C = n(21),
            g = n(23),
            m = n(24),
            v = n(3),
            d = n(4),
            E = n(92),
            b = n(31),
            T = n(32),
            p = n(94),
            O = n(95),
            A = n(33),
            I = n(97),
            _ = (a = c.MDCComponent, r(f, a), f.attachTo = function(t) {
                return new f(t)
            }, f.prototype.initialize = function(t, e, n, i, r, o, s) {
                void 0 === t && (t = function(t, e) {
                    return new v.MDCRipple(t, e)
                }), void 0 === e && (e = function(t) {
                    return new g.MDCLineRipple(t)
                }), void 0 === n && (n = function(t) {
                    return new O.MDCTextFieldHelperText(t)
                }), void 0 === i && (i = function(t) {
                    return new E.MDCTextFieldCharacterCounter(t)
                }), void 0 === r && (r = function(t) {
                    return new I.MDCTextFieldIcon(t)
                }), void 0 === o && (o = function(t) {
                    return new C.MDCFloatingLabel(t)
                }), void 0 === s && (s = function(t) {
                    return new m.MDCNotchedOutline(t)
                }), this.input_ = this.root_.querySelector(T.strings.INPUT_SELECTOR);
                var a = this.root_.querySelector(T.strings.LABEL_SELECTOR);
                this.label_ = a ? o(a) : null;
                var c = this.root_.querySelector(T.strings.LINE_RIPPLE_SELECTOR);
                this.lineRipple_ = c ? e(c) : null;
                var u = this.root_.querySelector(T.strings.OUTLINE_SELECTOR);
                this.outline_ = u ? s(u) : null;
                var l = A.MDCTextFieldHelperTextFoundation.strings,
                    d = this.root_.nextElementSibling,
                    p = d && d.classList.contains(T.cssClasses.HELPER_LINE),
                    _ = p && d && d.querySelector(l.ROOT_SELECTOR);
                this.helperText_ = _ ? n(_) : null;
                var f = b.MDCTextFieldCharacterCounterFoundation.strings,
                    h = this.root_.querySelector(f.ROOT_SELECTOR);
                !h && p && d && (h = d.querySelector(f.ROOT_SELECTOR)), this.characterCounter_ = h ? i(h) : null, this.leadingIcon_ = null, this.trailingIcon_ = null;
                var y = this.root_.querySelectorAll(T.strings.ICON_SELECTOR);
                0 < y.length && (1 < y.length ? (this.leadingIcon_ = r(y[0]), this.trailingIcon_ = r(y[1])) : this.root_.classList.contains(T.cssClasses.WITH_LEADING_ICON) ? this.leadingIcon_ = r(y[0]) : this.trailingIcon_ = r(y[0])), this.ripple = this.createRipple_(t)
            }, f.prototype.destroy = function() {
                this.ripple && this.ripple.destroy(), this.lineRipple_ && this.lineRipple_.destroy(), this.helperText_ && this.helperText_.destroy(), this.characterCounter_ && this.characterCounter_.destroy(), this.leadingIcon_ && this.leadingIcon_.destroy(), this.trailingIcon_ && this.trailingIcon_.destroy(), this.label_ && this.label_.destroy(), this.outline_ && this.outline_.destroy(), a.prototype.destroy.call(this)
            }, f.prototype.initialSyncWithDOM = function() {
                this.disabled = this.input_.disabled
            }, Object.defineProperty(f.prototype, "value", {
                get: function() {
                    return this.foundation_.getValue()
                },
                set: function(t) {
                    this.foundation_.setValue(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "disabled", {
                get: function() {
                    return this.foundation_.isDisabled()
                },
                set: function(t) {
                    this.foundation_.setDisabled(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "valid", {
                get: function() {
                    return this.foundation_.isValid()
                },
                set: function(t) {
                    this.foundation_.setValid(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "required", {
                get: function() {
                    return this.input_.required
                },
                set: function(t) {
                    this.input_.required = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "pattern", {
                get: function() {
                    return this.input_.pattern
                },
                set: function(t) {
                    this.input_.pattern = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "minLength", {
                get: function() {
                    return this.input_.minLength
                },
                set: function(t) {
                    this.input_.minLength = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "maxLength", {
                get: function() {
                    return this.input_.maxLength
                },
                set: function(t) {
                    t < 0 ? this.input_.removeAttribute("maxLength") : this.input_.maxLength = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "min", {
                get: function() {
                    return this.input_.min
                },
                set: function(t) {
                    this.input_.min = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "max", {
                get: function() {
                    return this.input_.max
                },
                set: function(t) {
                    this.input_.max = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "step", {
                get: function() {
                    return this.input_.step
                },
                set: function(t) {
                    this.input_.step = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "helperTextContent", {
                set: function(t) {
                    this.foundation_.setHelperTextContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "leadingIconAriaLabel", {
                set: function(t) {
                    this.foundation_.setLeadingIconAriaLabel(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "leadingIconContent", {
                set: function(t) {
                    this.foundation_.setLeadingIconContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "trailingIconAriaLabel", {
                set: function(t) {
                    this.foundation_.setTrailingIconAriaLabel(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "trailingIconContent", {
                set: function(t) {
                    this.foundation_.setTrailingIconContent(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(f.prototype, "useNativeValidation", {
                set: function(t) {
                    this.foundation_.setUseNativeValidation(t)
                },
                enumerable: !0,
                configurable: !0
            }), f.prototype.focus = function() {
                this.input_.focus()
            }, f.prototype.layout = function() {
                var t = this.foundation_.shouldFloat;
                this.foundation_.notchOutline(t)
            }, f.prototype.getDefaultFoundation = function() {
                var t = o({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
                return new p.MDCTextFieldFoundation(t, this.getFoundationMap_())
            }, f.prototype.getRootAdapterMethods_ = function() {
                var n = this;
                return {
                    addClass: function(t) {
                        return n.root_.classList.add(t)
                    },
                    removeClass: function(t) {
                        return n.root_.classList.remove(t)
                    },
                    hasClass: function(t) {
                        return n.root_.classList.contains(t)
                    },
                    registerTextFieldInteractionHandler: function(t, e) {
                        return n.listen(t, e)
                    },
                    deregisterTextFieldInteractionHandler: function(t, e) {
                        return n.unlisten(t, e)
                    },
                    registerValidationAttributeChangeHandler: function(e) {
                        var t = new MutationObserver(function(t) {
                            return e(function(t) {
                                return t.map(function(t) {
                                    return t.attributeName
                                }).filter(function(t) {
                                    return t
                                })
                            }(t))
                        });
                        return t.observe(n.input_, {
                            attributes: !0
                        }), t
                    },
                    deregisterValidationAttributeChangeHandler: function(t) {
                        return t.disconnect()
                    }
                }
            }, f.prototype.getInputAdapterMethods_ = function() {
                var n = this;
                return {
                    getNativeInput: function() {
                        return n.input_
                    },
                    isFocused: function() {
                        return document.activeElement === n.input_
                    },
                    registerInputInteractionHandler: function(t, e) {
                        return n.input_.addEventListener(t, e, u.applyPassive())
                    },
                    deregisterInputInteractionHandler: function(t, e) {
                        return n.input_.removeEventListener(t, e, u.applyPassive())
                    }
                }
            }, f.prototype.getLabelAdapterMethods_ = function() {
                var e = this;
                return {
                    floatLabel: function(t) {
                        return e.label_ && e.label_.float(t)
                    },
                    getLabelWidth: function() {
                        return e.label_ ? e.label_.getWidth() : 0
                    },
                    hasLabel: function() {
                        return Boolean(e.label_)
                    },
                    shakeLabel: function(t) {
                        return e.label_ && e.label_.shake(t)
                    }
                }
            }, f.prototype.getLineRippleAdapterMethods_ = function() {
                var e = this;
                return {
                    activateLineRipple: function() {
                        e.lineRipple_ && e.lineRipple_.activate()
                    },
                    deactivateLineRipple: function() {
                        e.lineRipple_ && e.lineRipple_.deactivate()
                    },
                    setLineRippleTransformOrigin: function(t) {
                        e.lineRipple_ && e.lineRipple_.setRippleCenter(t)
                    }
                }
            }, f.prototype.getOutlineAdapterMethods_ = function() {
                var e = this;
                return {
                    closeOutline: function() {
                        return e.outline_ && e.outline_.closeNotch()
                    },
                    hasOutline: function() {
                        return Boolean(e.outline_)
                    },
                    notchOutline: function(t) {
                        return e.outline_ && e.outline_.notch(t)
                    }
                }
            }, f.prototype.getFoundationMap_ = function() {
                return {
                    characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : void 0,
                    helperText: this.helperText_ ? this.helperText_.foundation : void 0,
                    leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : void 0,
                    trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : void 0
                }
            }, f.prototype.createRipple_ = function(t) {
                var n = this,
                    e = this.root_.classList.contains(T.cssClasses.TEXTAREA),
                    i = this.root_.classList.contains(T.cssClasses.OUTLINED);
                if (e || i) return null;
                var r = o({}, v.MDCRipple.createAdapter(this), {
                    isSurfaceActive: function() {
                        return l.matches(n.input_, ":active")
                    },
                    registerInteractionHandler: function(t, e) {
                        return n.input_.addEventListener(t, e, u.applyPassive())
                    },
                    deregisterInteractionHandler: function(t, e) {
                        return n.input_.removeEventListener(t, e, u.applyPassive())
                    }
                });
                return t(this.root_, new d.MDCRippleFoundation(r))
            }, f);

        function f() {
            return null !== a && a.apply(this, arguments) || this
        }
        e.MDCTextField = _
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(92)), i(e(31));
        var r = e(93);
        n.characterCountCssClasses = r.cssClasses, n.characterCountStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(95)), i(e(33));
        var r = e(96);
        n.helperTextCssClasses = r.cssClasses, n.helperTextStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(97)), i(e(98));
        var r = e(99);
        n.iconCssClasses = r.cssClasses, n.iconStrings = r.strings
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), i(e(164)), i(e(7)), i(e(35)), i(e(100)), i(e(101)), i(e(34))
    }, function(t, e, n) {
        "use strict";
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, s = n(1),
            a = n(3),
            c = n(7),
            u = n(100),
            l = n(101),
            d = n(34),
            p = (o = s.MDCComponent, r(_, o), _.attachTo = function(t) {
                return new _(t)
            }, _.prototype.initialize = function(n) {
                void 0 === n && (n = function(t) {
                    return a.MDCRipple.attachTo(t)
                }), this.navIcon_ = this.root_.querySelector(c.strings.NAVIGATION_ICON_SELECTOR);
                var t = [].slice.call(this.root_.querySelectorAll(c.strings.ACTION_ITEM_SELECTOR));
                this.navIcon_ && t.push(this.navIcon_), this.iconRipples_ = t.map(function(t) {
                    var e = n(t);
                    return e.unbounded = !0, e
                }), this.scrollTarget_ = window
            }, _.prototype.initialSyncWithDOM = function() {
                this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_), this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_), this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.addEventListener("click", this.handleNavigationClick_);
                var t = this.root_.classList.contains(c.cssClasses.FIXED_CLASS);
                this.root_.classList.contains(c.cssClasses.SHORT_CLASS) || t || window.addEventListener("resize", this.handleWindowResize_)
            }, _.prototype.destroy = function() {
                this.iconRipples_.forEach(function(t) {
                    return t.destroy()
                }), this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.navIcon_ && this.navIcon_.removeEventListener("click", this.handleNavigationClick_);
                var t = this.root_.classList.contains(c.cssClasses.FIXED_CLASS);
                this.root_.classList.contains(c.cssClasses.SHORT_CLASS) || t || window.removeEventListener("resize", this.handleWindowResize_), o.prototype.destroy.call(this)
            }, _.prototype.setScrollTarget = function(t) {
                this.scrollTarget_.removeEventListener("scroll", this.handleTargetScroll_), this.scrollTarget_ = t, this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_), this.scrollTarget_.addEventListener("scroll", this.handleTargetScroll_)
            }, _.prototype.getDefaultFoundation = function() {
                var n = this,
                    t = {
                        hasClass: function(t) {
                            return n.root_.classList.contains(t)
                        },
                        addClass: function(t) {
                            return n.root_.classList.add(t)
                        },
                        removeClass: function(t) {
                            return n.root_.classList.remove(t)
                        },
                        setStyle: function(t, e) {
                            return n.root_.style.setProperty(t, e)
                        },
                        getTopAppBarHeight: function() {
                            return n.root_.clientHeight
                        },
                        notifyNavigationIconClicked: function() {
                            return n.emit(c.strings.NAVIGATION_EVENT, {})
                        },
                        getViewportScrollY: function() {
                            var t = n.scrollTarget_,
                                e = n.scrollTarget_;
                            return void 0 !== t.pageYOffset ? t.pageYOffset : e.scrollTop
                        },
                        getTotalActionItems: function() {
                            return n.root_.querySelectorAll(c.strings.ACTION_ITEM_SELECTOR).length
                        }
                    };
                return this.root_.classList.contains(c.cssClasses.SHORT_CLASS) ? new l.MDCShortTopAppBarFoundation(t) : this.root_.classList.contains(c.cssClasses.FIXED_CLASS) ? new u.MDCFixedTopAppBarFoundation(t) : new d.MDCTopAppBarFoundation(t)
            }, _);

        function _() {
            return null !== o && o.apply(this, arguments) || this
        }
        e.MDCTopAppBar = p
    }], r.c = i, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) r.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 102);

    function r(t) {
        if (i[t]) return i[t].exports;
        var e = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    var n, i
});