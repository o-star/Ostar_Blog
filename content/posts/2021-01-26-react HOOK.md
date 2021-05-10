---
template: post
title: "[React] HOOK"
draft: false
priority: 0
date: 2021-01-26
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# HOOK

리액트는 함수형 컴포넌트와 클래스형 컴포넌트를 모두 지원한다.

HOOK은 함수형 컴포넌트에서 사용되는 기능이다.

우리는 HOOK을 배우기 전 함수형 컴포넌트와 클래스형 컴포넌트의 차이점을 알고 넘어가야 이해가 쉬울 것이다.

<br/>

### 함수형 컴포넌트

- 명령형이 아닌 선언형
- 애플리케이션 상태를 순수 함수를 통해 전달함.
- 객체 지향 프로그래밍과 대조적임.
- 함수형 컴포넌트는 클래스형 컴포넌트에 비해 선언하기가 좀 더 편하고 메모리 자원을 덜 사용하는 장점이 있음

<br/>

### 클래스형 컴포넌트

- 상태를 저장할 수 있고, Life Cycle Method를 사용할 수 있음
- render() 함수가 필수적을 필요함
- state와 action을 분리하기 어려움

함수형 컴포넌트와 클래스형 컴포넌트 둘 사이에는 차이점이 존재하나, 어느 하나가 더 낫다고 판단하기에는 어렵다.

그래서 두 방식의 컴포넌트를 모두 익혀둘 필요가 있다고 나는 생각한다.

그 중 함수형 컴포넌트를 사용하기 위해선 HOOK을 충분히 익힐 필요가 있다.

<br/>

## HOOK이란?

함수형 컴포넌트에서 클래스형 컴포넌트에 사용되는 state, life-cycle과 같은 기능을 사용할 수 있도록 도움을 주는 기능.

HOOK은 클래스형 컴포넌트에서는 동작하지 않음.

(이미 특정 형태로 짜놓은 코드를 다른 형태의 컴포넌트로 바꾸고 HOOK을 사용하는 행위들은 불필요한 행동이다.)

<br/>

### useState

- 클래스형 컴포넌트에서 사용되는 state 속성을 사용하기 위한 기능이다.
- 클래스형 컴포넌트에서는 this.setState()를 사용하여 state의 값을 변화시키는 것에 반해 함수형 컴포넌트에서는 useState를 사용한다.
- 자세한 사용방법은 다음 코드와 같다.

```jsx
import React, { useState } from 'react'

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(0);  // useState 사용방식

    const onClickMethod = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>this is FunctionalComponent</h1>
            <h2>User name : {props.name}</h2>
            <h2>User age : {props.age}</h2>
            <button onClick={onClickMethod}>{count}</button>
        </div>
    )
}

export default FunctionalComponent
```

본 코드에서는 우선 함수형 컴포넌트이기 때문에 render() 함수가 사용되지 않은 것을 볼 수 있다.

또한 constructor()와 같은 코드가 없어져 코드가 훨씬 간편화 되었으며 state 사용 자체도 굉장히 간편하게 변한 것을 볼 수 있다.

useState의 경우 [state 이름, setState 함수] 식으로 선언하고 useState() 괄호안에 있는 수로 state가 초기화 된다.

또한 여러 state를 한 함수에 정의할 수도 있다. → 각 state들은 구별을 분명히 하기 위해 적절한 naming이 필요함.

<br/>

### useEffect

useEffect는 쉽게 말하면 클래스형 컴포넌트에 존재하는 life-cycle 함수들을 대체하는 기능을 제공한다.

클래스형컴포넌트 함수에는 첫 마운트 후 작업 기능을 제공하는 componentDidMount(), 컴포넌트 수정 후 작업하는 componentDidUpdate() 등의 life-cycle 함수들이 존재한다.

useEffect Hook은 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지를 가르쳐주는 역할을 수행하며 기존의 life-cycle 함수들과 유사한 것을 볼 수 있다.

useEffect 훅은 렌더링 이후 매번 수행된다. 마운팅과 업데이트로 나누어 생각하는 것 보다 렌더링 이후 발생한다고 생각하면 이해가 편하다.

리액트는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장한다.

```jsx
import React, { useState, useEffect } from 'react'

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(0);
    const [doublecount, setDoublecount] = useState(0);
    const [timer, setTimer] = useState(0);

    const onClickMethod = () => {
        setCount(count + 1);
    }

    const onDoubleMethod = () => {
        setDoublecount(doublecount + 2);
    }

    useEffect(() => {
        if (timer < 10)
            setTimeout(() => {
                setTimer(timer + 1);
            }, 1000)
    })

    return (
        <div>
            <h1>this is FunctionalComponent</h1>
            <h2>User name : {props.name}</h2>
            <h2>User age : {props.age}</h2>
            <button onClick={onClickMethod}>{count}</button>
            <button onClick={onDoubleMethod}>{doublecount}</button>
            <div>Time : {timer}...  (0~10)</div>
        </div>
    )
}

export default FunctionalComponent
```

본 코드는 useEffect를 활용하여 간단하게 0~10초간 타이머를 만든 코드이다. useEffect의 경우 렌더링 후 지속적으로 호출되기 때문에 life-cycle에서 구현한 타이머와 동일한 기능을 코딩할 수 있다.