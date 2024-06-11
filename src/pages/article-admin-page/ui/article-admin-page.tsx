import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

export const ArticleAdminPage = () => {
  const { articleId } = useParams()

  const [article, setArticle] = useState<Article>()
  const [articleContent, setArticleContent] = useState(null)

  const [value, setValue] = useState<{title: string, content: JSONContent | undefined}>({
    title: '',
    content: {},
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!articleId) return

      try {
        const response = await getArticle(articleId)
        setArticle(response.data)

        const content = await JSON.parse(response.data.content)
        setArticleContent(content)
        setValue({
          title: response.data.name,
          content,
        })
      } catch (e) {
        console.log(e)
      }
    }

    void fetchData()
  }, [articleId])

  if (!article || !articleContent) return

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('handler')
    e.preventDefault()

    createArticle({
      name: value.title,
      content: JSON.stringify(value.content ? value.content : emptyContent),
      sectionId: article.sectionId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
        content={articleContent}
        onChange={(newValue) =>
          setValue((value) => ({...value, content: newValue}))
      }
      />
      <Button type={'submit'}>Сохранить</Button>
    </form>
  )
}