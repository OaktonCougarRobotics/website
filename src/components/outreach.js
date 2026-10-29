import { OutreachEvent } from "./outreachEvent";

export function Outreach() {

return `

<section class="outreach-hero">

    <div class="outreach-hero-background"></div>

    <div class="outreach-hero-content fade-up">

        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>

        <h1>
            Outreach
        </h1>

        <p class="description">

            Inspiring our community through
            robotics, STEM, and hands-on learning.

        </p>

    </div>

</section>



<section class="outreach-events">

<div class="container">

${OutreachEvent(
    "Children's Science Center Lab",
    "/images/ChildrensScienceCenterLab.jpg",
    "The Oakton Cougar Robotics team visited the Children's Science Center Lab to inspire young minds with the excitement of STEAM and robotics. Through interactive demonstrations and hands-on activities, the team introduced children to the fundamentals of robotics, engineering, and problem-solving. Kids had the opportunity to explore real-world applications of science and technology, engage with robotic creations, and ask questions about how robots are built and programmed. The event encouraged curiosity, creativity, and a passion for learning, making complex STEM concepts accessible and fun for future innovators."
)}


${OutreachEvent(
    "Town of Vienna Halloween Party",
    "/images/viennaCommunityCenter.jpg",
    "The Oakton Cougar Robotics Team visited the Town of Vienna Halloween party to display our robot and conduct activities for kids. We held a 'spider web' bridge building activity where teams built bridges out of cups and string and then tested their bridge by seeing how much candy they could balance on it before they fall off. We also held a 'trick-or-treat' tower challenge where teams attempted to build the tallest tower out of mini marshmallows and toothpicks while keeping it structurally sound.",
    true
)}


${OutreachEvent(
    "Waples Mill STEAM Night",
    "/images/waplesMill.jpg",
    "Ran a booth at the Waples Mill Elementary STEAM night, where we talked about our experiences in robotics and getting students excited about all things STEAM. We talked about the robots and ran a small game for the children."
)}


${OutreachEvent(
    "Trunk or Treat",
    "/images/trunkOrTreat.jpg",
    "This event takes place in a parking lot, where members of various clubs park their cars, decorate their open trunks with halloween themes, and hand out candy to visitors. Each trunk serves as a mini-booth where club members can interact with the students, share information about their organization, and engage the community in a fun and festive environment.",
    true
)}


${OutreachEvent(
    "Fall Festival",
    "/images/fallFestival.jpg",
    "Waples Mill walkthrough to show our robot to students and parents. We also had a booth where we talked about our experiences in robotics and getting students excited about all things STEAM."
)}


${OutreachEvent(
    "Rachel Carson Strategies for Success Class",
    "/images/rachelCarson.jpg",
    "We introduced middle school students to future opportunities by discussing high school clubs, potential majors, college pathways, and ways to plan for the future. To make the experience interactive and meaningful, we led an activity that helped them explore STEAM concepts and apply them to real-world scenarios, encouraging curiosity and forward-thinking.",
    true
)}

</div>

</section>

`;

}