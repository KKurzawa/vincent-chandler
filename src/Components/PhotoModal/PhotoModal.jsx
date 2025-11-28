import './PhotoModal.css'

const PhotoModal = ({ photo, onClose }) => {
    if (!photo) return null

    return (
        <article onClick={onClose} className='member-modal fixed z-20 inset-0 bg-opacity-40 backdrop-blur-2xl flex justify-center items-center w-full'>
            <button className='photo-modal-container relative z-20 flex justify-center items-center w-full'>
                <img src={photo.photo} onClick={(e) => e.stopPropagation()} className='modal-photo relative z-20 w-[90%] md:w-[50%] h-auto rounded-md' />
            </button>
        </article>
    )
}

export default PhotoModal