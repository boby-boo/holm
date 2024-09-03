!function(){"use strict";var __webpack_modules__={"./src/assets/scripts/home/animation.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/home/animation.js ***!
  \**********************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _modules_effects_splitLinesAndFadeUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/effects/splitLinesAndFadeUp */ \"./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js\");\n/* harmony import */ var _modules_scroll_leniscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/scroll/leniscroll */ \"./src/assets/scripts/modules/scroll/leniscroll.js\");\n/* harmony import */ var _modules_effects_initParallaxBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/effects/initParallaxBlock */ \"./src/assets/scripts/modules/effects/initParallaxBlock.js\");\n\n\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n(0,_modules_effects_splitLinesAndFadeUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.home-screen-title');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen1',\n    start: '62% top'\n  }\n}).from('.home-screen2-info__count', {\n  innerText: 0,\n  duration: 0.5,\n  snap: {\n    innerText: 1\n  }\n}).fromTo('.home-screen2-info__title', {\n  opacity: 0,\n  y: 10\n}, {\n  opacity: 1,\n  y: 0\n}, '< 80%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen4',\n    start: '42% top',\n    end: 'bottom'\n  }\n}).fromTo('.home-screen5-title h2', {\n  opacity: 0,\n  x: -300\n}, {\n  opacity: 1,\n  x: 0\n}).fromTo('.home-screen5-title span', {\n  opacity: 0,\n  x: 300\n}, {\n  opacity: 1,\n  x: 0\n}, '< 10%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen9',\n    start: '42% top'\n  }\n}).fromTo('.home-screen10-title h2', {\n  opacity: 0,\n  x: -300\n}, {\n  opacity: 1,\n  x: 0\n}).fromTo('.home-screen10-title > span', {\n  opacity: 0,\n  x: 300\n}, {\n  opacity: 1,\n  x: 0\n}, '< 10%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen6',\n    start: 'top 50%',\n    end: 'bottom'\n  }\n}).from('.answer-list__item', {\n  ease: 'back',\n  autoAlpha: 0,\n  duration: 1.5,\n  y: 80,\n  stagger: 0.2\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen5',\n    start: 'top 50%',\n    end: 'bottom'\n  }\n}).from('.home-screen5-list li', {\n  ease: 'back',\n  autoAlpha: 0,\n  duration: 1.5,\n  y: 80,\n  stagger: 0.2\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen3',\n    scrub: true,\n    start: '-70% top',\n    end: 'bottom bottom'\n  }\n}).from('.home-screen3-desc .decoration-line .active', {\n  scaleX: 0,\n  transformOrigin: 'right',\n  ease: 'none'\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen4',\n    scrub: true,\n    start: '-70% top',\n    end: 'bottom bottom'\n  }\n}).from('.home-screen4-desc .decoration-line .active', {\n  scaleX: 0,\n  transformOrigin: 'left',\n  ease: 'none'\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/home/animation.js?")},"./src/assets/scripts/home/index.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/home/index.js ***!
  \******************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./src/assets/scripts/home/animation.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/accordion */ \"./src/assets/scripts/modules/accordion/index.js\");\n/* harmony import */ var _modules_upScroll_upScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/upScroll/upScroll */ \"./src/assets/scripts/modules/upScroll/upScroll.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.answer-list__item', '[answer-item__answer]', '[answer-item__label]', '[answer-list__item-icon]');\n  (0,_modules_upScroll_upScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/home/index.js?")},"./src/assets/scripts/modules/accordion/index.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/modules/accordion/index.js ***!
  \*******************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n\nvar accordion = function accordion(triggerSelectors, textSelector, labelSelector, iconSelector) {\n  function createTimeline(accordion) {\n    var timeline = gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      paused: true,\n      onStart: timelineStart,\n      onStartParams: [accordion],\n      onReverseCompleteParams: [accordion]\n    });\n    timeline.fromTo(accordion.querySelector(textSelector), {\n      opacity: 0,\n      height: 0,\n      marginBottom: 0\n    }, {\n      marginBottom: 40,\n      opacity: 1,\n      height: 'auto',\n      duration: 0.35,\n      ease: 'power4.inOut'\n    }).fromTo(accordion.querySelector(iconSelector), {\n      rotate: 0\n    }, {\n      rotate: -180,\n      duration: 0.35,\n      ease: 'power4.inOut'\n    }, '<');\n    timeline.reverse();\n    accordion.querySelector(labelSelector).accordionTimeline = timeline;\n  }\n  function timelineStart(accordion) {\n    accordion.querySelector(textSelector).style.display = 'block';\n  }\n  function attachEvents(accordion) {\n    var trigger = accordion.querySelector(labelSelector);\n    trigger.addEventListener('click', function () {\n      trigger.accordionTimeline.reversed() ? trigger.accordionTimeline.play() : trigger.accordionTimeline.reverse();\n    });\n  }\n  document.querySelectorAll(triggerSelectors).forEach(function (item) {\n    createTimeline(item);\n    attachEvents(item);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordion);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/accordion/index.js?")},"./src/assets/scripts/modules/effects/initParallaxBlock.js":
/*!*****************************************************************!*\
  !*** ./src/assets/scripts/modules/effects/initParallaxBlock.js ***!
  \*****************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nvar initParallaxBlock = function initParallaxBlock() {\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();\n  var parallaxImages = document.querySelectorAll(\'[parallax-block]\');\n  parallaxImages.forEach(function (block) {\n    var scale = block.dataset.scale || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(block, {\n      willChange: \'transform\'\n    });\n    var speed = block.dataset.speed;\n    var yPercent = block.dataset.percent || 0;\n    var time = block.dataset.time || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: \'none\',\n      scrollTrigger: {\n        trigger: block,\n        scrub: 2,\n        markers: false,\n        start: "top-=".concat(time, " bottom"),\n        end: \'bottom top\'\n      }\n    }).fromTo(block, {\n      y: function y() {\n        return "".concat(yPercent, "%");\n      }\n    }, {\n      y: function y() {\n        return "".concat(10 * (1 - speed), "%");\n      },\n      ease: \'sine.inOut\',\n      scale: scale\n    });\n  });\n};\nvar imageParallaxHeroBack = document.querySelectorAll(\'[parallax-block]\');\nif (imageParallaxHeroBack) {\n  initParallaxBlock();\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/effects/initParallaxBlock.js?')},"./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js":
/*!*******************************************************************!*\
  !*** ./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js ***!
  \*******************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ splitToLinesAndFadeUp; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction splitToLinesAndFadeUp(selector) {\n  document.querySelectorAll(selector).forEach(function (text) {\n    var mathM = text.innerHTML.match(/<\\s*(\\w+\\b)(?:(?!<\\s*\\/\\s*\\1\\b)[\\s\\S])*<\\s*\\/\\s*\\1\\s*>|\\S+/g);\n    if (mathM === null) return;\n    mathM = mathM.map(function (el) {\n      return \"<span style=\\\"display:inline-flex\\\"><span>\".concat(el, \"</span></span>\");\n    });\n    text.innerHTML = mathM.join(' ');\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(text.children, {\n      overflow: 'hidden'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(text.querySelectorAll('span>span'), {\n      overflow: 'initial',\n      display: 'inline-block'\n    });\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n      // paused: true,\n      scrollTrigger: {\n        trigger: text,\n        once: true\n      }\n    }).fromTo(text.querySelectorAll('span>span'), {\n      yPercent: 100\n    }, {\n      yPercent: 0,\n      stagger: 0.05,\n      duration: 1,\n      ease: 'power4.out'\n    }).add(function () {\n      text.innerHTML = text.textContent;\n    });\n\n    // text.addEventListener('click',function(evt){\n    //   tl.progress(0).play();\n    // });\n  });\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js?")},"./src/assets/scripts/modules/scroll/leniscroll.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/modules/scroll/leniscroll.js ***!
  \*********************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/lenis */ "./node_modules/@studio-freight/lenis/dist/lenis.mjs");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nvar lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__["default"]({\n  smoothWheel: true,\n  duration: 1.4\n});\nfunction raf(time) {\n  lenis.raf(time);\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\n  requestAnimationFrame(raf);\n}\nif (document.documentElement.classList.contains(\'mobile\')) {\n  lenis.destroy();\n}\ngsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\nrequestAnimationFrame(raf);\n/* harmony default export */ __webpack_exports__["default"] = (lenis);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/scroll/leniscroll.js?')},"./src/assets/scripts/modules/upScroll/upScroll.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/modules/upScroll/upScroll.js ***!
  \*********************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ upArrow; }\n/* harmony export */ });\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollToPlugin.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);\nfunction upArrow() {\n  document.body.addEventListener('click', function (evt) {\n    var target = evt.target.closest('[scroll-up-arrow]');\n    if (!target) return;\n    var targetId = evt.target.dataset.id;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.to(window, {\n      duration: 2,\n      ease: 'power2',\n      scrollTo: targetId\n    });\n  });\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/upScroll/upScroll.js?")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,_,n,r){if(!_){var a=1/0;for(l=0;l<deferred.length;l++){_=deferred[l][0],n=deferred[l][1],r=deferred[l][2];for(var t=!0,o=0;o<_.length;o++)(!1&r||a>=r)&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](_[o])})?_.splice(o--,1):(t=!1,r<a&&(a=r));if(t){deferred.splice(l--,1);var s=n();void 0!==s&&(e=s)}}return e}r=r||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>r;l--)deferred[l]=deferred[l-1];deferred[l]=[_,n,r]},__webpack_require__.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=function(e,_){for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={home:0};__webpack_require__.O.j=function(_){return 0===e[_]};var _=function(_,n){var r,a,t=n[0],o=n[1],s=n[2],l=0;if(t.some(function(_){return 0!==e[_]})){for(r in o)__webpack_require__.o(o,r)&&(__webpack_require__.m[r]=o[r]);if(s)var i=s(__webpack_require__)}for(_&&_(n);l<t.length;l++)a=t[l],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(i)},n=self.webpackChunkbuild=self.webpackChunkbuild||[];n.forEach(_.bind(null,0)),n.push=_.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendors"],function(){return __webpack_require__("./src/assets/scripts/home/index.js")});__webpack_exports__=__webpack_require__.O(__webpack_exports__)}();