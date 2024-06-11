import React, { useState } from 'react'
import { Box, Input, Modal } from '@mui/material'
import { Button } from 'shared/ui'
import { createSection, getContent } from 'app/api/api.ts'

type CreateSectionModalProps = {
  isOpen: boolean
  onClose: () => void
  setContent: (value: any) => void
}

export const CreateSectionModal = ({ isOpen, onClose, setContent }: CreateSectionModalProps) => {
  const [newSectionName, setNewSectionName] = useState('')

  const handleCreateSection = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const section = await createSection({
      name: newSectionName,
    })

    setContent((prev) => [...prev, section])

    // const updateContent = async () => {
    //   try {
    //     const response = await getContent()
    //     setContent(response.data)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
    //
    // void updateContent()

    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={'bg-white rounded-xl px-6 py-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'}>
        <form className={'flex flex-col gap-8 w-[400px]'} onSubmit={handleCreateSection}>
          <h2>Введите название раздела</h2>
          <Input
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            required
          />
          <Button type={'submit'}>Создать</Button>
        </form>
      </Box>
    </Modal>
  )
}