import React, { Component } from "react";
import { observer } from "mobx-react";

const style={width:300,margin:'0 auto', padding:'20px', border:'2px solid #ccc'}

@observer
export default class Counter extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div style={style}>
        <h3>当前计数 : { store.count }</h3>
        <button onClick={ e => store.increaseCounter() }>增加 </button>
        &nbsp;&nbsp;
        <button onClick={ e => store.decreaseCounter() }>减少</button>

      {/**********不推荐用法******************/}
      &nbsp;&nbsp;
      <button onClick={ e => store.count ++ }>直接增加</button>
      </div>
    );
  }
}