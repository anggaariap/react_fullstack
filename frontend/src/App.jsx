import React, { useEffect } from 'react'
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/invoice')
    .then(res => res.json())
    .then(data => setData(data))
    .then(err => console.log(err));
  }, [])
  return (
    <div>
      <table>
        <thead>
          <th>No</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Sales Person</th>
          <th>Payment Type</th>
          <th>Notes</th>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={i}>
              <td>{d.no_invoice}</td>
              <td>{d.date}</td>
              <td>{d.customer}</td>
              <td>{d.sales_person}</td>
              <td>{d.payment_type}</td>
              <td>{d.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App