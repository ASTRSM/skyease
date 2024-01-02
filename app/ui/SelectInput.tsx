import React, { ChangeEvent } from 'react';

interface SelectInputProps {
  value: string;
  onHandleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  metadata: string[];
  name: string;
}

export function SelectInput({ value, onHandleChange, metadata, name }: SelectInputProps) {
  return (
    <select
      value={value}
      onChange={(e) => onHandleChange(e)}
    >
      <option value=''>
        {name}
      </option>
      {metadata.map((item: string) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        )
      })}
    </select>
  );
}