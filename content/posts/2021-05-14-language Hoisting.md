---

template: post
title: "[Javascript] Hoisting"
draft: false
priority: 0
date: 2021-05-14
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Language
tags:
  - Javascript
---

# Hoisting

var와 let의 차이점을 짧게 공부했던 적 있었는데 그 때 당시 호이스팅의 개념을 간단하게 접했었다.

이번 포스팅을 기회로 좀 더 자세하게 개념을 정리해보고자 한다.

<br/>

**[사전적 의미] Hoist : (장비, 밧줄 따위를 이용하여) 끌어 올리다.**

쉽게 말해 호이스팅(Hoisting)이란 함수 스코프 내의 선언들을 모두 끌어올려 함수 유효 범위 최상단에 위치시키는 것이다.

함수 내의 선언 => 함수 스코프의 최상단에 선언 위치시킴

함수 밖의 전역 선언 => 스크립트 단위의 최상단으로 선언 위치시킴

ES6 이후의 let, const와 같은 변수 선언 방식에서는 호이스팅이 일어나지 않지만 var 변수의 경우 호이스팅이 일어나기 때문에 몇몇 코드에서 주의해야할 필요가 있다.

<br/>

```javascript
//hoisting 사례
for(var k=0; k<10; k++)
  console.log("hi")
console.log(k)
```

일반적 프로그래밍 언어에서는 위 코드의 k 변수는 for문 스코프에서만 유효하기 때문에 아래쪽 console.log 코드에서는 오류가 발생한다.

하지만 javascript의 경우 k 변수의 선언이 호이스팅에 의해 해당 스크립트(함수)의 최상단으로 위치하기 때문에 코드가 문제없이 실행된다.

<br/>

#### 호이스팅 예시 살펴보기

```javascript
//개발자 입력 코드
var username = 'jeongseok'

if (username === 'jeongseok') {
    var nickname = 'ostar'
}

console.log(nickname)
```

<br/>

```javascript
//호이스팅 변환 코드
var username = 'jeongseok'
var nickname	//선언 부분이 최상단으로 올라옴

if (username === 'jeongseok') {
    nickname = 'ostar'
}

console.log(nickname)
```

호이스팅 변환 코드에서 보듯이 호이스팅 과정을 거치게 되면 선언 부분만 분리되어 최상단 코드로 끌어올려진다.

물론 호이스팅 자체가 실제로 코드를 끌어올리는 것은 아니며, 자바스크립트 Parser가 내부적으로 끌어올려 처리하는 것이다.

따라서 실제 메모리에는 변화가 없다.

<br/>

<br/>

#### 자바스크립트에서 호이스팅을 알아야 하는 이유?

자바스크립트 코드에서는 가독성과 유지보수를 위해 호이스팅이 일어나지 않도록 하는 것이 이상적이다.

따라서 자바스크립트 코드에서는 가급적 함수 변수 선언을 최상단에 위치시켜 호이스팅으로 인한 스코프 꼬임 현상을 방지해야한다.

또, 위에서 언급한 바와 같이 ES6의 let, const 사용을 권장한다.

사실 나는 호이스팅 개념을 익힌 이후로는 var를 사용하지 않고 줄곧 let, const를 사용해오고 있다. 그런 의미에서 let을 사용하고 호이스팅의 걱정을 안하면 아무 문제가 없지 않는가? 라는 생각을 했다.

하지만 ES6의 경우 개발된지 오랜 시간이 지난 것이 아니기 때문에 많은 타 코드에서 var 사용을 찾아볼 수 있다. 따라서 우리는 var와 호이스팅의 개념을 충분히 숙지해두어야 코드 유지보수에 도움이 될 것이다.

<br/>
<br/>

