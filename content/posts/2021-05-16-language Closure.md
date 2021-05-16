---

template: post
title: "[Javascript] Closure"
draft: false
priority: 0
date: 2021-05-16
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Language
tags:
  - Javascript
---

# Closure

부스트캠프 수강 당시, 자바스크립트 클로저 개념에 대해서 잠시 공부해본 적이 있다.

하지만 자바스크립트 언어 자체에 대해서 이해도가 너무 떨어졌던 터라,,, 제대로 숙지하지 못하고 넘어갔던 기억이 난다.

따라서 이번 포스트를 통해 예제를 섞어가며 최대한 이해를 높여보려고 한다.

<br/>

<br/>

#### Closure란?

클로저란 내부 함수가 외부 함수의 맥락에 접근할 수 있는 것을 가리킨다.

클로저 개념은 자바스크립트 고유의 개념은 아니고 함수를 일급 객체로 다루는 함수형 프로그래밍적 개념으로 볼 수 있다.

```javascript
function outerFunc() {
  let name = 'ostar'
  const innerFunc = (str) => {
    console.log(str)
  }
}
```

Javascript의 경우 함수를 객체 형태로 다루기 때문에 위 코드의 형태로 코드를 구성할 수 있다.

본 코드에서 outerFunc()이 외부 함수, innerFunc()이 내부 함수형태가 된다.

현재 코드에서는 innerFunc()에서 외부 스코프에 해당하는 name 변수에 접근할 수 있는데, 이러한 개념은 클로저라고 일컫는다.

<br/>

#### Closure의 특징

```javascript
function outerFunc() {
	let name = 'ostar'
  return () => {
    console.log(name)
  }
}

func = outerFunc()
func()
```

사실 처음 클로저 개념을 들었을 때에는 외부 함수 안에 위치한 내부함수에서 스코프 내의 변수에 접근할 수 있다는 개념이 중요하게 여겨지는 이유에 대해 확 와닿지는 않았다.

여기서 위의 코드를 보면 클로저의 특징을 살펴볼 수 있다.

우선 outerFunc()의 경우 name 변수를 출력하는 내부 함수를 반환한 후 함수 실행이 끝이 난다. 따라서 outterFunc()의 실행 컨텍스트 스택은 제거되므로 outerFunc() 변수 name 또한 소멸되어 접근할 수 없을 것이다. 하지만 내부함수에서는 외부함수가 소멸된 이후에도 외부함수의 변수에 접근할 수 있다. 이러한 메커니즘을 우리는 클로저라고 하는 것이다.

<br/>

#### Closure 사용 이유

```javascript
let arr = []
for(let i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(let index in arr) {
    console.log(arr[index]());
}
```

다음 코드는 생활코딩에서 작성한 예시 코드를 참조하였다.

다음 함수를 실행할 경우 0, 1, 2, 3, 4의 결과값이 아닌 5, 5, 5, 5, 5 의 결과값이 나온다. 왜냐하면 for문 스코프의 i 값은 이미 5에 도달해 있기 때문에 arr[]의 값들은 모두 i=5인 경우를 참조하고 있기 때문이다.

```javascript
let arr = []
for(let i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(let index in arr) {
    console.log(arr[index]());
}
```

다음 코드는 클로저 개념을 활용하여 우리가 원하는 출력값을 얻을 수 있는 코드 모습이다.

각 arr[i]의 내부 함수들은 console.log()가 실행되는 index 값을 참조한 외부 변수를 출력하고 있기 때문에 우리가 원하는 출력값을 확인해 볼 수 있다.

<br/>

```javascript
let timercount = 0;

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(timercount);
        timercount++;
    }, 1000)
}
timercount = 10;
```

본 코드는 클로저 개념을 사용해보기 위해 내가 직접 만들어본 예시 코드이다.

본 코드는 timercount라는 전역 변수를 참조해 출력하는 코드이다.

가장 아랫줄 timercount를 10으로 만드는 코드가 없다면 코드 출력값은 0, 1, 2, 3, 4를 출력하지만 전역변수의 변경 코드가 중간에 들어가기 때문에 코드 출력값은 10, 11, 12, 13, 14를 출력하게 된다.

```javascript
let timercount = 0;

for (let i = 0; i < 5; i++) {
    const counting = (timercount) => {
        setTimeout(() => {
            console.log(timercount);
        }, 1000)
    }
    counting(timercount)
    timercount++;
}
timercount = 10;
```

하지만 본 코드와 같이 클로저 개념을 사용하게 되면 각자 접근하는 timercount 값이 모두 외부 함수 컨텍스트 값에 따라 달라지기 때문에 원하는 출력값 0, 1, 2, 3, 4를 받아볼 수 있다.

<br/>

**클로저의 활용**

- 상태 유지 - 상태 값을 저장하는 변수를 변경하고 최신 상태를 유지하는데 사용됨
- 전역 변수의 사용 억제 - 전역 변수의 경우 외부 코드에 의해 언제든 변경이 일어날 수 있음. 즉 오류 가능성을 내포하고 있는 코드이기 때문에 클로저의개념을 사용해 이런 오류를 억제시킬 수 있음
- javascript의 Private 속성 유지 : 자바스크립트에서 외부에 은닉할 속성 메소드를 설정하는 좋은 방법이 Closure.

클로저는 자바스크립트를 이용해 고난이도 테크닉을 구사할 때 사실 많이 사용되는 개념이다. 또 규모가 큰 코드에서 여러 변수, 속성들이 오류를 일으킬 수 있는 상황들에서 효과적으로 코드를 구성할 수 있는 방법이기도 하다. 하지만 아무래도 학부생 수준에서 구성하는 자바스크립트 코드에서는 크게 사용해 본적이 없기에 클로저의 개념을 실무적으로 사용해보지 못했던 것 같다. 기회가 된다면 클로저 개념을 사용한 코드를 구성해보고 실제 프로젝트에 사용해보고 그 후기를 꼭 포스트해보자

<br/>
<br/>

