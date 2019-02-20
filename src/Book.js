/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import './reset.css'

// take the props of note and image and title 
// create checkbox for each book to mark the book as complete
// change style of mark book by used state
// hight auto width same size 

class Book extends Component{
    render(){

       return (
          <div>
            <table id="Books">
              <tr >
                <th>Title</th>
                <th>Book</th>
                <th>note</th>
              </tr>
              <tr>
                <td>
                  <h2 className={`${this.props.book.checked} header`}> 
                    <input  value="0" 
                            type="checkbox" 
                            checked={this.props.book.checked === "checked"? true : false}
                            onChange={()=>this.props.checkBook(this.props.index)}  />  
                            {this.props.book.title}
                  </h2>
                </td>
                <td><img className="imageBook" src={this.props.book.image}></img></td>
                <td> <p className={`${this.props.book.checked} text`} >{this.props.book.note}</p> </td>
              </tr>
            </table>
          </div> 
       );
   }

}
export default Book;