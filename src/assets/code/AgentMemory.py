# Agent Memory
# Demonstrates how an AI Agent:
# 1. Stores information
# 2. Retrieves previous information
# 3. Uses memory for future interactions


class MemoryAgent:

    def __init__(self, name):
        self.name = name
        
        # Agent memory storage
        self.memory = []


    # Store information
    def remember(self, information):

        print("💾 Storing Memory:")

        self.memory.append(information)

        return "Information stored"


    # Retrieve memory
    def recall(self, keyword):

        print("\n🔍 Searching Memory:")

        results = []

        for item in self.memory:

            if keyword.lower() in item.lower():
                results.append(item)

        return results


    # Use memory
    def respond(self, query):

        memories = self.recall(query)

        if memories:
            return f"Based on previous memory: {memories}"

        return "No previous information found"



# Create Agent

agent = MemoryAgent(
    "Personal Assistant Agent"
)


# Store information

agent.remember(
    "User prefers Python programming language"
)

agent.remember(
    "User is working on AI Agent projects"
)


# Retrieve information

response = agent.respond(
    "AI Agent"
)


print("\nAgent Response:")
print(response)