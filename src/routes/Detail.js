// import { useParams } from "react-router-dom";

const Detail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://raw.githubusercontent.com/hyennin/react-practice2-3/master/src/img/shoes01.png' } width="100%" alt="에어"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[0].title}</h4>
                    <p>{props.shoes[0].content}</p>
                    <p>{props.shoes[0].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;