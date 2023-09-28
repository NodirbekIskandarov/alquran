import { Link } from 'react-router-dom'
import React from 'react'

function Home() {
  return (
    <div className='container'>
        <div className='home'>
            <Link to='/surahs' className='menu'>
                <img src='https://alqurannextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkoran.a67ddc46.png&w=384&q=75' alt='quron suralari'/>
                <p>Qur'on suralari</p>
            </Link>
            <Link to='/players'  className='menu'>
                <img src='https://alqurannextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquran-listen.bf9cef18.png&w=384&q=75' alt='quron tinglash'/>
                <p>Qur'on tinglash</p>
            </Link>
            <Link to='/prayers'  className='menu'>
                <img src='https://alqurannextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprayer-time.0fe872d1.png&w=384&q=75' alt='namoz vaqtlari'/>
                <p>Namoz vaqtlari</p>
            </Link>
        </div>
    </div>
  )
}

export default Home