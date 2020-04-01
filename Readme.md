긴급!!(핫픽스 처리 부분)
=============
 > ### 2020-03-30
     SignUp.vue 내 중복확인 Button 404 Error need Fix(post)
     - xhr.js?b50d:178 POST http://localhost:8080/api/users/idCheck 404 (Not Found)
     - post 전송의 에러가 확인 되며 경로이외의 문제로 추정. 확인 요망.
Update list
=============
테이블 스키마(MySQL)
-------
 > ### 2020-03-30
 
     (Dump file)capdi_users.sql
     
      @@ Import 방법@@
     mysql -u -root -p database name < sql file path
     ex) 
       $ > cd C:\Program Files\MySQL\MySQL Server 8.0\bin
       C:\Program Files\MySQL\MySQL Server 8.0\bin> mysql -u root -p capdi < c:/capdi_users.sql

의존성 패키지
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

Jin tae's History
-----------

> ### 2020-03-30

    * 불 필요 View 삭제
    
    * Router Index 일원화

Moo Hyun's History
-----------

Chan Woong's History
-----------

> ### 2020-04-02
* DB 1차 구성 (게시판(BOARD),카테고리(CATEGORY),글(WRITING),댓글(COMMENT),대댓글(DEEP),회원(CAPDI_USERS) TABLES)
* 문제점 : 의도한 기능을 정확히 만족하는지 테스트 필요, 
익명 방지를 위한 회원(CAPDI_USERS)테이블의 NAME 칼럼과 외래 키 지정 불가(기본 키 OR 고유 키를 지정해야 가능한데 동일한 이름을 가진 회원들이 있을 수 있어 지정 불가. 해결법 고민)

> ### 2020-03-31

* 2020-03-30 SignUp 내 경로 오류 해결
- vue.config.js 설치 후 npm run build

Woo jin's History
-----------

Jin ho's History
-----------
