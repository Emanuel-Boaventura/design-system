import { AvatarConteinar, AvatarFallback, AvatarImage } from './styles';
import { User } from 'phosphor-react';
import { ComponentProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: IAvatarProps) {
  return (
    <AvatarConteinar>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarConteinar>
  );
}
