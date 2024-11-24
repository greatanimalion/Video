"use client"
import { FaRegImages } from "react-icons/fa6";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { useEffect, useState } from "react";
import Message from "@/utils/msg";
const type = [
  { key: 1, label: "电影" },
  { key: 2, label: "电视剧" },
  { key: 3, label: "综艺节目" },
  { key: 4, label: "动漫" },
  { key: 5, label: "音乐" },
  { key: 6, label: "其他" }
]
export default function () {
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  const [html, setHtml] = useState('<p>你好！</p>')
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>我是个卑微之人</p>')
    }, 1500)
  }, [])
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: ['group-video', 'insertTable', 'group-more-style', 'todo', 'codeBlock', 'headerSelect'],
  }
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容',
    MENU_CONF: {
      uploadImg: {
        server: 'https://www.example.com/upload'
      }
    }
  }
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
        <Input variant="flat" label="标题" />
      </div>
      <Select
        label="选择类型"
        className="max-w-xs"
      >
        {type.map((i) => (
          <SelectItem key={i.key}>
            {i.label}
          </SelectItem>
        ))}
      </Select>
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
        style={{ height: '500px', overflowY: 'hidden' }}
      />
    </div>
  </>;
};