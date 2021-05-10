---
template: post
title: "[Web Basic] CSR, SSR"
draft: false
priority: 0
date: 2021-05-10
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - Front-end
---

# CSR, SSR

CSR, SSR의 의미와 방식의 기본적인 구조정도는 알고 있었다.

React를 사용해왔던 나로썬 CSR 방식이 좋은 방식이라고 생각해오고만 있었다.

하지만 오늘 개념 정리를 하면서 두 방식의 장, 단점을 확실하게 알고 넘어갈 수 있었던 것 같다.

<br/>

### SSR(Server Side Rendering)

![image](https://user-images.githubusercontent.com/57346455/117650630-ea298880-b1cb-11eb-93be-ee4024d52d81.png)

SSR이란 서버 측에서 새로운 페이지에 대한 요청을 받고 HTML 파일을 내려주는 방식이다.

PHP, JSP, ASP, Node.js 등 Server-side 스크립트 언어의 템플린 엔진들을 활용하여 동적으로 웹 콘텐츠를 만든 후 클라이언트에게 해당하는 HTML 파일을 전송해주는 방식이다.

단지 주의해야할 점이 있다면 최근 React와 같은 CSR 방식의 개발 방식이 많이 사용되고 있다고 해서 SSR 방식이 예전 전통적인 개발 방식이라고 생각하면 안된다. 여전히 SSR 방식을 통해 웹페이지를 개발하고 있으며 SSR, CSR 방식이 서로 확연한 장단점을 가지고 있기 때문이다.

<br/>

### CSR(Client Side Rendering)

![image](https://user-images.githubusercontent.com/57346455/117650695-fe6d8580-b1cb-11eb-92ab-cd6e801f7372.png)

CSR 방식은 첫 요청에서 HTML과 CSS, Javascript 등 각종 리소를 한 번에 받아온 후 이후 페이지 이동 시에는 서버에 데이터만을 요청하고 응답받은 데이터를 가지고 클라이언트 측에서 Javascript를 통해 뷰를 컨트롤한다.

기존 SSR의 경우 페이지 이동 등 컨텐츠 요청 시에는 매번 서버에서 HTML 파일을 받아오기 때문에 페이지를 이동할 때 마다 깜빡이는 현상이 보인다.(새로고침하듯이) 하지만 CSR 방식의 경우 클라이언트 측에서 동적으로 필요한 부분을 리렌더링 하기 때문에 마치 앱과 같이 깜빡이는 현상 없이 바로 페이지 이동이 이뤄지는 것을 볼 수 있다.

CSR을 생각할 때에는 SPA != CSR 이라는 것을 확실하게 인식해야 한다. 두 단어의 개념이 같은 것이 아니라 SPA(Singl Page Application) 가 CSR 방식을 사용하는 것이다.

<br/>

### CSR, SSR 장단점

<table border="1px">
  <tr>
    <th></th>
    <th>장점</th>
    <th>단점</th>
  </tr>

  <tr>
    <th>CSR</th>
    <td width="400px">- 초기요청 이후 페이지 이동에서는 매우 빠른 전환 속도를 보임<br />- Server의 부하를 최소화해줌 -> Server는 필요 데이터만을 전송해줌<br /></td>
    <td>- 웹 페이지 초기 로딩 지연시간이 오래 소요됨 -> 초기 요청에서 한꺼번에 많은 리소스를 받아야하기 때문<br />- SEO(Search Engine Optimization) 문제 -> 구글의 경우 크롤러에 자바스크립트 엔진이 장착되어 있기 때문에 CSR 방식의 페이지 크롤링에 문제가 없지만 다른 검색 엔진의 경우 자바스크립트 엔진이 없어 CSR 방식의 페이지를 빈 페이지로 인식함, 크롤링 불가(자바스크립트를 해석할 수 없기 때문)</td>
  </tr>

  <tr>
    <th>SSR</th>
    <td width="300px">- 초기 로딩 속도가 빠르기 때문에 초기 요청에서 과도한 지연이 일어나지 않는다.<br />- 모든 검색엔진에서 SEO(검색엔진최적화)가 가능하다</td>
    <td>- 페이지를 요청할 때마다 새로고침되기 때문에 사용자 입장에서 페이지 이동 시 매번 웹 페이지가 깜빡이는 현상을 겪는다.<br />- 서버와 클라이언트 사이 매번 해당 페이지 리소스를 모두 요청하기 때문에 트래픽, 서버 부하를 유발할 수 있다.</td>
  </tr>
</table>
<br/>
<br/>

