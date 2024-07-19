'''
This file contains the Game class that manages the game logic.
'''
class Game:
    def __init__(self):
        self.board = [[0] * 15 for _ in range(15)]
        self.current_player = 1
    def make_move(self, x, y):
        if self.board[y][x] == 0:
            self.board[y][x] = self.current_player
            self.current_player = 3 - self.current_player
            return True
        return False
    def check_win(self, x, y):
        directions = [(1, 0), (0, 1), (1, 1), (1, -1)]
        for dx, dy in directions:
            count = 1
            count += self.count_direction(x, y, dx, dy)
            count += self.count_direction(x, y, -dx, -dy)
            if count >= 5:
                return True
        return False
    def count_direction(self, x, y, dx, dy):
        count = 0
        player = self.board[y][x]
        while True:
            x += dx
            y += dy
            if x < 0 or x >= 15 or y < 0 or y >= 15 or self.board[y][x] != player:
                break
            count += 1
        return count
    def reset(self):
        self.board = [[0] * 15 for _ in range(15)]
        self.current_player = 1