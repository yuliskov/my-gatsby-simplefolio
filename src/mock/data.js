import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Юрій Лиськов', // e.g: 'Name | Developer'
  lang: 'ua', // e.g: en, es, fr, jp
  description: 'Вітаю на моєму сайті', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Привіт, мене звуть',
  name: 'Юрій Лиськов',
  subtitle:
    'Я навчаюсь на третьому курсі НТУ ДП по спеціальності Інженерія програмного забезпечення.',
  cta: 'Дізнатися більше',
};

// ABOUT DATA
export const aboutData = {
  title: 'Про мене',
  img: 'my_profile.jpg',
  paragraphOne: 'Мене звують Юрій Лиськов. Я із Дніпра.',
  paragraphTwo:
    'Зараз я навчаюсь на третьому курсі НТУ ДП по спеціальності Інженерія програмного забезпечення.',
  paragraphThree:
    'До цього я закінчив з відзнакою КРЕ ДП по спеціальності Телекомунікації та радіотехніка.',
  resume: 'https://www.linkedin.com/in/yuliskov/', // if no resume, the button will not show up
  btn: 'Резюме',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: '',
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yuliskov/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yuliskov/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const copyrightInfo = {
  isEnabled: false, // set to false to disable
};

export const disclaimerData = {
  title: 'Відмова від відповідальності',
  cta: 'Даю згоду на використання наведених матеріалів у цілях профорієнтаційної діяльності і обробку та поширення особистих даних.',
  btn: '',
  url: '',
};

export const motivationData = {
  title: 'Чому я обрав НТУ ДП',
  cta:
    'Я обрав Національний технічний університет, бо тут: по-перше, навчають актуальним спеціальностям, таким як Інженерія програмного забеспечення. ' +
    'По-друге, тут висококваліфіковані викладачі, які концентрують увагу на розумінні матеріалу та практичних ' +
    'навичках для майбутньої роботи. По-третє, тут хороша атмосфера, що робить навчання більш приємним і колектив групи більш товариським.',
  btn: 'Сайт НТУ ДП',
  url: 'https://www.nmu.org.ua/ua/',
  btn2: 'Кафедра ПЗКС',
  url2: 'https://pzks.nmu.org.ua/ua/',
};

export const mediaData = {
  title: 'Про НТУ ДП',
  videoId: 'UeoLPhtWfMA',
};
