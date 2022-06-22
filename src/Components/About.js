import React from 'react';
import './About.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Lakisha from '../assets/Lakisha.jpg';
import Meera from '../assets/Meera.png';
import Derek from '../assets/Derek.jpeg';

class About extends React.Component {
  render() {
    return (
      <div className='about-page'>
        <div>
          <h3>Our Project</h3>
          <p className='about-paragraph'>
            This YouTube clone project is created with React Library for better
            user interface. Users are able to search on our Youtube website,
            watch their favorite videos and add their comments. If the video you
            are searching can not be found, our website will bring you to a
            Modal 404 Page.
          </p>
        </div>
        <div className='biography'>
          <div className='meera'>
            <h4>Meera</h4>
            <img className='portrait' src={Meera} alt='Meera' />
            <div>
              <a
                href='https://www.linkedin.com/in/meeraramesh'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='logo' src={linkedin} alt='' />
              </a>
              <a
                href='https://github.com/meera-ramesh19'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='logo' src={github} alt='' />
              </a>
            </div>
            <p className='bio-paragraph'>
              Hi there 👋, I'm Meera Ramesh I am a Software Engineer/Full Stack
              Developer 🚀 from NYC, proficient in Full Stack Web
              Development,and Data Visualization tools like Tableau and Power
              BI. I am passionate about learning and curiosity has been a part
              of me forever. My experiences in and outside of working with
              nonprofits in addition to design consulting, have given me the
              analytical skills and curiosity to bring in creative problem
              solving when learning and using code. I am currently completing
              the Pursuit Fellowship in an effort to improve my skills as a
              software engineer. I am excited to be a part of a community where
              I can collaborate with and learn from other developers.
            </p>
          </div>
          <div className='lakisha'>
            <h4>Lakisha</h4>
            <img className='portrait' src={Lakisha} alt='Lakisha' />
            <div>
              <a
                href='https://www.linkedin.com/in/lakisha-trusty-101526118'
                target=''
                rel='noreferrer noopener'
              >
                <img className='logo' src={linkedin} alt='' />
              </a>
              <a
                href='https://github.com/daprincessanime'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='logo' src={github} alt='' />
              </a>
            </div>
            <p className='bio-paragraph'>
              I used to hate to carrying my 40lbs desktop downtown to 14 St Best
              Buy to be fix cause that was the only way without warranty. So, to
              save time and money I decided to learned about computer
              programming. The first code I wrote was 6 years ago in C+ during
              class assignment. As I tried to debugged my code, I kept getting
              an error message. It took me 15 hrs to realize I was missing a
              common. After getting my code to work and being frustrating and
              mortally defended by a common. The joy and excitement I felt for
              getting my code to work changed me. Along with not carrying my
              40lbs desktop to Best Buy to get it fix. Cause I prove to myself
              that I can fix my own problems if I know where to look. Which
              still to this day, I still use Best Buy. However, I am learning
              the ends and outs of computer programming.
            </p>
          </div>
          <div className='derek'>
            <h4>Derek</h4>
            <img className='portrait' src={Derek} alt='' />
            <div>
              <a
                href='https://www.linkedin.com/in/derekpeterson-plutus'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='logo' src={linkedin} alt='' />
              </a>
              <a
                href='https://github.com/derekpeterson-plutus'
                target='_blank'
                rel='noreferrer noopener'
              >
                <img className='logo' src={github} alt='' />
              </a>
            </div>
            <p className='bio-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              mattis, ex nec semper porta, nibh arcu suscipit ligula, et auctor
              nisi dolor sit amet neque. Praesent porttitor placerat dolor.
              Donec nec blandit nisl, nec rutrum orci. Aenean ac dignissim
              felis, euismod pellentesque augue. Proin iaculis odio ut tortor
              rutrum, a facilisis neque maximus. Nam gravida vulputate ante, in
              volutpat tortor luctus et. Curabitur suscipit ipsum laoreet quam
              ultricies, id porttitor erat pharetra. Maecenas sit amet felis ut
              metus placerat scelerisque. Sed eget mauris dolor. Maecenas
              bibendum enim lectus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
