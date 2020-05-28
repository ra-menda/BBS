import React from 'react';

//ユーザの変更タブ

const SelectTab = (props) => (
  <form>
    <img
      //画像は幅50px指定

        src={props.image_user}
        width="50"
        alt={props.user}
        />
          <label>
            <select value={props.user} onChange={props.handleChange}>
              <option value='0'>ラーメン</option>
              <option value='1'>たろう</option>
              <option value='2'>だいわ</option>
              <option value="3">神</option>
            </select>
          </label>
  </form>
);

export default SelectTab;