import React from 'react'
import './css/BlogpostStyles.css'
import Me from './images/Me.jpg'



function IntrotoBlogpost() {
    return (
     
     <div class="main-1" id="aboutme">
    <h1>ABOUT ME</h1>
     <p><figure className="Me"> <img src={Me} alt="Aubrey Jones About Me"></img></figure>Welcome to my About Page! 
     My name is Aubrey Jones. I am almost 28-year-old in a few weeks, and currently employed at Trilogy Educational 
       Services as a UX/UI Designer TA at their University of Utah's UX/UI Design bootcamp. It's a great job 
       that works fantastic with my school schedule. I also love that I get to thoroughly learn and help
       teach UX/UI design concepts to others at the same time. I began my UX/UI journey part time in 2016, 
       after completing my general studies at Salt Lake Community College for my associates degree. I had a wonderful 
       2 year internship where I could dibble and dabble in a lot of skills related to my major, which is
      Web Design and Development with an emphasis in Web and App Development. I will graduate at Utah Valley University 
      this year in Fall 2021. 
      </p>
      <p>
       I absolutely love to be creative, and find that full stack design and development fits that interest very well! 
       I also have quite a few other interests. Creative writing, soap and candle crafting, and painting, are just to name a few of them. 
       I am an old school gamer, which means I love Super Mario, Donkey Kong, Minecraft, The Sims, Harry Potter games...etc. My
       family came for the December holidays in 2020 and I chose to treat myself and get a Nintendo Switch as I had given ours up in 
       my very recent divorce. It was a lot of fun to have all of my family here for the holidays as that is a rare occasion, 
       and we played lots of fun games (board and video) together. I overall love to try new hobbies, and get excited about new projects that are
       creative and analytical. 
        </p>
        <p>
       I would love to improve my fundamental JavaScript skills. I feel like I can create my own code very easily, especially with HTML5, CSS3, 
       SCSS, Bootstrap, JSON, React.JS, and etc. But I often wonder to myself if I could actually explain JavaScript to someone else as it often 
       goes over my head. My favorite part of web development is that I can problem solve in both a logical and creative way. I hope that I can 
       further my skillset with more in-depth study throughout this class. I almost never tire from coding, and look forward to this semester!

     </p>
     </div>
    );
  }
  
  export default IntrotoBlogpost;
  