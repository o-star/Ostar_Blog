---
template: post
title: "[codeground] 오르락 내리락"
draft: false
date: 2021-07-02
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: Algorithm
tags:
  - algorithm
  - codeground
  - C++

---



## 문제 : 

1 이상의 정수를 받아서 다음의 규칙에 따른 “작업”을 반복하여 결국 1 을 만드는 게임을 하려고 한다.
아래 규칙은 한번의 작업에 대한 것이고, 작업의 결과로 만들어지는 수에 작업을 수행하는 것을 반복한다. 규칙에도 나와 있듯이 현재 수가 1 인 경우는 작업을 하지 않고 멈춘다.

1. 만약 수가 1이면 작업을 하지 않고 멈춘다.
2. 만약 수가 1이 아닌 홀수이면 1 을 더한다.
3. 만약 수가 짝수이면 2 로 나눈다.

예를 들어, 받은 수가 2 인 경우는 2→1 로 1 회의 작업 후에 멈춘다.
받은 수가 4 인 경우는 4→2→1 로 2 회의 작업 후에 멈춘다.
받은 수가 3 인 경우는 3→4→2→1 로 3 회의 작업 후에 멈춘다.
받은 수가 6 인 경우는 6→3→4→2→1 로 4 회의 작업 후에 멈춘다.

앞의 예 들에서 볼 수 있듯이, 받은 수가 3 인 경우의 작업 횟수를 알면 받은 수가 6인 경우의 작업 횟수를 바로 계산할 수 있다는 것을 알 수 있다.

두 정수 N1과 N2를 입력으로 받아서 (1≤N1≤N2≤10^6), N1,N1+1,N1+2,…,N2의 작업 회수를 모두 더한 값을 계산하는 프로그램을 작성하라.



\- 제한시간: 전체 테스트 케이스는 10,000개 이하이며, 전체 수행 시간은 1초 이내. (Java 2초 이내)

제한 시간을 초과하면 제출한 소스코드의 프로그램이 즉시 종료되며,
그때까지 수행한 결과에서 테스트 케이스를 1개 그룹 이상 통과하였더라도 점수는 0점이 됩니다.
그러나, 제한 시간을 초과하더라도 테스트 케이스를 1개 그룹 이상 통과하였다면 '부분 점수(0< 점수< 만점)'를 받을 수 있으며,
이를 위해서는, C / C++ 에서 "printf 함수" 사용할 경우, 프로그램 시작부분에서 "setbuf(stdout, NULL);"를 한번만 사용하십시오.
C++에서는 "setbuf(stdout, NULL);"와 "printf 함수" 대신 "cout"를 사용하고, Java에서는 "System.out.printIn"을 사용하시면,
제한 시간을 초과하더라도 '부분 점수'를 받을 수 있습니다.
※ 언어별 기본 제공 소스코드 내용 참고
만약, 제한 시간을 초과하지 않았는데도 '부분 점수'를 받았다면, 일부 테스트 케이스를 통과하지 못한 경우 입니다.

**- 메모리 사용 제한 : heap, global, static 총계 256MB, stack 100MB
\- 제출 제한 : 최대 10회 (제출 횟수를 반영하여 순위 결정)**

<br/>

## 입력 :

입력 파일에는 여러 테스트 케이스가 포함될 수 있다.
파일의 첫째 줄에 테스트 케이스의 개수를 나타내는 자연수 TT 가 주어지고,
이후 차례로  TT 개의 테스트 케이스가 주어진다. (1≤T≤10,000) 
각 테스트 케이스의 첫 줄에는 정수 N1N1과 N2N2가 주어진다. (1≤N1≤N2≤10^6)

\- 점수 : 각 제출에서 취득한 점수 중에서 최대 점수 (**만점 100점**)
  주어지는 테스트 케이스 데이터들의 그룹은 아래와 같으며,
 각 그룹의 테스트 케이스를 모두 맞추었을 때 해당되는 부분 점수를 받을 수 있다.

ㆍ 그룹 1 (34점) : 이 그룹의 테스트 케이스에서는 1≤N1≤N2≤10^3
ㆍ 그룹 2 (66점) : 이 그룹의 테스트 케이스에서는 원래의 조건 외에는 다른 제약조건이 없다.

<br/>

## 출력 : 

각 테스트 케이스의 답을 순서대로 표준출력으로 출력하여야 하며,
각 테스트 케이스마다 첫 줄에는 “Case #C”를 출력하여야 한다. 이때 C는 테스트 케이스의 번호이다.
그 다음 줄에, N1,N1+1,N1+2,…,N2의 작업 회수를 모두 더한 값을 출력한다.

<br/>

<br/>

___

## 풀이 :

**본 문제는 DP방식을 전형적으로 사용하는 문제이다.**

**숫자는 1일 경우 작업을 끝내고, 짝수일 경우 나누기 2의 작업을, 홀수일 경우 1을 더하는 과정이 진행된다.**

**따라서 본 작업을 재귀 형식의 함수로 코드를 구현한 후 해당 숫자의 작업 횟수들을 모두 저장해두고 dp 배열에 저장된 횟수값이 있을 경우에는 memoization 값을 사용하여 값을 계산해준다.**

**따라서 이런 식으로 코드가 진행되게 되면 반복되는 과정 없이 모든 숫자들이 O(1)의 시간복잡도로 작업횟수를 찾아낼 수 있다.**

**[ 주의사항 ]**

**Codeground 문제는 첨 풀어보다보니, cout 출력 코드에서 'endl' 코드를 삽입해서 계속적으로 시간초과가 떳다.**

**endl의 경우 '\n' 코드로 개행하는 것과 달리 버퍼를 비우는 방식이기에 더 많은 시간이 소요되기 때문에 이러한 점을 고려해서 '\n'을 사용하도록 하자**

**(평소엔 잘 사용하는데 endl 코드를 제대로 확인하지 않은 잘못이다 ..)**

<br/>

<br/>

---

## 코드 :

<details>
<summary style="cursor:pointer; font-size:1.5rem">
	코드 보기/접기
</summary>

```c++
#include <iostream>

#define RANGE 1000000

using namespace std;
int dp[RANGE + 1], accsums[RANGE + 1];

int findProcessNums(int curnum) {
    if (curnum == 1) return 0;
    if (dp[curnum]) return dp[curnum];

    if (curnum % 2) return dp[curnum] = findProcessNums(curnum + 1) + 1;
    return dp[curnum] = findProcessNums(curnum / 2) + 1;
}

void dpProcess() {
    for (int i = 2; i <= RANGE; i++) {
        if (!dp[i]) findProcessNums(i);
        accsums[i] = accsums[i - 1] + dp[i];
    }
}

int main(int argc, char **argv) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int T, test_case, start, end;

    dpProcess();

    cin >> T;
    for (test_case = 0; test_case < T; test_case++) {
        cin >> start >> end;

        cout << "Case #" << test_case + 1 << '\n';
        cout << accsums[end] - accsums[start - 1] << '\n';
    }

    return 0;
}
```

</details>
<br/>

<br/>

<br/>
