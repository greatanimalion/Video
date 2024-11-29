"use client"
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

export default function myfavorPage() {
  return <div className="flex justify-center w-full">
    <Card className="w-3/4">
      <CardHeader className="flex gap-3">
        <Image
          alt="avator"
          className="w-[100px] h-[100px]"
          radius="sm"
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NcBmhZg6-PBSrbbo2SVssgAAAA?rs=1&pid=ImgDetMain"
        />
        <div className="">
          <p className="">李彬,早上好！</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="p-2">名称:李彬</p>
        <Divider />
        <p className="p-2">状态:VIP</p>
        <Divider />
        <p className="p-2">邮箱:123456@qq.com</p>
        <Divider />
        <p className="p-2">生日:1990-01-01</p>
        <Divider />
        <p className="p-2">性别:男</p>
        <Divider />
        <p className="p-2">地区:北京</p>
        <Divider />
        <p className="p-2">介绍:我听见了生生不息的回响
          我听见了生生不息的激荡
          我听见了破万法的回响
          我听见了天行健的回响
          我听见了强运的回响
          我听到了颠人的回响
          我听到了替罪的回响
          我听到了嫁祸的回响
        </p>
      </CardBody>
      <Divider />
    </Card>
  </div>
}