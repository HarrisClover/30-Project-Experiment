import pygame
from game import Game

def main():
    pygame.init()

    screen = pygame.display.set_mode((800, 600))
    pygame.display.set_caption("Catch the Insect")

    game = Game(screen)

    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return

        game.update()
        game.draw()

        pygame.display.flip()
        clock.tick(60)

if __name__ == "__main__":
    main()
