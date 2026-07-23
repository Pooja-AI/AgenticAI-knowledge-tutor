# AI Agent Introduction
# A simple AI Agent that:
# 1. Receives input
# 2. Understands the goal
# 3. Takes an action
# 4. Returns a response


class SimpleAIAgent:

    def __init__(self, name):
        self.name = name

    # Perceive input from environment
    def perceive(self, user_input):
        print(f"Agent received: {user_input}")
        return user_input

    # Reason about the input
    def reason(self, information):
        if "weather" in information.lower():
            return "I need weather information"
        elif "time" in information.lower():
            return "I need current time information"
        else:
            return "I can answer directly"

    # Take action
    def act(self, decision):
        return f"Action taken: {decision}"

    # Complete workflow
    def run(self, request):
        context = self.perceive(request)
        decision = self.reason(context)
        response = self.act(decision)

        return response


# Create Agent
agent = SimpleAIAgent("Assistant Agent")


# User request
result = agent.run(
    "What is the weather today?"
)

print(result)