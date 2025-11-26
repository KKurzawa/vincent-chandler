import './Shows.css'
import Show from '../../Components/Show/Show.jsx'

const Shows = () => {
    return (
        <main className='flex flex-col justify-center items-center gap-5 md:gap-18'>
            <h2 className='shows-title relative top-5 md:top-10 text-4xl md:text-6xl lg:text-7xl'>Shows</h2>
            <Show />
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Shows