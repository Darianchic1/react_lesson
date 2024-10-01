import './Header.css'
import Contact from "../Contact/Contact"
import Phone from '../../assets/images/iPhone.svg'
import Chat from '../../assets/images/Chat.svg'
import Logo from '../../assets/images/logo.svg'

function Header(){
    return ( 
    <div className='header_container'>
        <div className='left'>
            <img className='logo' src={Logo}></img>
            <p className='menupoint'>About us</p>
            <p className='menupoint'>Services</p>
            <p className='menupoint'>Work</p>
            <p className='menupoint'>News</p>
            <p className='menupoint'>Contacts</p>
        </div>
        <div className='right'>
            <Contact action='Call us' where='(405) 555-0128' svg={Phone}/>
            <Contact action='Talk to us' where='hello@createx.com' svg={Chat}/>
        </div>
    </div>
    )
}

export default Header