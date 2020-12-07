const nerds = require('nerds');
const app = (req, res) => {
    const {
        first,
        last,
        house,
        wand
    } = nerds.resolve('Harry Potter').asArray()[0];
    
    res.end(`
        <h1>${first} ${last}</h1>
        <h2>${house}</h2>
        <ul>
            <li>${wand}</li>
        </ul>
    `);
    
    res.statusCode = 200;
}
module.exports = app;
