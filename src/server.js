
const {connect} = require('./configs/db');
const app = require('./index')

app.listen(6600,async()=>{
    try {
        await connect;

    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 66000");
})