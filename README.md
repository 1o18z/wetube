# wetube
## Wetube Clone built using NodeJS, Express, Mongo and ES6🌈🧚🏻‍♀️

---
&nbsp;
## • json

‣ json은 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나이다. 
(= node.js의 정보 저장)  
‣ nodeJS의 json 이름은 무조건 package.json이다.  
→ package.json은 그냥 텍스트 파일이므로 수정해도 괜찮음  
‣ npm i를 실행할 때는 package.json을 닫고 실행하는 걸 권장한다.  
(npm이 자동으로 package.json을 수정해서 에러가 날 수도)

• main : 프로젝트의 대표 파일이 무엇인지 알려주는 것  
• scripts : 실행하고 싶은 것  
• dependencies : 내 프로젝트를 사용하기 위해 필수적으로 있어야 하는 것  
• devDependencies : dependencies는 프로젝트를 위한 거라면 devDependencies는 개발자를 위한 것  
(개발을 더 편리하게 하기 위한)

## • node_modules  
‣ npm으로 설치한 모든 패키지가 저장되는 곳이다. 

## • package-lock.json
‣ 패키지가 수정됐는지 해시값으로 체크해주고 안전하게 관리해준다.

‣ node_modules 과 package-lock.json 지우고 npm i 실행하면 다시 설치되니 지워져도 걱정 놉!

## • babel  
‣ 우리가 작성한 최신 자바스크립트를 모두가 이해할 수 있는 안정된 자바스크립트로 바꿔준다. 

## • babel.config.json  
‣ preset : babel을 위한 엄청 거대한 플러그인  
→ 가장 유명한 건 preset-env : 최신 자바스크립트 구문 사용할 수 있게 해줌

## • server
‣ 24시간 내내 온라인에 연결된 컴퓨터라 할 수 있음!  
‣ 항상 우리를 listening하고 있어야 한다.  

## • callback  
‣ 서버가 시작될 때 작동하는 함수이다.  
‣ callback 작성하기 전에 서버에게 어떤 포트를 listening할지 얘기해 줘야 한다.

## • GET 
‣ HTTP method

## • http request
‣ 웹사이트에 접속하고 서버에 정보를 보내는 방법이다.

## • middleware  
‣ 중간에 있는 소프트웨어  
‣ middleware는 request와 response 사이에 존재한다.  
(= 브라우저가 request한 다음, 응답하기 전)  
‣ 모든 controller는 middleware  
‣ 하나의 url에만 쓸 수도 있고 모든 url에 쓸 수도 있다.

## • app.use  
‣ global middleware를 만들 수 있게 해준다.  
  (어느 URL에서도 작동하는 middleware)  
‣ app.use 가 app.get보다 뒤에 오면 middleware가 작동하지 않는다.  
‣ app.use를 위에다 두면 모든 route에 적용된다.

## • morgan  
‣ morgan 함수를 호출하면, 내가 설정한 대로 middleware를 return 해준다.  
‣ morgan은 GET, path, status code 이 모든 정보를 가지고 있다.  

## • Router
‣ 컨트롤러와 URL의 관리를 쉽게 해준다.  
(= 미니 어플리케이션 만들어 줌)


## • export
‣ 파일은 한 가지 default export 밖에 가질 수 없다.

## • pug
‣ pug는 템플릿 엔진  
(= 템플릿을 이용해 뷰를 만드는 걸 도움)  
‣ 파일을 받아서 모두 체크하고 자바스크립트를 실행한다.  
‣ 깔끔한 html을 작성하도록 해준다.  
‣ 우리의 html에 자바스크립트를 포함시킬 수 있다.  
‣ 우리가 반복하지 않아도 한 파일로 모든 템플릿을 업데이트 할 수 있다.  
태그를 쓰지 않아도 띄어쓰기와 탭으로 구분 된다.    
‣ express는 이미 템플릿을 렌더링하도록 설정되어 있으므로 res.render을 이용해 pug 파일의 이름을 전해주면 된다.  
(-> const hi = (req,res) => res.render("파일이름"));  
‣ server.js의 @줄을 통해 pug의 경로 지정해준다.  
(= 렌더링할 때 찾아야 할 경로)    

