module.exports = {
    HTML:function(title,css1,body){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Workroom8363 ${title}</title>
    
    <link rel="stylesheet" href="CSS/default.css">
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="CSS/leatherPractice(2).css">
    <link rel="stylesheet" href="${css1}">
 
    
    </head>
    <body>
    <div id="wrap">
        <a href="#contents"class="skip">본문바로가기</a>

    <div id="header">
        <!-- 로고 -->
        <div class="header">
        <div class="logo">   
            <ul>
                <li>
                    <a href="/"><img src="image/workroom8363 (2).jpg" ></a>
                </li>
            </ul>;
        </div>
        <!-- //로고-->
        <!--카테고리-->
        <h2 class="hide">카테고리</h2>
        <div class="menu_wrap">
            <ul class="category">
                <li><a href="/aboutus">ABOUT US</a></li>
                <li>　</li>
                <li><a href="/viewall">VIEW ALL</a></li>
                <li><a href="/bag">BAG</a></li>
                <li><a href="/wallet">WALLET</a></li>
                <li><a href="/life">LIFE</a></li>
                <li><a href="/fablic">FABLIC</a></li>
            </ul>

            <script type="text/javascript" src="practice.js"></script>
            
     
            <!--/카테고리-->
            <!-- 회원정보 -->
            <h2 class="hide">회원정보</h2>
            <ul class="membership">
                <li><a href="/login">LOGIN</a></li>
                <li><a href="/register">REGISTER</a></li>
                <li><a href="/cart">CART</a></li>
                <li><a href="/order">ORDER TRACKING</a></li>
                <li><a href="/mypage">MYACCOUNT</a></li>
            </ul>

            <ul class="customer">
                <li><a href="#">CUSTOMER CARE</a>
                <ul>
                    <li><a href="#">Q & A</a></li>
                    <li><a href="#">NOTICE</a></li>
                </ul>
                </li>
                <li id="insta">
                    <a href="https://instagram.com/workroom8363?igshid=8brsgeo5zja8">
                        <img src="image/insta.png"></img>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>



        
        <!--인스타그램 아이콘-->
        <!--/인스타그램 아이콘-->
        ${body}
    <div id="footer">
        <div class="footerall">
            <ul class="footer_cs">
                <li>
                    <pre>
여기는
footer 
이다.
회사 상세 소개
같은것이 들어간다.
                    </pre>

                </li>
            </ul>
            <ul class="shop_info">
                <li>
                    "
                    COMPANY : DAEMSSA
                    <br>
                    ADDRESS : DAEGU
                    <br>
                    REPUBLIC OF KOREA
                    <br>
                    <br>
                    COPYRIGHT (C)~
                </li>
            </ul>
            <ul class="footer_link">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">AGREEMENT</a></li>
                <li><a href="#">GUIDE</a></li>
                <li><a href="#">PRIVACY</a></li>
            </ul>

            
            </script>
        </div>
    </div>


 

    </div>
</div>
    
</body>
</html>
        `;
      }
    // ,list:function(filelist){
    //     var list = '<ul>';
    //     var i = 0;
    //     while(i < filelist.length){
    //       list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
    //       i = i + 1;
    //     }
    //     list = list+'</ul>';
    //     return list;
    //   }
    }


    // return `
    //     <!doctype html>
    //     <html>
    //     <head>
    //       <title>WEB1 - ${title}</title>
    //       <meta charset="utf-8">
    //     </head>
    //     <body>
    //       <h1><a href="/">WEB</a></h1>
    //       ${list}
    //       ${control}
    //       ${body}
    //     </body>
    //     </html>
    //     `;

    // <div id="container">
    //     <div id="contents">
    //         <div class="pictures">
    //             <ul class="pictures_image">
    //                 <li><a href="#"><img src="Bags/bag1.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Bags/bag2.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Bags/bag3.jpg" width="417px" height="556px" ></a></li>
    //                 <li><a href="#"><img src="Bags/bag4.jpg" width="417px" height="556px" ></a></li>
    //                 <li><a href="#"><img src="Wallets/wallet1.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Wallets/wallet2.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Wallets/wallet3.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Wallets/wallet4.jpg" width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Lifes/life1.jpg"width="417px" height="556px"></a></li>
    //                 <li><a href="#"><img src="Lifes/life2.jpg"width="417px" height="556px"></a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>