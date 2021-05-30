import { FC } from 'react';
import Link from 'next/link';
import WhiteLogo from '../../icons/white-logo';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';
import Phone from '../../icons/phone';
import Gmail from '../../icons/gmail';
import Location from '../../icons/location';
import Facebook from '../../icons/facebook';
import Youtube from '../../icons/youtube';
import Linkedin from '../../icons/linkedin';
import SubscribeForm from '../subscribe/subscribe';
import MenuGlow from '../../glows/menu-glow';

interface Props {}

const Menu: FC<Props> = () => {
  return (
    <div className="sw-flex">
      <div className="sw-absolute sw-inset-0 sw-z-1">
        <MenuGlow />
      </div>
      {/* Navigation */}
      <div className="sw-flex sw-flex-col sw-text-gradient sw-text-h1 sw-font-bold sw-w-1/2 sw-z-10">
        <Link href="/">
          <a className="sw-mb-md"> Trang chủ </a>
        </Link>
        <Link href="/service">
          <a className="sw-mb-md"> Dịch vụ </a>
        </Link>
        <Link href="/about">
          <a className="sw-mb-md"> Về chúng tôi </a>
        </Link>
        <Link href="/blogs">
          <a className="sw-mb-md"> Tin tức </a>
        </Link>
        <Link href="/contact">
          <a className="sw-mb-md"> Liên hệ </a>
        </Link>
      </div>

      {/* Infor */}
      <div className="sw-w-1/2 sw-z-10">
        <div className="sw-flex sw-flex-col sw-w-4/5 sw-mx-auto">
          <div className="sw-mb-md">
            <WhiteLogo />
          </div>

          <div className="sw-mb-xsm">
            <Heading h="h6" cl="sw-text-paragraph sw-mb-xsm">
              Thông tin liên hệ
            </Heading>
            <span className="sw-flex sw-mb-sm">
              <span className="sw-block">
                <Phone />
              </span>
              <Paragraph cl="sw-ml-4 sw-font-normal">
                (+84) 817 701 604
              </Paragraph>
            </span>
            <span className="sw-flex sw-mb-sm">
              <span className="sw-block">
                <Gmail />
              </span>
              <Paragraph cl="sw-ml-4 sw-font-normal">
                info@s-worldmedia.com
              </Paragraph>
            </span>
            <span className="sw-flex sw-mb-sm">
              <span className="sw-block">
                <Location />
              </span>
              <Paragraph cl="sw-ml-4 sw-font-normal">
                31.OT.09, Landmark 81, Vinhomes Central Park, 720A Điện Biên
                Phủ, Phường 22, Quận Bình Thạnh, TP.HCM
              </Paragraph>
            </span>
          </div>

          <div className="sw-mb-xsm">
            <Paragraph cl="sw-mb-sm">Đăng ký nhận tin tức mới</Paragraph>
            <SubscribeForm cl="sw-w-4/5" />
          </div>

          <div className="sw-flex">
            <Facebook style={{ marginRight: '40px' }} />
            <Linkedin style={{ marginRight: '40px' }} />
            <Youtube style={{ marginRight: '40px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
