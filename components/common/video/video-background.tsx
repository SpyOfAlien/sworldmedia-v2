import { useEffect, useRef } from 'react';
import s from './video-background.module.scss';

const VideoBackground = () => {
  const video = useRef<HTMLVideoElement>();
  useEffect(() => {
    video && video.current.play();
  }, []);

  return (
    <section className="sw-relative sw-w-screen sw-h-screen sw-mb-40">
      <video
        ref={video}
        className={s.video}
        id="vd"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoBackground;
