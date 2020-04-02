필독!!
====
 > ### 2020-04-01

     Fork 진행 후 Collaborator 미등록 시 협업 불가.
     반드시 개인적으로 본인 Identify를 Origin repository master에게 확인시킨 후 등록 하길 바람.
    
     PS. Collaborator 등록을 원하지 않을 시 Fork 후 new branch name(Not master)으로 merge request 바람.

 > ### 현재 협업자 등록 명단(2020-04-02)

     현재 협업자 등록 명단
     * 오찬해
     * 류진태
     * 조무현

Update list
=============
테이블 스키마(MySQL)
-------
 > ### 2020-03-30
 
     (Dump file)capdi_users.sql
     
      @@ Import 방법 @@
     mysql -u -root -p database name < sql file path
     ex) 
       $ > cd C:\Program Files\MySQL\MySQL Server 8.0\bin
       C:\Program Files\MySQL\MySQL Server 8.0\bin> mysql -u root -p capdi < c:/capdi_users.sql

Back End 구동 방법
-------
 > ### 2020-03-27
     backend\bin\www.js 실행

     ex)In dos
     $> cd backend\bin
     backend\bin> node www.js

     실행 후 localhost:3000 확인

의존성 패키지(Front End)
-------
 > ### 2020-03-27
 
     "dependencies": {
    "axios": "^0.19.2",
    "bootstrap": "^4.4.1",
    "bootstrap-vue": "^2.9.0",
    "cache-loader": "^4.1.0",
    "core-js": "^3.6.4",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.1",
    "vue": "^2.6.11",
    "vue-loader": "^15.9.1",
    "vue-router": "^3.1.6"
    },
    "devDependencies": {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^6.7.2",
      "eslint-plugin-vue": "^6.1.2",
      "expose-loader": "^0.7.5",
      "node-sass": "^4.13.1",
      "sass-loader": "^8.0.2",
      "vue-template-compiler": "^2.6.11"

Chan hae's History
-----------
 > ### 2020-03-26
 
    * Components integration (Jin tae, Moo hyun)

 > ### 2020-03-27
 
    * Chan hae, Woo jin) Components integration

    * Chan hae, Woo jin) Convert html-> vue

    * Moohyun) Path change (All components move 'components' to 'components/Article')

    * Chan woong) Components intergration(Front end)
    
    * Chan woong) Path change (IMG)
    
    * Jin ho) Components intergration
    
    Comments
    -> FrontEnd 통합 완료(css 수정 남음)

 > ### 2020-03-30
 
    * Sql dump file upload

    * HeadLine Routing connect
  
    * login <-> signup routing connect

    * Find a backend post error

 > ### 2020-04-01

    * Posting component 수정 중(Delete Navigation Bar, CheckBox 정리)

Jin tae's History
-----------

> ### 2020-03-30

    * 불 필요 View 삭제
    
    * Router Index 일원화
    
> ### 2020-03-31
    
    * backend-frontend protocol error hotfix.
    
> ### 2020-04-01

    * backend Sql Connection Secure fix.

Moo Hyun's History
-----------

Chan Woong's History
-----------

Woo jin's History
-----------

Jin ho's History
-----------
