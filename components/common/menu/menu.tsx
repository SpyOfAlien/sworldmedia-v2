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
import Infor from '../../ui/infor/infor';

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
            <Infor />
          </div>

          <div className="sw-mb-xsm">
            <Paragraph cl="sw-mb-sm">Đăng ký nhận tin tức mới</Paragraph>
            <SubscribeForm cl="sw-w-full md:sw-w-11/12 xl:sw-w-10/12" />
          </div>

          <div className="sw-flex sw-mb-xsm">
            <Facebook style={{ marginRight: '40px' }} />
            <Linkedin style={{ marginRight: '40px' }} />
            <Youtube style={{ marginRight: '40px' }} />
          </div>

          <Paragraph cl="sw-mb-md">
            S-World © 2021. All Rights Reserved.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Menu;
