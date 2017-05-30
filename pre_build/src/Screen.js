'use strict';

System.register(['rodin/core'], function (_export, _context) {
    "use strict";

    var RODIN, _createClass, Screen, screen;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_rodinCore) {
            RODIN = _rodinCore;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Screen', Screen = function (_RODIN$Plane) {
                _inherits(Screen, _RODIN$Plane);

                function Screen() {
                    _classCallCheck(this, Screen);

                    /**
                     * Set screen width and height
                     */
                    var width = 7.528;
                    var p = 1920 / 1020;
                    var height = width / p;

                    /**
                     * Create a plane with given parameters
                     */

                    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, width, height, 1, 1));

                    /**
                     * Load slide images, add to slides array
                     */
                    _this.slides = [RODIN.Loader.loadTexture('images/presentation/p1.jpg'), RODIN.Loader.loadTexture('images/presentation/p2.jpg'), RODIN.Loader.loadTexture('images/presentation/p3.jpg'), RODIN.Loader.loadTexture('images/presentation/p4.jpg'), RODIN.Loader.loadTexture('images/presentation/p5.jpg'), RODIN.Loader.loadTexture('images/presentation/p6.jpg'), RODIN.Loader.loadTexture('images/presentation/p7.jpg'), RODIN.Loader.loadTexture('images/presentation/p8.jpg'), RODIN.Loader.loadTexture('images/presentation/p9.jpg'), RODIN.Loader.loadTexture('images/presentation/p10.jpg'), RODIN.Loader.loadTexture('images/presentation/p11.jpg'), RODIN.Loader.loadTexture('images/presentation/p12.jpg'), RODIN.Loader.loadTexture('images/presentation/p13.jpg'), RODIN.Loader.loadTexture('images/presentation/p14.jpg'), RODIN.Loader.loadTexture('images/presentation/p15.jpg')];

                    _this.currentIndex = 0;
                    _this._threeObject.material.map = _this.slides[0];

                    /**
                     * Create prevButtonParams with given parameters.
                     * Set local position.
                     * Add to screen.
                     */
                    var prevButtonParams = { width: .25, height: .25 };
                    prevButtonParams.image = {
                        url: "images/arrowButton.png",
                        width: prevButtonParams.width,
                        height: prevButtonParams.height,
                        position: { v: 50, h: 50 }
                    };
                    _this.prevButton = new RODIN.Element(prevButtonParams);
                    _this.prevButton.on(RODIN.CONST.READY, function () {
                        _this.prevButton.position.set(-width / 2 + .25, 0, .1);
                        _this.add(_this.prevButton);
                    });

                    /**
                     * On prevButton hover, the scale will be set 1.2
                     */
                    _this.prevButton.on(RODIN.CONST.GAMEPAD_HOVER, function () {
                        _this.prevButton.scale.set(1.2, 1.2, 1.2);
                    });
                    /**
                     * On prevButton hover out, the scale will be set 1
                     */
                    _this.prevButton.on(RODIN.CONST.GAMEPAD_HOVER_OUT, function () {
                        _this.prevButton.scale.set(1, 1, 1);
                    });
                    /**
                     * Stops the key up or key down events from propagating to bottom layers.
                     */
                    _this.prevButton.on([RODIN.CONST.GAMEPAD_BUTTON_DOWN, RODIN.CONST.GAMEPAD_BUTTON_UP], function (evt) {
                        evt.stopPropagation();
                    });
                    /**
                     * On prevButton key down, prev() will be called
                     */
                    _this.prevButton.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function () {
                        _this.prev();
                    });

                    /**
                     * Create nextButtonParams with given parameters.
                     * Set local position.
                     * Add to screen.
                     */
                    var nextButtonParams = { width: .25, height: .25 };
                    nextButtonParams.image = {
                        url: "images/arrowButton.png",
                        width: nextButtonParams.width,
                        height: nextButtonParams.height,
                        position: { v: 50, h: 50 }
                    };
                    _this.nextButton = new RODIN.Element(nextButtonParams);
                    _this.nextButton.on(RODIN.CONST.READY, function () {
                        _this.nextButton.rotation.z = Math.PI;
                        _this.nextButton.position.set(width / 2 - .25, 0, .1);
                        _this.add(_this.nextButton);
                    });

                    /**
                     * On nextButton hover, the scale will be set 1.2
                     */
                    _this.nextButton.on(RODIN.CONST.GAMEPAD_HOVER, function () {
                        _this.nextButton.scale.set(1.2, 1.2, 1.2);
                    });
                    /**
                     * On nextButton hover out, the scale will be set 1
                     */
                    _this.nextButton.on(RODIN.CONST.GAMEPAD_HOVER_OUT, function () {
                        _this.nextButton.scale.set(1, 1, 1);
                    });
                    /**
                     * Stops the key up or key down events from propagating to bottom layers.
                     */
                    _this.nextButton.on([RODIN.CONST.GAMEPAD_BUTTON_DOWN, RODIN.CONST.GAMEPAD_BUTTON_UP], function (evt) {
                        evt.stopPropagation();
                    });
                    /**
                     * On nextButton key down, next() will be called
                     */
                    _this.nextButton.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function () {
                        _this.next();
                    });

                    _this.on(RODIN.CONST.UPDATE, function () {
                        if (!_this._threeObject.material.map) {
                            _this._threeObject.material.map = _this.slides[0];
                            console.log(_this._threeObject.material.map);
                        }
                    });

                    /**
                     * On screen hover, the scale will be set 1.01
                     */
                    _this.on(RODIN.CONST.GAMEPAD_HOVER, function () {
                        _this.scale.set(1.01, 1.01, 1.01);
                    });
                    /**
                     * On screen hover out, the scale will be set 1
                     */
                    _this.on(RODIN.CONST.GAMEPAD_HOVER_OUT, function () {
                        _this.scale.set(1, 1, 1);
                    });
                    /**
                     * On screen key down, next() will be called
                     */
                    _this.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function () {
                        _this.next();
                    });
                    return _this;
                }

                /**
                 * Change slide image according to the slide number.
                 * @param sliderImageIndex {number}
                 */


                _createClass(Screen, [{
                    key: 'show',
                    value: function show(sliderImageIndex) {
                        // blocks the function call, if the previous call was less than 200ms ago
                        if (RODIN.Time.now - this.lastChanged < 200) return;
                        this.lastChanged = RODIN.Time.now;
                        // check, if the new slide index equals to the current slide index.
                        if (this.currentIndex === sliderImageIndex) return;
                        this._threeObject.material.map = this.slides[sliderImageIndex];
                        this.currentIndex = sliderImageIndex;
                        this.emit('change', new RODIN.RodinEvent(this));
                    }
                }, {
                    key: 'next',
                    value: function next() {
                        // Check if current index is the last slide index.
                        if (this.currentIndex < this.slides.length - 1) {
                            this.show(this.currentIndex + 1);
                        }
                    }
                }, {
                    key: 'prev',
                    value: function prev() {
                        //  Check if current index is the first slide index.
                        if (this.currentIndex > 0) {
                            this.show(this.currentIndex - 1);
                        }
                    }
                }]);

                return Screen;
            }(RODIN.Plane));

            _export('Screen', Screen);

            _export('screen', screen = new Screen());

            _export('screen', screen);

            screen.position.z = -6.251;
            screen.position.y = 2.593;
        }
    };
});