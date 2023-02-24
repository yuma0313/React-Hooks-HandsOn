import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  //value,setValue（年齢）変更時に発火
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },[value, setValue])

  return [value, setValue];
}

export default useLocalStorage;