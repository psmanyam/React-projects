import React from 'react';
import { directive } from '@babel/types';

const Person=(props)=>{
return(
<div>
  <p>Name: {props.name}</p>
  <p>Age: {props.age}</p>
 </div> 

);
}
export default Person;
