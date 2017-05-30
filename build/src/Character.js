'use strict';

System.register(['rodin/core'], function (_export, _context) {
    "use strict";

    var RODIN, Character;

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
            _export('Character', Character = function (_RODIN$Sculpt) {
                _inherits(Character, _RODIN$Sculpt);

                function Character() {
                    _classCallCheck(this, Character);

                    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this));

                    _this.head = new RODIN.Sculpt('models/character/head.obj');
                    _this.hands = {
                        left: new RODIN.Sculpt('models/character/hand_left.obj'),
                        right: new RODIN.Sculpt('models/character/hand_right.obj')
                    };

                    _this.head.on(RODIN.CONST.READY, function () {
                        _this.head._threeObject.children[0].material.transparent = true;
                        _this.add(_this.head);
                    });
                    _this.hands.left.on(RODIN.CONST.READY, function () {
                        _this.hands.left._threeObject.children[0].material.transparent = true;
                        _this.add(_this.hands.left);

                        _this.hideObject(RODIN.GamePad.viveLeft.controllerModel);
                        _this.hideObject(RODIN.GamePad.oculusTouchLeft.controllerModel);

                        RODIN.GamePad.viveLeft.sculpt.add(_this.hands.left.clone());
                        RODIN.GamePad.oculusTouchLeft.sculpt.add(_this.hands.left.clone());
                    });
                    _this.hands.right.on(RODIN.CONST.READY, function () {
                        _this.hands.right._threeObject.children[0].material.transparent = true;
                        _this.add(_this.hands.right);

                        _this.hideObject(RODIN.GamePad.viveRight.controllerModel);
                        _this.hideObject(RODIN.GamePad.oculusTouchRight.controllerModel);

                        RODIN.GamePad.viveRight.sculpt.add(_this.hands.right.clone());
                        RODIN.GamePad.oculusTouchRight.sculpt.add(_this.hands.right.clone());

                        RODIN.GamePad.viveRight.initRaycastingLine();
                    });

                    _this.hideObject = function (object) {
                        if (object.isReady) {
                            object.visible = false;
                        } else {
                            object.on(RODIN.CONST.READY, function () {
                                object.visible = false;
                            });
                        }
                    };
                    return _this;
                }

                return Character;
            }(RODIN.Sculpt));

            _export('Character', Character);
        }
    };
});