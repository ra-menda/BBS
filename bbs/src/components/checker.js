import React from 'react';

//ボタンの有効無効チェッカー

function Checker (props) {

        // eslint-disable-next-line default-case
        switch(props.type){

            case 'addCheck' :
                
            //文字が5文字以上であれば追加ボタンを有効化
                if(props.count > 4){

                    return <input type="submit" value="追加する"/>;
                }
                else{

                    return <input type="submit" value="追加する" disabled='true'/>;
                }
                // eslint-disable-next-line no-unreachable
                break;            
            
            case 'delCeck' :
                   
            //削除権限は投稿者のみ
                if(props.user === props.auther){
                    
                    return <button onClick={() => props.handleRemove(props.i)}>削除</button>;                    
                }
                else{  

                    return <button disabled='true'>削除</button>;
                }
                // eslint-disable-next-line no-unreachable
                break;
       }
}

export default Checker;