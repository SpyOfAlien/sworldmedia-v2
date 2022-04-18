import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useWindowSize } from '../../../lib/hook';
import cn from 'classnames';
import s from './service.module.scss';
import Slider from 'react-slick';
import FeedbackItem from '../../common/feedback/feedback-item';

const ServiceFeedback = ({ feedbacks }) => {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ right: '-30px' }}
        className={cn(
          'sw-glass sw-rounded-full sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
          s.nextArrow
        )}
        onClick={onClick}
      >
        <div className="sw-w-4 sw-transform sw-rotate-180">
          <Image
            src="/assets/images/others/left-arrow.png"
            width={18}
            height={36}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ left: '-30px' }}
        className={cn(
          'sw-glass sw-rounded-full sw-w-12 sw-h-12 sw-p-2 sw-flex sw-items-center sw-justify-center sw-cursor-pointer',
          s.prevArrow
        )}
        onClick={onClick}
      >
        <div className="sw-w-4">
          <Image
            src="/assets/images/others/left-arrow.png"
            width={18}
            height={36}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  const settings = {
    className: 'service-feedback center',
    centerMode: true,
    infinite: true,
    centerPadding: `${width / 4}px`,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {[...feedbacks, ...feedbacks].map((feedback, idx) => (
          <FeedbackItem feedback={feedback} key={feedback.enName} />
        ))}
      </Slider>
    </div>
  );
};
export default ServiceFeedback;
