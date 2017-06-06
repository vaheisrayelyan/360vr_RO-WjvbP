System.register(['rodin/core', './src/Screen.js', './src/Socket.js'], function (_export, _context) {
    "use strict";

    var RODIN, screen, changeEnvSocket;
    return {
        setters: [function (_rodinCore) {
            RODIN = _rodinCore;
        }, function (_srcScreenJs) {
            screen = _srcScreenJs.screen;
        }, function (_srcSocketJs) {
            changeEnvSocket = _srcSocketJs.default;
        }],
        execute: function () {

            RODIN.start();

            var textureScene1 = RODIN.Loader.loadTexture('images/scene1.jpg');
            var textureScene2 = RODIN.Loader.loadTexture('images/scene2.jpg');
            var textureScene3 = RODIN.Loader.loadTexture('images/scene3.jpg');

            const exp360 = new RODIN.Sculpt();
            RODIN.Scene.add(exp360);

            const sceneMain = new RODIN.Sphere(72, 36, 36, new THREE.MeshBasicMaterial({
                map: textureScene1,
                side: THREE.DoubleSide
            }));

            var hotspot1 = new RODIN.Plane(10, 5.555, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture("images/hotspot.png"),
                transparent: true
            }));

            var hotspot2 = new RODIN.Plane(10, 5.555, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture("images/hotspot.png"),
                transparent: true
            }));

            var hotspot3 = new RODIN.Plane(10, 5.555, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture("images/hotspot.png"),
                transparent: true
            }));

            var hotspot4 = new RODIN.Plane(10, 5.555, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture("images/hotspot.png"),
                transparent: true
            }));

            hotspot1.position.set(24, -10, 24);
            hotspot1.rotation.x = -Math.PI / 2;
            hotspot1.rotation.z = -Math.PI / 1.4;

            hotspot2.position.set(-30, -10, -12);
            hotspot2.rotation.x = -Math.PI / 2;
            hotspot2.rotation.z = Math.PI / 2.3;

            hotspot3.position.set(25, -10, 25);
            hotspot3.rotation.x = -Math.PI / 2;
            hotspot3.rotation.z = -Math.PI / 1.4;

            hotspot4.position.set(-21, -10, -28);
            hotspot4.rotation.x = -Math.PI / 2;
            hotspot4.rotation.z = Math.PI / 0.5;

            function changeEnvPublic(texture, rot_angle) {
                var textureSoc;
                if (texture == 1) {
                    exp360.remove(hotspot2);
                    exp360.remove(hotspot3);
                    textureSoc = textureScene1;
                    exp360.add(hotspot1);
                } else if (texture == 2) {
                    exp360.remove(hotspot1);
                    exp360.remove(hotspot4);
                    textureSoc = textureScene2;
                    exp360.add(hotspot2);
                    exp360.add(hotspot3);
                } else if (texture == 3) {
                    exp360.remove(hotspot2);
                    exp360.remove(hotspot3);
                    textureSoc = textureScene3;
                    exp360.add(hotspot4);
                }
                sceneMain._threeObject.material.map = textureSoc;
                sceneMain.rotation.y = rot_angle;
                console.log(texture + rot_angle);
            }

            _export('default', changeEnvPublic);

            function changeEnv(texture, rot_angle) {
                sceneMain._threeObject.material.map = texture;
                sceneMain.rotation.y = rot_angle;
                var textureNum;
                if (texture == textureScene1) {
                    exp360.remove(hotspot2);
                    exp360.remove(hotspot3);
                    textureNum = 1;
                    exp360.add(hotspot1);
                } else if (texture == textureScene2) {
                    exp360.remove(hotspot1);
                    exp360.remove(hotspot4);
                    textureNum = 2;
                    exp360.add(hotspot2);
                    exp360.add(hotspot3);
                } else if (texture == textureScene3) {
                    exp360.remove(hotspot2);
                    exp360.remove(hotspot3);
                    textureNum = 3;
                    exp360.add(hotspot4);
                }

                changeEnvSocket(textureNum, rot_angle);
            }

            sceneMain.scale.set(-1, 1, 1);
            exp360.add(hotspot1);

            hotspot1.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function (evt) {
                //exp360.remove(hotspot1);
                changeEnv(textureScene2, -Math.PI / 1.5);
            });

            hotspot2.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function (evt) {
                //exp360.remove(hotspot1);
                changeEnv(textureScene1, 0);
            });

            hotspot3.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function (evt) {
                //exp360.remove(hotspot1);
                changeEnv(textureScene3, -Math.PI / 1.5);
            });

            hotspot4.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function (evt) {
                //exp360.remove(hotspot1);
                changeEnv(textureScene2, -Math.PI / 1.5);
            });

            exp360.add(sceneMain);
        }
    };
});