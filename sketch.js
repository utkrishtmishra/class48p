var bgImage, bg;
var beeImage, bee;
var manImage, man;
var starImage, star;
var edges;
var bee2Image, bee2;
// for bee
var bee1, bee2, bee3, bee4, bee5, beesGroup;
var gameState = "play"
    // enemybee
var enemybee1, enemybee2, enemybee3, enemybeesGroup;

function preload() {
    bgImage = loadImage("./assets/bg3.jpg");
    manImage = loadImage("./assets/char.png");
    starImage = loadImage("./assets/star.png");
    bee3Image = loadImage("./assets/bee3.png");
    bulletImage = loadImage("./assets/bullet.jpg");
    // for bee 
    bee1 = loadImage("./assets/bee.png");
    bee2 = loadImage("./assets/bee2.png");
    bee3 = loadImage("./assets/bee3.png");
    bee4 = loadImage("./assets/bee4.png");
    bee5 = loadImage("./assets/bee5.png");
    // enemybee
    enemybee1 = loadImage("./assets/enemybee1.png");
    enemybee2 = loadImage("./assets/enenmybee2.png");
    enemybee3 = loadImage("./assets/enemybee3.png")


}

function setup() {
    createCanvas(1600, 800);
    bg = createSprite(800, 400)
    bg.addImage("background", bgImage);
    bg.velocityX = -1;
    bg.scale = 0.9;

    man = createSprite(200, 600)
    man.addImage("Man", manImage);
    man.scale = 0.8;

    // for bee
    beesGroup = new Group()
        // enemyrbee
    enemybeesGroup = new Group()


    edges = createEdgeSprites()


}

function draw() {
    background(0);

    if (bg.x < 700) {
        bg.x = 800;
    }
    if (keyDown("up")) {
        man.y = man.y - 5
    }
    if (keyDown("down")) {
        man.y = man.y + 5
    }

    spawnbee()

    man.bounceOff(edges);
    drawSprites();
}

function spawnbee() {
    if (frameCount % 60 === 0) {
        var bee = createSprite(1600, 165, 10, 40);
        //obstacle.debug = true;
        bee.velocityX = -5;

        //generate random bee
        var rand = Math.round(random(1, 5));
        switch (rand) {
            case 1:
                bee.addImage(bee1);
                break;
            case 2:
                bee.addImage(bee2);
                break;
            case 3:
                bee.addImage(bee3);
                break;
            case 4:
                bee.addImage(bee4);
                break;
            case 5:
                bee.addImage(bee5);
                break;
            default:
                break;
        }

        //assign scale and lifetime to the obstacle           
        bee.scale = 0.2;
        bee.lifetime = 300;
        //add each obstacle to the group
        beesGroup.add(bee);
    }

    function enemybees() {
        if (frameCount % 60 === 0) {
            var bee = createSprite(1600, 165, 10, 40);
            //obstacle.debug = true;
            bee.velocityX = -5;

            //generate random bee
            var rand = Math.round(random(1, 5));
            switch (rand) {
                case 1:
                    enemybee.addImage(enemybee1);
                    break;
                case 2:
                    enemybee.addImage(enemybee2);
                    break;
                case 3:
                    enemybee.addImage(enemybee3);

                default:
                    break;
            }

            //assign scale and lifetime to the obstacle           
            enemybee.scale = 0.2;
            enemy.lifetime = 300;
            //add each obstacle to the group
            enemybeesGroup.add(enemybee);
        }


    }
}