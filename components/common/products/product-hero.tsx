import { FC } from 'react';
import Image from 'next/image';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';
import Button from '../../ui/button/button';
import { Container } from '../../layout';
import s from './product.module.scss';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

interface Props {
  product: any;
  cl?: string;
}

const ProductHero: FC<Props> = ({ product, cl }) => {
  const { title, content, link, imgSrc } = product;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  return (
    <div className="sw-relative sw-inset-0 sw-w-screen sw-h-screen">
      <Image
        src={imgSrc}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <div className="sw-absolute sw-inset-0 sw-z-20">
        <Container cl="sw-h-full">
          <div
            className={cn(
              'sw-w-full 3xl:sw-w-5/12 sw-h-1/2 sw-flex sw-justify-center sw-flex-col sw-relative',
              s.overrideContainer
            )}
          >
            <Heading cl="sw-text-gradient" h={isDesktopOrLaptop ? 'h4' : 'h5'}>
              {title}
            </Heading>
            <div className={cn('sw-my-xsm', s.content)}>
              <Paragraph>{content}</Paragraph>
            </div>
            <Button cl="sw-w-1/3 md:sw-w-1/4" text="Xem video" type="solid" />
          </div>
        </Container>
      </div>
      <div className="sw-absolute sw-w-full sw-h-full sw-z-10 sw-slide-overide"></div>
    </div>
  );
};

export default ProductHero;
