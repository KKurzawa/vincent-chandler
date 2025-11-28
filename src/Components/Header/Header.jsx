import './Header.css'
import Navbar from '../Navbar/Navbar'
import NavbarMobile from '../NavbarMobile/NavbarMobile.jsx'

const Header = () => {

    return (
        <main id='top' className='header-main relative flex justify-center items-end w-full h-[600px]'>
            <h1 className='title absolute top-3 left-3 md:top-10 md:left-10 text-4xl md:text-7xl lg:text-9xl'>Vincent <span className='chandler'>Chandler</span></h1>
            <h2 className='sub-title absolute top-12 md:top-32 lg:top-48 left-4 md:left-12 lg:left-20 text-lg md:text-3xl lg:text-4xl'>Trombonist/Composer/Music Educator</h2>
            <Navbar />
            <NavbarMobile />
        </main>
    )
}

export default Header