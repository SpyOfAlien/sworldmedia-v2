import Image from 'next/image';
import cn from 'classnames';
import s from './team.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Media, MediaContextProvider } from '../../lib/media';
import useInView from 'react-cool-inview';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  const baseURL = '/assets/images/team';

  const videoEditor = useAnimation();
  const graphicDesign = useAnimation();
  const content = useAnimation();
  const marketing = useAnimation();

  const svgOneControl = useAnimation();
  const svgTwoControl = useAnimation();
  const svgThreeControl = useAnimation();
  const svgFourControl = useAnimation();

  const { observe } = useInView({
    threshold: 0.25,
    onEnter: () => {
      onViewEnter();
    },
    onLeave: () => {
      onViewLeave();
    },
  });

  const onViewEnter = () => {
    videoEditor.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.25,
        ease: 'easeOut',
      },
    });
    graphicDesign.start({
      y: 0,
      opacity: 1.5,
      transition: {
        duration: 1,
        delay: 0.25,
        ease: 'easeOut',
      },
    });
    content.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.25,
        ease: 'easeOut',
      },
    });
    marketing.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.25,
        ease: 'easeOut',
      },
    });
  };
  const onViewLeave = () => {
    videoEditor.start({
      opacity: 0,
      y: -300,
      transition: {
        duration: 0,
        ease: 'easeOut',
      },
    });
    graphicDesign.start({
      opacity: 0,
      y: 300,
      transition: {
        duration: 0,
        ease: 'easeOut',
      },
    });
    content.start({
      opacity: 0,
      y: -300,
      transition: {
        duration: 0,
        ease: 'easeOut',
      },
    });
    marketing.start({
      opacity: 0,
      y: 300,
      transition: {
        duration: 0,
        ease: 'easeOut',
      },
    });
  };

  const onSVGAnimate = (index) => {
    const inAnimate = {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    };
    switch (index) {
      case 1:
        svgOneControl.start(inAnimate);
        break;
      case 2:
        svgTwoControl.start(inAnimate);
        break;
      case 3:
        svgThreeControl.start(inAnimate);
        break;
      case 4:
        svgFourControl.start(inAnimate);
        break;

      default:
        break;
    }
  };

  const onSVGAnimateLeave = (index) => {
    const outAnimate = {
      scale: 1,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    };
    switch (index) {
      case 1:
        svgOneControl.start(outAnimate);
        break;
      case 2:
        svgTwoControl.start(outAnimate);
        break;
      case 3:
        svgThreeControl.start(outAnimate);
        break;
      case 4:
        svgFourControl.start(outAnimate);
        break;

      default:
        break;
    }
  };

  return (
    <MediaContextProvider>
      <div className={cn(s.root, 'sw-grid')} ref={observe}>
        {/* MARKETING */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ y: -300, opacity: 0 }}
          className={s.marketing}
          animate={marketing}
        >
          <div>
            <Image
              src="/assets/images/team/marketing/bg.png"
              width={480}
              height={1080}
              quality={100}
              layout="responsive"
            />
          </div>
          <div
            onMouseEnter={() => onSVGAnimate(1)}
            onMouseLeave={() => onSVGAnimateLeave(1)}
            className="sw-absolute sw-inset-0"
          >
            <motion.div
              animate={svgOneControl}
              className="sw-relative sw-w-full sw-h-full"
            >
              <motion.div className={s.graph}>
                <Image
                  src={`${baseURL}/marketing/graph.png`}
                  width={1019}
                  height={431}
                  layout="responsive"
                />
              </motion.div>
              <motion.div className={s.human}>
                <Image
                  src={`${baseURL}/marketing/human.png`}
                  width={1084}
                  height={586}
                  layout="responsive"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* END MARKETING */}

        {/* EDITOR */}
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          className={s.videoEditor}
          animate={videoEditor}
        >
          <div>
            <Image
              src="/assets/images/team/editor/bg.png"
              width={480}
              height={1080}
              quality={100}
              layout="responsive"
            />
          </div>
          <div
            onMouseEnter={() => onSVGAnimate(2)}
            onMouseLeave={() => onSVGAnimateLeave(2)}
            className="sw-absolute sw-inset-0"
          >
            <motion.div
              animate={svgTwoControl}
              className="sw-relative sw-w-full sw-h-full"
            >
              <motion.div className={s.editor}>
                <Image
                  src={`${baseURL}/editor/editor.png`}
                  width={676}
                  height={792}
                  layout="responsive"
                />
              </motion.div>
              <motion.div className={s.pc}>
                <Image
                  src={`${baseURL}/editor/PC.png`}
                  width={735}
                  height={492}
                  layout="responsive"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* END EDITOR */}

        {/* DESIGNER */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ y: -300, opacity: 0 }}
          className={s.marketing}
          animate={marketing}
        >
          <div>
            <Image
              src="/assets/images/team/designer/bg.png"
              width={480}
              height={1080}
              quality={100}
              layout="responsive"
            />
          </div>
          <div
            onMouseEnter={() => onSVGAnimate(3)}
            onMouseLeave={() => onSVGAnimateLeave(3)}
            className="sw-absolute sw-inset-0"
          >
            <motion.div
              animate={svgThreeControl}
              className="sw-relative sw-w-full sw-h-full"
            >
              {/* <motion.div className={s.designTable} animate={designerTable}>
                <Image
                  src={`${baseURL}/designer/designer_table.svg`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </motion.div> */}
              <motion.div className={s.design}>
                <Image
                  src={`${baseURL}/designer/designer.png`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* END DESIGNER */}

        {/* CONTENT */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ y: 300, opacity: 0 }}
          className={s.content}
          animate={content}
        >
          <div>
            <Image
              src="/assets/images/team/content/ContentBG.png"
              width={480}
              height={1080}
              quality={100}
              layout="responsive"
            />
          </div>

          <div
            onMouseEnter={() => onSVGAnimate(4)}
            onMouseLeave={() => onSVGAnimateLeave(4)}
            className="sw-absolute sw-inset-0"
          >
            <motion.div
              animate={svgFourControl}
              className="sw-relative sw-w-full sw-h-full"
            >
              <motion.div className={s.calendarOne}>
                <Image
                  src={`${baseURL}/content/calendar.png`}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </motion.div>
              <motion.div className={s.calendarTwo}>
                <Image
                  src={`${baseURL}/content/calendar_2.png`}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </motion.div>
              <motion.div className={s.team}>
                <Image
                  src={`${baseURL}/content/team.png`}
                  width={80}
                  height={80}
                  layout="responsive"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* END CONTENT */}
      </div>
    </MediaContextProvider>
  );
};

export default Team;
