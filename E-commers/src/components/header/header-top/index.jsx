import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../../assets/icons'
import { Button } from '@material-tailwind/react'
import LikeModal from '../../like-modal'

export const HeaderTop = () => {
    const[likeModalOpen, setLikeModalOpen]=useState(false)
  function handleLikeModal(){
    setLikeModalOpen(likeModalOpen)
  }

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-12'>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Магазины</a>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Акции</a>
            <a className='text-dark-300 text-xl font-bold ' href="#!">Доставка и оплата</a>
        </div>
        <div>
            <Link to="/">
                <Icons.logoIcon/>
            </Link>
        </div>
        <div className='flex items-center justify-between w-[436px]'>
            <a className='text-dark-300 text-xl font-bold flex gap-x-2' href="#!">
                <Icons.locationIcon/>
                Москва,  ул. Науки  25
            </a>
            <div className='flex items-center gap-x-[10px]'>
                <Button variant='gradient' onClick={handleLikeModal} className='p-3'>
                    <Icons.likeIcon/>
                </Button>
            </div>
            <LikeModal open={likeModalOpen} handleLikeModal={handleLikeModal}/>
        </div>
    </div>
  )
}

export default HeaderTop