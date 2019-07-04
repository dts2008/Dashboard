import Vue from 'vue'
import VueI18n from 'vue-i18n'
import FlagIcon from 'vue-flag-icon';

Vue.use(VueI18n)
Vue.use(FlagIcon);

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export const i18n = new VueI18n({
  locale:  localStorage.lang || process.env.VUE_APP_I18N_LOCALE || 'en', // set locale
  fallbackLocale: localStorage.lang || process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})

export const languages = [
  { 
      flag: 'us', 
      language: 'en', 
      title: 'English',
      // message: en
  }, 
  { 
      flag: 'ru', 
      language: 'ru', 
      title: 'Русский',
      // message: ru
  }
  ]   

export function changeLocale(locale) 
{        
    localStorage.lang = locale;
    i18n.locale = locale;    
}