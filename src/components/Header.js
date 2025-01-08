import {useContext} from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import logo from '../assets/download.jpeg'
import userContext from '../utils/userContext';

const Title = () => {
  return (
    // <h1>Tasty Trek</h1>
    <img src={logo} alt="logo" className="logo" />
  );
};

const getCount = (store) => {
  let count = 0;
  store.forEach(item => {
    count += item.count;
  });
  return count
}

const Header = () => {
  const {name,email}=useContext(userContext)
  console.log(name,email);
  const cart = useSelector(store => store.cart.items);

  
  return (
    <div className="flex h-[12%] mx-[12%] mt-0 mb-[2%] justify-between border border-black">
      <div className="logo-container w-[11%] h-auto my-auto">
        <Link to='/'><Title /></Link>
      </div>
      <div className='w-2/5 my-auto'>
        <ul className='flex  justify-between list-none'>
          <li className='mx-[1%] text-xl'><Link to='/about/'>About</Link></li>
          <li className='mx-[1%] text-xl'><Link to='/contact/'>Contact Us</Link></li>
          <li className='mx-[1%] text-xl'><Link to='/cart/'>Cart</Link><sup>{cart.length!=0?getCount(cart):<></>}</sup></li>
          <li className='mx-[1%] text-xl text-blue-800'><Link to='/recipe/'>TastyRecipe</Link></li>
        </ul>
      </div>
      <div className='my-auto text-xl mr-2'>
        {name?<p>{name}</p>:<p>Login</p>}
      </div>
    </div>
  );
};

export default Header;