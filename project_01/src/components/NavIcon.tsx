import type { navIconCompInt } from '../interfaces/componentProps';

export default function NavIcon({
  icon: Icon,
  active = false,
  size = 24,
}: navIconCompInt) {
  return (
    <Icon
      size={size}
      fill={active ? 'var(--primary-pressed)' : 'none'}
      strokeWidth={active ? 0 : 2}
    />
  );
}
