//after creating types, just import it right away;

import types from './types';
import themes from '../themes';

// themes: export default {
//     light: {
//         text: 'black-text',
//         nav: 'grey lighten-4',
//         accent: 'grey',
//         main: 'grey lighten-2'
//     },
//     dark: {
//         text: 'white-text',
//         nav: 'indigo darken-4',
//         accent: 'indigo',
//         main: 'indigo accent-1'
//     }
// }

const defaultTheme = 'light';
//our action creator

export const setTheme = (themeName = defaultTheme) => {
    let theme = themes[themeName];

    if(!theme){
        theme = themes[defaultTheme];
        themeName = defaultTheme;
    }
    return {
        type: types.SET_THEME,
        themeName: themeName,
        theme: theme
    }
}