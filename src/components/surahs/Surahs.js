import React, { useState, useEffect } from 'react'
import { AYAHS_AUDIO } from '../../tools/urls'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Surahs() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(AYAHS_AUDIO)
    .then(res => {
      setData(res.data.data)
    })
    .catch(err => {
      return err
    })
  }, [])

  let count 
  function run(num) {
    localStorage.setItem("number", JSON.stringify(num));
    count = num
  }
  return (
    <div className='container'>
      <div className='surahs'>
        <div className='row'>
          {data.surahs && data.surahs.map((item, index) => {
            return (
              <div onClick={() => run(item.number)} key={index} className='col-3'>
                <Link to={`/surahs/${item.number}`} className='box'>
                  <div className='number'>
                     <p>{item.number}</p>
                  </div>
                  <div className='names'>
                    <h4>{item.englishName}</h4>
                    <p>{item.englishNameTranslation}</p>
                    <p>Verse {item.ayahs.length}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Surahs