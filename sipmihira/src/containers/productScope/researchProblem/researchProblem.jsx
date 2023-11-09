import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { problem, solution } from "../import";

function MediaControlCard(props) {
  const {image} = props;
  return (
    // <Card sx={{ display: "flex", width: "380px", mt: "20px", pl: "20px" }}>
      <CardMedia
        component="img"
        image={image}
        alt="Live from space album cover"
        sx={{display: "flex", width: "380px", mt: "20px", pl: "20px"}}
      />
    // </Card>
  );
}

function ReseacrhProblem() {
  return (
    <div>
      <div className="gpt3__header section__padding" id="project-scope-c">
        <div className="gpt3__header-content">
          <h2 className="gradient__text">Research Problem & Solution</h2>
        </div>
        <Grid container justifyContent="flex-start" spacing={2} mt={2} columnSpacing={15} rowSpacing={2}>
          <Grid item xs={12} sm={6}>
            <h3>Research Problem</h3>
            <p className="gap">
              As a human started their learning since the birth and continue
              learning throughout the whole life. Future of the human totally
              depends on the quality of their primary education . If education
              conduct in native languages is more beneficial for kids in primary
              education. According to the Department of Education and the
              statistics of Sri Lanka, the majority of children are studying in
              Sinhala. After getting used to online education during the Covid-
              19 Pandemic, children love to learn with mobile devices.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MediaControlCard image={problem}/>
          </Grid>
          
        
        <Grid item xs={12} sm={6} mt={5}>
            <MediaControlCard image={solution}/>
          </Grid>
        <Grid item xs={12} sm={6}>
            <h3>Solution</h3>
            <p className="gap">
              The system developed for each preschoolers to learn and write
              letters,draw shapes and generate stories according to the input
              images using a mobile application under an elder's supervision. By
              providing voice guidance throughout the learning process, we
              ensure that children understand the instructions clearly. For the
              letter writing task, the app prompts the child to write the letter
              on the mobile screen using their finger or touch pencil. To make
              the entire learning process attractive and engaging, we plan to
              include various videos with voice instructions. Teaching shape and
              color is designed to foster young children`s education by
              leveraging modern technology.Children are given the chance to
              paint the shapes with a given color, creating a complete and
              enjoyable learning experience.Through an intuitive interface,
              children can explore different colors and further enhance their
              understanding of color concepts.Also teaching through interactive
              videos, animations, shape-drawing exercises, and painting
              exercises, children can learn about different shapes and colors in
              an engaging and interactive manner. Additionally, the research
              aimed to generate stories based on the image which is fundamental
              to transferring knowledge to younger generations.
            </p>
          </Grid>
          </Grid>
      </div>
    </div>
  );
}

export default ReseacrhProblem;
