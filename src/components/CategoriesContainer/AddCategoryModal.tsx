import React, { MouseEventHandler, useState } from 'react'
import Modal from '../utilComponents/Modal'

interface AddCategoryModalProps {
  show: boolean,
  onClose: MouseEventHandler<HTMLButtonElement>
}

function AddCategoryModal({ show, onClose }: AddCategoryModalProps) {

  const [categoryName, setCategoryName] = useState("")
  const [backgroundUrl, setbackgroundUrl] = useState("")

  const submitHandler = () => {
    console.log("submitted")
  }

  return (
    <Modal
      show={show}
      headline='Create Category'
      onCancel={onClose}
      onSubmit={submitHandler}
      className=""
      btn="Create"
      cancelBtn="Cancel"
    >

      <label className="flex flex-col gap-1 my-1" >
        <span className="" >Category Name</span>
        <input className='w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none  ' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
      </label>

      <label className="flex flex-col gap-1 my-1" >
        <span className="" >Background URL</span>
        <input className='w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none  ' value={backgroundUrl} onChange={(e) => setbackgroundUrl(e.target.value)} />
      </label>


    </Modal>
  )
}

export default AddCategoryModal
