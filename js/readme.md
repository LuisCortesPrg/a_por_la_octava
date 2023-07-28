# World cup
## Description
<p>World cup is a football game in which the player tries to score a goal after  hitting the defender with the ball to clear the way until the goalkeeper<p>
## Main Functionalities
- Messi move automatically foward  ahd players change direction by clicking <strong>up</strong> and <strong>down</strong>.
- Messi shoots by pressing  <strong>space</strong> and it is necessary to hit the enemies and makes them disappear clearing the way. 
- To win the game the players should score a goal against the goolkeeper.
- The game ends when Messi collides against a defender or the goalkeeper safe his shoot.
- There are 2 types of defender, the first of them wears a blue shirt and Messi should hit them once to make them disappear and the second one wears a blue shirt with a yellow line and Messi should hit them three times to make them disappear.
- To win the game Messi must get to the goal and score without the goalkepper touch the ball. 

##Backlog Functionalities
- Adding differents types of defenders.
- Adding a points system to improve replayability.

##Technologies Used
- Html
-CSS
-JavasCript
-DOM manipulation
-JS class
-JS audio() and JS image()

##States
-Start Screen
-Game Screen
-Game Over Screen
-Game Victory Screen

##Proyect Structure
#### Main
- this.checkMessiPosition();
- this.moverBalones();
- this.borrarBalones();  
- this.crearJugadoresAleatorios();
- this.RandomYPosicion();
- this.francesesDesaparecen(); 
- this.pogbasDesaparecen();
- this.collisionBalonPorteria();
- this.collisionBalonPortero();
- this.collisionFrancesMessi();
- this.collisionPogbaMessi();
- this.collisionBalonesFranceses();
- this.collisionBalonesPogba();
- Victoria();
- Derrota();

### Class
-Class Messi
-Class Franceses
-Class Pogba
-Class Porteria
-Class Portero
-Class Balon

##Extra Links
- Game: https://luiscortesprg.github.io/a_por_la_octava/

-Slides: https://docs.google.com/presentation/d/1ApPo74WtvdtxipRB2qnTzm4XT77MnasKt9cY_1nhtxs/edit?usp=sharing


