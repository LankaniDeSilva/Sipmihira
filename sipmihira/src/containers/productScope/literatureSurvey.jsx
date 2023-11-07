import React from "react";
import "./product.css"; 
import { survey } from "../productScope/import";

function LiteratureSurvey() {
  return (
    <div>
      <h2 class="header1_lite">Product Scope</h2>
      <h1 class="header2_lite">Literature Survey</h1>

      <div className="two-column-container">
        <div className="left-column">
          <img src={survey} alt="survey" />
        </div>
        <div className="right-column"> 
          <p className="survey_header">
          A. In the domain of Sinhala alphabet education for young learners, mobile applications are being integrated, but they lack tailored features for fostering writing skills and auditory acumen. Notably, Asitha Ishantha's research on Sinhala handwriting [3] serves as a catalyst for exploring transformative avenues. The integration of mobile apps for language learning prompts tailored approaches for young learners in alphabet education [4]. However, a research gap persists in developing comprehensive solutions that encompass dynamic video tutorials and engaging pedagogical methods [4].
<br></br><br></br>
B. Mobile apps have become popular for teaching languages like Sinhala to children, especially through game-based learning [1]. Usability is a critical factor in consumer acceptance, as demonstrated by the "BenKids" app designed for preschoolers [7]. Another study introduced a machine-learning app for English language learning, garnering enthusiasm among Sri Lankan primary students [8].
<br></br><br></br>
C. Teaching shapes and colors to children is essential for fostering creativity and cognitive development. Innovative technologies, such as Arduino, have been employed to create effective learning tools, achieving high accuracy in recognizing colors and shapes [11]. Tablet-based learning activities have led to enhanced cognitive levels and geometric shape understanding among kindergarten children [12]. The effectiveness of mobile and multimedia learning in early childhood education has been emphasized from 2003-2014 [13].
<br></br><br></br>
D. Storytelling plays a pivotal role in enhancing thinking and creativity from an early age. Various studies have employed modern technologies and neural networks, such as CNN and RNN, to generate human-readable stories [15][16][17][18]. These approaches combine images and text to create engaging storytelling experiences.
          </p>
        </div>
      </div>
      <br/> <br/> <br/> <br/> <br/>
    </div>
  );
}

export default LiteratureSurvey;
