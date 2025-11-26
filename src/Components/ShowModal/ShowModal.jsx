import './ShowModal.css'
import { IoMdClose } from "react-icons/io"
import { useRef } from 'react'

const ShowModal = ({ props: { content, setOpenShowsModal } }) => {
    const modalRef = useRef()

    function handleClick() {
        setOpenShowsModal(false)
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            handleClick()
        }
    }

    return (
        <article ref={modalRef} onClick={closeModal} className='shows-modal fixed inset-0 bg-opacity-10 backdrop-blur-md flex justify-center items-center z-10'>
            <section className='modal-info-container flex flex-col gap-5 w-[90%] h-fit rounded-md'>
                <button onClick={handleClick}><IoMdClose className='modal-x relative top-2 md:top-5 left-[90%] md:left-[95%] text-4xl' /></button>
                <article className='shows-modal-message p-5 md:p-10 text-center flex flex-col justify-center'>
                    <h2 className='shows-modal-text pb-5 text-3xl md:text-5xl'>{content}</h2>
                </article>
            </section>
        </article>
    )
}

export default ShowModal