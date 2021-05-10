---
template: post
title: "[Web Basic] REST"
draft: false
priority: 0
date: 2021-01-21
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - Basic
---

# REST

HTTP를 정리했으니 정말정말 매우매우 중요한 REST 개념을 정리해볼까?

웹 프로그래밍에 대해 얘기하다보면 정말로 많이 나오는 단어인데 정작 정확한 개념을 정리하지 못했다... 누군가 REST api가 뭐냐고 물어보면 적어도 설명은 할 수 있어야 하지 않을까 싶은 마음에 오늘은 기필코 가장 쉽고 명확하게 정리를 해볼까 싶다.

<br/>

### REST란?

REST : REpresentational State Transfer → 대표적인 상태 전달

정말이지... 영어 해석이라 그런지 무슨 의미인지 전혀 감이 오지 않는다.

항상 쉽고 간단한 것이 최고인지라 매번 가장 쉬운 개념으로 정리해본다.

REST란, 웹에 존재하는 모든 자원(이미지, 영상, DB 자원, html)에 고유한 URI를 부여하여 활용하는 것을 의미한다.

또 쉽게 설명한 개념으로는 REST란 HTTP 통신에서 어떤 자원에 대한 CRUD 요청을 Resource와 Method로 표현하여 특정한 형태로 전달하는 방식이라고 정의할 수 있다.

이 개념에서도 알 수 있듯이 REST는 HTTP를 기반으로하는 소프트웨어 아키텍쳐 방법론으로 볼 수 있다.

실제로 REST는 2000년도 HTTP의 주요 저자 중 한 사람인 로이 필딩이 HTTP의 우수성이 제대로 활용되지 못하는 모습을 보고 웹 HTTP를 최대한 활용할 수 있는 아키텍처로 발표한 것이다.

<br/>

### REST 구성 요소

- Resource : URI. 모든 자원에는 교유한 ID가 존재하고 웹 resource의 경우 이 ID가 URI이다. Client는 URI를 통해 자원을 지정하고 서버에 요청.
- Method : 서버에 요청을 보내기 위한 방식을 말함. GET, POST, PUT, DELETE
- Representation of Resource : 데이터를 주고받는 형태를 말함. json, xml, text, rss 등등..

<br/>

### REST API

REST 기반으로 서비스 API를 구현한 것. 여기서 잠깐,

API란? : Application Programming Interface, 컴퓨터 프로그램간 상호작용을 촉진하는 인터페이스

REST API 설계 시에는 다음 2가지의 규칙을 지켜주어야 한다.

- URI는 정보의 Resource를 표현해야 한다.
- 자원에 대한 행위는 HTTP method(GET, POST, PUT, DELETE))로 표현한다.

HTTP method 4가지를 통해 CRUD가 가능하다

- POST : POST를 통해 URI를 요청하면 리소스를 생성함.
- GET : GET을 통해 해당 리소스를 조회함.
- PUT : PUT를 통해 해당 리소스를 수정함.
- DELETE : DELETE를 통해 해당 리소스를 삭제함.