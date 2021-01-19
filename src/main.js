import{
    Game,
    GameStageManager,
    InputManager,
    AssetsManager,
} from './ezLib.js';

import { GameStage } from './game_stage.js'


const canvas = document.getElementById('game_screen');


export const gameStageManager = new GameStageManager();

export const gInputManager = new InputManager();

export const gAssetsManager = new AssetsManager();


const game = new Game(canvas, gameStageManager, gInputManager);

async function chargeAssets(){
    console.log('charge assets');

    gAssetsManager.putImage(
        'background',
        await game.loadImage('./assets/images/background.jpg')
    );
    gAssetsManager.putImage(
        'alien_blue_sheet',
        await game.loadImage('./assets/images/alien_blue_sheet.png')
    );
    gAssetsManager.putImage(
        'alien_green_sheet',
        await game.loadImage('./assets/images/alien_green_sheet.png')
    );
    gAssetsManager.putImage(
        'alien_purple_sheet',
        
        await game.loadImage('./assets/images/alien_purple_sheet.png')
    );
    gAssetsManager.putImage(
        'ship',
        await game.loadImage('./assets/images/ship.png')
    );
    gAssetsManager.putImage(
        'mystery',
        await game.loadImage('./assets/images/mystery.png')
    );
    gAssetsManager.putImage(
        'bomb',
        await game.loadImage('./assets/images/bomb.png')
    );

    gameStageManager.pushStage(new GameStage(canvas.width, canvas.height));

    game.start();

}
chargeAssets();