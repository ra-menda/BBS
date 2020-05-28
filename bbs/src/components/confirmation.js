import React from 'react';
import List from './list'

//メッセージの個数を表示

function Confirmation (props){
    
    //メッセージが一つもない場合
    // eslint-disable-next-line eqeqeq
    if (props.state.data_message == 0){

        return (<p>現在メッセージは何もありません。</p>);
    }
    else{
        //メッセージがある場合
    return (
        
        <p>現在{props.state.data_message.length}個のメッセージがあります。
            <List 
            messages={props.state.data_message} 
            handleRemove={props.handleRemove}            
            user={props.state.data_user[props.state.active].user}
            />
            </p>
        );        
    }
}

export default Confirmation;