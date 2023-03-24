export type balanceType = {
    bigBalance: number
    decimals: number | string
}
export const devideBalance = (balance: number = 0.00): balanceType => {
    return {
        bigBalance: Math.floor(balance),
        decimals: +balance.toString().split(".").join()
    }
}

//toDo : Refactor using split