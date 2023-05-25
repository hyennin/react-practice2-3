import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './img/bg1.png';
import shoes01 from './img/shoes01.png'
import shoes02 from './img/shoes02.png'
import shoes03 from './img/shoes03.png'
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [shoes] = useState(data);
  const [images] = useState([shoes01, shoes02, shoes03]);

  return (
    <div className="App">
        {/* <Button variant="success">Success</Button> */}
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='//' element={
          <>
            <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>
            <div className='container'>
              <div className='row'>
                { shoes.map((s, idx) => <Card image={images[idx]} shoes={s}/> )}
              </div>
            </div>
          </>
        }/>
        <Route path='/detail' element={<div>detail페이지입니다.</div>}/>
      </Routes>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className='col-md-4'>
      <img src={props.image} alt='에어'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p> 
    </div>
  );
}

export default App;