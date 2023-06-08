import {useState} from "react"
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from "./routes/Detail";
import axios from 'axios';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();  

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link> */}
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>             
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
         < Route path = "/" element={
          <>
           <div className="main-bg"></div>
           <div className = "container">
            <div className = "row">                   
             { shoes.map((a,i) => {
               return < Card shoes={shoes[i]} i={i+1}></Card>              
            })}        
          </div> 
          </div> 
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              console.log(결과.data)
              console.log(shoes)
              let copy = [...shoes, ...결과.data]
              setShoes(copy);
            })
            .catch(()=>{
              console.log('접속실패')
            })
          }}>상품보기</button>

         </>
        }/>

        {/* 여러장의 상세페이지를 만들기 */}
      <Route path = "/detail/:id" element={<Detail shoes={shoes}/>}/>
      <Route path = "/about" element={<About/>}>
        <Route path = "member" element = {<div>member</div>}/>
        <Route path = "location" element = {<div>location</div>}/>
      </Route>
      <Route path = "*" element={<div>페이지없음</div>}/> 
   </Routes>   
 </div>
 ); 
}

function About(){
  return(
    <div>
      <Outlet></Outlet>
      <h4>스포츠화전문점</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props){
  return (
    <div className = "col-md-4">
      {/* <img src={props.images} alt='에어'/> */}
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg' } width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}


export default App;
