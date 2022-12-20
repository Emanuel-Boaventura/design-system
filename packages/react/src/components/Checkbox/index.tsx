import { Check } from 'phosphor-react';
import { ComponentProps } from 'react';
import { CheckboxContainer, CheckboxIndicator } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: ICheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight='bold' />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}
