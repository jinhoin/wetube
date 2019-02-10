 import app from "./app";     

          
           const PORT = 4000;
            // 열릴 포트 설정
            
            
            const handleListenning = (req,res) =>   {
                console.log(`✅Listening on: http://localhost:${PORT}`);
                
            // delay 를해서 바벨문구를 기다려준다
            }
          
            app.listen(PORT,handleListenning);
            
            
            