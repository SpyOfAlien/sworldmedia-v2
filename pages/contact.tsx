import Image from 'next/image';
import WhiteLogo from '../components/icons/white-logo';
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
import { useUI } from '../lib/context/ui-context';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
// import * as gtag from '../lib/gtag';
import { useSection } from '../lib/context/section-context';
import { useRouter } from 'next/router';
import { CorporateContactJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const ContactPage = ({ locale }) => {
  //Context
  const { openSubModal, setSubModalView, setConfirmData } = useUI();
  const { onSetSection } = useSection();
  const router = useRouter();
  const isVn = router.locale === 'vn';

  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation('common');

  const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1280px)',
  });

  const handleGoHome = () => {
    onSetSection(1);
    router.push('/');
  };

  const onSubscribe = () => {
    // gtag.event({
    //   action: 'submit_form',
    //   category: 'Contact',
    //   label: name || email || phone,
    //   value: message,
    // });

    let error;
    if (!name && !email && !email) {
      error = 'contact__personal__required_error';
    }
    if (email && !emailRegex.test(email)) {
      error = 'contact__email__error';
    }
    if (!message) {
      error = 'contact__message__required_error';
    }

    if (error) {
      setConfirmData({ title: 'Failed', message: error });
      setSubModalView('CONFIRM_MODAL');
      openSubModal();
    } else {
      fetch(
        'https://3cegmccez7.execute-api.ap-southeast-1.amazonaws.com/dev/feedback',
        {
          method: 'POST',
          body: JSON.stringify({
            body: {
              name: name,
              email: email,
              phone: phone,
              subject: subject,
              message: message,
            },
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setConfirmData(data);
          setSubModalView('CONFIRM_MODAL');
          openSubModal();
        })
        .catch((err) => {
          setConfirmData({ title: 'Failed', message: err });
          setSubModalView('CONFIRM_MODAL');
          openSubModal();
        });
    }
  };

  return (
    <MediaContextProvider>
      <NextSeo
        title={isVn ? 'Li??n h???' : 'Contact'}
        description={
          isVn ? 'Li??n h??? v???i Sworldmedia' : 'Contact with Sworldmedia'
        }
        canonical="https://www.s-worldmedia.com/contact"
        openGraph={{
          type: 'website',
          url: 'https://www.s-worldmedia.com/contact',
          title: isVn ? 'Li??n h???' : 'Contact',
          description: isVn
            ? 'Li??n h??? v???i Sworldmedia'
            : 'Contact with Sworldmedia',
        }}
      />

      <CorporateContactJsonLd
        url="https://www.s-worldmedia.com"
        logo="https://www.s-worldmedia.com/logo.png"
        contactPoint={[
          {
            telephone: '(+84) 817 701 604',
            contactType: 'customer service',
            areaServed: 'VN',
            availableLanguage: ['English', 'Vietnamese'],
          },
        ]}
      />

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
          <div className="sw-flex sw-flex-col sw-justify-center sw-px-8 lg:sw-px-24">
            <div className="sw-my-8">
              <Infor />
            </div>
            <div>
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
              </div>

              <Paragraph cl="sw-mb-md">
                S-World ?? 2021. All Rights Reserved.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="sw-w-full sw-mb-24 xl:sw-mb-0 xl:sw-w-1/2 xl:sw-px-12 xl:sw-py-16 3xl:sw-px-24 xl:sw-py-24 sw-z-10">
          <Heading
            cl="sw-text-gradient sw-mb-md sw-text-center"
            h={isDesktopOrLaptop ? 'h3' : 'h5'}
          >
            {t('contact__title')}
          </Heading>

          <div className="sw-flex sw-flex-col xl:sw-flex-row xl:sw-flex-wrap xl:sw-justify-between">
            <Input
              cl="sw-mb-md xl:sw-w-48"
              placeholder="Sworld Multimedia"
              label={t('contact__name')}
              onChange={(data) => setName(data)}
            />
            <Input
              cl="sw-mb-md xl:sw-w-48"
              placeholder="(+84) 817 701 604"
              label={t('contact__phone')}
              onChange={(data) => setPhone(data)}
            />
            <Input
              cl="sw-mb-md xl:sw-w-48"
              placeholder="example.sworld@gmail.com"
              label={t('contact__mail')}
              onChange={(data) => setEmail(data)}
            />
            <Input
              cl="sw-mb-md xl:sw-w-48"
              placeholder="X??y d???ng th????ng hi???u"
              label={t('contact__service')}
              onChange={(data) => setSubject(data)}
            />
          </div>
          <div>
            <Tetxarea
              rows={isDesktopOrLaptop ? 4 : 6}
              cl="sw-mb-md"
              placeholder="Tin nh???n c???a b???n"
              label={t('contact__message')}
              onChange={(data) => setMessage(data)}
            />
          </div>

          <div className="sw-w-full xl:sw-w-2/5">
            <Button
              cl="sw-h-10"
              text={t('contact__submit_btn')}
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
