
import Logo from './Logo'
import Search from './Search'
import User from './User'
import Hamburger from './Hamburger'
import CardCount from './CardCount'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-700 text-slate-100'>
        <Logo/>
        <Search/>
        <CardCount/>
        <User/>
        <Hamburger/>

    </div>
  )
}

export default Navbar