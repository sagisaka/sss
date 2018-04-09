import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      hovered: false,
      roomStyle: 0,
    }
  }
  onMouseEnter() {
    this.setState({hovered: true});
    console.log(this.state.hovered)
  }

  // カーソルが外れた時に状態を変更するイベントハンドラ
  onMouseLeave() {
    this.setState({hovered: false});
    console.log(this.state.hovered)
  }

  onClick() {
    // this.setState({roomStyle: e});
    console.log(this.state.roomStyle)
  }
  // PostData () {
  //   const roomName = this.refs.roomName.value.trim()
  //   const roomStyle = this.refs.roomStyle.value.trim()
  //   const url = this.props.request
  //   if(!roomName || roomStyle) {
  //     alert('データ入力の不足があります')
  //     return
  //   }
  //   request
  //   .post(url)
  //   .field('roomName', roomName)
  //   .field('roomStyle', roomStyle)
  //   .end(function(err,res){
  //     if (err) {
  //       if(err.status==400){
  //         alert('データ入力を見直してください')
  //       }else if(err.status==401){
  //         alert('アクセストークンを確認してください')
  //       }else{
  //         alert('投稿に失敗しました')
  //       }
  //       return
  //     }
  //     alert('投稿しました')
  //     location.reload();
  //   });
  // }
  render() {
    return (
      <div className="App">
        <h1>部屋作成画面</h1>
        <input type="text" placeholder="部屋タイトル" ref="roomName" />
        <img id='1' ref="a" style={{width: '100px', height: '100px'}} src={'a.png'} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.setState.bind({roomStyle:'1'})} />
        <img id='2' ref="b" style={{width: '100px', height: '100px'}} src={'a.png'} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.setState.bind({roomStyle:'2'})} />
        <img id='2' ref="b" style={{width: '100px', height: '100px'}} src={'a.png'} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClick.bind(this)} />
      </div>
    );
  }
}

export default App;
