import "./under_eng.css";
import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Button } from "reactstrap";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	NavbarBrand,
	Row,
	Col,
} from "react-bootstrap";
import lecture_logo from "../Assets/lecture_logo_new.png";
import calendar_new from "../Assets/calendar_new.png";
import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase";
import Navi from "./navbar";
import './under_eng.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
	faUsers,
	faChalkboardTeacher,
	faQuestion,
	faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const database = getDatabase(app);


const dbRef = ref(database);
class Under_Eng_Overall extends React.Component
{
    constructor(){
        super()
        this.state={
            showMe:true,
            name:"Default Value",
            lecture_name:"Lecture No.",
            understanding_arr1:[],
            understanding_arr2:[],
            understanding_arr3:[],
            engagement_arr1:[],
            engagement_arr2:[],
            engagement_arr3:[],
            lecture_dates:[],
            lecture_names:[]
        }
        this.getCourseName = this.getCourseName.bind(this);
        this.getUnderstandingIndex()
        this.getEngagementIndex()
        this.getLectureName()
        this.getLectureDate();
        console.log("Hurrayy");
        console.log(this.state.understanding_arr1);
    }
    getCourseName(key) {
        console.log('In getCourse')
        get(child(dbRef, 'InternalDb/Courses/'+key+'/courseCode')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            this.setState({name: snapshot.val()})
            //console.log(this.name);
        } else {
            console.log("No data available");
        }
        })

    }
    getUnderstandingIndex(){
        console.log('In TLS_OP')
        get(child(dbRef, 'InternalDb/alt-r/Lectures')).then((snapshot) => {
            console.log("Printing Snapshotttts")
            console.log(snapshot)
            console.log(snapshot.val())
            if (snapshot.exists()) {
                console.log("In ALT-Dev database and printing lectures table")
                let temp=[];
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Understanding index 1'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, understanding_index_1: num};
                    temp.push(dict);
                }

            
                console.log(temp);

                this.setState({understanding_arr1: temp})

                let temp2=[];

                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Understanding index 2'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, understanding_index_2: num};
                    temp2.push(dict);
                }

            
                console.log(temp2);

                this.setState({understanding_arr2: temp2})

                let temp3=[];
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Understanding index 3'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, understanding_index_3: num};
                    temp3.push(dict);
                }

            
                console.log(temp3);

                this.setState({understanding_arr3: temp3})


            } 
            else {
                console.log("No data available");
            }
    })    
    }

    getEngagementIndex(){
        console.log('In TLS_OP')
        get(child(dbRef, 'InternalDb/alt-r/Lectures')).then((snapshot) => {
            console.log("Printing Snapshotttts")
            console.log(snapshot)
            console.log(snapshot.val())
            if (snapshot.exists()) {
                console.log("In ALT-Dev database and printing lectures table")
                let temp=[];
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Engagement index 1'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, engagement_index_1: num};
                    temp.push(dict);
                }

            
                console.log(temp);

                this.setState({engagement_arr1: temp})

                let temp2=[];

                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Engagement index 2'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, engagement_index_2: num};
                    temp2.push(dict);
                }

            
                console.log(temp2);

                this.setState({engagement_arr2: temp2})

                let temp3=[];
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Overall_Engagement index 3'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    console.log("Printing lecture name")
                    console.log(lecture_num);
                    var dict = {}
                    var dict = { name: lecture_num, engagement_index_3: num};
                    temp3.push(dict);
                }

            
                console.log(temp3);

                this.setState({engagement_arr3: temp3})


            } 
            else {
                console.log("No data available");
            }
            })    
    }
    getLectureName(){
        console.log('In TLS_OP to get Lecture Name')
        get(child(dbRef, 'InternalDb/alt-r/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Lecture Name-: ")
                console.log(Object.keys(snapshot.val())[0]);
                this.setState({lecture_name: Object.keys(snapshot.val())[0]})
            } else {
                console.log("No data available");
            }
        })

    }

    getLectureDate(){
        get(child(dbRef, 'InternalDb/alt-r/Lectures')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("In ALT-Dev database and printing lectures DATESS")
                let temp1=[];
                let temp2=[]; // Having lecture names
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['date'];
                    var lecture_num=Object.keys(snapshot.val())[i];
                    temp1.push(num);
                    temp2.push(lecture_num);
                }
            
                console.log(temp1);

                this.setState({lecture_dates: temp1})
                this.setState({lecture_names: temp2})

            }
        })    
        }
    

    operation()
    {
        this.setState(
            {
                showMe:false
            }
        )
    }
    operation_understanding()
    {
        this.setState(
            {
                showMe:true
            }
        )
    }
    componentDidMount() {
        this.getCourseName('-M8rFNfwcRmYqx8mpJxL');
        this.getUnderstandingIndex();
        this.getEngagementIndex();
        this.getLectureName();
        this.getLectureDate();
    }
    render(){
        return (
            <div className="App">
        <Container className="heading">
        <h2>
          {this.state.name}
          </h2>
        </Container>
        <div className="heading_lecture">
            <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div className="App-header">
        <Button onClick={()=> this.operation_understanding()} className="button">
          Understanding
        </Button>
          
          <Button onClick={()=> this.operation()} className="button">
          Engagement
          </Button>

          {
            this.state.showMe?
            <div className="App-header">
                <div className="index1">
                <h4>Understanding Index 1</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.understanding_arr1} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="understanding_index_1"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

                </div>

                <div className="index2">
                <h4>Understanding Index 2</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.understanding_arr2} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="understanding_index_2"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
                </div>

                <div className="index3">
                <h4>Understanding Index 3</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.understanding_arr3} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="understanding_index_3"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
                </div>   
            </div>
            :
            <div className="App-header">
                <div className="index1">
                <h4>Engagement Index 1</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.engagement_arr1} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="engagement_index_1"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
                </div>

                <div className="index2">
                <h4>Engagement Index 2</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.engagement_arr2} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="engagement_index_2"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
                </div>

                <div className="index3">
                <h4>Engagement Index 3</h4>
                <ResponsiveContainer width="100%" >
                <LineChart width={9000}
                        height={6000} data={this.state.engagement_arr3} margin={{ right: 100 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="engagement_index_3"
                        stroke="blue" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
                </div>  
            </div>
            
        }
        <h4>Lectures </h4> 

       
       <Button color="info" width="1000" height="20"
                onClick={()=> this.operation()}>
                    <img src={lecture_logo} width="18" height="20"/>
                    {this.state.lecture_names[0]}
                    <br></br>
                    <img src={calendar_new} width="18" height="20"/>
                    {this.state.lecture_dates[0]}
                    </Button> 
                    <br></br>
                    <br></br>
            <Button color="info"
                onClick={()=> this.operation()}>
                    <img src={lecture_logo} width="18" height="20"/>
                    {this.state.lecture_names[1]}
                    <br></br>
                    <img src={calendar_new} width="18" height="20"/>
                    {this.state.lecture_dates[1]}
                    </Button> 
                    <br></br>
                    <br></br>
            <Button color="info"
                onClick={()=> this.operation()}>
                    <img src={lecture_logo} width="18" height="20"/>
                    {this.state.lecture_names[2]}
                    <br></br>
                    <img src={calendar_new} width="18" height="20"/>
                    {this.state.lecture_dates[2]}
                    </Button> 
                    <br></br>
                    <br></br>
       






        </div>
        </div>
      </div>

        );
    }
}
export default Under_Eng_Overall;