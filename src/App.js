import React from "react";
import './App.css';
import ChildComponent from './component/profile/profile';




const  App=()=> {

  const alertMyInput = name => alert(name)


  return (
    <div className="App">
     <ChildComponent
     
     titel = "Louis Pasteur" 
     profession = "Microbiologiste" 
     naissance = {1822} 
     bib = " Est un scientifique français, chimiste et physicien de formation. Pionnier de la microbiologie, il connut, de son vivant même, une grande notoriété pour avoir mis au point un vaccin contre la rage."
     alertMyInput={alertMyInput}
    
    >
    <div>
    
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Louis_Pasteur%2C_foto_av_Paul_Nadar.jpg" width = "500" height = "300 " alt ="loius"/>
      
    </div>
   </ChildComponent>  
    </div>
  );
}

export default App;
