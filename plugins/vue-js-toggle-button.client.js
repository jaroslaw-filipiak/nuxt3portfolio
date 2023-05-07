import { ToggleButton } from 'vue-js-toggle-button';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(ToggleButton);
  nuxtApp.ToggleButton = ToggleButton;
});
