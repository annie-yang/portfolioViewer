import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

// Components
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';

class App extends Component {
  constructor(props){
    super(props); // access properties if needed
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }
  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      // function to run if everything is okay
      success: function(data){
        // send resumeData to the data that is being fetched
        this.setState({resumeData: data});
      }.bind(this),
        error:function(xhr, status, err){ // if something goes wrong, run this function
          console.log(err);
          alert(err);
        }
    });
  }

  ComponentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header/>
        <About/>
        <Contact/>
        <Footer/>
        <Portfolio/>
        <Resume/>
      </div>
    );
  }
}

export default App;
