<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  (e: 'click', value: any): void
}>()
</script>

<template>
  <button
    :disabled="loading"
    class="block text-2xl h-[4rem] px-8 font-bold text-white m-0 outline-0 rounded-[10rem] hover:bg-blue-600 active:bg-blue-700 transition-all bg-blue-500 outline-none"
    @click="emit('click', $event)"
  >
    <slot v-if="!props.loading" />
    <PulseLoader v-else :loading="props.loading" color="#fff" />
  </button>
</template>

<style scoped></style>
