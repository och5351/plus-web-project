테이블 스키마(MySQL)
-------

      @@ Import 방법 @@
     mysql -u -root -p database name < sql file path
     ex) 
       $ > cd C:\Program Files\MySQL\MySQL Server 8.0\bin
       C:\Program Files\MySQL\MySQL Server 8.0\bin> mysql -u root -p capdi < c:/capdi.sql

Back End Run
-------
     backend\bin\www 실행

     ex)In dos
     $> cd backend\bin
     backend\bin> node www

     실행 후 localhost:3000 확인

의존성 패키지(Front End)
-------
     In dos
     $/frontend> npm install 

의존성 패키지(Back End)
-------
     In dos
     $/backend> npm install