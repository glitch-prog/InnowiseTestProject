import React from 'react';
import {useController} from 'react-hook-form';
import {Input} from '../../controls/Input/Input';
import {IReactHookInput} from './ReactHookInput.interface';

export const ReactHookInput = ({
  control,
  name,
  placeholder,
}: IReactHookInput) => {
  const {field} = useController({control, defaultValue: '', name});
  return (
    <Input
      value={field.value}
      onChange={field.onChange}
      placeholder={placeholder}
    />
  );
};
