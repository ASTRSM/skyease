import { ChangeEvent, useState } from 'react';

type UseInputReturnType = [
  string,
  (event: ChangeEvent<HTMLSelectElement>) => void
];

export default function useInput(initialValue: string): UseInputReturnType {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}