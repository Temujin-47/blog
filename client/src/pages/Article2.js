// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article = () => {
    // Sample content for the article
    const articleContent = {
        title: "Darwin Nunez and Liverpool's New Look Attacking System | Liverpool 2022/23 Possible Formations and Systems",
        paragraphs: [
            "Liverpool are surely looking to fight at all ends once again after their tragic loss last season. With the arrival of Darwin Nunez and Fabio Carvalho, the attacking system has strengthened. However Mane's loss is going to be hard and Jurgen Klopp needs to find an appropriate system to incorporate the new players in the team. In this article we take a look at the potential setups for next season. ",
            "4-2-3-1 ( The obvious choice):",
            "Everyone expects Jurgen Klopp to return to a 4-2-3-1 formation after the arrival of Darwin Nunez. Nunez can operate as a the striker with Bobby Firmino operating as the No 10. Diaz and Salah can start in the flanks with Thiago and Fabinho potentially forming the double pivot. ",
            "There are many factors to consider in this system however. Firstly this system won't work out as a traditional 4-2-3-1 where the wingers mostly stay wide and control the flank. We expect Salah to be active centrally and he will always look to cut in and operate in the halfspaces. This leaves the right flank open for the likes of Alexander Arnold to push up and dictate play. This has happened on several occasions before but Klopp has moved past that system due to various constraints.",
            "Arnold moving up down the line leaves a lot of space behind and he is never in time to return and cover the opposition winger. As a result it leaves Fabinho and Matip to cover the ground and it's sometimes a little too much for the Brazilian midfielder to cover the entire central block.",
            "This is actually why Trent was given a more central role in the past few seasons with Henderson and Elliott moving wide to support Salah. However this cannot happen in a 4-2-3-1 formation as we don't expect Firmino (the obvious No 10. choice)  to move wide and strech the pitch.",
            "This brings us to our predicted system with Thiago operating as the RCM instead of the LCM. This hasn't really happened much with Henderson mostly occupying that side of the pitch and Thiago enjoying his time on the other flank. However switching Thiago makes a lot of sense in the 4-2-3-1 formation.",
            "Firstly if Thiago is present as the RCM, Arnold can have more freedom to progress  down the flank. With Thiago present as RCM, there is always added defensive support in the right channel. Thiago is well equipped to support his team from a deeper role and with Firmino present centrally it can lead to a very interesting midfield setup.",
            "Secondly and most importantly, this switch can help Andy Robertson in the attacking system. Andy Robertson had enjoyed an excellent first half last season but things changed after the arrival of Luis Diaz. While everyone was focused on what Diaz brought to the attacking system, nobody understood why Robertson suddenly failed to make a mark anymore. He had a very poor run of form since February and as a result  the assists dried up from the left flank. Let's take a closer look at what really happened.",
            "With the arrival of Diaz, Mane switched to a CF role. As he is actually a Lw, Mane always had a tendency to shift towards the left halfspaces more. Diaz was always present down the flank and was often advised to stretch the pitch and make runs behind the fullback. Added to that Thiago was present as LCM and he controlled that part of the pitch single-handedly.This left Robertson with very little options upfront. The left channel was filled with players and Robertson's runs created occasion overloads. It didn't lead to much attacking progress as there wasn't any more attacking possibility down the left channel. Robertson basically had nowhere to go except supporting Diaz from a deeper role and moving up occassionally.",
            "One might argue that it increased defensive stability but Robertson was actually out of his natural playing style. The unforced error in the Champions League Final which lead to the loss of possession and eventually the goal started from Robertson. We don't see these mistakes much from Robertson and his discomfort in a deeper role might be one of the reasons.",
            "With Thiago moving to the right channel things can change for Robertson. We expect Fabinho to be present centrally instead of a wide double pivot and this leaves the left midfield channel for Robertson. As Diaz is expected to maintain width, Robertson can tuck in the central channel and play as an inverted fullback. Robertson is also good at making underlapping runs and getting inside the box and this system can help out. We don't expect a defensive concern due to this as Robertson is closer to the defence if he plays as an inverted fullback. Moreover with Fabinho ever present centrally Van Dijk can step out for cover. ",
            "Overall this system looks very promising on paper. With Liverpool not signing another midfielder it's more likely that a 4-2-3-1 formation is the way forward for Jurgen Klopp. Moreover we have to mention that Fabio Carvalho fits in this system perfectly whenever Firmino needs rest. He has operated in that position for Fulham and the transition is expected to be easier if it's the exact same role. ",
            "Conclusion:",
            "There are many things to consider before concluding what's the best system for Liverpool. Preseason is vital for Jurgen Klopp and his team as he will look to experiment the different roles and see what works. We expect both the 4-2-3-1 and the 4-3-3 system to be used regularly next season. It's a matter of what suits the new players and what brings out the best from the existing players that'll decide which is used more often."
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/291570180_357951493150717_328900127650166079_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NM_JW3MhEu4Q7kNvgHufoFg&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A9OB6v-Ie9AIVH6GxRJ8Tnp&oh=00_AYBL9mh4UV3LUMc3HaiRFutILURv9a6hu_7SEACT1oo14Q&oe=67342EA9",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/291622206_357951543150712_5383912719583922561_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9E1nZSy8UawQ7kNvgEt71ZN&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AIqIFKK_ohLMMyKgR7x4rpq&oh=00_AYB8QpGqIQ4apBr0P_K94_HhVZVIRQtSvN2jsixgce9FeA&oe=67344F46",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/291174430_357951613150705_198954525850848812_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a2OogBbVN48Q7kNvgF7TowI&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AHOb5oiMI0dpt5kgSWgbl_B&oh=00_AYCuYVICEvW4Jx3XwrhAFtdik_M5s39LdIp2KCFYktEkqA&oe=673474D7",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/291146076_357951646484035_1586672351384184531_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VC-84neSG8AQ7kNvgFROA5y&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A3tzUWNBl5D2mOjtmWGwaVI&oh=00_AYByP76TeN0Utju9YYm1i_aYZxOjFh1-rhqAZWqytLB8fg&oe=6734464C",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/291034126_357952056483994_8607033481656312064_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ScM0pG9F6lMQ7kNvgE2I9wk&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A0kcGuyFKdiF-KLYuOv0F-R&oh=00_AYDtRBWtHLauxqIy9MKZn8Vy8s1ujrV6geaRTcZsVevnow&oe=67345F38",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/290924610_357952119817321_6622149091737083446_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=In4P14ggRNIQ7kNvgHiNDRV&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A__qGiFNgqUi3Hmd9UUq8Ov&oh=00_AYBKFC8PoO4X-0SuZ2aty-iNwbKbD7gNLdnY8vXOeIDw_g&oe=6734651E"

        ],
        additionalParagraphs: [
            "Being close to nature is crucial for human beings. It allows us to step back from the hectic world, relax, and rejuvenate.",
            "Nature reminds us of the important balance in our lives and the need to protect our environment for future generations."
        ]
    };

    return (
        <div className="article">
            {/* Title */}
            <h1>{articleContent.title}</h1>

            {/* Initial Paragraphs */}
            {articleContent.paragraphs.slice(0, 4).map((paragraph, index) => (
                <p key={`para-${index}`}>{paragraph}</p>
            ))}

            {/* First Two Images */}
            <div className="article-images">
                {articleContent.images.slice(0, 2).map((imageSrc, index) => (
                    <img key={`img-${index}`} src={imageSrc} alt="Football" />
                ))}
            </div>

            {/* Additional Paragraphs */}
            {articleContent.paragraphs.slice(4, 7).map((paragraph, index) => (
                <p key={`add-para-${index}`}>{paragraph}</p>
            ))}

            <div className="article-images">
                {articleContent.images.slice(2, 4).map((imageSrc, index) => (
                    <img key={`add-img-${index}`} src={imageSrc} alt="Nature" />
                ))}
            </div>
            {articleContent.paragraphs.slice(7, 10).map((paragraph, index) => (
                <p key={`add-para-${index}`}>{paragraph}</p>
            ))}
            {/* Remaining Images */}
            <div className="article-images">
                {articleContent.images.slice(4).map((imageSrc, index) => (
                    <img key={`add-img-${index}`} src={imageSrc} alt="Nature" />
                ))}
            </div>
            {/* Additional Paragraphs */}
            {articleContent.paragraphs.slice(10).map((paragraph, index) => (
                <p key={`add-para-${index}`}>{paragraph}</p>
            ))}
        </div>
    );
};

export default Article;
