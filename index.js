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



const exp360 = new RODIN.Sculpt();
RODIN.Scene.add(exp360);

var hotspotObject = new RODIN.Plane(1,0.555, new THREE.MeshBasicMaterial({
    map: RODIN.Loader.loadTexture("images/hotspot.png"),
        transparent: true
}));

var hotspot1 = hotspotObject;
var hotspot2 = hotspotObject;

hotspot1.position.set(3.4, 0, 3.4);
hotspot1.rotation.x = -Math.PI / 2;
hotspot1.rotation.z = -Math.PI / 1.4;

hotspot2.position.set(2, 0, 2);
hotspot2.rotation.x = -Math.PI / 2;
hotspot2.rotation.z = -Math.PI / 1.4;


const scene1 = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        map: RODIN.Loader.loadTexture('images/scene1.jpg')
    }));
    
scene1.scale.set(-1,1,1);
exp360.add(hotspot1);
exp360.add(hotspot2);

const scene2 = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        map: RODIN.Loader.loadTexture('images/scene2.jpg')
    }));
scene2.scale.set(-1,1,1);

const scene3 = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        map: RODIN.Loader.loadTexture('images/scene3.jpg')
    }));
scene3.scale.set(-1,1,1);

exp360.add(scene1);
//vahe