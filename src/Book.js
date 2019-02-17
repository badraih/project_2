/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import './reset.css'

class Book extends Component{
    state={
        text:"",
        color:''
    }
    selectBook =(event)=>{
    
     if(event.target.checked===true){
         this.setState({
             text:"line-through",
             color:'#A9A9A9'
         })
     }
     else{
        this.setState({
            text:"",
            color:'#000000'
        });
     }
    }
    render(){
        
       return (
          <div>
              <table id="Books">
              <tr>
               <th>Title</th>
               <th>Book</th>
               <th>note</th>
              </tr>

            <tr>
           <td><h2 className="header" style={{textDecorationLine:this.state.text , color:this.state.color}}> <input type="checkbox" id="myCheck" onClick={this.selectBook} />  {this.props.title}</h2></td>
           <td><img className="imageBook" src={this.props.image}></img></td>
           <td> <p className="text" style={{textDecorationLine:this.state.text, color:this.state.color}} >{this.props.note}</p> </td>
           </tr>
           </table>

          
           </div>
           
       );
   }

}

export default Book;