import Tipofrete from '../backend/tipo_frete';
import Transportadora from '../backend/transportadora';
import NumeroPedido from '../backend/numero_pedido';

export default class Regulamentação {
    public pedidoNome: string
    public fornecedorNome: string
    public tipoFreteNome: Array<Tipofrete>
    public numeroPedido: Array<NumeroPedido>
    public transportadoraNome: Array<Transportadora>
    public dataEntradaPedido: Date
    public horaEntradaPedido = new Number()
}