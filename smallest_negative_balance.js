// Given the group debt records (array of array of borrower, lender, debt)
// Who in the group has the smallest negative balance
// ex: [[alex, blake, 2],[blake, alex, 2], [casey, alex, 5],[alex, blake, 4],[alex, casey, 4]]
// returns ["alex", "blake"] because they both have balance of -3, which is minimum
// amount all members

const debts = [
  ["alex", "blake", 2],
  ["blake", "alex", 2], 
  ["casey", "alex", 5],
  ["blake", "casey", 7],
  ["alex", "blake", 4],
  ["alex", "casey", 4]
]

function smallestNegativeBalance(debts) {
  let balance = {};

  for(let i = 0; i < debts.length; i++) {
    if (!(debts[i][0] in balance)) {
      balance[debts[i][0]] = 0
    }
    if (!(debts[i][1] in balance)) {
      balance[debts[i][1]] = 0
    }
    balance[debts[i][0]] -= debts[i][2]
    balance[debts[i][1]] += debts[i][2]
  }
  let fin_balances = Object.values(balance)
  let min = Math.min(...fin_balances);
  let smallestBalance = [];

  for (record in balance) {
    if(balance[record] == min) {
      smallestBalance.push(record);
    }
  }

  return smallestBalance;
}