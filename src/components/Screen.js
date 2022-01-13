import React, { useState, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue} from "firebase/database";
import Graph from "./Graph.js"


// Initialize Firebase
 
const firebaseConfig = {
    apiKey: "AIzaSyD1LAIxU8EBuPorSwlJ7YMMa2cuT7LAQKE",
    authDomain: "maia-64634.firebaseapp.com",
    databaseURL: "https://maia-64634-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "maia-64634",
    storageBucket: "maia-64634.appspot.com",
    messagingSenderId: "71068521004",
    appId: "1:71068521004:web:c75aaed8f85a4d272e7789",
    measurementId: "G-0BJ1WRXN1K"
    };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
export default function Screen(){
    const [dataAll,setDataAll]=useState({});
   
    
        
        useEffect(()=>{
            const refs = ref(db, '3/' );
            onValue(refs, (snapshot) => {
            const data = snapshot.val();
            setDataAll(data)
            });
        }, [])
        

        
        
    return (
        <div>
            {
                dataAll["type"]=="graph"?(
                    <Graph 
                    x_label={dataAll["data"]['x']}
                    y_label={dataAll["data"]['y']}
                    x_coordinates={dataAll["data"]['graph_data'][0]}
                    y_coordinates={dataAll["data"]['graph_data'][1]}/>
                ):(
                    null
                )

            }
        </div>
    )
}
