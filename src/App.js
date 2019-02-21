import React, { Component } from 'react';
import './App.css';
import Book from './Book';
import './reset.css';
import moment from 'moment';

/* how to take information from Book.js (child)
 -in the parent create arrow function 
 -prmeter to pass information 
 -pass a refreance to the child as props
 -call the function from child.*/

// declare state to store array of the books list
//declare function getBookData() to make the users to add book in books list array 
   // declare impty formData of book inside state to fill it by user data 
// declare function setBookData() when users click on the book mark the book as complete, also if users click again delete the mark


//  let uncheckedBookVal=true; //global vairable -->take true if item checked otherwise take false
 //let countVal=0;
class App extends Component {
 // declare state 
  state= {
    // formData new book data input 
    formData:{
       title:"",
       image:"",
       note:"",
       checked: 'false'
    },
    checkCount:0,
    // book_list store all book data 
     book_list:[
      // {
      //   title:"How to Change Your Mind",
      //   image:"https://images.gr-assets.com/books/1522586374l/36710811.jpg",
      //   note:"I finished reading a hundred pages",
      //   checked: 'false',
       
      // }
      // ,{
      //   title:"The Rise and Fall of the Dinosaurs",
      //  image:"https://images.gr-assets.com/books/1515529573l/35820369.jpg",
      //  note:"I read 300 pages",
      //  checked: 'false',
      
      // }
      // ,{
      //   title:"Harry Potter",
      //   image:"https://images.gr-assets.com/books/1474154022l/3.jpg",
      //   note:"(Harry Potter #1)",
      //   checked: 'false',
      // }
    ]
  }//end state
 
  // SaveDataToLocalStorage() function to add new book data inside local storage 
  SaveDataToLocalStorage(data)
  { 
      var a = [];
      // Parse the serialized data back into an array of objects
      a = JSON.parse(localStorage.getItem('book_list'));
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(data);
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('book_list', JSON.stringify(a));
  }

// componentDidMount() -> after the initial render
  
 componentDidMount(){
    if(!localStorage.getItem('book_list')){
      localStorage.setItem("book_list", JSON.stringify(this.state.book_list));}
      
    localStorage.getItem('book_list') && this.setState({
        book_list: JSON.parse(localStorage.getItem('book_list')),
      });

      if(!localStorage.getItem('count')){
            localStorage.setItem("count", JSON.stringify(this.state.checkCount));}
            
          localStorage.getItem('count') && this.setState({
            checkCount: JSON.parse(localStorage.getItem('count')),
            });
     }

  // setBookData --> call when user click on button submit to add new data in page
             //set the book data input to this.satae.Book_list
  setBookData=(event)=>{
    //prevent the form 
    event.preventDefault();
    const copy= this.state.book_list.slice(0);//make copy of book_list array
    copy.push(this.state.formData);//add the new book_list data to the array
    
    if(this.state.formData.title!=="" || this.state.formData.image!=="" || this.state.formData.note!=""){
    this.setState({
      book_list:copy,//set the new book data to book_list by copy constant
      formData:{ // reset the input box to empty data
        title:"",
        image:"",
        note:"",
        checked: 'false'
      }
    });
    localStorage.setItem("book_list", JSON.stringify(copy));}
  //  this.SaveDataToLocalStorage(this.state.formData); // call function to add new data to local storage :)
  }

// getBookData--> get the book data input and save it in this.satae.formData
  getBookData= (event)=>{
    event.preventDefault();
        const newBook=event.target.value;// get the value the user type
        const originalState=this.state.formData; // get the original state
        const copy=Object.assign({},originalState);// make copy of original state
        const key=event.target.name;// name => title or image or note
        copy[key]=newBook;// key take all keys(image and title)
        //update the state with the new copy
        this.setState({
            formData: copy
          });
  }
  
//call function when click on button clear checked item -->to delete only checked book(completed)
  clearBookChecked=()=>{
    //const copyStateBook= this.state.book_list.slice(0);//make copy of book_list
    
    //  used filter to remove the checked Books(completed)
    const updatedList = this.state.book_list.filter(book => {
      console.log(book)
      return book.checked === 'false'
    });

    console.log('listUpdated after delete checked book', updatedList);

    // update book_list by use set state
    localStorage.setItem("count", JSON.stringify(parseInt(0)));

    this.setState({
      book_list: updatedList,
      checkCount:0
    });
      
       localStorage.setItem("book_list", JSON.stringify(updatedList)); // set local storage after delete checked book
  }

