import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "./Cards";
import Data from "./Data";
import "./index.css";




ReactDOM.render(<>
<h1 className="heading">5 best netflix series</h1>
{Data.map((val)=>{
    return(
        <Cards 
                         img={val.image}
                         title={val.title}
                         sname={val.sname} 
                         link={val.link}
/>)
})}</>,document.getElementById('root'));


/*

{/* <Cards 
                         img={Data[0].image}
                         title={Data[0].title}
                         sname={Data[0].sname} 
                         link={Data[0].link}
/>
 <Cards 
           img= {Data[0].image}
           title={Data[0].title} 
           sname={Data[0].sname} 
           link={Data[0].link}
/>
<Cards 
img={Data[0].image}
 title={Data[0].title} 
 sname={Data[0].sname}
 />
 <Cards 
img={Data[0].image}
 title={Data[0].title} 
 sname={Data[0].sname}
 />
 <Cards 
img={Data[0].image}
 title={Data[0].title} 
 sname={Data[0].sname}
 /> */