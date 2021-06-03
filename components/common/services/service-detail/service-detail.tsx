import { FC } from 'react';
import Image from 'next/image';
import Paragraph from '../../../ui/typo/paragraph';
import Label from '../../../ui/typo/label';
import { Container, HomeContainer } from '../../../layout';
import cn from 'classnames';
import s from './service-detail.module.scss';
import Heading from '../../../ui/typo/heading';
import Arrow from '../../../icons/arrow';
import ServiceGlow from '../../../glows/service-glow';
import { useMediaQuery } from 'react-responsive';

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
  const tablet = useMediaQuery({
    query: '(min-device-width: 768px)',
  });
  const largeScreen = useMediaQuery({
    query: '(min-device-width: 1920px)',
  });
  const mediumScreen = useMediaQuery({
    query: '(min-device-width: 1920px)',
  });

  return (
    <div>
      {tablet && (
        <div className="sw-absolute sw-inset-0">
          <ServiceGlow />
        </div>
      )}
      <HomeContainer cl="sw-flex sw-h-screen sw-items-center" isVisible={true}>
        <div className="sw-flex sw-flex-col sw-justify-end sw-h-full">
          <div className="sw-w-full sw-mb-12">
            <div className="sw-w-full xl:sw-w-1/2">
              <Image
                src={data.icon}
                width={largeScreen ? 200 : 120}
                height={largeScreen ? 200 : 120}
                alt={data.name}
              />
              <Heading h={mediumScreen ? 'h3' : 'h4'}>{data.name}</Heading>
              <Paragraph>{data.content}</Paragraph>
            </div>
          </div>
          <div className="sw-w-full xl:sw-mb-12">
            <div
              className={cn(
                'sw-grid sw-grid-cols-1 md:sw-grid-cols-2 xl:sw-grid-cols-4',
                s.container
              )}
            >
              {data.subService.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'sw-bg-card sw-mb-4 xl:sw-mb-0 sw-flex sw-flex-col sw-justify-between sw-cursor-pointer',
                    s.box
                  )}
                >
                  <Heading gradient={false} h="h6" cl="sw-text-brown">
                    {item}
                  </Heading>
                  <div className="sw-w-full sw-flex sw-justify-end">
                    <Arrow width={largeScreen ? '50px' : '30px'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default ServiceDetail;
