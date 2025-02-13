import axios from "axios";
import React, { useEffect, useState } from "react";
import { AYAHS_AUDIO } from "../../../tools/urls";
import { useParams } from "react-router-dom";

function Ayahs() {
  const pk = useParams();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(false);
  function getData() {
    setLoading(true);
    axios
      .get(AYAHS_AUDIO)
      .then((res) => {
        const storedNumber = localStorage.getItem("number");
        setData(res.data.data.surahs[storedNumber - 1].ayahs);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setLoading(false);
        return err;
      });
  }

  function getData1(a) {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${a}/uz.sodik`)
      .then((res) => {
        setData1(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
        return err;
      });
  }
  useEffect(() => {
    getData();
    getData1(pk.id);
  }, [pk.id]);

  return (
    <div className="main">
      <div className="container">
        <div className="ayahs">
          <div className="image">
            <img
              src="https://alqurannextjs.vercel.app/_next/static/media/kaaba.adeb346b.png"
              alt="background"
            />
          </div>
          
          {loading ? (<p>Loading...</p>) : (data &&
            data?.map((item, index) => {
              return (
                <div key={index} className="box">
                  <p className="first">{index + 1}</p>
                  <p className="second">{item.text}</p>
                  <p>
                    {data1.ayahs &&
                      data1.ayahs.length &&
                      data1.ayahs[index].text}
                  </p>
                  <audio controls>
                    <source src={item.audio} type="audio/mpeg" />
                  </audio>
                </div>
              );
            }))}
        </div>
      </div>
    </div>
  );
}

export default Ayahs;
