import { useParams } from "react-router-dom";
import styled from "styled-components";

const YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
`;

const Detail = (props) => {
    // 유저가 입력한 URL 파라미터의 값을 읽어오기 위해 useParams()
    let { id } = useParams();

    return (
        <div className="container">
            <YellowBtn>스타일 버튼</YellowBtn>
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