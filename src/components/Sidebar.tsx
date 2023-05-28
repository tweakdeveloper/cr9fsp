import SidebarItem from './SidebarItem';

interface SidebarProps {
  components: string[];
}

function Sidebar(props: SidebarProps) {
  return (
    <div className="bg-slate-600 flex flex-col gap-4 items-stretch justify-start p-4 text-white w-1/4">
      <h1 className="font-bold text-xl">CR9-fsp</h1>
      <ul className="flex flex-col gap-3 items-stretch justify-start">
        {props.components.map((item, idx) => (
          <SidebarItem key={idx} title={item} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
