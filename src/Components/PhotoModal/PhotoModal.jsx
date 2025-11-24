import './PhotoModal.css'

const PhotoModal = ({ photo, onClose }) => {
    if (!photo) return null

    return (
        <article onClick={onClose} className='member-modal fixed inset-0 bg-opacity-10 backdrop-blur-md flex justify-center items-center w-full z-10'>
            <button className='photo-modal-container flex justify-center items-center w-full'>
                <img src={photo.photo} onClick={(e) => e.stopPropagation()} className='modal-photo relative w-[50%] h-auto rounded-md' />
            </button>
        </article>
    )
}

export default PhotoModal