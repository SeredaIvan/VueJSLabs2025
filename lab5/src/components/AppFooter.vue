<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">
            <i class="pi pi-bolt"></i>
            <span>TaskFlow</span>
          </div>
          <p>Управління задачами нового покоління для сучасних команд</p>
        </div>

        <div class="footer-col">
          <h4>Продукт</h4>
          <ul>
            <li><a href="#">Функції</a></li>
            <li><a href="#">Тарифи</a></li>
            <li><a href="#">Інтеграції</a></li>
            <li>
              <a href="#" @click.prevent="copyApiEndpoint">
                API <i class="pi pi-copy"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Компанія</h4>
          <ul>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Кар'єра</a></li>
            <li><a href="#">Контакти</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Підтримка</h4>
          <ul>
            <li><a href="#">Довідка</a></li>
            <li><a href="#">Документація</a></li>
            <li><a href="#">Статус системи</a></li>
            <li>
              <a href="#" @click.prevent="copySupportEmail">
                Підтримка <i class="pi pi-copy"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Divider />

      <div class="footer-bottom">
        <p>© 2024 TaskFlow. Всі права захищені.</p>
        <div class="footer-links">
          <a href="#">Політика конфіденційності</a>
          <a href="#">Умови використання</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import Divider from 'primevue/divider'

const instance = getCurrentInstance()

const apiEndpoint = 'https://api.taskflow.com/v1'
const supportEmail = 'support@taskflow.com'

const copyApiEndpoint = () => {
  instance.appContext.config.globalProperties.$copyToClipboard(apiEndpoint, 'API endpoint')
}

const copySupportEmail = () => {
  instance.appContext.config.globalProperties.$copyToClipboard(supportEmail, 'Email')
}
</script>

<style scoped>
.footer {
  background: #020617;
  padding: 3rem 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer-logo i {
  font-size: 2rem;
  color: #a855f7;
}

.footer-col h4 {
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-col a:hover {
  color: #a855f7;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
}

.footer-links a:hover {
  color: #a855f7;
}
</style>