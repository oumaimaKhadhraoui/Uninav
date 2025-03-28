import React from 'react'
import Spline from '@splinetool/react-spline/next';

const Map = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <main style={{ clipPath: 'inset(0 0 20% 0)' }} className="h-full">
        <Spline scene="https://prod.spline.design/7UDlDJD2RsWYe7UD/scene.splinecode" />
      </main>
    </div>
  );
};
export default Map
