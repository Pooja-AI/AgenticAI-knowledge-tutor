# Agent Lifecycle
# Demonstrates the complete AI Agent lifecycle:
# 1. Receive Request
# 2. Understand Context
# 3. Plan
# 4. Execute
# 5. Monitor
# 6. Learn


class AgentLifecycle:

    def __init__(self, name):
        self.name = name
        self.memory = []


    # Step 1: Receive Request
    def receive_request(self, request):

        print("📥 Request Received:")
        print(request)

        return request


    # Step 2: Understand Context
    def understand_context(self, request):

        print("\n🧠 Understanding Context")

        context = {
            "task": request,
            "priority": "high"
        }

        return context


    # Step 3: Planning
    def create_plan(self, context):

        print("\n📋 Creating Plan")

        plan = [
            "Analyze request",
            "Perform required action",
            "Generate response"
        ]

        return plan


    # Step 4: Execution
    def execute(self, plan):

        print("\n⚡ Executing Plan")

        results = []

        for task in plan:
            result = f"{task} completed"
            results.append(result)

        return results


    # Step 5: Monitoring
    def monitor(self, results):

        print("\n📊 Monitoring Execution")

        success = all(
            "completed" in result 
            for result in results
        )

        return success


    # Step 6: Learning / Memory Update
    def learn(self, results):

        print("\n📈 Updating Memory")

        self.memory.append(results)



    # Complete Agent Lifecycle
    def run(self, request):

        request = self.receive_request(request)

        context = self.understand_context(request)

        plan = self.create_plan(context)

        results = self.execute(plan)

        status = self.monitor(results)

        if status:
            self.learn(results)

        return results



# Create Agent

agent = AgentLifecycle(
    "Customer Support Agent"
)


# Start Agent Workflow

response = agent.run(
    "Help customer reset password"
)


print("\nFinal Response:")
print(response)


print("\nAgent Memory:")
print(agent.memory)