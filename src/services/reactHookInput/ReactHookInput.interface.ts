import {Control, FieldValues} from 'react-hook-form';

export interface IReactHookInput {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
}
