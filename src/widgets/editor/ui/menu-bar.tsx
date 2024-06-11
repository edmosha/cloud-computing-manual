import React, { Fragment } from 'react'
import { Item, MenuItem } from './menu-item.tsx'
import {
  CodeOutlined,
  FormatBoldOutlined,
  FormatItalicOutlined,
  DriveFileRenameOutlineOutlined,
  FormatStrikethroughOutlined,
  FormatListNumberedOutlined,
  FormatListBulletedOutlined,
  IntegrationInstructionsOutlined,
  FormatQuoteOutlined,
  HorizontalRuleOutlined, UndoOutlined, RedoOutlined, FormatClearOutlined,
} from '@mui/icons-material'
import { Divider } from '@mui/material'
import { useEditor } from '@tiptap/react'

type Editor = ReturnType<typeof useEditor>

interface MenuBarProps {
  editor: Editor
}

export const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return

  const items = [
    {
      icon: <FormatBoldOutlined />,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: <FormatItalicOutlined />,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: <FormatStrikethroughOutlined />,
      title: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: <CodeOutlined />,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    // {
    //   icon: <DriveFileRenameOutlineOutlined />,
    //   title: 'Highlight',
    //   action: () => editor.chain().focus().toggleHighlight().run(),
    //   isActive: () => editor.isActive('highlight'),
    // },
    {
      type: 'divider',
    },
    {
      icon: <p className={'text-lg font-medium'}>H1</p>,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <p className={'text-lg font-medium'}>H2</p>,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <p className={'text-lg font-medium'}>P</p>,
      title: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: <FormatListBulletedOutlined />,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: <FormatListNumberedOutlined />,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    {
      icon: <IntegrationInstructionsOutlined />,
      title: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: <FormatQuoteOutlined />,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: <HorizontalRuleOutlined />,
      title: 'Horizontal Rule',
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: <FormatClearOutlined />,
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      icon: <UndoOutlined />,
      title: 'Undo',
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: <RedoOutlined />,
      title: 'Redo',
      action: () => editor.chain().focus().redo().run(),
    },
  ]

  return (
    <div className={'bg-gray-300 p-2 flex gap-2'}>
      {items.map((item, index) => (
        <Fragment key={index}>
          {!!item?.type
            ? <Divider orientation="vertical" sx={{ mx: 1 }} flexItem />
            : <MenuItem {...item as Item} />}
        </Fragment>
      ))}
    </div>
  )
}