import React from 'react'
import './css/BlogpostStyles.css'
import researchImage from './images/researchandlearningimage.jpg'



function ResearchandLearning() {
    return (
     
     <div class="main-1" id="researchandlearning">
    <h1>RESEARCH AND LEARNING</h1>
    <figure class="images"><img src={researchImage} alt="Research"></img></figure>
     <p>
      When I get stuck on a project, I first research my favorite web programming websites online for answers to my problems. I don't like 
      to copy code, especially from tutorials because I often don't find exactly what I am looking for, and design my pages differently. 
      My favorite websites for example code are W3 Schools and MDN. I prefer frameworks such as Material UI and Bootstrap, but I still end up 
      customizing that code to fit my programming style. One of my favorite tips and tricks when styling my websites is to use the website, 
      coolors.co to find a complementary palette. I absolutely love to style and organize my designs with SCSS, and find it very effective for 
      responsive website design. Plus, SCSS is a very easy way to make a website mine.   
      </p>
      <p>
       If I want to solve a problem or see example code, I sometimes research the web for tutorials. But I often have a very specific problem to solve, 
       and don't find an answer very often. This is my Tutorial Hell. It's like, okay, I see that you've made a React.JS quiz and show student progress, but 
       I also see you styled the quiz design and logic entirely differently from how I want mine to look like. Therefore, this tutorial is of no help to 
       my specific problem. I hate this never ending loop at times. I understand that we all code very differently from each other, and want my specific style 
       to work. 
        </p>
        <p>
        I best learn web development and JavaScript by someone teaching it to me through their examples. If I can follow along and see their logic, especially with 
        JavaScript, it will eventually make sense to me. Once I practice a few times with their code, I can then do it all by myself and customize it according to my 
        level of interest, design, and logic. That is one of the reasons why I found classes at a university so helpful. It is difficult to sit down and watch 
        tutorials, and not have a chance to ask questions. I highly recommend someone new to web development to seek out a mentor that can break down the language in a 
        simple way for beginners. Teachers and mentors really understand how to do this, and want to help. I have learned so much from taking classes at a school
         versus learning code independently, which is why I recommend attending a school to learn code versus watching online tutorials independently.  
     </p>
     </div>
    );
  }
  
  export default ResearchandLearning;
  