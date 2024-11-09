import React, { useState } from 'react'
import "./Home.css"
import Articles from "./Articles"

function Home() {

    return (
        <div className='home dark'>
            <div className='home_container'>

                <div className='home_row'>
                    <div className='pro'>
                        <Articles
                            id="12321341"
                            title="Darwin Nunez and Liverpool's New Look Attacking System | Liverpool 2022/23 Possible Formations and Systems"
                            img="https://a.espncdn.com/media/motion/ESPNi/2022/0714/int_220714_COM_SOC_Analysis_Why_early_criticism_of_Darwin_Nunez_is_ridiculous_20220714_GLOBAL/int_220714_COM_SOC_Analysis_Why_early_criticism_of_Darwin_Nunez_is_ridiculous_20220714_GLOBAL.jpg"
                        />
                    </div>

                    <div className='pro'>
                        <Articles
                            id="49538094"
                            title="SADIO MANE : Bayern Munich looks lonely. Can Mane fix them?"
                            img="https://cdn.vox-cdn.com/thumbor/bOP1KxfD5wYbdzPnoTOyK5MrBUg=/0x0:6000x4000/1200x800/filters:focal(2299x1514:3259x2474)/cdn.vox-cdn.com/uploads/chorus_image/image/71018142/1404718190.0.jpg"
                        />
                    </div>

                </div>

                <div className="home_row">
                    <div className='pro'>
                        <Articles
                            id="4903850"
                            title="From Near Perfection to Tragedy | Liverpool's 2021/22 Season Review"
                            img="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/uefa-champions-league-real-madrid-v-liverpool-fc-5bf019979fccba12bb000001.jpg"
                        />
                    </div>

                    <div className='pro'>
                        <Articles
                            id="23445930"
                            title="Pep's Systems for 2021/22 Analysed | Man City's Season Review and what to expect from 2022/23?"
                            img="https://i.dailymail.co.uk/1s/2022/06/18/09/59223531-10929489-image-a-1_1655540729943.jpg"
                        />
                    </div>

                    <div className='pro'>
                        <Articles
                            id="3254354345"
                            title="BAYERN MUNICH 2021/22 SEASON REVIEW | WHAT NEEDS TO CHANGE FOR 2022/23"
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCMyRKKRVYhrE6VTtSARvmEfvuki1iTbDb1Ld0n5hqV57EigTwSuoaJdVu6MqBX-JAJc&usqp=CAU"
                        />
                    </div>

                </div>

                <div className="home_row">
                    <div className='pro'>
                        <Articles
                            id="90829332"
                            title="REAL MADRID VS MANCHESTER CITY TACTICAL ANALYSIS:"
                            img="https://www.facebook.com/photo/?fbid=317347103877823&set=pcb.317347233877810"
                        />
                    </div>
                    <div className='pro'>
                        <Articles
                            id="679625312"
                            title="REAL MADRID VS CITY: UCL SEMI-FINAL 1ST LEG"
                            img="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/279116460_312021331077067_7717254758171225632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=twmA8m_ueacAX_IGlQf&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8BerXM7cib5odRrRO4C59QuBphFlFMU_aEYM-pvJIePg&oe=62D79EEC"
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;

