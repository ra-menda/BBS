import React, { Component } from 'react';
import SelectTab from '../components/selectTab'
import Form from '../components/form'
import Confirmation from '../components/confirmation'
import User_Template from '../components/user_template'


//メインクラス
class MessageAppContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      data_message: [], 
      count: 0,   //文字カウント用
      data_user:[], //ユーザデータ格納
      active: '0',   //ログイン管理
    };

    //定義
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleAllDelete = this.handleAllDelete.bind(this);
    this.userDataSave = this.userDataSave.bind(this);
    this.messageDataSave = this.messageDataSave.bind(this);
  }


  //render前にすること
  componentWillMount(){
    document.title="掲示板";

    this.getJSON(); //localStorageを読み込む
  }


  //データ全部消去
  handleAllDelete(){

    localStorage.clear();
    this.setState({data_message: [] });
    this.getJSON();
  }


  //StateとlocalStrageに保存
  userDataSave(user_tmp){

    this.setState({data_user : user_tmp})
     var setjson = JSON.stringify(this.state.data_user);
     localStorage.setItem('user', setjson);
  }
  
  messageDataSave(message_tmp){

    this.setState({data_message : message_tmp})
    var setjson = JSON.stringify(this.state.data_message);
    localStorage.setItem('data', setjson);
  }


  //ローカルストレージからの読み込み部分
  getJSON(){

    var getjson = localStorage.getItem('data'); //メッセージデータの読み込み
    if(getjson != null){

      var tmp = JSON.parse(getjson)
      this.setState({data_message: tmp});
    }

    getjson = localStorage.getItem('user');  //ユーザデータの読み込み
    if(getjson != null){

      var tmp2 = JSON.parse(getjson);  
      this.setState({data_user: tmp2});
    }else{

      this.setState({data_user: User_Template()});  //初めての場合はユーザの読み込み
    }
  }


   //メッセージデータ保存
  handleAdd(e){
    e.preventDefault();

 
    //日付取得
    var day = new Date();

    //フォームからのデータをdata_messageに追加
    this.state.data_message.unshift({

      comment: e.target.comment.value,  //メッセージ本文
      day: day.toLocaleDateString()+" "+day.toLocaleTimeString(), //投稿日時
      auther: this.state.data_user[this.state.active].user, //投稿者（ログインユーザ）
      auther_id:this.state.active,  //ログインユーザID
    });


    //メッセージを保存
    this.messageDataSave(this.state.data_message);

    //フォームを空に
    e.target.comment.value = '';

    //文字数リセット
    this.handleCountChange(e.target.comment.value.length);

  }

  //メッセージデータ削除
  handleRemove(i){

    //上からi番目のデータを除外
    this.state.data_message.splice(i,1);

    //メッセージを保存
    this.messageDataSave(this.state.data_message);
  }

  //フォームの文字数カウント
  handleCountChange(e){
 
    this.setState({count: e});
  }

  //ログインユーザ名変更
  handleUserChange(event){

      this.setState({active: event.target.value});

  }

 
  //表示部分
  render() {
    return (
      <div>
        <font size="5">メッセージアプリ</font>
        <br />
        ユーザ名を選んでください:
        <SelectTab user={this.state.active}
        image_user={this.state.data_user[this.state.active].image_URL}
        handleChange={this.handleUserChange}
        />

        <Form handleAdd={this.handleAdd} 
        handleCountChange={this.handleCountChange}
        count={this.state.count}
        />

         文字数： {this.state.count}<br />

        <br />
        <Confirmation 
        state={this.state}
        handleRemove={this.handleRemove}
        handlePointAdd={this.handlePointAdd}
        
        />

        <button onClick={() => this.handleAllDelete()}>全削除</button>
      </div>
    );
  }
}
  
  

export default MessageAppContainer;

