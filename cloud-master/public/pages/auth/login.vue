<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'

import AppInputText from 'public/components/common/ui/AppInputText.vue'
import AuthForm from 'public/components/auth/AuthForm.vue'

const router = useRouter()

const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
})

const showError = ref(false)
const error = ref('')
const loading = ref(false)

const rules = {
  email: { required, email },
  password: { required, minLengthValue: minLength(8) },
}

const v$ = useVuelidate(rules, form.value)

const onSubmit = async () => {
  if (loading.value) return

  loading.value = true
  showError.value = true
  v$.value.$touch()

  const result = await v$.value.$validate()
  if (!result) {
    loading.value = false

    return
  }

  const login = await $fetch.raw('/api/auth/login', {
    method: 'POST',
    body: { email: form.value.email, password: form.value.password },
    ignoreResponseError: true,
  })

  if (login.status !== 200) {
    error.value = login._data.message
    loading.value = false

    return
  }

  loading.value = false
  await router.push('/profile/dashboard')
}
</script>

<template>
  <AuthForm
    :error="error"
    :loading="loading"
    title="Войти в аккаунт"
    btn-text="Отправить"
    link-route="/auth/sign-in"
    link-text="Зарегистрироваться"
    @click="onSubmit"
  >
    <div class="col-span-2 grid grid-cols-1 gap-8">
      <AppInputText
        v-model="v$.email.$model"
        :error="v$.email.$errors[0]?.$message"
        :show-error="showError"
        :disabled="loading"
        placeholder="Почта*"
      />
      <AppInputText
        v-model="v$.password.$model"
        :error="v$.password.$errors[0]?.$message"
        :disabled="loading"
        :show-error="showError"
        placeholder="Пароль*"
        type="password"
      />
    </div>
  </AuthForm>
</template>
