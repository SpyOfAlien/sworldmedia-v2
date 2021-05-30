import Image from 'next/image';
import { FC } from 'react';
import Slider from 'react-slick';
import ProductHero from './product-hero';

interface Props {
  products: any[];
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

const ProductSlider: FC<Props> = ({ products }) => {
  const baseUrl = '/assets/images/products';

  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <Image src={`${baseUrl}/${i + 1}.jpg`} width={320} height={180} />
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

  return (
    <div>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <ProductHero key={idx} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
