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
  header() {}
  render() {
    return (
      <div className="">
        {/* <Router> */}
        <Header pro="Full Stack Developer" name="Matan Sharon" image="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/s960x960/20287005_1387735334628414_4686108785331055776_o.jpg?_nc_cat=100&_nc_ohc=5FvdGYnocwgAX86hzEF&_nc_ht=scontent-lht6-1.xx&_nc_tp=1&oh=2fe8c29beaa36eec10c5dccfe4d07e87&oe=5EAE8019"></Header>
        <AboutMe aboutMe="aksdjfaskdjf skdjnfaskdljn faskdjn fsadkjn faskldjnf askjdnf akjsdnsdknf kjdsfn kladsjnf klasjdnf klasjdnf lkajsdnf klajsdnf"></AboutMe>
        <Title></Title>
        {/*<Skills></Skills>
        <Title></Title>
        <Projects></Projects>
        <Title></Title>
        <ContactMe></ContactMe> */}
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
