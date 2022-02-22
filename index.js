const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 2345;
const connect = require('./configs/db');

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: false, default: 'Male' },
});
const User = mongoose.model('orders', userSchema);
app.get('/order/grocery-stores', async (req, res) => {
  try {
    //const users = await User.find().lean().exec();
    return res.status(200).send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groceries</title>
    <link rel="stylesheet" href="./styles/grochome.css">
    <style>
        #fandv {
    display: flex;    
    width: 100%;
   font-family: "Poppins", sans-serif;
   
}  

#fvCart img{
    width: 50%;

}
#fvCart{
    text-align: center;
    overflow: scroll;
    height: 400px;
}
#ful{
    width: 130px;
    margin: auto;
}
#martdata{    
    overflow: scroll;
    width: 50%;
    margin: auto;
    height: 400px;
   font-family: "Poppins", sans-serif;
}
#h1{
    margin: auto;
    padding-left: 30px;
}
#martdata>div{   
    display: flex;  
    width: 100%;
    height: 120px; 
    margin-bottom: 2px;       
}
#martdata>div:hover{   
    display: flex;  
    width: 100%;
    height: 120px;     
    background-color: white;
    margin-bottom: 2px;  
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#martdata>div>div{   
    display: flex; 
    gap: 50px;    
}
img{
    width: 30%;
    margin-right: 10px;
    margin-bottom: 10px;
}
#check{
    width: 300px;
    height: 50px;
    padding-bottom: 20px;
    border-radius: 50px;
    margin: auto;
}
#co{
    padding-bottom: 50px;
    justify-content: space-between;
}
button{
    border-radius: 20px;
    width: 80px;
    height: 30px;
    margin-top: 20px;
    background-color: rgb(255, 252, 246);
    border:0.1px solid rgb(187, 187, 187);
    color: #00d290;
}
button:hover{
    border-radius: 20px;
    width: 80px;
    height: 30px;
    border:0.1px solid rgb(187, 187, 187);
    background-color: white;
}
#scrhead{
    width: 100%;
    height: 20px;
    background-color: rgb(187, 187, 187);
}
#scrhead:hover{
    width: 100%;
    height: 20px;
    background-color: rgb(187, 187, 187);
}
#list-item{
    margin-left: 100px;
    overflow: scroll;
    height: 400px;
    text-align: right;
    width: 20%;
}
a{
   
    color: black;
}
#a{
    color: #00d290;
}
#ser-lis{
    height: 70%;
    margin-top: 15px;
    width: 40%;
    margin-left: 300px;
}
#inp{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0.1px solid #00d290;
    margin-top: 5px;  
    font-size: 16px; 
}
#serdiv{
    width: 100%;
    height: 50px;
   
}
#hed{
            width: 100%;
            margin: auto;
            height: 140px;           
            background-color: rgb(244, 255, 244);           
           font-family: "Poppins", sans-serif;
        }
        #inhed{
            width: 70%;  
            margin: auto;          
            height: 100%;
            display: flex;
            
        }
        #home1{
            color: black;
            padding-left: 120px;
           font-family: "Poppins", sans-serif;
        }
        #img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        #imgd{
            margin-top: 10px;
            margin-left: 10px;
            border-radius: 10px;
            width: 90px;
            height: 90px;
            background-color: rgb(211, 255, 211);
        }
        #con{
            margin-left: 10px;
        }
        
        


       /*
       
       navbar style

       */


   body{
    margin:auto;
}

