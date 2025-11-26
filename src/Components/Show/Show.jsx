import './Show.css'
import showList from '../../Utils/ShowInfo'
import ShowModal from '../ShowModal/ShowModal'
import { useState } from 'react'

const Show = () => {
    const [openShowsModal, setOpenShowsModal] = useState(false)
    const [content, setContent] = useState('')

    function notYetAvailable() {
        setContent("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
        setOpenShowsModal(true)
        console.log(openShowsModal)
    }

    function noCover() {
        setContent("This is a free show!")
        setOpenShowsModal(true)
    }

    return (
        <>
            {/* small  */}
            <article>
                {showList.map((show) => (
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
            </article>

            {/* medium and large  */}
            <article className='hidden md:flex flex-col gap-5 lg:gap-10'>
                {showList.map((show) => (
                    <>
                        <section className='show flex gap-5 lg:gap-24 pb-10 text-2xl lg:text-4xl border-b-2'>
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
                            <article className="ticket-container">
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
            </article>
            {openShowsModal && <ShowModal props={{ content, setOpenShowsModal }} />}
        </>
    )
}

export default Show