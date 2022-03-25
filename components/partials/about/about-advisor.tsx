import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import s from './about.module.scss';
import cn from 'classnames';

const AboutAdvisor = () => {
  const baseUrl = '/assets/images/advisors/';
  const { t } = useTranslation('common');

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
    <section className="sw-text-white sw-w-3/5 sw-mx-auto sw-py-24 lg:sw-py-32">
      <h3 className="sw-text-center sw-mb-24 sw-text-h5 lg:sw-text-h3 sw-font-bold sw-text-barlow">
        Cố vấn
      </h3>
      <div className="sw-flex sw-flex-wrap ">
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
    </section>
  );
};

export default AboutAdvisor;