#Mnavbar{
    width: 100%;
    height: 100px;
    margin: auto;
    display: flex;
}
#navb{
    width: 100%;
    height: 100px;
    display: flex;
    
}
#nav_img{
    width: 130px;
    height: 45%;    
    cursor: pointer;
    margin-left:100px;
    margin-top: 20px;
}
#nav_location{
    width: 30px;
    height: 40%;    
    margin-left: 60px;
    cursor: pointer;
    margin-top: 20px;
}
#tit{
    margin-left: 100px;
    display: flex;
   gap: 30px;
   margin-top: 20px;
}
#title1{  
    
    cursor: pointer;
   font-family: "Poppins", sans-serif;
    font-weight: 300;
}
#title1:hover{
    color: #00d290;
}
#title2{    
    
    cursor: pointer;
   font-family: "Poppins", sans-serif;
    font-weight: 300;
}
#title2:hover{
    color: #00d290;
}
#nav_search{
    width: 60px;
    height: 100%;
    margin-left: 40px;
    line-height: 0%;
    cursor: pointer; 

}
#nav_cart{
    width: 60px;
    height: 100%;
    margin-left: 30px;
    line-height: 0%;
    cursor: pointer;
}
#icon_search{
    width: 40%;
    height: 35%;
    font-weight: 200;
    color: gray;
    margin-top: 10px;
    margin-left: 30px;
    cursor: pointer;
}
#icon_search:hover{
    color: #00d290;
}
#icon1{
    height: 20%;
    width: 100%;
    padding-top: 0px;
    padding-left: 25px;
   font-family: "Poppins", sans-serif;
    font-size: small;
    line-height: 0%;
    color: black;
}
#icon1:hover{
    color: #00d290;
}
#icon_cart{
    width: 40%;
    height: 35%;
    font-weight: 200;
    color: gray;
    margin-top: 10px;
    margin-left: 30px;
    cursor: pointer;
}
#icon_cart:hover{
    color: #00d290;
}
#icon2{
    height: 20%;
    width: 100%;
    padding-top: 0px;
    padding-left: 30px;
   font-family: "Poppins", sans-serif;
    font-size: small;
    line-height: 0%;
    color: black;
}
#icon2:hover{
    color: #00d290;
}

 #nav_signin{
    margin-left: 30px;
    width: 75px;   
    height: 30px;  
    margin-top: 30px;    
    border-radius: 20px;
    background-color: #00d290;
    color: white;
    border: 1px solid #00d290;
    cursor: pointer;
   font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: medium; 
} 
#Mnavy{
    width: 100%;
    height: 55px;
    background-color: #172b5f;
    display: flex;
}
#navy_icon{
    margin-left: 95px;
    width: 40px;
    height: 50%;
    margin-bottom: 20px;
    padding: 10px;
}
.navy_text1{    
    color: white;
   font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: medium;
}
.navy_text2{  
    padding-left: 180px;
    color: #00d290;
   font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: medium;
    cursor: pointer;
}
#hedh1{
    padding-left: 112px;
   font-family: "Poppins", sans-serif;
}
#areadev{
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-gap: 30px;
    width: 80%;
    margin: auto;
    margin-bottom: 20px;
   font-family: "Poppins", sans-serif;
}
#ard{
    color: black;
}
#Mnavy-text{
    display: flex;
    justify-content: space-between;
}
#footer{
    width: 100%;
    height: 550px;
    background-color: #171e30;
   font-family: "Poppins", sans-serif;
    color: white;
}
#footer_index{
    width: 80%;
    margin: auto;
    padding-top: 30px;
}
#footer_p{
    font-weight: 200;
    font-size: small;
    padding-bottom: 30px;
    line-height: 20px;
}
#line{
    width: 80%;
    margin: auto;
    border: 1px solid rgb(73, 72, 72);
}
#footer_end{
    width: 80%;
    margin: auto;
    height: 250px;
    margin-top: 60px;
    display: flex;
    gap: 30px;
}
#footer_logo{
    width: 15%;
}
#footer_dunzo{
    width: 20%;
}
#footer_service{
    width: 20%;
}
#footer_getin{
    width: 20%;
}
#footer_scooty{
    width: 30%;
}
#dunzo_logo{
    width: 50%;
    height: 70px;
    margin-top: 17px;
    cursor: pointer;
}
#footer_dunzo>a>h3{
    color: white;
    font-weight: bolder;
    font-size: medium;
}
#footer_dunzo>a>h4{
    color: white;
}
#footer_service>a>h3{
    color: white;
    font-weight: bolder;
    font-size: medium;
}
#footer_service>a>h4{
    color: white;
}
#footer_getin>a>h3{
    color: white;
    font-weight: bolder;
    font-size: medium;
}
#footer_getin>a>h4{
    color: white;
}
#scooty{
    width: 100%;
    margin: auto;
    height: 160px;
}
a{
    text-decoration: none;
}
#fot{
    line-height:10px;
    color: white;
}
#loc{
    color: black;
}
#footer_dunzo>a:hover{
    text-decoration: underline white;
}
#footer_service>a:hover{
    text-decoration: underline white;
}
#footer_getin>a:hover{
    text-decoration: underline white;
}
#navaa{
    color: black;
}
#navaa:hover{
    color:#00d290 ;
}
/*business pop */
#formdata{
    display: flex;
}
.form-popupb {
    display: none;
    width: 30%;
    margin: auto;
    border: transparent;      
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;    
   font-family: "Poppins", sans-serif;
    margin-bottom: 30px;
  }
