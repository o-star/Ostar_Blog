---
template: post
title: "[Flutter] Widget"
draft: false
date: 2021-07-16
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# widget

<br/>

Flutter에 대해 기초부터 시작하다 보면 위젯(Widget)의 개념을 확실히 이해하고 넘어가야 할 필요가 있는 듯 하다. 분명 다른 언어(특히 앱 개발 언어)에서 여기는 위젯과는 조금 다른 개념과 구조를 가지고 있는 듯 해서 개념과 코드 구조를 이해할 필요가 있다.

- Widget - 소형 장치, 부품이라는 사전적 의미를 가짐. 컴퓨터 분야에서는 UI의 일종인 미니 애플리케이션을 의미함.

Flutter에서 widget은 화면을 구성하는 컴포넌트를 의미한다. 컴포넌트란 단어에서부터 유추해볼 수 있듯이 React의 상태 관리 등의 개념과도 밀접한 관련성을 가지고 있다.

Widget은 좀 더 자세히 설명하자면 UI를 구성하는 모든 기본 단위요소를 일컫으며, 안드로이드의 경우 View정도로 생각하면 이해를 도울 수 있다.

View와는 차이점이라고 한다면, Flutter에서는 margin, padding과 같은 속성값 또한 위젯으로 다루어 여러 위젯들을 쌓고 쌓아 화면을 구성하는 것이다.

<br/>

#### **Widget 종류**

- Stateless Widget - 상태를 가지지 않는 위젯. 상태를 가지지 않기 때문에 어떤 업데이트가 존재하지 않고 모든 속성값이 final이다.
- Stateful Widget - 상태를 가지는 위젯. 상태가 업데이트될 때마다 재빌드 과정을 거친다. => React 컴포넌트 생명주기와 같이 state 생명주기의 이해가 필요함
- Inherited Widget - 상속 위젯. 특정 위젯의 데이터를 하층 위젯들이 모두 사용할 수 있는 특별한 위젯

<br/>

#### **Widget Tree**

위젯 간의 부모, 자식 관계를 표현한 트리이다.

MyApp => 최상위 프로젝트 이름.

MaterialApp => View 상의 모든 위젯을 감싸고 있는 위젯.

MyHomePage => 본격적인 앱의 디자인, 기능을 개발하는 위젯. 커스텀 위젯이기 때문에 이름은 유동적으로 변경 가능.

Scaffold => 디자인, 기능이 추가되지 않은 빈 페이지를 제공하는 위젯.

![image](https://user-images.githubusercontent.com/57346455/125572066-429f00e6-342d-4c19-82f3-400ac87a243a.png)

<br/>

<br/>

<br/>
