import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  MainTopNav from './TopNav';
import Carousel from './Carousel';
import Div from './Div';
import Gallery from './Gallery';
import Note from './Note';
import Footer from './Footer';

import CreateApi from './CreateApi';
import Gulahmed from './Gulahmed';
import  AdminUI from './AdminUI';
import TopNav from './TopNav';
import Khaadi from './Khaadi';
import Login from './Login';
import Nishaat from './Nishaat';

import Sanasafinaz from './Sanasafinaz';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Sapphire from './Sapphire';
import CreateSapphire from './CreateSapphire';
import MainPage from './MainPage';

import Alkaram from './Alkaram';
import AboutFullPage from './AboutFullPage';
import BrandFullPage from './BrandFullPage'
import khaadiUI from './KhaadiUI';

import KhaadiUI from './KhaadiUI';



class Index extends Component{
    constructor(props) {  
        super(props);  
  
        this.state = {  
        
            edit: false
     
    }
}
componentDidMount(){
    if(sessionStorage.getItem("userData")){
        console.log("feed")
    }
    else{
        this.setState({edit: true});
    }
}
render(){
     return(
             <div>
        
   

                    <Router>
                    <TopNav/>

                    <Route exact path='/' component={Home} />
                    <Route exact path='/mainpage' component={MainPage} />
               
                    <Route path='/login' component={Login}/>
                    <Route path='/alkaram' component={Alkaram}/>
                    <Route path='/nishaat' component={Nishaat}/>
                    <Route path='/gulahmed' component={Gulahmed}/>
                    <Route path='/sanasafinaz' component={Sanasafinaz}/>
                  
          
                   <Route path='/khaadi' component={Khaadi}/>
                   <Route path='/createApi' component={CreateApi}/>
                   <Route path='/createSapphire' component={CreateSapphire}/>
                   <Route path='/sapphire' component={Sapphire}/>
                   <Route path='/aboutfullpage' component={AboutFullPage}/>
                   <Route path='/brandfullpage' component={BrandFullPage}/>
                   <Route path='/khaadiUI' component={KhaadiUI}/>
                
          </Router> 
        
           </div>

           );
       
      

}


}

  


ReactDOM.render( <Index/>,document.querySelector('#root')
);
  


       
  