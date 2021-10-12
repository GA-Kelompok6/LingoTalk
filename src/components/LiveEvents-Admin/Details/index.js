import React, { useState, useEffect } from 'react'
import axios from "axios";
import DetailsComponent from './Details';

export default function Details() {
   const LinkApi = "https://6163d4ebb55edc00175c1b7b.mockapi.io/LiveEvent"


   const seeEvent = details => {
      // console.log(details)
      const getDetails = async () => {
         await axios.get(LinkApi)
            .then(res => {
               // console.log(res.data)
               details(res.data)
            })
            .catch(err => {
               console.log(err)
            })
      }

   }





   return (
      <div>
         <DetailsComponent seeEvent={seeEvent} />
      </div>
   )
}
