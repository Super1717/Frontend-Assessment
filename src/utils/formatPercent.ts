const percentFormat = new Intl.NumberFormat([], {
  style: "percent",
  maximumFractionDigits: 0,
});

export const formatPercent = <T>(value: T): T | string =>
  typeof value === "number" &&
  Number.isFinite(value) &&
  value >= 0 &&
  value <= 1
    ? percentFormat.format(value)
    : value;
