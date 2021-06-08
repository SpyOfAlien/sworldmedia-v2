import Image from 'next/image';
import { FC } from 'react';
import Slider from 'react-slick';
import ProductHero from './product-hero';
import cn from 'classnames';
import { Media, MediaContextProvider } from '../../../lib/media';
import { Container, HomeContainer } from '../../layout';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';
import Button from '../../ui/button/button';
import s from './product.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  products: any[];
  cl?: string;
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="sw-slide-arrow sw-slide-next" onClick={onClick}>
      <Image
        width={50}
        height={50}
        src="/assets/svg/next.svg"
        alt="next arrow"
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="sw-slide-arrow sw-slide-prev" onClick={onClick}>
      <Image
        width={50}
        height={50}
        src="/assets/svg/back.svg"
        alt="back arrow"
      />
    </div>
  );
};

const ProductSlider: FC<Props> = ({ products, cl }) => {
  const baseUrl = '/assets/images/products/events';
  const { t } = useTranslation();

  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <Image src={`${baseUrl}/${i + 1}.png`} width={320} height={180} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const onWatch = () => {};
  return (
    <MediaContextProvider>
      <div className={s.slideWrapper}>
        <Slider {...settings}>
          {products.map((product, idx) => (
            <div key={idx} className={s.wrapper}>
              <ProductHero product={product} />
              <Media lessThan="lg">
                <Container cl="sw-h-full md:sw-mt-8">
                  <div
                    className={cn(
                      'sw-w-full sw-flex sw-justify-center sw-flex-col sw-relative',
                      s.overrideContainer
                    )}
                  >
                    <div className="sw-my-sm">
                      <Media lessThan="sm">
                        <Heading cl="sw-text-gradient" h="h6">
                          {t(product.title)}
                        </Heading>
                      </Media>
                      <Media at="sm">
                        <Heading cl="sw-text-gradient" h="h5">
                          {t(product.title)}
                        </Heading>
                      </Media>
                      <Media greaterThan="sm">
                        <Heading cl="sw-text-gradient" h="h4">
                          {t(product.title)}
                        </Heading>
                      </Media>
                    </div>
                    <div className={cn('sw-mb-sm', s.content)}>
                      {typeof product.content === 'string' ? (
                        <Paragraph>{t(product.content)}</Paragraph>
                      ) : (
                        product.content.map((item, idx) => (
                          <Paragraph key={idx}>{t(item)}</Paragraph>
                        ))
                      )}
                      <Paragraph>{t(product.content)}</Paragraph>
                    </div>
                    <Button
                      cl="sw-w-1/3 md:sw-w-1/4 sw-h-10"
                      text="Xem video"
                      type="gradient"
                      onclick={onWatch}
                    />
                  </div>
                </Container>
              </Media>
            </div>
          ))}
        </Slider>
      </div>
    </MediaContextProvider>
  );
};

export default ProductSlider;
