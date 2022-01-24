import React, { useEffect, useState } from 'react'
import style from "../CSS/pricing.module.css"
import Switch from '@material-ui/core/Switch';

function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [toggleTime, settoggleTime] = useState(true)



    return (
        <>
            <div className={style.section_first}>
                <h1> Simple &#38; flexible pricing </h1>
                <div className={style.choosePlan}>
                    <span className={toggleTime ? style.active : style.unactive} onClick={() => { settoggleTime(true) }}>Pay Monthly</span>
                    <Switch
                        color="default"
                        checked={!toggleTime}
                        onChange={() => { settoggleTime(!toggleTime) }}
                    />
                    <span className={!toggleTime ? style.active : style.unactive} onClick={() => { settoggleTime(false) }}>Pay Yearly (save 10%)</span>
                </div>
                <div className={style.planDetails}>
                    <div className={style.planFirst}>
                        <p className={style.p1}>Free</p>
                        <p className={style.p2}>1 Seat</p>
                        <p className={style.p3}>2 Projects</p>
                        <p className={style.p4}><b>$</b><span>0</span>USD</p>
                        <p className={style.p5}>forever</p>
                    </div>
                    <div className={style.planSecond}>
                        <p className={style.p1}>Pro</p>
                        <p className={style.p2}>Unlimited Seat</p>
                        <p className={style.p3}>Unlimited Projects</p>
                        <p className={style.p4}><b>$</b>{toggleTime ? <span>12</span> : <span>10.80</span>}USD</p>
                        <p className={style.p5}>{toggleTime ? <p>per Seat per month</p> : <p>per seat per month, billed yearly</p>}</p>
                    </div>
                </div>

                <button className={style.button2}>Start Your Free Trial</button>
                <p style={{ opacity: "0.7" }}>Fully functional 30-day trial. No credit card required.</p>
                <h3>ALL PLANS INCLUDE</h3>

                <div className={style.plans}>
                    <div>
                        <span><i class="fas fa-check-circle"></i> Easy time tracking</span>
                        <span><i class="fas fa-check-circle"></i> Apps for all your devices</span>
                        <span><i class="fas fa-check-circle"></i> Integrations that fit your workflow</span>
                    </div>
                    <div>
                        <span><i class="fas fa-check-circle"></i> Insight into your projects and team</span>
                        <span><i class="fas fa-check-circle"></i> Seamless invoicing and payments</span>
                        <span><i class="fas fa-check-circle"></i> Support from real humans</span>
                    </div>
                </div>

            </div>

            <div className={style.section_second}>
                <div className={style.section_second_review}>
                    <div className={style.reviewbox1}>
                        <p>
                            “As soon as we started to hire people, we moved everything
                            over to Harvest… Scaling would have been impossible without
                            a time tracking tool.”
                        </p>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/photo-haraldur-096cabeba998080e7048bc683b1d8c722a5ed3fa2ed7d4315f796959e8715b71.jpg"
                            alt=""
                        />
                        <p>Haraldur Thorleifsson, Ueno</p>

                    </div>

                    <div className={style.reviewbox2}>
                        <p>
                            “Harvest is definitely one of the key software tools in our
                            tool chest that has enabled the company to work remote.”
                        </p>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/photo-michael-d5626f57c1a75421364eaff9e1a6a50eaf4a69470da6d6b0eaabc46486399ee7.jpg"
                            alt=""
                        />
                        <p>Michael Kucera, Zehner</p>
                    </div>
                </div>

                <hr />

                <h1>Common Questions</h1>

            </div>
            <div className={style.section_third}>

                <div className={style.section_third_content}>
                    <h1>Time tracking trusted by 70,000+ companies</h1>
                    <p>See if Harvest is right for your team with a free, fully functional 30-day trial.</p>
                </div>

                <div className={style.section_third_button}>
                    <button> Start&nbsp;your&nbsp;FreeTrial</button>
                </div>

                <hr />

                <div className={style.section_third_img}>
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-vw.png?noresize&amp;width=59&amp;height=60&amp;name=featured-vw.png" height="60" width="59" alt="Volkswagen" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-columbia.png?noresize&amp;width=196&amp;height=60&amp;name=featured-columbia.png" height="60" width="196" alt="Columbia University" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-dell.png?noresize&amp;width=59&amp;height=60&amp;name=featured-dell.png" height="60" width="59" alt="Dell" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-conde-nast.png?noresize&amp;width=149&amp;height=60&amp;name=featured-conde-nast.png" height="60" width="149" alt="Condé Nast" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-mcdonalds.png?noresize&amp;width=59&amp;height=60&amp;name=featured-mcdonalds.png" height="60" width="59" alt="McDonald’s" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-aclu.png?noresize&amp;width=72&amp;height=60&amp;name=featured-aclu.png" height="60" width="72" alt="ACLU" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-lululemon.png?noresize&amp;width=59&amp;height=60&amp;name=featured-lululemon.png" height="60" width="59" alt="Lululemon" />
                    <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-amnesty-international.png?noresize&amp;width=132&amp;height=60&amp;name=featured-amnesty-international.png" height="60" width="132" alt="Amnesty International" />
                </div>

            </div>
        </>
    )
}

export default Pricing
