export const filterTypes = [
    {name : 'Conta', id: crypto.randomUUID() },
    {name : 'Cartão de crédito', id: crypto.randomUUID() },
    {name : 'Centro de custo', id: crypto.randomUUID() },
    {name : 'Usuário', id: crypto.randomUUID() },
    {name : 'Valor', id: crypto.randomUUID() },
    {name : 'Tags', id: crypto.randomUUID() }
]

export const accounts = [
    {name : 'Caixa', id: crypto.randomUUID() },
    {name : 'Banco do Brasil', id: crypto.randomUUID() },
    {name : 'Nubank', id: crypto.randomUUID() },
    {name : 'Itaú', id: crypto.randomUUID() }
]

export const creditCard = [
    {name : 'Elo', id: crypto.randomUUID() },
    {name : 'VISA', id: crypto.randomUUID() },
    {name : 'Mastercard', id: crypto.randomUUID() },
    {name : 'American Express', id: crypto.randomUUID() }
]

export const tags = [
    {name : 'teste', id: crypto.randomUUID() },
    {name : 'teste2', id: crypto.randomUUID() },
    {name : 'teste3', id: crypto.randomUUID() },
    {name : 'teste4', id: crypto.randomUUID() },
    {name : 'unica', id: crypto.randomUUID() }
]

export const costCenter = [
    {name : 'RH', id: crypto.randomUUID() },
    {name : 'P&D', id: crypto.randomUUID() }
]

export const types = [
    {name : 'Entry', id: crypto.randomUUID() },
    {name : 'Out', id: crypto.randomUUID() }
]

export const users = [
    {name : 'Bernardo', id: crypto.randomUUID() },
    {name : 'Allan', id: crypto.randomUUID() },
    {name : 'Sulivan', id: crypto.randomUUID() },
    {name : 'Jailson', id: crypto.randomUUID() }
]


export const transactions = [
    { tags: ['teste', 'teste3', ], type: 'Entry', bankAccount: 'Caixa', creditCard: 'Elo', value: 500, user: 'Bernardo', costCenter: 'RH', id: crypto.randomUUID()},
    { tags: ['teste2', 'teste3', 'teste4'], type: 'Out', bankAccount: 'Nubank', creditCard: 'VISA', value: 1500, user: 'Allan', costCenter: 'P&D', id: crypto.randomUUID()},
    { tags: ['teste', 'teste2', 'teste3', 'teste4'], type: 'Entry', bankAccount: 'Itaú', creditCard: 'American Express', value: 350, user: 'Bernardo', costCenter: 'RH', id: crypto.randomUUID()},
    { tags: ['teste', 'teste3', 'teste4'], type: 'Out', bankAccount: 'Banco do Brasil', creditCard: 'Elo', value: 5200, user: 'Jailson', costCenter: 'RH', id: crypto.randomUUID()},
    { tags: ['teste', 'teste3', 'teste4'], type: 'Entry', bankAccount: 'Nubank', creditCard: 'VISA', value: 5100, user: 'Sulivan', costCenter: 'P&D', id: crypto.randomUUID()},
    { tags: ['teste', 'teste2', 'teste3', 'teste4'], type: 'Out', bankAccount: 'Caixa', creditCard: 'American Express', value: 500, user: 'Bernardo', costCenter: 'RH', id: crypto.randomUUID()},
    { tags: ['teste', 'teste2', 'teste3'], type: 'Entry', bankAccount: 'Nubank', creditCard: 'Mastercard', value: 400, user: 'Jailson', costCenter: '', id: crypto.randomUUID() },
    { tags: ['teste2', 'teste4'], type: 'Out', bankAccount: 'Caixa', creditCard: 'Elo', value: 1500, user: 'Allan', costCenter: 'P&D', id: crypto.randomUUID() },
    { tags: ['teste', 'teste3'], type: 'Entry', bankAccount: 'Caixa', creditCard: 'VISA', value: 5030, user: 'Allan', costCenter: 'P&D', id: crypto.randomUUID() },
    { tags: ['teste2', 'teste3'], type: 'Entry', bankAccount: 'Itaú', creditCard: 'Mastercard', value: 120, user: 'Sulivan', costCenter: 'RH', id: crypto.randomUUID() },
    { tags: ['teste', 'teste3'], type: 'Out', bankAccount: 'Caixa', creditCard: 'American Express', value: 60, user: 'Bernardo', costCenter: 'RH', id: crypto.randomUUID() },
    { tags: ['teste2', 'teste3', 'teste4'], type: 'Entry', bankAccount: 'Caixa', creditCard: 'VISA', value: 1222, user: 'Bernardo', costCenter: 'P&D', id: crypto.randomUUID() },
    { tags: ['teste2', 'teste4', 'unica'], type: 'Out', bankAccount: 'Itaú', creditCard: 'Elo', value: 3214, user: 'Sulivan', costCenter: 'P&D', id: crypto.randomUUID() },
]
