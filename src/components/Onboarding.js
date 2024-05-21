import React from "react";
import { useHistory } from "react-router-dom";
import "./Onboarding.css"; // Create a CSS file for styling
import Header from "./Header";

function Onboarding() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from reloading

        // If login is successful, navigate to the main page
        history.push('/quiz');
    };

    return (
        <div>
            <Header />
            <div className="onboarding-container">
                <h1>Onboarding Page</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Onboarding Information</h2>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter your first name" />
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter your last name" />
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="text" placeholder="Enter your password" />

                    <h2>Personal Information</h2>
                    <label>Date of Birth:
                        <input type="text" name="dob" />
                    </label>
                    <label>Gender:
                        <input type="text" name="gender" />
                    </label>
                    <label>Phone Number:
                        <input type="text" name="phone" />
                    </label>

                    <h2>Address Information</h2>
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
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Onboarding;