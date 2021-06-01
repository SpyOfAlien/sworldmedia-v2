import Image from 'next/image';
import { FC } from 'react';
import { Container } from '../../layout';
import Medium from '../../ui/cards/medium/medium';
import cn from 'classnames';
import s from './about-us.module.scss';

interface Props {
  data: any[];
  cl?: string;
}

const AboutUs: FC<Props> = ({ data, cl }) => {
  return (
    <div
      className={cn(
        'sw-grid sw-grid-cols-1 md:sw-grid-cols-3 sw-w-3/4 sw-mx-auto md:sw-w-full',
        s.grid,
        cl
      )}
    >
      <div className="md:sw-col-start-2 sw-flex sw-justify-center sw-items-center">
        <div className="sw-w-full">
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
            'sw-flex sw-justify-center sw-my-12 md:sw-my-0',
            s[`item-${idx}`]
          )}
        >
          <div>
            <Medium icon={item.icon} content={item.content} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
