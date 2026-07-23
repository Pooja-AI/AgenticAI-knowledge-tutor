# Agent Components
# Demonstrates the major components of an AI Agent:
# - Perception
# - Reasoning Engine
# - Planning
# - Memory
# - Tools
# - Action Execution


class AIAgent:

    def __init__(self, name):
        self.name = name
        self.memory = []

    # Component 1: Perception
    def perceive(self, input_data):
        print("👀 Perception:")
        print(f"Received input: {input_data}")

        return input_data


    # Component 2: Reasoning Engine
    def reason(self, information):

        print("\n🧠 Reasoning:")

        if "calculate" in information.lower():
            decision = "Use calculator tool"

        elif "search" in information.lower():
            decision = "Use search tool"

        else:
            decision = "Generate direct response"

        return decision


    # Component 3: Planning
    def plan(self, decision):

        print("\n📋 Planning:")

        steps = [
            "Understand request",
            decision,
            "Generate final response"
        ]

        return steps


    # Component 4: Tool Usage
    def use_tool(self, step):

        print("\n🛠️ Tool Execution:")

        if "calculator" in step.lower():
            return "Calculation completed"

        elif "search" in step.lower():
            return "Search completed"

        return "No tool required"


    # Component 5: Memory
    def store_memory(self, result):

        self.memory.append(result)

        print("\n💾 Memory Updated")


    # Component 6: Action
    def execute(self, plan):

        print("\n⚡ Execution:")

        result = []

        for step in plan:
            output = self.use_tool(step)
            result.append(output)

        self.store_memory(result)

        return result



# Create Agent

agent = AIAgent("Knowledge Assistant")


# User request

request = "Calculate the total sales amount"


# Agent workflow

input_data = agent.perceive(request)

decision = agent.reason(input_data)

plan = agent.plan(decision)

response = agent.execute(plan)



print("\nFinal Result:")
print(response)


print("\nAgent Memory:")
print(agent.memory)