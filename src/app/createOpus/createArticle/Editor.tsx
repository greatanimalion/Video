"use client"
import { forwardRef, memo, useEffect, useImperativeHandle, useState } from "react"
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

const typeList = [
    { key: 1, label: "电影" },
    { key: 2, label: "电视剧" },
    { key: 3, label: "综艺节目" },
    { key: 4, label: "动漫" },
    { key: 5, label: "音乐" },
    { key: 6, label: "其他" }
  ]
export default forwardRef(memo(function ({ str }: { str: string }, ref) {
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState('')
    const [title, setTitle] = useState('标题')
    const [type, setType] = useState(1)
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
    
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    return <>
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
    </>
}))