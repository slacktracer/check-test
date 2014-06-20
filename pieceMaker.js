var
    pieceMaker;
pieceMaker = function pieceMaker(pieceCode, colour, position) {
    switch (pieceCode) {
    case 'p1':
        return require('./pawn').create(colour, position);
    case 'k':
        return require('./pawn').create(colour, position);
    }
};
module.exports = pieceMaker;
