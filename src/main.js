import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './registerServiceWorker'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/split/service-worker.js', { scope: '/split/' })
  .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
  })
  .catch(function(error) {
      console.error('Service Worker registration failed:', error);
  });
}