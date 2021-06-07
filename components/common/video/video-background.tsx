import s from './video-background.module.scss';

const VideoBackground = () => {
  return (
    <div className="sw-relative sw-w-screen sw-h-screen">
      <video className={s.video} id="vd" autoPlay={true} loop={true}>
        <source src="/video/video-background.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;
