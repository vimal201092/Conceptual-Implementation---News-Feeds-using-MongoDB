const express = require('express');

//const { newsArticleSchema } = require('./schema');
const app = express()
const port = 8080
const { newsArticleModel } = require('./connector');
//const mongoosePaginate = require['mongoose-paginate'];
const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//newsArticleSchema.plugin(mongoosePaginate);

app.get("/newFeeds", async (req, res) => {
    res.send(await newsArticleModel.find().skip(sanitize(req.query.offset, 0)).limit(sanitize(req.query.limit, 10)));
});
    const sanitize = (value, defaultValue) => {
        if (value === null || value === undefined || isNaN(Number(value))) {
            return defaultValue;
        }
        return Number(value);    
    }
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;