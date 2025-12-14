import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    const locale = ref('ua')

    function setLocale(newLocale) {
        locale.value = newLocale
    }

    return { locale, setLocale }
}, {
    persist: {
        key: 'my-app-settings',
        pick: ['locale']
    }
})
