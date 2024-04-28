import { productDetailInfoKeys, aboutSubPagesTranslationKeys } from './general-translation-keys';

export const TRANSLATION_CONFIG = {
  header: {
    about: 'about',
    touch_by_touch: 'touch_by_touch',
    jewelry_pieces: 'jewelry_pieces',
    cabinet_objects: 'cabinet_objects',
    contacts: 'contacts',
  },
  about: {
    aboutPage: {
      whyBogeira: 'why_bogeira',
      bogeiraInfo: 'bogeira_info',
      photoAuthor: 'photo_author',
      factList: 'fact_list',
    },
    paintingPage: aboutSubPagesTranslationKeys,
    drawingPage: aboutSubPagesTranslationKeys,
    projectsPage: aboutSubPagesTranslationKeys,
    sculpturePage: aboutSubPagesTranslationKeys,
    graphicsPage: aboutSubPagesTranslationKeys,
  },
  touch_by_touch: {
    fileName: 'touch_by_touch',
    keyPrefixes: {
      touch_by_touch: 'touch_by_touch',
    },
    keys: {
      touch_by_touch: {
        name: 'name',
        material: 'material',
        description: 'description',
        photo: 'photo',
      },
    },
  },
  jewelry: {
    fileName: 'jewelry',
    keyPrefixes: {
      jewelryPage: 'jewelry',
      aquariusPage: 'aquarius',
      nsPage: 'n&s',
      intellectual: 'intellectual_and_stylish',
      all_my_love: 'all_my_love',
      maki: 'maki',
      health_nut_girl: 'health_nut_girl',
      rosemary: 'rosemary',
    },
    keys: {
      aquariusPage: productDetailInfoKeys,
      nsPage: productDetailInfoKeys,
      intellectual: productDetailInfoKeys,
      all_my_love: productDetailInfoKeys,
      maki: productDetailInfoKeys,
      health_nut_girl: productDetailInfoKeys,
      rosemary: productDetailInfoKeys,
    },
  },
  cabinet: {
    fileName: 'cabinet',
    keyPrefixes: {
      cabinetPage: 'cabinet',
      gobletPage: 'goblet',
      paperKnifePage: 'paper_knife',
      sepiaPage: 'sepia',
      gobletKazanPage: 'goblet_kazan',
      platePage: 'plate',
    },
    keys: {
      gobletPage: productDetailInfoKeys,
      paperKnifePage: productDetailInfoKeys,
      sepiaPage: productDetailInfoKeys,
      gobletKazanPage: productDetailInfoKeys,
      platePage: productDetailInfoKeys,
    },
  },
  footer: {
    fileName: 'footer',
    keyPrefixes: {
      footer: 'footer',
    },
    keys: {
      footer: { ira_name: 'ira_name' },
    },
  },
};
