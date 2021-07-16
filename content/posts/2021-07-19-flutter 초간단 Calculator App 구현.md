---
template: post
title: "[Flutter] 초간단 Calculator App 구현해보기"
draft: false
date: 2021-07-19
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Calculator App 구현

<br/>

<br/>

간단한 Calculator App 구현을 통해 위젯 사용에 익숙해지려 한다.

유저의 입력을 받기 위해 TextField 위젯을 사용함 => TextField로부터 입력받아오는 문자열은 onChanged 속성을 통해 변수에 저장해두고 사용할 수 있음. 입력 문자열이 바로 화면에 나타나게 하려면 setState()를 onChanged 속성 함수에 넣어줌

TextField 위젯을 Row, Column 위젯 하위 항목으로 넣어 UI를 구성할 때에는 Container 위젯에 넣어서 사용하는 것이 높이, 너비를 조정하고 레이아웃을 구성하기 용이함 => Container 위젯이 html의 div 태그의 역할을 한다고 생각하면 이해가 쉬움

반복되는 커스텀 위젯은 함수로 덜어내어 코드 구조를 간단화 시키는 것이 용이 -> 컴포넌트 분리와 비슷하게 구조화



#### **숫자 <=> 문자열 타입 변환**

숫자 타입 -> 문자열 타입: toString() 메소드 사용

```dart
void main() {
  int num1 = 15;
  double num2 = 15.5;
  num num3 = 16;
  
  print(num1.toString());
  print(num2.toString());
  print(num3.toString());
}
```

문자열 타입 -> 숫자 타입: int.tryParse(), double.tryParse(), num.tryParse() 메소드 사용. parse() 메소드의 경우 숫자 형태의 문자열이 아닐 경우 FormatException을 발생시키지만 tryParse()의 경우 null을 반환함

```dart
void main() {
  String str1 = '15.5';
  String str2 = 'hello world';
  
  print(double.tryParse(str1));
  print(num.tryParse(str2));
  
  print(double.parse(str1));
  print(num.parse(str2));
}
```



#### **두 숫자 계산기 구현 코드**

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Test App',
      theme: ThemeData.dark(),
      home: Scaffold(
          appBar: AppBar(title: Center(child: Text('Calculator APP'))),
          body: Calculator()),
    );
  }
}

class Calculator extends StatefulWidget {
  const Calculator({Key? key}) : super(key: key);

  @override
  _CalculatorState createState() => _CalculatorState();
}

class _CalculatorState extends State<Calculator> {
  String comp1 = '', comp2 = '', result = 'RESULT';

  String calculFunc(String ch) {
    num? num1 = num.tryParse(comp1), num2 = num.tryParse(comp2);

    try {
      if (num1 == null || num2 == null) throw Error;

      switch (ch) {
        case '-':
          return (num1 - num2).toString();
        case '+':
          return (num1 + num2).toString();
        case '*':
          return (num1 * num2).toString();
        default:
          return (num1 / num2).toString();
      }
    } catch (Error) {
      return 'NOT NUMBER FORMAT';
    }
  }

  Widget _makeCalculateButton(String ch) {
    return ElevatedButton(
      onPressed: () => setState(() => {result = calculFunc(ch)}),
      child: Text(
        ch,
        style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
      ),
      style: ElevatedButton.styleFrom(primary: Color(0xFF9FA19F)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text('OSTAR Calculator',
              style: TextStyle(fontSize: 30, color: Color(0xFFCDC9C9))),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                  width: 150,
                  height: 40,
                  child: TextField(
                    onChanged: (value) => comp1 = value,
                    decoration: InputDecoration(
                        border: OutlineInputBorder(), labelText: 'Number'),
                  )),
              Container(
                  width: 150,
                  height: 40,
                  child: TextField(
                    onChanged: (value) => comp2 = value,
                    decoration: InputDecoration(
                        border: OutlineInputBorder(), labelText: 'Number'),
                  )),
            ],
          ),
          Container(
              width: 200,
              height: 60,
              child: TextField(
                onChanged: (value) => comp1 = value,
                decoration: InputDecoration(
                    border: OutlineInputBorder(), labelText: result),
              )),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _makeCalculateButton('-'),
              _makeCalculateButton('+'),
              _makeCalculateButton('*'),
              _makeCalculateButton('/'),
            ],
          )
        ],
      ),
    );
  }
}

```

<br/>

<br/>

<br/>
