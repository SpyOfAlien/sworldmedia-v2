import { FC } from 'react';
import services from '../../../../lib/data/services';
import SmallCard from '../../../ui/cards/small/small';
import { useUI } from '../../../../lib/context/ui-context';
import Image from 'next/image';
import cn from 'classnames';
import Glow from '../../../glows/glow';
import { Media, MediaContextProvider } from '../../../../lib/media';
import Heading from '../../../ui/typo/heading';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

interface Props {
  cl?: string;
}

const ServicePage: FC<Props> = ({ cl }) => {
  const { openModal, closeModal, setModalView } = useUI();
  const { t } = useTranslation('common');

  const openPopup = (view) => {
    openModal();
    setModalView(view);
  };

  const Header = () => {
    return (
      <div className="sw-text-center sw-my-8">
        <Media lessThan="md">
          <Heading h="h5">{t('home__service__title')}</Heading>
        </Media>
        <Media greaterThanOrEqual="md">
          <Heading h="h4">{t('home__service__title')}</Heading>
        </Media>
      </div>
    );
  };

  return (
    <MediaContextProvider>
      <div
        className={cn(
          'xl:sw-flex sw-flex-col md:sw-flex-row sw-items-center sw-justify-center sw-h-full sw-w-10/12 sw-mx-auto md:sw-w-full',
          cl
        )}
      >
        <Media lessThan="md">
          <Header />
        </Media>

        <Media className="sw-w-full md:sw-w-1/3" greaterThanOrEqual="lg">
          <div className=" sw-relative sw-flex sw-flex-col">
            <div className="sw-absolute sw-inset-0">
              <Glow path="atom-glow" />
            </div>
            <Image
              src="/assets/svg/aboutus.svg"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <Header />
        </Media>
        <div className="sw-w-full xl:sw-w-2/3">
          {services.map((item, idx) => (
            <Link key={idx} href={item.href}>
            
            <SmallCard
              
              cl=" sw-ml-auto sw-mb-4 sw-cursor-pointer xl:sw-w-3/4"
              content={t(item.name)}
              icon={item.icon}
              onClick={() => openPopup(item.modal)}
            />
            </Link>
          ))}
        </div>
      </div>
    </MediaContextProvider>
  );
};
export default ServicePage;
