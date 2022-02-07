import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const AboutAdvisor = () => {
  const baseUrl = '/assets/images/advisors/';
  const { t } = useTranslation('common');

  const advisors = [
    {
      name: 'Trần Ngọc Phúc',
      img: `${baseUrl}tranNgocPhuc.png`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Chủ tịch tập đoàn Metran Nhật Bản',
    },
    {
      name: 'MR. Don Lê',
      img: `${baseUrl}donle.png`,
      role: 'aboutus__inspirational_advisor',
      company: 'Company role',
    },
    {
      name: 'MR. Erik Jonsson',
      img: `${baseUrl}erikJonsson.png`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Giám đốc Quỹ đầu tư mạo hiểm toàn cầu Antler',
    },

    {
      name: 'Phan Văn Trường',
      img: `${baseUrl}phanVanTruong.png`,
      role: 'aboutus__organizational_advisor',
      company: 'Company role',
    },
    {
      name: 'Vy Lê',
      img: `${baseUrl}vyLe.png`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Đồng sáng lập và Giám đốc Quỹ đầu tư Do Ventures',
    },
    {
      name: 'Nguyễn Quốc Hùng',
      img: `${baseUrl}nguyenQuocHung.png`,
      role: 'aboutus__entrepreneurial_advisor',
      company: 'Company role',
    },
  ];

  return (
    <section className="sw-flex sw-flex-wrap sw-text-white sw-w-4/5 sw-mx-auto sw-py-32">
      {advisors.map((item) => (
        <div
          key={item.name}
          className="sw-w-1/2 lg:sw-w-1/3 sw-text-center sw-mb-8"
        >
          <div className="sw-w-full sw-px-12">
            <Image
              src={item.img}
              width={262}
              height={256}
              layout="responsive"
            />
          </div>
          <div>
            <h6 className="sw-font-bold sw-mb-2">{item.name}</h6>
            <p className="sw-">{t(item.role)}</p>
            <p className="sw-gilroy-thin">{item.company}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutAdvisor;
