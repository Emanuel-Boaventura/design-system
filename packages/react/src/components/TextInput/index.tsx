import { ComponentProps } from 'react';
import { Input, Prefix, TextInputConteinar } from './styles';

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: ITextInputProps) {
  return (
    <TextInputConteinar>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputConteinar>
  );
}
