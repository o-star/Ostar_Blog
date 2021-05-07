---
template: post
title: "[Web Basic] HTTP"
draft: false
priority: 0
date: 2021-01-20
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - Basic
---

# HTTP

<br/>

### HTTP란?

HTTP(Hyper Text Transfer Protocol)란 인터넷에서 데이터를 주고받을 수 있는 프로토콜을 의미한다.

주로 HTML 문서를 주고받는 용도로 사용된다. 물론 HTML 문서 뿐만 아니라 Plain text, JSON 데이터 XML 등 다양한 형태의 정보도 주고받을 수 있다.

웹 개발자라면 HTTP를 모르고선 통신을 논하기 어렵다. 또 HTTP 관련 지식은 에러를 해결하는데도 용이하다.

보통 우리는 인터넷 상에서 URL을 통해 각종 데이터에 접근하게 된다.

여기서 좀 더 구체적으로 클라이언트-서버 기준으로 통신과정을 살펴보게 되면 유저가 URL을 통해 해당 정보를 요청하게 되면 서버 측에서는 해당정보를 전달해주게 된다. 이 과정에서 사용되는 프로토콜 중 하나가 http 이다.

![image](https://user-images.githubusercontent.com/57346455/117481800-722a4b00-af9e-11eb-9327-2e38be363231.png)

<br/>

### HTTP 특징

- HTTP 메세지는 HTTP 서버와 HTTP 클라이언트에 의해 해석된다.
- HTTP는 연결 상태를 유지하지 않는 비연결성(Stateless) 프로토콜이다. -> 이런 단점을 해결하기 위해 Cookie와 Session의 개념이 등장함. 이 개념들도 꼭 한번 정리하자 !
- HTTP는 연결을 유지하지 않는 프로토콜이다 보니 요청/응답 방식으로 동작함.

<br/>

### HTTP Message Structure

HTTP 메시지를 보고서 현재 요청/응답 상태를 식별할 수 있을 정도는 되어야 하기 때문에 HTTP 메시지 구조를 익혀둘 필요가 있다.

HTTP Request 구조 (3부분으로 구성)

- Start line
- Headers
- Body

HTTP Response 구조 (3부분으로 구성)

- Status line
- Headers
- Body

<br/>

### HTTP Request Structure

Start line

- 요청 메시지의 첫 줄을 의미함.
- start line은 3부분으로 구성

```java
// start line 예시
GET /search HTTP/1.1
```

- HTTP method : 해당 요청의 요청 방식을 의미. GET, POST 등 8가지의 방식이 있음.
- Requst target : 해당 요청이 전송되는 URL (예시에서는 /search)
- HTTP version : 사용되는 HTTP version

Headers

- 해당 요청에 대한 추가 정보를 담고 있음.
- 대표적으로 자주 사용되는 Header 정보들만 정리해보자
- Host : request가 전송되는 target의 호스트 url. (ex. [google.com](http://google.com))
- User-Agent : 요청을 보내는 클라이언트에 대한 정보
- Content-Length : 메세지 body의 길이
- Content-Type : request 메세지 body의 타입. JSON 타입일 경우 application/json으로 표시됨.

```verilog
//Header 예시
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Type: application/json
Content-Length: 257
Host: google.com
User-Agent: HTTPie/0.9.3
```

Body

- 해당 리퀘스트의 실제 메시지 내용
- Body가 없는 요청 메시지도 있음! → GET Request의 경우 body가 없는 경우가 많다.

### HTTP Response Structure

status line

- Response의 상태를 간략하게 나타내주는 부분
- 이 역시 3부분으로 구성됨
- HTTP version
- Status code : 응답상태를 나타내는 코드. 숫자로 표현됨. 각 숫자별로 나타내는 응답상태가 모두 상이함.
- Status text : 응답 상태를 간략하게 설명해주는 부분

```verilog
//Status line 예시. 3부분이 띄어쓰기로 구분되어 있음
HTTP/1.1 404 Not Found
```

Header

- Request header와 동일함
- 단, header의 항목들은 Request와 Response 사이에 조금씩 다름

Body

- Request body와 동일.
- Response body 역시 무조건 존재하는 것은 아님. 전송할 데이터가 없으면 body가 없을 수 있음.

<br/>

### HTTP Method

HTTP 메소드는 클라이언트-서버 사이의 요청과 응답의 방식을 뜻하며 총 8가지의 방식이 있다. (GET, POST밖에 사용해보지 못함.. 다른 것도 꼭 알고 넘어가자)

- GET : URL이 가진 정보를 검색하기 위해 서버 측에 요청하는 방식
- POST : form에서 post를 지정하는 경우의 방식. GET 방식에서 보낼 수 없는 자료를 전송할 때 사용 가능. 데이터를 http body에 숨겨서 전송 가능
- HEAD : GET과 동일한 방식이나 HTTP header 정보만을 요청
- DELETE : URL로 지정한 서버에 있는 파일을 삭제하는 용도
- OPTIONS : 요청한 URL에 어떤 메소드를 요청할 수 있는지 확인
- TRACE : 서버측에서 받은 리퀘스트라인, 헤더를 클라이언트에게 반송
- CONNECT : 터널링의 목적으로 연결요청