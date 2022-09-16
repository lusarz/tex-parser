const fs = require('fs');
const { parse } = require('../../lib/parser');

it('parse create AST tree from simple tex file', () => {
    const content = fs.readFileSync(`${__dirname}/../samples/sample-1.tex`, 'utf8');

    const result = parse(content);

    expect(result).to.deep.equal({
        document: {
            items: [
                {
                    type: 'title',
                    value: 'This is our title'
                }
            ]
        }
    });
});