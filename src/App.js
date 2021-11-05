import React from "react";
import "./style.css"; //imports stylesheet

//activity week 2 que 1
//create constatnts for the four values
//functions returns some values 
const name  = "pepsi";
const ID = "21417469";
const datePurchased = "23 Oct 2021";
const price = "£ 2.50";

//create a function called product
//how nasser taught in class
function Product(props) {
  return (
    <div>
      {props.name} {props.ID} {props.datePurchased} {props.price}


    </div>
  )
}

// que 2 

function toString (name, id, date, pri) {
  return name + "   " + id +  "    " + date + "     " + pri + "     "; 

}

// que 4

function clickhandler () {  //you want a button to open to a value
  window.alert(toString (name, ID, datePurchased, price)) // window alert is used to get a box
}

export default function App() {

  return( 
    <div>
      <h1> Name = {name} </h1>
      <h2> ID = {ID} </h2>
      <h1> Date = {datePurchased} </h1>
      <h1> Price = {price} </h1>
      <button onClick= {clickhandler}> Please click here </button>
     


    </div> 
  )
}


