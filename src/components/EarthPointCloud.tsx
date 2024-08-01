import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const EarthPointCloudComponent = ({ width = '100%', height = '400px' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const mount = mountRef.current;
    if (!mount) return;

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Create points
    const radius = 5;
    const segments = 64;
    const sphere = new THREE.SphereGeometry(radius, segments, segments);
    const positions = sphere.attributes.position.array;
    const originalPositions = positions.slice(); // Store original positions

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x808080,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation
      pointCloud.rotation.y += 0.002;

      // Ripple effect
      const time = Date.now() * 0.001;
      const positions = geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const originalX = originalPositions[i];
        const originalY = originalPositions[i + 1];
        const originalZ = originalPositions[i + 2];

        const distance = Math.sqrt(originalX * originalX + originalY * originalY + originalZ * originalZ);
        const ripple = Math.sin(distance * 2 + time) * 0.05;

        positions[i] = originalX * (1 + ripple);
        positions[i + 1] = originalY * (1 + ripple);
        positions[i + 2] = originalZ * (1 + ripple);
      }

      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width, height }} />;
};

export default EarthPointCloudComponent;