/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// gltfjsx generates a jsx file, ts compiler doesn't like it, i don't know, don't care.
// @ts-ignore
import Dust2 from './Dust2'

export default function App() {
  return (
    <Canvas>
      <Dust2 />
    </Canvas>
  )
}
