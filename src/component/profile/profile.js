import React from "react";
import PropsTypes from 'prop-types';

const ChildComponent =(props)=>{
  const {
    titel,
    profession,
    naissance,
    bib,
    children,
    alertMyInput
  }= props
  const styleObject = {color:"green", textAlign: 'center'}
    return(
 <div style={styleObject}>
    <button onClick={() => alertMyInput(titel)}>
     ClickMe
   </button>
     
     <h1>{titel}</h1>
     <h2>{profession}</h2>
     <h2>né le {naissance}</h2>
    
  <p>{bib}</p>
  {children}
</div>
  ) 
}
ChildComponent.defaultProps = {
  profession:"this is profession default value"
}
ChildComponent.PropsTypes ={
  titel: PropsTypes.string,
    profession: PropsTypes.string,
    naissance: PropsTypes.number,
    bib: PropsTypes.string,
    alertMyInput: PropsTypes.func

}
export default ChildComponent;

