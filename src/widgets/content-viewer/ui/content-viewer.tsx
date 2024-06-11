import React, { useMemo } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Heading from '@tiptap/extension-heading'
import horizontalRule from '@tiptap/extension-horizontal-rule'
import { generateHTML } from '@tiptap/core'

const extensions = [
  StarterKit,
  // Highlight,
  // TaskList,
  // TaskItem,
]

interface ContentViewerProps {
  content: JSON
}

export const ContentViewer = ({ content }: ContentViewerProps) => {
  // const output = useMemo(() => {
  //   if (!content) return

  //   return generateHTML(content, [
  //     Document,
  //     Paragraph,
  //     Heading,
  //     Text,
  //     Bold,
  //     horizontalRule,
  //     // other extensions …
  //   ])
  // }, [content])

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: 'py-5 focus:outline-none',
      },
    },
    editable: false,
  })

  return (
    <div className={'w-full'}>
      <EditorContent editor={editor} />
    </div>
  )
}