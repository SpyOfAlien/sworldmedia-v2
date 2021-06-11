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
import { useTranslation } from 'next-i18next';
import { useUI } from '../../../../lib/context/ui-context';
import { Media, MediaContextProvider } from '../../../../lib/media';

interface Data {
  name: string;
  label: string;
  icon: string;
  content: any;
  background: string;
  subService: any;
}

interface Props {
  data: Data;
  cl?: string;
}

const ServiceDetail: FC<Props> = ({ data, cl }) => {
  const { openSubModal, setSubModalView } = useUI();

  const tablet = useMediaQuery({
    query: '(min-device-width: 768px)',
  });
  const largeScreen = useMediaQuery({
    query: '(min-device-width: 1920px)',
  });
  const mediumScreen = useMediaQuery({
    query: '(min-device-width: 1920px)',
  });

  const { t } = useTranslation('common');

  const onSubServiceClick = (modal) => {
    openSubModal();

    setSubModalView(modal);
  };

  return (
    <MediaContextProvider>
      <div>
        {tablet && (
          <div className="sw-absolute sw-inset-0">
            <ServiceGlow />
          </div>
        )}

        <div style={{ height: '50%' }} className=" sw-absolute sw-inset-0 ">
          <div
            style={{ top: '60px' }}
            className=" sw-absolute sw-w-4/5 xl:sw-w-1/2 sw-right-0 xl:sw-top-0"
          >
            <Image
              src={data.background}
              layout="responsive"
              width={1225}
              height={764}
            />
          </div>
        </div>

        <HomeContainer
          cl="sw-flex md:sw-h-screen sw-items-center"
          isVisible={true}
        >
          <div className="sw-flex sw-flex-col sw-justify-end sw-h-full">
            <div className="sw-w-full sw-mb-12">
              <div className="sw-w-full xl:sw-w-1/2">
                <Image
                  src={data.icon}
                  width={largeScreen ? 200 : 120}
                  height={largeScreen ? 200 : 120}
                  alt={data.name}
                />
                <Heading cl="sw-py-4" h={mediumScreen ? 'h3' : 'h5'}>
                  {t(data.name)}
                </Heading>

                {typeof data.content !== 'string' ? (
                  data.content.map((item, idx) => (
                    <Paragraph key={idx}>{t(item)}</Paragraph>
                  ))
                ) : (
                  <Paragraph>{t(data.content)}</Paragraph>
                )}
              </div>
            </div>
            <div className="sw-w-full">
              <div
                className={cn(
                  'sw-grid sw-grid-cols-1 md:sw-grid-cols-2 xl:sw-grid-cols-4',
                  s.container
                )}
              >
                {data.subService.map((item, idx) => (
                  <div
                    onClick={() => onSubServiceClick(item.modal)}
                    key={idx}
                    className={cn(
                      'sw-bg-card sw-mb-4 xl:sw-mb-0 sw-flex sw-flex-col sw-justify-between sw-cursor-pointer sw-relative',
                      s.box
                    )}
                  >
                    <p className="sw-text-brown sw-font-bold">
                      {t(item.title)}
                    </p>
                    <div
                      style={{ right: '16px', bottom: '8px' }}
                      className="sw-w-full sw-flex sw-justify-end sw-absolute"
                    >
                      <Arrow width={largeScreen ? '50px' : '30px'} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HomeContainer>
      </div>
    </MediaContextProvider>
  );
};

export default ServiceDetail;
