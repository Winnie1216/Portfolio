import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { suspend } from 'suspend-react'



export const AnimatedCube = (props) => {
  return (
    <>
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0]} /> */}
      <Cube />
      <Dodecahedron position={[2, 1, 0]} scale={0.4} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
      <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />

    </>
  )
}

function Cube() {
  const textRef = useRef()
  useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
          <color attach="background" args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={4} color="#555">
            hello
          </Text>
          {/* <Dodecahedron /> */}
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

function Dodecahedron(props) {
  const meshRef = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame(() => (meshRef.current.rotation.x += 0.01))

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
      </mesh>
    </group>
  )
}
// function Dodecahedron(props) {
//   const meshRef = useRef()
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
  
//   // 修改旋转逻辑：绕 Y 轴匀速旋转（原代码是绕 X 轴旋转）
//   useFrame(() => {
//     meshRef.current.rotation.y += 0.01 // 调整旋转速度和轴
//   })

//   return (
//     <group {...props}>
//       <mesh
//         ref={meshRef}
//         scale={clicked ? 1.5 : 1}
//         rotation={[0.5, 0, 0]} // 初始旋转角度（弧度制）
//         onClick={() => click(!clicked)}
//         onPointerOver={() => hover(true)}
//         onPointerOut={() => hover(false)}>
//         <dodecahedronGeometry args={[0.75]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
//       </mesh>
//     </group>
//   )
// }