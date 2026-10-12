const pluralRules = new Intl.PluralRules([]);

export const pluralize = (count: number, one: string, other: string) =>
  pluralRules.select(count) === "one" ? one : other;
