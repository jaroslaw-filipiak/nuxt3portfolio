import { defineStore } from 'pinia';

export const useBriefStore = defineStore('brief', {
  state: () => {
    return {
      formData: {
        budget: 5000,
        name_surname: '',
        email: null,
        phone: null,
        message: null,
        acpt_required: 0,
      },
    };
  },
});
