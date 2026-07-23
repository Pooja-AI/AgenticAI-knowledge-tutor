# Agent Safety
# Demonstrates how an AI Agent:
# 1. Validates input
# 2. Applies safety rules
# 3. Controls actions
# 4. Monitors output


class SafeAgent:

    def __init__(self, name):

        self.name = name

        # Restricted actions
        self.blocked_actions = [
            "delete database",
            "expose password",
            "share private data"
        ]


    # Validate user input

    def validate_input(self, request):

        print("🔍 Validating Input")

        for blocked in self.blocked_actions:

            if blocked in request.lower():

                return False

        return True



    # Apply safety rules

    def apply_guardrails(self, request):

        print("\n🛡️ Applying Safety Rules")

        if not self.validate_input(request):

            return "Request blocked due to safety policy"


        return "Request approved"



    # Execute safe action

    def execute(self, request):

        safety_check = (
            self.apply_guardrails(request)
        )


        if "blocked" in safety_check:

            return safety_check


        return (
            f"Executing safe action: {request}"
        )



# Create Safe Agent

agent = SafeAgent(
    "Security Assistant"
)



# Safe request

result1 = agent.execute(
    "Generate customer report"
)


print("\nResult:")
print(result1)



# Unsafe request

result2 = agent.execute(
    "Expose password information"
)


print("\nResult:")
print(result2)