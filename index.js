import * as RODIN from 'rodin/core';
import {screen} from './src/Screen.js';
import './src/Socket.js';

import changeEnvSocket from './src/Socket.js';


var textureScene1 = RODIN.Loader.loadTexture('images/scene1.jpg');
var textureScene2 = RODIN.Loader.loadTexture('images/scene2.jpg');
var textureScene3 = RODIN.Loader.loadTexture('images/scene3.jpg');



export default function changeEnvPublic(texture, rot_angle) {
    var textureSoc;
    if(texture == 1) {
        textureSoc = textureScene1;
    }
    else if(texture == 2) {
        exp360.remove(hotspot1);
        textureSoc = textureScene2;
        exp360.add(hotspot2);
        exp360.add(hotspot3);
    }
    else if(texture == 3) {
        textureSoc = textureScene3;
    }
    sceneMain._threeObject.material.map = textureSoc;
    sceneMain.rotation.y = rot_angle;
    console.log(texture + rot_angle);
}

function changeEnv(texture, rot_angle) {
    sceneMain._threeObject.material.map = texture;
    sceneMain.rotation.y = rot_angle;
    var textureNum;
    if(texture == textureScene1) {
        textureNum = 1;
    }
    else if(texture == textureScene2) {
        textureNum = 2;
        exp360.add(hotspot2);
        exp360.add(hotspot3);
    }
    else if(texture == textureScene3) {
        textureNum = 3;
    }
    changeEnvSocket(textureNum, rot_angle);
    
}

RODIN.start();

const exp360 = new RODIN.Sculpt();
RODIN.Scene.add(exp360);

var hotspot = new RODIN.Plane(10,5.55, new THREE.MeshBasicMaterial({
    map: RODIN.Loader.loadTexture("images/hotspot.png"),
        transparent: true
}));

var hotspot1 = hotspot;
var hotspot2 = hotspot;
var hotspot3 = hotspot;
var hotspot4 = hotspot;


hotspot1.position.set(24, -10, 24);
hotspot1.rotation.x = -Math.PI / 2;
hotspot1.rotation.z = -Math.PI / 1.4;

hotspot2.position.set(24, -10, 24);
hotspot2.rotation.x = -Math.PI / 2;
hotspot2.rotation.z = -Math.PI / 1.4;

hotspot3.position.set(28, -10, 28);
hotspot3.rotation.x = -Math.PI / 2;
hotspot3.rotation.z = -Math.PI / 1.4;


const sceneMain = new RODIN.Sphere(72, 36, 36,
    new THREE.MeshBasicMaterial({
        map: textureScene1
    }));
    
sceneMain.scale.set(-1,1,1);
exp360.add(hotspot1);

hotspot1.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, function (evt) {
    exp360.remove(hotspot1);
    changeEnv(textureScene2, -Math.PI / 1.5);
});

exp360.add(sceneMain);