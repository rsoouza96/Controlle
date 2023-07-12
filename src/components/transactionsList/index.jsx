import { useState } from "react"
import { transactions as transactionsDB } from "../../../db"
import { useSelector } from "react-redux";
import { StyledCard, StyledCardHeader, StyledMain, StyledTagsContainer, StyledType } from "./style";
import currencyFormater from "../../utils/currencyFormater";

const TransactionsList = () => {
    const [transactions] = useState(transactionsDB)
 
    const filters = useSelector(state => state.filters);

    const filteredList = transactions.filter(({ bankAccount }) => {
        return filters.bankAccount.length < 1 ? true : filters.bankAccount.includes(bankAccount)
    }).filter(({ creditCard }) => {
        return filters.creditCard.length < 1 ? true : filters.creditCard.includes(creditCard)
    }).filter(({ user }) => {
        return filters.user.length < 1 ? true : filters.user.includes(user)
    }).filter(({ type }) => {
        return filters.type === "All" ? true : type === filters.type
    }).filter(({ costCenter }) => {
        return filters.costCenter.length < 1 ? true : filters.costCenter.includes(costCenter)
    }).filter(({ tags }) => {
        return filters.tags.length < 1 ? true : filters.tags.every(tag => tags.includes(tag))
    }).filter(({ value }) => {
        return value <= filters.dinamicValues.maxValue && value >= filters.dinamicValues.minValue
    })

    return (
        <StyledMain>
            {filteredList.map(({ type, bankAccount, creditCard, id, tags, value, user, costCenter }) => (
                <StyledCard key={ id }>
                    <StyledCardHeader>
                        <StyledType type={ type }>{ type === "Entry" ? "Entrada" : "Saída" }</StyledType>
                        <span>{ bankAccount }</span>
                        <span>{ creditCard }</span>
                    </StyledCardHeader>
                    <span> { currencyFormater(value) } </span>
                    <span> { user } </span>
                    <span> { costCenter }   </span>
                    <StyledTagsContainer>
                        {tags.map(tag => <p key={tag}>{tag}</p>)}
                    </StyledTagsContainer>
                </StyledCard>
            ))}
        </StyledMain>
    )
}

export default TransactionsList
