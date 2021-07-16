---
template: post
title: "[Flutter] Widget Life Cycle"
draft: false
date: 2021-07-18
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Stateful Widget Life Cycle

<br/>

<br/>

Stateful Widget의 경우 위젯의 생성에서부터 상태의 변경 위젯이 더 이상 필요없어 위젯 트리에서 빠질 때까지 다음의 생명주기를 따른다.

![image](https://user-images.githubusercontent.com/57346455/125742201-d502d1ac-a63c-4496-827e-fb26a50a3c4a.png)

InitState() -> build() <-> setState() or didUpdateConfig() -> dispose()

initState(): 위젯이 처음 생성될 때 호출되는 메소드. 주로 속성 초기화의 용도로 쓰임

didChangeDependencies(): 위젯이 최초 생성된 후 initState() 후에 호출되는 메소드. React의 componenetDidMount() 생명주기와 유사

build(): 위젯의 build과정을 나타내는 메소드. setState() 호출 후 매번 호출됨.

setState(): Stateful Widget이 들고 있는 상태들에 변경을 가할 때 호출되는 메소드. 데이터가 변경되었음을 프레임워크에게 알리고 재빌드를 수행하게 함

dispose(): State 객체를 영구적으로 제거할 때 호출하는 메소드.

state 생명주기를 공부하고 상태값의 변경을 일으켜 기능을 동작시키는 Counter App, To do list App을 구현해보았음.

<br/>

플러터 위젯, 클래스 도큐먼트 참조 사이트 : api.flutter.dev

<br/>

<br/>

<br/>
