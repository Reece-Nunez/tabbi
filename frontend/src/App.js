import React, { useEffect, useState } from 'react';
import paymentService from './services/paymentService';

function App() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const data = await paymentService.getPayments();
      setPayments(data);
    };

    fetchPayments();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Welcome to Tabbi</h1>
        <ul>
          {payments.map((payment, index) => (
            <li key={index}>{payment.message}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
