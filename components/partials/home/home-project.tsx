import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';
import ProjectItem from '../../common/project/project-item';
import Image from 'next/image';
import cn from 'classnames';
import s from './home.module.scss';
import { useWindowSize } from '../../../lib/hook';

const HomeProject = () => {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{
          left: `calc(50% + ${
            width < 1024 ? width / 2.4 : width / 3.4
          }px - 48px)`,
        }}
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
        style={{
          left: `calc(50% - ${width < 1024 ? width / 2.4 : width / 3.4}px)`,
        }}
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
    className: 'home-project center',
    centerMode: true,
    infinite: true,
    centerPadding: `${width < 1024 ? width / 10 : width / 4.5}px`,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="sw-mb-40">
      <h3 className="sw-text-white sw-text-barlow sw-text-h3 sw-font-bold sw-text-center sw-mb-12">
        {t('home__project__usecase')}
      </h3>

      <Slider {...settings}>
        <div>
          <ProjectItem
            project={{
              name: '02/ Fischer Group- Phim tài liệu tiềm năng Việt Nam',
              summary:
                'Fischer là một tập đoàn đa ngành của Đức, trong đó nổi tiếng sản xuất các thiết bị, linh kiện cho ngành xây dựng và công nghiệp ô tô. Thước phim này là tài liệu cho Tập đoàn nhìn thấy môi trường đầu tư mới đây tiềm năng của Fischer trong tương lai - đó là Việt Nam. Với những thông tin khách quan từ Mr.Marko Walde - Trưởng đại diện Phòng Công nghiệp và Thương mại Đức tại Việt Nam (GIC/AHK).',
              imgUrl: '/assets/images/others/tmp.png',
              type: 'Sản xuất - TV show',
            }}
          />
        </div>
        <div>
          <ProjectItem
            project={{
              name: '02/ Fischer Group- Phim tài liệu tiềm năng Việt Nam',
              summary:
                'Fischer là một tập đoàn đa ngành của Đức, trong đó nổi tiếng sản xuất các thiết bị, linh kiện cho ngành xây dựng và công nghiệp ô tô. Thước phim này là tài liệu cho Tập đoàn nhìn thấy môi trường đầu tư mới đây tiềm năng của Fischer trong tương lai - đó là Việt Nam. Với những thông tin khách quan từ Mr.Marko Walde - Trưởng đại diện Phòng Công nghiệp và Thương mại Đức tại Việt Nam (GIC/AHK).',
              imgUrl: '/assets/images/others/tmp.png',
              type: 'Sản xuất - TV show',
            }}
          />
        </div>
        <div>
          <ProjectItem
            project={{
              name: '02/ Fischer Group- Phim tài liệu tiềm năng Việt Nam',
              summary:
                'Fischer là một tập đoàn đa ngành của Đức, trong đó nổi tiếng sản xuất các thiết bị, linh kiện cho ngành xây dựng và công nghiệp ô tô. Thước phim này là tài liệu cho Tập đoàn nhìn thấy môi trường đầu tư mới đây tiềm năng của Fischer trong tương lai - đó là Việt Nam. Với những thông tin khách quan từ Mr.Marko Walde - Trưởng đại diện Phòng Công nghiệp và Thương mại Đức tại Việt Nam (GIC/AHK).',
              imgUrl: '/assets/images/others/tmp.png',
              type: 'Sản xuất - TV show',
            }}
          />
        </div>
      </Slider>
    </section>
  );
};

export default HomeProject;
