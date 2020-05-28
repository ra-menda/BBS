import React from 'react';
import Checker from '../components/checker'

//メッセージリストの表示

const List = (props) => (
    <ul>
      {props.messages.map((data_message, i) => {
        return <li key={i}>
        <div>
        {data_message.comment}<br />
        投稿した人:{data_message.auther}&emsp;
        投稿日時：{data_message.day}&emsp;
        
        <Checker 
        type='delCeck'
        auther={data_message.auther} 
        i={i}
        handleRemove={props.handleRemove}      
        user={props.user}
        />
        
        <hr />
        </div>
      </li>
    })}
  </ul>
);


export default List;