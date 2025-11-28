import './Navbar.css'
import { navLinks } from '../../Utils/Navlinks'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    function wait(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })
    }
    async function goToHome() {
        await wait(500)
        navigate(navLinks[0].link)
    }

    async function goToAbout() {
        await wait(500)
        navigate(navLinks[1].link)
    }

    async function goToPhotos() {
        await wait(500)
        navigate(navLinks[2].link)
    }

    async function goToMusic() {
        await wait(500)
        navigate(navLinks[3].link)
    }

    async function goToVideos() {
        await wait(500)
        navigate(navLinks[4].link)
    }

    async function goToShows() {
        await wait(500)
        navigate(navLinks[5].link)
    }

    return (
        <nav className='nav-links hidden relative bottom-10 md:flex gap-10 text-3xl lg:text-6xl'>
            <button className='nav-link' onClick={goToHome}>{navLinks[0].title}</button>
            <button className='nav-link' onClick={goToAbout}>{navLinks[1].title}</button>
            <button className='nav-link' onClick={goToPhotos}>{navLinks[2].title}</button>
            <button className='nav-link' onClick={goToMusic}>{navLinks[3].title}</button>
            <button className='nav-link' onClick={goToVideos}>{navLinks[4].title}</button>
            <button className='nav-link' onClick={goToShows}>{navLinks[5].title}</button>
        </nav>
    )
}

export default Navbar