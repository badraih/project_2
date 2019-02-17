import React, { Component } from 'react';
import './App.css';
import Book from './Book'
import './reset.css'

// declare state to store array of the books list
//declare function getBookData() to make the users to add book in books list array 
   // declare impty formData of book inside state to fill it by user data 
// declare function setBookData() when users click on the book mark the book as complete, also if users click again delete the mark

class App extends Component {
   state={
    isLoading:true,
    formData:{
      title:"",
       image:"",
       note:""
    },
     book_list:[
      {
        title:"How to Change Your Mind",
        image:"https://images.gr-assets.com/books/1522586374l/36710811.jpg",
        note:"I finished reading a hundred pages"
      },{
        title:"The Rise and Fall of the Dinosaurs",
       image:"https://images.gr-assets.com/books/1515529573l/35820369.jpg",
       note:"I read 300 pages"
      },{
        title:"Harry Potter",
        image:"https://images.gr-assets.com/books/1474154022l/3.jpg",
        note:"(Harry Potter #1)"
      }
    ]
  }
 
  setBookData=(event)=>{
 //prevent the form 
  event.preventDefault();
  const copy= this.state.book_list.slice(0);//make copy of book_list array
  copy.push(this.state.formData);//add the new book_list data to the array
   //update the new meme data with our new copy
   this.setState({
    book_list:copy
   });  

   this.SaveDataToLocalStorage(this.state.formData);// call function to add new data to local storage :)
}

SaveDataToLocalStorage(data)
{   
   var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('book_list'));
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('book_list', JSON.stringify(a));
}

 // componentWillMount() --> first immediately before the initial render
componentWillMount(){
  if(!localStorage.getItem('book_list')){
  localStorage.setItem("book_list", JSON.stringify(this.state.book_list));}
  
  localStorage.getItem('book_list') && this.setState({
    book_list: JSON.parse(localStorage.getItem('book_list')),
    isLoading:false
  });
  }

  getBookData= (event)=>{
  //// get the value the user type
  const newBook=event.target.value;
   // get the original state
  const originalState=this.state.formData;
    // make copy of original state
  const copy=Object.assign({},originalState);
     
  const key=event.target.name;// name => title or image or note
  copy[key]=newBook;// key take all keys(image and title)

  //copy.title=newTitle;// update the copy with data that user type
  //update the state with the new copy
   this.setState({
    formData: copy
  });
  }

  render() {
    const listOfBook=this.state.book_list.map((book)=>{
         return <Book title={book.title} image={book.image} note={book.note} /> ;
    });
    return (
      <div id="dataa">
        <h1 className="bookListHeader">Books List</h1>
        <label>Title:</label>
        <input type="text" name="title" onChange={this.getBookData} value={this.state.formData.title}/>
        <label>Image:</label>
        <input type="text" name="image" onChange={this.getBookData} value={this.state.formData.image}/>
        <label>Note:</label>
        <input type="text" name="note" onChange={this.getBookData} value={this.state.formData.note}/>
        <button type="submit" onClick={this.setBookData}>Add new book</button>
        {listOfBook}
       
      </div>
    );
  }
}

export default App;
