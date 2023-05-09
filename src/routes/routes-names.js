export class RoutesNames {
  static INDEX = '/';
  static ABOUT = '/about';

  static TOUCH_BY_TOUCH = '/touch_by_touch';
  static JEWELRY = '/jewelry';
  static CABINET_OBJECTS = '/cabinet_objects';
  static CONTACTS = '/contacts';

  static ABOUT_SUB_PAGES = {
    PAINTING: `${this.ABOUT}/painting`,
    PROJECTS: `${this.ABOUT}/projects`,
    DRAWING: `${this.ABOUT}/drawing`,
    SCULPTURE: `${this.ABOUT}/sculpture`,
    GRAPHICS: `${this.ABOUT}/graphics`,
  };

  static JEWELRY_SUB_PAGES = {
    AQUARIUS: `${this.JEWELRY}/aquarius`,
    NS: `${this.JEWELRY}/n&s`,
    INTELLECTUAL_AND_STYLISH: `${this.JEWELRY}/intellectual_and_stylish`,
    ALL_MY_LOVE: `${this.JEWELRY}/all_my_love`,
    MAKI: `${this.JEWELRY}/maki`,
    HEALTH_NUT_GIRL: `${this.JEWELRY}/health_nut_girl`,
    ROSEMARY: `${this.JEWELRY}/rosemary`,
  };
}
