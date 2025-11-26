import './Footer.css'
import socialMediaLinks from '../../Utils/SocialMediaLinks'

const Footer = () => {
    const today = new Date()

    return (
        <footer className='footer-main flex flex-col justify-center items-center gap-1 md:gap-5'>
            <section className='media-icons flex gap-2 md:gap-10 mt-5 md:mt-10'>
                {socialMediaLinks.map((item) => (
                    <button className='media-icon text-5xl md:text-7xl' onClick={() => setTimeout(() => window.open(item.link, '_blank'), 500)}>{item.icon}</button>
                ))}
            </section>
            <section className='call-email flex justify-center items-center gap-10'>
                <a href="mailto:vincentachandler@wayne.edu" className='email text-base'>Email Vincent</a>
                <a href="tel:+19175839904" className='phone text-base'>Call Vincent</a>
            </section>
            <section className='copyright-devLink flex flex-col justify-center items-center mb-5 m:mb-10 text-xs md:text-base'>
                <p>Copyright &copy; {today.getFullYear()} Vincent Chandler Music - All Rights Reserved</p>
                <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link'>Site Designed and Built by Kris Kurzawa</button>
            </section>
        </footer>
    )
}

export default Footer