import React, { useEffect, useState, useRef } from 'react'
import style from "../CSS/features.module.css"

function Features() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const [TrackTime, setTrackTime] = useState(true)
    const [ReportAnalyze, setReportAnalyze] = useState(false)
    const [Invoice, setInvoice] = useState(false)
    const [Integrate, setIntegrate] = useState(false)

    // Track TIME IMAGES
    const [TimeAsYouWork, setTimeAsYouWork] = useState(true)
    const [EnterAllYourHours, setEnterAllYourHours] = useState(false)
    const [TrackTimeEverywhere, setTrackTimeEverywhere] = useState(false)

    // Report AND Analyze images
    const [VisualizeProjectProgress, setVisualizeProjectProgress] = useState(true)
    const [KeepTabsOnTeamCapacity, setKeepTabsOnTeamCapacity] = useState(false)
    const [DigIntoTheDetails, setDigIntoTheDetails] = useState(false)

    // Invoice_Get_Paid
    const [generateAndSendInvoices, setgenerateAndSendInvoices] = useState(true)
    const [keepTabsOnPayments, setkeepTabsOnPayments] = useState(false)
    const [letClientsPayOnline, setletClientsPayOnline] = useState(false)

    // Integrate_WorkFlows
    const [trackTimeFromYourTools, settrackTimeFromYourTools] = useState(true)
    const [importCalenderEvents, setimportCalenderEvents] = useState(false)
    const [syncDataAndInvoices, setsyncDataAndInvoices] = useState(false)

    return (
        <div>
            <div className={style.navigationButtons}>

                <a href="#TrackTime"><button className={TrackTime ? style.button1st : style.buttonOriginal}
                    onClick={() => {
                        setTrackTime(true)
                        setReportAnalyze(false)
                        setInvoice(false)
                        setIntegrate(false)
                    }}
                >
                    <div
                        className={style.imgContainer}
                        style={{ backgroundColor: "#3D9DC1" }}
                    >
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-time.svg"
                            alt=""
                        />
                    </div>
                    <span>Track Time</span>
                </button></a>

                <a href="#Report_Analyze"><button className={ReportAnalyze ? style.button2nd : style.buttonOriginal}
                    onClick={() => {
                        setTrackTime(false)
                        setReportAnalyze(true)
                        setInvoice(false)
                        setIntegrate(false)
                    }}>
                    <div className={style.imgContainer} style={{ backgroundColor: "#F18D2A" }}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-report.svg"
                            alt=""
                        />
                    </div>
                    <span>Report &amp; Analyze</span>
                </button></a>

                <a href="#Invoice_Get_Paid"><button className={Invoice ? style.button3rd : style.buttonOriginal}
                    onClick={() => {
                        setTrackTime(false)
                        setReportAnalyze(false)
                        setInvoice(true)
                        setIntegrate(false)
                    }}>
                    <div className={style.imgContainer} style={{ backgroundColor: "#21A5A0" }}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-pay.svg"
                            alt=""
                        />
                    </div>
                    <span>Invoice &amp; Get Paid</span>
                </button></a>

                <a href="#Integrate_WorkFlows"><button className={Integrate ? style.button4th : style.buttonOriginal}
                    onClick={() => {
                        setTrackTime(false)
                        setReportAnalyze(false)
                        setInvoice(false)
                        setIntegrate(true)
                    }}>
                    <div className={style.imgContainer} style={{ backgroundColor: "#CB5C5B" }}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/homepage/icon-features-integrate.svg"
                            alt=""
                        />
                    </div>
                    <span>Integrate WorkFlows</span>
                </button></a>

            </div>

            {/* Track Time */}
            <div className={style.section_TrackTime}>
                <div id="TrackTime" className={style.track}>

                    <div className={style.trackContent}>
                        <img
                            src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-time-70.svg"
                            alt=""
                        />
                        <h1>Time tracking your team will actually use</h1>
                        <p>An intuitive, lightweight time tracking experience that’s easy to learn and use, and gives you immediate and actionable insight.</p>

                        {TimeAsYouWork ? <img
                            className={style.trackContentImage}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-timesheet-daily@2x.png?width=840&amp;name=screenshot-timesheet-daily@2x.png"
                            alt="Daily timesheet view"
                        /> : <></>}

                        {EnterAllYourHours ? <img
                            className={style.trackContentImage}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-timesheet-weekly@2x.png?width=840&amp;name=screenshot-timesheet-weekly@2x.png"
                            alt="Weekly timesheet view"
                        /> : <></>}

                        {TrackTimeEverywhere ? <img
                            className={style.trackContentImage}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-apps@2x.png?width=840&amp;name=screenshot-apps@2x.png"
                            alt="Desktop and mobile apps"
                        /> : <></>}

                        <div className={style.trackContentButtons}>

                            <button
                                className={TimeAsYouWork ? style.active : style.unactive}
                                onClick={() => {
                                    setTimeAsYouWork(true)
                                    setEnterAllYourHours(false)
                                    setTrackTimeEverywhere(false)
                                }}
                            >Track time as you work</button>
                            <button
                                className={EnterAllYourHours ? style.active : style.unactive}
                                onClick={() => {
                                    setTimeAsYouWork(false)
                                    setEnterAllYourHours(true)
                                    setTrackTimeEverywhere(false)
                                }}
                            >Enter all your hours at once</button>
                            <button
                                className={TrackTimeEverywhere ? style.active : style.unactive}
                                onClick={() => {
                                    setTimeAsYouWork(false)
                                    setEnterAllYourHours(false)
                                    setTrackTimeEverywhere(true)
                                }}
                            >Track time everywhere</button>
                        </div>
                    </div>
                </div>
                <div className={style.trackContentBanner}>

                    <div className={style.Banner1}>
                        <h3>TIMESHEETS</h3>
                        <h1>Track time however you work</h1>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-stopwatch-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Start and stop timers as you work, or fill in your timesheet at the end of the day.</p>
                            </div>
                            <div style={{ margin: "20px 0px" }}>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-phone-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Desktop and mobile apps put time tracking at your fingertips.</p>
                            </div>
                            <div>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-reminder-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Automated reminders encourage you to track time consistently.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                            <img
                                className={style.bannerIMAGE}
                                src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/timesheets-mobile@2x.png?width=450&amp;name=timesheets-mobile@2x.png"
                                alt=""
                            />
                        </div>

                    </div>

                    <div className={style.Banner2}>
                        <h3>INTEGRATIONS</h3>
                        <h1>Start timers from your favorite tools</h1>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-connect-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Track time from the productivity tools you already use every day.</p>
                            </div>
                            <div style={{ margin: "20px 0px" }}>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-calendar-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Speed up time tracking with integrations for Google Calendar &amp; Outlook.</p>
                            </div>
                            <div>
                                <img
                                    src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-browser-50.svg"
                                    alt=""
                                    style={{ float: "left" }}
                                />
                                <p>Browser extensions make time tracking visible throughout the day.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                            <img
                                className={style.bannerIMAGE}
                                src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/time-integrations@2x.png?width=450&amp;name=time-integrations@2x.png"
                                alt=""
                            />
                        </div>
                    </div>

                </div>
                <div className={style.box}>

                    <div className={style.boxText}>
                        <h3>“Having an easy, clean way to track time allows us to focus on the tough engineering problems where we bring value to our clients.”</h3>
                    </div>
                    <div className={style.boxArrow}>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div className={style.boxImg}>
                        <p>Genevieve Laing</p>
                        <img src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/featured-customers/logo-small-cooper-perkins.svg" alt="" />
                    </div>

                </div>
            </div>




            <hr className={style.Horizontal_Line} />





            {/* Report & Analyze */}
            <div id="Report_Analyze" className={style.Report}>

                <div className={style.trackContent}>
                    <img
                        src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-reports-70.svg"
                        alt=""
                    />
                    <h1>Gain insight to improve performance</h1>
                    <p>A wide selection of visual reports help you support your team and keep projects running smoothly.</p>

                    {VisualizeProjectProgress ? <img
                        className={style.trackContentImage}
                        src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-projects@2x.png?width=840&amp;name=screenshot-projects@2x.png"
                        alt="Daily timesheet view"
                    /> : <></>}

                    {KeepTabsOnTeamCapacity ? <img
                        className={style.trackContentImage}
                        src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-team@2x.png?width=840&amp;name=screenshot-team@2x.png"
                        alt="Weekly timesheet view"
                    /> : <></>}

                    {DigIntoTheDetails ? <img
                        className={style.trackContentImage}
                        src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-team-details@2x.png?width=840&amp;name=screenshot-team-details@2x.png"
                        alt="DDesktop and mobile apps"
                    /> : <></>}

                    <div className={style.trackContentButtons}>

                        <button
                            className={VisualizeProjectProgress ? style.Ractive : style.unactive}
                            onClick={() => {
                                setVisualizeProjectProgress(true)
                                setKeepTabsOnTeamCapacity(false)
                                setDigIntoTheDetails(false)
                            }}
                        >Visualize Project Progress</button>
                        <button
                            className={KeepTabsOnTeamCapacity ? style.Ractive : style.unactive}
                            onClick={() => {
                                setVisualizeProjectProgress(false)
                                setKeepTabsOnTeamCapacity(true)
                                setDigIntoTheDetails(false)
                            }}
                        >Keep Tabs On Team Capacity</button>
                        <button
                            className={DigIntoTheDetails ? style.Ractive : style.unactive}
                            onClick={() => {
                                setVisualizeProjectProgress(false)
                                setKeepTabsOnTeamCapacity(false)
                                setDigIntoTheDetails(true)
                            }}
                        >Dig Into The Details</button>
                    </div>
                </div>
            </div>
            <div className={style.trackContentBanner} style={{ paddingBottom: "80px" }}>

                <div className={style.Banner1} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>PROJECT REPORTING</h3>
                    <h1>Keep projects profitable and on track</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-budget-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Stay on top of budgets and internal costs with live visual reports.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-zoomin-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Zoom in to understand where teams can decrease costs.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-retrospective-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review past project data to improve how you plan and price future projects.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/budgets-costs@2x.png?width=450&amp;name=budgets-costs@2x.png"
                            alt=""
                        />
                    </div>

                </div>

                <div className={style.Banner2} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>TEAM REPORTING</h3>
                    <h1>Manage your team’s bandwidth</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-team-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Visualize your team’s capacity so you can adjust their workload accordingly.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-distribution-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Understand where time is spent for more focused team support.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-review-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review, edit and approve timesheets for accuracy and insight.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/capacity@2x.png?width=450&amp;name=capacity@2x.png"
                            alt=""
                        />

                    </div>
                </div>

            </div>



            <hr className={style.Horizontal_Line} />




            {/* Invoice_Get_Paid*/}
            <div id="Invoice_Get_Paid" className={style.Invoice}>

                <div className={style.trackContent}>
                    <img
                        src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-payments-70.svg"
                        alt=""
                    />
                    <h1>Transform time into revenue</h1>
                    <p>Easily turn tracked time and expenses into invoices and get paid fast with Stripe and Paypal integrations.</p>

                    {generateAndSendInvoices ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-invoicing@2x.png?width=840&name=screenshot-invoicing@2x.png"
                        alt="Daily timesheet view"
                    /> : <></>}

                    {keepTabsOnPayments ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-invoicing-overview@2x.png?width=840&name=screenshot-invoicing-overview@2x.png"
                        alt="Weekly timesheet view"
                    /> : <></>}

                    {letClientsPayOnline ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-invoicing-payments@2x.png?width=840&name=screenshot-invoicing-payments@2x.png"
                        alt="DDesktop and mobile apps"
                    /> : <></>}

                    <div className={style.trackContentButtons}>

                        <button
                            className={generateAndSendInvoices ? style.Ractive : style.unactive}
                            onClick={() => {
                                setgenerateAndSendInvoices(true)
                                setkeepTabsOnPayments(false)
                                setletClientsPayOnline(false)
                            }}
                        >Generate and send invoices</button>
                        <button
                            className={keepTabsOnPayments ? style.Ractive : style.unactive}
                            onClick={() => {
                                setgenerateAndSendInvoices(false)
                                setkeepTabsOnPayments(true)
                                setletClientsPayOnline(false)
                            }}
                        >Keep tabs on payments</button>
                        <button
                            className={letClientsPayOnline ? style.Ractive : style.unactive}
                            onClick={() => {
                                setgenerateAndSendInvoices(false)
                                setkeepTabsOnPayments(false)
                                setletClientsPayOnline(true)
                            }}
                        >Let clients pay online</button>
                    </div>
                </div>
            </div>
            <div className={style.trackContentBanner} style={{ paddingBottom: "80px" }}>

                <div className={style.Banner1} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>PROJECT REPORTING</h3>
                    <h1>Keep projects profitable and on track</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-budget-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Stay on top of budgets and internal costs with live visual reports.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-zoomin-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Zoom in to understand where teams can decrease costs.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-retrospective-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review past project data to improve how you plan and price future projects.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/budgets-costs@2x.png?width=450&amp;name=budgets-costs@2x.png"
                            alt=""
                        />
                    </div>

                </div>

                <div className={style.Banner2} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>TEAM REPORTING</h3>
                    <h1>Manage your team’s bandwidth</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-team-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Visualize your team’s capacity so you can adjust their workload accordingly.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-distribution-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Understand where time is spent for more focused team support.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-review-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review, edit and approve timesheets for accuracy and insight.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/capacity@2x.png?width=450&amp;name=capacity@2x.png"
                            alt=""
                        />

                    </div>
                </div>

            </div>





            <hr className={style.Horizontal_Line} />





            {/* Integrate_WorkFlows */}
            <div id="Integrate_WorkFlows" className={style.Integrate}>

                <div className={style.trackContent}>
                    <img
                        src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-integrations-70.svg"
                        alt=""
                    />
                    <h1>Streamline your workflow</h1>
                    <p>Save time and work more efficiently with dozens of integrations that help you optimize your entire workflow.</p>

                    {trackTimeFromYourTools ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-asana@2x.png?width=840&name=screenshot-asana@2x.png"
                        alt="Daily timesheet view"
                    /> : <></>}

                    {importCalenderEvents ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-calendar@2x.png?width=840&name=screenshot-calendar@2x.png"
                        alt="Weekly timesheet view"
                    /> : <></>}

                    {syncDataAndInvoices ? <img
                        className={style.trackContentImage}
                        src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/screenshot-qbo@2x.png?width=420&name=screenshot-qbo@2x.png"
                        alt="DDesktop and mobile apps"
                    /> : <></>}

                    <div className={style.trackContentButtons}>

                        <button
                            className={trackTimeFromYourTools ? style.Ractive : style.unactive}
                            onClick={() => {
                                settrackTimeFromYourTools(true)
                                setimportCalenderEvents(false)
                                setsyncDataAndInvoices(false)
                            }}
                        >Track time from your tools</button>
                        <button
                            className={importCalenderEvents ? style.Ractive : style.unactive}
                            onClick={() => {
                                settrackTimeFromYourTools(false)
                                setimportCalenderEvents(true)
                                setsyncDataAndInvoices(false)
                            }}
                        >Import calender events</button>
                        <button
                            className={syncDataAndInvoices ? style.Ractive : style.unactive}
                            onClick={() => {
                                settrackTimeFromYourTools(false)
                                setimportCalenderEvents(false)
                                setsyncDataAndInvoices(true)
                            }}
                        >Sync Data and invoices</button>
                    </div>
                </div>
            </div>
            <div className={style.trackContentBanner} style={{ paddingBottom: "80px" }}>

                <div className={style.Banner1} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>PROJECT REPORTING</h3>
                    <h1>Keep projects profitable and on track</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-budget-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Stay on top of budgets and internal costs with live visual reports.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-zoomin-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Zoom in to understand where teams can decrease costs.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-retrospective-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review past project data to improve how you plan and price future projects.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/budgets-costs@2x.png?width=450&amp;name=budgets-costs@2x.png"
                            alt=""
                        />
                    </div>

                </div>

                <div className={style.Banner2} style={{ height: "690px" }}>
                    <h3 style={{ color: "#F18D2A" }}>TEAM REPORTING</h3>
                    <h1>Manage your team’s bandwidth</h1>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-team-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Visualize your team’s capacity so you can adjust their workload accordingly.</p>
                        </div>
                        <div style={{ margin: "20px 0px" }}>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-distribution-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Understand where time is spent for more focused team support.</p>
                        </div>
                        <div>
                            <img
                                src="https://f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/features/icon-features-review-50.svg"
                                alt=""
                                style={{ float: "left" }}
                            />
                            <p>Review, edit and approve timesheets for accuracy and insight.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <img
                            className={style.bannerIMAGE}
                            src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/features/capacity@2x.png?width=450&amp;name=capacity@2x.png"
                            alt=""
                        />

                    </div>
                </div>

            </div>






            <div className={style.text}>
                <span className={style.text_span1}>70,000+</span>
                <span className={style.text_span2}>COMPANIES TRACK TIME WITH HARVEST</span>
            </div>

            <div className={style.section_two}>
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-vw.png?noresize&amp;width=59&amp;height=60&amp;name=featured-vw.png" height="60" width="59" alt="Volkswagen" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-columbia.png?noresize&amp;width=196&amp;height=60&amp;name=featured-columbia.png" height="60" width="196" alt="Columbia University" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-dell.png?noresize&amp;width=59&amp;height=60&amp;name=featured-dell.png" height="60" width="59" alt="Dell" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-conde-nast.png?noresize&amp;width=149&amp;height=60&amp;name=featured-conde-nast.png" height="60" width="149" alt="Condé Nast" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-mcdonalds.png?noresize&amp;width=59&amp;height=60&amp;name=featured-mcdonalds.png" height="60" width="59" alt="McDonald’s" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-aclu.png?noresize&amp;width=72&amp;height=60&amp;name=featured-aclu.png" height="60" width="72" alt="ACLU" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-lululemon.png?noresize&amp;width=59&amp;height=60&amp;name=featured-lululemon.png" height="60" width="59" alt="Lululemon" />
                <img className={style.img} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/featured-customers/featured-amnesty-international.png?noresize&amp;width=132&amp;height=60&amp;name=featured-amnesty-international.png" height="60" width="132" alt="Amnesty International" />
            </div>
            <div className={style.footer}>
                <div className={style.footer_container}>

                    <div className={style.footer_left}>
                        <p className={style.p1}>Start tracking time for free</p>
                        <p className={style.p2}>
                            See if Harvest is right for you with a free,
                            fully functional 30-day trial. No credit card
                            required.
                        </p>
                        <button className={style.footer_button}>Start Your Free Trial</button>
                    </div>

                    <div className={style.footer_right}>
                        <img className={style.footer_img} width="500" src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/illustrations/timesheets-medium.png?width=500&amp;name=timesheets-medium.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
