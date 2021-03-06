---
template: post
title: "[Web Basic] Proxy Server"
draft: false
priority: 0
date: 2021-01-18
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - Basic
---

# Proxy Server

지난 달부터 작은 토이 프로젝트를 React와 node.js를 활용해 진행해보면서 프론트와 백엔드를 연결하는 과정에서 Proxy Server에 대해 알게되었다.

그 당시, Proxy Server 개념을 확실히 정리하지 못하고 넘어간 것 같아 이번 기회에 이렇게 정리해보게 되었다.

<br/>

### Proxy Server란?

'Proxy' 라는 단어는 '대리' 라는 의미를 가지고 있듯이 말 그대로 Proxy Server는 클라이언트와 서버 사이에서 중계 대리인 역할을 수행하고 있다고 말할 수 있다.

보안상으로 직접 통신하기 어려운 두 포인트 사이의 통신을 위해 설치하는 것은 물론이고 캐시를 이용해 더 빠른 통신에 사용되기도 한다.

나는 React와 node.js를 연동하는 경우에 리액트는 3000 포트를 node.js는 3000이 아닌 다른 포트(ex.8000)를 사용하게 되면서 보안상의 이유로 차단되는 CORS 상황에서 Proxy Server를 활용해 보았다.

- CORS(Cross-Origin Resource Sharing) : 서로 다른 Origin에서 리소스를 공유할 수 있도록 하기 위해 내놓은 정책. 여기서 서로 다른 Origin이란 다른 도메인, 혹은 포트를 의미한다.

<br/>

### Proxy Server의 장점

- 데이터 전송 시간 단축 : 캐시 안의 정보들을 프록시 서버가 저장해두면서 원격 서버까지 갈 필요 없이 빠른 속도의 통신이 가능케 해 줌.
- 원격 서버로 가는 트래픽을 줄여주면서 네트워크 병목 현상을 방지할 수 있음.
- 내부 통신과 외부 데이터 접근을 통제하여 보안 유지가 가능케 해줌.
- 유저 입장에서 자신의 웹 서핑 기록을 익명화 시키기 위해 익명 웹 프록시를 이용하기도 함.

<br/>

### Proxy Server의 종류

- Forward Proxy
  - 클라이언트와 원격 서버 사이 네트워크 상에 위치한 프록시 서버이다.
  - 본 프록시 서버는 원격 서버로부터 요청된 리소스를 클라이언트에게 전달하는 역할을 수행한다. → 캐시 데이터가 있다면 원격 서버로 향하지 않고 바로 클라이언트에게 리소스 전달
  - 클라이언트는 프록시 서버를 사용하고 있다는 것을 인식할 수 있다.
  - 프록시 서버는 클라이언트가 알려주기 전까지는 서버의 주소를 알 수 없다.
- Reverse Proxy
  - 본 프록시 서버는 인터넷 리소스, 사설 네트워크 서버들 바로 앞 프론트 단에 위치시키는 방식이다.
  - 클라이언트는 프록시 서버의 존재를 인식하지 못하고 리버스 프록시 서버의 주소를 목적지 서버로 하여 데이터를 요청한다.
  - 즉, 클라이언트에게는 프록시 서버가 일반적인 원격 서버로 인식된다.
  - 주로 보안, 암호화를 위해 사용하기도 하고 백엔드 서버들의 요청들을 로드밸런싱하기위해 사용되기도 한다.

<br/>

<br/>