const clientAdv = {
  forLoop: [
    {
      id: 1,
      name: 'Просто',
      description:
        'Одно нажатие кнопки, и автомобиль подъедет прямо к вам. Водитель точно знает, куда ехать, поэтому вы можете просто наслаждаться поездкой. Добравшись до пункта назначения, поблагодарите водителя и выйдите из автомобиля. Оплата будет произведена автоматически через приложение.',
      image: {
        img: 'clientAdv/woman-with-phone.svg',
        alt: 'clientAdv/woman-with-phone.svg',
      },
    },
    {
      id: 2,
      name: 'Удобно',
      description:
        'Ежедневные поездки на работу и домой. Деловые встречи в разных частях города. Ранние утренние вылеты. Вечеринки допоздна. Куда бы вы ни отправлялись, вы всегда можете рассчитывать на Uber. Предварительный заказ не требуется.',
      image: {
        img: 'clientAdv/car-with-phone.svg',
        alt: 'clientAdv/car-with-phone.svg',
      },
    },
    {
      id: 3,
      name: 'Доступно',
      description:
        'Автомобили экономкласса по доступным ценам всегда в наличии. А по особым поводам или когда необходим автомобиль с большой вместимостью, заказывайте UberBLACK или SUV.',
      image: {
        img: 'clientAdv/piggy-bank.svg',
        alt: 'clientAdv/piggy-bank.svg',
      },
    },
  ],
  image: {
    img: 'clientAdv/arrow.svg',
    alt: 'clientAdv/arrow.svg',
  },
};

const companyAdv = {
  description:
    'Простое решение для организации деловых поездок, корпоративной развозки персонала, а также перевозки гостей и клиентов компании.',
  image: {
    img: 'companyAdv/small-arrow.svg',
    alt: 'companyAdv/small-arrow.svg',
  },
};

const driversAdv = {
  image: { img: 'driversAdv/arrow.svg', alt: 'driversAdv/arrow.svg' },
};

const driversReviews = {
  forloop: [
    {
      id: 1,
      name: 'Брэндон, тренер и партнер из Чикаго',
      description:
        '"Я стал водителем-партнером Uber, потому что мне понравилась идея, что моя машина будет приносить доход. Проработав всего пару недель, я понял, что хочу заниматься этим на постоянной основе".',
      cardNum: 'first-card',
    },
    {
      id: 2,
      name: 'Катрина, домохозяйка и партнер из Сиэтла',
      description:
        '"Я хотела иметь такую работу, которая позволяла бы мне знакомиться с новыми людьми и не сидеть дома. Все это стало возможно с Uber. Кроме того, я открываю для себя новые районы города, которых не видела раньше!"',
      cardNum: 'second-card',
    },
    {
      id: 3,
      name: 'Дженни, предприниматель и партнер из Лос-Анджелеса',
      description:
        '"C Uber у меня всегда есть дополнительный доход и вместе с тем остается много свободного времени для любимого занятия и работы мечты — выпечки тортов".',
      cardNum: 'third-card',
    },
    {
      id: 4,
      name: 'Шон, музыкант и партнер из Лос-Анджелеса',
      description:
        '"Uber помогает мне добиваться целей и воплощать мечты. Я могу сосредоточиться на своем творчестве и дарить музыку людям по всему миру".',
      cardNum: 'fourth-card',
    },
  ],

  imageBefore: {
    img: 'driversReviews/before-arrow.svg',
    alt: 'driversReviews/before-arrow.svg',
  },

  imageNext: {
    img: 'driversReviews/arrow.svg',
    alt: 'driversReviews/arrow.svg',
  },

};

const header = {
  image1: { img: 'header/uber-logo.svg', alt: 'UBER' },
  image2: { img: 'header/loc-icon.svg', alt: 'LOC' },
};

