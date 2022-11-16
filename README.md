<h1> Project 1</h1> 


<h3>Description</h3>

This project was to test my understanding of JavaScript and how far I have come in these 3 short weeks that I have been attending the General Assembly. The project was to design and build a working game and for that I turned to TicTacToe.

<hr>

<h3>The Deployment Link Below</h3>
<strong>https://pages.git.generalassemb.ly/ic188002/Project-1/</strong>

<hr>
<h3>Timeframe & Working Team</h3>


This was a solo project in which I was focusing on developing my JavaScript skills. The timeframe set out was 5 working days.
<hr>

<h3>Technologies Used</h3>

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Node.js </li>
<li>Express</li>
<li>ProCreate</li>
<li>Github</li>
</ul>
<hr>
<h3>Brief</h3>

Build a web application from scratch, without a starter codebase
Use your programming skills to work out the game logic for a website
Separate HTML, CSS, and JavaScript files in your application
Build an application to a specification that someone else gives you
Build a dynamic website that allows two players to compete from the same computer
















<hr>
<h3>Idea Creation and Planning</h3> 

For the actual website, I wanted to fully utilise my skill sets, having studied design at university I wanted to create a unique and interesting interactive website. Having decided on a theme for the site which would replicate a child’s work page, with doodles and drawings flowing throughout. I also wanted the doodle to be interactive without using one's imagination! 

 




<img src="/project1images/1b.png">



































This was my first Wireframe depicting the desired outcome that I wanted to achieve, this was created using ProCreate.


I decided to prioritise the CSS and HTML elements for the first 1 and a half days, as this would allow me to fully focus on the functionality of the site for the remaining time as I knew that is where I would struggle. I broke down the JavaScript functionality into smaller code blocks, for example the winning condition array that is looped over to find the winning sequence. 






<hr>
<h3>Build/Code Process</h3>

Below is the first step I took in creating this application. In the index.html is set up a container that contains all the divs that would act as our tiles for the user. 





<img src="/project1images/2b.png">



















The CSS for the container and the divs inside can be seen below. I added the display: grid to form the board then changed the background of the container to an image I drew. This gave the game the desired child-like theme to it.







<img src="/project1images/3b.png">


























This variable called winningConditions I use to log my winning conditions, in TicTacToe there are only 8 possible routes to take to win. This code would be looped through at the end of a turn and if a winning condition came back true the game would end and there would be a winner.
 


<img src="/project1images/4b.png">




The resultChecker function is a for loop which has a nested if statement for evaluation whether the winning condition has been achieved. I set a roundWon variable to false at the beginning and after ran my loop. After which I come to the if statement where if variable “a,b” or “c” is equal or an empty string the condition will continue and remain fales.



<img src="/project1images/5b.png">








<img src="/project1images/6b.png">

<hr>
<h3>Challenges</h3>


The Ending Announcement was one function where I struggled to get it working. The main issue I worked through was what happens in the event of a tie and how I could get the code to read out the result. I ended up putting an innerText announcer to read out the result. 
The code below was the missing key, which now seems so simple but at the time I was lost and needed to step back from the project and look at it with fresh eyes. All I needed was a simple “not” operator and when there are no available options run the announce a tie function.


<img src="/project1images/7b.png">


  
<hr>
<h3>Wins</h3>


While I was very proud of the functionality of the game, I was most proud that I managed to achieve my desired result with the design and realised my vision for the project.
 

<img src="/project1images/8b.png">




The main win I have had from this project was deploying my first online application. In these 3 short weeks since my course started I have learned so much and to see my work paying off is a great feeling and drives me to continue developing my skills.








<hr>

<h3>Key Learnings/Takeaways</h3>

This project was a crucial learning experience for me, having the freedom to design and build something from the ground up was a scary prospect at the start of this course having never tried anything like this before. The main point I will take away from this experience is that you will inevitably be stuck at one point. The key I found was to step back and relax before wasting the whole day diving down a rabbit hole. 

<hr>
<h3>Future Improvements</h3>

In the future, I would like to develop more games that will run on the same page, fully realising my vision for a truly unique playing experience. Furthermore, I would  also like to include a one player mode, this would allow the user to play against the computer instead of relying on another user's input.

<img src="/project1images/9b.png">

<hr>
<h3>Bugs</h3>

The only Bugs that I am aware of are not in the tick, tac,toe game itself but with the interactive doodles I have dotted around the side. The small gun game at the bottom, when the game reaches the margin it pushes the background of the screen as shown below. 
