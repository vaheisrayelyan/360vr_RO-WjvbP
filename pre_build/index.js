'use strict';

System.register(['rodin/core', './src/Screen.js', './src/Socket.js'], function (_export, _context) {
    "use strict";

    var RODIN, screen, scene1, scene2, scene3;
    return {
        setters: [function (_rodinCore) {
            RODIN = _rodinCore;
        }, function (_srcScreenJs) {
            screen = _srcScreenJs.screen;
        }, function (_srcSocketJs) {}],
        execute: function () {

            RODIN.start();
            //RODIN.Scene.add(new RODIN.Sculpt(new THREE.AmbientLight(0xffffff, 0.1)));

            /**
             * Create spherical skybox
             * Radius is 72 meters
             * Number of segments is 36, by horizontal and vertical axes
             * Set material rendering side to back
             * Load texture from URL
             * Add to the scene
             */
            scene1 = new RODIN.Sphere(72, 36, 36, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture('images/scene1.jpg')
            }));

            scene1.scale.set(-1, 1, 1);

            scene2 = new RODIN.Sphere(72, 36, 36, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture('images/scene2.jpg')
            }));

            scene2.scale.set(-1, 1, 1);

            scene3 = new RODIN.Sphere(72, 36, 36, new THREE.MeshBasicMaterial({
                map: RODIN.Loader.loadTexture('images/scene3.jpg')
            }));

            scene3.scale.set(-1, 1, 1);

            RODIN.Scene.add(scene1);
            //vahe
        }
    };
});