# Agent Decision Making
# Demonstrates how an AI Agent:
# 1. Understands objective
# 2. Evaluates available options
# 3. Scores alternatives
# 4. Selects the best action


class DecisionAgent:

    def __init__(self, name):
        self.name = name


    # Understand goal
    def understand_goal(self, request):

        print("🎯 Understanding Goal")

        return request


    # Generate possible actions
    def generate_options(self, goal):

        print("\n💡 Generating Options")

        options = {
            "Option A - Fast Response": 70,
            "Option B - High Accuracy": 95,
            "Option C - Low Cost": 80
        }

        return options


    # Evaluate options
    def evaluate_options(self, options):

        print("\n⚖️ Evaluating Options")

        best_choice = max(
            options,
            key=options.get
        )

        return best_choice


    # Execute decision
    def execute(self, decision):

        print("\n⚡ Executing Decision")

        return (
            f"Selected action: {decision}"
        )


    # Agent workflow
    def run(self, request):

        goal = self.understand_goal(request)

        options = self.generate_options(goal)

        decision = self.evaluate_options(options)

        result = self.execute(decision)

        return result



# Create Agent

agent = DecisionAgent(
    "Decision Support Agent"
)


# User request

result = agent.run(
    "Choose the best customer support strategy"
)


print("\nFinal Result:")
print(result)