const baseUrl = '/assets/images/services/';

const services = [
  {
    icon: '/assets/svg/brand-communication.svg',
    name: 'home__service__brand_communication__title',
    label: 'Truyền thông thương hiệu',
    modal: 'BRAND_COMMUNICATION',
    content: 'home__service__brand_communication__content',
    background: `${baseUrl}brand-com.png`,
    href: '/services/brand-communication',
    subService: [
      {
        title: 'home__service__branding__concept',
        modal: 'BRANDING_CONCEPT',
      },
      {
        title: 'home__service__branding__identity',
        modal: 'BRANDING_IDENTITY',
      },
      {
        title: 'home__service__branding__strategy',
        modal: 'BRANDING_STRATEGY',
      },
    ],
  },
  {
    icon: '/assets/svg/branding.svg',
    name: 'home__service__branding__title',
    label: 'Xây dựng thương hiệu',
    modal: 'BRANDING',
    content: 'home__service__branding__content',
    background: `${baseUrl}branding.png`,
    href: '/services/brand-communication',
    subService: [
      {
        title: 'home__service__brand_communication__pr',
        modal: 'BRANDING_COMMUNICATION_PR',
      },
      {
        title: 'home__service__brand_communication__social',
        modal: 'BRANDING_COMMUNICATION_SOCIAL',
      },
      {
        title: 'home__service__brand_communication__kol',
        modal: 'BRANDING_COMMUNICATION_KOL',
      },
      {
        title: 'home__service__brand_communication__marketing',
        modal: 'BRANDING_COMMUNICATION_MARKETING',
      },
    ],
  },
  {
    icon: '/assets/svg/production.svg',
    name: 'home__service__production__title',
    label: 'Sản xuất',
    modal: 'PRODUCTION',
    content: 'home__service__production__content',
    background: `${baseUrl}product.png`,
    href: '/services/brand-communication',
    subService: [
      {
        title: 'home__service__production__for_client',
        modal: 'PRODUCTION_CLIENT',
      },
      {
        title: 'home__service__production__format',
        modal: 'PRODUCTION_FORMAT',
      },
    ],
  },
  {
    icon: '/assets/svg/international-relations.svg',
    name: 'home__service__international_relations__title',
    label: 'Kết nối quốc tế',
    modal: 'INTERNAL_RELATION',
    content: [
      'home__service__international_relations__content1',
      'home__service__international_relations__content2',
      'home__service__international_relations__content3',
      'home__service__international_relations__content4',
    ],
    background: `${baseUrl}connection.png`,
    href: '/services/brand-communication',
    subService: [
      {
        title: 'home__service__international_relations__for_vn',
        modal: 'INTERNATIONAL_RELATION_FOR_VN',
      },
      {
        title: 'home__service__international_relations__for_foreign_inVN',
        modal: 'INTERNATIONAL_RELATION_FOR_FOREIGN',
      },
      {
        title: 'home__service__international_relations__for_vn_international',
        modal: 'INTERNATIONAL_RELATION_FOR_VN_INTERNATIONAL',
      },
    ],
  },
  {
    icon: '/assets/svg/event.svg',
    name: 'home__service__event__title',
    label: 'Xây dựng thương hiệu',
    modal: 'EVENT',
    content: 'home__service__event__content',
    background: `${baseUrl}events.png`,
    href: '/services/brand-communication',
    subService: [
      {
        title: 'home__service__event__online',
        modal: 'EVENT_ONLINE',
      },
      {
        title: 'home__service__event__offline',
        modal: 'EVENT_OFFLINE',
      },
    ],
  },
];

export default services;
