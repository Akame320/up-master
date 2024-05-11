<script setup lang="ts">
export interface Props {
  type?: string
  placeholder?: string
  modelValue?: string
  error?: string | undefined
  showError?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
  error: '',
  showError: false,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any | null): void
}>()
</script>

<template>
  <div class="relative w-full">
    <input
      :disabled="disabled"
      :class="{
        '!bg-gray-100 !border-blue-50 text-gray-300 placeholder:text-gray-300':
          disabled,
      }"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      class="w-full text-2xl placeholder:text-gray-400 text-blue-950 py-4 px-8 bg-white rounded-1 border-[2px] rounded-[0.6rem] border-blue-100 outline-none"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <div class="absolute top-auto translate-y-full -bottom-0.5">
      <p v-if="props.error && props.showError" class="text-red-500 text-12">
        {{ error }}
      </p>
    </div>
  </div>
</template>
