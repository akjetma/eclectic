/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
import { Capsule } from '@react-three/drei'

// gltfjsx generated jsx file, ts compiler doesn't like it. another day...
// @ts-ignore
import Dust2 from './Dust2'

export default function App() {

  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] }
  ]

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "./wow.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    return vid;
  });

  const tex = new THREE.VideoTexture(video);

  return (
    <Canvas scene={{ background: tex }}
      // not sure how this connects back to the camera. if i remove this,
      // you have to drag the mouse while the button is held to move the camera
      onPointerDown={(e) => {
        if (e.pointerType === "mouse" && e.target instanceof HTMLElement) {
          e.target.requestPointerLock();
          video.play();
        }
      }}>
      <Suspense>
        <Physics debug gravity={[0, -9, 0]}>
          <KeyboardControls map={keyboardMap}>
            <Ecctrl
              position={[-10, 3, 10]} // character position i think
              camInitDis={-0.01} // camera intial position
              camMinDis={-0.01} // camera zoom in closest position
              camFollowMult={100} // give any big number here, so the camera follows the character instantly
              turnVelMultiplier={1} // Turning speed same as moving speed
              turnSpeed={100} // give it big turning speed to prevent turning wait time
              mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
              >
              <Capsule />
            </Ecctrl>
          </KeyboardControls>
          <RigidBody colliders="trimesh" type="fixed">
            <Dust2 />
          </RigidBody>
        </Physics>
      </Suspense>
    </Canvas>
  )
}
