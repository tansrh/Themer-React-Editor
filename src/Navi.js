import React, {useState} from 'react'

export default function Navi() {
  const [first, setfirst] = useState("");
  let src=()=>{
    let a=document.getElementById('sc');
    window.find(a.select().value);
  }
  let chg=(event)=>{
  

    setfirst(event.target.value);
    
  }
  return (
    
    <nav id="fm" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">Themer</a>
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form  className="form-inline my-2 my-lg-0">
        <input id="sc" className="form-control mr-sm-2" value={first} type="search" placeholder="Search" aria-label="Search" onChange={chg}></input>
        <button id="btn" className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={src}>Search</button>
      </form>
    </div>
  </nav>
    
    
  )
}
