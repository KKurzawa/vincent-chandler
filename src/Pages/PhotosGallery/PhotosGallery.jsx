import './PhotosGallery.css'
import photos from '../../Utils/Photos.jsx'
import { useState } from 'react'
import PhotoModal from '../../Components/PhotoModal/PhotoModal.jsx'

const Photos = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const openModal = (photo) => {
        setSelectedPhoto(photo)
    }

    const closeModal = () => {
        setSelectedPhoto(null)
    }

    return (
        <main className='flex flex-col justify-center items-center gap-20'>
            <h2 className='gallery-title relative top-10 text-6xl lg:text-7xl'>Gallery</h2>
            <article className='flex gap-10 lg:gap-28'>
                <section className='flex flex-col gap-10 lg:gap-28'>
                    {photos.map((item) => item.id < 8 && (
                        <button onClick={() => openModal(item)}>
                            <article className='vince-photo-container w-[300px] h-[150px] lg:w-[500px] lg:h-[250px] overflow-hidden rounded-md'>
                                <img src={item.photo} className='vince-photo w-full h-auto' />
                            </article>
                        </button>
                    ))}
                </section>
                <section className='flex flex-col gap-10 lg:gap-28'>
                    {photos.map((item) => item.id > 7 && (
                        <button onClick={() => openModal(item)}>
                            <article className='vince-photo-container w-[300px] h-[150px] lg:w-[500px] lg:h-[250px] overflow-hidden rounded-md'>
                                <img src={item.photo} className='vince-photo w-full h-auto' />
                            </article>
                        </button>
                    ))}
                </section>
            </article>
            <PhotoModal photo={selectedPhoto} onClose={closeModal} />
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Photos