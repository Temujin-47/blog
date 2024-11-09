// src/components/Article.js
import React from 'react';
import './Article1.css'; // Import the CSS file

const Article = () => {
    // Sample content for the article
    const articleContent = {
        title: "Pep's Systems for 2021/22 Analysed | Man City's Season Review and what to expect from 2022/23?",
        paragraphs: [
            "Man City successfully defended the Premier League title with a 1 point lead over rivals Liverpool giving us another taste of the 2019 Premier League title race. It was as close as it gets and City came out on top once again showcasing the world why they remain Champions. Here's our review of their 2021/22 season and a brief preview of what's to come.",
            "Pep's systems:",
            "Its probably the hardest job in the planet to dissect the details of a Pep Guardiola side throughout the season. However this season Pep has limited himself to just a few variations with a common system in place. The system involving inverted fullbacks is still extremely effective and Joao Cancelo's season is just the perfect answer. ",
            "The Midfielders were always given the freedom to move up and exploit the halfspaces while it was generally the role of the wingers to stay wide. This was extremely effective when Foden hugged the touchline down the left channel while Mahrez streched the right. The roles of the wingers were different however. Foden loved taking runs behind the fullbacks while Mahrez kept cutting inside with his strong foot. With Walker ever present down the right channel, overlaps and quick defensive trackbacks weren't much of a problem for Guardiola's side. This along with the advancing Midfielder and the No 9( Bernado or Jesus mostly) created an overload down that channel. On the other flank Cancelo joined the midfield allowing the Midfielder to advance further forward. He supported Foden regularly and runs inside the box wasn't a rare sight like the seasons before. ",
            "This brings us to the attacking midfielders and the striker in Pep's system. When Bernado Silva operated as the forward, he mostly dropped back to towards the right channel allowing De Bruyne to often take the central space. On other occasions we often found the left winger moving centrally during this phase. When Jesus played however, he remained in the central channel more often providing an extra passing lane between the lines. His objective was often to scan for halfspaces in the last line and to often drop and create this space for the midfielders to run onto. He was very effective in this role and his performance in the later half of the season proves the success of this system.",
            "Erling Haaland and the New System:",
            "Man City have secured the services of Erling Haaland for next season by activating his release clause. This means a striker system in the following season from a side that has been very effective without one. ",
            "Haalnd's addition to the side has many pros and cons. We expect goals but the number might vary as everything will surely not go through the central channel. Haalnd's addition adds a target in the centre which can open up halfspaces for the midfielders. It also provides an extra man ever present in the zone for crosses. ",
            "We have to wait and see how he adjusts to the various intricacies in the Guardiola system, especially his positioning and touch play in challenging situations. He also needs to be effective while pressing forward alongside De Bruyne in their expected 4-4-2 off the ball system. and touch play in challenging situations. He also needs to be effective while pressing forward alongside De Bruyne in their expected 4-4-2 off the ball system.",
            "Conclusion:",
            "The primary objective of every English side is to win the Premier League title. That labels success. But still the question remains for Man City whether it was a successful season. They've been brilliant throughout and winning the league against Liverpool is no small task. But Champions League glory is yet to be achieved for the Citizens and that's surely gonna be their objective next season"
        ],
        images: [
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/286105776_342708164675050_2837825368541475260_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dFo9HBOIa6IQ7kNvgGTxjWv&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ANt9jgVRLXCg-5K8S5CFZEt&oh=00_AYCOkLN0ATE-Z98AlvCpXAo2sGWYCybEwltVsB6I-3UiRw&oe=6734DE1C",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/286197481_342708198008380_1159303597402691998_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bhF1rKFfApsQ7kNvgHOXPYA&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=AshN75oD3n-h2vQ9gkVMa34&oh=00_AYBkuobYY5vvu9LENDPVNS5rtPVD0gSoD1Kab76CRbDHhA&oe=6734D30B",
            "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/286375345_342708371341696_4640122367382485616_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L3MKkcAFALQQ7kNvgEkMlB7&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=Avq8Pptk56dE9ecEg7GOue9&oh=00_AYCeOnfoiMof0r75G6uLXOsvwcGy3qYkbUeY1Vfoh2GXOg&oe=6734EF10",


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
