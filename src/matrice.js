import { Aliens } from './aliens.js';
export class Matrice {

    constructor() {

        this.aliens_width = 40;
        this.aliens_heigth = 40;
        this.col = 10;
        this.row = 5;
        this.py = 50;
        this.aliens_group = new Array(this.row);
        //this.speed = 0;
        //this.speedModule = 200;
        this.creatGrid ();
    }

    creatGrid() {
        for(let i = 0; i < this.row; i++) {
            this.aliens_group[i] = new Array(this.col);
        }
        let r = 0;
        this.createRow(r, this.py, 'ALIEN_PURPLE_SHEET')
        this.py += 50;
        r++;
        this.createRow(r, this.py, 'ALIEN_BLUE_SHEET')
        this.py += 50;
        r++;
        this.createRow(r, this.py, 'ALIEN_BLUE_SHEET')
        this.py += 50;
        r++;
        this.createRow(r, this.py, 'ALIEN_GREEN_SHEET')
        this.py += 50;
        r++;
        this.createRow(r, this.py, 'ALIEN_GREEN_SHEET')
    }


    newWave() {
        for(let j = 0; j < this.row; j++){
            for (let i = 0; i < this.col; i++){
                this.aliens_group[j][i].state = 'VISIBLE';
            }
        }
    }


    isMatriceDestroy() {
        for(let j = 0; j < this.row; j++){
            for (let i = 0; i < this.col; i++){
                if (this.aliens_group[j][i].state === 'VISIBLE') { //test si même nature
                    return false;
                }
            }
        }
        return true;
    }


    createRow(row, yp, type) {
        for (let i = 0; i < this.col; i++){
            this.aliens_group[row][i] = new Aliens(i * (this.aliens_width + 5), yp, type);
        }
    }
    update(dt){
        super.update(dt);
        for(let j = 0; j < this.row; j++){
            for (let i = 0; i < this.col; i++){
                this.aliens_group[j][i].animation.update(dt);}}
    }
    render(ctx) {
        for(let j = 0; j < this.row; j++){
            for (let i = 0; i < this.col; i++){

                let item = this.aliens_group[j][i];
                if (item) {                             //test si existe
                    this.aliens_group[j][i].animation.render(ctx, this.aliens_group[j][i].position.x, this.aliens_group[j][i].position.y);
                    //this.aliens_group[j][i].render(ctx);
                }
            }
        }
    }

}