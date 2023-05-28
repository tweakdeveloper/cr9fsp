import { CheckCircleFillIcon } from '@primer/octicons-react';

interface SidebarItemProps {
  title: string;
}

function SidebarItem(props: SidebarItemProps) {
  return (
    <li
      className={
        'flex flex-row gap-2 items-center justify-start p-2 ' +
        'rounded hover:bg-slate-500'
      }
    >
      <CheckCircleFillIcon size={16} verticalAlign="middle" /> {props.title}
    </li>
  );
}

export default SidebarItem;
