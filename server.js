const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
            name: 'kico1',
            birthday: '961111',
            gender: 'man',
            job: 'college',
        },
        {
            id: 2,
            image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
            name: 'kico2',
            birthday: '971111',
            gender: 'woman',
            job: 'college',
        },
        {
            id: 3,
            image: 'https://screenchaser.kico.co.jp/wp-content/uploads/2024/07/ScreenCharser-800x285.png',
            name: 'kico3',
            birthday: '981111',
            gender: '?',
            job: 'college',
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 