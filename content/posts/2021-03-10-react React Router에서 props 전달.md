---
template: post
title: "[React] Tip. React Router에서 컴포넌트 props 전달하기"
draft: false
priority: 0
date: 2021-03-10
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
---

# Tip. React Router에서 컴포넌트 props 전달하기

react router는 React에서 navigational Componenet로 흔히 사용하는 컴포넌트 일종이다.

<br/>

```html
<Router>
	<Switch>
			<Route exact path='/' component={Home} />
      <Route path='/community' component={Community} />
      <Route path='/mypage' component={Mypage} />
	</Switch>
</Router>
```

보통 다음처럼 <Router> 내부에서 <Route> 컴포넌트를 통해 라우팅 페이지를 만들어 볼 수 있다.

(<Switch> 컴포넌트의 경우, 첫 번째로 매칭되는 컴포넌트를 렌더링 해주는 역할을 함.)

여기서 리액트를 조금만 다뤄보면 라우터에서 궁금한 점이 생겨날 것이다.

바로 Router로 렌더링하는 컴포넌트에는 prop를 어떻게 전달할까에 관한 것이다.

```html
<Route path='/hello' componenet={helloComp} title='titles'>
```

title이라는 props를 전달해야 될 경우, 처음에는 다음과 같이 param을 하나 더 전달하게 되면 가능할까라고 생각하기 쉽지만 다음 코드로는 props가 전달되지 않는다.

```jsx
<Route path='/hello' component={() => <helloComp title='titles'>}>
```

이 포스트를 작성한 이유는 어떻게 보면 위 코드와 관련이 깊다.

먼저 위 코드처럼 작성하게 되면 helloComp 컴포넌트에 title props를 전달할 수 있으며 나도 종종 이 방식을 사용해 왔다.

**공식 DOCS에 따르면 본 코드는 performance 측면에서 좋은 방법이 아니라는 것에 주목해야 한다.**

본 방식처럼 component prop에 inline function 형태로 렌더링할 컴포넌트를 제공하게 되면 렌더링할 때마다 새로운 컴포넌트를 생성하게 된다.

즉, 마운트가 되고 난 후 업데이틑 하는 방식이 아닌 매번 언마운트를 시킨 후 새롭게 렌더링하는 불필요한 과정을 거치게 되는 것이다.

```jsx
<Route path='/hello' render={() => <helloComp title='titles'>}>
```

따라서 새롭게 렌더링 되는 것을 방지하기 위해서는 render props를 사용해야 한다. 본 방식을 사용하게 되면 기존의 리액트 업데이트 방식을 따를 수 있기 때문에 component props가 아닌 render props를 따라야 하는 것을 꼭 명심해야 한다.