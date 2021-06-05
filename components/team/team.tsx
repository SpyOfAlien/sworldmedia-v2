import Image from 'next/image';
import cn from 'classnames';
import s from './team.module.scss';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Media, MediaContextProvider } from '../../lib/media';

const Team = () => {
  const baseURL = '/assets/svg/team';
  const graph = useAnimation();
  const human = useAnimation();
  const designerTable = useAnimation();
  const designer = useAnimation();
  const editor = useAnimation();
  const pc = useAnimation();
  const calenderOne = useAnimation();
  const calenderTwo = useAnimation();
  const team = useAnimation();

  useEffect(() => {}, []);

  return (
    <MediaContextProvider>
      <div className={cn('sw-w-full sw-h-full sw-relative sw-grid', s.root)}>
        <Media className="sw-absolute sw-inset-0" greaterThanOrEqual="sm">
          {/* Oven */}
          <div>
            <Image
              src={`${baseURL}/other/oven.svg`}
              width={1200}
              height={500}
              layout="responsive"
            />
          </div>
        </Media>
        <Media className="sw-absolute sw-inset-0" greaterThanOrEqual="sm">
          {/* Rocket */}
          <div className="sw-absolute">
            <div className={s.caiDu}>
              <Image
                src={`${baseURL}/other/cai_du.svg`}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <div className={s.rocket}>
              <Image
                src={`${baseURL}/other/rocket.svg`}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </Media>

        {/* Markting */}
        <motion.div className={s.marketingWrapper}>
          <motion.div className={s.graph} animate={graph}>
            <Image
              src={`${baseURL}/marketing/graph.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.human} animate={human}>
            <Image
              src={`${baseURL}/marketing/human.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.globeOne}>
            <Image
              src={`${baseURL}/other/globe.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
        </motion.div>

        {/* Design */}
        <motion.div className={s.designWrapper}>
          <motion.div className={s.designTable} animate={designerTable}>
            <Image
              src={`${baseURL}/designer/designer_table.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.design} animate={designer}>
            <Image
              src={`${baseURL}/designer/designer.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.globeTwo}>
            <Image
              src={`${baseURL}/other/globe.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
        </motion.div>

        {/* Editor */}
        <div className={s.editorWrapper}>
          <motion.div className={s.editor} animate={editor}>
            <Image
              src={`${baseURL}/editor/editor.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.pc} animate={pc}>
            <Image
              src={`${baseURL}/editor/pc.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <div className={s.globeThree}>
            <Image
              src={`${baseURL}/other/globe.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>

        {/* Content */}
        <motion.div className={s.contentWrapper}>
          <motion.div className={s.calendarOne} animate={calenderOne}>
            <Image
              src={`${baseURL}/content/calendar.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.calendarTwo} animate={calenderTwo}>
            <Image
              src={`${baseURL}/content/calendar_2.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <motion.div className={s.team} animate={team}>
            <Image
              src={`${baseURL}/content/team.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </motion.div>
          <div className={s.globeFour}>
            <Image
              src={`${baseURL}/other/globe.svg`}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </motion.div>
      </div>
    </MediaContextProvider>
  );
};

export default Team;
