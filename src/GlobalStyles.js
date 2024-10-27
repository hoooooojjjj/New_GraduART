import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
      :root {
        --primary-purple: #a348f6;
        --black: #000000;
        --dark-gray: #686868;
        --white: #ffffff;
        --light-gray: #909090;
        --overlay-fill: rgba(217, 217, 217, 0.3); /* #D9D9D9 with 30% opacity */
      }

      /* Typography */
      @font-face {
        font-family: 'godorounded';
        src: url('./assets/fonts/godoRoundedR.woff2') format('woff2'),
             url('./assets/fonts/godoRoundedR.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
        font-family: 'godo';
        src: url('./assets/fonts/GodoM.woff2') format('woff2'),
             url('./assets/fonts/GodoM.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
        font-family: 'KoddiUDOnGothic';
        src: url('./assets/fonts/KoddiUDOnGothic-Regular.woff2') format('woff2'),
             url('./assets/fonts/KoddiUDOnGothic-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
    `}
    />
);
export default GlobalStyles;