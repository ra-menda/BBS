import React from 'react';
import Checker from '../components/checker'

//メッセージ入力フォーム

const Form = (props) => (
  <form onSubmit={props.handleAdd}>
    <div>
      メッセージを入力してください：<br />
      <textarea name="comment" type="text"  //テキストエリア宣言
      onChange={e => props.handleCountChange(e.target.value.length)}//文字カウンター
      />　
      <Checker count={props.count}　type= 'addCheck' />
    </div>
  </form>
);

export default Form;