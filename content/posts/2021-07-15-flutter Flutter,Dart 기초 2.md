---
template: post
title: "[Flutter] Flutter, Dart 기초 2"
draft: false
date: 2021-07-15
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Flutter & Dart 2

<br/>

## **Function**

=> 기본적 문법 구조는 최대한 빠르게 넘어가고 Dart가 가지는 함수 코드 구조의 특성에 중점을 두었다.

Dart의 경우 완전 객체 지향 언어에 속한다.

Dart 함수의 경우 void 반환형일 경우 void 구문을 생략할 수 있다. [ void main() => main() ]

**Optional parameter**

- named optional parameter: 선택적 매개변수. 함수에 매개변수 전달 시, paramName: value 형태로 매개변수 값을 지정할 수 있음. 중괄호({}) 내부에 명시해줌
- positional optional parameter: 위치적 매개변수. 매개변수를 생략할 수 있음. 생략 시 해당 매개변수 값은 null값이 되며 대괄호([]) 내부에 명시해줌

Dart는 모든 것을 객체로 간주하면 함수 또한 객체(일급 객체)로 간주한다 => Javascript 일급 함수 개념과 유사

**일급함수**

- 함수를 변수나 데이터 구조에 할당할 수 있어야 한다
- 함수를 객체의 인자로 넘길 수 있어야 한다.
- 함수를 객체의 반환값으로 제공할 수 있어야 한다.

<br/>

<br/>

## **Class**

DART 언어는 완전 객체 지향적 언어의 형태를 띄기 때문에 다양한 객체 지향적 코드 구조 및 문법을 공부해두어야 한다.

**Constructor**: Dart의 클래스 생성자의 경우 다른 언어들과 조금의 문법적 차이를 보인다. 클래스명을 함수명으로 하는 생성자를 구현하며 ':' 키워드 이후에 각 변수의 초기값을 설정하는 코드를 기입한다.

**정보 은닉**: Dart 언어의 경우 접근 지정자가 private, public 두 종류 뿐이다. 기본적으로 아무 키워드가 없는 변수는 모두 public에 해당하고, _(밑줄) 키워드가 붙어있는 변수의 경우 private 변수로 간주된다. => Dart private 변수에서 주의할 점은 private 접근 가능 범위가 동일 클래스 범위 내가 아닌 동일 라이브러리 내의 범위이기 때문에 같은 파일 내에서는 private 변수라 하더라도 접근이 가능하다.

```dart
class Student {
  String name;
  int age;
  int _stuNum;

  Student(String name, int age, int stunum)
      : this.name = name,
        this.age = age,
        this._stuNum = stunum;

  void sayName() {
    print('제 이름은 ${this.name}입니다!');
  }

  int get getstuNum => _stuNum;
  set setstuNum(stunum) => this._stuNum = stunum;
}
```

**상속**: Dart에서의 상속은 extends()와 super() 키워드를 통해 구현된다. Java 문법과 큰 차이는 없으며 자식 클래스의 생성자에서 super() 생성자를 ':' 키워드 다음에 작성해주는 약간의 차이가 있다.

```dart
class BoyStudent extends Student{
  BoyStudent(String name, int age, int stunum)
    : super(name, age, stunum);
}
```

Dart 언어의 경우 오버로딩은 지원되지 않으며 오버라이딩은 지원된다.

**Overriding**: 부모 클래스의 메소드를 자식클래스에서 재정의하여 사용하는 것을 일컫음. Dart에서는 @override 애노테이션을 활용하여 쉽게 오버라이딩 메소드를 구현할 수 있다.

```dart
class Calculator {
  int a;
  int b;

  Calculator(int a, int b)
      : this.a = a,
        this.b = b;

  int calculate() => a * b;
}

class SubCalculator extends Calculator {
  SubCalculator(int a, int b) : super(a, b);

  @override
  int calculate() => a + b;
}

void main() {
  Calculator mainC = new Calculator(3, 3);
  SubCalculator subC = new SubCalculator(3, 3);

  print('main calculate result = ${mainC.calculate()}');
  print('sub calculate result = ${subC.calculate()}');
}

```

<br/>

<br/>

## **Review**

Dart는 분명 객체지향적인 구조가 확립된 언어인 동시에 개발자에게 어느 정도의 자유를 주는 유연한 언어라는 것이 공부할 수록 느껴졌다. 

하지만 Dart를 공부하면 내가 Javascript를 공부할 때 느낀 감정들과 비슷한 감정을 느낀 것 중 하나는 개발자에게 코드 구현의 자유가 높아질 수록 사실 여러 에러케이스들이 더 발생할 수 있지 않을까 하는 생각이다. Dart의 경우에서도 자료형의 자율성이 클 뿐만 아니라 코드 구조나 디자인 패턴이 확립되지 않은 언어라는 생각이 많이 들었고, 그에 따라 여러 개발자들의 다양한 코드 스타일을 살펴볼 수 있는 언어이지 않을까라는 생각을 했다. 하지만 깊지 않은 지식으로는 자칫 하면 여러 에러들을 발생시킬 수 있는 코드를 개발할 수도 있겠구나 라는 생각에 좀 더 차근차근 깊게 공부해봐야겠다라는 생각을 했다.

<br/>

<br/>

<br/>

