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
    // 1. 도화지 깔고 물감 묻히기 (순서 1)
    const g = this.add.graphics();
    g.fillStyle(0xffffff, 1); // 흰색(0xffffff), 알파값 1 (불투명)
    
    // 2. 그림 그리고 굽기 (순서 2)
    g.fillCircle(16, 16, 16); // 중심(16,16), 반지름 16
    g.generateTexture('Cir', 32, 32); // 지름에 맞춰서 도화지 크기는 32x32로 여유 있게!
    
    // 3. 쓸모없어진 도화지 소각 (순서 3)
    g.destroy();
    
    // 4. 이제 글로벌 창고에 'Cir'이 존재하니, 맵 중앙에 소환! (순서 4)
    const won = this.add.sprite(400, 400, 'Cir');
    won.setOrigin(0.5, 0.5);
}
