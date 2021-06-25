---
template: post
title: "[React] Flux"
draft: false
priority: 0
date: 2021-06-25
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - React
  - Front-end
---

# **Flux**

2014년 이후로 React 라이브러리가 주목받고 있는 이유 중 하나는 React가 Flux 디자인 패턴으로 진행되기 때문이라고도 생각한다.

React 라이브러리를 이해하고 보다 효과적으로 활용하기 위해선 Flux 디자인 패턴을 명확하게 이해하고 MVC 패턴과의 차이점을 구분지을 수 있어야 한다.

그런 의미에서 이번 포스트에선 Flux 디자인 패턴을 이해해보고 MVC 패턴과 비교해보고자 한다.

<br/>

<br/>

## **MVC 디자인 패턴**

MVC 패턴이 주제가 아니기 때문에 간단하게 내용을 정리하고 어떤 단점에 의해서 Flux 디자인 패턴이 주목받게 되었는지에 대해 중점적으로 살펴보려 한다.

- **Model : 데이터 관련 로직을 담당.**
- **View : 사용자와 직접 상호작용하는 UI 담당.**
- **Controller : 사용자 입력을 받아 필요한 명령을 담당.**

MVC 패턴을 간단하게 알아보면 애플리케이션 구성을 Model, View, Controller 3가지 부분으로 나누어 구성하는 디자인 방식을 말한다.

MVC 패턴의 경우 서버 구현에 일반적으로 사용되었으나, MVC 패턴을 도입한 프론트엔드 프레임워크가 다수 생기는 배경 덕분에 클라이언트 쪽에서도 받아들여졌다.

<br/>

<center>
  <img src='https://user-images.githubusercontent.com/57346455/123436512-a7036780-d609-11eb-890f-e035237107ef.png' alt='MVC Bidirectional Binding'/></center>

하지만 MVC 패턴의 **"양방향 바인딩"** 방식은 프론트엔드 개발에 있어 큰 단점으로 다가왔다.

MVC 패턴의 양방향 흐름을 설명하자면, Controller가 Model의 데이터를 조회, 수정하는 역할을 한다. Model이 없데이트될 경우, View는 화면에 반영한다. 여기서 MVC 패턴은 View가 Model을 업데이트 할 수도 있다. 여기서 Model이 업데이트 되면 View가 따라서 업데이트되고, 업데이트 된 View가 다시 다른 Model을 업데이트 하는 등, 양방향 바인딩 형식으로 진행이 가능하다.

이러한 **"양방향 바인딩"** 구현은 데이터가 어떤 처리로 변경되고 있는지를 알기 어렵고 애플리케이션의 규모가 커질수록 Model 전부를 제어하는 것이 어려워진다. 이러한 구현 방식은 UI 관련 표현을 복잡하게 만들고 개발자가 예측하지 못할 Side effect를 유발할 수 있다.

<br/>

<br/>

## **Flux 디자인 패턴**

<center>
  <img src='https://user-images.githubusercontent.com/57346455/123438838-11b5a280-d60c-11eb-8f68-da83813926f5.png' alt='MVC Bidirectional Binding'/></center>

Flux 디자인 패턴은 앞에서 언급한 "양방향 바인딩" 구현 방식을 **"단방향 데이터 흐름"** 방식으로 구현하는 방식이다.

기존의 양방향 흐름 방식과는 달리 Flux 다자인 패턴은 View가 직접 Model에 접근하지 않고 Action을 발행해 Dispatcher로 하여금 Model 업데이트를 진행하는 단방향적 흐름을 가진다.

Flux 패턴을 잘 이해하고 있다면 React 라이브러리는 물론이고 단일 방향 상태 관리 라이브러리 Redux를 이해하는데도 큰 도움이 된다.

<br/>

### Action

- Flux 패턴은 Action의 생성(발행)으로 데이터 흐름이 시작된다.
- Action은 고유의 Type과 상황에 따라 업데이트 시에 필요한 데이터를 가지고 있다.

### Dispatcher

- 



<br/>

<br/>

<br/>

