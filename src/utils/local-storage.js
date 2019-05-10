import defaultSettings from '../constants/default-settings';

export function setAuthToken(item) {
    return localStorage.setItem(defaultSettings['local-storage-token-name'], item);
}

export function getAuthToken() {
    return localStorage.getItem(defaultSettings['local-storage-token-name']);
}

export function removeAuthToken() {
    return localStorage.removeItem(defaultSettings['local-storage-token-name']);
}

export function setLocale(language) {
    return localStorage.setItem('locale', language);
}

export function getLocale() {
    let locale = localStorage.getItem('locale');
    if(!locale) {
        locale= defaultSettings['locale'];
        setLocale(locale);
    }
    return locale;
}

export function removeLocale() {
    return localStorage.removeItem('locale');
}