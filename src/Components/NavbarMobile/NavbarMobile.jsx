import './NavbarMobile.css'
import { navLinks } from '../../Utils/Navlinks'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    function wait(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })
    }
    async function goToHome() {
        await wait(500)
        navigate(navLinks[0].link)
        setIsOpen(false)
    }

    async function goToAbout() {
        await wait(500)
        navigate(navLinks[1].link)
        setIsOpen(false)
    }

    async function goToPhotos() {
        await wait(500)
        navigate(navLinks[2].link)
        setIsOpen(false)
    }

    async function goToMusic() {
        await wait(500)
        navigate(navLinks[3].link)
        setIsOpen(false)
    }

    async function goToVideos() {
        await wait(500)
        navigate(navLinks[4].link)
        setIsOpen(false)
    }

    async function goToShows() {
        await wait(500)
        navigate(navLinks[5].link)
        setIsOpen(false)
    }

    return (
        <nav className='mobile-nav flex flex-col justify-center items-center md:hidden w-full'>
            <i className='hamburger absolute right-0 top-1 z-20'>
                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    size={20}
                    duration={.5}
                    distance='lg'
                    easing='linear'
                    rounded
                />
            </i>
            {isOpen && (
                <motion.article
                    initial={{ opacity: 0, top: '-200px' }}
                    animate={{ opacity: 1, top: 0 }}
                    exit={{ opacity: 0, top: '-200px' }}
                    transition={{ duration: .5, type: 'spring', stiffness: 30 }}
                    className="dropdown absolute flex flex-col justify-center items-center z-10 left-0 right-0 pt-3 w-full h-[240px]">
                    <button className='mobile-nav-link w-fit' onClick={goToHome}>{navLinks[0].title}</button>
                    <button className='mobile-nav-link w-fit' onClick={goToAbout}>{navLinks[1].title}</button>
                    <button className='mobile-nav-link w-fit' onClick={goToPhotos}>{navLinks[2].title}</button>
                    <button className='mobile-nav-link w-fit' onClick={goToMusic}>{navLinks[3].title}</button>
                    <button className='mobile-nav-link w-fit' onClick={goToVideos}>{navLinks[4].title}</button>
                    <button className='mobile-nav-link w-fit' onClick={goToShows}>{navLinks[5].title}</button>
                </motion.article>
            )
            }
        </nav>
    )
}

export default Navbar