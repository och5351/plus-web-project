테이블 스키마(MySQL)
-------

      @@ Import 방법 @@
     mysql -u -root -p database name < sql file path
     ex) 
       $ > cd C:\Program Files\MySQL\MySQL Server 8.0\bin
       C:\Program Files\MySQL\MySQL Server 8.0\bin> mysql -u root -p capdi < c:/capdi.sql

Back End 구동 방법
-------
 > ### 2020-03-27
     backend\bin\www 실행

     ex)In dos
     $> cd backend\bin
     backend\bin> node www

     실행 후 localhost:3000 확인

의존성 패키지(Front End)
-------
 > ### 2020-04-04
     In dos
     $/myf> npm install 

의존성 패키지(Back End)
-------
 > ### 2020-04-04
     In dos
     $/backend> npm install