#cancel1{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;
    margin-left: 280px;
    cursor: pointer;
    font-size: larger;
    font-weight: bolder;
    margin-top: 3px;
    color: black;
  }
  #login_img1{
    width: 70px;
    height: 70px;
    margin-left: 20px;
  }
  .text_p1{
    padding-left: 20px;
    line-height: 5px;
    color: black;
  }
  .text_p1:hover{
    padding-left: 20px;
    line-height: 5px;
    color: #00d290;
  }
  .text_name1{
    padding-left: 20px;
    padding-top: 10px;
  }
  /* cart */
  #shopa{
      width: 200px;
      height: 40px;
      border-radius: 50px;
      background-color: #00d290;
      color: white;
      border: transparent;
     font-family: "Poppins", sans-serif;
  }
  #texa{
      color: black;
     font-family: "Poppins", sans-serif;
  }
  #texb{
      color: gray;
     font-family: "Poppins", sans-serif;
  }
  #imgdd{
      width: 100%;          
       height: 100%;
  }
   #cancel3{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;    
    cursor: pointer;
    font-size: larger;
    font-weight: bolder;
    margin-top: 0px;
    color: black;
  }
  .form-popupd {
    display: none;
    width: 22%;
    margin: auto;       
    border-radius: 2px;
    margin-bottom: 10px;    
   font-family: "Poppins", sans-serif;
  }
  #imgdd{
      width: 200px;
      height: 200px;
  }
  /* nav serch */

  #serchnavcc{
      width: 90%;
      height: 40px;
      margin: auto;
      margin-bottom: 10px;
      border-radius: 5px;
       border: 0.001px solid #00d290;
  }
  #navsearc{
      width: 90%;
      height: 40px;
       margin: auto;
       font-size: 14px;
       border-radius: 5px;
  }
   #cancel2{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;    
    cursor: pointer;
    font-size: larger;
    font-weight: bolder;
    margin-top: 3px;
    color: black;
  }
  .form-popupc {
    display: none;
    width: 90%;
    margin: auto;       
    border-radius: 2px;
    margin-bottom: 10px;    
   font-family: "Poppins", sans-serif;
  }
/* Login Popup */
.form-popup {
    display: none;
    width: 30%;
    margin: auto;
    border: 3px solid #f1f1f1;    
    margin-top: 100px;
    border-radius: 20px;
    margin-bottom: 50px;
   font-family: "Poppins", sans-serif;
  }
  
  #cancel{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;
    margin-left: 300px;
    cursor: pointer;
    font-size: larger;
    font-weight: bolder;
    margin-top: 3px;
    color: black;
  }
  
  #login_img{
    width: 70px;
    height: 70px;
    margin-left: 20px;
  }
  .text_sign{
    padding-left: 20px;
    font-weight: 300;
    line-height: 5px;
  }
  .text_p{
    padding-left: 20px;
    line-height: 5px;
    color: gray;
  }
  .text_name{
    padding-left: 20px;
    padding-top: 10px;
  }
  #num{
    width: 80%;
    margin: auto;
    margin-left: 20px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid gray;
    line-height: 5px;
    color: gray;
    padding-left: 30px;
    font-size: medium;
    font-weight: bolder;
    color: black;
  }
  #checkbox{
    margin-left: 20px;
    margin-top: 30px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid gray;
  }
  #terms_flex{
    display: flex;
  }
  .terms{
    padding-top: 10px;
    font-weight: 300;
    padding-left: 10px;
  }
  #otpsubmit{
    margin-left: 20px;
    width: 90%;
    height: 50px;
    border-radius: 20px;
    border: 1px solid gray;
    background-color: #00d290;
    color: white;
    font-size: medium;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  /* OTP Popup */
  #accountpage{
    margin-left: 20px;
    width: 90%;
    height: 50px;
    border-radius: 20px;
    border: 1px solid gray;
    background-color: #00d290;
    color: white;
    font-size: medium;
    font-weight: bolder;
    margin-bottom: 20px;
  }
  #enterotp{
    padding-left: 20px;
    padding-top: 10px;
    color: gray;
  }
  #otpgrid{
    margin-left: 20px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
  #otpgrid>input{
    width: 100%;
    margin-bottom: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: x-large;
    font-weight: bolder;
    color: black;
  }
  .form-otp {
    display: none;
    width: 30%;
    margin: auto;
    border: 3px solid #f1f1f1;    
    margin-top: 100px;
    border-radius: 20px;
    margin-bottom: 30px;
   font-family: "Poppins", sans-serif;
  }
  #cancel_otp{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid white;   
    background-color: white; 
    margin-left: 300px;
    cursor: pointer;
    font-size: larger;
    font-weight: bolder;
    margin-top: 3px;
    color: black;
  }
 #accountpage > a{
      color: white;
  }
  #nav_account{
    width: 60px;
    height: 100%;
    margin-left: 30px;
}
#icon_profile{
    width: 40%;
    height: 35%;
    font-weight: 200;
    color: gray;
    margin-top: 10px;
    margin-left: 15px;
    cursor: pointer;
}
#icon_profile:hover{
    color: #00d290;
}
#icon3{
    height: 20%;
    width: 100%;
    padding-top: 0px;
    padding-left: 7px;
   font-family: "Poppins", sans-serif;
    font-size: small;
}
#icon3:hover{
    color: #00d290;
}     
      
    </style>
    
