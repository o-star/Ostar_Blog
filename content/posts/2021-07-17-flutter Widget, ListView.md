---
template: post
title: "[Flutter] Widget & ListView"
draft: false
date: 2021-07-17
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Widget & ListView

<br/>

## MaterialApp Widget

Flutter App을 구성하다보면 MaterialApp Widget으로 감싸져있는 코드가 대부분이다.

MaterialApp Widget은 구글이 추구하고 있는 Material Design 요소들이 담긴 Widget들을 기본적으로 사용할 수 있게끔 잡아주는 App Widget이다.

Material Design은 구글에서 웹, 앱을 통틀어 모든 개발 플랫폼에서 UI를 하나로 묶기 위해 제시한 디자인 방법이다.

머티리얼 디자인의 경우 평면에 가상의 빛을 이용한 입체효과를 주어 그림자 효과 등으로 UI를 디자인 하는 특징이 있다.

<br/>

#### **MaterialApp 속성요소**

title: App 목록에 보여지는 타이틀.

theme: 앱의 테마를 설정할 수 있는 요소. ThemeData 클래스를 활용해 손쉽게 테마를 설정할 수 있음.

home: MaterialApp 실행시 가장 먼저 보여지는 화면, 보통 Scaffold 위젯을 사용하여 구성함.

<br/>

<br/>

## Basic Widgets

Flutter에서 기본적으로 제공하는 위젯으로 자주 사용되기 때문에 사용법을 손에 익혀두면 편리하다.

**Text**: Application 내 스타일 텍스트를 만들 수 있음. 텍스트 스타일 커스텀 가능

**Row, Column**: 가로 세로 방향으로 리스트처럼 보여주는 유연한 레이아웃 구성. => css의 flex 레이아웃을 기반으로 하고 있다. 각 축별 정렬 방법도 매우 유사

**Container**: 직사각형의 레이아웃 요소를 만들어주는 위젯(내부 요소를 가질 수 있음). 배경, 테두리, 높이 등 다양한 스타일, 속성을 설정할 수 있음.

<br/>

<br/>

## ListView

ListView를 구현하는데에는 두 가지 방법이 존재한다. 매우 간단하게 ListView 위젯을 만들어 children 속성에 리스트 아이템으로 쓰일 데이터 리스트를 전달하는 방법과 ListView.Builder를 사용하여 리스트를 구현하는 방법이 있다.

ListView의 경우 많은 아이템들을 리스트로 보여주어야 하기 때문에 아이템 갯수가 10~20개가 아닌 수천 ~ 수만개로 늘어날 경우 아이템을 빌드 과정에서 모두 렌더링하게 되면 성능에 불필요한 과정을 거치게 된다.

따라서 리스트 뷰를 구현한 언어들에서는 현재 화면에서 보이는 아이템들만 렌더링하고 리스트를 넘겨 보이지 않던 아이템을 생성해야할 때, 렌더링을 하는 방식으로 구현해 성능적으로 효율성을 높인다. => Android의 경우 Recycler View 방식이 있음

Flutter에서는 ListView.Builder를 사용하게 되면 성능 측면에서 효율적인 리스트뷰를 구현할 수 있기 때문에 되도록이면 Builder를 사용해 구현하는 것을 추천한다. => 구현 또한 더 쉬움

ListView.seperated를 사용하면 Builder 구현에서 각 아이템별 구분선을 추가시킬 수 있음.

<br/>

#### **ListView.Builder 속성 요소**

**itemBuilder**: 리스트의 각 아이템을 만들어주는 콜백함수를 전달. 콜백 함수 인자로는 BuildContext, index 정보가 있음. BuildContext는 부모의 위젯트리 정보를 전달해주며, index의 경우 현재 리스트의 인덱스 정보를 전달해서 리스트 데이터 인덱스로 활용할 수 있음.

**itemCount**: itemCount로 지정한 순번까지만 리스트 아이템이 생성됨. 즉 리스트 아이템 갯수

**ListTile**: 한 리스트의 아이템을 다양한 속성으로 구성할 수 있게끔 구현된 위젯 클래스

<br/>

stateless Widget을 기반으로 정적 리스트뷰를 구현해보았음.

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Random words Demo App',
      theme: ThemeData.dark(),
      darkTheme: ThemeData.dark(),
      home: Scaffold(
        appBar: AppBar(
            title: Center(
          child: Text('Test App'),
        )),
        body: Center(
          child: StatelessListView(),
        ),
      ),
    );
  }
}

class StatelessListView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        new PersonWidget('Ostar', 'Daegu', 25),
        new PersonWidget('hello', 'Seoul', 23),
        new PersonWidget('hello', 'Seoul', 23),
        new PersonWidget('hello', 'Seoul', 23),
        new PersonWidget('hello', 'Seoul', 23),
        new PersonWidget('hello', 'Seoul', 23),
      ],
    );
  }
}

class PersonWidget extends StatelessWidget {
  String name, address;
  int age;

  PersonWidget(String name, String address, int age)
      : this.name = name,
        this.address = address,
        this.age = age;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text(
            this.name,
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
          ),
          Text(this.address),
          Text(this.age.toString())
        ],
      ),
    );
  }
}

```

to-do list 만들어보기

<br/>

ListView.Builder를 사용한 리스트 뷰 구현 코드

```dart
import 'package:flutter/material.dart';

List<Student> stulist = [
  Student('jeongseok', 'ostar', 25),
  Student('yunmin', 'yummai', 25),
  Student('jeonghwan', 'hwanning', 25),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
  Student('hello', 'cuty', 23),
];
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Random words Demo App',
      theme: ThemeData.dark(),
      darkTheme: ThemeData.dark(),
      home: Scaffold(
        appBar: AppBar(
            title: Center(
          child: Text('Test App'),
        )),
        body: Center(
          child: ListView.builder(
              itemCount: stulist.length,
              itemBuilder: (BuildContext _context, int i) {
                return ListTile(
                  title: Text(stulist[i].name),
                  subtitle: Row(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Text(stulist[i].nickname),
                      Text(' : '),
                      Text(stulist[i].age.toString())
                    ],
                  ),
                );
              }),
        ),
      ),
    );
  }
}

class Student {
  String name;
  String nickname;
  int age;

  Student(String name, String nickname, int age)
      : this.name = name,
        this.nickname = nickname,
        this.age = age;
}

```

<br/>

<br/>

<br/>
