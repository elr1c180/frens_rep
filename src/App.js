import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'; // Импортируем кнопку из библиотеки
import './App.css';
import React, { useEffect, useState } from 'react';
import './TonConnectPage.css';

function App() {
  const [tonConnectUI] = useTonConnectUI(); // Хук для работы с TonConnect
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Проверяем подключение TonConnect
    const unsubscribe = tonConnectUI.onStatusChange((walletInfo) => {
      setIsConnected(!!walletInfo);
    });

    return () => unsubscribe();
  }, [tonConnectUI]);

  return (
    <div className="ton-connect-page">
      <div className="content">
        <img
          src="https://via.placeholder.com/300"
          alt="main"
          className="main-image"
        />
        <p className="info-text">
          To continue, you need to pay 0.2 TON.
        </p>
        <div className="ton-button">
          <center><TonConnectButton /></center>
        </div>
        {isConnected && (
          <p className="connected-text">You are connected!</p>
        )}
      </div>
    </div>
  );
};

export default App;
