export type ViewInfo = Readonly<{
  title?: string;
  icon?: string;
}>;

export type ViewInfoMap = Record<string, ViewInfo | undefined>;

const views: ViewInfoMap = {
  '/todo': { icon: 'la la-list-alt', title: 'Todo' },
};

export default views;
