"use client"
import Item from "@/src/component/item";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
export default function View(props:any){
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${props.params.id}.json`;
    const [item,setItem] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    function getData(){
        axios.get(API_URL)
        .then(res=>{
            console.log(res.data);
            setItem(res.data);
            setIsLoading(false);
            
        })
    };

    useEffect(()=>{
        if(props.params.id && props.params.id > 0 ){
            getData();
        }
        
    },[props.params.id]);

    return (
        <>
        {isLoading ? (
            <div style={{padding:"300px 0"}}>
                <Loader inline="centered" active>
                    Loading
                </Loader>
            </div>
        ) : (
            <Item item={item}/>
        )}
     </>
        
    );
}
