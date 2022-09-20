// Где-нибудь в константах уровня приложения
const COUNTRY_RU = 'ru';
const COUNTRY_LV = 'lv';

// Модуль генерации данных по странам
import {russianLanguage, latvianLanguage} from '~/some-location/languages';

const getKeyByCountry = (countryId) => {
    const googleSiteVerificationKeys = {
        [COUNTRY_RU]: 'ruKey',
        [COUNTRY_LV]: 'lvKey',
    };

    return googleSiteVerificationKeys[countryId];
};

const getLanguagesByCountry = (countryId) => {
    const languages = {
        [COUNTRY_RU]: [russianLanguage, latvianLanguage],
        [COUNTRY_LV]: [russianLanguage, latvianLanguage],
    };

    return languages[countryId];
};

export const useCountry = (id) => ({
    id,
    googleSiteVerificationKey: getKeyByCountry(id),
    languages: getLanguagesByCountry(id),
});


// Где-то для получения данных по стране
const russia = useCountry(COUNTRY_RU);
const latvia = useCountry(COUNTRY_LV);
