import { FC } from 'react';
import Link from 'next/link';
import WhiteLogo from '../../icons/white-logo';
import Paragraph from '../../ui/typo/paragraph';
import Facebook from '../../icons/facebook';
import Youtube from '../../icons/youtube';
import Linkedin from '../../icons/linkedin';
import SubscribeForm from '../subscribe/subscribe';
import MenuGlow from '../../glows/menu-glow';
import Infor from '../../ui/infor/infor';
import { Container } from '../../layout';
import { useMediaQuery } from 'react-responsive';

interface Props {}

const Menu: FC<Props> = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  return (
    <div>
      <div className="sw-absolute sw-inset-0 sw-z-1">
        <MenuGlow />
      </div>
      <Container isVisible={true} cl="sw-flex">
        {/* Navigation */}
        <div className="sw-flex sw-flex-col sw-w-full sw-items-center sw-h-screen sw-justify-center sw-text-h5 md:sw-text-h4 lg:sw-text-h2 xl:sw-items-start sw-text-gradient 3xl:sw-text-h1 sw-font-bold xl:sw-w-1/2 sw-z-10">
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

        {isDesktopOrLaptop ? null : (
          <div className="sw-mb-xsm sw-absolute sw-bottom-0 sw-left-0 sw-right-0 sw-w-full sw-flex sw-justify-center">
            <div className="sw-w-4/5 md:sw-w-3/5">
              <SubscribeForm />
              <div className="sw-flex sw-w-full sw-justify-center sw-my-sm">
                <Facebook style={{ width: '25px' }} />
                <Linkedin style={{ margin: '0 20px', width: '25px' }} />
                <Youtube style={{ width: '25px' }} />
              </div>
            </div>
          </div>
        )}

        {/* Infor */}
        {isDesktopOrLaptop ? (
          <div className="sw-w-full xl:sw-w-1/2 sw-z-10">
            <div className="sw-flex sw-flex-col sw-justify-center sw-w-4/5 sw-mx-auto  sw-h-screen">
              <div className="sw-mb-md">
                <WhiteLogo />
              </div>

              <div className="sw-mb-xsm">
                <Infor />
              </div>

              <div className="sw-mb-xsm">
                <Paragraph cl="sw-mb-sm">Đăng ký nhận tin tức mới</Paragraph>
                <SubscribeForm cl="sw-w-full md:sw-w-11/12 xl:sw-w-10/12 sw-h-12" />
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
        ) : null}
      </Container>
    </div>
  );
};

export default Menu;
