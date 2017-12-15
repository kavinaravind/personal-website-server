var express = require('express'),
    app = express(),
    path = require('path'),
    setupController = require('./controllers/setupController'),

    DIST_DIR =  path.join(__dirname, "../personal-website-app/dist"),
    HTML_FILE = path.join(__dirname, "../personal-website-app/dist/index.html"),
    DEFAULT_PORT = 3005;

// Set Express port variable 
app.set("port", process.env.PORT || DEFAULT_PORT);

// test
// static files for Express middleware stack
app.use(express.static(DIST_DIR)); // Angular4

// Website interface.
app.get("/", (req, res) => res.sendFile(HTML_FILE));
setupController(app);

app.listen(app.get('port'), () => console.log('Server running on port 3000'));
