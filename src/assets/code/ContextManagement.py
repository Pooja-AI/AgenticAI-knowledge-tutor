# Context Management
# Demonstrates how an AI Agent:
# 1. Collects context
# 2. Filters relevant information
# 3. Maintains conversation state
# 4. Uses context for responses


class ContextAgent:

    def __init__(self, name):
        self.name = name

        # Store conversation context
        self.context = []


    # Collect context
    def collect_context(self, message):

        print("📥 Collecting Context")

        self.context.append(message)

        return self.context


    # Filter useful information
    def filter_context(self):

        print("\n🔍 Filtering Relevant Context")

        relevant_data = []

        for item in self.context:

            if "project" in item.lower() or \
               "python" in item.lower():

                relevant_data.append(item)

        return relevant_data


    # Generate response using context
    def respond(self, query):

        relevant_context = self.filter_context()

        print("\n🧠 Using Context")

        if relevant_context:

            return (
                f"Based on context: "
                f"{relevant_context}"
            )

        return "No relevant context available"



# Create Agent

agent = ContextAgent(
    "Context Aware Assistant"
)


# Conversation history

agent.collect_context(
    "User is building an AI Agent project"
)

agent.collect_context(
    "User likes Python programming"
)

agent.collect_context(
    "User enjoys reading books"
)



# User query

response = agent.respond(
    "Tell me about my project"
)


print("\nAgent Response:")
print(response)