import { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

export default function App() {
  console.log("App");
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  
  const onClickOpen = () => {
    setOpen(!open);
  }

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //useCallbackで処理が変わらないなら同じ関数を使い回すことにする
  //useEffectと同様に第二引数に設定した値が変更されたら処理が動くようにする。
  //[]（空の配列）→最初に生成したものをずっと使い続ける
  //onClickCloseは、setOpenを参照しているため、[setOpen]が依存性のリストとなる、[open]はダメ

  // const onClickCoutUp = () => {
  //   setCount( count + 1); 
  // }
  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

