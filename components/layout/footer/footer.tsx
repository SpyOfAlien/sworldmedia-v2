import { Container } from '../container';
import Infor from '../../ui/infor/infor';
import SubscribeForm from '../../common/subscribe/subscribe';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Facebook from '../../icons/facebook';
import Linkedin from '../../icons/linkedin';
import Youtube from '../../icons/youtube';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="sw-py-8 sw-bg-background">
      <Container>
        <div className="sw-flex sw-flex-col lg:sw-flex-row sw-py-12">
          <div className="sw-w-full sw-flex sw-pl-6 sw-mb-12 lg:sw-mb-0 lg:sw-ml-0 lg:sw-w-3/5">
            <div className="sw-w-full lg:sw-w-1/2">
              <Infor />
              <div className="sw-flex sw-w-full sw-justify-center sw-mt-8">
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
          <div className="sw-w-full lg:sw-w-2/5">
            <SubscribeForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
