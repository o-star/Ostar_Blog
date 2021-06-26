---
template: post
title: "[BAEKJOON] 2342. Dance Dance Revolution"
draft: false
date: 2021-06-26
description: >-
  You know, I hate routine.

  But one of the greatest things about being a programmer is that you can
  automate your routine.
category: Algorithm
tags:
  - algorithm
  - baekjoon
  - C++

---



## 문제 : 

승환이는 요즘 "Dance Dance Revolution"이라는 게임에 빠져 살고 있다. 하지만 그의 춤 솜씨를 보면 알 수 있듯이, 그는 DDR을 잘 하지 못한다. 그럼에도 불구하고 그는 살을 뺄 수 있다는 일념으로 DDR을 즐긴다.

DDR은 아래의 그림과 같은 모양의 발판이 있고, 주어진 스텝에 맞춰 나가는 게임이다. 발판은 하나의 중점을 기준으로 위, 아래, 왼쪽, 오른쪽으로 연결되어 있다. 편의상 중점을 0, 위를 1, 왼쪽을 2, 아래를 3, 오른쪽을 4라고 정하자.

<center>
  <img src='https://user-images.githubusercontent.com/57346455/123510119-a83d9e80-d6b4-11eb-8811-19f74fcd0d11.png' alt='2342 description' />
</center>

처음에 게이머는 두 발을 중앙에 모으고 있다.(그림에서 0의 위치) 그리고 게임이 시작하면, 지시에 따라 왼쪽 또는 오른쪽 발을 움직인다. 하지만 그의 두 발이 동시에 움직이지는 않는다.

이 게임에는 이상한 규칙이 더 있다. 두 발이 같은 지점에 있는 것이 허락되지 않는 것이다. (물론 게임 시작시에는 예외이다) 만약, 한 발이 1의 위치에 있고, 다른 한 발이 3의 위치에 있을 때, 3을 연속으로 눌러야 한다면, 3의 위치에 있는 발로 반복해야 눌러야 한다는 것이다.

오랫동안 DDR을 해 온 백승환은 발이 움직이는 위치에 따라서 드는 힘이 다르다는 것을 알게 되었다. 만약, 중앙에 있던 발이 다른 지점으로 움직일 때, 2의 힘을 사용하게 된다. 그리고 다른 지점에서 인접한 지점으로 움직일 때는 3의 힘을 사용하게 된다. (예를 들면 왼쪽에서 위나 아래로 이동할 때의 이야기이다.) 그리고 반대편으로 움직일때는 4의 힘을 사용하게 된다. (위쪽에서 아래쪽으로, 또는 오른쪽에서 왼쪽으로). 만약 같은 지점을 한번 더 누른다면, 그때는 1의 힘을 사용하게 된다.

만약 1 → 2 → 2 → 4를 눌러야 한다고 가정해 보자. 당신의 두 발은 처음에 (point 0, point 0)에 위치하여 있을 것이다. 그리고 (0, 0) → (0, 1) → (2, 1) → (2, 1) → (2, 4)로 이동하면, 당신은 8의 힘을 사용하게 된다. 다른 방법으로 발을 움직이려고 해도, 당신은 8의 힘보다 더 적게 힘을 사용해서 1 → 2 → 2 → 4를 누를 수는 없을 것이다.

<br/>

## 입력 :

입력은 지시 사항으로 이루어진다. 각각의 지시 사항은 하나의 수열로 이루어진다. 각각의 수열은 1, 2, 3, 4의 숫자들로 이루어지고, 이 숫자들은 각각의 방향을 나타낸다. 그리고 0은 수열의 마지막을 의미한다. 즉, 입력 파일의 마지막에는 0이 입력된다. 입력되는 수열의 길이는 100,000을 넘지 않는다.

<br/>

## 출력 : 

한 줄에 모든 지시 사항을 만족하는 데 사용되는 최소의 힘을 출력한다.

<br/>

<br/>

___

## 풀이 :

**DP를 활용해야 문제를 해결할 수 있었다. 어떤 데이터를 메모이제이션할지 잘 정해서 점화식만 세우면 문제를 해결할 수 있었으나 점화식을 설계하는데까지 쉽지는 않은 문제인 듯 하다.**

<br/>

#### **[세부 구현사항]**

- **문제는 한번 발을 옮기는 경우의 수가 왼발, 오른발 두가지 경우의 수가 있기 때문에 최대 100,000 길이의 수열이 들어오는 문제에서 완전 탐색 방식으로 문제를 해결할 수는 없다.**
- **문제를 해결하기 위해선 `dp[i][j][k]`(i: 수열 인덱스, i번째 밟아야 하는 버튼, j:왼쪽발의 위치, k:오른쪽발의 위치)를 활용해서 현재 발 위치에서 최소의 힘 값을 사용해 다음 번 버튼을 밟을 경우의 최소 힘 값을 구한다.**
- **발을 옮길 수 있는 경우는 같은 지점을 다시 누를 경우(+1), 중앙 위치에서 다른 버튼을 누를 경우(+2), 인접 지점으로 이동해서 누를 경우(+3), 반대편으로 이동해 누를 경우(+4) 총 4가지 경우가 있다. => 왼발, 오른발은 무시해도 좋다. 여기서 무시해도 된다는 말은 왼쪽 발을 기준으로 발을 옮길 수 있는 경우를 모두 고려할 경우 오른발을 이동하는 경우도 같은 최소 힘이 동일하다는 의미이다. (`dp[i][j][k] == dp[i][k][j]`)**
- **점화식 : `dp[i][k][nextbtn] = min(dp[i - 1][k][nextbtn] + 1, dp[i - 1][k][0] + 2, dp[i - 1][k][nextbtn == 4 ? 1 : nextbtn + 1] + 3, dp[i - 1][k][nextbtn == 1 ? 4 : nextbtn - 1] + 3, dp[i - 1][k][(nextbtn + 2) % 4 == 0 ? 4 : (nextbtn + 2) % 4] + 4)`**

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
#include <vector>
#include <algorithm>

#define MAX 987654321

using namespace std;
int dp[100000][5][5];
vector<int> btnvec;

void dpProcess() {
    int vecsize = btnvec.size();


    for (int i = 0; i < vecsize; i++)
        for (int j = 0; j < 5; j++)
            fill_n(dp[i][j], 5, MAX);
    dp[0][0][0] = 0;

    for (int i = 1; i < vecsize; i++) {
        int nextbtn = btnvec[i];

        for (int k = 0; k < 5; k++) {
            if (k == nextbtn) continue;
            dp[i][k][nextbtn] = min(
                    {MAX, dp[i - 1][k][nextbtn] + 1, dp[i - 1][k][0] + 2,
                     dp[i - 1][k][nextbtn == 4 ? 1 : nextbtn + 1] + 3,
                     dp[i - 1][k][nextbtn == 1 ? 4 : nextbtn - 1] + 3,
                     dp[i - 1][k][(nextbtn + 2) % 4 == 0 ? 4 : (nextbtn + 2) % 4] + 4});
            dp[i][nextbtn][k] = dp[i][k][nextbtn];
        }
    }
}

int main() {
    int btn, minans = MAX;

    btnvec.push_back(0);
    while (true) {
        cin >> btn;
        if (!btn) break;
        btnvec.push_back(btn);
    }
    dpProcess();

    int lastidx = btnvec.size() - 1;
    for (int i = 0; i < 5; i++)
        for (int j = 0; j < 5; j++)
            minans = min(minans, dp[lastidx][i][j]);
    cout << minans << '\n';
    return 0;
}
```

</details>
<br/>

<br/>

