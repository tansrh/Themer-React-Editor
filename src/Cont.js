import React, {useState} from 'react'

export default function Cont() {
    const [text, setText]=useState("");
    const [ttt, setttt]=useState("");
    let s={
        margin: '1em auto',
        fontWeight: 'bold',
        width:'90%',
        color:'black',
        font: '1em',
        height:'20em',       
        border: '2px solid black',
        overflowY: 'scroll'
    }
    let st={
        margin:'5px auto',
        width:'5em'
    }
    const cpy=(event)=>{
        navigator.clipboard.writeText(text);
        /*
        alert("copied");
        */
        setTimeout((event)=>{

            document.getElementById('al').style.display='block';
        }, 50);
        setTimeout((event)=>{

            document.getElementById('al').style.display='none';
        }, 1500);
       
    }
    let dv={
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
    let alt={
        display:'none',
        height:'3em',
        backgroundColor:'orange',
        padding:'5px',
        alignItems:'center',
        width:'100%'
 }
    const chg=(event)=>{
    
       
        let n=Math.random()*10;
        n=Math.floor(n);
        const t=document.getElementById('tt');
        
        
        t.style.color='white';
        setText(event.target.value);
        let a=event.target.value;
        setttt(a.charAt(a.length-1));
        if(n===0){
            t.style.backgroundColor='rgb(102, 189, 255)';
        }
        else if(n===1){
            t.style.backgroundColor='rgb(197, 234, 255)';
        }
        else if(n===2){
            t.style.backgroundColor='rgb(197, 234, 142)';
        }
        else if(n===3){
            t.style.backgroundColor='rgb(197, 141, 221)';
        }
        else if(n===4){
            t.style.backgroundColor='rgb(255, 165, 0)';
        }
        else if(n===5){
            t.style.backgroundColor='orange';
        }
        else if(n===6){
            t.style.backgroundColor='gray';
        }
        else if(n===7){
            t.style.backgroundColor='rgb(170, 67, 163)';
        }
        else if(n===8){
            t.style.backgroundColor='rgb(255, 141, 71)';
        }
        else if(n===9){
            t.style.backgroundColor='rgb(240, 141, 71)';
        }
        else if(n===10){
            t.style.backgroundColor='rgb(255, 189, 255)';
        }
       


    }
 
    let ss={
        display:'flex',
        justifyContent:'space-between'
    }
     let box={
        height:'100%',
        width:'5em',
        fontWeight:'bold',
        backgroundColor:'white',
        border:'2px',
        borderRadius:'2px',
        textAlign:'center'
     }  
    
  return (
    <div style={dv}>
    <nav id="fm" style={ss} className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">Themer</a>
    <input style={box} value={ttt}></input>
  
    
  </nav>
 <div id='al' style={alt}>Succes! Copied</div> 
        <textarea className='form-control' id="tt" value={text} style={s} onChange={chg} name="txt" cols="100" rows="10"></textarea>
        <button type="button" style={st} class="btn btn-dark" onClick={cpy}>Copy</button>
        </div>
  )
}
