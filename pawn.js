var
    Pawn;
Pawn = {
    create: function create(colour, position) {
        var
            pawn;
        pawn = Object.create(this.prototype);
        pawn.colour = colour;
        pawn.position = position;
        pawn.TYPE = 'Pawn';
        return pawn;
    },
    prototype: {
        isThreatening: function isThreatening(kingColour, kingPosition) {
            var
                testResult,
                threatenedPlaces;
            testResult = false;
            threatenedPlaces = this.threats();
            return threatenedPlaces.some(function some(threatedPlace) {
                if (
                    threatedPlace[0] === kingPosition[0] &&
                    threatedPlace[1] === kingPosition[1]
                ) {
                    return true;
                }
            }.bind(this));
        },
        threats: function threats() {
            var
                places;
            places = [];
            if (this.colour === 'white') {
                places.push([this.position[0] - 1, this.position[1] - 1]);
                places.push([this.position[0] + 1, this.position[1] - 1]);
            } else {
                places.push([this.position[0] - 1, this.position[1] + 1]);
                places.push([this.position[0] + 1, this.position[1] + 1]);
            }
            return places;
        }
    }
};
module.exports = Pawn;
