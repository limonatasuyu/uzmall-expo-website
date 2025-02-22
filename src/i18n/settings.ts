export const fallbackLng = 'ru'
export const languages = ['ru', 'en']
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
} 