import React, { Component } from 'react';
import './App.css';
import Book from './Book'
import './reset.css'

// declare state to store array of the books list
//declare function getBookData() to make the users to add book in books list array 
   // declare impty formData of book inside state to fill it by user data 
// declare function setBookData() when users click on the book mark the book as complete, also if users click again delete the mark

/* how to take information from Book.js (child)
 -in the parent create arrow function 
 -prmeter to pass information 
 -pass a refreance to the child as props
 -call the function from child.*/
 

//  let uncheckedBookVal=true; //global vairable -->take true if item checked otherwise take false
 let countVal=0;
class App extends Component {
 // declare state 
  state= {
    checkCount:0,
    // formData new book data input 
    formData:{
       title:"",
       image:"",
       note:"",
       checked: 'false'
    },
    // book_list store all book data 
     book_list:[
      {
        title:"How to Change Your Mind",
        image:"https://images.gr-assets.com/books/1522586374l/36710811.jpg",
        note:"I finished reading a hundred pages",
        checked: 'false'
      }
      ,{
        title:"The Rise and Fall of the Dinosaurs",
       image:"https://images.gr-assets.com/books/1515529573l/35820369.jpg",
       note:"I read 300 pages",
       checked: 'false'
      }
      ,{
        title:"Harry Potter",
        image:"https://images.gr-assets.com/books/1474154022l/3.jpg",
        note:"(Harry Potter #1)",
        checked: 'false'
      }
    ]
  }//end state
 
  // setBookData --> call when user click on button submit to add new data in page
  setBookData=(event)=>{
    //prevent the form 
    event.preventDefault();
    const copy= this.state.book_list.slice(0);//make copy of book_list array
    copy.push(this.state.formData);//add the new book_list data to the array
    //update the new book data with our new copy
    this.setState({
      book_list:copy
    });

  //  this.SaveDataToLocalStorage(this.state.formData); // call function to add new data to local storage :)
  }

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

  RemoveDataFromLocalStorage(data){
  //   console.log("iam RemoveDataFromLocalStorage",data);

    const CopyBookList= this.state.book_list.slice(0);//make copy of book_list array
    // for loop to removed checked item from CopyBookList 
    for(var i=0;i<CopyBookList.length;i++){
      if(CopyBookList[i].title===data.title){
        CopyBookList.splice(i,1);// used splice function to remove from array
      } 
    }
    // CopyBookList=this.state.book_list.filter(bookListData=>bookListData!== data);
    // console.log(CopyBookList[0]);
    // set CopyBookList after removed checked book (completed)
    this.setState({
      book_list:CopyBookList
    });
    console.log("I am copy of Book List ",CopyBookList);
    // this.SaveDataToLocalStorage(CopyBookList);
    // localStorage.setItem('book_list', JSON.stringify(this.state.book_list));
  }

// componentDidMount() -> after the initial render
  componentDidMount(){
    // if(!localStorage.getItem('book_list')){
    //   localStorage.setItem("book_list", JSON.stringify(this.state.book_list));}
      
    // localStorage.getItem('book_list') && this.setState({
    //     book_list: JSON.parse(localStorage.getItem('book_list')),
    //   });
      // this.clearBookChecked();
  }

  getBookData= (event)=>{
    // get the value the user type
    const newBook=event.target.value;
    // get the original state
    const originalState=this.state.formData;
    // make copy of original state
    const copy=Object.assign({},originalState);
    const key=event.target.name;// name => title or image or note
    //console.log(key);
    copy[key]=newBook;// key take all keys(image and title)
  //update the state with the new copy
     this.setState({
        formData: copy
       });
  }

  
//call function when click on button clear checked item -->to delete only checked book(completed)
  clearBookChecked=()=>{
    const copyStateBook= this.state.book_list.slice(0);//make copy of book_list
    // const copyCheckedBook =  this.state.checkedBook.slice(0);  //make copy of checkedBook
    //  used foreach to loop throw copyStateBook and remove the checkBooks
    const updatedList = this.state.book_list.filter(book => {
      console.log(book)
      return book.checked === 'false'
    })
    console.log('list', updatedList)
    this.setState({
      book_list: updatedList
    })
  // localStorage.setItem("book_list", JSON.stringify(CopyStateBook));  set copyStateBook
  }

  checkBook = (index) => {
    console.log(index)
    const copy= this.state.book_list.slice(0);//make copy of book_list array
    if (copy[index].checked === 'checked'){
      copy[index].checked = "false"
    } else {
      copy[index].checked = "checked"
    }
    localStorage.setItem("book_list", JSON.stringify(copy));  //set copyStateBook
    this.setState({
      book_list: copy
    })
  }

  Count=(Count)=> {
    countVal=Count;
  }
    

  render(){
    // store all books by use map 
    // send the value to Book class 
    console.log("print only checkedBook: ",this.state.checkedBook);
    //  console.log("BookList:",this.state.book_list);

    const listOfBook=this.state.book_list.map((book, index)=>{
         return <Book book={book} 
                      index={index}
                      checkBook={this.checkBook} 
                      // uncheckedBook={this.uncheckedBook} 
                      getBookStyle={this.changeBookStyle} 
                      Count={this.Count} /> ;
    });

    return (
      <div id="data">
        <h1 className="bookListHeader">Books List</h1>
        <button id="clear" onClick={this.clearBookChecked}> Clear checked items </button>
        <p>{countVal}</p>
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