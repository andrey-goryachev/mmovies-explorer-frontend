import React from 'react';
import './AboutMe.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import imageStudentPath from '../../images/student.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(props) {
  return (
    <section className={'about-me'} id={'about-me'}>
      <SectionHeader text={'Студент'} />
      <div className={'about-me__container'}>
        <div className={'about-me__text-container'}>
          <h3 className={'about-me__header'}>Виталий</h3>
          <h4 className={'about-me__subheader'}>Фронтенд-разработчик, 30 лет</h4>
          <p className={'about-me__text'}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className={'about-me__link'} href="https://github.com/andrey-goryachev">Github</a>
        </div>
        <img className={'about__image'} src={imageStudentPath} alt="Фото студента"/>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
