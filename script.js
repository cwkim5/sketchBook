const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#000000',
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {
   
    const g = this.add.graphics();

    g.fillStyle(0xffffff, 1);
    
    g.fillCircle(16, 16, 16); 
    g.generateTexture('Cir', 32, 32); 

    g.clear();


    g.lineStyle(2, 0xFFFFFF , 1.0);
    g.fillStyle(0xFFFFFF, 1.0);
    g.beginPath();
    g.moveTo(0,0)
    g.lineTo(32,0)
    g.lineTo(32,32)
    g.lineTo(0,32)
    g.closePath();
    g.fillPath();
    g.generateTexture('Square', 32, 32);

    g.destroy();

    const won = this.add.sprite(400, 400, 'Square');
    won.setOrigin(0.5, 0.5);

    this.tweens.add({
    targets: won,
    y: 200,                 // Y좌표 200(위쪽)으로 이동해라
    scale: 2,               // 크기는 2배로 뻥튀기!
    duration: 1000,         // 이 모든 동작을 1초(1000ms) 만에 끝내라!
    ease: 'Cubic.easeInOut',
    yoyo: true,             // 끝까지 가면 다시 원래 상태(되감기)로 돌아와라!
    repeat: -1              // -1은 '무한 반복'을 의미함
});
}
