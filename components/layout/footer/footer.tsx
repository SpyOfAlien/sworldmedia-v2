import { Container } from '../container';
import Infor from '../../ui/infor/infor';
import SubscribeForm from '../../common/subscribe/subscribe';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Facebook from '../../icons/facebook';
import Linkedin from '../../icons/linkedin';
import Youtube from '../../icons/youtube';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="sw-py-8 ">
      <Container>
        <div className="sw-flex sw-flex-col lg:sw-flex-row sw-py-12">
          <div className="sw-w-full sw-mb-8 lg:sw-mb-0 lg:sw-w-2/5">
            <iframe
              id="map"
              width="100%"
              height="100%"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP}&q=Landmark+81`}
              allowFullScreen
            ></iframe>
          </div>
          <div className="sw-w-full sw-flex sw-justify-center lg:sw-ml-0 lg:sw-w-3/5">
            <div className="sw-w-full lg:sw-w-3/5">
              <Paragraph cl="sw-mb-sm">{t('subscribe__label')}</Paragraph>
              <SubscribeForm cl="sw-mb-8" />
              <Infor heading={false} />
              <div className="sw-flex sw-w-full sw-mt-8">
                <Link href="https://www.facebook.com/sworldmultimedia">
                  <a>
                    <Facebook style={{ marginRight: '40px' }} />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/company/s-worldmultimedia">
                  <a>
                    <Linkedin style={{ marginRight: '40px' }} />
                  </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCzod695AmgnnUeKSSUZ-t1A">
                  <a>
                    <Youtube style={{ marginRight: '40px' }} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
