import { ContainerCarrinho } from './styled'
import Tiras from '../../components/listras/index'
import Cabecalho from '../../components/cabecalho/cabecalho'
import Rodape  from '../../components/rodape/rodape'
import Contador from './contador/styled'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Carrinho(props) {
    const [produto, setProduto] = useState(props.info);


    return (
    <ContainerCarrinho>
        <Cabecalho />
        <div className="titulo" style={{fontSize: '64px', marginLeft: '65px'}}> Meu Carrinho</div>
        <Tiras/>
        <div className="box-tabela"> 
             <thead>
                  <th> </th>
                  <th> Produto </th>
                  <th> Preço </th>
                  <th> Quantidade</th>
                  <th> Total </th>
              </thead>
              <tbody>
                  <tr>
                      <td style={{width: '3%'}}><img src="./assets/imagens/bolinho.png" alt="" width="90%"/></td>
                      <td> {produto.nome} </td>
                      <td> {produto.valor} </td>
                      <td> 
                           <div className="est-box">
                                <Contador />
                           </div> 
                           <div className="lixeira"> <img src="./assets/imagens/lixeira.png" alt="" /> </div>
                      </td>  
                      <td>{produto.valor} </td>
                     
                  </tr>
            
                    

              </tbody>

              <tbody>
                  <tr>
                      <td style={{borderRadius: '50px'}}><img src="./assets/imagens/agua.png" alt=""/></td>
                      <td>baguete de Queijo</td>
                      <td>R$ 3,50</td>
                      <td> 
                           <div className="est-box">
                                <Contador />
                           </div> 
                           <div className="lixeira"> <img src="./assets/imagens/lixeira.png" alt="" /> </div>
                      </td>  
                      <td>R$ 3,50</td>
                     
                  </tr>
        
              </tbody>


        </div>
        <div className="cupom"> 
            <div className="cup-nome" style={{marginTop: '2px'}}> Cupom de Desconto</div>
            <div className="cup-input"> <input /> </div>
            <button style={{marginLeft: '30px', width: '10em', border: '2px solid #B7B7B7', backgroundColor: '#B7B7B7', borderRadius: '20px', outline: 'none'}}>Adicionar</button>
        </div>
        <div className="precos"> 
            <div className="box-preco"> 
                <div className="sb">Subtotal dos Pedidos: </div>
                <div className="pc"> 40,00</div>
            </div>
            <div className="box-preco"> 
                <div className="sb">Cupom de Desconto:</div>
                <div className="pc"> 20,00</div>
            </div>
            <div className="box-preco"> 
                <div className="sb"> Pagamento Total: </div>
                <div className="pc"> 20,00</div>
            </div>
        </div>
        <div className="botoes"> 
            <Link to="./Produtos"> <button> Continuar Comprando </button> </Link> 
            <Link to="./revisao"> <button>  Realizar pedido   </button> </Link> 
        </div>
        <Rodape />
    </ ContainerCarrinho>
    )
}