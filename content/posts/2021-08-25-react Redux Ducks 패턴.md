---
template: post
title: "[React] Redux Ducks 패턴"
draft: false
priority: 0
date: 2021-08-25
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# **Redux Ducks 패턴**

지금까지는 action, reducer, store 디렉토리로 분할하는 형태의 아키텍처를 활용했다.

이번 포스트에서는 Ducks 패턴을 활용하여 좀 더 간결한 Redux 아키텍처를 짜보았다. 

또 이 과정에서 Counter와 todo list 컴포넌트를 Container Component와 presentational Component로 분할해서 설계하는 과정도 공부해보았다.

<br/>

<br/>

## Ducks Pattern

기존의 아키텍처의 경우 action type, action creator 코드와 reducer 코드를 분리해서 개발했기 때문에 코드의 수정이 필요할 때 두 파일을 오고가며 수정을 행해야 했다. 이러한 구조는 상태 관리에 있어 오히려 더 복잡해지는 듯한 느낌을 받기도 한다.

![image](https://user-images.githubusercontent.com/57346455/130771070-89159f46-c008-430d-b3f7-f8381fa12fe3.png)

Ducks 패턴의 경우 action 코드와 reducer 코드를 하나의 파일로 관리한다. 이 파일을들을 'modules' 디렉토리에 담아 관리하게 된다.

위 그림의 디렉토리에서는 'module' 디렉토리가 카운터 관련 액션과 리듀서를 담고 있는 counter.js 파일, todo list 관련 액션, 리듀서를 담고 있는 todos.js, combineReducer 코드인 index.js 로 구성된다.

<br/>

```javascript
// counter.js
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

const initState = {
  number: 0
}

export const increase = () => {
  return {
    type: INCREASE
  }
}

export const decrease = () => {
  return {
    type: DECREASE
  }
}

export default function counter(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 }
    case DECREASE:
      return { ...state, number: state.number - 1 }
    default:
      return { ...state }
  }
}
```

본 코드는 Ducks 패턴을 활용한 Counter에 필요한 액션, 리듀서 코드이다.

기존에는 action, reducer 코드가 분리되어 있었던 반면에 Ducks 패턴에서는 한 파일로 액션과 리듀서를 관리할 수 있다.

Ducks 패턴은 몇 가지 규칙들만을 준수하여 액션과 리듀서 코드를 통합하는 것 외에는 기존의 방식과 유사하게 설계하면 되기 때문에 쉽게 사용할 수 있을 듯 하다.

**[ Ducks 패턴 규칙들 ]**

- action creator 코드는 `export`를 통해 내보낸다.
- reducer 코드는 `export default`를 통해 내보낸다.
- 액션 타입은 `{application name}/{reducer name}/{action type}` 형식의 네이밍을 따른다. (본 코드에서는 application name은 생략하였음) => 예시: 'CounterApp/counter/INCREASE' or 'CounterApp/todos/ADD'

<br/>

<br/>

## Container Component, Presentational Component

**Presentational Component :** 부모 컴포넌트로부터 props를 통해 데이터를 받아 오로지 시각적인 부분만을 담당하는 컴포넌트. 약간의 상태를 가질 수 있으며 이벤트 핸들러 등록 정도의 기능을 갖춤.

**Container Component :** 직접 상태를 가지며 비동기 작업을 수행하는 컴포넌트. 시각적인 부분을 담당하지 않음. Redux와 연결되는 컴포넌트이다. Container Component가 Presentational Component에게 props를 전달해주는 역할을 수행함으로써 시각적인 부분이 업데이트되는 코드를 설계한다.

<br/>

```javascript
// ContainerCounter.js
import Counter from './Counter';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from 'modules/counter';

export default function ContainerCounter() {

  const dispatch = useDispatch()
  const counterVal = useSelector((store) => store.counter.number)

  const onClickIncrease = () => dispatch(increase());
  const onClickDecrease = () => dispatch(decrease());

  return (
    <Counter increase={onClickIncrease}
      decrease={onClickDecrease}
      counterVal={counterVal} />
  )
}
```

카운터의 비동기 처리 코드를 가지는 Container Component이다.

Redux 디스패치와 상태값 조회 등의 기능을 모두 수행하고 있는 것을 확인할 수 있다.

<br/>

```javascript
// Counter.js
import React from 'react'

export default function Counter({ increase, decrease, counterVal }) {
  const countDivStyle = {
    textAlign: 'center',
    padding: '30px',
    border: '2px black solid'
  } // JS Object를 활용한 내장 Style 객체

  return (
    <div style={countDivStyle}>
      <h1>Ostar Counter</h1>
      <h2>{counterVal}</h2>
      <div>
        <button onClick={increase}>INCREASE</button>
        <button onClick={decrease}>DECREASE</button>
      </div>
    </div>
  )
}
```

카운터의 시각적인 부분을 담당하는 Presentational Componenet이다.

대부분의 로직들은 props를 통해 전달받으며 시각적인 부분을 렌더링하는데 초점이 맞춰져 있다.

<br/>

<br/>

<br/>

