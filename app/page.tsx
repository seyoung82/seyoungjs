"use client"
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";


export default function Home() {
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    function getData(){
        axios.get(API_URL)
        .then(res=>{
            console.log(res);
        });
    }

    useEffect(() => {
      getData()
    }, []);
  
  return (
    <>
    <h2>WelCome</h2>
      Hello,WEb
    </>
  );
}
