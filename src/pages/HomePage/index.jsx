import React, { useEffect, useRef, useState } from 'react';
import getNumber from '../../utils/helpers';
import './_home.scss';
const HomePage = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [result, setResult] = useState([]);
  const [lengthNumber, setLengthNumber] = useState('');
  const [lengthNumber2, setLengthNumber2] = useState('');

  const handleClick = () => {
    if ((value === '' || value === null) && (value1 === '' || value1 === null)) {
      alert('vui long nhap');
    } else {
      const arr = [];
      arr.push(value.split(','));
      setLengthNumber(arr[0].length);
      const arr2 = [];
      arr2.push(value1.split(','));
      setLengthNumber2(arr2[0].length);
      setResult(getNumber(arr[0], arr2[0]));
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    alert('Text copied');
  };

  return (
    <>
      <div className="home">
        <div>
          <div>
            <h1>Dàn 1</h1>
            <h2>Tổng : {lengthNumber}</h2>
          </div>
          <textarea type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div>
          <div>
            <h1>Dàn 2</h1>
            <h2>Tổng : {lengthNumber2}</h2>
          </div>
          <textarea type="text" value={value1} onChange={(e) => setValue1(e.target.value)} />
        </div>
      </div>
      <button style={{ display: 'flex', margin: 'auto', marginTop: 30 }} onClick={handleClick}>
        Thực hiện
      </button>
      <div className="dcm">
        <p>
          {result.length > 0 ? (
            <div>
              <div>
                <h1>Kết quả</h1>
                <h2> Tổng : {result[0].length}</h2>
              </div>
              <div className="result">
                <p> {JSON.stringify(result[0]?.join(','))}</p>
              </div>
              <button onClick={copy}>Copy</button>
            </div>
          ) : (
            ''
          )}
        </p>
      </div>
    </>
  );
};

export default HomePage;