</head>
<body>
    <!-- navbar -->
        <div id="Mnavbar">
           <div id="navb">
    <a href="../homepage/homepage.html"><img id="nav_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png"></a>
    
    <img id="nav_location" src="http://127.0.0.1:5500/images/location.png">
    <div id = "tit">
    <h4 id="title1">Dunzo for Partners</h4>
    <h4 id="title2">Business with Dunzo </h4>
    </div>
    <div id="nav_search">
        <img id="icon_search" src="data:image/png;base64,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">
        <p id="icon1">Search</p>
    </div>
    <div id="nav_cart">
     <img id="icon_cart" src="data:image/png;base64,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">
     <p id="icon2">Cart</p>
     
    </div>
    <div><button id="nav_signin">Sign in</button></div>
    </div>
    
        </div>

        <!-- navyBlue -->
        <div id="Mnavy">
            <img id="navy_icon" src="http://127.0.0.1:5500/images/HomeIcon.png">
            <div id="Mnavy-text">
                <h3 class="navy_text1">Order Paan items, munchies and much more on our new Dunzo Mo app</h3>
            <h3 class="navy_text2">Download Dunzo Mo app now ></h3>
            </div>
        </div>
<!-- Login Popup -->
        <div class="form-popup" id="myForm">
            <button id="cancel" type="button" class="btn cancel">X</button>
            <img id="login_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/signin-icon-cb6e6a706f01b84896e60235a2392ac9.png">
            <form class="form-container">
              <h2 class="text_sign">Sign in</h2>
              <p class="text_p">Get Started with DUNZO</p>
          
             <p class="text_name">*Enter your phone number</p>
             <br>
             <input id="num" type="number" placeholder="+91 Mobile Number">
             <br>
             <div id="terms_flex">
              <input id="checkbox" type="checkbox">
              <h4 class="terms">I accept the Terms of Use & Privacy Policy  |  View T&C</h4>
             </div>
             <button id="otpsubmit">Send OTP</button>
            </form>
          </div>

          <!-- OTP Popup -->
          <div class="form-otp" id="myOTP">
            <button id="cancel_otp" type="button" class="btn cancel">X</button>
            <img id="login_img" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/signin-icon-cb6e6a706f01b84896e60235a2392ac9.png">
            <form class="form-container">
              <h2 class="text_sign">Sign in</h2>
              <p class="text_p">Get Started with DUNZO</p>
          
              <h4 id="enterotp">Enter the OTP</h4>
              <div id="otpgrid">
                <input type="number">
                <input type="number">
                <input type="number">
                <input type="number">
                <input type="number">
                <input type="number">
              </div>
              <a href="homepage.html"><button id="accountpage">Verify and Continue</a></button>
             </form>
        </div>
    <div id="hed">
        <p id="home1">Home -> Hyderabad</p>
        <div id="inhed">
            <div id="imgd">
            <img id="img" src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/grocery.png?tr=w-88,h-88,cm-pad_resize" alt="">
        
        </div>
        <div id="con">
        <h2>Groceries & Essentials in Hyderabad</h2>
        <p>42 Stores</p>
        </div>
        </div>
    </div>
    <div id="data"></div>
    <div id="footer">
        <div id="footer_index">
    <h4 id="footer_h4">You can't stop time, but you can save it!</h4>
    <p id="footer_p">Living in the city, there is never enough time to shop for groceries, pick-up
        supplies, grab food and wade through traffic on the way back home. How about we take care of 
        all of the above for you? what if you can give all that time back? Send packages across the city
        and get everything from food, groceries, medicines, and pet supplies delivered right to your doorstep. 
        From any share to your door, just make a list and we'll make it disappear. Just Dunzo It!</p>
