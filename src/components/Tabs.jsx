"use client";
import { Tab, Tabs, Card, CardHeader, CardBody } from "@nextui-org/react";
import style from './css/Tabs.module.css'
export default function PersonPage() {

    return <>
        <Tabs size="lg">
            <Tab key="articles" title="文章" />
            <Tab key="videos" title="视频" />
        </Tabs>
        <div style={{ margin: "10px",display:"flex",gap:"10px" }}>
            <Card className={style.card}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">作者:李彬</p>
                    <small className="text-default-500">时间:2024-11-23</small>
                    <h4 className="font-bold text-large">标题:安魂谣</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <img style={{ width: "288px",height: "288px",objectFit: "cover",borderRadius: "10px" }}  src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NcBmhZg6-PBSrbbo2SVssgAAAA?rs=1&pid=ImgDetMain" />
                </CardBody>
            </Card>
            <Card className={style.card}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">作者:李彬</p>
                    <small className="text-default-500">时间:2024-11-23</small>
                    <h4 className="font-bold text-large">标题:安魂谣</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <img style={{ width: "288px",height: "288px",objectFit: "cover",borderRadius: "10px" }}  src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NcBmhZg6-PBSrbbo2SVssgAAAA?rs=1&pid=ImgDetMain" />
                </CardBody>
            </Card>
            <Card className={style.card}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">作者:李彬</p>
                    <small className="text-default-500">时间:2024-11-23</small>
                    <h4 className="font-bold text-large">标题:安魂谣</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <img style={{ width: "288px",height: "288px",objectFit: "cover",borderRadius: "10px" }}  src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NcBmhZg6-PBSrbbo2SVssgAAAA?rs=1&pid=ImgDetMain" />
                </CardBody>
            </Card>
        </div>

    </>;
};

