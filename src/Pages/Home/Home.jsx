import './Home.css'
import showList from '../../Utils/ShowInfo'
import { useState } from 'react'
import ShowModal from '../../Components/ShowModal/ShowModal'
import Embraceable from '/images/VincentEmbraceable.jpg'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../../Utils/Navlinks'
import { videoLinks } from '../../Utils/VideoLinks'
import { IoLogoVenmo } from "react-icons/io5";

const Home = () => {
    const [openShowsModal, setOpenShowsModal] = useState(false)
    const [content, setContent] = useState('')

    const five = showList.slice(0, 5)
    const navigate = useNavigate()

    function notYetAvailable() {
        setContent("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
        setOpenShowsModal(true)
        console.log(openShowsModal)
    }

    function noCover() {
        setContent("This is a free show!")
        setOpenShowsModal(true)
    }

    function wait(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })
    }

    async function goToShows() {
        await wait(500)
        navigate(navLinks[5].link)
    }

    async function goToMusic() {
        await wait(500)
        navigate(navLinks[3].link)
    }

    async function goToVideos() {
        await wait(500)
        navigate(navLinks[4].link)
    }

    return (
        <main className='main-home flex flex-col items-center gap-10'>
            <article className='flex flex-col items-center gap-0 md:gap-20'>
                <h2 className='upcoming-shows-title text-4xl md:text-6xl lg:text-7xl relative top-5 md:top-10 mb-5 md:mb:0'>Upcoming Shows</h2>
                {/* small */}

                {five.map((show) => (
                    <article className='mobile-upcoming-shows md:hidden flex flex-col justify-center items-center mt-5 pb-5 text-2xl'>
                        <section className='mobile-date flex gap-4'>
                            <h3>{show.date}</h3>
                            <h3>{show.time}</h3>
                        </section>
                        <button className='mobile-city' onClick={() => setTimeout(() => window.open(show.cityLink, '_blank'), 500)}>{show.city}</button>
                        <button className='mobile-venue' onClick={() => setTimeout(() => window.open(show.cityLink, '_blank'), 500)}>{show.venue}</button>
                        <article className="mobile-ticket-container">
                            {show.ticketLink === 1 ? (
                                <button onClick={notYetAvailable} className='mobile-ticket-link'>Get Tickets</button>
                            ) :
                                show.ticketLink === 2 ? (
                                    <button onClick={noCover} className='mobile-ticket-link'>Get Tickets</button>
                                ) :
                                    (
                                        <button onClick={() => setTimeout(() =>
                                            window.open(show.ticketLink, '_blank'), 500
                                        )} className='mobile-ticket-link'>Get Tickets</button>
                                    )
                            }
                        </article>
                    </article>

                ))}

                {/* medium and large */}

                <article className='hidden md:flex flex-col items-center gap-5 lg:gap-10'>
                    {five.map((show) => (
                        <>
                            <section className='show flex gap-5 lg:gap-24 pb-10 text-lg md:text-2xl lg:text-4xl border-b-2'>
                                <ol className='date-time flex gap-2 lg:gap-10'>
                                    <h2 className='date'>{show.date}</h2>
                                    <h2 className='time'>{show.time}</h2>
                                </ol>
                                <ol className='city-venue flex gap-3 lg:gap-10'>
                                    <button className='city' onClick={() => setTimeout(() => window.open(show.cityLink, '_blank'), 500)}>
                                        <h2>{show.city}</h2>
                                    </button>
                                    <button className='venue' onClick={() => setTimeout(() => window.open(show.venueLink, '_blank'), 500)}>
                                        <h2>{show.venue}</h2>
                                    </button>
                                </ol>
                                <article className="mobile-ticket-container">
                                    {show.ticketLink === 1 ? (
                                        <button onClick={notYetAvailable} className='ticket-link'>Get Tickets</button>
                                    ) :
                                        show.ticketLink === 2 ? (
                                            <button onClick={noCover} className='ticket-link'>Get Tickets</button>
                                        ) :
                                            (
                                                <button onClick={() => setTimeout(() =>
                                                    window.open(show.ticketLink, '_blank'), 500
                                                )} className='ticket-link'>Get Tickets</button>
                                            )
                                    }
                                </article>
                            </section>
                        </>
                    ))}
                    <button onClick={goToShows} className='shows-view-more text-2xl'>More Shows</button>
                </article>
                {openShowsModal && <ShowModal props={{ content, setOpenShowsModal }} />}
            </article>

            <section className='flex flex-col lg:flex-row justify-center gap-5 md:gap-10 lg:gap-40'>
                <article className='flex flex-col items-center gap-2 md:gap-10'>
                    <h2 className='latest-release text-4xl md:text-6xl lg:text-7xl'>Latest Release</h2>
                    <button onClick={() => setTimeout(() => window.open('https://music.apple.com/us/album/embraceable/856403086', '_blank'), 500)}>
                        <img src={Embraceable} className='latest-release-photo w-[350px] md:w-full h-auto rounded-md' />
                    </button>
                    <button onClick={goToMusic} className='music-view-more text-2xl'>More Music</button>
                </article>
                <article className='flex flex-col items-center gap-2 md:gap-10'>
                    <h2 className='home-video text-4xl md:text-6xl lg:text-7xl'>Video</h2>
                    <iframe className='video w-[360px] h-[200px] md:w-[560px] md:h-[315px] rounded-md' src={videoLinks[0].link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    <button onClick={goToVideos} className='videos-view-more text-2xl'>More Videos</button>
                    <h2 className='donation-text relative top-5 md:top-0 lg:bottom-5 text-4xl md:text-6xl lg:text-7xl'>Leave a Donation</h2>
                    <button onClick={() => setTimeout(() => window.open('https://account.venmo.com/u/vincentachandler,_blank'), 500)}>
                        <IoLogoVenmo className='venmo-icon relative top-5 md:top-0 lg:bottom-10 text-7xl' />
                    </button>
                </article>
            </section>
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Home