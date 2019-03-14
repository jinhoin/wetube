import app from "./app";
import './db'
import './models/Video';
// env 파일을 설정할수 있음
import dotenv from "dotenv"
dotenv.config();


// const PORT = 4000; 없을때는 4000으로 인식가능
const PORT = process.env.PORT || 4000;
// 열릴 포트 설정


const handleListenning = (req, res) => {
    console.log(`✅Listening on: http://localhost:${PORT}`);

    // delay 를해서 바벨문구를 기다려준다
}

app.listen(PORT, handleListenning);


