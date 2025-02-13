import axios from "axios";
import React, { useEffect, useState } from "react";

function Prayers() {
  const regions = [
    {
      region: "Toshkent",
    },
    {
      region: "Andijon",
    },
    {
      region: "Namangan",
    },
    {
      region: "Farg'ona",
    },
    {
      region: "Guliston",
    },
    {
      region: "Jizzax",
    },
    {
      region: "Qarshi",
    },
    {
      region: "Samarqand",
    },
    {
      region: "Navoiy",
    },
    {
      region: "Buxoro",
    },
    {
      region: "Xiva",
    },
    {
      region: "Nukus",
    },
  ];
  const [selected, setSelected] = useState("Toshkent");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  function getData(region) {
    setLoading(true);
    setSelected(region);
    axios
      .get(`https://islomapi.uz/api/present/day?region=${region}`)
      .then((res) => {
        setData(res.data.times);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err");
        setLoading(false);
        return err;
      });
  }

  useEffect(() => {
    getData(selected);
  }, [selected]);

  return (
    <div className="prayers">
      <select value={selected} onChange={(e) => getData(e.target.value)}>
        {regions &&
          regions.map((item, index) => {
            return <option key={index}>{item.region}</option>;
          })}
      </select>
      {loading ? (
        <p
          style={{
            width: "100%",
            marginTop: "200px",
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      ) : (
        <div className="bodyPart">
          <div className="son son1">
            <div>
              <p>Bomdod</p>
              <p>{data.tong_saharlik}</p>
            </div>
          </div>
          <div className="son son2">
            <div>
              <p>Quyosh</p>
              <p>{data.quyosh}</p>
            </div>
          </div>
          <div className="son son3">
            <div>
              <p>Peshin</p>
              <p>{data.peshin}</p>
            </div>
          </div>
          <div className="son son4">
            <div>
              <p>Asr</p>
              <p>{data.asr}</p>
            </div>
          </div>
          <div className="son son5">
            <div>
              <p>Shom</p>
              <p>{data.shom_iftor}</p>
            </div>
          </div>
          <div className="son son6">
            <div>
              <p>Xufton</p>
              <p>{data.hufton}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prayers;
