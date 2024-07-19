import pygame

class Timer:
    def __init__(self):
        self.font = pygame.font.Font(None, 36)
        self.start_ticks = pygame.time.get_ticks()

    def update(self):
        pass

    def draw(self, screen):
        elapsed_time = (pygame.time.get_ticks() - self.start_ticks) / 1000
        text = self.font.render(f"Time: {elapsed_time:.1f}", True, (0, 0, 0))
        screen.blit(text, (10, 10))
