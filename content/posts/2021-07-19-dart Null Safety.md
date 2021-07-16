---
template: post
title: "[Dart] Null Safety"
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



# Null Safety

<br/>

<br/>

**Null**: 프로그램에서 아무 값도 대입하지 않은 상태. 데이터는 메모리 상 특정 위치(주소)에 저장되는데, Null은 이 메모리 주소 값이 없는 상태를 말함.

**Null Safety**: nullable 변수와 non-nullable 변수를 명확히 구분하여 Null Exception 상황을 컴파일 시 미리 방지하고 명확한 null check 과정을 진행할 수 있게끔 만들어줌

플러터 2.0버전부터 Null Safety를 적용하고 있다. 

Null Safety 도입은 개발자들의 null 예외 상황 발생을 방지할 뿐 만 아니라, 플러터 내부적으로 nullabe 변수만 null check를 진행하면 되기 때문에 처리 속도 면에서도 이로운 효과를 가져왔다.

<br/>

**Non-Nullable Type**: 일반적으로 사용하는 모든 변수는 non-nullable 타입 변수에 해당한다. 즉, null값을 가질 수 없는 변수들이다. Non-nullable 타입 변수는 초기화 없이 코드를 진행할 수 없다.

**Nullabe Type**: null 값을 가질 수 있는 변수 타입. 변수 선언 시 '?' 연산자를 사용하면 nullable 타입을 의미한다.

Late: non-nullable 타입 변수를 바로 초기화하지 않고 lazy하게 초기화하는 키워드이다.

```dart
void main() {
  String name;
  
  print(name);
}	// null safety error code

void main() {
  String? name;
  
  print(name);
} // null 출력 완료
```

<br/>

#### **Null 연산자 정리**

? - nullable type 표기 연산자

! - nullable type 변수가 null이 아니라고 명시하는 표기 연산자. nullable 속성을 벗겨내는 대신 null 데이터 변수에 !를 사용하면 에러를 발생할 수 있기 때문에 유의해야함

?. - 조건적 멤버 접근 연산자, [ (좌항) ?. (우항) ] 의 식에서 좌항이 null일 경우 null을 반환하고 아니면 우항의 값을 반환하는 형태의 연산자

?? - [ (좌항) ?? (우항) ] 에서 좌항이 nul이 아니면 좌항을 반환하고 null이면 우항을 반환한다.

<br/>

<br/>

<br/>
