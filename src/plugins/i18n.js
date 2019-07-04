import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from '@/messages/language'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: localStorage.lang ||'en', // set locale
    messages, // set locale messages
  })
  
export function changeLocale(locale) 
{        
    localStorage.lang = locale;
    i18n.locale = locale;    
}

// export default 
// {
//     i18n,
//     changeLocale
// }
