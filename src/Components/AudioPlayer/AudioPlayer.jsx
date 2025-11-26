import './AudioPlayer.css'

const AudioPlayer = () => {
    return (
        <article>
            <iframe className='audio-player w-[350px] h-[400px] md:w-[500px] md:h-[500px]' data-testid="embed-iframe" src="https://open.spotify.com/embed/album/7KOu2tkaQTAQOKwfs3hIgr?utm_source=generator" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </article>
    )
}

export default AudioPlayer