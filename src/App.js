import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

// Components
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props); // access properties if needed
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    // fetch data using ajax and jquery
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

  componentDidMount(){
    this.getResumeData();
  }

  /*
    '{this.state.resumeData.main}' want only main part of data
  */
  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
