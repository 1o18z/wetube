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
-> 구글이나 네이버에서 뭔가를 검색할 때, 그 검색어가 주소창에 포함되어 있을 거임 (비디오 검색하거나 할 때 사용)
‣ POST는 언제 쓸까?  
-> 파일 보내거나 database에 있는 값을 바꾸는 뭔가를 보낼 때 사용  
(웹사이트에 로그인 할 때도 POST 사용)  


## • edit.pug  
‣ input에 name을 넣어주지 않으면 req.body에서 데이터를 볼 수 없다.  

