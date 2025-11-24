import './Bio.css'
import VinceSix from '../../assets/Images/VincentSix.jpg'
import awards from '../../Utils/Awards'

const Bio = () => {
    return (
        <main className='flex flex-col justify-center items-center gap-20'>
            <h2 className='about-title text-7xl relative top-10'>About</h2>
            <img src={VinceSix} className='about-vince-photo w-[55%] rounded-md' />
            <article className='bio text-xl flex flex-col gap-4 w-[75%]'>
                <p>
                    Vincent Chandler, is a native Detroiter and protégé of one of the strongest era’s of the Detroit jazz scene, having studied and/or performed with local heroes such as Donald Walden, Kenn Cox, Harold McKinney, Teddy Harris, Marcus Belgrave, Matt Michaels, Francisco Mora, Eddie Nuccilli, Wendall Harrison, Spencer Barefield, Ronald Kischuk, James Carter, Marion Hayden, Regina Carter, and Rodney Whitaker. He has also performed internationally with jazz legends such as Herbie Hancock, Marcus Miller, Joe Henderson, Clark Terry, JALC feat. Wynton Marsalis, Oliver Lake, Bobby Watson, Geri Allen, Roy Hargrove, Ravi Coltrane, JD Allen, Marcus Strickland, Wycliff Gordon, Walter Smith III, Robert Hurst, Jeff “Tain” Watts, Russell Malone, Randy Brecker and Ambrose Akinmusire. He is a featured soloist on “Requiem,” from Roy Hargrove’s only Big Band CD called “Emergence,” James Carter’s “At the Crossroads,” and Rodney Whitaker/Carl Allen’s “Work to Do.” In 2014 he released his first CD as a bandleader, called Vincent Chandler “Embraceable,” including Robert Hurst on Bass.
                </p>
                <p>
                    Mr. Chandler earned his Bachelors of Fine Arts in Music and a Masters of Music in Improvisation from the University of Michigan. He was a Graduate Student Instructor and eventually a Lecturer of Jazz Studies at the University of Michigan. He was an Instructor of Jazz Trombone and Jazz Octets at Michigan State University. He was an Instructor, Director of Jazz Studies at Claflin University and an Applied Low Brass Instructor at South Carolina State University.
                </p>
                <p>Mr. Chandler has a reputation for being a uniquely expressive trombone soloist, a versatile sideman, innovative composer and arranger, a crowd pleasing scat singer, an experienced bandleader of various group sizes and a natural teacher of beginner to advanced students.</p>
            </article>
            <article className='flex flex-col gap-5'>
                {awards.map((award) => (
                    <section className='awards text-3xl flex gap-60 border-b-2 pb-5'>
                        <h2 className='year'>{award.year}</h2>
                        <h2 className='award'>{award.award}</h2>
                    </section>
                ))}
            </article>
            <button className='top-btn text-2xl' onClick={() => setTimeout(() => {
                const element = document.querySelector('#top');
                element?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)}>To The Top</button>
        </main>
    )
}

export default Bio