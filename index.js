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

var texture, material, plane;
texture = THREE.ImageUtils.loadTexture( "images/hotspot.png" );
texture.repeat.set(1, 1);
material = new THREE.MeshLambertMaterial({ map : texture });
plane = new THREE.Mesh(new THREE.PlaneGeometry(144, 80), material);
plane.material.side = THREE.DoubleSide;
plane.rotation.z = Math.PI / 2;

var hotspot = new RODIN.Sculpt(plane);
console.log(hotspot);


const scene1 = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        map: RODIN.Loader.loadTexture('images/scene1.jpg')
    }));
scene1.scale.set(-1,1,1);

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

RODIN.Scene.add(scene1);
//vahe