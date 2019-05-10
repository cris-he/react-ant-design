import {
    RESTORE_SETTINGS,
    SET_LOCALE_SUCCESS
} from '../constants/action-types';

import defaultSettings from '../constants/default-settings';
import { getLocale, setLocale } from '../utils/local-storage';
const INIT_STATE = {
    locale: getLocale()
};

export default (state = INIT_STATE, action) => {
    console.log("setting-reducer: " + action.type, action);
    switch (action.type) {
        case SET_LOCALE_SUCCESS: {
            setLocale(action.data);
            return { ...state, locale: action.data };
        }
        case RESTORE_SETTINGS:
            return defaultSettings;
        default:
            return state;
    }
}