import { RoutesNames } from '../../../src/routes/routes-names';

const fs = require('fs');

const ENG_TRANSLATIONS = {
  header: {
    about: 'about',
    touch_by_touch: 'touch by touch',
    jewelry_pieces: 'jewelry pieces',
    cabinet_objects: 'the cabinet objects',
    contacts: 'contacts',
  },
  about: {
    why_bogeira:
      'My name is Irina Bogolyubova and I am a jewelry artist. My creative alias is Bogeira.',
    bogeira_info:
      'To my mind, a jewelry art piece is a sculptural form fitted into environment of a human body. It is a story about sense, tactility and feeling. I prefer making handiwork, I love creating non-symmetric pieces. It is my understanding that a jewelry should be extremely comfortable and feel-good despite of the size. Now I work mostly in stainless steel and stoving enamel.',
    photo_author: 'Photo - Pim Zwier',
    fact_list: [
      {
        label: 'education',
        description_item_list: [
          '2017 - 2021 – Saint Petersburg Stieglitz State Academy of Art and Design, Metal Art department.',
          '2012 - 2014 – Kazan State Technical School of Arts and Crafts, Jewelry department.',
          '2010 - 2015 - Kazan Federal University, Translation and Interpretation Studies department.',
          '2007 - 2010 - Kazan State Medical School, Dentistry department.',
        ],
      },
      {
        label: 'exhibitions',
        description_item_list: [
          '2021 - 100BestDesign exhibition, as a part of project “100 Best Graduate Designers”, Moscow, Russia.',
          '2021 - Finalist of the international jewelry design competition “Image and Shape” in the category “Jewelry Piece. Manufacturing”, Saint-Petersburg, Russia.',
          '2019 - IV International Biennale of stoving enamel art “Golden Thread – Artistic Line”, Saint-Petersburg, Russia.',
          '2019 - Portrait. Beyond Similarity - Interacademic exhibition, Saint-Petersburg, Russia.',
          '2018 - Winner of the international competition “Colours of the World” as a part of project “We’re distinct. We’re combined” in the category “Drawings”, Saint-Petersburg, Russia.',
        ],
      },
      {
        label: 'painting',
        pageUrl: RoutesNames.ABOUT_SUB_PAGES.PAINTING,
      },
      {
        label: 'projects',
      },
      {
        label: 'drawing',
      },
      {
        label: 'sculpture',
      },
      {
        label: 'graphics',
      },
    ],
  },
  footer: {
    ira_name: 'Irina Bogolyubova, 2022',
  },
};

const json = JSON.stringify(ENG_TRANSLATIONS);
console.log(json, 'JSON');

fs.writeFile('translation.json', json, 'utf8', () => {});
