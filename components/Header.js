/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
            {/* Header Icons Imported structure from HeaderIcon.js */}
            <div className="flex">
                <HeaderIcon Icon={HomeIcon} title="HOME" />
                <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
                <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
                <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
            </div>
            {/* IMDb image load from outside source */}
            <Image
                className="cursor-pointer active:brightness-110"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                width={100}
                height={100}
            />
        </div>
    );
};

export default Header;
