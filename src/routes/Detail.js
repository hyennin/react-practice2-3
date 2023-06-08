
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import styled from "styled-components";

let YellowBtn = styled.button`
 background : ${props => props.bg};
 color : ${props => props.bg == 'blue' ?'white' : 'black'};
 padding : 10px;
`
let NewBtn =  styled(YellowBtn)`  
 color : ${props => props.bg == 'green' ?'white' : 'black'};
`
let Box = styled.div`
 background : grey; 
 padding : 20px;
`
function Detail(props) {
  let [alert, setAlert] = useState(true)
   // 유저가 입력한 URL파라미터의 값을 읽어오려면 useParams()이용 
  let {id} = useParams(); 
  // 3개의 탭의 값을 각각 0,1,2 정한 것임   
  let [탭, 탭변경] = useState(0);

  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)}, 2000)  
    console.log(2)
    return ()=>{
      console.log(1) 
      // 타이머제거, useEffect가 실행되기 전에 실행됨 
       clearTimeout(a)
    }     
  }, []) 
  // [] mount시 1회가 코드가 실행되어라 
  
 
   return (
       <div className="container">
       {
        alert == true   
        ? <div className = "alert alert-waring">
           2초이내 구매시 할인 
         </div>
        : null 
       } 
         <Box>
         <YellowBtn bg="blue">스타일버튼_blue</YellowBtn>
         <NewBtn bg="green">스타일버튼_green</NewBtn>
         </Box>           
           <div className="row">
           <div className="col-md-6">
             <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />              
                </div>
                 <div className="col-md-6">
                     <h4 className="pt-5">{props.shoes[id].title}</h4>
                     <p>{props.shoes[id].content}</p>
                     <p>{props.shoes[id].price}원</p>
                     <button className="btn btn-danger">주문하기</button> 
                </div>
             </div>
             <Nav variant = "tabs" defaultActiveKey= "link0">
                <Nav.Item>
                  <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>  
                <Nav.Item>
                  <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                  <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item> 
             </Nav>
             <TabContent 탭={탭}/>

        </div> 
      )
    }

    // function TabContent(props){
    //   if(props.탭 == 0){
    //     return <div>내용0</div>
    //   } 
    //   if(props.탭 == 1){
    //     return <div>내용1</div>
    //   } 
    //   if(props.탭 == 2){
    //     return <div>내용2</div>
    //   }
    // }
    
    // function TabContent({탭}){
    //   if(탭 == 0){
    //     return <div>내용0</div>
    //   } 
    //   if(탭 == 1){
    //     return <div>내용1</div>
    //   } 
    //   if(탭 == 2){
    //     return <div>내용2</div>
    //   }
    
    function TabContent({탭}){
        const [fade, setFade] = useState('');

        useEffect(() => {
            // 탭이 변경될 때마다 fade의 값이 초기에는 공백이었다가
            // 0.1초 뒤에 'end' 붙이기
            const a = setTimeout(() => {setFade('end')}, 100)

            return(() => {
                clearTimeout(a);
                setFade('');
            })
        }, [탭])

        return (
            <div className={"start " + fade}>
                {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
            </div>
        )
    }


export default Detail;