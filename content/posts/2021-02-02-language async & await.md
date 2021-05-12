---
template: post
title: "[Javascript] async & await"
draft: false
priority: 0
date: 2021-02-02
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Language
tags:
  - Javascript
---

## async & await

<br/>

promise를 충분히 이해해야만 이해할 수 있는 가장 최근에 나온 자바스크립트 비동기 처리 패턴이다.

콜백 함수와 Promise의 단점을 보완하고 비동기 코드를 동기식으로 구현하기에 좋은 처리 패턴 방식이다.

<br/>

### async function 선언

- async function은 Promise 객체를 반환하는 하나의 비동기 함수를 정의한다.

- Promise, 콜백 함수와 비교하여 동기 함수와 구조가 비슷한 것이 특징이다.

  <br/>

### await

- async function은 await 식을 포함할 수 있다.
- await 식은 async 함수의 실행을 일시 중단하고 await 식으로 정의된 비동기 함수 작업이 끝마칠 때 까지 대기한 후 반환 값을 받아 다시 진행된다.
- await 키워드는 async 함수 내부에서만 사용이 가능하다. async 함수 외부에서 사용하게 되면 syntax error를 발생시킨다.

<br/>

### async & await 사용 예시

```jsx
async function 함수명() {
	await 비동기 함수명();
}
```

async & await 코드 사용 방식이다. async로 선언된 함수는 앞에서 설명했듯이 await 정의 함수가 값을 반환할 때까지 기다렸다가 다음 코드를 진행하게 된다.

```jsx
const firstRequest = (params) => {
    fetch(`http://localhost:5000/${params}`)
        .then((res) => res.text())
        .then((res) => console.log(res));
}
```

api를 호출하는 fetch 함수의 일반적인 사용방식이다.

promise 객체의 반환에 따라 .then 식을 활용하여 코드를 진행하는 모습을 확인할 수 있다.

```jsx
async function firstRequest(params) {
    let response = await fetch(`http://localhost:5000/${params}`)
    let restext = await response.text();
    console.log(restext);
}
```

async & await 패턴을 사용하여 코드를 바꾼 모습이다.

.then 식을 사용하지 않고 동기식 함수처럼 코드화된 모습을 확인할 수 있다.

<br/>

### async & await 예외 처리 방식

```jsx
async function firstRequest(params) {
    try {
        let response = await fetch(`http://localhost:5000/${params}`)
        let restext = await response.text();
        console.log(restext);
    } catch (error) {
        console.log(error);
    }
}
```

Promise 객체에서 .catch 식이 존재하듯이 async & await 패턴에서도 예외 처리 방식이 존재한다.

async & await 방식에서는 try, catch 문을 활용하여 예외 처리를 진행한다.

try 코드 내부에 await 함수들에서 에러가 발생하게 되면 catch 코드를 진행하게 되는 방식으로 try 내부에 있는 모든 await 함수들을 쉽게 에러 감지할 수 있기 때문에 효율적으로 코드를 구현할 수 있다.

<br/>

<br/>