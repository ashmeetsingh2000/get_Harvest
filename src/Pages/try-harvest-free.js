import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import style from "../CSS/tryHarvestFree.module.css"

function Tryharvestfree() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className={style.header}>
                <div className={style.topline}>
                    <NavLink
                        exact to="/harvestHome"
                        className={style.topline_heading}
                    >
                        <span >HARVEST</span>
                    </NavLink>

                    <NavLink
                        exact to="/signin"
                        className={style.topline_text}
                    >
                        <span>Already a customer? <b>Sign In &#62;</b></span>
                    </NavLink>
                </div>
                <hr className={style.line} />
                <h1>Start your free 30-day trial.</h1>
                <h2>Fully functional. No credit card required.</h2>
            </div>
            <div className={style.signup_form}>
                <button className={style.main_button}>
                    <span className={style.styling}>G</span>
                    <span className={style.main_button_text}>Sign Up with Google</span>
                </button><br />
                <div className={style.orSection}><span>or with your email below</span></div>
                <hr className={style.horizontal_line} />
                <div className={style.form_div}>
                    <form>
                        <div>
                            <label>First Name</label>
                            <input type="text" />
                        </div>

                        <br />

                        <div>
                            <label>Last Name</label>
                            <input type="text" />
                        </div>

                        <br />

                        <div>
                            <label>Company Name</label>
                            <input type="text" />
                        </div>

                        <br />

                        <div>
                            <label>Work Email</label>
                            <input type="email" />
                        </div>

                        <br />

                        <div>
                            <label>Password</label>
                            <input type="password" />
                        </div>

                        <br />

                        <button type="submit">Create My Account</button>
                    </form>
                </div>
                <hr className={style.horizontal_line} />
                <p className={style.endline1}>By creating an account, you agree to the Harvest</p>
                <p className={style.endline1}><u>Terms of Service</u> and <u>Privacy Policy</u></p>
            </div>
        </div >
    )
}

export default Tryharvestfree

