import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, MouseEventHandler } from 'react'
import Button from '../Button'

interface ModalProps {
  show: boolean,
  onCancel: MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
  headline: string,
  btn?: string | React.ReactNode,
  onSubmit: MouseEventHandler<HTMLButtonElement>,
  cancelBtn?: string | React.ReactNode,
  className?: string,
  btnLoading?: boolean
}

function Modal({ show, onCancel, children, headline, btn, btnLoading = false, onSubmit, cancelBtn, className }: ModalProps) {

  return (
    <Transition show={show} as={Fragment} >
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={show}
        onClose={onCancel as () => void}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-8 scale-75 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 -translate-y-8 sm-translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-md px-6 py-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div>
                <Dialog.Title as="h3" className="text-lg leading-3 font-medium py-2 text-gray-900 ">
                  {headline}
                </Dialog.Title>

                <div className={className}>
                  {children}
                </div>
              </div>

              {(btn || cancelBtn) && (
                <div className="flex py-2 items-center justify-end gap-3">

                  {cancelBtn && (
                    typeof (cancelBtn) === "string" ? (
                      <Button className="my-1 " variant="outline-danger" type="button" onClick={onCancel} >{cancelBtn}</Button>
                    ) : cancelBtn
                  )}

                  {btn && (
                    typeof (btn) === "string" ? (
                      <Button className="my-1" variant="primary" type="button" onClick={onSubmit} loading={btnLoading}  >{btn}</Button>
                    ) : btn

                  )}

                </div>
              )}
            </div>
          </Transition.Child>

        </div>


      </Dialog>
    </Transition>
  )
}

export default Modal