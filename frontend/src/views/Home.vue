<template>
  <div id="app" class="container">
    <!-- 배너 부분 링크 문제 해결해야함 -->
    <div class="row">
      <div class="col-md-9" id="banner">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="571"
          img-height="612"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=18"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
        </b-carousel>
      </div>

      <!-- 로그인 박스 -->
      <div class="col-md-3">
        <div v-if="(this.$session.get('user_idx'))==null" class="loginbox">
           <b-button @click="login" class="loginbutton" align="center" >Login</b-button>
        </div>
        <div v-else>
            {{this.$session.get('name')}}님 환영 합니다!
            <button v-on:click="logout">로그아웃</button>
        </div>

      <!-- 공지사항 박스 -->
        <div class="border" id="notice">
          <label>공지사항</label><br>
          <b-link href="#"> 공지사항은 누가 전파한다?</b-link><br>
          <b-link href="#"> 당직사관이 전파한다</b-link><br>
          <b-link href="#"> 애국가 1절만 제창</b-link><br>
          <b-link href="#"> 동해물과 백두산이 마르고 닳도록 하느님이 누구시죠</b-link><br>
        </div>
      </div>
    </div>

    <!-- 인기글 & 최신글 -->
    <div class="row">
      <div class="col-md-9">
        <div class="hottopic">
          <div class="tabs" variant="secondary">
            <b-card no-body>
              <b-tabs pills card>
                <b-tab title="인기글" active><b-card-text>
                  <b-table striped hover :items="items"></b-table>
                </b-card-text></b-tab>
                <b-tab title="최신글"><b-card-text>Tab contents 2</b-card-text></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    <!-- 광고 -->
      <div class="col-md-3">
        <div class="ad">
          <b-img src="https://picsum.photos/300/500/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
        </div>
      </div>
    </div>

    <!-- 이미지 -->
    <div class="row">
      <div class="col-md-12">
       <b-alert show variant="light" align=left><a href="#" class="alert-link">이미지</a></b-alert>
        <b-container class="bg-white" id="img_box">
          <b-row id="first_line">
            <b-col cols="2">
              <b-img thumbnail left src="https://picsum.photos/125/125/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=57" alt="Image 4"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=52" alt="Image 5"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=51" alt="Image 6"></b-img>
            </b-col>
          </b-row>
            <b-row id="second_line">
            <b-col cols="2">
              <b-img thumbnail left src="https://picsum.photos/125/125/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=57" alt="Image 4"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=52" alt="Image 5"></b-img>
            </b-col>
            <b-col cols="2">
              <b-img thumbnail src="https://picsum.photos/125/125/?image=51" alt="Image 6"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    
    <!-- Footer -->
    <footer class="footer">
      <!-- Footer Links -->
      <div class="container text-center text-md-left">

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col-md-4 mx-auto text-info">

            <!-- Content -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">바로가기</h5>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit.</p>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col-md-2 mx-auto text-dark">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Game</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!" >League Of Legend</a>
              </li>
              <li>
                <a href="#!">Battle Ground</a>
              </li>
              <li>
                <a href="#!">Sudden Attack</a>
              </li>
              <li>
                <a href="#!">Maple Stroy</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col-md-2 mx-auto text-dark">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Music</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Ballade</a>
              </li>
              <li>
                <a href="#!">Hip Hop</a>
              </li>
              <li>
                <a href="#!">Jazz</a>
              </li>
              <li>
                <a href="#!">PoP</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none">

          <!-- Grid column -->
          <div class="col-md-2 mx-auto text-dark">

            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Food</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Korean</a>
              </li>
              <li>
                <a href="#!">Western food</a>
              </li>
              <li>
                <a href="#!">Instant</a>
              </li>
              <li>
                <a href="#!">Junk food</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>

      <!-- Social buttons -->
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
            <i class="fab fa-facebook-f"> </i>
        </li>
        <li class="list-inline-item">
            <i class="fab fa-twitter"> </i>
        </li>
        <li class="list-inline-item">
            <i class="fab fa-google-plus-g"> </i>
        </li>
        <li class="list-inline-item">
            <i class="fab fa-github"> </i>
        </li>
      </ul>

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="http://plus-market.com">PLUS</a>
      </div>

    </footer>
    <!-- Footer -->


    <!-- 라우터 연결할때만 이거 보고 할거임 탭's 안쓸꼬야
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME" @click="main"/>
        <b-tab title="공지사항" @click="main"/>
        <b-tab title="HOT게시판" @click="post"/>
        <b-tab title="커뮤니티" @click="comunity"/>
      </b-tabs>
      <router-view></router-view>
      -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        mySession: false
      }
    },
    methods: {
      login: function(){
        this.$router.push('/login')
      },
      // 로그아웃 시 세션 삭제 후 새로 고침
      logout: function (){
        this.$session.destroy();
        location.reload();
      }
    },
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #42b983;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 0px;
    margin-bottom: 150px;
  }
  #banner{
    margin-top: 10px;
  }

  #notice{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 10px;
    padding: 7px;
    height: 250px;
    align-self: auto;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  #first_line{
    margin-bottom: 30px;
  }

  .footer{
    margin-top: 50px;
    color:black;
  }

  .loginbutton {
    margin-top: 10px;
    width: 250px;
    height: 70px;
  }

  .trueLogin{
    width: 50px; 
    vertical-align: middle; 
    float:right;
  }

  .hottopic{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .ad{
    margin-top: 10px;
    height: 200px;
  }
</style>