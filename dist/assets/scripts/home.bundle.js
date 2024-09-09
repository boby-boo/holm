!function(){"use strict";var __webpack_modules__={"./src/assets/scripts/home/animation.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/home/animation.js ***!
  \**********************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _modules_effects_splitLinesAndFadeUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/effects/splitLinesAndFadeUp */ \"./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js\");\n/* harmony import */ var _modules_scroll_leniscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/scroll/leniscroll */ \"./src/assets/scripts/modules/scroll/leniscroll.js\");\n/* harmony import */ var _modules_effects_initParallaxBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/effects/initParallaxBlock */ \"./src/assets/scripts/modules/effects/initParallaxBlock.js\");\n\n\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n(0,_modules_effects_splitLinesAndFadeUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.home-screen-title');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen1',\n    start: '62% top'\n  }\n}).from('.home-screen2-info__count', {\n  innerText: 0,\n  duration: 0.5,\n  snap: {\n    innerText: 1\n  }\n}).fromTo('.home-screen2-info__title', {\n  opacity: 0,\n  y: 10\n}, {\n  opacity: 1,\n  y: 0\n}, '< 80%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen4',\n    start: '42% top',\n    end: 'bottom'\n  }\n}).fromTo('.home-screen5-title h2', {\n  opacity: 0,\n  x: -300\n}, {\n  opacity: 1,\n  x: 0\n}).fromTo('.home-screen5-title span', {\n  opacity: 0,\n  x: 300\n}, {\n  opacity: 1,\n  x: 0\n}, '< 10%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen9',\n    start: '42% top'\n  }\n}).fromTo('.home-screen10-title h2', {\n  opacity: 0,\n  x: -300\n}, {\n  opacity: 1,\n  x: 0\n}).fromTo('.home-screen10-title > span', {\n  opacity: 0,\n  x: 300\n}, {\n  opacity: 1,\n  x: 0\n}, '< 10%');\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen6',\n    start: 'top 50%',\n    end: 'bottom'\n  }\n}).from('.answer-list__item', {\n  ease: 'back',\n  autoAlpha: 0,\n  duration: 1.5,\n  y: 80,\n  stagger: 0.2\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen5',\n    start: 'top 50%',\n    end: 'bottom'\n  }\n}).from('.home-screen5-list li', {\n  ease: 'back',\n  autoAlpha: 0,\n  duration: 1.5,\n  y: 80,\n  stagger: 0.2\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen3',\n    scrub: true,\n    start: '-70% top',\n    end: 'bottom bottom'\n  }\n}).from('.home-screen3-desc .decoration-line .active', {\n  scaleX: 0,\n  transformOrigin: 'right',\n  ease: 'none'\n});\ngsap_all__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline({\n  scrollTrigger: {\n    trigger: '.home-screen4',\n    scrub: true,\n    start: '-70% top',\n    end: 'bottom bottom'\n  }\n}).from('.home-screen4-desc .decoration-line .active', {\n  scaleX: 0,\n  transformOrigin: 'left',\n  ease: 'none'\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/home/animation.js?")},"./src/assets/scripts/home/index.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/home/index.js ***!
  \******************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/assets/scripts/home/animation.js");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/accordion */ "./src/assets/scripts/modules/accordion/index.js");\n/* harmony import */ var _modules_upScroll_upScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/upScroll/upScroll */ "./src/assets/scripts/modules/upScroll/upScroll.js");\n/* harmony import */ var _modules_map_animationMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/map/animationMap */ "./src/assets/scripts/modules/map/animationMap.js");\n/* harmony import */ var _modules_getApartmentScheme_getApartmentScheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/getApartmentScheme/getApartmentScheme */ "./src/assets/scripts/modules/getApartmentScheme/getApartmentScheme.js");\n/* harmony import */ var _modules_getFloorScheme_getFloorScheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/getFloorScheme/getFloorScheme */ "./src/assets/scripts/modules/getFloorScheme/getFloorScheme.js");\n\n\n\n\n\n\n\n// import deviceInfo from \'current-device\';\n// import { lenis } from \'./modules/scroll/leniscroll\';\n\n// const scroller = lenis;\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_1__["default"])(\'.answer-list__item\', \'[answer-item__answer]\', \'[answer-item__label]\', \'[answer-list__item-icon]\');\n  (0,_modules_upScroll_upScroll__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  (0,_modules_map_animationMap__WEBPACK_IMPORTED_MODULE_3__["default"])(\'.home-screen10-container svg g circle:first-of-type\');\n  (0,_modules_getApartmentScheme_getApartmentScheme__WEBPACK_IMPORTED_MODULE_4__["default"])(\'[container-button-scheme]\');\n  (0,_modules_getFloorScheme_getFloorScheme__WEBPACK_IMPORTED_MODULE_5__["default"])(\'[data-apartment-info]\');\n});\n\n//# sourceURL=webpack://build/./src/assets/scripts/home/index.js?')},"./src/assets/scripts/modules/accordion/index.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/modules/accordion/index.js ***!
  \*******************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n\nvar accordion = function accordion(triggerSelectors, textSelector, labelSelector, iconSelector) {\n  function createTimeline(accordion) {\n    var timeline = gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      paused: true,\n      onStart: timelineStart,\n      onStartParams: [accordion],\n      onReverseCompleteParams: [accordion]\n    });\n    timeline.fromTo(accordion.querySelector(textSelector), {\n      opacity: 0,\n      height: 0,\n      marginBottom: 0\n    }, {\n      marginBottom: 40,\n      opacity: 1,\n      height: 'auto',\n      duration: 0.35,\n      ease: 'power4.inOut'\n    }).fromTo(accordion.querySelector(iconSelector), {\n      rotate: 0\n    }, {\n      rotate: -180,\n      duration: 0.35,\n      ease: 'power4.inOut'\n    }, '<');\n    timeline.reverse();\n    accordion.querySelector(labelSelector).accordionTimeline = timeline;\n  }\n  function timelineStart(accordion) {\n    accordion.querySelector(textSelector).style.display = 'block';\n  }\n  function attachEvents(accordion) {\n    var trigger = accordion.querySelector(labelSelector);\n    trigger.addEventListener('click', function () {\n      trigger.accordionTimeline.reversed() ? trigger.accordionTimeline.play() : trigger.accordionTimeline.reverse();\n    });\n  }\n  document.querySelectorAll(triggerSelectors).forEach(function (item) {\n    createTimeline(item);\n    attachEvents(item);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (accordion);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/accordion/index.js?")},"./src/assets/scripts/modules/effects/initParallaxBlock.js":
/*!*****************************************************************!*\
  !*** ./src/assets/scripts/modules/effects/initParallaxBlock.js ***!
  \*****************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nvar initParallaxBlock = function initParallaxBlock() {\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.refresh();\n  var parallaxImages = document.querySelectorAll(\'[parallax-block]\');\n  parallaxImages.forEach(function (block) {\n    var scale = block.dataset.scale || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.set(block, {\n      willChange: \'transform\'\n    });\n    var speed = block.dataset.speed;\n    var yPercent = block.dataset.percent || 0;\n    var time = block.dataset.time || 1;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n      ease: \'none\',\n      scrollTrigger: {\n        trigger: block,\n        scrub: 2,\n        markers: false,\n        start: "top-=".concat(time, " bottom"),\n        end: \'bottom top\'\n      }\n    }).fromTo(block, {\n      y: function y() {\n        return "".concat(yPercent, "%");\n      }\n    }, {\n      y: function y() {\n        return "".concat(10 * (1 - speed), "%");\n      },\n      ease: \'sine.inOut\',\n      scale: scale\n    });\n  });\n};\nvar imageParallaxHeroBack = document.querySelectorAll(\'[parallax-block]\');\nif (imageParallaxHeroBack) {\n  initParallaxBlock();\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/effects/initParallaxBlock.js?')},"./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js":
/*!*******************************************************************!*\
  !*** ./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js ***!
  \*******************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ splitToLinesAndFadeUp; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nfunction splitToLinesAndFadeUp(selector) {\n  document.querySelectorAll(selector).forEach(function (text) {\n    var mathM = text.innerHTML.match(/<\\s*(\\w+\\b)(?:(?!<\\s*\\/\\s*\\1\\b)[\\s\\S])*<\\s*\\/\\s*\\1\\s*>|\\S+/g);\n    if (mathM === null) return;\n    mathM = mathM.map(function (el) {\n      return \"<span style=\\\"display:inline-flex\\\"><span>\".concat(el, \"</span></span>\");\n    });\n    text.innerHTML = mathM.join(' ');\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(text.children, {\n      overflow: 'hidden'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(text.querySelectorAll('span>span'), {\n      overflow: 'initial',\n      display: 'inline-block'\n    });\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n      // paused: true,\n      scrollTrigger: {\n        trigger: text,\n        once: true\n      }\n    }).fromTo(text.querySelectorAll('span>span'), {\n      yPercent: 100\n    }, {\n      yPercent: 0,\n      stagger: 0.05,\n      duration: 1,\n      ease: 'power4.out'\n    }).add(function () {\n      text.innerHTML = text.textContent;\n    });\n\n    // text.addEventListener('click',function(evt){\n    //   tl.progress(0).play();\n    // });\n  });\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/effects/splitLinesAndFadeUp.js?")},"./src/assets/scripts/modules/getApartmentScheme/getApartmentScheme.js":
/*!*****************************************************************************!*\
  !*** ./src/assets/scripts/modules/getApartmentScheme/getApartmentScheme.js ***!
  \*****************************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\nvar getApartmentScheme = function getApartmentScheme(containerSelector) {\n  var $containers = document.querySelectorAll(containerSelector);\n  var $buttons = document.querySelectorAll(\'.label-button\');\n  var $apartment = document.querySelector(\'.home-screen8-apartment\');\n  $containers.forEach(function (container) {\n    container.addEventListener(\'click\', function (e) {\n      var $button = e.target.closest(\'.label-button\');\n      if (!$button) return;\n      toggleStyleOnButton(e, $button);\n      getApartment();\n    });\n  });\n  function toggleStyleOnButton(e, trigger) {\n    $buttons.forEach(function (button) {\n      return button.classList.remove(\'label-button__active\');\n    });\n    trigger.classList.add(\'label-button__active\');\n    // const $div = document.createElement(\'div\');\n    // $div.classList.add(\'spinner\');\n    // $apartment.innerHTML = `<div class="spinner"></div>`;\n  }\n  function getApartment() {\n    var $div = document.createElement(\'div\');\n    $div.classList.add(\'spinner\');\n    $apartment.innerHTML = "<div class=\\"spinner\\"></div>";\n    setTimeout(function () {\n      $apartment.innerHTML = "\\n                        <div class=\\"apartment-info\\" data-apartment-info-table=\\"\\">\\n                            <table>\\n                                <thead>\\n                                    <tr>\\n                                        <td>\\u041E\\u0431\\u0449\\u0430\\u044F \\u043F\\u043B\\u043E\\u0449\\u0430\\u0434\\u044C:</td>\\n                                        <td>154.6 \\u043C2</td>\\n                                    </tr>\\n                                    <tr>\\n                                        <td>\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442:</td>\\n                                        <td>4</td>\\n                                    </tr>\\n                                </thead>\\n                                <tbody>\\n                                    <tr>\\n                                        <td>\\u041A\\u0443\\u0445\\u043D\\u044F:</td>\\n                                        <td>32.8 \\u043C2</td>\\n                                    </tr>\\n                                    <tr>\\n                                        <td>\\u0412\\u0430\\u043D\\u043D\\u0430\\u044F \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442\\u0430:</td>\\n                                        <td>12.4 \\u043C2</td>\\n                                    </tr>\\n                                    <tr>\\n                                        <td>\\u0421\\u043F\\u0430\\u043B\\u044C\\u043D\\u044F:</td>\\n                                        <td>24.9 \\u043C2</td>\\n                                    </tr>\\n                                    <tr>\\n                                        <td>\\u0414\\u0435\\u0442\\u0441\\u043A\\u0430\\u044F \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442\\u0430:</td>\\n                                        <td>16.2 \\u043C2</td>\\n                                    </tr>\\n                                </tbody>\\n                            </table>\\n                        </div>\\n                        <div class=\\"apartment-scheme\\" data-apartment-scheme=\\"\\">\\n                            <img src=\\"./assets/images/home/home-screen8-scheme.png\\" title=\\"foto\\" alt=\\"foto\\">\\n                        </div>\\n                        <div class=\\"apartment-level\\">\\n                            <h3>\\u0415\\u0442\\u0430\\u0436</h3>\\n                            <div class=\\"apartment-level-buttons\\" data-level-buttons=\\"\\">\\n                                <button value=\\"1\\">1</button>\\n                                <button class=\\"apartment-level-btn__active\\" value=\\"2\\">2</button>\\n                            </div>\\n                        </div>\\n            ";\n    }, 500);\n  }\n};\n/* harmony default export */ __webpack_exports__["default"] = (getApartmentScheme);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/getApartmentScheme/getApartmentScheme.js?')},"./src/assets/scripts/modules/getFloorScheme/getFloorScheme.js":
/*!*********************************************************************!*\
  !*** ./src/assets/scripts/modules/getFloorScheme/getFloorScheme.js ***!
  \*********************************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nvar getFloorScheme = function getFloorScheme(containerSelector) {\n  var $containers = document.querySelectorAll(containerSelector);\n  var $apartmentInfoContainers = document.querySelectorAll('[data-apartment-info-table]');\n  var $apartmentSchemeContainers = document.querySelectorAll('[data-apartment-scheme]');\n  $containers.forEach(function (container, i) {\n    container.addEventListener('click', function (e) {\n      if (!e.target.closest('[data-level-buttons]') || e.target.tagName !== 'BUTTON') return;\n      var $button = e.target;\n      toggleStyleOnButton($button);\n      getLevelInfo($button.value, i);\n      getSchemeInfo($button.value, i);\n    });\n  });\n  function toggleStyleOnButton(trigger) {\n    var $buttons = Array.from(trigger.parentElement.getElementsByTagName('button'));\n    $buttons.forEach(function (button) {\n      return button.classList.remove('apartment-level-btn__active');\n    });\n    trigger.classList.add('apartment-level-btn__active');\n  }\n  function getLevelInfo(value, index) {\n    if (value === 1) {\n      $apartmentInfoContainers[index].innerHTML = \"\\n                    <table>\\n                        <thead>\\n                            <tr>\\n                                <td>\\u041E\\u0431\\u0449\\u0430\\u044F \\u043F\\u043B\\u043E\\u0449\\u0430\\u0434\\u044C:</td>\\n                                <td>112.3 \\u043C2</td>\\n                            </tr>\\n                            <tr>\\n                                <td>\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442:</td>\\n                                <td>8</td>\\n                            </tr>\\n                        </thead>\\n                        <tbody>\\n                            <tr>\\n                                <td>\\u041A\\u0443\\u0445\\u043D\\u044F:</td>\\n                                <td>32.8 \\u043C2</td>\\n                            </tr>\\n                            <tr>\\n                                <td>\\u0412\\u0430\\u043D\\u043D\\u0430\\u044F \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442\\u0430:</td>\\n                                <td>12.4 \\u043C2</td>\\n                            </tr>\\n                            <tr>\\n                                <td>\\u0421\\u043F\\u0430\\u043B\\u044C\\u043D\\u044F:</td>\\n                                <td>24.9 \\u043C2</td>\\n                            </tr>\\n                            <tr>\\n                                <td>\\u0414\\u0435\\u0442\\u0441\\u043A\\u0430\\u044F \\u043A\\u043E\\u043C\\u043D\\u0430\\u0442\\u0430:</td>\\n                                <td>16.2 \\u043C2</td>\\n                            </tr>\\n                        </tbody>\\n                    </table>\\n            \";\n    } else {}\n    // console.log('apartmentInfoContainers: ');\n    // console.log($apartmentInfoContainers[index]);\n  }\n  function getSchemeInfo(value, index) {\n    // console.log('apartmentSchemeContainers');\n    // console.log($apartmentSchemeContainers[index]);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFloorScheme);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/getFloorScheme/getFloorScheme.js?")},"./src/assets/scripts/modules/map/animationMap.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/modules/map/animationMap.js ***!
  \********************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n\nvar addAnimationToMap = function addAnimationToMap(selector) {\n  var badges = document.querySelectorAll(selector);\n  badges.forEach(function (badge, i) {\n    badge.classList.add('circle-animation');\n    if (i === 0) {\n      badge.parentElement.classList.add('main-map-animation');\n      openMapInNewTab(badge.parentElement);\n    }\n  });\n  gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.to('.circle-animation', {\n    repeat: Infinity,\n    duration: 2,\n    opacity: 0,\n    scale: 2,\n    transformOrigin: '50% 50%'\n  });\n  function openMapInNewTab(trigger) {\n    trigger.addEventListener('click', function (e) {\n      window.open('https://www.google.com/maps/dir//Stokholmas+iela+26,+Zieme%C4%BCu+rajons,+R%C4%ABga,+LV-1014', '_blank');\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (addAnimationToMap);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/map/animationMap.js?")},"./src/assets/scripts/modules/scroll/leniscroll.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/modules/scroll/leniscroll.js ***!
  \*********************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/lenis */ "./node_modules/@studio-freight/lenis/dist/lenis.mjs");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");\n\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\nvar lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_2__["default"]({\n  smoothWheel: true,\n  duration: 1.4\n});\nfunction raf(time) {\n  lenis.raf(time);\n  gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\n  requestAnimationFrame(raf);\n}\nif (document.documentElement.classList.contains(\'mobile\')) {\n  lenis.destroy();\n}\ngsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.update();\nrequestAnimationFrame(raf);\n/* harmony default export */ __webpack_exports__["default"] = (lenis);\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/scroll/leniscroll.js?')},"./src/assets/scripts/modules/upScroll/upScroll.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/modules/upScroll/upScroll.js ***!
  \*********************************************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ upArrow; }\n/* harmony export */ });\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/all.js\");\n/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ \"./node_modules/gsap/ScrollToPlugin.js\");\n\ngsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);\nfunction upArrow() {\n  document.body.addEventListener('click', function (evt) {\n    var target = evt.target.closest('[scroll-up-arrow]');\n    if (!target) return;\n    var targetId = evt.target.dataset.id;\n    gsap_all__WEBPACK_IMPORTED_MODULE_0__.gsap.to(window, {\n      duration: 2,\n      ease: 'power2',\n      scrollTo: targetId\n    });\n  });\n}\n\n//# sourceURL=webpack://build/./src/assets/scripts/modules/upScroll/upScroll.js?")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var _=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(_.exports,_,_.exports,__webpack_require__),_.loaded=!0,_.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,n,_,t){if(!n){var r=1/0;for(l=0;l<deferred.length;l++){n=deferred[l][0],_=deferred[l][1],t=deferred[l][2];for(var a=!0,o=0;o<n.length;o++)(!1&t||r>=t)&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](n[o])})?n.splice(o--,1):(a=!1,t<r&&(r=t));if(a){deferred.splice(l--,1);var s=_();void 0!==s&&(e=s)}}return e}t=t||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>t;l--)deferred[l]=deferred[l-1];deferred[l]=[n,_,t]},__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=function(e,n){for(var _ in n)__webpack_require__.o(n,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:n[_]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={home:0};__webpack_require__.O.j=function(n){return 0===e[n]};var n=function(n,_){var t,r,a=_[0],o=_[1],s=_[2],l=0;if(a.some(function(n){return 0!==e[n]})){for(t in o)__webpack_require__.o(o,t)&&(__webpack_require__.m[t]=o[t]);if(s)var i=s(__webpack_require__)}for(n&&n(_);l<a.length;l++)r=a[l],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(i)},_=self.webpackChunkbuild=self.webpackChunkbuild||[];_.forEach(n.bind(null,0)),_.push=n.bind(null,_.push.bind(_))}();var __webpack_exports__=__webpack_require__.O(void 0,["vendors"],function(){return __webpack_require__("./src/assets/scripts/home/index.js")});__webpack_exports__=__webpack_require__.O(__webpack_exports__)}();