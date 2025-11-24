import { IoLogoVenmo } from "react-icons/io5";
import { Fa500Px, FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

const socialMediaLinks = [
    {
        id: 1,
        media: 'Facebook',
        link: 'https://www.facebook.com/vincent.chandler.16',
        icon: <FaFacebookSquare />
    },
    {
        id: 2,
        media: 'Instagram',
        link: 'https://www.instagram.com/vincentachandler/',
        icon: <FaInstagramSquare />
    },
    {
        id: 3,
        media: 'YouTube',
        link: 'https://www.youtube.com/@zeusboneman',
        icon: <IoLogoYoutube />
    },
    {
        id: 4,
        media: 'Venmo',
        link: 'https://account.venmo.com/u/vincentachandler',
        icon: <IoLogoVenmo />
    },
    {
        id: 5,
        media: 'Apple Music',
        link: 'https://music.apple.com/us/search?term=vincent%20chandler',
        icon: <SiApplemusic />
    },
    {
        id: 6,
        media: 'Spotify',
        link: 'https://open.spotify.com/artist/7tBqgv028lWIXKhLeQSYYk',
        icon: <FaSpotify />
    },
]

export default socialMediaLinks