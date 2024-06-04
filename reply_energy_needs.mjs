
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
// Cors implementation based on tutorial accessed 5/20/24 at:
// https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

app.get("/energy_needs", (req,res) => {
    console.log("Received a Request")
    const energy_needs = req.query.energy

    if (energy_needs == "1.0"){
        res.send("A 10/10 energy dog generally requires: \n 1) 2 hours of walks daily \n 2) 30 min of training daily \n 3) 1 hour of vigorous exercise daily")
    } else if (energy_needs == "0.8"){
        res.send("A 8/10 energy level dog generally requires: \n 1) 1.5 hours of walks daily \n 2) 20 min of training daily \n 3) 30 min of vigorous exercise daily")
    } else if (energy_needs == "0.6"){
        res.send("A 6/10 energy level dog generally requires: \n 1) 1 hour of walks daily \n 2) 15 min of training every other day \n 3) 30 min of vigorous exercise twice a week")
    } else if (energy_needs == "0.4"){
        res.send("A 4/10 energy level dog generally requires: \n 1) 30 min of walks daily \n 2) 15 min of training twice a week \n 3) 15min of vigorous exercise twice a week")
    } else if(energy_needs = "0.2"){
        res.send("A 2/10 energy level dog generally requires: \n 1) 30 min of walks daily \n 2) 10 min of training once a week \n")
    } else {
        res.send("Error: Please make sure to request with an approved application.")
    }

})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});