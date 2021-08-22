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

Middleware는 다음의 구조도와 같이 액션과 리듀서 사이에서 여러 작업을 수행할 수 있는 중간자 매개체가 된다.

Redux middleware에서는 많은 작업이 가능하다. 가령 액션을 콘솔에 기록하는 redux-logger 역할을 수행할 수 있으며 액션을 참고하여 액션을 취소해버리거나 새로운 액션을 추가적으로 디스패치하는 등의 작업이 가능하다.

Redux는 모든 과정이 동기적으로 진행된다. 따라서 Redux 진행과정에서 비동기 작업이 진행될 경우 middleware 라이브러리를 사용하게 된다.

대표적으로 redux-thunk나 redux-saga 미들웨어는 reduxer로 액션이 전달 되기 전 코드를 가로채서 비동기 로직을 처리하는 방식으로 진행된다.

<br/>

```javascript
import { createStore, applyMiddleware } from "redux";
import appReducer from "reducers";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

let appStore = createStore(
  appReducer,
  applyMiddleware(logger, ReduxThunk)
);

export default appStore;
```

redux middleware 적용은 매우 간단하다.

단일 정보원 Store를 생성할 때 redux 모듈의 applyMiddleware 메소드를 활용하면 쉽게 middleware를 부착시킬 수 있다.

위 코드의 경우 redux-logger와 redux-thunk 두 가지의 middleware를 부착시키는 코드이다.

최근에는 많은 미들웨어가 잘 개발되어져 있기 때문에 그대로 가져다 쓰면 되지만, 정확하게 미들웨어의 동작 방식을 이해하기 위해서 직접 만들어보는 것도 좋은 공부가 될 것 같다.

<br/>

<br/>

## redux-thunk

Redux에서 비동기 작업을 처리할 때 흔하게 사용하는 미들웨어 일종이다.

쉽게 설명하자면 기존의 액션 객체를 반환하는 액션 생성자를 객체가 아닌 함수를 반환하도록 날개를 달아주는 역할을 수행한다.

이를 통해 액션 생성자에서 다양한 비동기 작업들을 수행할 수 있는 장점을 가지게 된다.

-> 하지만 객체를 반환하는 액션 생성자, 함수를 반환하는 액션 생성자 등 action 코드가 복잡해지는 단점을 가지기도 한다. 따라서 비동기 로직 처리가 필요한 경우 외에는 해당 라이브러리가 필수는 아니다.

<br/>

<br/>

<br/>

