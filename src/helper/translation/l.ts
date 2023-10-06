import { translationObject } from './translationObject'

let lang: string = 'ru'

export const setLanguage = () => (lang = lang === 'ru' ? 'en' : 'ru')

export const l = (prop: string) => {
  const phrase = translationObject.find((item) => item.key === prop)
  return phrase ? phrase[lang as keyof typeof phrase] : 'Translation error'
}

