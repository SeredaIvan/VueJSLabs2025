import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Field, Form, ErrorMessage } from 'vee-validate'
import i18n from './i18n'
import './style.css'
import App from './App.vue'
import { useSettingsStore } from './stores/settings'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(pinia)
app.use(i18n)

const settings = useSettingsStore()
i18n.global.locale.value = settings.locale

watch(() => settings.locale, (newLocale) => {
    i18n.global.locale.value = newLocale
})

app.mount('#app')
