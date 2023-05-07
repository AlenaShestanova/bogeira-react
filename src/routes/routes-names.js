export class RoutesNames {
  static INDEX = '/';
  static ABOUT = '/about';

  static TOUCH_BY_TOUCH = '/touch_by_touch';
  static JEWELRY_PIECES = '/jewelry_pieces';
  static CABINET_OBJECTS = '/cabinet_objects';
  static CONTACTS = '/contacts';

  static ABOUT_SUB_PAGES = {
    PAINTING: `${this.ABOUT}/painting`,
    PROJECTS: `${this.ABOUT}/projects`,
    DRAWING: `${this.ABOUT}/drawing`,
    SCULPTURE: `${this.ABOUT}/sculpture`,
    GRAPHICS: `${this.ABOUT}/graphics`,
  };
}
