export default {};

export enum RouteTabName {
  Home = 'home',
  Frineds = 'friends',
  Message = 'message',
  Mine = 'mine',
}

export const RouteTabIcon: Record<string, string> = {
  [RouteTabName.Home]: 'home',
  [RouteTabName.Frineds]: 'github',
  [RouteTabName.Message]: 'qrcode',
  [RouteTabName.Mine]: 'meh',
};
