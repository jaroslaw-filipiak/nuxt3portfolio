<template>
  <div v-if="filteredErrors.length" class="text-accent text-base">
    <div class="flex items-start gap-2">
      <IconAlertCircleFilled />
      <div v-for="error in filteredErrors" :key="error">
        {{ error.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { IconAlertCircleFilled } from '@tabler/icons-vue';
  import { defineProps, computed } from 'vue';
  const props = defineProps({
    errors: {
      type: Array,
      default: () => [],
    },
    field: {
      type: String,
      default: '',
    },
  });

  const filteredErrors = computed(() => {
    return props.errors.filter((error) => error.field === props.field);
  });
</script>

<style lang="scss" scoped></style>
