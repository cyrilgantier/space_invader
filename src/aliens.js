import { gAssetsManager } from './main.js';
import { Entity, Animation } from './ezLib.js';

export class Aliens extends Entity {

    constructor(xp, yp, type) {

        switch (type) {
            case 'ALIEN_BLUE_SHEET':
                super(xp, yp, gAssetsManager.getImage('alien_blue_sheet'));
                this.animation = new Animation(
                    gAssetsManager.getImage('alien_blue_sheet'),
                    40, 40, 0.01,true
                );
                this.animation.play();
                break;
            case 'ALIEN_GREEN_SHEET':
                super(xp, yp, gAssetsManager.getImage('alien_green_sheet'));
                this.animation = new Animation(
                    gAssetsManager.getImage('alien_green_sheet'),
                    40, 40, 0.01, true
                );
                this.animation.play();
                break;
            case 'ALIEN_PURPLE_SHEET':
                super(xp, yp, gAssetsManager.getImage('alien_purple_sheet'));
                this.animation = new Animation(
                    gAssetsManager.getImage('alien_purple_sheet'),
                    40, 40, 0.01, true
                );
                this.animation.play();
                break;
            default:
                break;
        }
        this.state = 'VISIBLE';
        this.inflate(5, 5);

    }

    update(dt){
        super.update(dt);
        this.animation.update(dt);
    }
    touched() {
    this.state = 'TOUCHED';
    }

    render(ctx) {
        if (this.state === 'VISIBLE') {
            //super.render(ctx);
            this.animation.render(ctx, this.position.x, this.position.y);
            //super.renderDebug(ctx);
        }
    }

}