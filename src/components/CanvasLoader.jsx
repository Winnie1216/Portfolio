import { Html, useProgress } from '@react-three/drei';
import React from 'react';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader text-5xl text-white">
        <p
          style={{
            fontSize: 24,
            color: "#F1F1F1",
            fontWeight: 800, 
            marginTop: 40,
          }}
        >
          {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
