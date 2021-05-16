import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPostsForHome } from '../lib/api';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

// export const getStaticProps = async ({ locale, preview }) => {
//   const allPosts = (await getAllPostsForHome(preview)) ?? [];
//   const locales = await serverSideTranslations(locale, ['common']);
//   return {
//     props: {
//       locales,
//       allPosts,
//     },
//   };
// };

const HomePage = ({ locales, allPosts }) => {
  const { nodes } = useLoader(GLTFLoader, '/glb/flamingo.glb');
  console.log('node', nodes);

  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <group>
          <scene>
            <mesh name="bao"></mesh>
          </scene>
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HomePage;