ex) title pageTitle 이렇게 쓰면 그냥 텍스트가 되지만, title=pageTitle이라 쓰면 변수로 인식  
(-> 하지만 다른 text와 섞어서 쓸 때는 #{pageTitle} 사용)

## • Iteration  
‣ elements의 list를 보여준다.  
(each in 이런거. 댓글, 비디오 등 리스트 보여줄 때 사용)  
‣ in 다음에 오는 변수는 컨트롤러의 변수 이름과 같아야 한다.  

## • Mixin
‣ mixin은 partial이긴 한데 데이터를 받을 수 있는 partial  
(= 똑똑한 partial)  
‣ 반복해서 등장하는 HTML 블록이 필요하고, 블록 형태를 지니지만 서로 다른 데이터를 가져야 할 때 사용한다.

## • watch.pug  
‣ watch.pug의 a(href="/edit") 줄에서, 그냥 edit을 쓰면 /videos/edit으로 이동하고, /edit을 써야 /edit으로 이동한다.  
=> absolute와 relative url의 차이점  
앞에 /를 넣으면, 내가 어디든 상관 없이 root경로 + /edit,  
/를 지우면 relative url이 된다. (현재 경로 뒤에 /edit이 붙음)    

ex) 예를 들어  a(href=`${video.id}/edit`)라고 쓰면 localhost:4000/videos/3/edit 로 이동하고, a(href=`/${video.id}/edit`)라고 쓰면 localhost:4000/3/edit 로 이동 

(=> 기본값으로 method="GET")  
‣ GET은 언제 쓸까?  
-> 구글이나 네이버에서 뭔가를 검색할 때, 그 검색어가 주소창에 포함되어 있을 거임   
(비디오 검색하거나 할 때 사용)  
‣ POST는 언제 쓸까?  
-> 파일 보내거나 database에 있는 값을 바꾸는 뭔가를 보낼 때 사용  
(웹사이트에 로그인 할 때도 POST 사용)  


## • edit.pug  
‣ input에 name을 넣어주지 않으면 req.body에서 데이터를 볼 수 없다.  

## • MongoDB  
‣ 간단하게 작동시킬 수 있고 초보자들도 사용 가능  
문서기반이다.(document-based database)  
‣ database도 object로 생각한다.  
‣ JSON-like-document로 저장할 수 있기 때문에, 초심자들도 사용하기 쉽다.  


## • Mongoose  
‣ node.js와 mongoDB를 이어주는 다리 역할  
(javascript로 적으면, mongoose가 mongoDB에게 전달해줌)  
‣ mongoDB와 상호작용하기 위해 mongoose 사용

‣ on과 once의 차이점  
-> on은 여러번 계속 발생시킬 수 있다. (클릭같은 이벤트)  
->once는 오로지 한번만 발생한다.  

## • callback 
‣ 무언가가 발생하고 난 다음 호출되는 function을 말한다.  
‣ callback을 사용하면 아무것도 return 되지 않아야 한다.  

ex) 예를 들어 아래의 코드를 실행시키면
```
export const home = (req, res) =>{
  console.log("One")
  Video.find({}, (error, videos) => {
    console.log("Two")
  });
    console.log("Three");
}
```
```  
One
Three
Two
``` 
위처럼 출력이 되는 걸 보아, callback은 특정 코드를 마지막에 실행되게 할 수 있다.   
(= javascript는 기다리는 기능이 없다. 위에서부터 순서대로 실행한 건데 작업별로 시간이 달라서 순서가 바뀌는 거) 

## • promise 
‣ callback의 최신 버전이라 볼 수 있다.  
‣ await를 앞에 적으면, find는 내가 callback을 필요로 하지 않는다는 걸 알게 된다.  
-> 따라서 find는 찾아낸 비디오를 바로 출력해준다.  

