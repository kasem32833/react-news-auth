import React from 'react';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa6";
import  qZone1 from '../../../assets/qZone1.png'
import  qZone2 from '../../../assets/qZone2.png'
import  qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='border p-4 space-y-3'>
                <p className='text-xl'>Login With</p>
                <div>
                    <button className="btn btn-outline w-full">
                    Login With Google
                    <FaGoogle></FaGoogle>
                        </button>
                </div>
                <div>
                    <button className="btn btn-outline w-full">
                    Login With Github
                    <FaGithub></FaGithub>
                    </button>
                </div>
            </div>
            <div className='border p-4 '>
                <p className='text-xl mb-4'>Find us on</p>
                <a className='p-4 flex items-center gap-2 border rounded-t-lg' href="facebook.com"> <FaFacebook></FaFacebook><span>Facebook</span></a>
                <a className='p-4 flex items-center gap-2 border-x ' href="facebook.com"> <FaTwitter></FaTwitter><span>Twitter</span></a>
                <a className='p-4 flex items-center gap-2 border rounded-b-lg' href="facebook.com"> <FaInstagram></FaInstagram><span>Facebook</span></a>
            </div>
            {/* Q zone */}
            <div className='border p-4 space-y-3'>
                <p className='text-xl'>Login With</p>
                <div>
                    <img src={qZone1} alt="" />
                </div>
                <div>
                    <img src={qZone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;