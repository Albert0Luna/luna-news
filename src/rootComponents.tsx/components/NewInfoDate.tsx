export default function NewInfoDate ({
  selectedNewCreated,
  selectedNewUpdated,
  selectedLang,
  suffixLower,
}: {
  selectedNewCreated: string;
  selectedNewUpdated: string;
  selectedLang: string;
  suffixLower: string;
}) {
  const currentDate = new Date();
  
  const formatRelativeTime = (date: string) => {
    const diffDays = (new Date(date).getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
    const rtf = new Intl.RelativeTimeFormat(selectedLang || suffixLower);

    if (Math.abs(diffDays) < 1) {
      return selectedLang === 'en' ? 'today' : 'hoy';
    }

    const diffYears = diffDays / 365;
    const diffMonths = diffDays / 31;

    if (Math.abs(diffYears) >= 1) {
      return rtf.format(Math.round(diffYears), 'year');
    } else if (Math.abs(diffMonths) >= 1) {
      return rtf.format(Math.round(diffMonths), 'month');
    } else {
      return rtf.format(Math.round(diffDays), 'day');
    }
  };

  const isUpdated = selectedNewUpdated !== selectedNewCreated;
  const label = isUpdated
    ? selectedLang === 'en' ? 'Last update' : 'Última actualización'
    : selectedLang === 'en' ? 'Written' : 'Escrito';

  const relativeTime = isUpdated
    ? formatRelativeTime(selectedNewUpdated)
    : formatRelativeTime(selectedNewCreated);

  return <p className="new_info_date">{`${label} ${relativeTime}`}</p>;
}
