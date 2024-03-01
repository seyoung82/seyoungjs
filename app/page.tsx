"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ItemList from "@/src/component/ItemList";
import { Divider } from "semantic-ui-react";
import Head from "next/head";


export default function Home() {
  const [list,setList] = useState([]);
  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    function getData(){
        axios.get(API_URL)
        .then(res=>{
            console.log(res.data);
            setList(res.data);
        });
    }

    useEffect(() => {
      getData()
    }, []);
  
  return (
    <>
    <h2>WelCome</h2>
    <Head>
      <title>HOME | 세영</title>
    </Head>
    <Divider/>
      <ItemList list={list}/>
    </>
  );
}
