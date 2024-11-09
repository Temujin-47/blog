// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article3 = () => {
    // Sample content for the article
    const articleContent = {
        title: "SADIO MANE : Bayern Munich looks lonely. Can Mane fix them?",
        paragraphs: [
            "Bayern was in a state of turmoil for some weeks with the rumours surrounding the departure of their talisman Robert Lewandowski. Lewandowski has expressed his desire to leave the club but club officials Oliver Kahn and Hasan Salihamidzic are confident of keeping him. This would mean Lewandowski leaving for free next summer but it looks Bayern are willing to let that happen. Also, contract negotiations for Serge Gnabry, whose contract ends in 2023 as well, is stalled. With these major issues at hand, Bayern has actively found solutions. ",
            "Bayern signed Noussair Mazraoui on a free transfer which fixes the right back problem for Bayern. They also added talented young midfielder Ryan Gravenberch to strengthen their midfield and increase depth. The blockbuster transfer Bayern made is that of the Senegalese star Sadio Mane from Liverpool for a reported €32m with add-ons upto €41m. Club officials, Julian Nagelsmann and the fans are overwhelmed at the arrival of the star who has been amongst the top players of Premier League. Mane is capable of playing on both the flanks and even centrally. He has been utilised as a central forward since the second half of the last season and he was excellent during that time. Let us have a look at how Mane will fit in at Bayern.",
            "WIDE ROLE:",
            "Mane has been a left winger for most of his time at Liverpool. He has been phenomenal throughout his time as a left winger in the role of an inside forward. Due to his role, his crossing stats are not much impressive. He is a decent crosser but generally cuts in, so that the left back can go for overlaps. This actually works pretty well for Bayern as Bayern has Alphonso Davies as their left back. Davies is excellent at maintaining width and Mane and Davies can form a formidable duo in the left flank. Mane can sometimes operates on the right flank during switches.",
            "Bayern already has Leroy Sane, Kingsley Coman and Gnabry in the flanks. If Gnabry leaves, it makes sense to use Mane as a winger. Otherwise, it would be forcing Sane or Gnabry into a central role. Sane has operated well as a creative attacking midfielder and Gnabry can fit into the role of a central forward. However, we think that Mane would probably be used in a better role due to the idea that Nagelsmann is open to using a False Nine system.",
            "CENTRAL ROLE:",
            "Nagelsmann is known for experimenting formations and tactics. He has used 4-2-3-1 and     3-4-2-1 during the last season. With Mane at his disposal, he may opt for a False Nine system. With Sane and Gnabry at the flanks, Mane would be used as a False Nine. Mane would thus occupy the opposition DM and one of the CBs opening up a lot of space for either Muller or Sane. Also, his ability to switch and move to the flanks would be highly effective for Bayern. Sane and Gnabry both has experiences in central roles and thus, switching would be fluid. The other important aspect of Mane being used as a centre forward is his ability to initiate the press. He has been part of Klopp’s system and both Nagelsmann and Klopp emphasises on the use of press from the initial stages of the opposition’s build-up.",
            "Mane may not be as clinical as Lewandowski but Mane adds flexibility to the system. He is not really fixed to the central role and his pace is certainly gonna be a problem for opponents.",
            "Conclusion:",
            "Mane’s role depends on the departure of Lewandowski. If Lewandowski fails to secure a move to Barcelona, Bayern would be operating with him as the striker and Mane in the flanks. If Lewandowski leaves, Mane would be operating centrally. Whether he would be operating as a traditional 9 or a False 9 depends on how Nagelsmann plans to build the team the next season."
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/290021388_354016013544265_5119426953591013921_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R60L7QAYnuoQ7kNvgEOL6Vs&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=A1uX2AevzwiM2s_OfSehXAC&oh=00_AYCnCND7VafIUHDI99YLaxXU4SfbZWdajBmx8BGGZr9Bvg&oe=67344A82",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/290129665_354016060210927_5577037528842731507_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7aK9cpifi-cQ7kNvgHNxeaN&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ADJgcLaOGnLT3DHgRxwUQmx&oh=00_AYDIqRjGceyhktDO44tJn4YC9zFx1fqx38UTjXm_jdt-jA&oe=67345323",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/289896710_354016583544208_5496655697573097832_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z6qN7DZvikoQ7kNvgF-6hYe&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AAsia-AITXo5wPOk8-iWG6c&oh=00_AYAynrp6TvOb6RoF-1DYReiZMu8IN0_cxbImhZ6UtRkwgQ&oe=67344DC5",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/289368721_354016613544205_6535347260923440264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=srV0Oo2MpaQQ7kNvgGJmXvf&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AHfU-4zU_MYhwBUsni65BIv&oh=00_AYACWg1vAPxURAGkduMrNj98ANjuNIUlf22DgeFLor6nEg&oe=67346CAB",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/289817876_354016640210869_4159938517309715774_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dhdaWsZpJqMQ7kNvgG4pkXa&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=Am6zpPG2J4jhyTGl69o53r5&oh=00_AYDAuqOnfOuX7Isx-_BQtThWb4DJiLrVaZD9Z4oP1SUHZQ&oe=67346183",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/289489246_354016653544201_6813461628535703827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4qi3-Ox0MZEQ7kNvgGoOUCI&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ASFUlkPh_D1clVbNQRFUqN4&oh=00_AYDRJbepsdanguoqRhWIGExUFBioGgqNe3EtgFfzne4AfA&oe=67346C00"

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

export default Article3;
