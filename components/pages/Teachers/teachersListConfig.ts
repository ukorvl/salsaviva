/**
 * Config item.
 */
export type TeachersListConfigItem = {
  name: string;
  subtitle: string;
  danceStyles: string[];
  imgSrc: string;
};

const teachersListConfig: TeachersListConfigItem[] = [
  {
    name: 'Monica Conde',
    subtitle: 'Founder - Top teacher',
    danceStyles: ['Salsa: Mambo, On1, Casino', 'Bachata', 'Kizomba'],
    imgSrc: 'teachers.0.jpg',
  },
  {
    name: 'Anna Militonyan',
    subtitle: 'Top teacher',
    danceStyles: ['Bachata', 'Kizomba'],
    imgSrc: 'teachers.2.jpg',
  },
  {
    name: 'Annie Ghantarjian',
    subtitle: 'Top teacher',
    danceStyles: ['Lady style', 'Kizomba', 'Bachata', 'Salsa/mambo'],
    imgSrc: 'teachers.3.jpg',
  },
  {
    name: 'Yuriy Pikhun',
    subtitle: 'Top teacher',
    danceStyles: ['Bachata', 'Kizomba', 'Casino'],
    imgSrc: 'teachers.1.jpg',
  },
  {
    name: 'Dima & Sveta',
    subtitle: 'Top teachers',
    danceStyles: ['Brazilian Zouk'],
    imgSrc: 'teachers.4.jpg',
  },
];

export default teachersListConfig;
