import { RobotCard } from "./robotCard";


export function Robot() {

return `


<section class="robot-hero">

    <div class="robot-hero-background"></div>


    <div class="robot-hero-content fade-up">

        <p class="eyebrow">
            OAKTON COUGAR ROBOTICS
        </p>


        <h1>
            Meet Our <span>Robots</span>
        </h1>


        <p class="description">

            Exploring the engineering,
            design, and innovation behind
            our competition robots.

        </p>


    </div>


    <div class="scroll-indicator">

        ↓

    </div>


</section>



<section class="robots">


<div class="container">


<h2>
    Our Competition Robots
</h2>



${RobotCard(

    "FRC Team 623",

    "Momo",

    "/images/frcRobot.png",

    "description",

    "/images/frc623robotCAD1.png",

    "/images/frc623robotCAD2.PNG"

)}




${RobotCard(

    "FTC Team 226",

    "Jarvis",

    "/images/ftc226robot.png",

    "description",

    "/images/ftc226design.png",

    "/images/ftc226design2.png"

)}




${RobotCard(

    "FTC Team 369",

    "Baymax",

    "/images/ftc369robot.PNG",

    "Baymax is our DECODE robot, designed around a rotating turret so the outtake can stay aligned with the goal independent of drivetrain heading. The intake uses surgical tubing mounted flush with the front sheet metal and shares a single motor with the belt transfer, allowing artifacts to be collected and moved to the shooter in one continuous path. The outtake is a dual motor flywheel running 6mm compression at a 50 degree hood angle, capable of releasing a shot in roughly half a second. Because the entire outtake assembly is mounted on the turret, the robot can maintain shot alignment while driving or while under defense. Localization is handled by a Pinpoint computer and odometry pods feeding pose estimates at approximately 1500 Hz into a RoadRunner localizer. That pose stream drives four closed loop systems: an auto tracking turret, a piecewise linear regression mapping shooting distance to flywheel velocity, a custom PIDF controller that holds velocity within 30 ticks per second, and a three PID pose holder that maintains position and heading under contact. The codebase is written in Java in Android Studio and version controlled through GitHub, currently at over 30,000 lines.",

    "/images/ftc369draftRobot1.PNG",

    "/images/ftc369draftRobot2.PNG"

)}



</div>


</section>


`;

}