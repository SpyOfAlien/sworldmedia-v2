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
import ProductSlider from '../../products/slider';

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
  products?: any;
  cl?: string;
}

const ServiceDetail: FC<Props> = ({ data, products, cl }) => {
  const { openSubModal, setSubModalView } = useUI();
  const { t } = useTranslation('common');

  const onSubServiceClick = (modal) => {
    openSubModal();
    setSubModalView(modal);
  };

  return (
    <MediaContextProvider>
      <div className={s.ServiceDetail}>
        <Media greaterThanOrEqual="lg">
          <div className="sw-absolute sw-inset-0">
            <ServiceGlow />
          </div>
        </Media>
        <Container>
          <div className="sw-flex sw-flex-col sw-justify-end sw-h-full">
            <div className="sw-w-full sw-mb-12">
              <div className="sw-w-full xl:sw-w-1/2">
                <Media greaterThanOrEqual="md">
                  <Image
                    src={data.icon}
                    width={200}
                    height={200}
                    alt={data.name}
                  />
                </Media>
                <Media lessThan="md">
                  <Image
                    src={data.icon}
                    width={120}
                    height={120}
                    alt={data.name}
                  />
                </Media>
                <Media greaterThanOrEqual="md">
                  <Heading cl="sw-py-4" h="h3">
                    {t(data.name)}
                  </Heading>
                </Media>
                <Media lessThan="md">
                  <Heading cl="sw-py-4" h="h5">
                    {t(data.name)}
                  </Heading>
                </Media>

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
                      <Media greaterThanOrEqual="md">
                        <Arrow width="50px" />
                      </Media>
                      <Media lessThan="md">
                        <Arrow width="30px" />
                      </Media>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div className={cn('sw-my-32', s.ServiceDetail__products)}>
          {products && <ProductSlider products={products} />}
        </div>
      </div>
    </MediaContextProvider>
  );
};

export default ServiceDetail;
