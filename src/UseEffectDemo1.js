import React, { useEffect,useState } from 'react';
import './style.css';

const UseEffctDemo1=()=> {

  const [count,setCount]=useState(0);
useEffect(()=>{
  if(count>=1){
  document.title=`chats(${count})`
  }
  else{
    document.title=`chats`
  }
})

 useEffect(()=>{
   console.log("useEffect")
 })
  return (
    <div>
      <h1>Hello useEffect {count}</h1>
       
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}
export default UseEffctDemo1