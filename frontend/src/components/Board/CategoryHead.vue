<template>
    <div>
        <!-- 로그인 박스 -->
        <div class="loginBox">
            <span>
                <a href="#" class="memrog"> 회원가입 ｜ </a>
                <a href="#" class="ldpw">아이디 ·</a>
                <a href="#" class="idpw"> 비밀번호 찾기 </a>
            </span>
            <b-button href="#" variant="outline-secondary" size="md"> 로그인</b-button>
        </div>

        <!-- 게시판 설명 -->
        <div class="border" id="exBox">
            <div class="card text-dark bg secondary mb-3">
                <div class="card-header">자유게시판</div>
                <div class="card-body">
                    <h5 class="card-title">싸우면 무현이 부름</h5>
                    <p class="card-text">3대 500 조무현 : 진실의 방으로...!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    #exBox {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    span {
        font-size: 14px;
        -webkit-text-fill-color: gray;
    }

    .memrog {
        font-weight: 700;
    }

    .loginBox {
        margin-top: 15px;
        margin-bottom: 10px;
        text-align: right;
    }
</style>