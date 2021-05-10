---
template: post
title: "[React] Props, State"
draft: false
priority: 0
date: 2021-01-23
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# Props, State

컴포넌트를 자세히 알아보기 전에 컴포넌트에서 매개변수, 상태 변수의 역할을 하는 props와 state에 대해 자세하게 알아볼 필요가 있다.

<br/>

### Props란?

부모 컴포넌트가 자식 컴포넌트에게 주는 값(함수에서 매개변수가 하는 역할과 비슷)

자식 컴포넌트는 props를 받아올 수만 있고, 받아온 props를 직접 수정할 수는 없음

<br/>

### Props 사용법

부모 컴포넌트에서 props value를 넘겨주는 경우에는 html 태그 속성을 부여하듯이 넘겨줄 수 있다.

자식 컴포넌트에서 props를 사용하는 경우에는 {this.props.props이름} 이런 식으로 사용이 가능하다.

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Today Study : Props and state
        </div>
        <div>
          <TempoComponent contents='hello guys!'/>
        </div>
      </div>
    );
  }
}
// 부모 컴포넌트 props 값 넘겨주는 코드

export default class TempoComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    This is props contents : {this.props.contents}
                </h2>
            </div>
        );
    }
}
// 자식 컴포넌트 props 사용 코드
```

{this.props.children}으로 접근할 시 부모컴포넌트에 명시한 해당 컴포넌트의 자식 요소에까지 접근이 가능하다.

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Today Study : Props and state
        </div>
        <div>
          <TempoComponent contents='hello guys!'>이 내용이 Children contents</TempoComponent>
        </div>
      </div>
    );
  }
}

export default class TempoComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    This is props contents : {this.props.contents}
                </h2>
                {this.props.children}
            </div>
        );
    }
}
```

부모 컴포넌트에서 props를 설정해주지 않았을 경우 default props 값도 설정해 줄 수 있다.

클래스의 defaultProps를 설정해줌으로써 props의 입력이 없을 경우에는 본 초기값으로 설정해주게 된다.

```jsx
export default class TempoComponent extends React.Component {
    static defaultProps = {
        contents: 'EMPTY'
    }
    render() {
        return (
            <div>
                <h2>
                    This is props contents : {this.props.contents}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

// 클래스 밖에서 설정해주는 방법
TempoComponent.defaultProps = {
    contents: 'EMPTY'
}
```

<br/>

### State란?

state는 컴포넌트 내부에서 관리되는 속성 값이다. 함수로 따지면 함수 내 변수에 해당한다고 볼 수 있다.

props를 사용하는데 state도 사용하는 가장 큰 이유는 사용하는 쪽과 구현하는 쪽의 확실한 분리를 위해서 편의성을 도모했다고 볼 수 있다.

```jsx
export default class TempoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'ostar'
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Web Host : {this.state.name}
                </h2>
            </div>
        );
    }
}
```

일반적인 state 사용 방식이다. constructor()에서 this.state 객체로 정의해서 사용한다. render() 에서 사용할 경우에는 {this.state.state이름} 형식으로 사용한다.

<br/>

### setState

setState는 말 그대로 state 객체를 업데이트 하는 역할을 수행한다.

state가 업데이트 될 경우 컴포넌트는 리렌더링된다.

여기서 중요한 점은 this.state 식으로 접근해서 state를 업데이트할 수 없다는 점이다.

setState메소드를 사용하지 않고 직접 state를 업데이트 한다면 변경을 감지하지 못해 리렌더링이 불가능 하기 때문이다.

```jsx
export default class TempoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'ostar',
            clickcount: 0
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Web Host : {this.state.name}
                </h2>
                <button onClick={() => {
                    this.setState({ clickcount: this.state.clickcount + 1 });  // 버튼 클릭시 state update
                }}>click!</button>
                {this.state.clickcount}
            </div>
        );
    }
}
```

여기서 하나 또 짚고 넘어가야 할 점은 onClick 이벤트 적용에서 바인딩에 대한 내용이다.

onClick 이벤트에 실행될 함수를 기재하는 부분에서는 함수 호출이 아닌 함수 정의가 나와야 한다. 따라서 함수 호출에 사용되는 '함수명()'식으로 코딩하게 되면 오류가 발생한다.

따라서 리액트에서는 애로우 함수를 사용하여 간편하게 함수를 정의해주면 편리하다.