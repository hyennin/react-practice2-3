import { useState } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import bg from './img/bg1.png';
// import shoes01 from './img/shoes01.png';
// import shoes02 from './img/shoes02.png';
// import shoes03 from './img/shoes03.png';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Detail from "./routes/Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => navigate(-1)}>Home</Nav.Link> */}
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
         < Route path="/" element={
          <>
           <div className="main-bg"></div>
           <div className = "container">
            <div className = "row">                   
             { shoes.map((a,i) => {
               return < Card shoes={shoes[i]} i={i+1}></Card>
              // <Card shoes={shoes[i]} images={images[i]}></Card>
            })}
        
        </div> 
      </div> 
      </>
     }/>
    <Route path="/detail" element={<Detail shoes={shoes}/>}/>
    <Route path="/about" element={<About/>}>
     <Route path="member" element={<h1>ㅁㅂ입니다</h1>}/>
     <Route path="location" element={<h1>ㄹㅋㅇㅅ입니다</h1>}/>
    </Route>
    <Route path="*" element={<h1>없는 페이지입니다!!</h1>}/>
   </Routes>   
 </div>
 ); 
}

function About() {
  return (
    <div>
      <h4>스포츠화 전문점</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props){
  return (
    <div className = "col-md-4">
      {/* <img src={props.images} alt='에어'/> */}
      <img src={'https://raw.githubusercontent.com/hyennin/react-practice2-3/master/src/img/shoes0' + props.i + '.png' } width="100%" alt="에어"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;