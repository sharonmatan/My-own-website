import React from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

// state = {
//   min: true,
//   usersList: data.slice(this.page*10, this.page*10+10),
//   numOfRecords: data.length
// }
export default class App extends React.Component {
  render() {
    return (
      <div className="">
        {/* <Router> */}
        <Header
          // pro="Full Stack Developer"
          image="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/s960x960/20287005_1387735334628414_4686108785331055776_o.jpg?_nc_cat=100&_nc_ohc=5FvdGYnocwgAX86hzEF&_nc_ht=scontent-lht6-1.xx&_nc_tp=1&oh=2fe8c29beaa36eec10c5dccfe4d07e87&oe=5EAE8019"
        ></Header>
        <Title title="About Me"></Title>
        <AboutMe
          aboutMe="I'm a junior full-stack developer with a rich tech-stack including Python, JavaScript and React.js among other technologies.
I'm a team player with a positive attitude and a can-do approach who enjoy solving problems through code and create impactful projects.
I'm a sports enthusiast, loves music and songwriting"
        ></AboutMe>
        <Title title="Skills"></Title>
        <div className="skills">
          <Skills skill="HTML"></Skills>
          <Skills skill="CSS"></Skills>
          <Skills skill="JAVASCRIPT"></Skills>
          <Skills skill="FRONTEND"></Skills>
          <Skills skill="REACT"></Skills>
          <Skills skill="FULLSTACK"></Skills>
          <Skills skill="Python"></Skills>
          <Skills skill="jQuery"></Skills>
          <Skills skill="Django"></Skills>
          <Skills skill="Data Analyst"></Skills>
        </div>
        <Title title="Projects"></Title>
        <div className="skills">
          <Projects
            link="https://confident-nobel-ead63d.netlify.com"
            project="Project 1"
            image=".Images/2.png"
          ></Projects>
          <Projects
            project="Project 2"
            image="../../../week 3 - javascript/lecture 5/week 3 assignment/images/phone.jpg"
          ></Projects>
          <Projects
            project="Project 3"
            image="../../../week 3 - javascript/lecture 5/week 3 assignment/images/phone.jpg"
          ></Projects>
          <Projects
            project="Project 4"
            image="../../../week 3 - javascript/lecture 5/week 3 assignment/images/phone.jpg"
          ></Projects>
          <Projects
            project="Project 5"
            image="../../../week 3 - javascript/lecture 5/week 3 assignment/images/phone.jpg"
          ></Projects>
          <Projects
            project="Project 6"
            image="../../../week 3 - javascript/lecture 5/week 3 assignment/images/phone.jpg"
          ></Projects>
        </div>

        <Title title="Contact me"></Title>
        <div className="skills">
          <ContactMe
            image="https://image.flaticon.com/icons/png/512/25/25231.png"
            platform="Github"
            link="https://github.com/sharonmatan"
            text="github.com/sharonmatan"
          ></ContactMe>
          <ContactMe
            image="https://image.flaticon.com/icons/svg/1384/1384014.svg"
            platform="Linkdein"
            link="https://www.linkedin.com/in/matan-sharon-01a468169/"
            text="linkedin.com/in/matan-sharon"
          ></ContactMe>
          <ContactMe
            image="https://image.flaticon.com/icons/svg/561/561127.svg"
            platform="Mail"
            link="sharonmatan93@gmail.com"
            text="sharonmatan93@gmail.com"
          ></ContactMe>
          <ContactMe
            image="https://image.flaticon.com/icons/svg/977/977411.svg"
            platform="Phone"
            link="github.com/sharonmatan"
            text="+972 507961900"
          ></ContactMe>
        </div>

        {/* </Router> */}
      </div>
    );
  }

  // changePage(page){
  //   this.page=page
  //   this.setState({   usersList: data.slice(this.page*10, this.page*10+10), })
  // }

  // sortArray(column) {
  //   let newArray = [...this.state.usersList]
  //   if (this.min) {
  //     this.newArray = newArray.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
  //   }
  //   else {
  //     this.newArray = newArray.sort((a, b) => (a.first_name < b.first_name) ? 1 : -1)
  //   }
  //   this.setState({ usersList: newArray })
  //   this.min = !this.min
  // }
}
