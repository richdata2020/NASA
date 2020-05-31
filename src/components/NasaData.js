import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

function formatDate(date) {
    let dates = new Date(date),
        month = '' + (dates.getMonth() + 1),
        day = '' + dates.getDate(),
        year = dates.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
export default function NasaData() {
    const[Nasa, setNasa] = useState([]);
    const[date, setDate] = useState([new Date()])
    let nasaAPI = process.env.REACT_APP_NasaAPIKey;
    const decreaseDate = () => {
        
        let yesterday = new Date();
        let currentDate = new Date(date);
        yesterday.setDate(currentDate.getDate() - 1);
        setDate(yesterday);
    }
    const increaseDate = () => {
        let tomorrow = new Date();
        let checkIfToday = new Date();
        let currentDate = new Date(date);
        tomorrow.setDate(currentDate.getDate() + 1);
        console.log(checkIfToday)
        console.log(currentDate)
        if(checkIfToday.getDay() === currentDate.getDay()){
            alert("You are seeing the latest image of the day, please come back tomorrow for new image!");
        }
        else{
            setDate(tomorrow);
        }
    }
    
 
    useEffect(() => {
        axios
        .get(`http://api.nasa.gov/planetary/apod?api_key=${nasaAPI}&date=` + formatDate(date))
        .then(response => {
            console.log("API", response.data);
            setNasa(response.data);
        })
        .catch(error => {
            console.log("Unable to retrieve data", error);
        })
    }, [date]);    
    return (
        <div className="imageData">
            <NasaCard data={Nasa} dateBackward={decreaseDate} dateForward={increaseDate}/>
        </div>
    )
}