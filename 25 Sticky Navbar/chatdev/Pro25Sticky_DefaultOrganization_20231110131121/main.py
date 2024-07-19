from navigation import NavigationBar
from welcome import WelcomeSection
from intro import IntroSection
if __name__ == "__main__":
    # Create the main window
    window = tk.Tk()
    window.title("Homepage")
    # Create the navigation bar
    navigation_bar = NavigationBar(window)
    navigation_bar.pack()
    # Create the welcome section
    welcome_section = WelcomeSection(window)
    welcome_section.pack()
    # Create the intro section
    intro_section = IntroSection(window)
    intro_section.pack()
    # Start the main loop
    window.mainloop()