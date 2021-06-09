import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/layout';
import Team from '../components/team/team';
import Heading from '../components/ui/typo/heading';
import Paragraph from '../components/ui/typo/paragraph';
import { Media, MediaContextProvider } from '../lib/media';
import { Head } from 'next/document';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const AboutUs = ({ locale }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isVn = router.locale === 'vn';

  return (
    <MediaContextProvider>
      <Head>
        <title>{isVn ? 'Đội ngũ' : 'Teams'}</title>
        <link rel="canonical" href="https://www.s-worldmedia.com/about" />
        <meta
          name="description"
          content={
            isVn
              ? 'S-World mong muốn nhân những giá trị kết nối và kiến tạo những giá trị mới khác biệt từ multimedia (đa phương tiện)'
              : 'S-World hopes to connect and create new values from multimedia'
          }
        />
        <meta name="homepage" content="false" />
        <meta name="referrer" content="unsafe-url" />
        <meta name="referrer" content="always" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            isVn
              ? 'S-World mong muốn nhân những giá trị kết nối và kiến tạo những giá trị mới khác biệt từ multimedia (đa phương tiện)'
              : 'S-World hopes to connect and create new values from multimedia'
          }
        />
        <meta
          property="og:title"
          content={isVn ? 'Đội ngũ Sworldmedia' : 'Sworldmedia teams'}
        />
        <meta property="og:url" content="https://www.s-worldmedia.com/about" />
        <meta
          name="twitter:description"
          content={
            isVn
              ? 'S-World mong muốn nhân những giá trị kết nối và kiến tạo những giá trị mới khác biệt từ multimedia (đa phương tiện)'
              : 'S-World hopes to connect and create new values from multimedia'
          }
        />
        <meta
          name="twitter:title"
          content={isVn ? 'Đội ngũ Sworldmedia' : 'Sworldmedia team'}
        />
      </Head>
      <Container cl="sw-my-header">
        <section className="sw-text-center sw-py-4">
          <Media greaterThanOrEqual="lg">
            <Heading h="h3">{t('aboutus__title')}</Heading>
          </Media>
          <Media lessThan="lg">
            <Heading h="h4">{t('aboutus__title')}</Heading>
          </Media>
        </section>
        <section className="sw-flex sw-flex-col-reverse sw-justify-between xl:sw-flex-row sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content1')}</Paragraph>
            </div>
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content2')}</Paragraph>
            </div>
            <div className="sw-mb-6">
              <Paragraph>{t('aboutus__story__content3')}</Paragraph>
            </div>
          </div>
          <div className="sw-w-full xl:sw-w-48 sw-mb-12 xl:sw-mb-0 sw-flex sw-items-center">
            <div className="sw-w-full">
              <Image
                src="/assets/svg/team.svg"
                width={774}
                height={492}
                layout="responsive"
                quality={100}
              />
            </div>
          </div>
        </section>
        <section className="sw-flex sw-flex-col xl:sw-flex-row sw-justify-between sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <Image
              src="/assets/svg/ceo.svg"
              width={466}
              height={593}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-my-6">
              <Media greaterThanOrEqual="lg">
                <Heading h="h3">{t('aboutus__ceo')}</Heading>
              </Media>
              <Media lessThan="lg">
                <Heading h="h4">{t('aboutus__ceo')}</Heading>
              </Media>
            </div>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content1')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content2')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content3')}</Paragraph>
            <Paragraph cl="sw-mb-4">{t('aboutus__ceo__content4')}</Paragraph>
          </div>
        </section>
        <section className="sw-my-24 xl:sw-my-56 2xl:sw-my-44">
          <Team />
        </section>
        <section className="sw-flex sw-flex-col-reverse sw-justify-between xl:sw-flex-row sw-my-8 xl:sw-my-32 2xl:sw-my-40">
          <div className="sw-w-full xl:sw-w-48">
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Giá trị kết nối khác biệt
              </Heading>
              <Paragraph>
                Khiêm tốn đặt bước chân lên bản đồ truyền thông Việt Nam và khát
                vọng xa hơn là thế giới, S-World mong muốn nhân những giá trị
                kết nối và kiến tạo những giá trị mới khác biệt từ multimedia
                (đa phương tiện).
              </Paragraph>
            </div>
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Lan Tỏa
              </Heading>
              <Paragraph>
                Chúng tôi luôn sẵn sàng mang những ý tưởng, dự án, sản phẩm,
                thương hiệu của bạn lan tỏa. Không chỉ với lượng mà còn là chất
                riêng; không chỉ cho hiện tại mà còn tùy tương lai bền vững.
                Bằng sự cầu toàn và tràn đầy khát vọng như hình ảnh một chú ngựa
                phi nước đại, sẵn sàng tiến vào một thế giới rộng lớn còn ẩn
                chứa vô số điều kỳ diệu để khám phá.
              </Paragraph>
            </div>
            <div className="sw-mb-6">
              <Heading cl="sw-mb-4" h="h5">
                Cam kết
              </Heading>
              <Paragraph>
                S-World sẽ luôn đến với bạn bằng trái tim chân thành, nhiệt
                huyết, bền bỉ và sáng tạo trên con đường bước tới tương lai.
              </Paragraph>
            </div>
          </div>
          <div className="sw-w-full xl:sw-w-48 sw-mb-12 xl:sw-mb-0 sw-flex sw-items-center">
            <div className="sw-w-full">
              <Image
                src="/assets/svg/team.svg"
                width={774}
                height={492}
                layout="responsive"
                quality={100}
              />
            </div>
          </div>
        </section>
      </Container>
    </MediaContextProvider>
  );
};

export default AboutUs;
