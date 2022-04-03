import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../../ui/typo/paragraph';
import SubscribeForm from '../subscribe/subscribe';
import MenuGlow from '../../glows/menu-glow';
import Infor from '../../ui/infor/infor';
import { Container } from '../../layout';
import { useMediaQuery } from 'react-responsive';
import { Media, MediaContextProvider } from '../../../lib/media';
import { useTranslation } from 'react-i18next';

interface Props {}

const Menu: FC<Props> = () => {
  const { t } = useTranslation('common');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  return (
    <MediaContextProvider>
      <div>
        <Media greaterThan="sm">
          <div className="sw-absolute sw-inset-0 sw-z-1">
            <MenuGlow />
          </div>
        </Media>
        <Container cl="sw-flex">
          {/* Navigation */}
          <div className="sw-flex sw-flex-col sw-w-full sw-items-center sw-h-screen sw-justify-center sw-text-h5 md:sw-text-h4 lg:sw-text-h2 xl:sw-items-start sw-text-gradient 3xl:sw-text-h1 sw-font-bold xl:sw-w-1/2 sw-z-10">
            <div className="sw-mb-md md:sw-mb-0 sw-flex sw-flex-col sw-items-center">
              <Link href="/">
                <a className="sw-mb-sm md:sw-mb-md"> {t('menu__home')} </a>
              </Link>
              <Link href="/services">
                <a className="sw-mb-sm md:sw-mb-md"> {t('menu__services')} </a>
              </Link>
              <Link href="/about">
                <a className="sw-mb-sm md:sw-mb-md"> {t('menu__about')} </a>
              </Link>
              <Link href="/blogs">
                <a className="sw-mb-sm md:sw-mb-md"> {t('menu__news')} </a>
              </Link>
              <Link href="/contact">
                <a className="sw-mb-sm md:sw-mb-md"> {t('menu__contact')} </a>
              </Link>
            </div>
          </div>

          {isDesktopOrLaptop ? null : (
            <div className="sw-mb-xsm sw-absolute sw-bottom-0 sw-left-0 sw-right-0 sw-w-full sw-flex sw-justify-center">
              <div className="sw-w-4/5 md:sw-w-3/5">
                <SubscribeForm />
                <div className="sw-flex sw-w-full sw-justify-center sw-my-sm">
                  <Link href="https://www.facebook.com/sworldmultimedia">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/fb.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/s-worldmultimedia">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/linkedin.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/yt.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/ig.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Infor */}
          {isDesktopOrLaptop ? (
            <div className="sw-w-full xl:sw-w-1/2 sw-z-10">
              <div className="sw-flex sw-flex-col sw-justify-center sw-w-4/5 sw-mx-auto  sw-h-screen">
                <div className="sw-mb-xsm">
                  <Infor />
                </div>

                <div className="sw-mb-xsm">
                  <Paragraph cl="sw-mb-sm">{t('subscribe__label')}</Paragraph>
                  <SubscribeForm cl="sw-w-full md:sw-w-11/12 xl:sw-w-10/12 sw-h-12" />
                </div>

                <div className="sw-flex sw-mb-xsm">
                  <Link href="https://www.facebook.com/sworldmultimedia">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/fb.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/s-worldmultimedia">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/linkedin.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/yt.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A">
                    <a className="sw-w-6 sw-mr-3">
                      <Image
                        src="/assets/images/socials/ig.png"
                        width={16}
                        height={17}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>

                <Paragraph cl="sw-mb-md">
                  S-World © 2021. All Rights Reserved.
                </Paragraph>
              </div>
            </div>
          ) : null}
        </Container>
      </div>
    </MediaContextProvider>
  );
};

export default Menu;