const mainAd = {
  image: { img: 'mainAd/arrow.svg', alt: 'arr' },
  driversRegistr: {
    imageBlackArrow: {
      img: 'mainAd/driversRegistr/black-arrow.svg',
      alt: 'black-arrow.svg',
    },
    imageSmallArrow: {
      img: 'mainAd/driversRegistr/small-arrow.svg',
      alt: 'small-arrow.svg',
    },
    licenseAgreement:
      'Продолжая, я соглашаюсь с тем, что компания Uber или ее представители могут связаться со мной при помощи электронной почты, телефона или СМС (включая автоматическую систему набора), воспользовавшись указанными мной электронным адресом или номером телефона, в том числе в маркетинговых целях. Я подтверждаю, что прочитал(-а) и понял(-а) соответствующее',
  },
};

const newsBlock = [
  {
    id: 1,
    colNum: 'column-1',
    image: {
      img: 'newsBlock/speaker.svg',
      alt: 'newsBlock/speaker.svg',
    },
    title: 'Наши новости',
    description:
      'Читайте новости компании, следите за предложениями для партнеров и обновлениями сервисов — держите руку на пульсе.',
    buttonPic: {
      img: 'newsBlock/small-arrow.svg',
      alt: 'newsBlock/small-arrow.svg',
    },
  },
  {
    id: 2,
    colNum: 'column-2',
    image: {
      img: 'newsBlock/globe.svg',
      alt: 'newsBlock/globe.svg',
    },
    title: 'Информация о компании',
    description:
      'Узнайте о целях, истории развития и руководителях нашей компании.',
    buttonPic: {
      img: 'newsBlock/small-arrow.svg',
      alt: 'newsBlock/small-arrow.svg',
    },
  },
];

const tripPriceCount = {
  image1: {
    img:
      'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/images/fare-estimate/mobile-fare-estimate-map-d7bf04aff9.jpg',
    alt:
      'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/images/fare-estimate/mobile-fare-estimate-map-d7bf04aff9.jpg',
  },

  image2: {
    img: 'tripPriceCount/paperplane.svg',
    alt: 'tripPriceCount/paperplane.svg',
  },
  image3: {
    img: 'tripPriceCount/arrow.svg',
    alt: 'tripPriceCount/paperplane.svg',
  },
};

const uberFooter = {
  searchFormContent: {
    image1: {
      img: 'uberFooter/searchForm/arrow.svg',
      alt: 'uberFooter/searchForm/arrow.svg',
    },
    image2: {
      img: 'uberFooter/searchForm/city.svg',
      alt: 'uberFooter/searchForm/city.svg',
    },
  },

  socialLinks: {
    withDescription: [
      {
        id: 1,
        link: '',
        image: {
          img: 'uberFooter/socialLinks/loc-icon.svg',
          alt: 'uberFooter/socialLinks/loc-icon.svg',
        },
        descClass: 'location',
        description: 'Введите Местоположение',
      },
      {
        id: 2,
        link: '',
        image: {
          img: 'uberFooter/socialLinks/language-icon.svg',
          alt: 'uberFooter/socialLinks/language-icon.svg',
        },
        descClass: 'lang-link',
        description: 'русский',
      },
      {
        id: 3,
        link: '',
        image: {
          img: 'uberFooter/socialLinks/help-icon.svg',
          alt: 'uberFooter/socialLinks/help-icon.svg',
        },
        descClass: 'help',
        description: 'Помощь',
      },
    ],
    withoutDescription: [
      {
        id: '1',
        link: '',
        image: {
          img: 'uberFooter/socialLinks/facebook-icon.svg',
          alt: 'uberFooter/socialLinks/facebook-icon.svg',
        },
      },
      {
        id: '2',
        link: '',
        image: {
          img: 'uberFooter/socialLinks/twitter-icon.svg',
          alt: 'uberFooter/socialLinks/twitter-icon.svg',
        },
      },
      {
        id: '3',
        link: '',
        image: {
          img: 'uberFooter/socialLinks/in-icon.svg',
          alt: 'uberFooter/socialLinks/in-icon.svg',
        },
      },
      {
        id: '4',
        link: '',
        image: {
          img: 'uberFooter/socialLinks/instagram-icon.svg',
          alt: 'uberFooter/socialLinks/instagram-icon.svg',
        },
      },
    ],
  },
};

export {
  clientAdv,
  companyAdv,
  driversAdv,
  driversReviews,
  header,
  mainAd,
  newsBlock,
  tripPriceCount,
  uberFooter,
};
