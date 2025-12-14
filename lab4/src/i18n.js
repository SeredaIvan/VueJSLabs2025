import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

const i18n = createI18n({
  legacy: false, // Composition API
  locale: 'ua', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    ua
  },
  modifiers: {
    // Custom modifier implementation
    snake: (str) => str.split(' ').join('_'),
    // Built-in modifiers (lower, upper, capitalize) are supported by default in vue-i18n but we can explicit them if needed or add more.
    // Let's add an 'exclaim' modifier as the custom one requested.
    exclaim: (str) => `${str}!`
  }
})

export default i18n
