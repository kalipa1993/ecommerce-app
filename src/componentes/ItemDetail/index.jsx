import React,{useState} from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {

    const[goToCart,setGoToCart] = useState(false);

     const onAdd =(quantity) => {
        setGoToCart(truegit);
        }
     }

    return (
        <div className="container">
            <div className="detail">
                <img className= 'detail_image' src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar compra</Link>
                        :<ItemCount initial={3} stock={5} onAdd={onAdd}/>
                    }

                    <ItemCount initial={3} stock={5} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );


export default ItemDetail;