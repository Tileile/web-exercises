// useField.jsx

import { useState } from 'react';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);
  const reset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    reset, // Keep reset available but not spread to the input element
    inputProps: { type, value, onChange }, // Only valid props for <input>
  };
};

export default useField;