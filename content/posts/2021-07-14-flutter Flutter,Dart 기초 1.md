---
template: post
title: "[Flutter] Flutter, Dart 기초 1"
draft: false
date: 2021-07-14
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: etc
tags:
  - Flutter
  - Dart

---



# Flutter & Dart



#### **Flutter란?**

Google이 2018년도 최초 베타 버전을 발표한 오픈소스 모바일 앱 개발 프레임워크



#### **Flutter의 특징**

- IOS, Android  크로스 플랫폼 프레임워크
- Hot reload: 앱이 실행되고 있는 상태에서 앱의 변경사항을 바로 적용시켜주는 기능 => 빠른 화면 개발에 용이
- C++ 그래픽 라이브러리를 사용하여(Skia) UI를 직접 그림 => Flutter만의 고유한 UI 드로잉을 가지고 있어 여러가지 플랫폼에 대해 안정적인 UI를 생성할 수 있음
- Dart 개발 언어 사용
- 구조적이지만 유연하고(분명 공부하다 보면 계속적으로 느끼는 감정임), 다양한 종류의 기기에서 돌아가게 하는 것이 가장 큰 장점이 아닐까 생각한다.



#### **Flutter Installation**

- Flutter의 경우 다양한 IDE에서 사용이 가능하다 - Android Studio, IntelliJ, VScode, Xcode 등
- flutter doctor (command): flutter 설치에 필요한 것들, 설치 완료 항목들 등을 진단해주는 명령어
- VScode 사용의 경우, flutter, dart 확장 플러그인을 설치해준다.
- VScode 디버깅 시 Android AVD Manager, VScode flutter emulator 등 다양한 애뮬레이터를 사용할 수 있다.



#### **Dart**

- Google에서 Javascript를 대체하기 위해 개발한 Server Side & Front-End 프로그래밍 언어이다.
- UI(User Interface)에 최적화된 언어
- 객체 지향적 언어. markup language가 필요하지 않음.
- java, javascript를 적절하게 섞어놓은 듯한 문법을 가지고 있음.



#### **Dart 기초 문법**

- 큰 따옴표, 작은 따옴표 구분 없음 - Javascript와 유사
- 자료형: Java와 Javascript의 자료형들이 종합적으로 포함된 듯한 자료형
  - int: 정수형 변수
  - double: 실수형 변수
  - String: 문자열 변수. 작은따옴표와 큰 따옴표 모두 사용가능. 작은따옴표가 표준으로 쓰임
  - bool: 참/거짓 변수
  - num: int와 double을 함께 포함하는 타입 변수.
  - var: 타입 추론 자료형. 초기화 값에 따라 데이터 타입을 정함
  - final, const: 초기화 값 이후에 변경되지 않는 변수의 자료형
  - dynamic: 여러 타입의 변경이 필요한 변수일 때 사용하는 자료형. 매개변수 등에 활용되어 유용하게 쓰임

- Collection 자료형
  - List: Java의 List 와 동일한 자료형. 선언 형태에 따라 고정 길이 리스트(new List(n), List(n))와 동적 길이 리스트(List(), [])를 생성할 수 있음
  - Set: 중복되지 않는 요소들을 가지는 집합형 자료형. 중괄홀({})로 묶어 나타냄
  - Map: key, value 쌍의 형태를 가진 요소를 가지는 집합형 자료형. 중괄호({})로 묶어 나타냄
  - Collection 자료형에서 스프레드 연산자(...)를 사용하면 복제, 추가를 편하게 코드로 표현할 수 있음 - Javascript와 유사

<br/>

<br/>

<br/>
