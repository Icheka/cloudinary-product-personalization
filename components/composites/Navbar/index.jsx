import Link from 'next/link';

import { Routes } from '../../../configs/app';


const Navbar = props => {
    return (
        <nav>
            <div className={`flex flex-row xxs:justify-between lg:justify-start items-end font-lighter pb-3 pt-2 ${props.className}`}>
                <div>
                    <Link href={Routes.home}>
                        <img
                            className={`xxs:w-5/12 lg:w-7/12`}
                            src={`https://res-1.cloudinary.com/cloudinary/image/asset/dpr_2.0/logo-e0df892053afd966cc0bfe047ba93ca4.png`}
                            
                        />
                    </Link>
                </div>
                <h1 className={`capitalize text-blue-deep relative top-2 ml-3 xxs:text-xs lg:text-2xl`}>
                    Product personalization demo    
                </h1>
            </div>
        </nav>
    );
};

export default Navbar;