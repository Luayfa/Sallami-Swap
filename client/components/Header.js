import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/fi'
import { HiOutlineDotsVertical } from 'react-icons/fi'
import eth from '../assets/eth.png'
import dragon from '../assets/dragon.png'

const style = {}

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('swap')

    return (
        <div className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image src={dragon} alt="logo" height={40} width={40} />
            </div>
        <div className={style.nav}>
            <div className={style.navItemsContainer}>
                <div
                
                
                >
                  Swap
                </div>


            </div>
        </div>


      </div>
    )
}

export default Header