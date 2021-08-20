---
template: post
title: "[React] redux-thunk"
draft: false
priority: 0
date: 2021-08-20
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# **redux-thunk**

redux와 redux middleware들을 효과적으로 사용하기 위해서 이들의 사용 이유를 명확하게 파악할 필요가 있다.

<br/>

<br/>

## React의 관심사?

React의 경우 유저에게 보여지는 UI들을 컴포넌트로 분할하고 이들을 효과적으로 조립해 하나의 페이지를 제작하게 된다.

이 과정에서 상태를 효과적으로 관리하여 상태 변경을 기준으로 화면을 렌더링하는데 관심을 두고 있다.

따라서 사용자의 외부 입력 이벤트에 따른 비즈니스 로직 부분은 리액트가 가지는 관심사와는 거리가 멀다. (실제로 이러한 비즈니스 로직은 비동기 처리를 필요로 하고 사이드이펙트가 발생할 수 있기 때문에 유의해서 처리해줄 필요가 있는 부분이기도 하다.)

▶ **side effect (부수 효과)** : 함수 실행 시 인자가 아닌 다른 값들에 의해 반환값이 바뀔 수 있는 것을 의미. 함수 내부에서 API를 요청(axios, httpRequest)할 경우 데이터가 바뀌거나 서버가 죽어 반환값이 바뀌는 경우도 사이드이펙트에 해당. 랜덤값 호출 역시 사이드이펙트.

실제로 리액트 웹 어플리케이션을 개발하다 보면 redux와 redux middleware를 사용하지 않으면 이러한 비즈니스 로직 코드를 분리하기가 어려웠다.

이러한 문제점들 때문에 React 애플리케이션 개발 시 redux, redux middleware를 활용하여 효율적인 상태 관리, 비즈니스 로직 처리 효과를 이끌어내는 것이다.

<br/>

<br/>

## Redux Middleware

참조 : https://velopert.com/3401

![image](https://user-images.githubusercontent.com/57346455/130234763-de98c260-57e1-4e0f-8679-a6a25146a0b3.png)



<br/>

<br/>

<br/>

