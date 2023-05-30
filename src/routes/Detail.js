/*
컴포넌트의 Life Cycle
1. 페이지 로딩(mount)
2. 업데이트(update)
3. 제거(unmount)

mount, update 시 코드 실행하려면
useEffect() 사용
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const YellowBtn = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg === 'blue' ? 'white' : 'black'};
    padding: 10px;
`;

const NewBtn = styled(YellowBtn)`
    color: ${props => props.bg === 'green' ? 'white' : 'black'};
`;

const Box = styled.div`
    background: gray;
    padding: 20px;
`;

const Detail = (props) => {
    let [ alert, setAlert ] = useState(true);
    
    useEffect(() => {
        let a = setTimeout(() => setAlert(false), 2000);
        return () => {
            // 타이머 제거, useEffect가 실행되기 전에 실행됨
            clearTimeout(a);
        }
    }, []) // [] : 첫 마운트 때에만 실행

    // 유저가 입력한 URL 파라미터의 값을 읽어오기 위해 useParams()
    let { id } = useParams();

    return (
        <div className="container">
            { alert ? <div className="alert alert-waring">2초 이내 구매 시 할인</div> : '' }
            <Box>
                <YellowBtn bg="blue">스타일버튼_blue</YellowBtn>
                <NewBtn bg="green">스타일버튼_green</NewBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://raw.githubusercontent.com/hyennin/react-practice2-3/master/src/img/shoes0' + id + '.png' } width="100%" alt="에어"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;