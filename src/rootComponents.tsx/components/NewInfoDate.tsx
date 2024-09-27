export default function NewInfoDate (
  {selectedNewCreated, selectedNewUpdated, selectedLang, suffixLower}: 
  {selectedNewCreated: string, selectedNewUpdated: string, selectedLang: string, suffixLower: string}
) {
  const fechaDB = selectedNewCreated;

  const currentDate = new Date();
  const updateDate = new Date((fechaDB) as string);

  const dateSinceUpdateDays = (updateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const dateSinceUpdateMonth = dateSinceUpdateDays / 31;

  const dateSinceUpdateYear = dateSinceUpdateDays / 365;

  const rtf = new Intl.RelativeTimeFormat(selectedLang || suffixLower);

  //*? Last update

  const lastUpdate = selectedNewUpdated;

  const lastUpdateDate = new Date((lastUpdate as string));

  const lastUpdateDays = (lastUpdateDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  const lastUpdateMonth = lastUpdateDays / 31;

  const lastUpdateYear = lastUpdateDays / 365;
  return (
    <p className='new_info_date'>
      {
        lastUpdate !== fechaDB
          ? Number.isFinite(Math.round(lastUpdateYear)) && Math.round(lastUpdateYear) < 0
            ? `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateYear), 'year')}`
            : Number.isFinite(Math.round(lastUpdateMonth)) && Math.round(lastUpdateMonth) < 0
              ? `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateMonth), 'month')}`
              : Number.isFinite(Math.round(lastUpdateDays)) && Math.round(lastUpdateDays) === -1
                ? `${selectedLang === 'en' ? 'Last update today' : 'Última actualización hoy'}`
                : `${selectedLang === 'en' ? 'Last update' : 'Última actualización'} ${rtf.format(Math.round(lastUpdateDays) + 1, 'day')}`
          : Number.isFinite(Math.round(dateSinceUpdateYear)) && Math.round(dateSinceUpdateYear) < 0
            ? `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateYear), 'year')}`
            : Number.isFinite(Math.round(dateSinceUpdateMonth)) && Math.round(dateSinceUpdateMonth) < 0
              ? `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateMonth), 'month')}`
              : Number.isFinite(Math.round(dateSinceUpdateDays)) && Math.round(dateSinceUpdateDays) === -1
                ? `${selectedLang === 'en' ? 'Written today' : 'Escrito hoy'}`
                : `${selectedLang === 'en' ? 'Written' : 'Escrito'} ${rtf.format(Math.round(dateSinceUpdateDays) + 1, 'day')}`
      }
    </p>
  );
}