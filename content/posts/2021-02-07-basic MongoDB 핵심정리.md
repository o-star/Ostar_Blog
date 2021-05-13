---
template: post
title: "[Web Basic] MongoDB 핵심정리"
draft: false
priority: 0
date: 2021-02-07
description: >-
  List of the questions from dev to the company.
  Fork it or use it as is.
category: Web
tags:
  - Basic
---

# MongoDB 핵심정리

<br/>

NoSql 데이터베이스로 JSON 형태의 동적 스키마 도큐먼트들을 사용하는 데이터베이스의 일종이다.

웹 플랫폼 개발에서 자바스크립트를 활용한 node.js 플랫폼과 찰떡 궁합으로 자주 쓰이는 편이기에 간단한 사용법과 핵심들만 정리해보고자 한다.

<br/>

### 데이터 구조

![image](https://user-images.githubusercontent.com/57346455/118116800-b21d8200-b425-11eb-869e-f2b99978eec8.png)

- Database : Collection의 물리적 컨테이너. RDBS에서의 데이터베이스와 동일한 단위
- Collection : RDBS에서 Table과 같은 단위. document들이 합쳐져서 만들어진 그룹. RDBS와 달리 스키마를 따로 갖고 있지 않음.
- Document : 한 개 이상의 key-value 쌍으로 이루어진 구조. RDBS에서는 튜플 정도의 단위라고 생각할 수 있음.

<br/>

## 명령어 정리

주의 ! : mongoDB에서 사용되는 모든 명령어는 매개변수를 JSON 객체 형식으로 받아들임

- show dbs : 데이터 베이스 리스트 출력
- db : 현재 사용하고 있는 데이터베이스 출력
- db.stats() : 현재 사용하고 있는 데이터베이스 상태 및 정보 출력
- use (database name) : 해당 데이터베이스 사용
- db.dropDatabase() : 해당 데이터베이스 삭제
- db.createCollection() : 현재 디비에 컬렉션 생성
- show collections : 현재 데이터베이스의 컬렉션들 조회
- db.('Collection name').save({'저장하고 싶은 Document'}) : 해당 Collection에 Document 저장. 해당 컬렉션이 존재하지 않을 경우에는 mongoDB에서 알아서 생성 후 저장시켜줌.
- db.('Collection name').insert({'저장하고 싶은 Document'}) : save 명령어와 동일하게 도큐먼트 삽입 명령어
- db.('Collection name').insert({'조회하고 싶은 도큐먼트 조건 기입'}) : 해당 컬렉션에서 도큐먼트 조회 명령어
- mongoDB 조회 시 조건 연사자 모음들

```jsx
db.scores.find({a:2});  // a==2인 도큐먼트 조회
db.scores.find({a:{'$gt':1, '$lt':4}});  //a가 1 초과 4 미만인 도큐먼트 조회
// $gt:> , $lt:< , $gte:>= , $lte:<= , $ne:!=
db.scores.find({a:{'$in':[2, 3, 4]}})   //a가 [2, 3, 4] 배열의 값들 중 하나의 값일 경우 조회
```

- db.('Collection name').remove({'삭제하고 싶은 도큐먼트 조건 기입'}) : 해당 컬렉션에서 도큐먼트 삭제 명령어
- db.('Collection name').drop() : 해당 컬렉션 삭제 명령어
- db.('Collection name').update({검색조건}, {변경하고자 하는 도큐먼트 내용}) : 도큐먼트 수정 명령어
- db.('Collection name').update({검색조건}, {'$set':{조회된 도큐먼트에 업데이트할 내용}}) : 도큐먼트 수정 명령어

<br/>

**주의사항?**

mongoose schema 생성할 때 주의할 점... 계속 실수함

schema model 이름의 복수형이 collection 이름이어야함!

![image](https://user-images.githubusercontent.com/57346455/118116777-ab8f0a80-b425-11eb-8d16-e7454855b20f.png)

<br/>

<br/>