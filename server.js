var express  = require('express'),
    app      = express(),
    path     = require('path'),
    mongoose = require('mongoose'),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000;

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json())
app.listen(port, function(){
    console.log(`Server running on port ${port}`);
});