  // checkBook--> check if the book checked by take the index from child component
   checkBook = (index) => {
    // console.log("this.state.book_list.checkCoun",this.state.book_list.checkCount);
      // console.log(index)
      const copy= this.state.book_list.slice(0);//make copy of book_list array
      if (copy[index].checked === 'checked'){ 
        /* the value of checked state equal 'checked' that means this value change form 
      checked to unchecked so it need to reset their value to be false*/   
        copy[index].checked = "false"
        this.setState({
          checkCount:this.state.checkCount-1
        });

        localStorage.setItem("count", JSON.stringify(this.state.checkCount-1)); 
      } 
      
      else {
         // the value of checked state equal 'false' that means this value checked 
        copy[index].checked = "checked";
        this.setState({
          checkCount: this.state.checkCount+1
          //parseInt(this.state.checkCount)+1// store num to state
        });

        localStorage.setItem("count", JSON.stringify(this.state.checkCount+1));
          //parseInt(this.state.checkCount)+1));
      }

          //set copy to local storage
         // setState of book_list
     
      this.setState({
        book_list: copy,
       
      });

      localStorage.setItem("book_list", JSON.stringify(copy));
    }

    // after click on button clear all book 
  clearAll=()=>{
    //>> clear book_list and update localStorage <<
     this.setState({
       book_list:[]
       ,checkCount:0
     });
     localStorage.setItem("book_list", JSON.stringify([]));
    }
  
  render(){
    // store all books in listOfBook by use map 
    //pass a refreance to the child as props
   
    const listOfBook=this.state.book_list.map((book, index)=>{
         return <Book book={book} 
                      index={index}
                      checkBook={this.checkBook}  //then the Book component(child) will call the function checkBook
                      Count={this.Count} /> ;
    });

    return (
      
      <div id="data" >
        <div className="pageHeader">
                 <h1 className="bookListHeader"> 
                 Books List</h1>
        </div>
      
      <div className="input-group ml-5">
         <div className="input-group-prepend ml-2 ">
              <span className="input-group-text" id="addon-wrapping" >Title</span>
         </div>
         <input type="text" className="form" placeholder="title" name="title" onChange={this.getBookData} value={this.state.formData.title} />
            <div className="input-group-prepend ml-2">
                  <span className="input-group-text" id="addon-wrapping" >Image</span>
            </div>
         <input type="text" className="form" placeholder="image" name="image" onChange={this.getBookData} value={this.state.formData.image} />
             <div className="input-group-prepend ml-2">
                 <span className="input-group-text" id="addon-wrapping" >Note</span>
         </div>
         <input type="text" className="form" placeholder="note" name="note" onChange={this.getBookData} value={this.state.formData.note}/>
         <button type="submit" className="btn ml-2" onClick={this.setBookData}> ＋ Add book</button>
      </div>
      <br/>
      <div className="btn1">
          <button type="submit" className="btn1 btnCheckedClear" onClick={this.clearBookChecked}>Clear completed book</button>
          <button type="submit" className="btn1 btnCheckedClear" onClick={this.clearAll}>Clear all books</button>
           <p className="btn1 count" >{this.state.checkCount} book completed</p>
           <p className="date"> {moment().format("MMM Do YY")} </p><br/>
      </div>

        {/* if there is no book  */}
      {this.state.book_list.length === 0 ? <h3 className="NoBook"> About Book List: 
      <p className="About"> Book List is the site for readers and their books list. Our mission is to help 
      readers <br/> to add their books that they want to read it and allow to write their note about 
      the book <br/>also clear the book after they finished reading the book . </p>
      </h3> : listOfBook}
      

      </div>
    
    );
  }
}

export default App;