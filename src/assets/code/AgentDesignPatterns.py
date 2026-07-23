# Agent Design Patterns
# Demonstrates common AI Agent patterns:
# 1. ReAct
# 2. Plan-and-Execute
# 3. Reflection
# 4. Router


class DesignPatternAgent:

    # ReAct Pattern
    def react(self, question):

        print("🤔 ReAct Pattern")

        thought = "Need external information"

        action = "Search Knowledge Base"

        observation = "Information Retrieved"

        answer = "Generated final response"

        return {
            "Thought": thought,
            "Action": action,
            "Observation": observation,
            "Answer": answer
        }


    # Plan-and-Execute Pattern
    def plan_execute(self, goal):

        print("\n📋 Plan-and-Execute")

        plan = [
            "Collect Data",
            "Analyze Data",
            "Generate Report"
        ]

        results = []

        for step in plan:
            results.append(
                f"{step} completed"
            )

        return results


    # Reflection Pattern
    def reflect(self, response):

        print("\n🔄 Reflection")

        improved = (
            response +
            " (Reviewed and Improved)"
        )

        return improved


    # Router Pattern
    def route(self, request):

        print("\n🛣️ Router")

        if "code" in request.lower():
            return "Coding Agent"

        elif "search" in request.lower():
            return "Research Agent"

        else:
            return "General Assistant"



# Create Agent

agent = DesignPatternAgent()


# ReAct

react_output = agent.react(
    "Explain AI Agents"
)

print(react_output)


# Plan-and-Execute

plan_output = agent.plan_execute(
    "Create sales report"
)

print(plan_output)


# Reflection

reflection = agent.reflect(
    "Initial response"
)

print(reflection)


# Router

selected_agent = agent.route(
    "Search latest AI news"
)

print(selected_agent)