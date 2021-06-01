import Image from 'next/image';
import { FC } from 'react';
import Medium from '../../ui/cards/medium/medium';
import cn from 'classnames';
import s from './whyus.module.scss';

interface Props {
  data: any[];
  cl?: string;
}

const WhyUs: FC<Props> = ({ data, cl }) => {
  return (
    <div className={cn('md:sw-grid-cols-3 md:sw-w-full', s.root, cl)}>
      <div className="md:sw-col-start-2 md:sw-row-start-1 md:sw-row-end-3 sw-flex sw-justify-center sw-items-center">
        <div className="sw-w-full">
          <Image
            src="/assets/svg/whyus.svg"
            width={580}
            height={580}
            layout="responsive"
          />
        </div>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="sw-flex sw-justify-center sw-items-center sw-my-12 md:sw-my-0"
        >
          <Medium icon={item.icon} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
