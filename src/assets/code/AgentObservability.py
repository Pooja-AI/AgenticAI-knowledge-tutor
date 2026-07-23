# Agent Observability
# Demonstrates how an AI Agent:
# 1. Generates logs
# 2. Tracks metrics
# 3. Records execution traces
# 4. Monitors performance


import time


class ObservableAgent:

    def __init__(self, name):

        self.name = name

        self.logs = []
        self.metrics = {}



    # Logging

    def log_event(self, message):

        log = {
            "agent": self.name,
            "event": message
        }

        self.logs.append(log)

        print("📝 Log:", message)



    # Track metrics

    def record_metric(self, key, value):

        self.metrics[key] = value



    # Execute task

    def execute(self, task):

        start_time = time.time()


        self.log_event(
            "Task started"
        )


        result = (
            f"Completed: {task}"
        )


        self.log_event(
            "Task completed"
        )


        execution_time = (
            time.time() - start_time
        )


        self.record_metric(
            "execution_time",
            execution_time
        )


        self.record_metric(
            "status",
            "success"
        )


        return result



    # Monitoring dashboard

    def monitor(self):

        print("\n📊 Monitoring Data")

        print("\nLogs:")

        for log in self.logs:
            print(log)


        print("\nMetrics:")

        print(self.metrics)



# Create Observable Agent

agent = ObservableAgent(
    "Monitoring Agent"
)



# Run Agent

response = agent.execute(
    "Generate sales report"
)


print("\nResponse:")
print(response)



# View Observability Data

agent.monitor()