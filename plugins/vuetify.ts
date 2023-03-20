import { createVuetify, ThemeDefinition } from 'vuetify'

const tsfTheme: ThemeDefinition = {
  colors: {
    primarY: "#3b82f6"
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      VTextField: {
        variant: "outlined",
        color: "primary"
      },
    },
    theme: {
      defaultTheme: "tsfTheme",
      themes: {
        tsfTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})