</div>
<div id="line"></div>
<div id="footer_end">
    <div id="footer_logo">
        <img id="dunzo_logo" src="http://127.0.0.1:5500/images/Dunzo_Footer_logo.png">
    </div>
    <div id="footer_dunzo">
        <h4>DUNZO</h4>
        <a href="#"><p id = "fot">About</p></a>
        <a href="#"><p id = "fot">Jobs</p></a>
        <a href="#"><p id = "fot">Contact</p></a>
        <a href="#"><p id = "fot">Terms & Condition</p></a>
        <a href="#"><p id = "fot">Privacy Policy</p></a>
        <a href="#"><p id = "fot">Dunzo for partners</p></a>
        <a href="#"><p id = "fot">Dunzo for business</p></a>
    </div>
    <div id="footer_service">
        <h4>SERVICABLE CITIES</h4>
        <a href="https://www.google.com/maps"><p id = "fot">Bangalore</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">Pune</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">Gurgaon</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">Hyderabad</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">New Delhi</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">Chennai</p></a>
        <a href="https://www.google.com/maps"><p id = "fot">Mumbai</p></a>
    </div>
    <div id="footer_getin">
        <h4>GET IN TOUCH</h4>
        <a href="#"><p id = "fot">Email</p></a>
        <a href="#"><p id = "fot">Twitter</p></a>
        <a href="#"><p id = "fot">Facebook</p></a>
        <a href="#"><p id = "fot">Instagram</p></a>
        <a href="#"><p id = "fot">Linkedin</p></a>
    </div>
    <div id="footer_scooty">
        <img id="scooty" src="http://127.0.0.1:5500/images/ScooterBoy.png">
    </div>
</div>
    </div>
</body>
</html>
    <script>
//Login Popup
var openLogin = document.getElementById('nav_signin').addEventListener('click', openForm);
var closeLogin = document.getElementById('cancel').addEventListener('click', closeForm);

function openForm() {
    
  document.getElementById("myForm").style.display = "block";
  document.getElementById('MmainImg').style.display = "none";
  document.getElementById('Mgrid1').style.display = "none";
  document.getElementById('Mgrid2').style.display = "none";
  document.getElementById('Mmobile').style.display = "none";
}
function closeForm() {
  document.getElementById("myForm").style.display = 'none';
  document.getElementById('MmainImg').style.display = "block";
  document.getElementById('Mgrid1').style.display = "block";
  document.getElementById('Mgrid2').style.display = "block";
  document.getElementById('Mmobile').style.display = "block";
}


//OTP Popup
var enterotp = document.getElementById('otpsubmit').addEventListener('click', enterOtp);
var cancelorp = document.getElementById('cancel_otp').addEventListener('click', submitForm);

function enterOtp(){
  document.getElementById("myForm").innerHTML = null;
  document.getElementById("myOTP").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById('MmainImg').style.display = "none";
  document.getElementById('Mgrid1').style.display = "none";
  document.getElementById('Mgrid2').style.display = "none";
  document.getElementById('Mmobile').style.display = "none";
}

function submitForm(){
  document.getElementById("myForm").style.display = 'none';
  document.getElementById("myOTP").style.display = "none";
  document.getElementById('MmainImg').style.display = "block";
  document.getElementById('Mgrid1').style.display = "block";
  document.getElementById('Mgrid2').style.display = "block";
  document.getElementById('Mmobile').style.display = "block";
}
var openbiss = document.getElementById('title2').addEventListener('click', openForm1);
var closebiss = document.getElementById('cancel1').addEventListener('click', closeForm1);
function openForm1() {    
  document.getElementById("myForm1").style.display = "block";
}
function closeForm1() {
  document.getElementById("myForm1").style.display = 'none';
}

var openserch = document.getElementById('nav_search').addEventListener('click', openForm2);
var closesecrh = document.getElementById('cancel2').addEventListener('click', closeForm2);
function openForm2() {    
  document.getElementById("myForm2").style.display = "block";
}
function closeForm2() {
  document.getElementById("myForm2").style.display = 'none';
}

var cartopen = document.getElementById('nav_cart').addEventListener('click', openForm3);
var cartclose = document.getElementById('cancel3').addEventListener('click', closeForm3);
function openForm3() {    
  document.getElementById("myForm3").style.display = "block";
}
function closeForm3() {
  document.getElementById("myForm3").style.display = 'none';
}

    </script>
    `);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
app.post('/orders/groceries', async (req, res) => {
  try {
    const post = await User.create(req.body);
    return res.status(201).send(post);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
const postSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: false, default: 'Male' },
});
const Post = mongoose.model('posts', postSchema);

app.post('/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send(post);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.listen(port, async () => {
  try {
    await connect();
    console.log('Listening on port on :', port);
  } catch (e) {
    console.log(e.message);
  }
});
