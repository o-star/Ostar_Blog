---
template: post
title: "[BAEKJOON] 16985. Maaaaaaaaaze"
draft: false
date: 2021-05-13
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



#### 문제 : 

평화롭게 문제를 경작하며 생활하는 BOJ 마을 사람들은 더 이상 2차원 미로에 흥미를 느끼지 않는다. 2차원 미로는 너무나 쉽게 탈출이 가능하기 때문이다. 미로를 이 세상 그 누구보다 사랑하는 준현이는 이런 상황을 매우 안타깝게 여겨 아주 큰 상금을 걸고 BOJ 마을 사람들의 관심을 확 끌 수 있는 3차원 미로 탈출 대회를 개최하기로 했다.

대회의 규칙은 아래와 같다.

- 5×5 크기의 판이 5개 주어진다. 이중 일부 칸은 참가자가 들어갈 수 있고 일부 칸은 참가자가 들어갈 수 없다. 그림에서 하얀 칸은 참가자가 들어갈 수 있는 칸을, 검은 칸은 참가자가 들어갈 수 없는 칸을 의미한다.

![image](https://user-images.githubusercontent.com/57346455/118112063-77185000-b41f-11eb-807b-a2f15ae21c2b.png)

- 참가자는 주어진 판들을 시계 방향, 혹은 반시계 방향으로 자유롭게 회전할 수 있다. 그러나 판을 뒤집을 수는 없다.

![image](https://user-images.githubusercontent.com/57346455/118112134-8dbea700-b41f-11eb-96c0-4fd40efef2d7.png)

- 회전을 완료한 후 참가자는 판 5개를 쌓는다. 판을 쌓는 순서는 참가자가 자유롭게 정할 수 있다. 이렇게 판 5개를 쌓아 만들어진 5×5×5 크기의 큐브가 바로 참가자를 위한 미로이다. 이 때 큐브의 입구는 정육면체에서 참가자가 임의로 선택한 꼭짓점에 위치한 칸이고 출구는 입구와 면을 공유하지 않는 꼭짓점에 위치한 칸이다.

![image](https://user-images.githubusercontent.com/57346455/118112193-a29b3a80-b41f-11eb-8eaf-71bc99257f93.png)

- 참가자는 현재 위치한 칸에서 면으로 인접한 칸이 참가자가 들어갈 수 있는 칸인 경우 그 칸으로 이동할 수 있다.
- 참가자 중에서 본인이 설계한 미로를 가장 적은 이동 횟수로 탈출한 사람이 우승한다. 만약 미로의 입구 혹은 출구가 막혀있거나, 입구에서 출구에 도달할 수 있는 방법이 존재하지 않을 경우에는 탈출이 불가능한 것으로 간주한다.

이 대회에서 우승하기 위해서는 미로를 잘 빠져나올 수 있기 위한 담력 증진과 체력 훈련, 그리고 적절한 운이 제일 중요하지만, 가장 적은 이동 횟수로 출구에 도달할 수 있게끔 미로를 만드는 능력 또한 없어서는 안 된다. 주어진 판에서 가장 적은 이동 횟수로 출구에 도달할 수 있게끔 미로를 만들었을 때 몇 번 이동을 해야하는지 구해보자. 

<br/>

#### 입력 :

첫째 줄부터 25줄에 걸쳐 판이 주어진다. 각 판은 5줄에 걸쳐 주어지며 각 줄에는 5개의 숫자가 빈칸을 사이에 두고 주어진다. 0은 참가자가 들어갈 수 없는 칸, 1은 참가자가 들어갈 수 있는 칸을 의미한다.

<br/>

#### 출력 : 

첫째 줄에 주어진 판으로 설계된 미로를 탈출하는 가장 적은 이동 횟수를 출력한다. 단, 어떻게 설계하더라도 탈출이 불가능할 경우에는 -1을 출력한다.

<br/>

<br/>

___

## 풀이 :

**문제가 정말 괜찮았던 것 같다.**

**이 정도 수준이면 사실 웬만한 코테에서도 출제될만큼 괜찮은 난이도였지 않나 생각한다.**

**문제는 미로 탐색이기 때문에 기본적으로 bfs 방식을 활용하지만 사실은 bfs 구현보다는 미로의 각 평면을 재배치하고 회전시켜주는 경우의 수를 잘 구현하여 완전 탐색을 시행해주는 것이 주된 문제였던 것 같다. 또한 미로 크기 자체가 크지도 않기 때문에 시간복잡도보다는 구현에 사실 더 초점이 가는 문제가 아니였나 생각한다.**

**<br/>**

**세부 구현사항 :** 

- **우선 처음에 문제를 정확하게 이해하지 못해 미로의 각 평면을 회전시켜주는 경우의 수만을 모두 따져 bfs를 해주면 되는 줄 알았다. 하지만 뒤늦게 알고 보니 각 평면의 층도 다시 재배치해서 경우의 수를 따져주어야 했다.**
- **각 평면의 층 재배치의 경우 일반적인 재귀 방식으로 순서를 재배치해주면 된다. 층이 총 5개이기에 재귀함수를 5번 반복호출하여 해당 순서를 정해준다. => 난 본 문제에서는 미로 맵을 3차원 벡터로 구현하여 층 재배치시에는 오리지널 맵 층에서 한 층씩 재배치하여 새로운 map 벡터를 생성해주었다. 하지만 사실 단순히 재배치 순서를 저장해둔 크기 5의 배열만을 생성해 bfs 탐색에서 z축 이동 시, 본 배열을 참조하는 방식이 시간, 공간 복잡도 측면에서 훨씬 효율적이라는 생각이 든다.**
- **층 재배치가 끝날 경우 각 층의 회전 경우의 수를 모두 고려해주어야 한다. 회전의 경우 0, 90, 180, 270 총 4가지의 경우의 수가 있기 때문에 회전 경우의 수는 4^5 = 1024가지의 경우의 수가 존재한다. 회전 구현에는 `rotatemap[4-j][i] = map[i][j]` 의 수식을 활용하여 90도 회전을 구현해주었다.**
- **1024가지의 경우의 수를 모두 bfs 탐색을 진행해줄 필요는 없다. (0,0,0) => (4,4,4)로 향할 수 있는 미로의 최소 이동 경로가 존재하는지 bfs를 탐색해주는 것이기 때문에 (0,0,0), (4,4,4) 두 위치는 무조건 map에서 true 값을 가져야 한다. 이렇듯 출발지와 도착지가 우선적으로 이동할 수 있는 인덱스일 경우를 판단하고 BFS 탐색을 모두 진행해주어 최소 이동경로를 파악한다.**

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
#include <queue>
#include <algorithm>
#include <vector>

#define MAX 100000

using namespace std;
typedef struct Qnode {
    int x, y, z, count;
} Qnode;
vector<vector<vector<bool>>> originmap, map;
bool usedfloor[5];
int di[6] = {0, 1, 0, -1, 0, 0}, dj[6] = {1, 0, -1, 0, 0, 0}, dz[6] = {0, 0, 0, 0, 1, -1};
int minans = MAX;

void bfs3D() {
    queue<Qnode> q;
    bool visit[5][5][5]{false};
    q.push(Qnode{0, 0, 0, 0});

    while (!q.empty()) {
        int curx = q.front().x, cury = q.front().y, curz = q.front().z, curcnt = q.front().count;
        q.pop();
        if (curx == 4 && cury == 4 && curz == 4) {
            minans = min(minans, curcnt);
            return;
        }
        if (visit[curx][cury][curz]) continue;
        visit[curx][cury][curz] = true;

        for (int k = 0; k < 6; k++) {
            int cmpx = curx + di[k], cmpy = cury + dj[k], cmpz = curz + dz[k];
            if (cmpx < 0 || cmpx >= 5 || cmpy < 0 || cmpy >= 5 || cmpz < 0 || cmpz >= 5) continue;
            if (!map[cmpx][cmpy][cmpz]) continue;
            q.push(Qnode{cmpx, cmpy, cmpz, curcnt + 1});
        }
    }
}

void rotateEachPlane(int curplane) {
    if (curplane == 5) {
        if (map[0][0][0] && map[4][4][4]) bfs3D();
        return;
    }

    for (int i = 0; i < 4; i++) {
        rotateEachPlane(curplane + 1);
        bool cmpplane[5][5];

        for (int i = 0; i < 5; i++)
            for (int j = 0; j < 5; j++)
                cmpplane[4 - j][i] = map[curplane][i][j];

        for (int i = 0; i < 5; i++)
            for (int j = 0; j < 5; j++)
                map[curplane][i][j] = cmpplane[i][j];
    }
}

void stackPlanes(int curfloor) {
    if (curfloor == 5) {
        rotateEachPlane(0);
        return;
    }

    for (int i = 0; i < 5; i++)
        if (!usedfloor[i]) {
            usedfloor[i] = true;
            map[curfloor] = originmap[i];
            stackPlanes(curfloor + 1);
            usedfloor[i] = false;
        }
}

int main() {
    bool input;
    originmap.resize(5);
    map.resize(5);
    for (int i = 0; i < 5; i++) {
        originmap[i].resize(5);
        for (int j = 0; j < 5; j++) {
            originmap[i][j].resize(5);
            for (int k = 0; k < 5; k++) {
                cin >> input;
                originmap[i][j][k] = input;
            }
        }
    }

    stackPlanes(0);
    cout << ((minans == MAX) ? -1 : minans) << '\n';
    return 0;
}
```

</details>
<br/>

<br/>

