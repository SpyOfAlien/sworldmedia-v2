import { Container } from '../container';
import Infor from '../../ui/infor/infor';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import WhiteLogo from '../../icons/white-logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="sw-pt-8  sw-bg-footerBg">
      <Container>
        <div className="sw-flex sw-flex-col-reverse lg:sw-flex-row sw-py-12">
          <div className="sw-w-full sw-flex sw-justify-center lg:sw-ml-0 lg:sw-w-3/5">
            <div className="sw-w-full lg:sw-w-3/5">
              <div className="sw-mb-8">
                <WhiteLogo />
              </div>
              <Infor heading={false} />
              <div className="sw-flex sw-w-full sw-mt-8 sw-pl-8 lg:sw-pl-0">
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
                <Link href="https://www.linkedin.com/company/s-worldmultimedia/">
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
              </div>
            </div>
          </div>
          <div className="sw-w-full sw-flex lg:sw-w-2/5 sw-pl-8 sw-mb-8 lg:sw-pl-0">
            <div className="sw-flex sw-flex-col">
              <Link href="/">
                <a className="sw-mb-2 sw-text-white">{t('menu__home')}</a>
              </Link>
              <Link href="/services">
                <a className="sw-mb-2 sw-text-white">{t('menu__services')}</a>
              </Link>
              <Link href="/about">
                <a className="sw-mb-2 sw-text-white">{t('menu__about')}</a>
              </Link>
              <Link href="/blogs">
                <a className="sw-mb-2 sw-text-white">{t('menu__news')}</a>
              </Link>
              <Link href="/contact">
                <a className="sw-mb-2 sw-text-white">{t('menu__contact')}</a>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </Container>

      <div className="sw-bg-white sw-h-12 sw-flex sw-items-center sw-justify-center lg:sw-justify-between sw-px-12">
        <p className="sw-text-modal sw-font-semibold">
          S-World 2022. All Rights Reserved
        </p>
        <p>
          <span className="sw-text-modal sw-font-semibold">
            Terms of Service
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
