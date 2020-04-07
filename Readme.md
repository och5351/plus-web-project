Team.plus Project 'Plus-Market' 
===

<p align="center">
<img src="https://user-images.githubusercontent.com/45858414/78417423-d75d8f80-766c-11ea-938c-4c6ca8f2034e.png" width="30%">
</p>
 
필독!!
====

 > ### 2020-04-05
     backend 의존성 패키지가 늘었습니다.
     반드시 구동 전 npm install 실행 후 구동하여 주시기 바랍니다.
     -> @tensorflow/tfjs-node 

 > ### 현재 협업자 등록 명단(2020-04-04)
     * 오찬해
     * 류진태
     * 조무현
     * 김우진
     * 김찬웅

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
 > ### 2020-04-04
     In dos
     $/myf> npm install 

의존성 패키지(Back End)
-------
 > ### 2020-04-04
     In dos
     $/backend> npm install

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
 > ### 2020-04-04
    * Project Logo Change
    * Clear Module not Found Error CaseSensitivePathsPlugin (cause : path in Posting.vue)
 > ### 2020-04-05
    * Tensorflow.js import success(In backend [Create backend\public\TFScripts\tfFunction.js])
 > ### 2020-04-07
    * Create a crawler floder
     Complete crawling list
       - Game
       - Food
       - Text
       - Travel/Photo
       - Music
    
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
    
> ### 2020-04-04

    * json -> database backend router link Test. 

Moo Hyun's History
-----------
> ### 2020-04-03

    * public/index.html 내 jQuery, js/articleProgress.js 추가 (프로그레스 바)

> ### 2020-04-07

    * Pre-work for comments API / 댓글 API 사전 작업

Chan Woong's History
-----------
 > ### 2020-04-07
     * DB 스키마 2차 설계 및 수정 (capdi.sql UPDATE)
     * 문제점 : comment(댓글) table과 deep(대댓글) table의 연관성 고려,
     sessins table 삭제 여부 고려,
     전체적 칼럼 위치 or 인덱스 설정
 > ### 2020-04-02
     * DB 1차 구성 (게시판(BOARD),카테고리(CATEGORY),글(WRITING),댓글(COMMENT),대댓글(DEEP),회원(CAPDI_USERS) TABLES)

     * 문제점 : 의도한 기능을 정확히 만족하는지 테스트 필요

     * 불 필요 코드 삭제
       (user.js - 회원 가입 라우트 부분, 중첩 쿼리 수정 완료 + SignUp.vue 중복 확인 img 속성 중 v-bind="check" 삭제)

Woo jin's History
-----------
> ### 2020-04-07
     * AWS를 이용하여 EC2인스턴스 생성

     * 웹서버 nginx, 웹 애플리케이션 서버 Phusion Passenger 설치

     * 자동 다중 서버 서비스 Auto Scaling 그룹 설정

     * 서버 트래픽 분산 관리 서비스 Elastic Load Balancing 설정

     * Route 53을 이용하여 도메인 등록
     
     * 로드밸러서에 도메인 등록
        (http://plus-market.com)

     * Certificate Manager를 통한 SSL/TLS 인증서 등록
        (https://plus-market.com)

     * RDS를 이용하여 MySQL DB인스턴스 생성

     * DB인스턴스에 파라미터 그룹 UTF-8 설정
        

Jin ho's History
-----------
