import React from "react";
import MainPage from "./mainpage";

export default function Dashboard() {
    return (


        <MainPage>

            <div className="dash-title">
                <div className="title-name"><span>DASHBOARD</span></div>
                <div className="report-btn"><button className="bg-primary rpt-btn"><i class="fa fa-download"></i>&nbsp;Generate Report</button></div>

            </div>

            <div className="d-card">
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

            <div className="col-5 ms-4">
                <Progress
                    progressName='Server Migration'
                    complete="progress-bar col-2"
                    color='red'
                    percentage='20%'
                />

                <Progress
                    progressName='Sales Tracking'
                    complete='progress-bar col-4'
                    color='yellow'
                    percentage='40%'
                />

                <Progress
                    progressName='Customer Database'
                    complete='progress-bar col-7'
                    color='blue'
                    percentage='60%'
                />

                <Progress
                    progressName='Payout Details'
                    complete='progress-bar col-9'
                    color='#36b9cc'
                    percentage='80%'
                />

                <Progress
                    progressName='Account Setup'
                    complete='progress-bar col-12'
                    color='lawngreen'
                    percentage='100%'
                />
            </div>



        </MainPage>

    );
}



function DashCard({ label, content, color }) {
    return (
        <div className="card  dash-card" style={{ borderLeft: `4px solid ${color}` }}>

            <div className="card-body">

                <p className="dash-card-txt" style={{ color: `${color}` }}>{label}</p>
                <p>{content}</p>

            </div>

        </div>
    );
}


function Progress({ progressName, complete, color, percentage }) {
    return (

        <div className="progress-box col-10 mt-1"> <span className="label-name">{progressName}</span>&nbsp; &nbsp;
            <span className="percentage">{percentage}</span>

            <div className="progress-name col-10 mt-2">

                <div className={complete} style={{ backgroundColor: `${color}` }} >

                </div>

            </div>

        </div>

    );
}