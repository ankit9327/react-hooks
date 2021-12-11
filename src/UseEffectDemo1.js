import React, { useEffect,useState } from 'react';
import './style.css';

const UseEffctDemo1=()=> {

  const [count,setCount]=useState(0);
useEffect(()=>{
  document.title=`chats(${count})`
})

 useEffect(()=>{
   console.log("useEffect")
 })
  return (
    <div>
      <h1>Hello useeffect {count}</h1>
       <h2>This is after 1st push</h2>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}
export default UseEffctDemo1