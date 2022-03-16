import './rawdata.css';
import React from 'react';
import {Button} from 'reactstrap'
import MyPDF from '../Assets/filename.csv';
import Raw2 from '../Assets/raw2.csv';
import Raw3 from '../Assets/raw3.csv';
import file_logo from '../Assets/file_logo.png'
import { Navbar,Container,Nav,NavDropdown, NavbarBrand,Row,Col } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../firebase';
import Navi from './navbar';
const database = getDatabase(app);

const dbRef = ref(database);

const state = {
  labels: ['0% - 20%', '20% - 40%', '40% - 60%',
           '60% - 80%', '80% - 100%'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

function RawData () 
{
  const [name , setName] = useState("Default  Value");
  const getCourseName = (key) => {
    console.log('In getCourse')
    get(child(dbRef, 'InternalDb/Courses/'+key+'/courseCode')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setName(snapshot.val())
      } else {
        console.log("No data available");
      }
    })
    .catch((e)=>
    {
        console.log("Error Ocuured" + e);
    }
    )
    
  }
  useEffect(() => {
    // Update the document title using the browser API
    getCourseName('-M8rFNfwcRmYqx8mpJxL')
  });

    return (
      
      <div className="RawData">
        <Container className="heading">
        <h2>
          {name}
          </h2>
        </Container>
        <Navi></Navi>
        <div className="RawData-body">
          <div style={{textAlign:'center'}}><br/>
          <Container className="box">
            
          <div className="position-absolute mid-center">

          <Button className="button">
                <div className="horizontal">
                <div className="vertical">
                <img src={file_logo} width="30" height="50"/>
                </div>
                <div className="vertical">
                <a href={MyPDF} download="raw_data1.csv">middle.csv</a> 
                </div>
                </div>
                </Button>
          </div>
            
          <div className="position-absolute mid-left">
              <Button className="button">
                <div className="horizontal">
                <div className="vertical">
                <img src={file_logo} width="30" height="50"/>
                </div>
                <div className="vertical">
                <a href={Raw2} download="raw_data2.csv">left.csv</a> 
                </div>
                </div>
                </Button>
              </div>

            <div className="position-absolute mid-right">             
              <Button className="button">
                <div className="horizontal">
                <div className="vertical">
                <img src={file_logo} width="30" height="50"/>
                </div>
                <div className="vertical">
                <a href={Raw3} download="raw_data3.csv">right.csv</a> 
                </div>
                </div>
                </Button>
              </div>
              
            </Container>
            </div>
            </div>
      </div>
    );
  }

export default RawData;
