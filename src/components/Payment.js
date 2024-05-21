import React, { useState } from "react";
import "./Payment.css"; // Create a CSS file for styling

// function Payment() {
//     return (
//         <div className="payment-container">
//             <h1>Payment Page</h1>
//         </div>
//     );
// }

function Payment() {
    return (
        <div className="payment-container">
            <h1>Payment Page</h1>
            <h2>Payment Information</h2>
            <form>
                <label>Card Number</label>
                <input type="text" placeholder="Enter your card number" />
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YY" />
                <label>CVV</label>
                <input type="text" placeholder="Enter CVV" />
            </form>

            <h2>Address Information</h2>

            <form>
                <label>
                    Street:
                    <input type="text" name="street" />
                </label>
                <label>
                    City:
                    <input type="text" name="city" />
                </label>
                <label>
                    State:
                    <input type="text" name="state" />
                </label>
                <label>
                    Zip Code:
                    <input type="text" name="zip" />
                </label>
            </form>
            <button type="submit">Pay</button>

        </div>
    );
}

export default Payment;