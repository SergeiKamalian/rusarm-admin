import {
    css,
    CSSObject,
    DefaultTheme,
    FlattenInterpolation,
    Interpolation,
    InterpolationFunction,
    ThemedStyledProps,
} from 'styled-components';

const sizes = {
    mobileS: '368',
    mobile: '412',
    mobileL: '568',
    tabletS: '640',
    tablet: '768',
    tabletL: '991',
    laptopS: '1200',
    laptop: '1366',
    laptopM: '1440',
    laptopL: '1600',
    desktop: '1920',
};

type KeysType = keyof typeof sizes;
type MediaFunction = <P extends object>(
    first:
        | TemplateStringsArray
        | CSSObject
        | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

export const media = (Object.keys(sizes) as KeysType[]).reduce((acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
}, {} as { [key in KeysType]: MediaFunction });
