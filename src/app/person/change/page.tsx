"use client"
import { Button, DatePicker, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinAreaBold } from "react-icons/pi";
export default function changePage() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="email"
        label="邮箱"
        placeholder="请输入您的邮箱"
        labelPlacement="outside"
        startContent={
          <MdOutlineMailOutline />
        }
      />
      <Input
        type="text"
        label="名称"
        placeholder="请输入您的名称"
        labelPlacement="outside"
        startContent={<FaRegUser />}
      />
      <Input
        type="text"
        label="地区"
        placeholder="请输入您的地区"
        labelPlacement="outside"
        startContent={<PiMapPinAreaBold />}
      />
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <DatePicker label={"生日(月/日/年)"} variant='flat' />
        </div>
      </div>
      <Select
        label="性别"
        className="max-w-xs"
      >
        <SelectItem key='0'>男</SelectItem>
        <SelectItem key='1'>女</SelectItem>
      </Select>

      <Textarea
        label="个人介绍"
        placeholder="这里是您的个人介绍"
        className="max-w-xs"
      />
      <div className="flex justify-end gap-4">
        <Button color="primary">
          提交
        </Button>
        <Button color="primary" variant="ghost">
        恢复
      </Button> 
      </div>
    </div>
  );
}