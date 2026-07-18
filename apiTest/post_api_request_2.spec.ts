/**
 *  Creating Book :  
 * 
 * Requset Method  : 
 *   Post 
 * Requste body  : 
 * Dynamic Data 
 * 
 */

import { test, expect } from "@playwright/test"
import { faker } from "@faker-js/faker"
import { DateTime } from 'luxon'
test("create Psot request using Dynamic Data ", async ({ request }) => {

    // Data  

    const Fname = faker.person.firstName()

    const Lname = faker.person.lastName()

    const totalprice = faker.number.int({ min: 1000, max: 5000 })

    const depositpaid = faker.datatype.boolean()


    // request body 

    const requestBody = {
        "firstname": Fname,
        "lastname": Lname,
        "totalprice": totalprice,
        "depositpaid": depositpaid,
        "bookingdates": {
            "checkin": "2025-07-01",
            "checkout": "2025-07-05"
        },
        "additionalneeds": "super bowls"
    }

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