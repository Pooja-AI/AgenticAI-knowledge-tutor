# Multi-Agent Systems
# Demonstrates:
# 1. Multiple specialized agents
# 2. Task delegation
# 3. Collaboration
# 4. Result aggregation


class ResearchAgent:

    def perform_task(self, task):

        print("🔍 Research Agent working")

        return (
            "Research completed for: "
            + task
        )



class AnalysisAgent:

    def analyze(self, information):

        print("📊 Analysis Agent working")

        return (
            "Analysis completed using: "
            + information
        )



class ResponseAgent:

    def generate_response(self, result):

        print("💬 Response Agent working")

        return (
            "Final Response: "
            + result
        )



class CoordinatorAgent:

    def __init__(self):

        self.research_agent = ResearchAgent()
        self.analysis_agent = AnalysisAgent()
        self.response_agent = ResponseAgent()


    # Coordinate agents
    def run(self, task):

        print("🤖 Coordinator Agent Started\n")


        research_result = (
            self.research_agent.perform_task(task)
        )


        analysis_result = (
            self.analysis_agent.analyze(
                research_result
            )
        )


        final_result = (
            self.response_agent.generate_response(
                analysis_result
            )
        )


        return final_result



# Create Multi-Agent System

system = CoordinatorAgent()


# Execute task

result = system.run(
    "Analyze AI Agent market trends"
)


print("\n")
print(result)