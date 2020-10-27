export const gallows = {

    1:  //ground
        function ground(ctx) {
            ctx.fillRect(10, 200, 400, 50);
        },
    2: // platform
        function platform(ctx) {
            ctx.fillRect(80, 180, 80, 20);
        },
    3:  //verticalBeam
        function verticalBeam(ctx) {
            ctx.beginPath();
            ctx.moveTo(100, 180);
            ctx.lineTo(100, 50);
            ctx.stroke()
        },
    4: //horizontalBeam
        function horizontalBeam(ctx) {
            ctx.beginPath();
            ctx.moveTo(100, 50);
            ctx.lineTo(160, 50);
            ctx.stroke();
        },
    5: //line
        function line(ctx) {
            ctx.beginPath();
            ctx.moveTo(160, 50);
            ctx.lineTo(160, 80);
            ctx.stroke();
        },
    6: //loop
        function loop(ctx) {
            const angleToRadian = function (angle) {
                return Math.PI / 180 * angle;
            }

            ctx.beginPath();
            ctx.ellipse(160, 100, 20, 10, angleToRadian(90), 0, angleToRadian(360));
            ctx.stroke();
        }
}

export const drawGallows = (elementCanvas, game) => {
    const canvas = document.querySelector(elementCanvas);
    const ctx = canvas.getContext('2d');
    if (game.failures === 1) {
        gallows[1](ctx)
    }
    if (game.failures === 2) {
        gallows[2](ctx)
    }
    if (game.failures === 3) {
        gallows[3](ctx)
    }
    if (game.failures === 4) {
        gallows[4](ctx)
    }
    if (game.failures === 5) {
        gallows[5](ctx)
    }
    if (game.failures === 6) {
        gallows[6](ctx)
    }
}