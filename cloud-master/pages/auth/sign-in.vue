<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, minLength, required, sameAs } from '@vuelidate/validators'

import AppInputText from '~/components/common/ui/AppInputText.vue'
import AuthForm from '~/components/auth/AuthForm.vue'

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
  firstName: { required },
  lastName: { required },
  email: { required, email },
  password: { required, minLengthValue: minLength(8) },
  confirmPassword: {
    required,
    sameAsRef: sameAs(computed(() => form.value.password)),
  },
}

const v$ = useVuelidate(rules, form.value)

const avatar = computed(() => {
  if (form.value.firstName.length > 0 && form.value.lastName.length > 0) {
    return form.value.firstName?.[0] + form.value.lastName?.[0] + ''
  } else {
    return ''
  }
})

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

  const newUser = await $fetch.raw('/api/auth/sign', {
    method: 'POST',
    body: { ...form.value },
    ignoreResponseError: true,
  })

  if (newUser.status !== 200) {
    error.value = newUser._data.message
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
    link-text="Войти в учетную запись"
    link-route="/auth/login"
    :loading="loading"
    :avatar="avatar"
    title="Регистрация"
    btn-text="Зарегистрироваться"
    :error="error"
    @click="onSubmit"
  >
    <AppInputText
      v-model="v$.email.$model"
      :error="v$.email.$errors[0]?.$message"
      :show-error="showError"
      :disabled="loading"
      class="col-span-2"
      placeholder="Почта*"
    />
    <AppInputText
      v-model="v$.firstName.$model"
      :error="v$.firstName.$errors[0]?.$message"
      :disabled="loading"
      :show-error="showError"
      placeholder="Имя*"
    />
    <AppInputText
      v-model="v$.lastName.$model"
      :error="v$.lastName.$errors[0]?.$message"
      :disabled="loading"
      :show-error="showError"
      placeholder="Фамилия*"
    />
    <AppInputText
      v-model="v$.password.$model"
      :error="v$.password.$errors[0]?.$message"
      :disabled="loading"
      :show-error="showError"
      placeholder="Пароль*"
      type="password"
    />
    <AppInputText
      v-model="v$.confirmPassword.$model"
      :error="v$.confirmPassword.$errors[0]?.$message"
      :disabled="loading"
      :show-error="showError"
      placeholder="Подтвердить пароль*"
      type="password"
    />
  </AuthForm>
</template>
