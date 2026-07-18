/**
 * Steps 
 *   1) creating new bookin and extract book id  
 *   2) creating token 
 *   3) use bookid and token to create put request 
 * 
 * 
 */

import { test, expect } from "@playwright/test"

import fs from "fs"

// function readJson(filePath : string){
// JSON.parse(fs.readFileSync(filePath, "utf-8" ))
// }

test("Update book {put method}", async ({ request }) => {

    const jsonFile = "./testdata/post_request_body.json"

    const requestBody = JSON.parse(fs.readFileSync(jsonFile, "utf-8"))

    const respons = await request.post("/booking", { data: requestBody })

    const responsBody = await respons.json()


    // console.log(responsBody)


    // asserssion


    expect(respons.ok).toBeTruthy
    expect(respons.status()).toBe(200)


    // extract booking id  

    const bookId = responsBody.bookingid

    console.log(`booking id ===> ${bookId}`)


    /**
     * Creating Token Proccess using json file 
    */

    const tokenData = "./testdata/token_data.json"

    const tokenRequestBody = JSON.parse(fs.readFileSync(tokenData, "utf-8"))

    const tokenRespons = await request.post("/auth", { data: tokenRequestBody })

    const tokenResponsBody = await tokenRespons.json()

    const Token = tokenResponsBody.token

    console.log(`Token =========>  ${Token}`)

    /**
     * Seding Update Request (Put)
     */



const putJsonData  =  "./testdata/patch_request_body.json"

const updateRequestBody = JSON.parse(fs.readFileSync(putJsonData ,"utf-8"))

    const updateResopns = await request.patch(`/booking/${bookId}`,
        {
            data: updateRequestBody,
            headers: { "Cookie": `token = ${Token}` }
        }
    )

  expect (updateResopns.ok).toBeTruthy ()
  expect (updateResopns.status() ).toBe(200)

  
  const updateResopnsBody = await  updateResopns.json()

  console.log(updateRequestBody)


console.log("Update book details updated ! ")
})