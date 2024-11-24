"use client"
import {Listbox, ListboxItem} from "@nextui-org/react";

export default function App() {
  const items = [
    {
      label: "个人信息",
      key: "infor",
    },
    {
      label: "我的喜欢",
      key: "likes",
    },
    {
      label: "我的作品",
      key: "opus",
    },
    {
      label: "修改信息",
      key: "edit",
    }
  ];

  return (
    <div className="flex align-center justify-around ">
      <Listbox
        items={items}
        aria-label="Dynamic Actions"
        className='w-32'
        onAction={(key) => alert(key)}
      >
        {(item) => (
          <ListboxItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
          >
            {item.label}
          </ListboxItem>
        )}
      </Listbox>
      <div>
        ick
      </div>
    </div>
  );
}