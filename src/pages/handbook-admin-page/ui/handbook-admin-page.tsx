import React, { useEffect, useState } from 'react'
import { ThematicSection } from 'widgets/thematic-section'
import { ArticleItem } from 'pages/handbook-admin-page/ui/article-item.tsx'
import { auth, getContent } from 'app/api/api.ts'
import { Section } from 'entities/articles'
import { useNavigate } from 'react-router-dom'
import { IconButton } from 'shared/ui/icon-button'
import { AddOutlined } from '@mui/icons-material'
import { CreateSectionModal } from 'pages/handbook-admin-page/ui/create-section-modal.tsx'
import { Button } from 'shared/ui'

export const HandbookAdminPage = () => {
  const [content, setContent] = useState<Section[]>([])
  const [isCreateSectionModalOpen, setIsCreateSectionModalOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await auth()
        console.log('user', response.data)
      } catch (e) {
        navigate('/login')
      }
    }

    void fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent()
        setContent(response?.data || [])
      } catch (e) {
        console.log(e)
      }
    }

    void fetchData()
  }, [])

  console.log(content)

  return (
    <>
      <div className={'flex flex-col gap-8'}>
        <h1 className={'mb-6'}>Облачные вычисления</h1>
        {content.map((section) => (
          <ThematicSection
            title={section.name}
            key={section._id}
            id={section._id}
            editable
          >
            {section.articles.map((article) => (
              <ArticleItem
                id={article._id}
                key={article._id}
              >
                {article.name}
              </ArticleItem>
            ))}
          </ThematicSection>
        ))}
        <Button
          onClick={() => setIsCreateSectionModalOpen(true)}
          className={'w-fit gap-2'}
        >
          <AddOutlined />
          Добавить раздел
        </Button>
      </div>

      <CreateSectionModal
        isOpen={isCreateSectionModalOpen}
        onClose={() => setIsCreateSectionModalOpen(false)}
        setContent={setContent}
      />
    </>
  )
}