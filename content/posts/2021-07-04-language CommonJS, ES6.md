---

template: post
title: "[Javascript] CommonJS, ES6 Module"
draft: false
priority: 0
date: 2021-07-04
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Language
tags:
  - Javascript
---

# **CommonJS, ES6 Module**

Javascript의 경우 모듈화 형식의 코드에서 모듈을 불러오고 내보낼 때 사용하는 코드 방식이 CommonJS, ES6 두 가지 방식이 존재한다.

nodeJS와 같은 서버사이드 언어의 경우 CommonJS 모듈 방식을 활용하며, 브라우저 언어(ReactJS)에서는 주로 ES6 방식을 활용한다.

따라서 두 가지 방식의 사용방법을 모두 알고 혼동되게 사용하지 않도록 주의해야 한다.

<br/>

<br/>

## CommonJS Module

대표적으로 nodeJS에서 사용하는 모듈화 방식이다.

module.exports or exports와 require 코드를 사용하여 모듈을 내보내고 불러오는 식으로 진행된다.

<br/>

#### **단일 객체 모듈화**

```javascript
const printFunc = () => {
  console.log("Hello world");
}

module.exports = printFunc
// 2.js


const printFunc = require('./2.js')

printFunc()
//1.js
```

단일 객체를 내보내고 받아올 경우에는 module.exports와 require 구문을 활용한다.

위 코드와 같이 내보낼 객체를 module.exports 변수에 할당해준다.

내보낸 객체가 하나의 객체 뿐이기 때문에 불러올 경우에도 require 키워드를 통해 변수에 단일 객체를 할당해줄 수 있다.

<br/>

#### **복수 객체 모듈화**

```javascript
const plusPrintFunc = (a, b) => {
  console.log("PLUS = " + (a + b));
}

const minusPrintFunc = (a, b) => {
  console.log("MINUS = " + (a - b));
}

exports.plusPrintFunc = plusPrintFunc
exports.minusPrintFunc = minusPrintFunc
//2.js


const moduleFunc = require('./2.js')

moduleFunc.plusPrintFunc(2, 1)	//result : "PLUS = 3"
moduleFunc.minusPrintFunc(2, 1)  //result : "MINUS = 1"
//1.js
```

CommonJS 모듈 방식에서 복수 객체들을 내보낼 때에는 단일 객체와 약간의 차이가 있다.

위 코드와 같이 객체를 내보낼 경우, exports 변수의 속성으로 객체들을 세팅해 내보내게 된다.

모듈을 가져올 경우에는 단일 객체와 유사하게 require 키워드를 사용하는 대신 할당받은 변수의 속성으로 각 복수 객체들에 접근하게 된다.

<br/>

<br/>

## ES6 Module

ES6 모듈 방식의 경우 브라우저 단에서도 쉽게 Javascript 모듈화가 가능하게끔 ES6부터 도입된 방식이다.

- export, import 키워드를 사용한다.
- export 키워드로 자신의 객체를 외부로, import 키워드로 외부 모듈의 객체를 불러올 수 있다.
- 'import', 'from', 'export', 'default' 와 같이 모듈 전용 키워드를 사용해 가독성이 좋다.
- 비동기 방식으로 작동하고 모듈에서 실제 쓰이는 부분만 불러올 수 있는 부분이 성능, 메모리 부분에 유리한 측면을 만들어 준다.

<br/>

#### **단일 객체 모듈화**

```javascript
import plusPrintFunc from './2.mjs'

plusPrintFunc(2, 1)
// 1.js


const plusPrintFunc = (a, b) => {
  console.log("PLUS = " + (a + b));
}

const minusPrintFunc = (a, b) => {
  console.log("MINUS = " + (a - b));
}

export default plusPrintFunc
// 2.js
```

하나의 모듈에서 하나의 객체만을 내보낼 경우에는 'export default' 구문을 활용한다.

모듈을 불러올 경우에는 'imporot ... from' 구문을 활용해서 가져온다.

더 다양한 모듈 불러오기, 내보내기 방식은 복수 객체 모듈화에서 소개한다.

<br/>

#### **복수 객체 모듈화**

```javascript
import { plusPrintFunc, minusPrintFunc } from './2.mjs'

plusPrintFunc(2, 1)
minusPrintFunc(2, 1)

import * as moduleFunc from './2.mjs'	// Alias

moduleFunc.plusPrintFunc(2, 1)
moduleFunc.minusPrintFunc(2, 1)
//1.js


const multiPrintFunc = (a, b) => {
  console.log("MULTI = " + (a * b));
}

export function plusPrintFunc(a, b) {
  console.log("PLUS = " + (a + b));
}

const minusPrintFunc = (a, b) => {
  console.log("MINUS = " + (a - b));
}

export { minusPrintFunc }
//2.js
```

본 방식은 복수 객체 모듈 내보내기, 가져오기에서 특히 많은 편의성을 보이는 구조이다.

우선 2.js 파일의 경우 자신이 내보내고 싶은 객체에만 'export' 키워드를 사용해 내보내기를 구현한다.

1.js 파일의 경우 각 모듈에서 자신이 사용할 객체만을 중괄호에 포함시켜 가져올 수 있다.

또한 alias 구문인 'as' 키워드를 사용해서 별칭을 사용해 여러 객체를 가져와 사용할 수 있다.

<br/>
<br/>

<br/>

