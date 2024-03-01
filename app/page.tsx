import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    function getData(){
        axios.get(API_URL)
        .then(res=>{
            console.log(res);
        });
    }

    useEffect(()=>{
      getData();
    },[]);
  return (
    <>
    <h2>WelCome</h2>
      Hello,WEb
    </>
  );
}
