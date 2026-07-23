export interface HomeButton {
  label: string;
  url: string;
  color?: string;
}

export const homeButtonList: HomeButton[] = [
  { label: 'Flux Control', url: '/flux-control'},
  { label: 'Signals', url: '/signals'}
];
