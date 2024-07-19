import pygame

class Score:
    def __init__(self):
        self.font = pygame.font.Font(None, 36)
        self.score = 0

    def update(self, insects):
        self.score += len(insects)

    def draw(self, screen):
        text = self.font.render(f"Score: {self.score}", True, (0, 0, 0))
        screen.blit(text, (10, 50))
