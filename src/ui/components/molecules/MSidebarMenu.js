import ASidebarMenuItem from "../atoms/ASidebarMenuItem";

export default function MSidebarMenu({ items }) {
  return (
    <div id="menu" className="flex flex-col space-y-2">
      {items.map((item, index) => {
        return <ASidebarMenuItem item={item} key={index} />;
      })}
    </div>
  );
}
