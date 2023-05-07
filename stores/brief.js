import { defineStore } from 'pinia';

export const useBriefStore = defineStore('brief', {
  state: () => {
    return {
      formData: {
        selectedServices: {
          projektowanieGraficzne: false,
          uslugaProgramistyczna: false,
          stronaWWW: false,
          stalaWspolpraca: false,
        },
        contactData: {
          email: 'email',
          phone: null,
        },
        message: 'Twoja wiadomość',
        acceptance: true,
      },
    };
  },
});
