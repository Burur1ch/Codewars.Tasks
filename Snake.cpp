#include <iostream>
#include <windows.h>
#include <cstring>
using namespace std;

void MoveXY(int x, int y)
{
	COORD pos;
	pos.X = x;
	pos.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), pos);
}


#define mWidth 100
#define mHeight 30

struct TMap {
	char map1[mHeight][mWidth + 1];
	void clear();
	
};

enum Tdirection { dirLeft, dirRight, dirUp, dirDown };
enum TResult { reOk, reKill};


#define sLen 1000

class TSnake {
	int x, y;
	TMap *mp;
	Tdirection dir;
	POINT tail[sLen];
	int len;
public:
	void AddTail(int _x, int _y);
	void MoveTail(int _x, int _y);
	void AddTailCnt(int _x, int _y, int cnt);
	TSnake(TMap* _mp);
	void Init(int _x, int _y, Tdirection _dir);
	void PutOnMap();
	TResult UserControl(char w, char s, char a, char d);
};

void TSnake::AddTailCnt(int _x, int _y, int cnt)
{
	for (int i = 0; i < cnt; i++)
		AddTail(_x, _y);
}

void TSnake::MoveTail(int _x, int _y) {
	for (int i = len - 1; i >= 0; i--)
		tail[i + 1] = tail[i];
	tail[0].x = _x;
	tail[0].y = _y;
}

void TSnake::AddTail(int _x, int _y) {
	MoveTail(_x, _y);
	len++;
	if (len >= sLen) len = sLen - 1;
}

TResult TSnake::UserControl(char w, char s, char a, char d)
{
	POINT old;
	old.x;
	old.y;
	if (GetKeyState(w) < 0) dir = dirUp;
	if (GetKeyState(s) < 0) dir = dirDown;
	if (GetKeyState(a) < 0) dir = dirLeft;
	if (GetKeyState(d) < 0) dir = dirRight;
	if (dir == dirLeft) x--;
	if (dir == dirRight) x++;
	if (dir == dirUp) y--;
	if (dir == dirDown) y++;

	if ((x < 0) || (x >= mWidth) || (y < 0) || (y >= mHeight) ||
		(mp->map1[y][x] == '+'))
		return reKill;
	if (mp->map1[y][x] == '*')
		AddTailCnt(old.x, old.y, 2);
	else
		MoveTail(old.x, old.y);
	return reOk;
}

void TSnake::Init(int _x, int _y, Tdirection _dir)
{
	x = _x;
	y = _y;
	dir = _dir;
	len = 0;

}

void TSnake::PutOnMap()
{
	mp->map1[y][x] = '@';
	for (int i = 0; i <= len; i++)
		mp->map1[tail[i].y][tail[i].x] = '+';
}

TSnake::TSnake(TMap* _mp)
{
	mp = _mp;
	Init(0, 0, dirRight);
}

void TMap::clear()
{
	MoveXY(0, 0);
	map1[mHeight - 1][mWidth - 1] = '\0';
	for (int j = 0; j < mWidth; j++)
		cout << map1[j];
}

void TMap::clear()
{
	for (int i = 0; i < mWidth; i++)
		map1[0][i] = ' ';
	map1[0][mWidth] = '\0';
	for (int j = 1; j < mHeight; j++)
		strncpy(map1[j], map1[0], mWidth + 1);

	map1[10][30] = '*';
	map1[14][55] = '*';
	map1[5][45] = '*';
	map1[25][50] = '*';
}

int main() {
	TMap map1;
	TSnake snake(&map1);
	snake.Init(10, 5, dirRight);
	do
	{
		if (snake.UserControl('W', 'S', 'A', 'D') == reKill)
			snake.Init(10, 5, dirRight);
		map1.clear();
		snake.PutOnMap();
		Sleep(80);
	}
	while(!Escape);
	return 0;
}