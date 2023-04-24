const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;  // PORTA DO SERVIDOR VAMOS USAR A 4000

app.use('/', (req, res) => {
    res.send('Hello From Server Side');
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});