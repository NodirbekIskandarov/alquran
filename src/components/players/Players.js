import React, { useEffect, useRef, useState } from "react";
import { AYAHS_AUDIO, FULL_SURAHS } from "../../tools/urls";
import axios from "axios";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Players() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);



  const [selected, setSelected] = useState(0);
  const leftS = useRef(null);

  function changeColor(index) {
    setSelected(index);
    getData1(index);
    // getData2(index)
  }

  function playFunc(index2) {
    getData2(index2);
  }
  function getData() {
    axios
      .get(FULL_SURAHS)
      .then((res) => {
        setData(res.data.data.surahs);
      })
      .catch((err) => {
        console.log(err, "err");
        return err;
      });
  }
  function getData1(a) {
    console.log(a);
    axios
      .get(`https://api.alquran.cloud/v1/surah/${a + 1}/uz.sodik`)
      .then((res) => {
        setData1(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        return err;
      });
    if (leftS.current) {
      leftS.current.scrollTop = 0;
    }
  }
  function getData2(index) {
    axios
      .get(AYAHS_AUDIO)
      .then((res) => {
        setData2(res.data.data.surahs[selected].ayahs[index]);
        console.log(res.data.data.surahs[selected].ayahs[index]);
      })
      .catch((err) => {
        console.log("err");
        return err;
      });
  }

  useEffect(() => {
    getData();
    getData1(0);
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="players">
          <div className="left">
            <div className="leftS" ref={leftS}>
              {data1.ayahs &&
                data1.ayahs.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="box"
                      onClick={() => playFunc(index)}
                    >
                      <p className="first">{data1.number}</p>
                      <p className="second">{data1.name}</p>
                      <p className="third">{item.text}</p>
                    </div>
                  );
                })}
            </div>
            <div className="leftA">
              <AudioPlayer
                autoPlay={false}
                src={data2.audio}
                showJumpControls={false}
                customVolumeControls={[5]}
                className="player"
              />
            </div>
          </div>
          <div className="right">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={index !== selected ? "box" : "box active"}
                    onClick={() => changeColor(index)}
                  >
                    <p className="first">{index + 1}</p>
                    <div className="second">
                      <h5>{item.englishName}</h5>
                      <p>{item.englishNameTranslation}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Players;
