import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {

    return (
        <main id='top' className='header-main flex justify-center items-end w-full h-[600px]'>
            <h1 className='title absolute top-10 left-10 text-7xl lg:text-9xl'>Vincent <span className='chandler'>Chandler</span></h1>
            <h2 className='sub-title absolute top-32 lg:top-48 left-12 lg:left-20 text-3xl lg:text-4xl font-bold'>Trombonist/Composer/Music Educator</h2>
            <Navbar />
        </main>
    )
}

export default Header