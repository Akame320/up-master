<script setup lang="ts">
const router = useRouter()

const checkToken = async () => {
  const resp = await $fetch.raw('/api/auth/check-token', {
    ignoreResponseError: true,
  })

  if (resp.status) {
    router.push('/auth/login')
  } else {
    router.push('/profile/dashboard')
  }
}

checkToken()
</script>
