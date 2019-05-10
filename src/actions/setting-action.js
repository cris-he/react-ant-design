import {
    RESTORE_SETTINGS,
    SET_LOCALE,
    SET_LOCALE_SUCCESS
} from '../constants/action-types';


export const resetSettings = () => {
    return {
        type: RESTORE_SETTINGS,
    }
};

export const resetSettingsSuccess = () => {
    return {
        type: RESTORE_SETTINGS,
    }
};

export const setLocale = (locale) => {
    console.log('setLocale',locale);
    return {
        type: SET_LOCALE,
        data: locale
    }
};

export const setLocaleSuccess = (locale) => {
    console.log('setLocaleSuccess',locale);
    return {
        type: SET_LOCALE_SUCCESS,
        data: locale
    }
};