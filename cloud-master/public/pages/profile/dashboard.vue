<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({})
</script>

<template>
  <div class="">
    <header class="bg-white shadow-lg py-6">
      <div class="max-w-[144rem] mx-auto px-12">
        <div class="flex justify-between items-center">
          <div class="" />
          <div class="flex items-center justify-between gap-8">
            <!-- Avatar -->
            <div class="flex items-center justify-end gap-4">
              <h2 class="text-xl font-bold">Anton Petrov</h2>
              <div class="w-16 h-16 rounded-full bg-gray-100">
                <div class="w-full h-full flex items-center justify-center">
                  <h3 class="text-xl font-bold">AP</h3>
                </div>
              </div>
            </div>

            <!-- Profile Menu -->
            <div class="relative">
              <button
                class="w-10 h-10 rounded-full transition-all hover:bg-gray-100 active:bg-gray-250"
              >
                <span class="w-full h-full flex items-center justify-center">
                  <Icon
                    class="w-8 h-8 text-blue-600"
                    icon="solar:alt-arrow-down-bold"
                  />
                </span>
              </button>
              <div
                class="absolute top-auto translate-y-full -bottom-[2.1rem] overflow-hidden bg-white left-auto right-0 w-[16rem] shadow-lg rounded-[0.6rem]"
              >
                <ul class="text-xl font-medium">
                  <li
                    class="py-4 px-6 transition-all hover:bg-gray-100 active:bg-gray-200 cursor-pointer text-red-500"
                  >
                    <div class="flex items-center gap-2">
                      <Icon class="w-6 h-6" icon="material-symbols:logout" />
                      <span>Выйти</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped></style>
