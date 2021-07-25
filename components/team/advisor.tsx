import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Heading from '../ui/typo/heading';
import Paragraph from '../ui/typo/paragraph';
import s from './team.module.scss';
import cn from 'classnames';
import { Media, MediaContextProvider } from '../../lib/media';

const Advisor = () => {
  const baseUrl = '/assets/images/advisors/';
  const { t } = useTranslation();

  const advisorsOne = [
    {
      name: 'Trần Ngọc Phúc',
      img: `${baseUrl}tranNgocPhuc.png`,
      role: 'aboutus__entrepreneurial_advisor',
    },
    {
      name: 'MR. Don Lê',
      img: `${baseUrl}donle.png`,
      role: 'aboutus__inspirational_advisor',
    },
    {
      name: 'MR. Erik Jonsson',
      img: `${baseUrl}erikJonsson.png`,
      role: 'aboutus__entrepreneurial_advisor',
    },
  ];
  const advisorsTwo = [
    {
      name: 'Phan Văn Trường',
      img: `${baseUrl}phanVanTruong.png`,
      role: 'aboutus__organizational_advisor',
    },
    {
      name: 'Vy Lê',
      img: `${baseUrl}vyLe.png`,
      role: 'aboutus__entrepreneurial_advisor',
    },
    {
      name: 'Nguyễn Quốc Hùng',
      img: `${baseUrl}nguyenQuocHung.png`,
      role: 'aboutus__entrepreneurial_advisor',
    },
  ];

  return (
    <MediaContextProvider>
      <div className="xl:sw-flex sw-w-full xl:sw-items-center">
        <Media lessThan="lg">
          <div className={s.globe}>
            <div>
              <Heading cl="sw-text-center" h="h3">
                {t('aboutus__advisor')}
              </Heading>
              <Image
                src="/assets/images/others/test.png"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
          </div>
        </Media>

        <div className="sw-flex sw-flex-col md:sw-flex-row md:sw-justify-between xl:sw-flex-col xl:sw-w-1/4">
          {advisorsOne.map((advisor, idx) => (
            <div
              key={idx}
              className={cn('sw-mb-4 md:sw-w-10/12', s[`item-${idx}`])}
            >
              <Image
                src={advisor.img}
                width={262}
                height={256}
                layout="responsive"
                className="sw-p-4 md:sw-my-0"
              />

              <Paragraph cl="sw-text-h6 sw-text-center sw-uppercase">
                {t(advisor.name)}
              </Paragraph>
              <Paragraph cl=" sw-text-center ">{t(advisor.role)}</Paragraph>
            </div>
          ))}
        </div>
        <Media className="xl:sw-w-1/2" greaterThanOrEqual="lg">
          <div className="sw-relative">
            <div>
              <Heading cl="sw-text-center" h="h3">
                {t('aboutus__advisor')}
              </Heading>
              <Image
                src="/assets/images/others/t8.png"
                width={1000}
                height={1000}
                layout="responsive"
                quality="100"
                className={s.advisor_globe}
              />
              <Image
                src="/assets/images/others/t10.png"
                objectFit="cover"
                objectPosition="center"
                quality="100"
                layout="fill"
                className={s.advisor_first_glowing}
              />
              <Image
                src="/assets/images/others/t10.png"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                quality="100"
                className={s.advisor_second_glowing}
              />
            </div>
          </div>
        </Media>
        <div className="sw-flex sw-flex-col md:sw-flex-row md:sw-justify-between xl:sw-flex-col xl:sw-w-1/4">
          {advisorsTwo.map((advisor, idx) => (
            <div
              key={idx}
              className={cn('sw-mb-4 md:sw-w-10/12', s[`item-${idx}`])}
            >
              <Image
                src={advisor.img}
                width={262}
                height={256}
                layout="responsive"
                className="sw-p-4 md:sw-my-0"
              />

              <Paragraph cl="sw-text-h6 sw-text-center sw-uppercase">
                {t(advisor.name)}
              </Paragraph>
              <Paragraph cl="sw-text-center">{t(advisor.role)}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </MediaContextProvider>
  );
};

export default Advisor;
