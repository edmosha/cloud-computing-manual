import React, { useEffect } from 'react'
import { useEditor, EditorContent, EditorContentProps, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from 'widgets/editor/ui/menu-bar.tsx'
import { Button } from 'shared/ui'
// import Highlight from '@tiptap/extension-highlight'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'


// define your extension array
const extensions = [
  StarterKit,
  // Highlight,
  // TaskList,
  // TaskItem,
]

type EditorProps = {
  content?: JSON
  onChange: (value: JSONContent | undefined) => void
}

export const Editor = ({ content, onChange }: EditorProps) => {

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: 'py-5 px-3 focus:outline-none min-h-[60vh]',
      },
    },
    onUpdate: () => onChange(editor?.getJSON())
  })

  return (
    <div>
      <div className={'my-5 border-2 rounded-lg'}>
        {editor && <MenuBar editor={editor} />}
        <EditorContent editor={editor} />
      </div>
      <Button type={'button'} onClick={() => console.log(editor?.getJSON())}>SaveJSON</Button>
    </div>

  )
}