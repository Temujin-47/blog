// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article = () => {
    // Sample content for the article
    const articleContent = {
        title: "From Near Perfection to Tragedy | Liverpool's 2021/22 Season Review",
        paragraphs: [
            "Liverpool came the furthest to potentially win the quadruple this season. However it was a heart breaking end to the season as City clinched the title with 1 extra point and Real Madrid beat them 1-0 in the Champions League final. The Reds finish with just 2 trophies as a near perfect season comes to a tragic end. Here's our review of the 2021/22 Season for Liverpool.",
            "2 Draws hurt more than 1 defeat:",
            "The points tally sums up to the number of draws by Liverpool. Looking back to these matches one can surely say that Brighton 2-2 and Brentford 3-3 could have been avoided easily. The 1-0 defeat at the King Power Stadium is also a night to forget.",
            "In these games the Reds failed to take advantage of many halfchances and gave away the lead too easily. At the King Power Stadium, they had an xG of 2.75 against Leicester's 0.75 and somehow they ended up losing 1-0. ",
            "It all sums up to missed chances in crucial circumstances. The Reds need to be more clinical to win the Premier League title against City, who are often much better in this regard.",
            "The System:",
            "Jurgen Klopp switched his system a couple of times throughout the course of the season. The attacking trio began with Mane Firmino Salah and made way for Jota Mane Salah and ended with Diaz Mane Salah. The players brought different personal to the system and it evolved throughout the course of the season.It wasn't just the attacking setup. The Midfield went through its regular changes. Harvey Elliott made a brilliant start to the season. He was deployed as the RCM and his drifted wider to support Salah. This allowed Alexander Arnold to  in midfield and have more space.",
            "Down the left channel Robertson's role varied according to the player in the left flank. When Mane started as Lw, he either kept dropping in the halfspaces or kept switching to central positions while Firmino dropped. This allowed Robertson more freedom to move up and he did quite well making runs around the opposition's defence. The case was somewhat similar when Jota started as Lw.",
            "However it was quite different when Diaz joined in January. He was given more freedom down the left flank and he often maintained width and streched the pitch. During this phase Robertson would generally support and make underlapping runs.",
            "Diaz was also very active in the central zone and often kept dropping in the halfspaces to open passing lanes. During this phase, Robertson was given the duty to stretch the pitch. Long ball switches were common between both fullbacks and it led to some brilliant opportunities inside the box this season.",
            "The attacking system improved significantly after the arrival of Luis Diaz. Mane was given a central role and he did a brilliant job playing as a CF. He scored in crucial games and his movements in the final third helped Diaz and Salah on a number of occasions. He often dropped deeper allowing Diaz to make runs behind and both of them kept switching constantly. ",
            "The Drawbacks:",
            "1. Salah's drop in form: Salah was at his best in the first half of the season. He seemed to score in every matchday and had a significant role in the attacking system.However after AFCON Salah's number were no match to the first half. While he scored 23 goals and provided 9 assists in 26 games in the first half, he since scored 9 goals and 7 assists in 27 games since AFCON. The numbers look more dim if we take into account the last 10-15 games of the season. A drop off in this crucial stage was a major blow for the Reds.",
            "2. Defensive Errors: This has been Liverpool's problem for far too long. A high line has its own advantages but it also has various drawbacks. The growing halfspaces between Matip/Konate and  Alexander Arnold was always a concern. This becomes more of a problem when Trent is given a more attacking duty and fails to drop back in time.  The high lines also adds up more pressure on Fabinho who has to cover too much ground if the press is broken through. LibggbtetHe has been brilliant throughout the season but at times he has received no support from his midfielders while facing a counter.  All this added with a few individual errors cost Liverpool another Champions League title.",
            "What to expect from 2022/23:",

            "Liverpool have completed the signing of Darwin Nunez for £64 million with add-ons leading upto £85 million, a transfer record for the Reds. This seems to be the answer for the Reds after a likely Mane departure to Bayern Munich. Fabio Carvalho has also joined the side and Calvin Ramsey is expected to be the third signing soon.",
            "Overall the question remains whether Nunez will live upto his remarkably high price tag and whether Salah will regain his form. Mane's absence will surely be felt in the central zone. Liverpool also need to strengthen their midfield and the likes of Harvey Elliott and Curtis Jones must step up this season."
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/287609737_345194064426460_5559237837471076762_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X9fbP5XUn58Q7kNvgF1qQvC&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AzL55q7Fa2hW7Pi-bJLAN9M&oh=00_AYCPf_EgoZqZp_YmhwAQWIrAFccI_bcTCeMhURTIxHinww&oe=673478D0",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/287879204_345194131093120_3105507101282265243_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w7qJObhE7k4Q7kNvgECMRcC&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AzvScywC8yT_1oLR_1kD8fm&oh=00_AYDIVIywIYdITx7nuNgBOa9QWNWKHNZdKg-qVPqw39BomQ&oe=67347A99",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/287505550_345194251093108_23481697505288340_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8gCMrqbX4usQ7kNvgEa7iYU&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ACkBJHaNkU4-OdyMNmKlgFk&oh=00_AYD5mdodUCHX3qULzMc5ljOv3BoSSgHCTdfxygSYNmI5QA&oe=67345B6A",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/288370302_345195111093022_3552864249208376667_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7y6E4scqK6EQ7kNvgHzZXYy&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AWnNP1RfadxgXd_VVi2hIeS&oh=00_AYADt64IvUyp0fNqbRTU_B5eL1KYq-OKp9fQRyx6ocM4Ag&oe=67346233",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/288161291_345193874426479_6292982522224941684_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w0DD6o-z-ewQ7kNvgFEfkrL&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AXVwhdDoAnJJ_RxBAdOB6f5&oh=00_AYCA22HQu5SOXeUtZkuB_PC-YfQI9WRgZAQFkFK90tEj-A&oe=67345351",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/286933722_345195211093012_8010935305768531886_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KbX7dY5m3-UQ7kNvgE4nhG3&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=Au4vVLgZ2ooJLJ62YoYIx_U&oh=00_AYDZSYJu0Ld3QaXCWOVd5aI4GA3RBFrGUHpdHtpI4ArnNQ&oe=67346777",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/288336605_345193951093138_1342814238773924107_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2n_kZ8jjiaYQ7kNvgFmrP_r&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A4HDQAVfjzzYvmybOBEY4Qo&oh=00_AYDLf866QqbjM79yemINUMzxXcEL-3apIRvJTVWQGKZMSA&oe=67346CEC",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/287373600_345193987759801_7826370557432537587_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PlHiKKu26F0Q7kNvgHM_hD4&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AorNw5kVFKclh1f3-rdeuL1&oh=00_AYCBBUG-Pw0JTw8wzYbbSOWMCiqA4-MGcvKINtMAyD63Xg&oe=673471A7",


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
