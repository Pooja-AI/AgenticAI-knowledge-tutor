# Agent Reasoning
# Demonstrates how an AI Agent:
# 1. Understands a goal
# 2. Collects information
# 3. Evaluates options
# 4. Selects an action


class ReasoningAgent:

    def __init__(self, name):
        self.name = name


    # Understand user goal
    def understand_goal(self, request):

        print("🎯 Understanding Goal")

        return {
            "goal": request,
            "status": "identified"
        }


    # Collect information
    def gather_information(self, goal):

        print("\n📚 Gathering Information")

        knowledge = [
            "Available options",
            "Business rules",
            "Previous results"
        ]

        return knowledge


    # Analyze information
    def analyze(self, information):

        print("\n🧠 Analyzing Information")

        analysis = {
            "option_1": 70,
            "option_2": 90,
            "option_3": 60
        }

        return analysis


    # Evaluate options
    def evaluate(self, analysis):

        print("\n⚖️ Evaluating Options")

        best_option = max(
            analysis,
            key=analysis.get
        )

        return best_option


    # Take action
    def act(self, decision):

        print("\n⚡ Taking Action")

        return f"Selected: {decision}"



# Create Agent

agent = ReasoningAgent(
    "Decision Assistant"
)


# Reasoning workflow

goal = agent.understand_goal(
    "Choose the best service plan"
)

information = agent.gather_information(
    goal
)

analysis = agent.analyze(
    information
)

decision = agent.evaluate(
    analysis
)

result = agent.act(
    decision
)


print("\nFinal Result:")
print(result)