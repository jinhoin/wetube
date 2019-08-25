import dotenv from "dotenv"
import './db'

import app from "./app";
// env 파일을 설정할수 있음
dotenv.config();
import './models/Video';
import './models/Comment';
import './models/User';


// const PORT = 4000; 없을때는 4000으로 인식가능
const PORT = process.env.PORT || 4000;
// 열릴 포트 설정


const handleListenning = (req, res) => {
    console.log(`✅Listening on: http://localhost:${PORT}`);

    // delay 를해서 바벨문구를 기다려준다
}

app.listen(PORT, handleListenning);


