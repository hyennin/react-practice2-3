import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, changeName, increase } from "../store";

function Cart(){
    // let a = useSelector((state)=>{return state.user} )
    let state = useSelector((state)=>state)
    console.log(state.cart[0].name)
    // store.js에게 요청하는 함수
    let dispatch = useDispatch()

    return(
         <div>
            <h6>{state.user.name}의 장바구니</h6>
           <Table>
           <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
           </thead> 
           <tbady>
            {
                state.cart.map((a, i)=>
               <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td><button onClick={() => dispatch(addCount(state.cart[i].id))}>+</button></td>
               </tr>                   
                )
            }
            
                  
           </tbady>
           </Table>
         </div>
    )
}

export default Cart;