import Image from 'next/image';
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
import { useTranslation } from 'react-i18next';
import { Media, MediaContextProvider } from '../lib/media';

const ContactPage = () => {
  // State
  const [name, setName] = useState('');
  const { t } = useTranslation('contact');

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  const onSubscribe = () => {};

  return (
    <MediaContextProvider>
      <div className="sw-flex sw-w-full sw-px-12 md:sw-px-24 xl:sw-px-0 xl:sw-p-0 sw-flex-col-reverse sw-pt-40 sw-flex-col xl:sw-flex-row xl:sw-h-screen sw-relative">
        <Media greaterThanOrEqual="lg">
          <div className="sw-absolute sw-inset-0 sw-w-full">
            <Image
              src="/assets/svg/contact-glow.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Media>
        <div className="sw-flex sw-flex-col xl:sw-flex-row sw-w-full xl:sw-w-1/2">
          <div className="sw-w-full sw-mb-24 sw-mx-auto xl:sw-h-screen">
            <Media greaterThanOrEqual="lg">
              <div className="sw-relative sw-w-full sw-h-screen">
                <Image
                  src="/assets/images/others/lm81.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </Media>
            <Media lessThan="lg">
              <div>
                <Image
                  src="/assets/images/others/lm81.png"
                  layout="responsive"
                  width={280}
                  height={550}
                  className="sw-rounded-sm"
                />
              </div>
            </Media>
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
        <div className="sw-w-full sw-mb-24 xl:sw-mb-0 xl:sw-w-1/2 xl:sw-px-12 xl:sw-py-16 3xl:sw-px-24 xl:sw-py-24 sw-z-10">
          <Heading
            cl="sw-text-gradient sw-mb-md sw-text-center"
            h={isDesktopOrLaptop ? 'h3' : 'h5'}
          >
            {t('hehe')}
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
            <Button
              cl="sw-h-10"
              text="Gửi tin nhắn"
              type="gradient"
              onclick={onSubscribe}
            />
          </div>
        </div>
      </div>
    </MediaContextProvider>
  );
};

export default ContactPage;
