import { useState } from 'react'
import { ADD_CATEGORY } from '../../utils/apiQueries'
import { sendQuery } from '../../utils/sendQuery'
import Modal from '../utilComponents/Modal'

interface AddCategoryModalProps {
  show: boolean,
  onClose: (() => void | null)
}

function AddCategoryModal({ show, onClose }: AddCategoryModalProps) {

  const [categoryName, setCategoryName] = useState("")
  const [backgroundUrl, setBackgroundUrl] = useState("")
  const [description, setDescription] = useState("")

  const submitHandler = async () => {
    try {
      const data = await sendQuery(ADD_CATEGORY(categoryName, backgroundUrl, description))

      if (data) {
        console.log(data)

        setCategoryName("")
        setBackgroundUrl("")
        onClose()
      }

    } catch (err) {
      console.log(err)
    }
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
        <input className='w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none  ' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
      </label>

      <label className="flex flex-col gap-1 my-1" >
        <span className="" >Background URL</span>
        <input className='w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none  ' value={backgroundUrl} onChange={(e) => setBackgroundUrl(e.target.value)} />
      </label>

      <label className="flex flex-col gap-1 my-1" >
        <span className="" >Description</span>
        <textarea className='w-full py-1 px-2 border-2 rounded-md focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-1 focus:outline-none  ' value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>


    </Modal>
  )
}

export default AddCategoryModal
