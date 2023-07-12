import AmericanExpressIcon from './americanExpress'
import BancoDoBrasilIcon from './bancoDoBrasil'
import MastercardIcon from './mastercard'
import NubankIcon from './nubank'
import CaixaIcon from './caixa'
import VisaIcon from './visa'
import ItauIcon from './itau'
import EloIcon from './elo'


const FlexIcon = ({ name }) => {
    switch (name) {
        case 'Mastercard':
            return <MastercardIcon />
        case 'VISA':
            return <VisaIcon />
        case 'Elo':
            return <EloIcon />
        case 'American Express':
            return <AmericanExpressIcon />
        case 'Banco do Brasil':
            return <BancoDoBrasilIcon />
        case 'Nubank':
            return <NubankIcon />
        case 'Caixa':
            return <CaixaIcon />
        case 'Itaú':
            return <ItauIcon />
    
        default:
            break;
    }
}

export default FlexIcon
