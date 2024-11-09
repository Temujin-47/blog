// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article = () => {
    // Sample content for the article
    const articleContent = {
        title: "BAYERN MUNICH 2021/22 SEASON REVIEW | WHAT NEEDS TO CHANGE FOR 2022/23",
        paragraphs: [
            "Bayern started their 2021/22 season very well under new manager Julian Nagelsmann. The season looked very promising as they looked confident and passionate. The first half of the season was extremely good as Bayern lost just twice in the Bundesliga and both were marginal 2-1 victories for Frankfurt and Augsburg. However, Bayern crashed out with a devastating 5-0 thrashing at the hands of Monchengladbach in the 2nd Round of DFB Pokal. Still, Bayern looked dominant as they boasted of victories against competitors Dortmund, Leipzig and Leverkusen. At the end of 2021, Bayern had a comfortable lead over 2nd placed Leverkusen and was unbeaten in the UEFA Champions League Group Stage. ",
            "However, things changed course since the start of 2022. With long term injuries to Leon Goretzka and Alphonso Davies, shaky transfers Dayot Upamecano and Marcel Sabitzer and unused academy prospects, Bayern lacked lustre. The 2nd half of the Bundesliga started with a 2-1 loss to Monchengladbach and a 4-2 loss against Bochum soon after. Bayern beat Salzburg 8-2 on aggregate in the UCL Round of 16 and drew Villarreal in the Quarter-finals. What seemed to be an easy bout turned out to be Bayern’s demise in this year’s UCL campaign as Bayern crashed out with a shock 1-2 aggregate loss to Villarreal. Bayern won the Bundesliga with a comfortable 8 point lead over 2nd placed Dortmund but lost once and drew twice in their last 3 Bundesliga matches, thus finishing with the lowest points in the last 10 seasons. Let’s have a look at Nagelsmann’s tactical changes, transfers and changes needed at the club in the next season",
            "Tactical Changes",
            "Nagelsmann kept Bayern dominant with the 4-2-3-1 formation as implemented by predecessor Hansi Flick. Nagelsmann 4-2-3-1 was more attacking with Davies overlapping and occupying the left flank and Leroy Sane shifting central to occupy the left half-space. Thomas Muller’s role was a little hampered as he had to occupy the right-half space as Kingsley Coman/Serge Gnabry maintained width. However, the roles interchanged with time as Muller often shifted wide to maintain width and Gnabry/Coman cut in. This was supported by late runs by Goretzka. The back 3 of Lucas Hernandez, Dayot Upamecano and Benjamin Pavard during build-up was quite efficient at progressing the ball and Pavard generally joined the midfield during build-up. The pressing system was also effective. Bayern won many balls high up the pitch and initiated quick counters.",
            "Things however changed with Goretzka and Davies injured. Nagelsmann had to shift to a 3 man back to make the system stable. Things however crumbled with Corentin Tolisso getting injured and Omar Richards not being a good enough backup for Davies. Sabitzer couldn’t really break into the team and also failed to re-enact his Leipzig form from last season. Sabitzer, Coman, Sane and Gnabry were all tried as wing-backs and results were unsatisfactory. The defensive line was quite shaky from the start of the season with Upamecano failing to adapt to a 4 man back. Shifting to a 3 man back didn’t really help him and his inconsistent performances continued until the end of the season. The pressing system and attacking system almost remained intact but the players were played out of position due to lack of squad depth and quality backup. The shaky defence got exposed due to the lack of natural wing-backs. Hernandez and Pavard were solid in the back 3 but Upamecano wasn’t upto the expectations.",
            "Nagelsmann was expected to use the youth academy as he is synonymous with youth development. But youth prospects like Paul Wanner, Malik Tillman and Torben Rhein weren’t given enough time. Tanguy Nianzou also received limited game time.",
            "Future:",
            "Bayern are currently dealing with 2 huge blows. Bavarian icon Robert Lewandowski is currently leaning towards leaving Bayern and joining Barcelona. He reportedly wants to leave this summer despite his contract running till 2023. World class winger Serge Gnabry has also rejected a contract extension and Bayern are open to selling him. His contract also runs till 2023. Keeping them at Munich would mean losing them both for free next summer. Niklas Sule is leaving Bayern for free this summer for rivals Dortmund. With Alaba, Boateng, Javi Martinez and now Sule, Bayern would surely try to avoid such situations. ",
            "But, Bayern has also added some new faces. They signed Noussair Mazraoui from Ajax on a free transfer. Mazraoui provides the solution to the right back problem since Pavard wasn’t really a right back or a right wing back. Nagelsmann would be free to try out flexible formations from now on. Ryan Gravenberch is also Bayern-bound. He has completed his medicals and is reportedly joining Bayern for around 25m euros. Quite a bargain buy it has been. He also provides the much needed quality squad depth in the midfield. With Tolisso leaving for free and Marc Roca also on his way out, Gravenberch and Sabitzer would be the midfield backups. Nagelsmann has been chasing Konrad Laimer for quite some time now. He is a Bayern transfer target. It would be tough to complete as Leipzig aren’t really willing to deal with rivals.  ",

            "The blockbuster deal that Bayern is chasing currently is Sadio Mane. Mane has stated he would not be renewing with Liverpool. Bayern has been heavily linked to Mane. Mane has operated centrally for Liverpool in the 2nd half of the season and has been very effective. He is great at switching positions and possesses great finishing. Nagelsmann can opt for a False 9 system as per reports and Mane can be an excellent acquisition for the purpose. Bayern are also interested in Sasa Kalajdzic. However, dealing with Stuttgart over the forward can be troublesome, especially with so many clubs interested in the Austrian striker."
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/284799678_338780171734516_4276411060172766833_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ACmWi0ZK4ZAQ7kNvgGrEHvH&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A-JG3BNeVHXmX0zkoeOD-33&oh=00_AYCBTzpBxcIVZYrju5pnuhs7aF9yTC_NNAZSa48VT1SRJg&oe=6734E8BA",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/284597823_338780201734513_3404108344125107935_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Fjvzw2wky4Q7kNvgGLB9ks&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AmYgdAXFKM0G6cIRBitBcjE&oh=00_AYBmYpoZPQuyo75jtm2o6dJH2gXNU8r-Ms-Bk4_7ddpCzg&oe=6734C446",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/285991030_338780231734510_8146182434312736707_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jGsxjxwBPgcQ7kNvgGf5374&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ALRwUcIfHsBcKLm-lQSGyD-&oh=00_AYBgWGBOiWAEQEicimKY3slZuJ1m3VdtsYOqWm-sHk2Zwg&oe=6734F38F",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/286674102_338780271734506_1615111481650143213_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gP7obh0jGiUQ7kNvgHQcTte&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AAg8U3bGixkN1sNGdFHrLor&oh=00_AYDlVBdctTBnfyaogzz1DotPYx_agphUi4VrjhaJ4WTvIA&oe=6734E49D"


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
