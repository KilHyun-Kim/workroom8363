var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./Daemlib/Daemtemplate.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

app.use(express.static(__dirname +'/public'));


app.get('/', function(request, response){
        var title = ' :: leather & design';
        var css1 = '';
        //var list = template.list(filelist);
        var html = template.HTML(title,css1,
            body=`
            <div id="container">
            <div id="contents">
                <div class="pictures">
                    <ul class="pictures_image">
                        <li><a href="#"><img src="Bags/bag1.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Bags/bag2.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Bags/bag3.jpg" width="417px" height="556px" ></a></li>
                        <li><a href="#"><img src="Bags/bag4.jpg" width="417px" height="556px" ></a></li>
                        <li><a href="#"><img src="Wallets/wallet1.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Wallets/wallet2.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Wallets/wallet3.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Wallets/wallet4.jpg" width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Lifes/life1.jpg"width="417px" height="556px"></a></li>
                        <li><a href="#"><img src="Lifes/life2.jpg"width="417px" height="556px"></a></li>
                    </ul>
                </div>
            </div>
            </div>
            `
            );
        response.send(html); 
});

app.get('/aboutus', function(request, response){
    var title = ':: Aboutus';
    var css1 = 'CSS/AboutUs(1).css';
    var html = template.HTML(title,css1,
       body = `
        <div id="wrapp">
        <h2 id="About">
        ABOUT
        </h2>
        <img id="aboutpicture" src="image/WorkroomBasic.jpg" alt="WORKROOM" width="850px" height="auto">
        <p></br></p>
        <p></br> </p>
        <p></br> </p>
        <p></br> </p>
        <p></br> </p>
        <p>좋은가죽으로 잘 만든 제품은 오래 사용할수록 낡지 않고 변화됩니다.</p>
        <p>WORKROOM8363은 가죽 본연의 멋스러움, 사용자의 습관과 시간에 따라 변화되는 멋,</p>
        <p>핸드메이드의 따뜻한 디테일이 어울어진 감성적인 디자인을 추구합니다.</p>
        <p></br> </p>
        <p>WORKROOM8363's Leathers are never worn out,</p>
        <p>they adjust their own forms along the person's behavior and the age.</p>
        <p>We, WORKROOM8363 always look for the design balanced between</p>
        <p>the aesthetic of nature from leather and warmth from our handmade.</p>
        <p></br> </p>
        <p>-</p>
        <p></br> </p>
        <p>CONTACT : 031-314-6438 / 135official@gmail.com</p>
        <p>MON - FRI : 11AM - 6PM / BREAKTIME : 1PM - 2PM</p>
        <p>SAT SUN HOLIDAY OFF</p>
        <p></br> </p>
        <p>COPYRIGHT (C) WORKROOM8363</p>
        <p></br> </p>
        <p></br> </p>
        <p></br> </p>
        <p></br> </p>
        </div>
        `
        );
        response.send(html); 
});
app.get('/login', function(request, response){
    var title = ':: Login';
    var css1 = 'CSS/login.css';
    var html = template.HTML(title,css1,
        body = `
        <div id="login_wrap">
            <h2 class="titleArea">Login</h2>
        <form>
        <div class="login">
            
         
                <div id="login_form">
                    <ul>
                        <li>
                            <label title="MEMBER ID">
                                <input id="member_id" name="member_id" type="text" placeholder="MEMBER ID" >
                            </label>
                        </li>
                        <li>
                            <label class="password ePlaceholder" title="PASSWORD">
                                <input id="member_passwd" name="member_passwd" placeholder="PASSWORD" type="text">
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="login_btn">
                    <ul>
                        <li class="left">
                            <a href="/member/join.html">REGISTER</a>
                            <a href="/member/id/find_id.html">FORGOT ID</a>
                            <a href="/member/passwd/find_passwd_info.html">FORGOT PW</a>
                            
                            보안접속
                            
                        </li>
                        <li class="right">
                            <a href="#none">LOGIN</a>
                        </li>
                    </ul>
                </div>
           

        </div>
    </form>
    </div>
        `
        );
        response.send(html); 
});

app.get('/register', function(request, response){
    var title = ':: Register';
    var css1 = 'CSS/register.css';
    var html = template.HTML(title,css1,
        body = `
        <div id="contents2">
    <div class="titleArea">
        <h2>REGISTER</h2>
    </div>
    <form id="joinForm" name="joinForm" action="#" method="post" target="_self" enctype="multipart/form-data">
        
        <div class="base-table">
            <table>
                <caption>회원 기본정보</caption>
                <colgroup>
                    <col style="width: 30%;">
                    <col style="width: 70%";> 
                </colgroup>
                <tbody>
                    <tr>
                        <th scope="row">ID </th>
                        <td width="100%">
                            <input type="text" placeholder="아이디를 입력 해주세요.">
                            <p><span></span>
                            영문 소문자/숫자, 4-16자리
                        </p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">PASSWORD</th>
                        <td>
                            <input id="password" type="password" placeholder="비밀번호를 입력 해주세요.">
                            <p>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">PASSWORD CHECK</th>
                        <td>
                            <input id="password_check" type="password" placeholder="비밀번호를 확인합니다.">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" id="nameTitle">NAME</th>
                        <td>
                            <span id="nameContents">
                                <input type="text" name="name" id="name" maxlength="20" placeholder="닉네임을 설정해주세요.">
                            </span>
                            <p>※14세 미만 사용자는 법정대리인 동의가 필요합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MOBILE</th>
                        <td>
                        <select id="mobile1" name="mobile[]">
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="016">016</option>
                            <option value="017">017</option>
                            <option value="018">018</option>
                            <option value="019">019</option>
                        </select>
                        -
                        <input id="mobile2" type="text"> 
                        <input id="mobile3" type="text">
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" >E MAIL</th>
                        <td>
                        <input id="email1" name="email1" type="text">
                        @
                        <input id="email2" name="email2" readonly="readonly" type="text">
                        <select id="email3">
                            <option value selected ="selected">- 이메일 선택 -</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="nate.com">nate.com</option>
                            <option value="hatmail.com">hatmail.com</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </td>
                    </tr>
                    <tr>
                        <th scope="row">이메일 수신여부</th>
                        <td>
                            <input type="checkbox" id="agree"><label for="agree">동의</label>
                            <p>쇼핑몰에서 제공하는 이벤트 소식을 이메일로 받으실 수 있습니다. ^_^</p> 
                        </td>
                    </tr>
                <tbody>
            </table>
        </div>
    
    
    <div class="agreeArea_wrap">
        <ul class="left">
            <div class="agreeArea_suzip">
                <div class="agree_suzip">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p class="check">
                        <span>이용약관에 동의하심?</span>
                        <input type="checkbox">
                        <label for="">동의함</label>
                    </p>
                </div>
            </div>
        </ul>
        <ul class="right"> 
            <div class="agreeArea_suzip">
                <div class="agree_suzip">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p class="check">
                        <span>개인정보 수집 및 이용에 동의하심?</span>
                        <input type="checkbox">
                        <label for="">동의함</label>
                    </p>
                </div>
            </div>
        </ul>
    </div>
        <div id="submit">
            <a href="#">SUBMIT</a>
        </div>
    </form>
</div>
        `
        );
        response.send(html); 
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))