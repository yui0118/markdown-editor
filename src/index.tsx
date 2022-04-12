import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"; // styled-components の createGlobalStyleをインポート
import { Editor } from "./pages/editor"; // 作成したエディタ画面(コンポーネント)をインポート

// styled-components の createGlobalStyle を使って、ページ全体に適用できるスタイルを定義
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`;
const Main = (
  <>
    <GlobalStyle /> {/* GlobalStyleコンポーネントを読み込む */}
    <Editor /> {/* インポートしたEditorコンポーネントを読み込む */}
  </>
);

render(Main, document.getElementById("app"));
