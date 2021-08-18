---
template: post
title: "[React] Redux"
draft: false
priority: 0
date: 2021-08-18
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# **Redux**

Redux는 Flux 패턴을 기반으로 단방향 데이터 흐름을 통해 상태를 관리하는 라이브러리이다.

React의 경우 Props와 states를 활용해 컴포넌트의 상태를 관리하게 된다. 하지만 컴포넌트가 복잡해지기 시작하면 손자 컴포넌트의 상태값을 변경하기 위해 자식 컴포넌트를 거쳐야 하는 불필요한 상태 변경 과정이 많아지는 등의 문제가 발생한다.

하지만 Redux의 경우 직접적인 상태값 변경 방식이 아닌 Action 발행을 통한 단일 Store의 상태값 변경으로 Store 상태를 구독하고 있는 컴포넌트에게 상태 변경을 쉽게 알릴 수 있는 효율적인 방식에 해당한다.

<br/>

<br/>

## Redux Style Guide

**읽기 전용 State :** Redux 상태 값은 읽을 수 있으나 직접 변경은 불가능하다. 상태 변경을 위해선 Action을 발행해 Reducer를 통해 시행해야 한다.

**순수함수를 이용한 상태 변경 :** Reducer는 같은 인자에는 항상 같은 결과를 만들어내는 순수함수이어야 한다. 즉 비동기 로직, Reducer 밖에서의 상태 변경 개입 등의 외부 스코프가 허용되서는 안된다.

**믿을 수 있는 단일 정보원 :** 애플리케이션 전체의 상태들은 1개의 Store를 통해 관리되어어야 한다. 단일 정보원을 사용함으로써 디버깅, 테스트가 간단하고 상태를 원래로 되돌리는 것 또한 간단해진다.

<br/>

<br/>

## Redux 구조

[ Naver D2 구조도 참고 ]

![image](https://user-images.githubusercontent.com/57346455/129892364-5af7ce77-9e3b-47aa-8753-e1fd1b3c921b.png)

1. dispatch() 호출을 통해 action을 발행하게 되면, store에선 해당 액션을 전달받게 된다.
2. store에서 액션을 전달받게 되면, reducer에서 해당 액션에 맞는 상태 변경을 가하게 된다.
3. 새로운 상태 값은 스토어에 저장되고, 해당 상태 값을 구독하고 있던 컴포넌트들은 새로운 상태값을 전달받게 된다.

위 구조도를 보게 되면 reducer가 액션을 처리하기 전 Middleware가 배치되어 있는 것을 볼 수 있다. Middleware는 액션이 disapatch되어 reduceer에서 이를 처리하기 전에 어떠한 작업을 진행할 수 있는 중간자로 볼 수 있다. Middelware에 대해선 따로 포스트를 작성해 더 자세하게 알아볼 예정이다.

<br/>

## Redux 디렉토리 구조

![image](https://user-images.githubusercontent.com/57346455/129893094-e5b522f4-ff37-44e6-a4ee-65cf5e2c3f0f.png)

- **actions :** action 종류들을 나타내는 상수 변수들과 Action Creator(Action을 생성하기 위한 메소드)가 포함되어 있음.
- **reducers :** action에 따른 상태 변경 내용인 reducer 코드가 포함되어 있음. 여러 reducer들을 결합해서 하나의 객체로 만들어주는 combineReducer가 index.js 코드에 포함되어 있음
- **store :** 애플리케이션 단일 정보원에 해당하는 store를 생성해주는 코드가 포함되어 있음. 미들웨어를 설정해주는 등의 코드도 이 부분에 포함되는 경우가 있음.

<br/>

<br/>

<br/>

