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
import { ProgressWidget } from 'widgets/progres-widget'

export const HandbookUserPage = () => {
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
        <h1>Облачные вычисления</h1>
        <ProgressWidget allCount={29} count={4} />
        {content.map((section, sectionIndex) => (
          <ThematicSection
            title={section.name}
            key={section._id}
            id={section._id}
          >
            {section.articles.map((article, index) => (
              <ArticleItem
                id={article._id}
                key={article._id}
                isWrited={index < 3 && sectionIndex < 2}
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