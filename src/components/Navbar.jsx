import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';
import logo from '../assets/Rd2.png';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img  className='mx-2 w-10' src={logo} alt="logo" /> */}
            <h1 className='text-4xl py-4'>Rd</h1>
        </div> 
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/raghav-deshmukh-/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/RaghavDeshmukh" target='_blank'><FaGithub/></a>
            <a href='' target='_blank'><FaInstagram/></a>
           <a href="https://x.com/DeshmukhRaghav" target='_blank'><FaSquareXTwitter/></a>
            
        </div>
    </nav>
  )
}

export default Navbar
