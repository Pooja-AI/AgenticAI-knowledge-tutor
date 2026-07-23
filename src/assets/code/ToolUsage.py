# Agent Tool Usage
# Demonstrates how an AI Agent:
# 1. Understands the requirement
# 2. Selects a tool
# 3. Executes the tool
# 4. Uses the result


class ToolAgent:

    def __init__(self, name):
        self.name = name


    # Identify required tool
    def select_tool(self, request):

        print("🔍 Selecting Tool")

        if "calculate" in request.lower():
            return "calculator"

        elif "search" in request.lower():
            return "search_engine"

        elif "database" in request.lower():
            return "database"

        else:
            return "no_tool"


    # Execute selected tool
    def execute_tool(self, tool, input_data):

        print("\n🛠️ Executing Tool:", tool)

        if tool == "calculator":

            numbers = [10, 20, 30]

            return sum(numbers)


        elif tool == "search_engine":

            return "Search results retrieved"


        elif tool == "database":

            return "Database records fetched"


        else:

            return "Direct response generated"


    # Agent workflow
    def run(self, request):

        tool = self.select_tool(request)

        result = self.execute_tool(
            tool,
            request
        )

        return result



# Create Agent

agent = ToolAgent(
    "Tool Assistant"
)


# User request

response = agent.run(
    "Calculate total sales amount"
)


print("\nFinal Result:")
print(response)