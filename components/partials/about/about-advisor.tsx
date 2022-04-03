import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import s from './about.module.scss';
import cn from 'classnames';
import { useWindowSize } from '../../../lib/hook';

const AboutAdvisor = () => {
  const baseUrl = '/assets/images/advisors/';
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const advisors = [
    {
      name: 'Trần Ngọc Phúc',
      img: `${baseUrl}tranNgocPhuc.jpg`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Chủ tịch tập đoàn Metran Nhật Bản',
    },
    {
      name: 'MR. Don Lê',
      img: `${baseUrl}donle.jpg`,
      role: 'aboutus__inspirational_advisor',
      company: 'Company role',
    },
    {
      name: 'MR. Erik Jonsson',
      img: `${baseUrl}erikJonsson.jpg`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Giám đốc Quỹ đầu tư mạo hiểm toàn cầu Antler',
    },

    // {
    //   name: 'Phan Văn Trường',
    //   img: `${baseUrl}phanVanTruong.jpg`,
    //   role: 'aboutus__organizational_advisor',
    //   company: 'Company role',
    // },
    {
      name: 'Vy Lê',
      img: `${baseUrl}vyLe.jpg`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Đồng sáng lập và Giám đốc Quỹ đầu tư Do Ventures',
    },
    // {
    //   name: 'Nguyễn Quốc Hùng',
    //   img: `${baseUrl}nguyenQuocHung.jpg`,
    //   role: 'aboutus__entrepreneurial_advisor',
    //   company: 'Company role',
    // },
  ];

  return (
    <section className="sw-text-white sw-relative">
      <div
        className="sw-absolute sw-left-0 sw-right-0"
        style={
          width > 1280
            ? { bottom: '-160%', zIndex: -10 }
            : { bottom: '-20%', zIndex: -10 }
        }
      >
        <div className="sw-w-full">
          <Image
            src="/assets/images/common/light-globe.png"
            width={1440}
            height={1440}
            layout="responsive"
          />
        </div>
      </div>
      <h3 className="sw-text-center sw-mb-24 sw-text-h5 lg:sw-text-h3 sw-font-bold sw-text-barlow">
        {t('aboutus__advisor')}
      </h3>
      <div>
        <div className="sw-flex sw-flex-wrap sw-w-3/5 sw-mx-auto">
          {advisors.map((item) => (
            <div
              key={item.name}
              className="sw-w-full md:sw-w-1/2 lg:sw-w-1/4 sw-text-center sw-mb-8"
            >
              <div
                className={cn(
                  'sw-w-full sw-px-8 sw-mx-auto sw-mb-4',
                  s.advisorItem
                )}
              >
                <Image
                  src={item.img}
                  width={253}
                  height={255}
                  layout="responsive"
                  className="sw-rounded-xl"
                />
              </div>
              <div>
                <h6 className="sw-font-bold sw-mb-2">{item.name}</h6>
                <p className="sw-">{t(item.role)}</p>
                <p className="sw-gilroy-thin sw-w-4/5 sw-mx-auto sw-text-xs">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAdvisor;
