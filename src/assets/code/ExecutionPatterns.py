# Agent Execution Patterns
# Demonstrates common execution approaches:
# 1. Sequential Execution
# 2. Parallel Execution
# 3. Pipeline Execution
# 4. Human-in-the-Loop


import time
from concurrent.futures import ThreadPoolExecutor



# 1. Sequential Execution

def sequential_execution():

    print("➡️ Sequential Execution")

    tasks = [
        "Collect Data",
        "Analyze Data",
        "Generate Report"
    ]

    results = []

    for task in tasks:

        time.sleep(1)

        results.append(
            f"{task} completed"
        )

    return results



# 2. Parallel Execution

def execute_task(task):

    time.sleep(1)

    return f"{task} completed"



def parallel_execution():

    print("\n⚡ Parallel Execution")

    tasks = [
        "Search Documents",
        "Check Database",
        "Call API"
    ]


    with ThreadPoolExecutor() as executor:

        results = list(
            executor.map(
                execute_task,
                tasks
            )
        )

    return results



# 3. Pipeline Execution

def pipeline_execution():

    print("\n🔄 Pipeline Execution")

    data = "User Request"

    step1 = (
        data +
        " -> Processed"
    )

    step2 = (
        step1 +
        " -> Analyzed"
    )

    step3 = (
        step2 +
        " -> Completed"
    )

    return step3



# 4. Human-in-the-Loop

def human_approval():

    print("\n👤 Human Approval Required")

    approval = "approved"

    if approval == "approved":

        return "Action executed"

    else:

        return "Action rejected"



# Execute Patterns


print(sequential_execution())

print(parallel_execution())

print(pipeline_execution())

print(human_approval())