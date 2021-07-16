---
template: post
title: "[Flutter] Stream"
draft: false
date: 2021-07-20
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Stream

<br/>

<br/>

**Reactive Programming** - Reactive Programming이란 데이터 흐름과 전달에 관한 프로그래밍 패러다임이다. 쉽게 말해 비동기 데이터 처리를 효율적으로 만들기 위한 패러다임.

비동기 처리에는 http 요청 및 응답, UI 액션 이벤트, 데이터 저장 및 접근 등의 경우가 있다.

Flutter에서는 Reactive Programming에 Stream과 RxDart를 시용한다.

<br/>

**Stream**:  데이터가 들어오고 나가는 통로. 데이터 통신에서는 타이밍을 잡기 어렵기 때문에 데이터 통신 비동기 작업에서 Stream이 사용됨.

**StreamController**: Stream을 제어하는 컨트롤러 클래스. Stream Controller에서는 데이터 전송과 Stream 관련 이벤트를 처리한다.

**StreamBuilder**: Stream의 변화를 구독하고 있는 위젯 클래스. setState() 없이 최신 데이터를 참조해 UI 변경을 만들어 낼 수 있다.

<br/>

#### **Stream을 활용한 Counter App 코드**

```dart
import 'dart:async';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Test App',
      theme: ThemeData.dark(),
      home: Scaffold(
          appBar: AppBar(title: Center(child: Text('Counter APP'))),
          body: CounterPage()),
    );
  }
}

class CounterPage extends StatefulWidget {
  const CounterPage({Key? key}) : super(key: key);

  @override
  _CounterPageState createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int count = 0;
  StreamController<int> _streamController = StreamController();

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text(
            'Stream Builder Counter',
            style: TextStyle(fontSize: 25, color: Color(0xffbdb9b9)),
          ),
          StreamBuilder(
              stream: _streamController.stream,
              initialData: 0,
              builder: (BuildContext context, AsyncSnapshot<int> snapshot) {
                return Text(snapshot.data.toString(),
                    style:
                        TextStyle(fontWeight: FontWeight.bold, fontSize: 45));
              }),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ElevatedButton(
                  style: ElevatedButton.styleFrom(primary: Color(0xFFB3AEAE)),
                  onPressed: () => _streamController.sink.add(--count),
                  child: Text('-',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 35,
                          color: Color(0xFF161515)))),
              ElevatedButton(
                  style: ElevatedButton.styleFrom(primary: Color(0xFFB3AEAE)),
                  onPressed: () => _streamController.sink.add(++count),
                  child: Text('+',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 35,
                          color: Color(0xFF161515))))
            ],
          )
        ],
      ),
    ));
  }
}

```

#### <br/>

<br/>

<br/>
