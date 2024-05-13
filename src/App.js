// App.js
import React, { useState } from 'react';
import Form from './Form';
import './styles.css';  // スタイルシートのインポート

function App() {
  const [message, setMessage] = useState('');
  const handleSubmit = async (formData) => {
    const formDataObject = new URLSearchParams();
    Object.keys(formData).forEach(key => {
      formDataObject.append(key, formData[key]);
    });

    const response = await fetch('https://script.google.com/macros/s/AKfycbziilugIsbnKYyJ9uC5poFiRGm6wO2iCDAgY7iOsvO3384K6BwxJGZaQIqCqMkOMf-f/exec', {
      method: 'POST',
      body: formDataObject,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const resultText = await response.text();
    setMessage('データ入力が成功しました！');
    setTimeout(() => setMessage(''), 1000);  // 3秒後にメッセージを消す
  };

  return (
    <div>
      <h1>データ入力フォーム</h1>
      <Form onSubmit={handleSubmit} />
      {message && <div className="success-message">{message}</div>}
    </div>
  );
}

export default App;
