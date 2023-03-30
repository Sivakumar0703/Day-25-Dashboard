import React from "react";
import { useHistory } from "react-router-dom";
import MainPage from "./mainpage";








export default function Redirect() {
    const history = useHistory();
    return(
<MainPage>
       <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' ,minHeight:'76vh'}}>
        <p style={{fontSize:'100px'}}>404</p>
        <p>Page not found</p>
        <a href="#" onClick={()=> history.push('/')} style={{color:'blue',textDecoration:'none'}}> <span><i class="bi bi-arrow-left"></i> &nbsp;</span>Back to dashboard</a>
       </div>
       </MainPage>

    );
}