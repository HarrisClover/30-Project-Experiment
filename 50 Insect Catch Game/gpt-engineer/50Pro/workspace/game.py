import pygame
from insect import Insect
from timer import Timer
from score import Score

class Game:
    def __init__(self, screen):
        self.screen = screen
        self.insects = pygame.sprite.Group()
        self.timer = Timer()
        self.score = Score()

    def update(self):
        self.timer.update()
        self.score.update(self.insects)
        self.insects.update()

    def draw(self):
        self.screen.fill((255, 255, 255))
        self.insects.draw(self.screen)
        self.timer.draw(self.screen)
        self.score.draw(self.screen)
