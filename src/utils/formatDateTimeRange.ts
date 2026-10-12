const ISO_REGEX =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/;

const isRealIso = (s: string) => ISO_REGEX.test(s) && !isNaN(Date.parse(s));

const rangeFormat = new Intl.DateTimeFormat([], {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export const formatDateTimeRange = (start: string, end: string) =>
  isRealIso(start) && isRealIso(end)
    ? rangeFormat.formatRange(new Date(start), new Date(end))
    : `${start} - ${end}`;
