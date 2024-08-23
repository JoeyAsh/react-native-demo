import {Colors, darkColors, lightColors} from '@rneui/base';

export const colors = {
    primary: '#E03E1A',
    secondary: '#00B39A',
    background: '#1F1F1F',
    success: '#66BB6A',
    warning: '#FFA726',
    error: '#F44336',
    divider: 'rgba(255,255,255,0.12)',
};

export const darkPalette: Colors = {
    ...darkColors,
    ...colors,
};

export const lightPalette: Colors = {
    ...lightColors,
    ...colors,
};
