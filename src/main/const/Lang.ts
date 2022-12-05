export enum Lang {
    EN = "en",
    ES = "es"
}

export const langList = [
    Lang.EN,
    Lang.ES
]

export const getLangFullName = (lang: Lang): string => {
    switch(lang) {
    case Lang.EN:
        return "English"
    case Lang.ES:
        return "Español"
    default:
        return ""
    }
}