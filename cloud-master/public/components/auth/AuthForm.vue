<script setup lang="ts">
import AppButton from 'public/components/common/ui/AppButton.vue'

export interface Props {
  title: string
  avatar?: string
  error?: string
  loading?: boolean
  btnText: string
  linkText: string
  linkRoute: string
}

const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  error: '',
  loading: false,
})

const emit = defineEmits<{
  (e: 'click', value: any): void
}>()
</script>

<template>
  <div class="h-[100vh] bg-gray-100 flex items-center justify-center">
    <div
      class="max-w-[60rem] relative w-full bg-white shadow-xl rounded-3xl p-20"
    >
      <div
        v-if="props.avatar.length"
        class="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"
      >
        <div
          class="rounded-full w-28 h-28 bg-gray-200 flex items-center justify-center"
        >
          <h3 class="text-3xl font-bold text-blue-950 uppercase">
            {{ props.avatar }}
          </h3>
        </div>
      </div>

      <h1 class="text-blue-950 text-4xl font-bold text-center">
        {{ props.title }}
      </h1>
      <div class="grid grid-cols-2 mt-16 gap-8">
        <slot />
      </div>
      <div class="relative mt-16">
        <AppButton
          :loading="loading"
          class="w-[20rem] mx-auto"
          @click="emit('click', $event)"
        >
          {{ props.btnText }}
        </AppButton>

        <div class="absolute top-auto w-full bottom-6 translate-y-full">
          <p v-if="error.length" class="text-red-500 text-14 text-center mt-10">
            {{ error }}
          </p>
        </div>
      </div>

      <div class="mt-12">
        <p class="text-xl text-center mt-10">
          Или вы можете
          <NuxtLink
            class="text-blue-500 underline hover:text-blue-600 font-bold active:text-blue-700"
            :to="props.linkRoute"
            >{{ props.linkText }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
