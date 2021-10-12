import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function DetailsComponent({ seeEvent }) {
   const LinkApi = "https://6163d4ebb55edc00175c1b7b.mockapi.io/LiveEvent"

   const [Details, setDetails] = useState([]);

   const getDetails = async () => {
      await axios.get(LinkApi)
         .then(res => {
            // console.log(res.data)
            setDetails(res.data)
         })
         .catch(err => {
            console.log(err)
         })
   }

   useEffect(() => {
      getDetails();
   }, [])

   const submitHandlerDetail = (e) => {
      // e = Ambil Id dari Token

      // alert("HI")

      seeEvent(setDetails)
   }

   return (
      <div>
         <h1>HI</h1>
         {Details.map((detail) => {
            const { id, title } = detail
            return (
               <div key={id} >
                  <div >
                     <h3>Description</h3>
                     <h4> {title}</h4>
                     <form onSubmit={submitHandlerDetail}>
                        <button type="submit">See</button>

                     </form>
                  </div>
               </div>

            )
         })}
      </div >
   )
}
