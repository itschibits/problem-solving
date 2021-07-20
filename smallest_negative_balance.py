# Given the group debt records (array of array of borrower, lender, debt)
# Who in the group has the smallest negative balance
# ex: [
#   [alex, blake, 2],
#   [blake, alex, 2],
#   [casey, alex, 5],
#   [blake, casey, 7],
#   [alex, blake, 4],
#   [alex, casey, 4]]
# returns ["alex", "blake"] because they both have balance of -3
# which is minimum
# amount all members

debts = [
  ["alex", "blake", 2],
  ["blake", "alex", 2],
  ["casey", "alex", 5],
  ["blake", "casey", 7],
  ["alex", "blake", 4],
  ["alex", "casey", 4]
]


def smallest_negative_balance(debts):
    balances = {}

    for i in range(len(debts)):
        if debts[i][0] not in balances:
            balances[debts[i][0]] = 0
        if debts[i][1] not in balances:
            balances[debts[i][1]] = 0
        balances[debts[i][0]] -= debts[i][2]
        balances[debts[i][1]] += debts[i][2]

    fin_balances = balances.values()
    min_val = min(fin_balances)
    smallest_balance = []

    for key in balances:
        if balances[key] == min_val:
            smallest_balance.append(key)

    return smallest_balance


print(smallest_negative_balance(debts))
