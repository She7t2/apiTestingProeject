import { test, expect } from "@playwright/test"
import { request } from "node:http"



test("Get Book details  by  Id  path param", async ({ request }) => {

    const bookId = 1 // bookin id 


    // get book details using  by book id path param 

    const respons = await request.get(`/booking/${bookId}`)

    //extract respons body 

    const responsBody = await respons.json()

    console.log(responsBody)


    //add asserssion  

    expect(respons.ok).toBeTruthy()
    expect(respons.status()).toBe(200)
})



test("Get book details using book Id query param", async ({ request }) => {
    
    const firstName = "jim"
    const lastName = "Brown"


    const respons = await request.get("/booking", {

        params: {

            firstName,
            lastName
        }
    })

    // Extract respons body 
    const responsBody = await respons.json()

    console.log(responsBody)


    //add asserssion 

    expect(respons.ok).toBeTruthy()

    expect(respons.status()).toBe(200)

    for (const item of responsBody) {
        expect(item).toHaveProperty("bookingid")

        expect(item.booking).toBe("number")

        expect(item.bookId).toBeGreaterThan(0)
    }

})