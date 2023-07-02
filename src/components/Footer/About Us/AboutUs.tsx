import React from "react";
import Footer from "../Footer";
import Header from "../../Header/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <h3>Реквизиты компании</h3>
      <h4>Провайдер веб-сайта:</h4>
      <p>GrozRent VainahTelecom</p>
      <h3>Директора:</h3>
      <h5>Генеральный директор:</h5>
      <p>Навразов Абдуррахман</p>
      <h5>Директор по Мультеру:</h5>
      <p>Витаев Мансур</p>
      <h5>Директор по верстке:</h5>
      <p>Просто Саад</p>
      <h5>Директор логотипа:</h5>
      <p>Бациев Мовсар</p>

      <h3>Cвязь с нами:</h3>
      <p>timur.navrazov@mail.ru</p>
      <p>8938 000 10 27</p>
      <p>intocode@mail.ru</p>

      <h3>
        Контрагент по платежным услугам для пользователей с местом жительства
        или осуществления деятельности в Соединенном Королевстве, Швейцарии и
        России:
      </h3>
      <p>Grozrent SberBank Payments</p>
      <h3>
        Контрагент по платежным услугам для пользователей с местом жительства
        или осуществления деятельности в Европейской экономической зоне:
      </h3>

      <p>Grozrent SberBank Payments</p>

      <Footer />
    </div>
  );
};

export default AboutUs;
