var express = require('express'),
    path = require('path'),
    app = express(),

    DIST_DIR =  path.join(__dirname, "../personal-website-app/dist"),
    HTML_FILE = path.join(__dirname, "../personal-website-app/dist/index.html"),
    DEFAULT_PORT = 3000;

// Set Express port variable 
app.set("port", process.env.PORT || DEFAULT_PORT);

// static files for Express middleware stack
app.use(express.static(DIST_DIR)); // Angular4

// Website interface.
app.get("/", (req, res) => res.sendFile(HTML_FILE));

app.listen(3000, () => console.log('Server running on port 3000'));
