import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { Container, HomeContainer } from '../components/layout';
import Heading from '../components/ui/typo/heading';
import Paragraph from '../components/ui/typo/paragraph';
import services from '../lib/data/services';
import { Media, MediaContextProvider } from '../lib/media';
import cn from 'classnames';
import Arrow from '../components/icons/arrow';
import { useUI } from '../lib/context/ui-context';
import { useEffect } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const ServicePage = () => {
  const { t } = useTranslation('common');
  const { openSubModal, setSubModalView, displaySubModal } = useUI();

  useEffect(() => {
    displaySubModal && window && window.innerWidth > 768
      ? disableBodyScroll(document.body)
      : clearAllBodyScrollLocks();
  }, [displaySubModal]);

  const onSubServiceClick = (modal) => {
    openSubModal();

    setSubModalView(modal);
  };

  return (
    <MediaContextProvider>
      <div>
        {services.map((data, idx) => (
          <Container key={idx} cl="sw-flex md:sw-h-screen sw-items-center">
            <div className="sw-flex sw-flex-col sw-justify-end sw-h-full">
              <div className="sw-w-full sw-mb-12">
                <div className="sw-w-full xl:sw-w-1/2">
                  <Media greaterThanOrEqual="xxl">
                    <Image
                      src={data.icon}
                      width={200}
                      height={200}
                      alt={data.name}
                    />
                  </Media>
                  <Media lessThan="xxl">
                    <Image
                      src={data.icon}
                      width={120}
                      height={120}
                      alt={data.name}
                    />
                  </Media>
                  <Media greaterThanOrEqual="xxl">
                    <Heading cl="sw-py-4" h="h3">
                      {t(data.name)}
                    </Heading>
                  </Media>
                  <Media lessThan="xxl">
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
                    'sw-h-full sw-mr-0 sw-ml-auto sw-grid sw-grid-cols-1 md:sw-grid-cols-2 xl:sw-grid-cols-4'
                  )}
                >
                  {data.subService.map((item, idx) => (
                    <div
                      style={{
                        height: '11rem',
                        borderRadius: '8px',
                        padding: '2rem',
                      }}
                      onClick={() => onSubServiceClick(item.modal)}
                      key={idx}
                      className={cn(
                        'sw-bg-card sw-mb-4 xl:sw-mb-0 sw-flex sw-flex-col sw-justify-between sw-cursor-pointer sw-mb-4 md:sw-mr-4'
                      )}
                    >
                      <p className="sw-text-brown sw-font-bold">
                        {t(item.title)}
                      </p>
                      <div className="sw-w-full sw-flex sw-justify-end">
                        <Media greaterThanOrEqual="xxl">
                          <Arrow width="50px" />
                        </Media>
                        <Media lessThan="xxl">
                          <Arrow width="30px" />
                        </Media>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        ))}
      </div>
    </MediaContextProvider>
  );
};

export default ServicePage;
