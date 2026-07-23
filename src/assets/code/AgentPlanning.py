# Agent Planning
# Demonstrates how an AI Agent:
# 1. Receives a goal
# 2. Breaks it into tasks
# 3. Creates an execution plan
# 4. Executes tasks


class PlanningAgent:

    def __init__(self, name):
        self.name = name


    # Define goal
    def define_goal(self, goal):

        print("🎯 Goal:")
        print(goal)

        return goal


    # Task decomposition
    def decompose_task(self, goal):

        print("\n🧩 Breaking Goal into Tasks")

        tasks = [
            "Collect required information",
            "Analyze information",
            "Perform required action",
            "Generate final result"
        ]

        return tasks


    # Create execution plan
    def create_plan(self, tasks):

        print("\n📋 Creating Plan")

        plan = {}

        for index, task in enumerate(tasks, 1):
            plan[index] = task

        return plan


    # Execute plan
    def execute_plan(self, plan):

        print("\n⚡ Executing Plan")

        results = []

        for step, task in plan.items():

            result = f"Step {step}: {task} completed"

            results.append(result)

        return results



# Create Agent

agent = PlanningAgent(
    "Task Planner Agent"
)


# Planning workflow

goal = agent.define_goal(
    "Generate customer sales report"
)


tasks = agent.decompose_task(
    goal
)


plan = agent.create_plan(
    tasks
)


results = agent.execute_plan(
    plan
)



print("\nExecution Results:")

for result in results:
    print(result)