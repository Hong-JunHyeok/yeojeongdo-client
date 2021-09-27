import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          font-family: "Noto Sans KR", sans-serif;
        }
        html,
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};

export default GlobalStyle;
