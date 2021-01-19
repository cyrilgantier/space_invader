import { gAssetsManager, gInputManager } from './main.js';
import { Stage } from './ezLib.js';
import { Matrice } from './matrice.js';
import { Ship } from './ship.js';

export class GameStage extends Stage {

    constructor(screenWidth, screenHeight){
        super(screenWidth, screenHeight);
        this.ship = new Ship(this.screenWidth, this.screenHeight);
        this.matrice = new Matrice(this.screenWidth);
    }
    
    onEnter(params = undefined) {
        if (params){
            console.log(params.name);
        }
    }
    
    onExit() {}

    update(dt) {
        if (gInputManager.isKeyPressed('ArrowLeft')) {
            this.ship.moveLeft();
        }
        
        else if (gInputManager.isKeyPressed('ArrowRight')) {
            this.ship.moveRight();
        }    
        
        if (gInputManager.isKeyReleased('ArrowLeft')) {
            this.ship.stop();
        }
        
        else if (gInputManager.isKeyReleased('ArrowRight')) {
            this.ship.stop();
        }

        this.ship.update(dt);
        
        if (this.matrice.isMatriceDestroy()) {
            this.matrice.newWave();
        }
    }

    render(ctx) {
    ctx.drawImage(gAssetsManager.getImage('background'), 0, 0);
    this.ship.render(ctx);
    this.matrice.render(ctx);
    }
}



