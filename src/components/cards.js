import React from "react"
import MainPage from "./mainpage";



export default function Cards() {

    return (

        <MainPage>

        <div className=" card-page " >


            <DashCard
                label='EARNINGS (MONTHLY)'
                content='$40,000'
                color='blue'
            />

            <DashCard
                label='EARNINGS (ANNUAL)'
                content='$215,000'
                color='lawngreen'
            />

            <DashCard
                label='TASKS'
                color='#36b9cc'
            />

            <DashCard
                label='PENDING REQUEST'
                content='18'
                color='yellow'
            />
        </div>

        <div className="card m-2 col-lg-6 col-sm-12">
            <div className="card-header">
                 <h3 style={{opacity:'0.7'}}> Default Card Example</h3>
            </div>

            <div className="card-body">
                <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example</p>
            </div>

        </div>

        <div className="card m-2 col-lg-6 col-sm-12">
            <div className="card-header">
                 <h3 style={{color:'blue'}}> Basic Card Example</h3>
            </div>

            <div className="card-body">
                <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!</p>
            </div>

        </div>

        </MainPage>
  
    );
}




function DashCard({label,content,color}){
    return(
        <div className="card  dash-card m-2" style={{borderLeft:`4px solid ${color}` }}>

            <div className="card-body">

                <p className="dash-card-txt" style={{color:`${color}`}}>{label}</p>
                <p>{content}</p>

            </div>
           
        </div>
    );
}