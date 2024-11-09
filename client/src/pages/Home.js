import React, { useEffect, useState } from 'react';
import "./Home.css"
import Articles from "./Articles"
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/articles')
            .then((res) => setArticles(res.data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className='home dark'>
            <div className='home_container'>

                <div className='home_row'>
                    <div className='pro'>
                        <Link to="/Article1">
                            <Articles
                                id="49538094"
                                title="Liverpool Vs Man City (1-0) Tactical Analysis"
                                img="https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/312104499_415850150713024_8622309981993053166_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B7TTGpliYAsQ7kNvgFYgxyd&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ApYRpCEDXn2eFXEynsRqXV1&oh=00_AYAIgCC_lWH9TyXSS4sSQUlkzwnCyjsQTyHzlbBJWv7sYQ&oe=6733A42A"
                            />
                        </Link>
                    </div>

                    <div className='pro'>
                        <Link to="/Article2">
                            <Articles
                                id="12321341"
                                title="Darwin Nunez and Liverpool's New Look Attacking System | Liverpool 2022/23 Possible Formations and Systems"
                                img="https://a.espncdn.com/media/motion/ESPNi/2022/0714/int_220714_COM_SOC_Analysis_Why_early_criticism_of_Darwin_Nunez_is_ridiculous_20220714_GLOBAL/int_220714_COM_SOC_Analysis_Why_early_criticism_of_Darwin_Nunez_is_ridiculous_20220714_GLOBAL.jpg"
                            />
                        </Link>
                    </div>

                    <div className='pro'>
                        <Link to="/Article3">
                            <Articles
                                id="49538094"
                                title="SADIO MANE : Bayern Munich looks lonely. Can Mane fix them?"
                                img="https://cdn.vox-cdn.com/thumbor/bOP1KxfD5wYbdzPnoTOyK5MrBUg=/0x0:6000x4000/1200x800/filters:focal(2299x1514:3259x2474)/cdn.vox-cdn.com/uploads/chorus_image/image/71018142/1404718190.0.jpg"
                            />
                        </Link>
                    </div>



                </div>

                <div className="home_row">
                    <div className='pro'>
                        <Link to="/Article4">
                            <Articles
                                id="4903850"
                                title="From Near Perfection to Tragedy | Liverpool's 2021/22 Season Review"
                                img="https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/uefa-champions-league-real-madrid-v-liverpool-fc-5bf019979fccba12bb000001.jpg"
                            />
                        </Link>
                    </div>

                    <div className='pro'>
                        <Link to="/Article5">
                            <Articles
                                id="23445930"
                                title="Pep's Systems for 2021/22 Analysed | Man City's Season Review and what to expect from 2022/23?"
                                img="https://i.dailymail.co.uk/1s/2022/06/18/09/59223531-10929489-image-a-1_1655540729943.jpg"
                            />
                        </Link>
                    </div>

                    <div className='pro'>
                        <Link to="/Article6">
                            <Articles
                                id="3254354345"
                                title="BAYERN MUNICH 2021/22 SEASON REVIEW | WHAT NEEDS TO CHANGE FOR 2022/23"
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCMyRKKRVYhrE6VTtSARvmEfvuki1iTbDb1Ld0n5hqV57EigTwSuoaJdVu6MqBX-JAJc&usqp=CAU"
                            />
                        </Link>
                    </div>

                </div>


            </div>

        </div>
    )

    // return (
    //     <div>
    //         <h1>Articles</h1>
    //         <ul>
    //             {articles.map((article) => (
    //                 <li key={article._id}>
    //                     <Link to={`/articles/${article._id}`}>{article.title}</Link>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}

export default Home;

