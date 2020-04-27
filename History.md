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
 > ### 2020-04-01 ~ 2020-04-04
    * Posting component 수정 중(Delete Navigation Bar, CheckBox 정리)
    * Delete backend node_modules folder.
    * Name reposition (board -> title)
    * Add axios function to posting.vue
    * Activate postBody.vue's cancel button.
    * Project Logo Change
    * Clear Module not Found Error CaseSensitivePathsPlugin (cause : path in Posting.vue)
    * Tensorflow.js import success(In backend [Create backend\public\TFScripts\tfFunction.js])
 > ### 2020-04-07 ~ 2020-04-10
    * Create a crawler floder
    * Complete crawling(Game, Food, Text, Travel/Photo, Music, Mobile, Paint)   
    * Create a posting.js in BackEnd        
    * Complete crawling
    * Complete add queries and change the category in post
 > ### 2020-04-12
    * Complete SessionCheck in Post.vue(If make the session It's perfect(Current hardcording 'userid', useridx'))
    * Made a function hashTagDistributor(It's need the 'hashTag' attribute in capdi's post table).
 > ### 2020-04-27
    * Success conversion .h5 file to Json. 

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
    
> ### 2020-04-08
    
    * express mysql 중앙 모듈화 처리
    * 사용법
    // mysql 선언
    var dbConObj = require('../lib/db_config');
    var conn = dbConObj.init();
    conn.query('')
    
> ### 2020-04-12
    
    * posting router fix.
    * board post button error fix.
    * method => 함수 function 변경
    
> ### 2020-04-16
    
    * router method props change.
    
> ### 2020-04-21
    
    * vue style design apply.
    
> ### 2020-04-22
    
    * change log detach.
    
> ### 2020-04-25
    
    * Main Design Pattern Vue Change.
    * Router-view optimization
    
> ### 2020-04-28
    
    * backend api code optimization
    * board vue code optimization
    
> ### 2020-04-29
    
    * main vue page link error flx.
    * Vue page navigation apply.
    * page navigation Vuex apply.

Moo Hyun's History
-----------
> ### 2020-04-03
    * public/index.html 내 jQuery, js/articleProgress.js 추가 (프로그레스 바)

> ### 2020-04-07
    * Pre-work for comments API / 댓글 API 사전 작업

> ### 2020-04-08
    * Now can toggle comments / 댓글 여닫기 기능 추가

> ### 2020-04-09
    * Can retrive comments and subcomments in API server / API 서버를 통해 댓글, 대댓글 값 반환 기능 추가
    * Modified mysql connection style / mysql 진태형 변경사항에 따름

> ### 2020-04-10
    * Can load articles from database / DB에서 게시글 불러오기 가능
    * Can load comments, sub-comments from database / DB에서 댓글 불러오기 가능
    * Create comment input textbox / 댓글 달기 텍스트 입력 창 생성

> ### 2020-04-11
    * Add post editing button / 글 수정버튼 추가
    * Align article page / 게시글 보기 페이지 정렬
    * Rewrite query with modified DB / 수정된 DB에 맞춰 쿼리 재작성
> ### 2020-04-12
    * Fully functional add comment button / 댓글 달기 버튼 기능 추가

> ### 2020-04-13
    * Change reloading system in comment / 댓글 재조회 기능 변경
    * Create add subcomment button in fully functional / 대댓글 달기 버튼 추가 및 기능구현
    * Empty post redirection / 빈 포스트 주소 입력 시, 게시판으로 리다이렉션
    * Create session when users do login / 로그인시 세션 생성 (로그인 실패시 세션 삭제)
    * Don't show edit button on other user's post / 타인 게시글의 수정버튼을 볼 수 없음
    * Can't see add comment/subcomment button when logged-out / 로그아웃 시, 댓글/대댓글 작성버튼을 볼 수 없음

> ### 2020-04-15
    * Highlight post author's comments/subcomments / 게시글 작성자의 댓글, 대댓글 하이라이팅

> ### 2020-04-16
    * Add deleting comment/subcomment button / 댓글 삭제 버튼 추가

Chan Woong's History
-----------
 > ### 2020-04-11
     * DB 스키마 3차 설계 및 수정 (capdi.sql UPDATE)
     * 지속적 수정 및 개선 필요
 > ### 2020-04-07
     * DB 스키마 2차 설계 및 수정 (capdi.sql UPDATE)
     * 문제점 : comment(댓글) table과 deep(대댓글) table의 연관성 고려,
     sessions table 삭제 여부 고려,
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

> ### 2020-04-08
     * EC2인스턴스에 코드배포

> ### 2020-04-27
     * 배포 자동화 서비스인 CodeDeploy를 사용하기 위해 IAM을 이용하여 권한 역할, 정책, 인스턴스 프로파일 생성
        

Jin ho's History
-----------
> ### 2020-04-12
    * Pull requested!

  ### 2020-04-22
    * Home.vue 수정

  ### 2020-04-23
    * App.vue -> Navbar 수정
    
    * 위 수정에 맞게 Home.vue css 수정 및 로그인 박스 라우터 필요

  ### 2020-04-24
    * Home.vue에 image그리드 및 Footer 생성.


  