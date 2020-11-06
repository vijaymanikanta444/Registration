import React from 'react';

export default function Slider({
  callback = (val) => console.log('test', val),
  disabled = false,
  readOnly = false,
}) {
  return (
    <div>
      <input
        type="range"
        disabled={disabled}
        readOnly={readOnly}
        // onChange={({ target: { value } }) => callback(value)}
        onChange={({ target: { value } }) => callback(value)}
      />

      <h1>hi</h1>
    </div>
  );
}
