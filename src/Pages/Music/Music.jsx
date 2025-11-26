import './Music.css'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import Albums from '../../Utils/Albums'

const Music = () => {
    return (
        <main className='music-main flex flex-col justify-center items-center gap-20'>
            <h1 className='music-title relative top-10 text-4xl md:text-6xl lg:text-7xl'>Music</h1>
            <article className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40'>
                <section className='latest-release-container flex flex-col justify-center items-center gap-5'>
                    <h2 className='latest-release text-3xl'>Latest Release</h2>
                    <button onClick={() => setTimeout(() => window.open(Albums[1].link, '_blank'), 500)}>
                        <img src={Albums[1].cover} className='album-cover w-[500px] lg:w-[500px] h-auto rounded-md' />
                    </button>
                </section>
                <section className='audio-player-container flex flex-col justify-center items-center gap-5'>
                    <h2 className='stream-music text-3xl'>Stream Music</h2>
                    <AudioPlayer className='audio-player' />
                </section>
            </article>
            <article className='purchase-music-container flex flex-col justify-center items-center gap-10'>
                <h2 className='purchase-music-title text-3xl'>Purchase Music</h2>
                <section className='album-container-container flex gap-10 lg:gap-40'>
                    <section className='left-album-container flex flex-col gap-10 lg:gap-20'>
                        {Albums.map((album, index) => index % 2 === 0 && (
                            <button onClick={() => setTimeout(() => window.open(album.link, '_blank'), 500)}>
                                <img src={album.cover} className='album-cover w-[350px] lg:w-[500px] h-auto rounded-md' />
                            </button>
                        ))}
                    </section>
                    <section className='left-album-container flex flex-col gap-10 lg:gap-20'>
                        {Albums.map((album, index) => index % 2 !== 0 && (
                            <button onClick={() => setTimeout(() => window.open(album.link, '_blank'), 500)}>
                                <img src={album.cover} className='album-cover w-[350px] lg:w-[500px] h-auto rounded-md' />
                            </button>
                        ))}
                    </section>
                </section>
            </article>
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Music