import * as RODIN from 'rodin/core';
import {screen} from './src/Screen.js';
import './src/Socket.js';

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
const sphericalSkybox = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map: RODIN.Loader.loadTexture('images/scene1.jpg')
    }));
sphericalSkybox.scale.x=-1;
RODIN.Scene.add(sphericalSkybox);
//vahe