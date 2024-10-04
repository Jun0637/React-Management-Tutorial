const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20220119%2Fourmid%2Fpngtree-5g-network-it-technology-icon-png-image_4216885.png&type=sc960_832',
            name: 'パク',
            birthday: '041111',
            gender: '男',
            job: '大学生',
        },
        {
            id: 2,
            image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F77%2Fc0%2F22%2F77c022b937eead0c8375439f1185e720.png&type=sc960_832',
            name: 'ジェマア',
            birthday: '001111',
            gender: '女性',
            job: '社会人',
        },
        {
            id: 3,
            image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Fivpictured%2Fivpictured2001%2Fivpictured200100040%2F138423223-vector-colorful-icon-made-of-shield-and-home-picture-on-it-it-represents-home-protection-and-safety.jpg%3Fver%3D6&type=sc960_832',
            name: 'コマンド',
            birthday: '991111',
            gender: '男性',
            job: '公務員',
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 