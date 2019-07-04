// import en from './language.en';
// import ru from './language.ru';

// export default {
//     en,
//     ru,
//     ua: {},
// }

export const languages = [
    { 
        flag: 'us', 
        language: 'en', 
        title: 'English',
        // message: en
    }, 
    { 
        flag: 'ru', 
        language: 'ru', 
        title: 'Русский',
        // message: ru
    }
    ]    

// const expLanguage = languages.reduce((res, l) => {
//         res[l.language] = l.message
//         return res
//     }, {})
    
// export default expLanguage
    
    


// export const languageInfo = [{
//     flag : 'us',
//     title : 'en',
//     data : en,
// }, {
//     flag : 'ru',
//     title : 'ru',
//     data : ru,
// },
// ]

// const def = languageInfo.map(l => l.title))
// const def = languageInfo.reduce((res, l) => {
//     res[l.title] = l.data
//     return res
// }, {})

// //console.log('langs:', def)

// export default def

