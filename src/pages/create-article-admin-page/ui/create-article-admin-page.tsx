import React, { FormEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Editor } from 'widgets/editor'
import { Input } from '@mui/material'
import { Button } from 'shared/ui'
import { createArticle, getArticle } from 'app/api/api.ts'
import { Article } from 'entities/articles'
import { JSONContent } from '@tiptap/react'

const emptyContent = {
  type: 'doc',
  content: [],
}

export const CreateArticleAdminPage = () => {
  const [value, setValue] = useState<{title: string, content: JSONContent | undefined}>({
    title: '',
    content: emptyContent,
  })

  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('handler')
    e.preventDefault()

    void createArticle({
      name: value.title,
      content: JSON.stringify(value.content ? value.content : emptyContent),
      sectionId: location.state.sectionId
    })

    navigate('/handbook')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={'py-2 mb-8'}>Создание новой статьи</h1>
      <Input
        value={value.title}
        onChange={(e) =>
          setValue((prevState) => ({...prevState, title: e.target.value}))
        }
        name={'name'}
        placeholder={'Название статьи'}
        className={'px-4 text-2xl font-bold'}
        fullWidth
        required
      />
      <Editor
        onChange={(newValue) =>
          setValue((value) => ({...value, content: newValue}))
        }
      />
      <Button type={'submit'}>Сохранить</Button>
    </form>
  )
}