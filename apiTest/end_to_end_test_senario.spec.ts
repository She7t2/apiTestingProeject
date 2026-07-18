/**
 * End to End delete booking
 * 
 * Steps  : 
 *  1) Create new Booking 
 *  2) get booking 
 *  3) upadte booking  ( Token )
 *  4) delete  booking  (Token)
 * 
 */

import {test , expect } from "@playwright/test"
import fs from "fs"
  function requestData (filePath : string ) { 
    JSON.parse(fs.readFileSync(filePath, "utf-8"))
  } 

test.only("End To End delete booking" , async ({request})=> { 

    // Create new Booking 
    const jsonFile = "./testdata/post_request_body.json"

    const requestBody = JSON.parse(fs.readFileSync(jsonFile, "utf-8"))

    const respons = await request.post("/booking", { data: requestBody })

    const responsBody = await respons.json()

    const bookId = responsBody.bookingid ; 

    console.log(`booking id is  ========= > ${bookId}`)


    //  2) get booking 
    
    const getResponse  = await request.get(`/booking/${bookId}`)

    const getResponsBody = await getResponse.json() 
     
    console.log (getResponsBody)


    // update booking  

    // First of all (create Token)
    
const tokenData = "./testdata/token_data.json"

    const tokenRequestBody = JSON.parse(fs.readFileSync(tokenData, "utf-8"))

    const tokenRespons = await request.post("/auth", { data: tokenRequestBody })

    const tokenResponsBody = await tokenRespons.json()

    const Token = tokenResponsBody.token

    console.log(`Token =========>  ${Token}`)

    /**
     * Seding Update Request (Put)
     */



const putJsonData  =  "./testdata/put_request.json"

const updateRequestBody = JSON.parse(fs.readFileSync(putJsonData ,"utf-8"))

    const updateResopns = await request.put(`/booking/${bookId}`,
        {
            data: updateRequestBody,
            headers: { "Cookie": `token = ${Token}` }
        }
    )

  expect (updateResopns.ok).toBeTruthy ()
  expect (updateResopns.status() ).toBe(200)

  
  const updateResopnsBody = await  updateResopns.json()

  console.log(updateRequestBody) 



  // deleting bookinng 


   const deletedRespons =  await request.delete(`/booking/${bookId} `, {

           headers: { "Cookie": `token = ${Token}` }
    })

    expect (deletedRespons.statusText()).toBe("Created")
       expect (deletedRespons.status()).toBe(201)


       console.log("booking  are deleted Successfully")
    


})
