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
import back_arrow from "../Assets/back_arrow.png";
import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase";
import Navi from "./navbar";
const database = getDatabase(app);


const dbRef = ref(database);
class Under_Eng extends React.Component
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
            engagement_arr3:[]
        }
        this.getCourseName = this.getCourseName.bind(this);
        this.getUnderstandingIndex()
        this.getEngagementIndex()
        this.getLectureName()
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
        get(child(dbRef, 'InternalDb/alt-r/Lecture 1/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());

                let temp=[];
                var under20=0;
                var under40=0;
                var under60=0;
                var under80=0;
                var under100=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Understanding Index 1']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20=under20+1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40=under40+1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60=under60+1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80=under80+1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100+=1;
                    }
                }
                temp.push(under20)
                temp.push(under40)
                temp.push(under60)
                temp.push(under80)
                temp.push(under100)
                console.log(temp);

                this.setState({understanding_arr1: temp})

                let temp2=[];
                var under20_2=0;
                var under40_2=0;
                var under60_2=0;
                var under80_2=0;
                var under100_2=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Understanding Index 2']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20_2+=1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40_2+=1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60_2+=1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80_2+=1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100_2+=1;
                    }
                }
                temp2.push(under20_2)
                temp2.push(under40_2)
                temp2.push(under60_2)
                temp2.push(under80_2)
                temp2.push(under100_2)
                console.log(temp2);

                this.setState({understanding_arr2: temp2})

                let temp3=[];
                var under20_3=0;
                var under40_3=0;
                var under60_3=0;
                var under80_3=0;
                var under100_3=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Understanding Index 3']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20_3+=1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40_3+=1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60_3+=1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80_3+=1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100_3+=1;
                    }
                }
                temp3.push(under20_3)
                temp3.push(under40_3)
                temp3.push(under60_3)
                temp3.push(under80_3)
                temp3.push(under100_3)
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
        get(child(dbRef, 'InternalDb/alt-r/Lecture 1/')).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());

                let temp=[];
                var under20=0;
                var under40=0;
                var under60=0;
                var under80=0;
                var under100=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Engagement Index 1']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20=under20+1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40=under40+1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60=under60+1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80=under80+1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100+=1;
                    }
                }
                temp.push(under20)
                temp.push(under40)
                temp.push(under60)
                temp.push(under80)
                temp.push(under100)
                console.log(temp);

                this.setState({engagement_arr1: temp})

                let temp2=[];
                var under20_2=0;
                var under40_2=0;
                var under60_2=0;
                var under80_2=0;
                var under100_2=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Engagement Index 2']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20_2+=1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40_2+=1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60_2+=1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80_2+=1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100_2+=1;
                    }
                }
                temp2.push(under20_2)
                temp2.push(under40_2)
                temp2.push(under60_2)
                temp2.push(under80_2)
                temp2.push(under100_2)
                console.log(temp2);

                this.setState({engagement_arr2: temp2})

                let temp3=[];
                var under20_3=0;
                var under40_3=0;
                var under60_3=0;
                var under80_3=0;
                var under100_3=0;
                console.log(Object.keys(snapshot.val()).length);
                for(var i=0;i<Object.keys(snapshot.val()).length;i++)
                {
                    var num=Object.values(snapshot.val())[i]['Engagement Index 3']*100
                    console.log(num);
                    if(num>=0 && num<=20)
                    {
                        under20_3+=1;
                    }
                    else if(num>20 && num<=40)
                    {
                        under40_3+=1;
                    }
                    else if(num>40 && num<=60)
                    {
                        under60_3+=1;
                    }
                    else if(num>60 && num<=80)
                    {
                        under80_3+=1;
                    }
                    else if(num>80 && num<=100)
                    {
                        under100_3+=1;
                    }
                }
                temp3.push(under20_3)
                temp3.push(under40_3)
                temp3.push(under60_3)
                temp3.push(under80_3)
                temp3.push(under100_3)
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
    }
    render(){
        return (
            <div className="App">
        <Container className="heading">
        <h2>
          {this.state.name}
          </h2>
        </Container>
        <Navi/>
        <div className="heading_lecture">
            <Button className="small_button">
            <img src={back_arrow} width="16" height="17"/>
            Back to all lectures</Button>
            <br></br>
          <h2>{this.state.lecture_name}</h2>
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
                <h2>Understanding Index 1</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.understanding_arr1,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options= {{
                    legend: {
                    display:true,
                    position: 'bottom'
                    }
                }}
                />
                </div>

                <div className="index2">
                <h2>Understanding Index 2</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.understanding_arr2,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options={{
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
                />
                </div>

                <div className="index3">
                <h2>Understanding Index 3</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.understanding_arr3,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options={{
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
                />
                </div>   
            </div>
            :
            <div className="App-header">
                <div className="index1">
                <h2>Engagement Index 1</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.engagement_arr1,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options={{
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
                />
                </div>

                <div className="index2">
                <h2>Engagement Index 2</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.engagement_arr2,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options={{
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
                />
                </div>

                <div className="index3">
                <h2>Engagement Index 3</h2>
                <Pie
                data={
                    {
                        labels: ['0% - 20%', '20% - 40%', '40% - 60%',
                                 '60% - 80%', '80% - 100%'],
                        datasets: [
                          {
                            data: this.state.engagement_arr3,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(50,205,50)',
                                'rgb(255,0,0)'
                              ],
                              hoverOffset: 4
                          }]
                      }
                }
                width={"30%"}
                options={{
                    legend:{
                    display:true,
                    position:'top'
                    }
                }}
                />
                </div>   
            </div>
            
        }

        </div>
        </div>
      </div>

        );
    }
}
export default Under_Eng;