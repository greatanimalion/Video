"use client"
import { Button, Card, DatePicker, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinAreaBold } from "react-icons/pi";
export default function changePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex justify-center w-full">
      <Card className="w-full">
        <div className="flex flex-col gap-4 p-4">
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
          <Button color="danger" endContent={<RiLockPasswordFill />} className="w-80" onPress={onOpen}>
            修改密码
          </Button>
          <div className="flex justify-end gap-4">
            <Button color="primary">
              提交
            </Button>
            <Button color="primary" variant="ghost">
              恢复
            </Button>
          </div>
        </div>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">修改密码</ModalHeader>
              <ModalBody>
                <ChangePassword />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  取消
                </Button>
                <Button color="primary" onPress={onClose}>
                  确认
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function ChangePassword() {
  return <>
    <Input
      type="password"
      label="原密码"
      placeholder="请输入您的原密码"
      labelPlacement="outside"
      startContent={<RiLockPasswordFill />}
    />
    <Input
      type="password"
      label="新密码"
      placeholder="请输入您的新密码"
      labelPlacement="outside"
      startContent={<RiLockPasswordFill />}
    />
    <Input
      type="password"
      label="确认密码"
      placeholder="请输入您的确认密码"
      labelPlacement="outside"
      startContent={<RiLockPasswordFill />}
    />
  </>
}
