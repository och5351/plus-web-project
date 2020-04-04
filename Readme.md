필독!!
====
 > ### 현재 협업자 등록 명단(2020-04-04)
     * 오찬해
     * 류진태
     * 조무현
     * 김우진
     * 김찬웅

 > ### DataBase 게시판 스키마 구성 방안 논의
     참여대상 : 필수 참여자(오찬해, 류진태, 조무현, 김찬웅)
     참여 일 : 2020-04-07(화) 오후 7시
     논의 주제 : DataBase 게시판 스키마 구성(속성, 테이블)
     참여방식 : 카카오톡 그룹통화
        ps. 시간 및 일정 변경 협의 개인 연락 요망

Update list
=============
테이블 스키마(MySQL)
-------
 > ### 2020-03-30(capdi_users.sql -> capdi.sql)
 
     (Dump file)capdi.sql
     
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
    }

의존성 패키지(Back End)
-------
 > ### 2020-04-02

    "dependencies": {
        "axios": "^0.19.2",
        "bcrypt-nodejs": "0.0.3",
        "cookie-parser": "~1.4.4",
        "debug": "~2.6.9",
        "express": "~4.16.1",
        "http-errors": "~1.6.3",
        "morgan": "~1.9.1",
        "mysql": "^2.18.1",
        "pug": "2.0.0-beta11",
        "vue-router": "^3.1.5"
    }

Chan hae's History
-----------
 > ### 2020-03-26 ~ 2020-03-30
    * Components integration (Jin tae, Moo hyun)
    * Chan hae, Woo jin) Components integration.
    * Chan hae, Woo jin) Convert html-> vue.
    * Moohyun) Path change (All components move 'components' to 'components/Article').
    * Chan woong) Components intergration(Front end).
    * Chan woong) Path change (IMG).
    * Jin ho) Components intergration.  
    Comments
    -> FrontEnd 통합 완료(css 수정 남음)
    * Sql dump file upload.
    * HeadLine Routing connect.
    * login <-> signup routing connect.
    * Find a backend post error(complete).
 > ### 2020-04-01
    * Posting component 수정 중(Delete Navigation Bar, CheckBox 정리)
 > ### 2020-04-02
    * Delete backend node_modules folder.
    * Name reposition (board -> title)
    * Add axios function to posting.vue
 > ### 2020-04-03
    * Activate postBody.vue's cancel button.
    
Jin tae's History
-----------
> ### 2020-03-30

    * 불 필요 View 삭제
    
    * Router Index 일원화
    
> ### 2020-03-31
    
    * backend-frontend protocol error hotfix.
    
> ### 2020-04-01

    * backend Sql Connection Secure fix.
    
> ### 2020-04-03

    * posting router link Connect.
    * posting -> components link Access Error fix.
    * 중복 import 제거 (axios -> this.$http 사용) 

Moo Hyun's History
-----------
> ### 2020-04-03

    * public/index.html 내 jQuery, js/articleProgress.js 추가 (프로그레스 바)

Chan Woong's History
-----------
 > ### 2020-04-02
     * DB 1차 구성 (게시판(BOARD),카테고리(CATEGORY),글(WRITING),댓글(COMMENT),대댓글(DEEP),회원(CAPDI_USERS) TABLES)

     * 문제점 : 의도한 기능을 정확히 만족하는지 테스트 필요

      * 불 필요 코드 삭제
       (user.js - 회원 가입 라우트 부분, 중첩 쿼리 수정 완료 + SignUp.vue 중복 확인 img 속성 중 v-bind="check" 삭제)

Woo jin's History
-----------

Jin ho's History
-----------
