module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        'prettier',
    ],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'linebreak-style': ['error', 'unix'],
        'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 2 }],
        'vue/script-setup-uses-vars': 'error',
        'vue/html-closing-bracket-newline': [
            'error',
            { singleline: 'never', multiline: 'always' },
        ],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
}
