require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.port || 3000;
const name = "Sravan";
bn  

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

//connect DB
mongoose.connect(env.MONG_URL) 
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => console.log(err));

//listen for requests
app.listen(env.PORT),()=>{

} 