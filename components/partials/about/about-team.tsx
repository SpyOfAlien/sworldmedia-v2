import { useTranslation } from 'next-i18next';

const AboutTeam = () => {
  const { t } = useTranslation('common');

  const teams = [
    { id: 0, name: 'Sản xuất', amount: '01', place: 'HCM & Ha Noi' },
    { id: 0, name: 'Sản xuất', amount: '02', place: 'HCM & Ha Noi' },
    { id: 0, name: 'Sản xuất', amount: '03', place: 'HCM & Ha Noi' },
    { id: 0, name: 'Sản xuất', amount: '04', place: 'HCM & Ha Noi' },
    { id: 0, name: 'Sản xuất', amount: '05', place: 'HCM & Ha Noi' },
    { id: 0, name: 'Sản xuất', amount: '06', place: 'HCM & Ha Noi' },
  ];

  return (
    <section className="sw-text-white sw-w-4/5 sw-mx-auto sw-py-32">
      <div className="sw-text-center sw-w-4/5 sw-mx-auto sw-mb-16">
        <h3 className="sw-text-barlow sw-font-bold sw-text-h3 sw-mb-4">
          {t('aboutus__team__title')}
        </h3>
        <p className="sw-gilroy-thin sw-w-full lg:sw-w-3/5 sw-mx-auto">
          {t('aboutus__team__desc')}
        </p>
      </div>
      <div className="sw-flex sw-flex-wrap">
        {teams.map((item) => (
          <div
            key={item.id}
            className="sw-w-full md:sw-w-1/2 lg:sw-w-1/3 sw-flex sw-items-center sw-justify-center sw-mb-16 sw-px-4"
          >
            <span className="sw-block sw-font-bold sw-text-h3 sw-mr-4">
              {item.amount}
            </span>
            <div className="">
              <h6 className="">{item.name}</h6>
              <p className="sw-gilroy-thin">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutTeam;
