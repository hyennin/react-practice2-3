// import { useParams } from "react-router-dom";

const Detail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://raw.githubusercontent.com/hyennin/react-practice2-3/master/src/img/shoes01.png' } width="100%" alt="에어"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;