import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './_total.scss';
const Total = () => {
  const [point, setPoint] = useState('');
  const [exactly, setExactly] = useState('');
  const [result, setResult] = useState('');
  const [point1, setPoint1] = useState('');
  const [exactly1, setExactly1] = useState('');
  const [result1, setResult1] = useState('');
  const [point2, setPoint2] = useState('');
  const [exactly2, setExactly2] = useState('');
  const [result2, setResult2] = useState('');
  const [point3, setPoint3] = useState('');
  const [exactly3, setExactly3] = useState('');
  const [result3, setResult3] = useState('');
  const [money, setMoney] = useState('');
  const [money1, setMoney1] = useState('');
  const [money2, setMoney2] = useState('');
  const [money3, setMoney3] = useState('');
  const formatMoney = money?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const formatMoney1 = money1?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const formatMoney2 = money2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const formatMoney3 = money3?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const resultMoney = result?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const resultMoney1 = result1?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const resultMoney2 = result2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const resultMoney3 = result3?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  const interest = Number(exactly * 80000 - point * 23000).toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
  const interest1 = Number(exactly1 * 90 - point1).toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
  const interest2 = Number(exactly2 * 80000 - point2 * 22500).toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
  const interest3 = Number(exactly3 * 80000 - point3 * 21700).toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
  useEffect(() => {
    setResult(Number(exactly * 80000));
    setMoney(Number(point * 23000));
  }, [point, exactly]);
  useEffect(() => {
    setResult1(Number(exactly1 * 90));
    setMoney1(Number(point1));
  }, [point1, exactly1]);
  useEffect(() => {
    setResult2(Number(exactly2 * 80000));
    setMoney2(Number(point2 * 22500));
  }, [point2, exactly2]);
  useEffect(() => {
    setResult3(Number(exactly3 * 80000));
    setMoney3(Number(point3 * 21700));
  }, [point3, exactly3]);

  return (
    <>
      <div>
        <h1>Lô 23/80</h1>
        <div>
          <div className='total' style={{ display: 'flex', justifyContent: 'center', gap: 200 }}>
            <div>
              <label style={{ marginRight: 20 }}>Điểm đánh</label>
              <input type="number" value={point} onChange={(e) => setPoint(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền đánh : {formatMoney}</h2>
            </div>
            <div>
              <label style={{ marginRight: 20 }}>Điểm trúng</label>
              <input type="number" value={exactly} onChange={(e) => setExactly(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền trúng : {resultMoney}</h2>
            </div>
            <div>
              <h2>Tiền nhận về: {interest}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* hhhhh */}
      <div>
        <h1>Lô 22,5/80</h1>
        <div>
          <div className='total' style={{ display: 'flex', justifyContent: 'center', gap: 200 }}>
            <div>
              <label style={{ marginRight: 20 }}>Điểm đánh</label>
              <input type="number" value={point2} onChange={(e) => setPoint2(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền đánh : {formatMoney2}</h2>
            </div>
            <div>
              <label style={{ marginRight: 20 }}>Điểm trúng</label>
              <input type="number" value={exactly2} onChange={(e) => setExactly2(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền trúng : {resultMoney2}</h2>
            </div>
            <div>
              <h2>Tiền nhận về: {interest2}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* hhhhh */}
      <div>
        <h1>Lô 21,7/80</h1>
        <div>
          <div className='total'  style={{ display: 'flex', justifyContent: 'center', gap: 200 }}>
            <div>
              <label style={{ marginRight: 20 }}>Điểm đánh</label>
              <input type="number" value={point3} onChange={(e) => setPoint3(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền đánh : {formatMoney3}</h2>
            </div>
            <div>
              <label style={{ marginRight: 20 }}>Điểm trúng</label>
              <input type="number" value={exactly3} onChange={(e) => setExactly3(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền trúng : {resultMoney3}</h2>
            </div>
            <div>
              <h2>Tiền nhận về: {interest3}</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Đề 1/90</h1>
        <div>
          <div className='total' style={{ display: 'flex', justifyContent: 'center', gap: 200 }}>
            <div>
              <label style={{ marginRight: 20 }}>Tiền đánh</label>
              <input type="number" value={point1} onChange={(e) => setPoint1(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền đánh : {formatMoney1}</h2>
            </div>
            <div>
              <label style={{ marginRight: 20 }}>Tiền trúng</label>
              <input type="number" value={exactly1} onChange={(e) => setExactly1(e.target.value)} min={1} />
              <h2 style={{ textAlign: 'center' }}>Tiền trúng : {resultMoney1}</h2>
            </div>
            <div>
              <h2>Tiền nhận về: {interest1}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
