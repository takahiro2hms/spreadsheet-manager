import React, { useState } from 'react';

function Form({ onSubmit }) {
const [store, setStore] = useState('A店');  // 最初のオプションをデフォルト値として設定
const [wholesaler, setWholesaler] = useState('X業者');
const [category, setCategory] = useState('507');
const [cartNo, setCartNo] = useState('999999');
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ store, wholesaler, category, cartNo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>店舗
        <select value={store} onChange={e => setStore(e.target.value)}>
          <option value="A店">A店</option>
          <option value="B店">B店</option>
        </select>
      </label>
      <label>卸
        <select value={wholesaler} onChange={e => setWholesaler(e.target.value)}>
          <option value="X業者">X業者</option>
          <option value="Y業者">Y業者</option>
        </select>
      </label>
      <label>カテゴリ
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="507">507</option>
        </select>
      </label>
      <label>カートNo
        <input type="text" value={cartNo} onChange={e => setCartNo(e.target.value)} />
      </label>
      <button type="submit">送信</button>
    </form>
  );
}

export default Form;
