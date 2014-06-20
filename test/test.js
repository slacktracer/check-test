var
    assert;
assert = require('assert');
describe('testForCheck', function describe() {
    it('should return which king is in check, if any', function it() {
        var
            input,
            output;
        input = require('../testInput');
        output = require('../testForCheck')(input);
        assert.equal(output, 'black king is in check');
    });
});
