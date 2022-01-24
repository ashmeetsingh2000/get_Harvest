import React from 'react'
import style from "./signin.module.css"

function signIn() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <p className={style.heading}>Harvest ID</p>
                <p className={style.p1}>Sign in to a <b>Harvest</b> or <b>Forecast</b> account</p>
                <button className={style.main_button}>
                    <span className={style.styling}>G</span>
                    <span className={style.main_button_text}>Sign In with Google</span>
                </button>
                <div className={style.or_part}><span style={{ opacity: "0.8" }}>or</span></div>
                <hr className={style.main_line} />
                <form className={style.main_form}>
                    <input type="email" placeholder="Work Email" />
                    <input type="password" placeholder="Password" />
                    <button> <b>Sign In</b></button>
                </form>
                <span className={style.forgot_pass}>Forgot your password?</span>
                <div style={{ padding: "15px" }}></div>
                <div className={style.end_line}>
                    <span>What is Harvest ID?</span>
                    <span>Terms of Service</span>
                    <span>Privacy policy</span>
                </div>
            </div>
        </div>
    )
}

export default signIn
