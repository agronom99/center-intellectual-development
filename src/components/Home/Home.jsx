import React from "react";
import Header from "../Header/header";
import homeImg from "../../images/homeImg.png";
import homeImg1 from "../../images/buch.jpg";
import homeImg2 from "../../images/buch1.jpg";
import homeImg3 from "../../images/pen.png";
import homeImg4 from "../../images/W.jpg";
import homeImg5 from "../../images/5.png";
import homeImg6 from "../../images/A.jpg";

const Home = () => {
  return (
    <div className=" ">
      <Header />
      <div className=" relative ">
        <img
          src={homeImg}
          alt="home"
          className=" absolute right-0 -top-32 -z-10 "
        />
         <img
          src={homeImg4}
          alt="W"
          className=" absolute left-96 -top-14 -z-20 w-44 "
        />
        <img
          src={homeImg1}
          alt="buch"
          className=" absolute right-56 top-40 -z-20 w-96"
        />
         <img
          src={homeImg2}
          alt="buch1"
          className=" absolute left-52 top-20 -z-20 h-96 "
        />
     
      </div>
      <div className="w-1/2 ml-28 mt-40">
        <h1 className=" font-semibold text-5xl  h-28 ">
          <span className=" uppercase text-home-h1">KEMENGER mEKTEBI </span> -
          центр интеллектуального развития
        </h1>
        <p className="w-2/3 mt-11 text-2xl">
          Обучение происходит на казахском и русском языках. При записи на два
          или более курсов предусмотрена скидка. Запишитесь на бесплатный
          пробный урок.
        </p>
        <button className=" text-xl font-semibold mt-11 h-16 w-64 rounded-full bg-yelow-button shadow-yelow-button shadow-shadow-yelow ">Оставить заявку</button>
      </div>
      <div className=" flex">
        <img
          src={homeImg6}
          alt="A"
          className=" mt-8 ml-40 -z-20 w-52  "
        />
        <img
          src={homeImg3}
          alt="pen"
          className=" ml-40 -z-20 w-32 "
        />
        
         <img
          src={homeImg5}
          alt="5"
          className=" ml-24   -z-20 w-52 "
        />
         
        </div>
    </div>
  );
};

export default Home;
