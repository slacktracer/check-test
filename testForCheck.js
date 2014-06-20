testForCheck = function testForCheck(input) {
    var
        checks,
        Pawn,
        pieceMaker,
        pieces,
        testForCheck;
    checks = {
        white: false,
        black: false
    };
    pieceMaker = require('./pieceMaker');
    pieces = [];
    Object
        .keys(input.white)
        .forEach(function forEach(pieceCode) {
            pieces.push(pieceMaker(pieceCode, 'white', input.white[pieceCode]));
        });
    Object
        .keys(input.black)
        .forEach(function forEach(pieceCode) {
            pieces.push(pieceMaker(pieceCode, 'black', input.black[pieceCode]));
        });
    pieces.forEach(function forEach(piece) {
        var
            check;
        check = false;
        if (piece.colour === 'white') {
            check = piece.isThreatening('black', input.black.k);
            if (check) {
                checks.black = true;
            }
            return;
        }
        if (piece.colour === 'black') {
            check = piece.isThreatening('white', input.white.k);
            if (check) {
                checks.white = true;
            }
            return;
        }
    });
    if (checks.white === true && checks.black === true) {
        return 'both kings in check';
    }
    if (checks.white === true) {
        return 'white king is in check';
    }
    if (checks.black === true) {
        return 'black king is in check';
    }
    return 'no king is in check';
};
module.exports = testForCheck;
