import React, { useState } from "react";
import Navbar from "./navbar.component";
import InputField from "./common/input";
import * as regex from "./common/regex";
import axios from "axios";

function Contacts() {
    const handlesubmit = (event) => {
        event.preventDefault();
        const isvalid = validateinputs();
        if (isvalid) {
            const apiurl = "/api/contactrequst";
            axios
                .post(apiurl, formdata)
                .then(function (response) {
                    alert("message sent");
                    window.location.replace("/");
                })
                .catch(function (error) {
                    alert("some error occured");
                    window.location.replace("/");
                });
        }
    };
    const validateinputs = () => {
        if (regex.name.test(String(formdata.name))) {
            if (regex.email.test(String(formdata.email))) {
                if (regex.phone.test(String(formdata.phone))) {
                    return true;
                } else {
                    setFormdata(
                        {
                            ...formdata,
                            validationerror: "invalid phone",
                        },
                        alert("invalid phone")
                    );
                    return false;
                }
            } else {
                setFormdata(
                    { ...formdata, validationerror: "invalid email" },
                    alert("invalid email")
                );
                return false;
            }
        } else {
            setFormdata(
                { ...formdata, validationerror: "invalid name" },
                alert("invalid name")
            );
            return false;
        }
    };
    const handlechange = (event) => {
        switch (event.target.name) {
            case "username": {
                let filterd = event.target.value;
                filterd = filterd.replace(/[^A-Za-z\s!?]/g, "");
                setFormdata({ ...formdata, name: filterd });
                break;
            }
            case "email": {
                let filterd = event.target.value.toLowerCase();
                filterd = filterd.replace(/[^a-zA-Z0-9\s@._]/g, "");
                setFormdata({ ...formdata, email: filterd });
                break;
            }
            case "phone": {
                let filterd = event.target.value;
                filterd = filterd.replace(/[^0-9]/g, "");
                filterd = filterd.length > 10 ? filterd.slice(0, 10) : filterd;
                setFormdata({ ...formdata, phone: filterd });
                break;
            }
            case "message": {
                setFormdata({ ...formdata, message: event.target.value });
                break;
            }
            default:
                return false;
        }
    };
    const initialform = {
        name: "",
        email: "",
        phone: "",
        message: "",
        validationerror: "",
    };
    const [formdata, setFormdata] = useState(initialform);
    return (
        <div className="parent-contactme">
            <Navbar />
            <div className="site-main">
                <div className="site-main-inner-contactme">
                    <div className="contactme-section">
                        <h2 className="contact link">Contact me</h2>
                        <form onSubmit={handlesubmit} className="contactform">
                            <InputField
                                type="text"
                                placeholder="Name*"
                                value={formdata.name}
                                name="username"
                                onChange={handlechange}
                            />
                            <InputField
                                type="text"
                                placeholder="Email*"
                                value={formdata.email}
                                name="email"
                                onChange={handlechange}
                            />
                            <InputField
                                type="text"
                                placeholder="Phone(optional)"
                                value={formdata.phone}
                                name="phone"
                                onChange={handlechange}
                            />
                            <textarea
                                placeholder="write a message to me"
                                value={formdata.message}
                                name="message"
                                rows="4"
                                cols="30"
                                onChange={handlechange}
                            >
                                {formdata.message}
                            </textarea>
                            <InputField
                                type="submit"
                                name="submitbutton"
                                value="send message"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
