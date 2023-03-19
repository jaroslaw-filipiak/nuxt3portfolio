import { defineStore } from 'pinia';

export const useNavStore = defineStore('navigation', {
  state: () => {
    return {
      isVisible: false,
    };
  },
  actions: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    closeNav() {
      console.log('close nav.');
      this.isVisible = false;
    },
  },
});
