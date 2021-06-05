import Image from 'next/image';
import { FC } from 'react';
import { Container } from '../../layout';
import Medium from '../../ui/cards/medium/medium';
import cn from 'classnames';
import s from './about-us.module.scss';
import Glow from '../../glows/glow';

interface Props {
  data: any[];
  cl?: string;
}

const AboutUs: FC<Props> = ({ data, cl }) => {
  return (
    <div
      className={cn(
        'sw-grid sw-grid-cols-1 md:sw-grid-cols-3 sw-w-10/12 sw-mx-auto md:sw-w-full',
        s.grid,
        cl
      )}
    >
      <div
        className={cn(
          'sw-col-start-1 sw-col-end-2 md:sw-col-start-2 sw-flex sw-justify-center sw-items-center',
          s.globe
        )}
      >
        <div className="sw-w-full sw-p-10 sw-relative">
          <div className="sw-absolute sw-inset-0">
            <Glow path="atom-glow" />
          </div>
          <Image
            src="/assets/svg/aboutus.svg"
            width={580}
            height={580}
            layout="responsive"
          />
        </div>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            'sw-flex sw-justify-center md:sw-my-0',
            s[`item-${idx}`]
          )}
        >
          <div className="sw-flex sw-items-center">
            <Medium
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
