// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        files: ['**/*.ts', '**/*.js', '**/*.vue'],
        rules: {
            'vue/no-v-html': 'off',
            'no-console': 'off',
            'vue/script-setup-no-uses-vars': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/v-on-event-hyphenation': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            'linebreak-style': ['error', 'unix'],
        },
    },
)
