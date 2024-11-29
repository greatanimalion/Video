"use client"
import { useEffect, useState } from "react"
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { CiSaveUp2 } from "react-icons/ci";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { getItem, setItem } from '@/utils/localStore'
import { FaImage } from "react-icons/fa6";

const typeList = [
    { key: 1, label: "电影" },
    { key: 2, label: "电视剧" },
    { key: 3, label: "综艺节目" },
    { key: 4, label: "动漫" },
    { key: 5, label: "音乐" },
    { key: 6, label: "其他" }
]
export default function () {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const article = getItem('article')
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState(article?.content || '')
    const [title, setTitle] = useState(article?.title || '标题')
    const [type, setType] = useState(article?.type || 1)
    const toolbarConfig: Partial<IToolbarConfig> = {
        excludeKeys: ['group-video', 'insertTable', 'group-more-style', 'todo', 'codeBlock', 'headerSelect'],
    }
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容',
        MENU_CONF: {
            uploadImage: {
                async customUpload(file: File, insertFn: Function) {
                    insertFn("https://ts1.cn.mm.bing.net/th/id/R-C.d134a087fe96d33aa3136d053d8a1739?rik=5l1ykcWFUmYa%2fA&riu=http%3a%2f%2fwww.sailmet.com%2fContent%2fImages%2fnews%2f202109%2f973bdd5bc42343e8a01c74e0379741c2.jpeg&ehk=Q7kbLfhIbUtgk3DM7xbzG9bN0knEOtWjZHnz%2bsC2Y5g%3d&risl=&pid=ImgRaw&r=0", "img")
                }
            }
        }
    }

    function keepArticle() {
        setItem('article', { title, type, content: editor?.getHtml() || "" })
    }
    useEffect(() => {
        const handel = () => {
            alert("是否保存点当前作品")
        }
        window.addEventListener('beforeunload', handel)
        return window.removeEventListener('beforeunload', handel)
    }, [])
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    return <>
        <div className="flex justify-between items-center">
            <div style={{ width: '40%' }}>
                <Input variant="flat" value={title} label="标题" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <Select
                label="选择类型"
                className="max-w-xs"
                defaultSelectedKeys={[String(type)]}
                onChange={(e) => setType(Number(e.target.value))}
            >
                {typeList.map((i) => (
                    <SelectItem key={i.key}>
                        {i.label}
                    </SelectItem>
                ))}
            </Select>
            <Button color="primary" variant="light" onPress={handleOpen}><CiSaveUp2 />发表作品</Button>
            <Button color="primary" variant="light" onClick={() => {
                keepArticle()
            }}>保存</Button>
            <div></div>
        </div>
        <div style={{ marginTop: '20px', zIndex: 100 }}>
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => setHtml(editor.getHtml())}
                mode="default"
                style={{ height: (window.innerHeight - 210) + 'px', overflowY: 'hidden' }}
            />
        </div>
        <Modal
            size="lg"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">请添加封面图</ModalHeader>
                        <ModalBody>
                            <div className="flex justify-center items-center cursor-pointer">
                                <FaImage style={{ fontSize: '150px', color: 'white' }} />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                取消
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                发表
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}