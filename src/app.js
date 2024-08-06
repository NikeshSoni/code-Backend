import express from 'express';
import cors from cors;
import cookieParser from 'cookie-parser';

// cookieParser cookies ko accses kar pau me 

const app = express();

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credential:true
    }
));

app.use(express.json({limit:"30kb"}))
app.use(express.urlencoded({extended:true , limit:"30kb"}))

// extended nested Object De Sakte Hai 

app.use(express.static("public"));
app.use(cookieParser());

export {app}