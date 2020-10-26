const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.nextTick.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
