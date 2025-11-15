interface Project {
    id: string;
    title: string;
    content: ContentItem[];
}

interface ContentItem {
    type: "text" | "image" | "subtitle";
    imageIdentifier?: string;
    textContent?: string;
}

export const projects: Project[] = [
    {
        id: "bayes-em",
        title: "BayesEM: A Mobile App For Disease Likelihood Computation",
        content: [
            {
                type: "image",
                imageIdentifier: "bayes-em-1.png"
            }, {
                type: "text",
                textContent: "Doctors in emergency rooms often have little time to give patients a methodical diagnosis based on their presenting symptoms. Yet, large-scale studies are constantly published that report statistics on disease diagnosis likelihoods based on various symptoms. If doctors could leverage these mountains of academic studies during their split-second critical ER decisions, they can make more quantitatively-driven decisions that can save patient lives."
            }, {
                type: "text",
                textContent: "To solve this issue, Dr. Babineau from the Dartmouth-Hitchcock Medical Center (DHMC) envisioned BayesEM: a mobile application that uses Bayesian inference to condense medical literature into a sidekick for doctors' diagnosis. Newer doctors learn from the app in tackling scenarios they have not seen before, and the app's goal is to improve clinical decision-making."
            }, {
                type: "text",
                textContent: "Dr. Babineau came to DALI Lab to hire a team who could design and develop BayesEM, and I was part of it from start to finish as a developer and development mentor. In this article, I detail how we made this app a reality and the lessons I learned from it for my career in software."
            }, {
                type: "subtitle",
                textContent: "Defining the project structure"
            }, {
                type: "text",
                textContent: "As designers started thinking on the app's features and drawing the first sketches, the dev team I lead had to prepare the dev environment by defining which tech stack to use: frontend, backend, database, deployment, and so on."
            }, {
                type: "text",
                textContent: "Since it was a mobile app, we agreed on DALI Lab's favorite frontend framework for this scenario: React Native. I had plenty of experience with this tool thanks to previous projects, so I would tackle most of the frontend code, assigning certain tasks to the other developers to help them build their skills as well, as they were not familiar with React Native. We ran into a lot of problems with Xcode and its phone simulators, so we decided to use Expo moving forward to test the app on our phones. We would worry about Xcode once the app was finished and we had to deploy it to TestFlight."
            }, {
                type: "text",
                textContent: "The backend was an interesting decision. I suggested going for a Node.js backend because it was a popular technology at the lab, but Pratim, one of the developers on the project, asked if we could instead do it on Flask, a Python backend framework. He was particularly excited about this approach and was skilled in it, so we agreed and pursued that route. For the database, we agreed on using MongoDB."
            }, {
                type: "text",
                textContent: "These are the most common Flexbox properties I use, but there are way more with different use cases. For instance, flex-wrap is used to make more rows of items if we run out of space, gap lets us add more space between items if justify-content is not enough, and things like flex-grow helps us define how much space each item should get."
            }, {
                type: "subtitle",
                textContent: "Mentoring around an unknown framework"
            }, {
                type: "text",
                textContent: "Now, unlike the other devs, I didn't have any experience using Flask. I knew Python, but now I had to be a dev mentor on a technology I haven't used before. Many would think that I would not be able to help on the backend at all, but this was not the case. I used my knowledge on building APIs with Node.js and my understanding of how frontend and backend interact to help the devs develop the API, and it was a rewarding experience."
            }, {
                type: "text",
                textContent: "As the team identified the features of the app such as displaying surveys of symptoms and creating patients, we defined the API routes the frontend would use to get stuff from the backend. As a mentor, I devoted time to explain what was needed for each route in a simple way. For instance, what body params were expected, and what answer should be returned for each scenario. There was plenty of back-and-forth communication between me and the developers, as we were working on the frontend and backend side respectively."
            }, {
                type: "text",
                textContent: "I remember us meeting at the lab to build and test API routes. I used Postman to test the routes they built, giving instant feedback. The image below is a screenshot of my Postman dashboard for the project."
            }, {
                type: "image",
                imageIdentifier: "bayes-em-2.png"
            }, {
                type: "text",
                textContent: "As we updated the features, this routine of developing and testing together was commonplace. I shared my frontend advances as well, so all developers knew what the others were working on."
            }, {
                type: "subtitle",
                textContent: "Building the frontend"
            }, {
                type: "text",
                textContent: "There is not much to say for this part. I employed my previous knowledge on React Native and pushed it forward. The team developed an initial Minimum Viable Product (MVP) after the first 10 weeks (Summer of 2022). Below are some screenshots on how the app looked back then."
            }, {
                type: "image",
                imageIdentifier: "bayes-em-3.png"
            }, {
                type: "text",
                textContent: "We would come back to the project in the Fall, expecting to polish the app in 10 more weeks and deploy it to TestFlight. During the whole process, I showcased the frontend progress to the team and the client, receiving feedback on how certain features could be improved upon."
            }, {
                type: "subtitle",
                textContent: "Communication with the client"
            }, {
                type: "text",
                textContent: "Dr. Babineau was a great client and partner for this project. He was passionate about how the app could help people working for DHMC and beyond. Thus, he attended weekly meetings with our team and was always available for any questions or concerns we had. It was common for us to get feedback on designs, and he was delighted to see out standups as the app was taking form."
            }, {
                type: "text",
                textContent: "As a developer, I made sure to ask the right questions so everyone knew how every feature worked and how to work around them. For example, I asked a lot of questions on how Bayesian inference was going to be used for the app, discussing the equations involved and how the user will use the app step by step. This helped us deliver a working product with a simple yet engaging UI."
            }, {
                type: "subtitle",
                textContent: "Final demo at Technigala"
            }, {
                type: "text",
                textContent: "Technigala is the seasonal showcase of DALI Lab projects so everyone at Dartmouth College can see it, including the clients. After 20 weeks of work, we presented our finalized product at Technigala and people loved it. Dr. Babineau was also there and he enjoyed using the app as he would do so for a real patient. It was a good time for everyone and the app didn't crash at all (I spent some long days at the lab doing some final testing to make sure of it)."
            }, {
                type: "text",
                textContent: "I like to talk about this project when asked about a meaningful work experience. This was not just me coding, but rather talking with multiple people, sharing ideas, figuring things out, and putting all the effort needed to make this a rewarding experience."
            }]
    },
    {
        id: "eq2",
        title: "EQ2: An App To Support Staff Working With Trauma-Impacted Youth",
        content: [
            {
                type: "image",
                imageIdentifier: "eq2-1.png"
            }, {
                type: "text",
                textContent: "The development of the EQ2 app was one of the most meaningful DALI projects for me. As I was becoming a seasoned DALI dev and learning tools like React, it was time to go from just a learner to an active 'doer'. My mission was to use my recently acquired React skills to now learn and use React Native to build a project from the ground up, also learning about cloud services like S3 and mobile app deployment with TestFlight."
            }, {
                type: "subtitle",
                textContent: "Purpose of EQ2"
            }, {
                type: "text",
                textContent: "EQ2 is a program created by Lionheart Foundation that aims to support staff working with trauma-impacted youth. The impact of the program is explained extensively on their webpage, with goals like understanding how trauma impacts youth behavior, building self-regulation skills in response to triggers, stress management, and more."
            }, {
                type: "text",
                textContent: "Founders and staff from Lionheart Foundation came to DALI Lab in search of a team who could develop the app. Given the impactful nature of the project and how feasible it was to DALI standards, the lab was quick to accept the project and assembled a team of experienced DALI developers, designers, and a project manager."
            }, {
                type: "subtitle",
                textContent: "Development"
            }, {
                type: "text",
                textContent: "The first 10 weeks, my DALI team designed and developed a considerable part of the app. The clients were skilled designers themselves, so our team designers were able to work closely with them. For the development part, we had Janvi, Anne, and me as developers, with Anne being the dev mentor on the project."
            }, {
                type: "image",
                imageIdentifier: "eq2-2.png"
            }, {
                type: "text",
                textContent: "I remember Janvi spending time working on the first screens of the app: the Today screen. With help from Anne, she developed most of the features for the screen such as daily check-ins, setting weekly goals, and other small features needed for this particular screen. I was able to work on it as well later on, coding the daily quote and improving the overall styling to match the designs."
            }, {
                type: "text",
                textContent: "I spent most of the time developing the Learn screen shown below, learning React Native on the go and using services like S3 from Amazon Web Services (AWS) to store and retrieve media files."
            }, {
                type: "image",
                imageIdentifier: "eq2-3.png"
            }, {
                type: "text",
                textContent: "After that, it was summer term at Dartmouth and most people were on holiday. The app needed to be polished and deployed, so I offered to work on it as a solo dev during the 10 weeks of the summer term, working full time."
            }, {
                type: "text",
                textContent: "This was a new experience for me, as I had to code without much mentor help and directly communicate with the clients to talk about progress and next steps. Before this, I just did standups on client meetings while I let project managers and designers speak more. During these 10 weeks, I was able to tell the clients what I was working on at the moment, and give my thoughts on the solutions I came up with. In a way, I became a junior project manager for the sake of the project."
            }, {
                type: "subtitle",
                textContent: "Reflection"
            }, {
                type: "text",
                textContent: "The project turned out pretty well. I finished the last features and deployed the app on TestFlight for beta testing. Currently, the clients are using it for the EQ2 program as shown on the Lionheart Foundation website."
            }, {
                type: "text",
                textContent: "Anne was a great dev mentor, and she helped me become a better dev later on. She works at Palantir now, I am pretty sure she was proud to see me on the DALI dev mentor board a few months later. All the team members did a great job, and both the clients and my team made incredible designs that I enjoyed making a reality. "
            }, {
                type: "text",
                textContent: "This experience was truly eye-opening, as it taught me the communication skills and the right mindset when approaching new technologies, something that would shape my work on future DALI projects and my career."
            }
        ]
    },
    {
        id: "dali-flex-team",
        title: "Flex Team at DALI Lab",
        content: [
            {
                type: "image",
                imageIdentifier: "dali-flex-1.png"
            }, {
                type: "text",
                textContent: "During my last term at Dartmouth, I was part of the DALI Flex Team: A small team of senior developers and designers in which each member was deployed to help other DALI teams that needed extra help to meet deadlines. In this article, I talk about two projects I was able to contribute to: Mgame and Smart Microscope."
            }, {
                type: "subtitle",
                textContent: "Mgame"
            }, {
                type: "text",
                textContent: "The goal of the Mgame project was to create a web platform to help people under medical recovery reach their physical goals. The idea was to make a goal tracker with progress monitoring and surveys to keep patients engaged on their recovery objectives. It was their second 10-week term at the lab."
            }, {
                type: "text",
                textContent: "They were short on devs, so I was deployed to the Mgame team for 5 weeks to help reduce the load. During that time, I was able to revamp the frontend of their two main screens, adding graphs and new features they made like week streaks, effort metrics, and reflections."
            }, {
                type: "image",
                imageIdentifier: "dali-flex-2.png"
            },{
                type: "image",
                imageIdentifier: "dali-flex-3.png"
            }, {
                type: "subtitle",
                textContent: "Smart Microscope"
            }, {
                type: "text",
                textContent: "After I was done helping Mgame, the flex team allowed me to assist the Smart Microscope team. This was a very ambitious project that had been in DALI for a couple terms. The purpose of the project was to allow microscopes to study digital images of samples as if they were real, using computer vision and artificial intelligence."
            }, {
                type: "text",
                textContent: "I worked on the frontend used to select and manage such digital images. Users would use a tablet or computer next to the microscope to get more info of the digital samples and send them to the microscope to simulate a lab experience."
            }, {
                type: "text",
                textContent: "Overall, both projects taught me how to quickly adapt within established teams and see how my skills can be useful for them, as I was placed on those projects to help with React work."
            }
        ]
    }
];