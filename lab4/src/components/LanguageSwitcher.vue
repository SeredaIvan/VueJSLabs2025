<script setup>
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/settings'

const { locale } = useI18n()
const settings = useSettingsStore()

function switchLanguage(lang) {
  locale.value = lang
  settings.setLocale(lang)
}
</script>

<template>
  <div class="language-switcher">
    <button 
      @click="switchLanguage('ua')" 
      :class="{ active: locale === 'ua' }"
      title="Українська"
    >UA</button>
    <button 
      @click="switchLanguage('en')" 
      :class="{ active: locale === 'en' }"
      title="English"
    >EN</button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}
.language-switcher button {
  padding: 0.3em 0.6em;
  font-size: 0.9em;
  background: #f1f5f9;
  color: var(--text-light);
}
.language-switcher button.active {
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
}
</style>
