type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  const modsCls = Object.entries(mods)
    .filter(([_, hasCls]) => hasCls)
    .map(([modCls]) => modCls);

  return [cls, ...additional.filter(Boolean), ...modsCls].join(' ');
};
