---
template: post
title: "[React] Component Life Cycle"
draft: false
priority: 0
date: 2021-01-24
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
---

# Component Life Cycle

React에서는 코드들을 Componenet별로 나누어 재사용성과 가독성을 높이는 효과를 가져왔다.

그리고 React에서는 각 컴포넌트별로 렌더링 되기 직전 혹은 업데이트 전,후로 작업을 처리해야하는 경우가 생긴다.

이러한 경우를 위해 우리는 컴포넌트 생명 주기를 올바르게 이해하고 사용할 필요가 있다.

<br/>

### Component란?

Component는 기능을 단위별로 캡슐화 해둔 리액트 기본 단위이다.

리액트 뷰는 이 컴포넌트들의 조합으로 만들어진다.

리액트에서는 이 컴포넌트를 활용하여 UI 코드를 효과적으로 나누고 재사용성을 높였다.

<br/>

### Component Life Cycle

참조 : https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955

![image](https://user-images.githubusercontent.com/57346455/117452945-519ec880-af7f-11eb-9d66-c305ce6c78ca.png)

한 눈에 보면 정말이지 이해하기 힘든 그림이다. 하지만 이 그림은 컴포넌트 생명주기를 한 눈에 익힐 수 있는 아주 완벽한 그림이라고 생각한다.

그림에서 보는 바와 같이 리액트 컴포넌트 생명주기는 크게 Mount → Update → Unmount 세 단계로 이루어져 있다.

최근 각 상태별로 존재했던 componentWillMount, componentWillUpdate, componentWillReceiveProps 단계들이 리액트 17부터 deprecated되었다. 이 점을 주의하면서 공부하자!

- Mount

  - 컴포넌트가 처음 실행될 때를 Mount State라고 함.
  - Mount 순서

  ```
  1. state, context, defaultProps 저장
  2. componentWillMount -> Deprecated
  3. render -> 컴포넌트를 DOM에 부착
  4. componentDidMount -> Mount 완료 후 호출됨
  ```

  - componentDidMount에서는 DOM에 접근이 가능하다. 따라서 이 시점에서 AJAX 요청이나, setTimeout, setInterval 등의 기능을 수행할 수 있다. → componentDidMount는 구현에 꽤 많이 쓰일 듯 하다 실제로 활용해보자!..

- Update

  - props와 state가 업데이트 될 때 렌더링 과정이 재시작되는 상태를 말함.

  - Props Update

    - props가 업데이트 되는 과정이다.
    - Props Update 순서

    ```
    1. componentWillReceiveProps -> Deprecated
    2. shouldComponentUpdate
    3. componentWillUpdate -> Deprecated
    4. render -> 컴포넌트 DOM에 부착
    5. componentDidUpdate -> props update 이후 호출
    ```

    - shouldComponentUpdate 단계는 아직 렌더링이 일어나기 전이기 때문에 불필요한 업데이트를 선별하여 성능 최적화를 이뤄낼 수 있도록 기능을 제공한다.
    - componentDidUpdate 역시 렌더링 이후 호출되기 때문에 DOM에 접근 가능

  - State Update

    - setState 호출을 통해 state가 업데이트 될 때 과정이다.
    - 전반적으로 props update과정과 유사하다.

    ```
    1. shouldComponentUpdate
    2. componentWillUpdate -> Deprecated
    3. render
    4. componentDidUpdate
    ```

- Unmount

  - 컴포넌트가 제거될 때의 상태.
  - 더는 컴포넌트를 사용하지 않을 때 발생하는 이벤트
  - componentWillUnmount : Unmount되기 전의 호출상태. 컴포넌트 생명 주기 중 유일하게 deprecated 되지 않은 단계. Unmount되기 전의 작업들을 명시해 줄 수 있음.
  - Unmount 상태에는 componenetDidUnmount가 없음. 이미 제거된 컴포넌트에서 이벤트를 발생시킬 수 없기 때문.