## • await  
‣ await가 database를 기다려 준다.  
‣ async와 await는 javascript가 어디서 어떻게 기다리는지 바로 알 수 있다.   
‣ 코드 규칙상 await는 function 안에서만 사용이 가능하고, 해당 function이 asynchronous일 때만 가능하다.  
(=> 그래서 앞에 async라고 써줌)  
‣ await에서 에러가 생기면 다 날아가 버리고 아무것도 실행되지 않는다.  

## • create  
```
 const video = new Video({
        title,
        description,
        createAt: Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta:{
            views:0,
            rating:0,
        },
    });
    await video.save();
    return res.redirect("/");
```
위 코드와 아래 코드와 같다.  
```
await Video.create({
        title,
        description,
        createAt: Date.now(),
        hashtags: hashtags.split(",").map((word) => `#${word}`),
        meta:{
            views:0,
            rating:0,
        },
    });
    return res.redirect("/");
})
```
-> 아래 코드는 위 코드와 기능은 같지만 javascript object를 만드는 과정을 우리가 하지 않아도 된다. (자동으로 해줌)  
(=> 즉, 방식은 save와 create 방식 두 가지가 있다.)  

## • maxLength, minLength  
‣ upload.pug의 input의 max/minLength은 사용자를 위한 거고,  
Video.js의 max/minLength는 database를 위한 거로 둘 다 해줘야 한다.  

## • exists  
‣ videoControlller.js의 postEdit 부분의 findById를 exists로 변경  
( => video object를 받는 대신 true, false를 받겠다는 것)   
-> postEdit에서는 단순히 영상이 존재하는지만 확인하면 되기 때문에 exists로 id를 받지 않고, filter를 받아 존재 여부를 판단한다.     
‣ 그럼 getEdit도 exists로 받는게 좋을까?  
-> getEdit은 object를 통해 edit template로 보내줘야 하기 때문에 video object가 필요하므로 findById()가 더 적합하다.  

## • middleware  
‣ middleware는 무조건 model이 생성되기 전에 만들어야 한다.    

## • db 내용 삭제
-> [cmd]  
‣  mongosh  
‣  use wetube  
‣  db.videos.remove({})  

form 내용은 req.body
id는 req.params 
URL의 정보는 req.query

## • schema  
‣ schema는 validation을 위한 모든 것   
‣ static function과 middleware를 생성해서 쓸 수 있다.  

## • DeprecationWarning
‣ 에러 아님!! 경고!!  
‣ 오래된 기능을 쓰고 있으니까 업데이트 하라고 알려주는 경고  
(여기서는 userController에서 unique:true 써서 경고 뜸)  
‣ 꼭 고칠 필요는 없지만 경고 뜨지 않게 하려고 db.js에 useCreateIndex:true 추가함 (새로운 버전 추가하는 코드)

## • session  
‣ 세션은 서버측에서 제공해주는 데이터
(= 브라우저를 기억하는 방식 중 하나)  
‣ 백엔드와 브라우저가 서로 정보를 알고 있어야 한다.  
‣ router 앞에 초기화  
‣ 서버 종료했다가 재시작하면 세션 다 사라진다.  
-> express가 세션을 메모리에 저장하고 있어서(계속 잊어버림)   
‣ 브라우저마다 서로 다른 세션  


## • session middleware  
‣ store라는 옵션 존재  
(-> default로 설정된 것과는 다른 store를 설정할 수 있다는)
 

❥ middleware는 express-session라는 모듈로부터 주어진다.  
❥ middleware는 브라우저가 우리의 backend와 상호작용할 때마다 session이라는 middleware가 브라우저에 cookie를 전송한다.  
❥ cookie는 backend가 내 브라우저에 주는 정보로, 정해진 규칙이 있어서 매번 backend에 request 할 때 브라우저는 알아서 그 request에 cookie를 덧붙인다.(때문에 내가 따로할 것은 없음)  
❥ 브라우저는 cookie로 뭘 할지, 어디에 넣을지 다 알고있다.  
❥ 브라우저는 우리가 매번 backend localhost에 있는 URL로 request를 보낼 때마다 cookie가 request랑 같이 전송된다.

## • cookie  
‣ 클라이언트측에서 저장하고 사용하는 데이터  
‣ cookie에는 어떤 정보든 넣을 수 있다.   
‣ cookie를 받고 보내는 과정에서 사용자는 아무것도 안 해도 된다.(자동적으로 해줌)  
‣ session ID는 cookie에 저장되지만 session data는 서버 쪽에 저장된다.  
‣ 서버에 저장되는 default session storage는 실제 사용하기 위해 있는 건 아니고 MemoryStore이다.  
‣ 아무리 삭제해도 새로고침 할 때마다 쿠키는 새로 생성됨!!  
‣ 사용자에게 쿠키를 주고, session은 DB에 저장

## • session store  
‣ 우리가 session을 저장하는 곳  
‣ 우리가 매번 코드를 저장하면 서버 재시작 되는데, session store는 사라짐  
(테스트를 위한 저장소)


### ‣ 그럼 session은 어떻게 만들까??  
=> 브라우저가 우리의 backend를 방문할 때 만들어진다.    
(페이지 새로고침하고 터미널에 db.sessions.find({}) 입력하면 session이 생긴거 확인 가능)  
-> db.js에 'store: MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/wetube"})'를 추가했는데, 이로 인해 이제 서버를 재시작 해도 DB에 기억되어짐(로그인 상태 유지)!!!!! 와우  
=> 왜냐면 더이상 로그인 정보가 서버에 있지 않고 MongoDB에 있어서!!  
(mongoDB의 store 옵션 하나로 세션이 서버에 저장될지 mongoDB에 저장될지 결정 되는게 너무 신기하당.. store 옵션 지우면 재시작 할 때마다 메모리 지워짐!!)

### • resave & saveUninitialized  
‣ 새로운 세션이 있는데, 수정된 적 없으면 uninitialized(초기화되지 않은)  
‣ session은 한 곳에서만 수정 가능   
-> userController의
```
req.session.loggedIn = true;
req.session.user = user;
``` 
위 두 줄이 우리가 실제로 session을 initialize(초기화)하는 부분  
‣ sever.js에 resave와 saveUninitialized를 false로 해서 이제 backend가 로그인한 사용자에게만 cookie를 주도록 설정됐다.

### • cookie의 property  
‣ secret : 우리가 cookie에 sign할 때 사용하는 string  
(쿠키에 sign하는 이유? 우리 backend가 cookie를 줬다는 걸 보여주기 위함)  
secret은 string으로 작성하는데 쓸 때는 길고 어렵게 만들어야 한다.  
-> 이 string을 가지고 cookie를 sign하고 우리가 만든 것임을 증명할 수 있음  

‣ Domain : 이 cookie를 만든 backend가 누구인지 알려준다.  
브라우저는 Domain에 따라 cookie를 저장하도록 되어 있고,  
cookie는 Domain에 있는 backend로만 전송된다.  
(Domain은 cookie가 어디서 왔는지, 어디로 가야하는지 알려줌)  

‣ path : 단순히 url  

‣ Expires : HTTP 타임스탬프로 기록된 cookie의 최대 생존 시간(수명)   
-> 만료 날짜를 지정하지 않으면 sessoin cookie로 설정되고, 컴퓨터를 재시작 하거나 프로그램을 종료하면 session이 사라짐  

‣ Max-Age : session이 언제 만료되는지(얼마동안 유지할지) 알려주는 것  
-> server.js의 session 옵션에 cookie를 이용해 변경 가능  
ex) cookie:{ maxAge: 20000} 이라하면, 20초 뒤에 session 삭제


### • secret & store  
‣ 다른 사람이 보면 안됨(보안 위험)  
-> .env 파일을 만들어서 비밀로 해야하는 API key, url 등을 넣어줌

### • dotenv  
‣ .env 파일을 읽고, 각각의 변수들을 process.env 안에 넣는다.  
‣ 파이썬, 자바스크립트 외에 다른 언어로도 구현되어 있다.  
-> require("dotenv").config(); 이 줄은 최대한 가장 먼저 추가해줘야 한다.  
(추가하고 콘솔로 secret이랑 url 찍어보니까 undefined가 안 뜨고 .env 파일에 적어준 내용이 출력됨!!)  

-> server.js에 require("dotenv").config() 추가하고 콘솔 찍으니까 적은 내용이 잘 출력됐는데, 'db.js에 DB_URL이 없다'는 에러가 출력 됐다  
-> 그래서 db.js에서 콘솔 찍었는데도 작동하지 않음 (undefined가 나옴)  
=> 이유는?! require("dotenv").config()를 가장 먼저 실행하지 않아서다!!  
-> 맨 윗줄에 적었는데 무슨 소리지?  
-> package.json 파일에 scripts의 dev를 보면, 프로그램을 실행했을 때 init.js가 가장 먼저 실행되게 되어있다  
-> 그래서 require("dotenv").config()를 init.js의 맨 윗줄로 옮겨줬더니 해결! 되어야 하지만 아직도 작동되지 않는다  
-> import 방식이 달라서 그럼 (require이나 import 두 종류로 import 해서)  
(require 방식을 사용하고 싶으면 dotenv를 사용하고 싶은 모든 파일에 require을 추가해야 한다 -> 너무 번거로움)  
=> require 방식을 import로 수정!   
=> import "dotenv/config"   
=>> 해결!!!  

### • scope (로그인 중 github 가져올 때 사용)
‣ User에게서 얼마나 많이 정보를 읽어내고 어떤 정보를 가져올 것에 대한 것  
‣ 내가 어떤 정보를 요청하느냐에 따라 user는 승인을 받게 되고 github는 나에게 정보를 접근할 수 있는 토큰을 준다.  

### • fetch  
‣ fetch('url')로 다른 서버를 통해 데이터를 가져올 수 있다.  
(하지만 res.body에 담겨있는 날 것의 url로는 제대로 된 객체 받아올 수 X)  
-> 그래서 .json 함수가 response의 스트림을 가져와 끝까지 읽고, res.body의 텍스트를 promise의 형태로 반환한다.    
(promise는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용)  
-> 다른 서버에서 데이터를 가져와 object 형식으로 받아온다.  
ex) {"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]  

### • fetch 
‣ 우리는 fetch가 필요한데 fetch는 서버엔 없고 브라우저에만 존재하니까 node-fetch라는 패키지 사용

### • Multer    
‣ 우리가 파일을 업로드할 수 있게 해준다.  
-> editProfile.pug의 form에 enctype="multipart/form-data"추가  
(= 우리 form이 다르게 encode될 거란 의미.  
써주지 않으면 multer 제대로 작동 놉!)  
=> 이게 파일을 백엔드로 보내기 위해 필요한 encoding type(enctype) 

‣ userRouter.js
```
userRouter.route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadFiles.single("avatar"), postEdit);
```
-> 사용자가 /edit으로 form을 보내면 input으로 avatar 파일 하나 받아서 그 폴더를 uploads 폴더에 저장한 다음에 그 파일 정보를 postEdit에 전달  
(middleware는 사진을 시스템에 저장하고, req.file을 추가할건데,  
그러고 나서 controller 실행시키면 req.file과 req.body 사용 가능)  

=> req.file을 사용할 수 있는 이유는 postEdit 전에 Multer을 사용해서!!

### • 절대! DB에는! 파일을! 저장하지! 않는다!  
‣ 파일의 위치를 저장!!

### • static files serving  
‣ 폴더 전체를 브라우저에게 노출 시킨다는 의미이다.  
-> app.use("/주소", express.static("오픈할 폴더 이름")); 

### • ObjectId  
‣ mongoose에서만 가능한 타입  
-> models/Video.js에서 쓰기 위해 owner에 type: mongoose.Schema.Types.ObjectId로 작성  
-> 여기서 ObjectId는 db.videos.find({})로 나오는 owner의 타입으로, video와 user를 연결시키기 위해 사용  
(video에 user(owner) 정보 넣기 위해)  

-> owner에 reference 추가 : 위 object ID가 model user에서 온다고 알려주는 것  
=> ref: "User"  
-> 여기서 User는 models/User.js의 User  

### • populate  
‣ videoController.js의 watch의 Video.findeById에 populate("owner")을 추가했더니, video의 owner가 user의 id만이 아닌 user의 모든 정보를 보여준다.  
(mongoose가 video를 찾고, 그 안에서 owner도 찾음)  
-> mongoose는 owner가 object ID인걸 알고, id가 User에서 온 걸 알고있음  
=> populate로 여러 줄의 코드를 한 줄로 줄여버림!! mongoose relationship!! 짱  

### • isModified
-> video를 upload하면 save()가 실행되어 비밀번호를 hash함  
(이미 hash가 되어있는 password를 또 hash함   
-> 그래서 video 업로드한 후 로그아웃하고 다시 로그인하면 로그인이 안됨!)  
-> User.js에 if(this.isModified("password")) 조건 추가해서 password가 변경될 때만 hash되도록 함  
=> 이거로 문제 하나 해결!  

### • 문제 해결
-> video 수정과 삭제를 video 올린 user만 가능하게 하고싶음!  
-> videoController.js의 getEdit에 로그인한 user id와 video 업로드한 owner가 같아야 한다는 조건문 추가  
-> 조건문은 실행 되지만 user id와 owner가 같은데도 else문이 실행 되어버림  
-> 콘솔 찍어보면 두 개가 타입이 다르다는 걸 확인 가능 (owner은 object인데 user if는 string)  
-> 그래서 String으로 둘 다 감싸줘서 string으로 만듦   
-> 이거로 문제 둘 해결!! (postEdit과 deleteVideo에도 추가함)  
=> 여기에는 populate 추가 안 한 이유 : 모든 user 정보가 필요하지 않고 id만 필요해서  


### • webpack  
``` npm i webpack webpack-cli -D```  
‣ webpack에는 소스 파일들이 있고, 우리 파일들을 바꿔준다.  
ex) JS를 옛날 JS 코드로 바꿔줌  
‣ 대부분의 프레임워크들은 자체 webpack 설정이 내제되어 있어서 웬만하면 webpack 다룰 일 거의 아예 없을 거!!

‣ entry : 우리가 처리하고자 (변경하고자) 하는 파일들  
‣ output: 결과물  
‣ filename : 우리 결과물이 될 파일 이름  
‣ path: 우리 결과물이 저장될 경로 (절대경로여야 함!)  
‣ watch : 변경사항 발생해도 자동으로 refresh, compile 해줌!  
(매번 assets 파일 삭제하고 npm run assets 실행하는 번거로움 해결)   
-> 이게 의미하는 건 콘솔은 꼭 동시에 두 개 실행해야 한다는 것!! (backend n frontend)  
‣ clean : true하면 ouput 폴더를 build 전에 clean 해줌

### • rules  
‣ 우리가 각각의 파일 종류에 따라 어떤 전환을 할건지 결정하는 것

### • webpack.config.js 
‣ 모든 webpack.config.js 파일은 동일한 구조 가짐  
-> 여기까지는 완벽히 이해하고 있어야 함  
```
module.exports = {
    entry: "./src/client/js/main.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "assets", "js"),  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {}]],
                    },
                },
            },
        ],
    },
};
```
=> 이 파일이 하는 일은 entry의 파일을 가지고 코드에 따라 변형  
-> webpack이 어떻게 처리할지 알려줘야 하는데, 그걸 rule에서 처리    

### • MiniCssExtractPlugin  
‣ 해당 코드를 다른 파일로 분리시켜준다.  
( css를 추출해서 별도의 파일로 만들어줌 )  
‣ output의 path에 따라 파일의 저장위치가 저장된다.  


### • 문제 해결  
-> webpack.config.js에 watch: true 추가해서 npm run assets (프론트)이 자동으로 refresh, compile되게 해줬는데, 백엔드도 같이 재시작 되어버림!  
(nodemon이 파일을 저장하는 줄 알고 재시작하는 거!!)   
-> 해결 방법 두 가지 있음
1. package.json에 명령문을 작성해서 실행하는 것
2. 설정파일을 생성하는 것  
-> 1번은 너무 길어질 것 같으니 2번 채택  
-> nodemon.json 파일 생성해서 아래 코드 추가
```
  "ignore": ["webpack.config.js", "src/client/*", "assets/*],
  "exec": "babel-node src/init.js"
```
-> package.json의 scripts: dev를 nodemon만 호출하도록 변경  
(= nodemon이 자동적으로 nodemon.json을 호출)  
=> 해결!!  

(package.json의 scripts: assets도 webpack만 써도 잘 작동함!  
-> webpack.config.js파일이 webpack 실행될 때 기본적으로 찾는 설정파일이라)  

### • 코멘트  
‣ // 이거는 소스코드에서 볼 수 있음  
(이 코멘트는 pug에서 코멘트 처리되어 html코멘트로 바뀜)  
-> 모든 사람에게 보여짐  
(=> 브라우저에서는 보이지 않지만 웹사이트를 inspect하면 볼 수 있음)
‣ //- 이거는 프론트엔드에서 볼 수 없음  
-> pug 파일에 액세스를 가지고 있는 사람에게 보여짐 

### • pause  
‣ 이벤트 리스너 중 하나로, 정지시키는 거  
(play도 있음)  

### • metadata (video object의 event)  
‣ video 빼고 모든 것  
-> 비디오의 소리, 가로세로 크기, 등 움직이는 이미지를 제외한 모든 것  

### • API
‣ 프론트엔드와 백엔드가 서버를 통해 통신하는 방법  

### • data Attribute  
‣ data-로 시작하는 속성  
-> 어떤 것이든 저장 가능 (HTML specification과도 문제 X)  
‣ 자바스크립트 데이터에 쉽게 접근 가능  
‣ HTML element 저장 가능  

### • 문제 해결  
-> video 끝났을 때 fetch 이용해 백엔드에 요청 보내는데 게속 pending으로 뜸 (server랑 Controller, Router 다 작성함!)  
-> 이유 : return res.status(404); 이렇게만 써서 (응답에 상태 코드를 추가만 해서 아무것도 return 하지 않음)   
-> status 대신 sendStatus사용  
(return res.sendStatus(404);)   
이렇게 해야 연결 끝낼 수 있음!  
-> status 200 받음 해결!! 

### • status()과 sendStatus() 
‣ status() : render()하기 전에 상태 코드를 정할 수 있는 것  
‣ sendStatus() : 상태 코드를 보내고 연결을 끝내는 것  

### • MediaRecorder  
‣ 비디오든 오디오든 녹화하고 싶은 모든 걸 녹화  
‣ dataavailable event : 저장된 데이터의 최종 video 담음  
‣ stream : 우리가 어딘가에 넣어둘 0과 1로 이루어진 데이터를 의미  
‣ createObjectURL : 파일을 미리보거나 보고 싶을 때에는 해당 URL이 필요해서, 이걸 통해 video에 접근  
-> 웹사이트 상에 존재하는 URL처럼 보이지만 실제로는 X  
-> 단순히 브라우저의 메모리만 가리킴(파일 가리키는 URL). 백엔드에 없고, 껐다 키면 증발  

### • FFmpeg  
‣ 컴퓨터에 설치할 수 있는 소프트웨어  
‣ 비디오를 여러가지 포맷과 화질로 인코딩  
‣ 오디오 추출, 오디오 형식 변경, 비디오로 스크린샷, gif로 만들기 등등 가능  
‣ C 프로그램

### • WebAssembly 
‣ 기본적으로 웹사이트가 매우 빠른 코드를 실행할 수 있게 해줌 (개방형 표준)

### • ffmpeg.wasm  
‣ 위 두 개 합침  
‣ 비디오를 변환하기 위해 사용자의 컴퓨터 사용  
‣ 사용자의 브라우저에서 비디오를 변환  
(사용자(컴퓨터)의 처리능력 사용)  
‣ 비디오 찍고 Webm 파일로 저장하면 이걸 mp4로 변환하고 썸네일 추출
(모든 기기들이 webm 이해하지 못해서 변환하는 거) 
```
npm install @ffmpeg/ffmpeg @ffmpeg/core
```


