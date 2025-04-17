const express = require('express');
const app = express();

const port = process.env.PORT || 8080; // Port dynamique pour OpenShift

// Sert les fichiers statiques depuis le dossier racine
app.use(express.static('./'));

app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`);
});
