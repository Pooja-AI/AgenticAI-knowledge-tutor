# Agent Fundamentals
# Demonstrates the basic building blocks of an AI Agent:
# - Goal
# - Environment
# - Perception
# - Decision
# - Action


class BasicAgent:

    def __init__(self, name, goal):
        self.name = name
        self.goal = goal
        self.memory = []

    # Agent perceives the environment
    def perceive(self, environment):
        print(f"Environment: {environment}")
        return environment

    # Agent reasons based on goal
    def decide(self, observation):

        if "temperature" in observation.lower():
            action = "Check weather information"

        elif "order" in observation.lower():
            action = "Process customer order"

        else:
            action = "Provide general assistance"

        return action

    # Agent performs action
    def act(self, action):
        print(f"Executing: {action}")

        self.memory.append(action)

        return f"{action} completed"


# Create Agent
agent = BasicAgent(
    name="Business Assistant",
    goal="Help users complete tasks"
)


# Environment input
environment = "Customer wants to check order status"


# Agent lifecycle
observation = agent.perceive(environment)

decision = agent.decide(observation)

result = agent.act(decision)


print(result)

print("\nAgent Memory:")
print(agent.memory)