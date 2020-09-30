const express = require('express');
const app = express();
const path = require('path');
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

app.use(express.static(__dirname + '/angularapp'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));

console.log('Build successful!!');