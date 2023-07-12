import { accounts, costCenter, creditCard, tags, users } from "../../../db"
import MultipleSelection from "../multipleSelection"
import ValueFilter from "../valueFilter"

const SelectedCategoryFilters = ({ selectedFilters, removeSelectedItem }) => (
    selectedFilters.map(({name, id}) => {
        switch (name) {
            case 'Conta':
                return <MultipleSelection key={ id } options={ accounts } label="Conta" categoryFilter="bankAccount" />
            case 'Cartão de crédito':
                return <MultipleSelection key={ id } options={ creditCard } label="Bandeira" categoryFilter="creditCard" />
            case 'Tags':
                return <MultipleSelection key={ id } options={ tags } label="Tags" categoryFilter="tags" />
            case 'Usuário':
                return <MultipleSelection key={ id } options={ users } label="Usuário" categoryFilter="user" />
            case 'Centro de custo':
                return <MultipleSelection key={ id } options={ costCenter } label="Centro de custo" categoryFilter="costCenter" />
            case 'Valor':
                return <ValueFilter key={ id }  />
            default:
                return (
                    <button
                        key={ id }
                        onClick={ () => removeSelectedItem(id) }
                    >
                        {name}
                    </button>
                )
        }
    })
)



export default SelectedCategoryFilters
