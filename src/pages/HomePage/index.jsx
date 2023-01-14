import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import getDuplicate from '../../utils/duplicate';
import getNumber from '../../utils/helpers';
import getOnlyNumber from '../../utils/only';
import './_home.scss';
const HomePage = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [result, setResult] = useState([]);
  const [duplicate, setDuplicate] = useState([]);
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
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
      setDuplicate(getDuplicate(arr[0], arr2[0]));
      setResult1(getOnlyNumber(arr[0], arr2[0]));
      setResult2(getOnlyNumber(arr2[0], arr[0]));
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    alert('Text copied');
  };
  const copyDuplicate = async () => {
    await navigator.clipboard.writeText(duplicate);
    alert('Text copied');
  };
  const copy1 = async () => {
    await navigator.clipboard.writeText(result1);
    alert('Text copied');
  };
  const copy2 = async () => {
    await navigator.clipboard.writeText(result2);
    alert('Text copied');
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>LỌC - GHÉP DÀN 2D (LOTO, ĐẶC BIỆT 2 SỐ)</h1>
      <div style={{ textAlign: 'center' }}>
        <Link to="/total" >Total</Link>
      </div>
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
      <div>
        <div className="dcm">
          {duplicate.length > 0 ? (
            <div>
              <span>
                <h1>Dàn trùng: </h1> Những số có mặt đồng thời trong cả Dàn 1 và Dàn 2
              </span>
              <h2> Tổng : {duplicate[0].length}</h2>
              <div className="result">
                <p> {JSON.stringify(duplicate[0]?.join(','))?.replace(/["]/g, '')}</p>
              </div>
              <button onClick={copyDuplicate}>Copy</button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="dcm">
        <p>
          {result.length > 0 ? (
            <div>
              <div>
                <span>
                  <h1>Dàn ghép: </h1> Những số có mặt ít nhất 1 lần trong Dàn 1 hoặc Dàn 2, (hoặc có mặt trong cả 2 dàn)
                </span>
                <h2> Tổng : {result[0].length}</h2>
              </div>
              <div className="result">
                <p> {JSON.stringify(result[0]?.join(','))?.replace(/["]/g, '')}</p>
              </div>
              <button onClick={copy}>Copy</button>
            </div>
          ) : (
            ''
          )}
        </p>
      </div>
      <div className="dcm">
        {result1.length > 0 ? (
          <div>
            <span>
              <h1>Dàn 1 loại Dàn 2: </h1> Những số có mặt trong Dàn 1 nhưng không có mặt trong Dàn 2
            </span>
            <h2> Tổng : {result1[0].length}</h2>
            <div className="result">
              <p> {JSON.stringify(result1[0]?.join(','))?.replace(/["]/g, '')}</p>
            </div>
            <button onClick={copy1}>Copy</button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="dcm">
        {result2.length > 0 ? (
          <div>
            <span>
              <h1>Dàn 2 loại Dàn 1: </h1> Những số có mặt trong Dàn 2 nhưng không có mặt trong Dàn 1
            </span>
            <h2> Tổng : {result2[0].length}</h2>
            <div className="result">
              <p> {JSON.stringify(result2[0]?.join(','))?.replace(/["]/g, '')}</p>
            </div>
            <button onClick={copy2}>Copy</button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default HomePage;
