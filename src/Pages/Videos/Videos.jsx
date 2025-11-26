import './Videos.css'
import { videoLinks } from '../../Utils/VideoLinks'

const Videos = () => {
    return (
        <main className='videos-main flex flex-col justify-center items-center gap-10 md:gap-20'>
            <h2 className='videos-title relative top-5 md:top-10 text-5xl md:text-6xl lg:text-7xl'>Videos</h2>
            <section className='videos-container-container flex gap-20'>

                {/* small */}
                <article className='videos-container flex flex-col md:hidden gap-10'>
                    {videoLinks.map((video) => (
                        <iframe className='video w-[360px] h-[200px] rounded-md' src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    ))}
                </article>

                {/* medium and large  */}
                <article className='videos-container hidden md:flex flex-col gap-10 lg:gap-20'>
                    {videoLinks.map((video, index) => index < 4 && (
                        <iframe className='video lg:w-[560px] lg:h-[315px] rounded-md' src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    ))}
                </article>
                <article className='videos-container hidden md:flex flex-col gap-10 lg:gap-20'>
                    {videoLinks.map((video, index) => index > 3 && (
                        <iframe className='video lg:w-[560px] lg:h-[315px] rounded-md' src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    ))}
                </article>
            </section>
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Videos