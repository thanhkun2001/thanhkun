import React, { useEffect, useRef, useState } from 'react';
import GetNumber from '../../components/GetNumber';
import getNumber from '../../utils/helpers';

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
      <div style={{ display: 'flex', marginTop: 120, justifyContent: 'center', gap: 120 }}>
        <div>
          <div>
            <h3>Dàn 1</h3>
            <span>{lengthNumber}</span>
          </div>
          <textarea
            style={{ fontSize: '14px', width: '300px', height: '200px' }}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <div>
            <h3>Dàn 2</h3>
            <span>{lengthNumber2}</span>
          </div>
          <textarea
            style={{ fontSize: '14px', width: '300px', height: '200px' }}
            type="text"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
        </div>
      </div>
      <button style={{ display: 'flex', margin: 'auto', marginTop: 30 }} onClick={handleClick}>
        Thực hiện
      </button>
      <div style={{ width: 500 }}>
        <p>
          {' '}
          {result.length > 0 ? (
            <div>
              <div>
                <h2> {result[0].length}</h2>
                {console.log(result[0])}
              </div>
              <div>
                {JSON.stringify(result[0]?.join(','))}
                <button onClick={copy}>Copy</button>
              </div>
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
