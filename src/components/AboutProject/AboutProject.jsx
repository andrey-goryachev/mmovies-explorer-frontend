import React from 'react';
import './AboutProject.css'
import SectionHeader from "../SectionHeader/SectionHeader";

function AboutProject() {
  return (
    <section id={'about-project'} className={'about-project'}>
      <SectionHeader text={'О проекте'} />
      <ul className={'about-project__descriptions'}>
        <li className={'about-project__description'}>
          <h3 className={'about-project__header-description'}>Дипломный проект включал 5 этапов</h3>
          <p className={'about-project__text-description'}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className={'about-project__description'}>
          <h3 className={'about-project__header-description'}>На выполнение диплома ушло 5 недель</h3>
          <p className={'about-project__text-description'}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className={'about-project__schema'}>
        <p className={'about-project__part-schema about-project__part-schema_color_green'}>1 неделя</p>
        <p className={'about-project__part-schema about-project__part-schema_color_gray'}>4 недели</p>
        <p className={'about-project__part-schema about-project__part-schema_type_description'}>Back-end</p>
        <p className={'about-project__part-schema about-project__part-schema_type_description'}>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
