// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article1 = () => {
    // Sample content for the article
    const articleContent = {
        title: "Liverpool Vs Man City (1-0) Tactical Analysis",
        paragraphs: [
            "After their worst start to a season under Jurgen Klopp, Liverpool went into this fixture as the underdogs even at Anfield. However they managed to get all 3 points against the champions and kept their 2nd clean sheet of the season. Let's take a closer look at the tactics involved.",
            "Pep's Tactical Change:",
            "Even though Man City lined up with their usual 4-3-3 formation, Pep Guardiola had a whole new system planned for this game. Nathan Ake stayed deep to form the back 3.Rodri and Bernado formed a double pivot to help out in the build up phase. De Bruyne and Gündogan operated in the halfspaces while Foden and Cancelo maintained width with Haaland leading the line.  Thus the formation for City was ultimately 3-4-3.",
            "Cancelo who generally tucks inside to play a central role had to operate in a very different role. Off the ball, he was supposed to press Robertson and on the ball he was tasked to go around Robertson. His role was to create an overload in the wider areas and look for pockets of space behind the Liverpool fullback.",
            "The Press:",
            "The 3-4-3 shape was maintained while pressing forward and it was often very successful limiting Liverpool at their half. Gündogan joined Haaland and De Bruyne to lead the line and their task was to create a 3V3 situation against Gomez, Van Dijk and Fabinho. Rodri kept a close eye on Thaigo and was infact playing a lot higher to close down spaces for Thiago. Foden stayed with Milner while Cancelo had full freedom to press Robertson. Akanji played 1V1 against Jota with Ake and Dias on Salah and Firmino.",
            "These tactical changes made some notable differences for City, especially in the first half. City managed to create overloads in various ends of the pitch, mostly with Cancelo and De Bruyne down the right flank. In some occasions, Gündogan also found space as Harvey Elliott had moved towards the right channel.",
            "Liverpool's defence was also very organised in this game. Milner maintained his position throughout and did a splendid job of containing Foden. Gomez and Van Dijk had a pretty solid game against Haaland and Robertson did a reasonable job with the help of Jota down the flank.",
            "Liverpool's defensive system:",
            "Liverpool started in their usual 4-3-3 formation on paper but adjusted quickly with City's tactical tweek. Off the ball, Salah operated centrally and Firmino acted like the No10. He either stayed deeper with Rodri or moved out to press Ake cutting out a passing lane towards the centre. Harvey Elliott was given the task to press Bernado Silva when he was wide, or to maintain a solid shape in the centre cutting out the passing lane towards Gündogan.",
            "Liverpool did a very good job of containing City with their midblock. The midfield focused on the ball side and the wingers of the far side were tasked to track back to cover the flanks for long switches. This was essentially how Liverpool operated down the right flank. Whenever the ball was down at that end, Harvey Elliott was tasked to move wide. Fabinho shifted to cover Gündogan while Thiago took Fabinho's role. ",

            "Conclusion:",
            "Pep's tactical changes created overloads on various occasions but City failed to capitalise. The initial double pivot with Bernado in a deeper role also wasn't the right way to go and Pep switched it eventually dropping Gündogan deeper instead. Liverpool were quick on the break and created major chances with crosses in the centre. Ultimately a solid defensive performance and quick counters led to a much needed win for the Reds at Anfield."
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311944445_415850030713036_480710248455723008_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TfrHqxhJxrAQ7kNvgEWJUwJ&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=APTQc9IAQa4YDw0WQOCT4XN&oh=00_AYBKVbTdvAeSNsiZP0Oyk0cYsoJQ-RKavuN4HRkO2QQm0Q&oe=67341AF5",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311879369_415850064046366_294653205246295823_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fi6hfu9VqpwQ7kNvgFu7UYZ&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AcxQVlZiqq6U7mPNeWbDi6D&oh=00_AYC2rRhnDn_0cEAujn_E4CPBk7p7RJVrLFhhUZmK1E_EXQ&oe=6734310F",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/312179127_415850120713027_7438180154250477603_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9U9L5YotTVYQ7kNvgH0B2IP&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AJTyY5ebSWOfM-nQBECOU_n&oh=00_AYB-Sp5XDi6LiOZ-BZp1KggEfyXqPXUCrKAjd28NLVKoPg&oe=67341531",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/312104499_415850150713024_8622309981993053166_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B7TTGpliYAsQ7kNvgFYgxyd&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ApRma1gNJzqaz7MUKzc5foB&oh=00_AYACJ8JzKkNIPm-w8R7f-wnjC5RreCffoLazpDD2tVgKHQ&oe=673414AA",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311883135_415850444046328_7374937958854404450_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VaIFxSwmbKYQ7kNvgHv0_dy&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AD8pCmqOnz-SCSkPM1fl9dq&oh=00_AYDTaQuxRa7B8WxipC0qUHuyUvBHr0QQPJjeQr4n1QikuA&oe=673434C2",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311944445_415850030713036_480710248455723008_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TfrHqxhJxrAQ7kNvgEWJUwJ&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=APTQc9IAQa4YDw0WQOCT4XN&oh=00_AYBKVbTdvAeSNsiZP0Oyk0cYsoJQ-RKavuN4HRkO2QQm0Q&oe=67341AF5",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/312058333_415850410712998_8513464508422475536_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=f3S7G_86_HEQ7kNvgEzBHfy&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AExH5LMhFbyazYcPBXQUE6I&oh=00_AYBoZJ8C_Kv_SmWhOO0J1eA-uB_dxNYKQJhlfukrndP7wg&oe=673441A9",

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

            {/* Remaining Images */}
            <div className="article-images">
                {articleContent.images.slice(2).map((imageSrc, index) => (
                    <img key={`add-img-${index}`} src={imageSrc} alt="Nature" />
                ))}
            </div>
            {/* Additional Paragraphs */}
            {articleContent.paragraphs.slice(7).map((paragraph, index) => (
                <p key={`add-para-${index}`}>{paragraph}</p>
            ))}
        </div>
    );
};

export default Article1;
