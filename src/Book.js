/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import './reset.css'

// take the props of note and image and title 
// create checkbox for each book to mark the book as complete
// change style of mark book by used state 
let bookStyle1=false;
class Book extends Component{
 
    // state object take impty value of the text and the color

    state= {
        text:'',
        color:'',
        checkBook:[]
     }

    checkBookState=(flag)=>{
     let bookState=flag;
     return bookState;
    }
    
     checkedBook=(stateBook)=>{
     let copy={};
  
    copy['title']=this.props.title;
    copy['image']=this.props.image;
    copy['note']=this.props.note;

      if(stateBook===true){
        this.props.uncheckedBook(true);
        this.props.storeBookChecked(copy);
      }
      else{
        this.props.uncheckedBook(false);
        this.props.storeBookChecked(copy);
      }

     }

    selectBook =(event)=> {
      //  event.preventDefault();
        let stateBook;

        if(event.target.checked===true) {
            this.setState({
                text:"line-through", // set line-throug on text of mark book
                color:'#A9A9A9',
            });

            stateBook= this.checkBookState(true);
            this.checkedBook(stateBook);
          }//end checked true 

        else{
            this.setState({
                text:"",
                color:'#000000',

            });
            stateBook= this.checkBookState(false);
            this.checkedBook(stateBook);
        }
    }
componentWillMount(){
  bookStyle1=this.props.stateStyle;
 if(bookStyle1===true){
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
           <td><h2 className="header" style={{textDecorationLine:this.state.text , color:this.state.color}}> <input  value="0" type="checkbox" onChange={this.selectBook}  />  {this.props.title}</h2></td>
           <td><img className="imageBook" src={this.props.image}></img></td>
           <td> <p className="text" style={{textDecorationLine:this.state.text, color:this.state.color}} >{this.props.note}</p> </td>
          </tr>
           </table>

           </div>
           
       );
   }

}

export default Book;