# Types of AI Agents
# Demonstrates different agent types:
# 1. Simple Reflex Agent
# 2. Model-Based Agent
# 3. Goal-Based Agent
# 4. Utility-Based Agent
# 5. Learning Agent


# 1. Simple Reflex Agent
class SimpleReflexAgent:

    def act(self, condition):

        if condition == "hot":
            return "Turn on cooling system"

        elif condition == "cold":
            return "Turn on heating system"

        else:
            return "No action needed"



# 2. Model-Based Agent
class ModelBasedAgent:

    def __init__(self):
        self.environment_state = {}

    def update_state(self, key, value):

        self.environment_state[key] = value

        return self.environment_state



# 3. Goal-Based Agent
class GoalBasedAgent:

    def __init__(self, goal):
        self.goal = goal

    def plan(self, current_state):

        if current_state != self.goal:
            return f"Take action to reach {self.goal}"

        return "Goal already achieved"



# 4. Utility-Based Agent
class UtilityBasedAgent:

    def choose_action(self, actions):

        best_action = max(
            actions,
            key=actions.get
        )

        return best_action



# 5. Learning Agent
class LearningAgent:

    def __init__(self):
        self.experience = []

    def learn(self, result):

        self.experience.append(result)

        return "Agent improved from experience"



# Testing Agents


print("Simple Reflex Agent:")
reflex = SimpleReflexAgent()
print(reflex.act("hot"))



print("\nModel Based Agent:")
model = ModelBasedAgent()
print(model.update_state("temperature", "30C"))



print("\nGoal Based Agent:")
goal_agent = GoalBasedAgent(
    "Complete Customer Request"
)
print(
    goal_agent.plan(
        "Customer Request Pending"
    )
)



print("\nUtility Based Agent:")
utility = UtilityBasedAgent()

actions = {
    "Fast Response": 80,
    "Accurate Response": 95,
    "Cheap Response": 70
}

print(
    utility.choose_action(actions)
)



print("\nLearning Agent:")
learning = LearningAgent()

print(
    learning.learn(
        "Successful task completion"
    )
)

print(
    learning.experience
)