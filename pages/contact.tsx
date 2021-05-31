import Image from 'next/image';
import ContactGlow from '../components/glows/contact-glow';
import Facebook from '../components/icons/facebook';
import Linkedin from '../components/icons/linkedin';
import WhiteLogo from '../components/icons/white-logo';
import Youtube from '../components/icons/youtube';
import Infor from '../components/ui/infor/infor';
import { useMediaQuery } from 'react-responsive';
import Paragraph from '../components/ui/typo/paragraph';
import Input from '../components/ui/input/input';
import { useState } from 'react';
import Tetxarea from '../components/ui/input/textarea';
import Button from '../components/ui/button/button';
import Heading from '../components/ui/typo/heading';
import SubscribeForm from '../components/common/subscribe/subscribe';

const ContactPage = () => {
  // State
  const [name, setName] = useState('');

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  return (
    <div className="sw-flex sw-w-full sw-px-12 md:sw-px-24 xl:sw-px-0 xl:sw-p-0 sw-flex-col-reverse sw-pt-40 sw-flex-col xl:sw-flex-row xl:sw-h-screen sw-bg-background sw-relative">
      {/* <div className="sw-absolute xl:sw-inset-0">
        <ContactGlow />
      </div> */}
      <div className="sw-flex sw-flex-col xl:sw-flex-row sw-w-full xl:sw-w-1/2">
        <div className="sw-w-full sw-mb-24 sw-mx-auto xl:sw-h-screen sw-relative">
          {isDesktopOrLaptop ? (
            <Image
              src="/assets/images/others/lm81.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          ) : (
            <div>
              <Image
                src="/assets/images/others/lm81.png"
                layout="responsive"
                width={280}
                height={550}
                className="sw-rounded-sm"
              />
            </div>
          )}
        </div>
        <div className="sw-flex sw-flex-col sw-justify-between xl:sw-pl-8 3xl:sw-pl-16 xl:sw-py-12">
          <WhiteLogo />
          <Infor />
          <div>
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
      <div className="sw-w-full sw-mb-24 xl:sw-mb-0 xl:sw-w-1/2 xl:sw-px-12 xl:sw-py-16 3xl:sw-px-24 xl:sw-py-24">
        <Heading
          cl="sw-text-gradient sw-mb-md sw-text-center"
          h={isDesktopOrLaptop ? 'h3' : 'h5'}
        >
          Liên hệ chúng tôi
        </Heading>
        <div className="sw-flex sw-flex-col xl:sw-flex-row xl:sw-flex-wrap xl:sw-justify-between">
          <Input
            cl="sw-mb-md xl:sw-w-48"
            placeholder="Joe Biden"
            label="Tên:"
            onChange={(data) => setName(data)}
          />
          <Input
            cl="sw-mb-md xl:sw-w-48"
            placeholder="035 6688 619"
            label="Số điện thoại:"
            onChange={(data) => setName(data)}
          />
          <Input
            cl="sw-mb-md xl:sw-w-48"
            placeholder="example.sworld@gmail.com"
            label="Mail: "
            onChange={(data) => setName(data)}
          />
          <Input
            cl="sw-mb-md xl:sw-w-48"
            placeholder="Xây dựng thương hiệu"
            label="Dịch vụ bạn cần:"
            onChange={(data) => setName(data)}
          />
        </div>
        <div>
          <Tetxarea
            rows={isDesktopOrLaptop ? 4 : 6}
            cl="sw-mb-md"
            placeholder="Tin nhắn của bạn"
            label="Dịch vụ bạn cần:"
            onChange={(data) => setName(data)}
          />
        </div>

        <div className="sw-w-full xl:sw-w-2/5">
          <Button text="Gửi tin nhắn" type="gradient" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
