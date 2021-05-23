import { FC } from 'react';
import Image from 'next/image';
import Paragraph from '../typo/paragraph';
import Label from '../typo/label';
import { Container } from '../../layout';
import cn from 'classnames';
import s from './service-detail.module.scss';
import Heading from '../typo/heading';
import Arrow from '../../icons/arrow';

interface Data {
  name: string;
  label: string;
  icon: string;
  content: string;
  subService: string[];
}

interface Props {
  data: Data;
  cl?: string;
}

const ServiceDetail: FC<Props> = ({ data, cl }) => {
  return (
    <Container>
      <div className="sw-flex">
        <div className="sw-w-full xl:sw-w-1/2">
          <div className="sw-w-10/12">
            <Image src={data.icon} width={200} height={200} alt={data.name} />

            <Label cl="sw-my-8">{data.name}</Label>
            <Paragraph>{data.content}</Paragraph>
          </div>
        </div>
        <div className="sw-w-full xl:sw-w-1/2">
          <div className={cn('sw-w-10/12 sw-flex sw-flex-wrap', s.container)}>
            {data.subService.map((item) => (
              <div
                className={cn(
                  'sw-w-2/5 sw-bg-modal hover:sw-bg-lightModal sw-mr-4 sw-mb-4 sw-flex sw-flex-col sw-justify-between',
                  s.box
                )}
              >
                <Heading h="h6" cl="sw-text-gradient">
                  {item}
                </Heading>
                <div className="sw-w-full sw-flex sw-justify-end">
                  <Arrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetail;
