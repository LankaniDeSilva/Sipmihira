import React from 'react';
import TechnologiesTemplate from './TechnologiesTemplate';
import { technology01, technology02, technology03, technology04, technology05, technology06, technology07, technology08, technology09 } from './imports';
import './technologies.css';

const Technologies = () => (
  <div className="sipmihira__technology section__padding" id="technolog">
    <div className="sipmihira__technology-heading">
      <h2 className="gradient__text h2">Technologies<br /> </h2>
      <h3 className="subHeadindg2 h3">"We are using cutting-edge technologies to shape the future of the children."</h3>
    </div>

    <div className="sipmihira__technology-container">
      <div className="sipmihira__technology-container_groupB">
        <TechnologiesTemplate imgUrl={technology01} name="Django" />
        <TechnologiesTemplate imgUrl={technology02} name="Python" />
        <TechnologiesTemplate imgUrl={technology03} name="Flutter" />
        <TechnologiesTemplate imgUrl={technology04} name="TensorFlow" />
        <TechnologiesTemplate imgUrl={technology05} name="Keras" />
        <TechnologiesTemplate imgUrl={technology06} name="OpenCV2" />
        <TechnologiesTemplate imgUrl={technology07} name="NodeJS" />
        <TechnologiesTemplate imgUrl={technology08} name="GPT-2 Transformers" />
        <TechnologiesTemplate imgUrl={technology09} name="Azure Functions" />
      </div>
    </div>
  </div>
);

export default Technologies;
