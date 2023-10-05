
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className=' text-center py-10 '>
           <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg'>This is Header</p>
            <p className='text-xl'>{moment().format("dddd MMMM D, yyyy")}</p>
        </div>
    );
};

export default Header;