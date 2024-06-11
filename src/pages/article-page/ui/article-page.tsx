import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContentViewer } from 'widgets/content-viewer'
import { Article } from 'entities/articles'
import { getArticle } from 'app/api/api.ts'
import { Button } from 'shared/ui'
import { Done } from '@mui/icons-material'

export const ArticlePage = () => {
  const { articleId } = useParams()

  const [article, setArticle] = useState<Article>()
  const [articleContent, setArticleContent] = useState(null)

  console.log(articleContent)

  useEffect(() => {
    const fetchData = async () => {
      if (!articleId) return

      try {
        const response = await getArticle(articleId)
        setArticle(response.data)

        const content = response.data.content
        setArticleContent(await JSON.parse(content))
      } catch (e) {
        console.log(e)
      }
    }

    void fetchData()
  }, [articleId])

  if (!article || !articleContent) return

  return (
    <div>
      <h1 className={'mb-6'}>{article.name}</h1>
      <ContentViewer content={articleContent} />
      <Button className={'flex gap-2 border border-primary bg-white text-primary mt-4'} style={{borderStyle: 'solid'}}>
        Отметить прочитанным
        <Done />
      </Button>
    </div>
  )
}