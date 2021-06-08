import { FC, useRef } from 'react';
import Image from 'next/image';
import Heading from '../../ui/typo/heading';
import Paragraph from '../../ui/typo/paragraph';
import Button from '../../ui/button/button';
import { Container, HomeContainer } from '../../layout';
import s from './product.module.scss';
import cn from 'classnames';
import { Media, MediaContextProvider } from '../../../lib/media';
import { useTranslation } from 'react-i18next';

interface Props {
  product: any;
  cl?: string;
}

const ProductHero: FC<Props> = ({ product, cl }) => {
  const { title, content, link, imgSrc } = product;
  const { t } = useTranslation();

  const imgRef = useRef<HTMLDivElement>();

  const onWatch = () => {};

  return (
    <MediaContextProvider>
      <div className="sw-relative">
        <div ref={imgRef}>
          <Image
            src={imgSrc}
            width={1920}
            height={1080}
            layout="responsive"
            className="sw-z-1"
            quality={100}
          />
        </div>
        <Media greaterThanOrEqual="lg">
          <div className="sw-absolute sw-inset-0 sw-z-20">
            <HomeContainer hasPadding={false} isVisible={true} cl="sw-h-full">
              <div
                className={cn(
                  'sw-w-full xl:sw-w-1/2 3xl:sw-w-5/12 sw-h-1/2 sw-flex sw-justify-center sw-flex-col sw-relative',
                  s.overrideContainer
                )}
              >
                <Media at="sm">
                  <Heading cl="sw-text-gradient" h="h6">
                    {t(title)}
                  </Heading>
                </Media>
                <Media greaterThan="sm">
                  <Heading cl="sw-text-gradient" h="h5">
                    {t(title)}
                  </Heading>
                </Media>
                <div className={cn('sw-my-xsm', s.content)}>
                  {typeof content === 'string' ? (
                    <Paragraph>{t(content)}</Paragraph>
                  ) : (
                    content.map((item, idx) => (
                      <Paragraph key={idx}>{t(item)}</Paragraph>
                    ))
                  )}
                </div>
                <Button
                  cl="sw-w-1/3 md:sw-w-1/4 sw-h-10"
                  text="Xem video"
                  type="gradient"
                  onclick={onWatch}
                />
              </div>
            </HomeContainer>
          </div>
          <div className="xl:sw-absolute sw-w-full xl:sw-h-full sw-z-10 sw-slide-overide sw-inset-0"></div>
        </Media>
      </div>
    </MediaContextProvider>
  );
};

export default ProductHero;
