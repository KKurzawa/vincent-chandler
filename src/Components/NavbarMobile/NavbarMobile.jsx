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
        navigate(navLinks[0].link)
        await wait(500)
        setIsOpen(false)
    }

    async function goToAbout() {
        navigate(navLinks[1].link)
        await wait(500)
        setIsOpen(false)
    }

    async function goToPhotos() {
        navigate(navLinks[2].link)
        await wait(500)
        setIsOpen(false)
    }

    async function goToMusic() {
        navigate(navLinks[3].link)
        await wait(500)
        setIsOpen(false)
    }

    async function goToVideos() {
        navigate(navLinks[4].link)
        await wait(500)
        setIsOpen(false)
    }

    async function goToShows() {
        navigate(navLinks[5].link)
        await wait(500)
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
            <AnimatePresence>
                {isOpen && (
                    <motion.article
                        initial={{ top: '-1000px' }}
                        animate={{ top: 0 }}
                        exit={{ top: '-1000px' }}
                        transition={{ duration: 1, type: 'spring', stiffness: 30, delay: 0 }}
                        className="dropdown absolute flex flex-col justify-center items-center z-10 left-0 right-0 pt-3 w-full h-screen">
                        <button className='mobile-nav-link w-fit' onClick={goToHome}>{navLinks[0].title}</button>
                        <button className='mobile-nav-link w-fit' onClick={goToAbout}>{navLinks[1].title}</button>
                        <button className='mobile-nav-link w-fit' onClick={goToPhotos}>{navLinks[2].title}</button>
                        <button className='mobile-nav-link w-fit' onClick={goToMusic}>{navLinks[3].title}</button>
                        <button className='mobile-nav-link w-fit' onClick={goToVideos}>{navLinks[4].title}</button>
                        <button className='mobile-nav-link w-fit' onClick={goToShows}>{navLinks[5].title}</button>
                    </motion.article>
                )
                }
            </AnimatePresence>
        </nav>
    )
}

export default Navbar