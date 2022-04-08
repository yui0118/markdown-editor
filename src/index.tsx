// JSXを使う場合、Reactライブラリのインポート必須
// React-domライブラリのインポート
import * as React from "react";
import { render } from "react-dom";

const Main = <h1>Markdown Editor</h1>; // Main という変数に React のビューをJSX記法で記述

render(Main, document.getElementById("app")); // appというIDを持つHTML内の要素に対してMainという変数の内容をレンダリングで紐付ける処理
