"use client"
import Item from "@/src/component/item";
import axios from "axios";
import { useEffect, useState } from "react";
export default function View(props:any){
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${props.params.id}.json`;
    const [item,setItem] = useState({});
    function getData(){
        axios.get(API_URL)
        .then(res=>{
            console.log(res.data);
            setItem(res.data);
        })
    };

    useEffect(()=>{
        if(props.params.id && props.params.id > 0 ){
            getData();
        }
        
    },[props.params.id]);

    return (<Item item={item}/>);
}