---
template: post
title: "[Javascript] Promise"
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

## Promise

<br/>

javascript는 실제로 대부분의 작업들이 비동기로 이루어진다.

가령 특정 작업을 요청하면서 콜백 함수를 등록하는 방식이며, 해당 작업이 끝마칠 때 콜백 함수가 실행되는 방식이다.

최근 프론트엔드의 규모가 커지면서 javascript 코드들이 많은 콜백 함수를 호출하는 콜백 중첩, 콜백 지옥 코드 현상들이 나타나고 있다.

이런 현상들을 해결할 수 있는 방법 중 하나가 바로 이 Promise 패턴이다.

Promise 객체는 비동기 상태를 효과적으로 정리하고 여러 콜백 중첩 코드의 가독성을 높일 방법을 제공해준다.

<br/>

### Promis 상태 분류

- Pending : 대기 상태. 비동기 처리 로직이 아직 완료되지 않은 상태

- Fulfilled : 이행 상태. 비동기 처리가 완료되어 결과 값을 반환해준 상태

- Rejected : 실패 상태. 비동기 처리가 실패하거나 오류가 생긴 상태

  <br/>

### Promise 기본 코드

```jsx
new Promise((resolve, reject) => {
	resolve();
	reject();
})
```

new Promise 메소드를 호출하는 경우 콜백 함수를 선언하고, 이 콜백 함수는 인자로 resolve와 reject를 가진다.

resolve 인자는 pending 상태 이후 해당 작업이 완료되어 fulfilled 상태로 전환하고자 하는 경우에 사용한다.

reject 인자는 pending 상태에서 에러나 작업 실패의 상황에서 rejected 상태로 전환할 때 에러를 전달하고자 사용된다.

```jsx
new Promise((resolve, reject) => {
	resolve();
	reject();
}).then(
).catch(
).finally(
)
```

Promise 객체에서 비동기 작업이 성공적으로 완료된 경우에는 resolve 인자를 사용하여 .then() 코드로 향하게 된다.

즉, fulfilled 상태에서는 결과 값을 전달받고 .then() 코드가 실행되는 것이다.

반면에 작업이 실패하거나 에러가 생긴 경우에는 reject인자를 사용하여 .catch() 코드로 향한다.

rejected 상태에서는 reject인자로부터 에러 값을 전달받고 .catch() 코드를 실행한다.

그리고 비동기 작업의 수행 완료, 실패와 상관 없이 실행되는 .finally() 코드도 추가 가능하다.

<br/>

- Promise 예제 코드

```jsx
let notstart = false;

new Promise((resolve, reject) => {
    console.log(new Date());
    if (notstart) reject('Timer not start...')
    else
        setTimeout(() => {
            resolve(new Date());
        }, 3000)
}).then((nowdate) => {
    console.log(nowdate);
}).catch((error) => {
    console.log(error);
})
```

위 Promise 예제 코드는 setTimeout() 메소드를 활용하여 reject, resolve를 사용하는 사례이다.

임의로 reject인자를 사용하기 위해 notstart 변수를 두어 코드를 구현했다.

현재 코드로는 notstart가 false 상태이기 때문에 setTimeout()이 실행되고 3초후 resolve()가 실행되어 .then() 코드가 실행된다.

여기서 notstart 상태를 true를 바꾸어 임의로 reject()를 실행하게 되면 .then() 코드가 아닌 .catch() 코드가 실행된다.

```jsx
new Promise((resolve, reject) => {
}).then()
.then()
.then()
.catch()
```

Promise의 큰 장점은 바로 위의 코드와 같이 많은 콜백 함수들의 중첩을 효과적으로 정리해서 사용이 가능하다는 점이다.

단순히 패턴 사용법만 익혀봐서는 사실 이 패턴의 큰 장점에 대해 크게 와닿지 않는 듯 하다.

실제 프로젝트에서 본 코드들을 활용해 봄으로써 장단점을 몸소 느껴볼 필요가 있을 듯 하다!

<br/>

<br/>