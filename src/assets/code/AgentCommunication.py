# Agent Communication
# Demonstrates how AI Agents:
# 1. Send messages
# 2. Receive messages
# 3. Exchange information
# 4. Collaborate with another agent


class Agent:

    def __init__(self, name):
        self.name = name


    # Send message
    def send_message(self, receiver, message):

        print(
            f"\n{self.name} → {receiver.name}"
        )

        return message


    # Receive message
    def receive_message(self, sender, message):

        print(
            f"{sender.name} sent:"
        )

        print(message)

        return message



# Create two agents

research_agent = Agent(
    "Research Agent"
)

summary_agent = Agent(
    "Summary Agent"
)



# Agent communication

message = research_agent.send_message(
    summary_agent,
    "AI Agents enable autonomous task execution"
)


received_message = summary_agent.receive_message(
    research_agent,
    message
)



# Process message

print("\nSummary Agent Response:")

print(
    f"Creating summary for: {received_message}"
)