/**
 *  Creating Book :  
 * 
 * Requset Method  : 
 *   Post 
 * Requste body  : 
 * Json file 
 * 
 */

import { test, expect } from "@playwright/test"
import fs from "fs"

test("create Psot request using json File ", async ({ request }) => {

    // request body 

    const jsonFile = "./testdata/post_request_body.json"

    const requestBody = JSON.parse(fs.readFileSync(jsonFile, "utf-8"))

    const respons = await request.post("/booking", { data: requestBody })


    const responsBody = await respons.json();

    console.log(requestBody)

    expect(respons.status()).toBe(200)

    expect(respons.ok).toBeTruthy()


    // Validate respons boy 

    expect(responsBody).toHaveProperty("bookingid")
    expect(responsBody).toHaveProperty("booking")
    expect(responsBody).toHaveProperty("booking.additionalneeds")

    // validata booking details 

    const bookingDetalis = responsBody.booking


    expect(bookingDetalis).toMatchObject({

        "firstname": requestBody.firstname,
        "lastname": requestBody.lastname,
        "totalprice": requestBody.totalprice,
        "depositpaid": requestBody.depositpaid,
        "bookingdates": {
            "checkin": requestBody.bookingdates.checkin,
            "checkout": requestBody.bookingdates.checkout
        }

    }

    )


})