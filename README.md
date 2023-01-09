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



