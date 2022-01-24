import React, { useState, useEffect } from 'react'
import style from '../CSS/integration.module.css'
import { boxData } from '../Data/jasondata'

function Integration() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [select, setselect] = useState("")
    const [allIntegration, setIntegrationState] = useState(true)
    return (
        <>
            <div className={style.header}>
                <div className={style.header_body}>
                    <div className={style.headerBodyLeft}>
                        <p className={style.heading}>Connect Harvest to your favourite tools</p>
                        <ul type="none">
                            <li>
                                <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/icons/orange/time-36.svg" alt="" width="36" />
                                <span className={style.heading_text}>Track time from the apps you already use.</span>
                            </li>
                            <li>
                                <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/icons/orange/workflow-36.svg" alt="" width="36" />
                                <span className={style.heading_text}>Make your workflow more efficient.</span>
                            </li>
                            <li>
                                <img src="//f.hubspotusercontent10.net/hubfs/19495563/raw_assets/public/getharvest-theme/images/icons/orange/sync-36.svg" alt="" width="36" />
                                <span className={style.heading_text}>Sync Harvest data with other apps.</span>
                            </li>
                        </ul>
                    </div>

                    <div className={style.header_body_right}>
                        <div className={style.integration_bubbles}>

                            <img style={{ marginLeft: "40px", marginRight: "30px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=100&amp;name=bubble-asana.png" width="80" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=50&amp;name=bubble-asana.png 50w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=100&amp;name=bubble-asana.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=150&amp;name=bubble-asana.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=200&amp;name=bubble-asana.png 200w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=250&amp;name=bubble-asana.png 250w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-asana.png?width=300&amp;name=bubble-asana.png 300w" sizes="(max-width: 100px) 100vw, 100px" alt="" />

                            <img style={{ marginRight: "40px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=80&amp;name=bubble-slack.png" width="70" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=40&amp;name=bubble-slack.png 40w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=80&amp;name=bubble-slack.png 80w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=120&amp;name=bubble-slack.png 120w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=160&amp;name=bubble-slack.png 160w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=200&amp;name=bubble-slack.png 200w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-slack.png?width=240&amp;name=bubble-slack.png 240w" sizes="(max-width: 80px) 100vw, 80px" alt="" />

                            <img style={{ marginRight: "45px", position: "relative", top: "-10px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=60&amp;name=bubble-jira.png" width="55" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=30&amp;name=bubble-jira.png 30w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=60&amp;name=bubble-jira.png 60w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=90&amp;name=bubble-jira.png 90w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=120&amp;name=bubble-jira.png 120w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=150&amp;name=bubble-jira.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-jira.png?width=180&amp;name=bubble-jira.png 180w" sizes="(max-width: 60px) 100vw, 60px" alt="" />

                            <img style={{ marginRight: "30px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=100&amp;name=bubble-outlook.png" width="100" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=50&amp;name=bubble-outlook.png 50w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=100&amp;name=bubble-outlook.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=150&amp;name=bubble-outlook.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=200&amp;name=bubble-outlook.png 200w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=250&amp;name=bubble-outlook.png 250w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-outlook.png?width=300&amp;name=bubble-outlook.png 300w" sizes="(max-width: 100px) 100vw, 100px" alt="" />

                            <img style={{ marginLeft: "25px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=90&amp;name=bubble-trello.png" width="70" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=45&amp;name=bubble-trello.png 45w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=90&amp;name=bubble-trello.png 90w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=135&amp;name=bubble-trello.png 135w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=180&amp;name=bubble-trello.png 180w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=225&amp;name=bubble-trello.png 225w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-trello.png?width=270&amp;name=bubble-trello.png 270w" sizes="(max-width: 90px) 100vw, 90px" alt="" />

                            <img style={{ marginTop: "25px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=70&amp;name=bubble-stripe.png" width="90" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=35&amp;name=bubble-stripe.png 35w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=70&amp;name=bubble-stripe.png 70w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=105&amp;name=bubble-stripe.png 105w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=140&amp;name=bubble-stripe.png 140w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=175&amp;name=bubble-stripe.png 175w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-stripe.png?width=210&amp;name=bubble-stripe.png 210w" sizes="(max-width: 70px) 100vw, 70px" alt="" />

                            <img style={{ marginRight: "45px", marginLeft: "40px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=70&amp;name=bubble-qbo.png" width="77" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=35&amp;name=bubble-qbo.png 35w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=70&amp;name=bubble-qbo.png 70w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=105&amp;name=bubble-qbo.png 105w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=140&amp;name=bubble-qbo.png 140w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=175&amp;name=bubble-qbo.png 175w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-qbo.png?width=210&amp;name=bubble-qbo.png 210w" sizes="(max-width: 70px) 100vw, 70px" alt="" />

                            <img style={{ marginRight: "50px", position: "relative", top: "-20px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=90&amp;name=bubble-basecamp.png" width="67" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=45&amp;name=bubble-basecamp.png 45w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=90&amp;name=bubble-basecamp.png 90w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=135&amp;name=bubble-basecamp.png 135w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=180&amp;name=bubble-basecamp.png 180w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=225&amp;name=bubble-basecamp.png 225w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-basecamp.png?width=270&amp;name=bubble-basecamp.png 270w" sizes="(max-width: 90px) 100vw, 90px" alt="" />

                            <img style={{ marginRight: "30px", position: "relative", top: "10px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=64&amp;name=bubble-github.png" width="100" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=32&amp;name=bubble-github.png 32w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=64&amp;name=bubble-github.png 64w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=96&amp;name=bubble-github.png 96w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=128&amp;name=bubble-github.png 128w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=160&amp;name=bubble-github.png 160w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-github.png?width=192&amp;name=bubble-github.png 192w" sizes="(max-width: 64px) 100vw, 64px" alt="" />

                            <img style={{ marginRight: "30px", position: "relative", top: "-10px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=50&amp;name=bubble-zapier.png" width="80" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=25&amp;name=bubble-zapier.png 25w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=50&amp;name=bubble-zapier.png 50w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=75&amp;name=bubble-zapier.png 75w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=100&amp;name=bubble-zapier.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=125&amp;name=bubble-zapier.png 125w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-zapier.png?width=150&amp;name=bubble-zapier.png 150w" sizes="(max-width: 50px) 100vw, 50px" alt="" />

                            <img style={{ position: "relative", top: "-60px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=40&amp;name=bubble-ifttt.png" width="60" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=20&amp;name=bubble-ifttt.png 20w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=40&amp;name=bubble-ifttt.png 40w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=60&amp;name=bubble-ifttt.png 60w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=80&amp;name=bubble-ifttt.png 80w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=100&amp;name=bubble-ifttt.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-ifttt.png?width=120&amp;name=bubble-ifttt.png 120w" sizes="(max-width: 40px) 100vw, 40px" alt="" />

                            <img style={{ marginTop: "30px", position: "relative", left: "30px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=60&amp;name=bubble-xero.png" width="87" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=30&amp;name=bubble-xero.png 30w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=60&amp;name=bubble-xero.png 60w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=90&amp;name=bubble-xero.png 90w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=120&amp;name=bubble-xero.png 120w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=150&amp;name=bubble-xero.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-xero.png?width=180&amp;name=bubble-xero.png 180w" sizes="(max-width: 60px) 100vw, 60px" alt="" />

                            <img style={{ position: "relative", left: "60px", top: "-10px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=100&amp;name=bubble-chrome.png" width="60" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=50&amp;name=bubble-chrome.png 50w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=100&amp;name=bubble-chrome.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=150&amp;name=bubble-chrome.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=200&amp;name=bubble-chrome.png 200w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=250&amp;name=bubble-chrome.png 250w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-chrome.png?width=300&amp;name=bubble-chrome.png 300w" sizes="(max-width: 100px) 100vw, 100px" alt="" />

                            <img style={{ position: "relative", left: "90px", top: "-30px" }} src="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=100&amp;name=bubble-google-calendar.png" width="80" srcset="//f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=50&amp;name=bubble-google-calendar.png 50w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=100&amp;name=bubble-google-calendar.png 100w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=150&amp;name=bubble-google-calendar.png 150w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=200&amp;name=bubble-google-calendar.png 200w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=250&amp;name=bubble-google-calendar.png 250w, //f.hubspotusercontent10.net/hub/19495563/hubfs/raw_assets/public/getharvest-theme/images/integrations/bubble-google-calendar.png?width=300&amp;name=bubble-google-calendar.png 300w" sizes="(max-width: 100px) 100vw, 100px" alt="" />

                        </div>

                    </div>
                </div>

            </div>
            <div className={style.content}>
                <div className={style.conatiner}>

                    <div className={style.content_left}>
                        <i class="fas fa-search"></i><br />
                        <input type="text" placeholder="Search" />
                        <button onClick={() => {
                            setselect("All Integrations")
                            setIntegrationState(true)
                        }}> All Integrations</button>
                        <button onClick={() => {
                            setselect("Featured_Integrations")
                            setIntegrationState(false)
                        }}> Featured Integrations</button>
                        <button onClick={() => {
                            setselect("Analytics & Reporting")
                            setIntegrationState(false)
                        }}> Analytics Reporting</button>
                        <button onClick={() => {
                            setselect("Browser Extensions")
                            setIntegrationState(false)
                        }}> Browser Extensions</button>
                        <button onClick={() => {
                            setselect("Communication & CRM")
                            setIntegrationState(false)
                        }}> Communication CRM</button>
                        <button onClick={() => {
                            setselect("Contracts & Proposals")
                            setIntegrationState(false)
                        }}> Contracts Proposals</button>
                        <button onClick={() => {
                            setselect("Development & Connectivity")
                            setIntegrationState(false)
                        }}> Development & Connectivity</button>
                        <button onClick={() => {
                            setselect("Finance & Payments")
                            setIntegrationState(false)
                        }}> Finance & Payments</button>
                        <button onClick={() => {
                            setselect("Issue Tracking & Support")
                            setIntegrationState(false)
                        }}> Issue Tracking & Support</button>
                        <button onClick={() => {
                            setselect("Productivity")
                            setIntegrationState(false)
                        }}> Productivity</button>
                        <button onClick={() => {
                            setselect("Project Management")
                            setIntegrationState(false)
                        }}> Project Management</button>
                    </div>

                    <div className={style.content_right}>
                        <div>
                            {
                                allIntegration ?
                                    boxData.map(
                                        (box) => {
                                            return (DataRetriver(box))
                                        }
                                    ) :
                                    boxData.map(
                                        (box) => {
                                            return (
                                                box.topic === select ?
                                                    DataRetriver(box) : null
                                            )
                                        }
                                    )
                            }
                        </div>
                    </div>
                </div>
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
        </>
    )
}
export default Integration

function DataRetriver(box) {
    return (
        <div className={style.box}>
            <img className={style.box_img} src={box.imagePath} alt="" />
            <h2 className={style.box_heading}>{box.heading}</h2>
            <span className={style.box_desc}>{box.description}</span>
        </div>
    );
}