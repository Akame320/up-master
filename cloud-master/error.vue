<script setup lang="ts">
import { type NuxtError, useRouter } from '#app'
import { Icon } from '@iconify/vue'
import AppButton from '~/components/common/ui/AppButton.vue'

const props = defineProps({
  error: Object as () => NuxtError,
})
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="h-[100vh] p-[6rem] w-full flex items-center justify-center">
    <div class="flex gap-[2rem] items-center justify-center">
      <Icon
        icon="iconoir:error-window"
        class="text-red-500 w-[17rem] mx-auto h-[17rem]"
      />
      <div class="grid grid-cols-1 gap-6">
        <h1 class="text-[3rem] font-bold text-left text-red-500">
          {{ props.error.statusCode }}
        </h1>
        <p class="text-[2.4rem]">{{ props.error.statusMessage }}</p>
        <AppButton class="max-w-[20rem]" @click="goHome"
          >Вернуться назад
        </AppButton>
      </div>
    </div>
  </div>
</template>
