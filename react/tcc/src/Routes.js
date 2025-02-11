
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NotFound from './pages/NotFound/index'

import Home from './pages/Inicial/inicial'
import Login from './pages/Login/login'
import Nos from './pages/SobreNos/sobre'
import Cadastra from './pages/Login/cadastrar/cadastrar'
import Carrinho from './pages/Carrinho/carrinho'
import CarrinhoVazio from './pages/Carrinho/CarrinhoVazio';
import Produtos from './pages/Produtos/favorito/favorito'
import Salgados from './pages/Produtos/salgado/salgados'
import Doces from './pages/Produtos/doce/doces'
import Bebidas from './pages/Produtos/bebida/bebidas'
import Detalhes from './pages/Produtos/detalhepro/index'




import MinhasCompras from './pages/status/MinhasCompras/compras'

import Revisao from './pages/RevisaoPedidos/revisao'
import Entrega from './pages/RevisaoPedidos/entrega'


import Perfil from './pages/Peerfil/Perfil'
import PerfilEnd from './pages/Peerfil/endereco'
import PerfilSen from './pages/Peerfil/senha'




import Loginadm from './pages/ADM/LOGINaDM/Admlo'
import CadastraPro from './pages/ADM/CadastroPro/index'
import Navega from './pages/ADM/NAVEGAOP/NAV'
import Gerenciadordes from './pages/ADM/Gerenciadordes/Gerenciador'
import Opcçoes from './pages/ADM/opções/op'




import Pix from './pages/pix';
import status from './pages/status/status';


export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path = '/' exact = {true} component = {Home} />
              <Route path = '/Login'  component = {Login} />
              <Route path = '/sobre' component = {Nos} />
              <Route path = '/Cadastra' component = {Cadastra}/>

              <Route path = '/CarrinhoVazio'  component = {CarrinhoVazio} />
              <Route path = '/Carrinho'  component = {Carrinho} />
              <Route path = '/Produtos'  component = {Produtos} />
              <Route path = '/Doces' component = {Doces} />
           
             <Route path = '/Loginadm' component = {Loginadm} />
              <Route path = '/CadastraProduto' component = {CadastraPro}/>
              <Route path = '/Navegação' component = {Navega}/>
              <Route path = '/Gerenciadorpt' component = {Gerenciadordes}/>
              <Route path = '/OP' component = {Opcçoes}/>
           
              

              
              <Route path="/Salgados" component={Salgados} />
              <Route path = '/Doces'  component = {Doces} />
              <Route path = '/Bebidas' component = {Bebidas}/>
              <Route path = '/Detalhe' component = {Detalhes}/>

            

              <Route path="/revisao" component={Revisao} />
              <Route path="/Pagamento" component={Pix} />
              <Route path="/status" component={status} />
              <Route path="MinhasCompras" component={MinhasCompras}/>
                    
             

              <Route path="/entrega" component={Entrega} />
              <Route path="/revisao" component={Entrega} />


              <Route path="/perfil" component={Perfil} />
              <Route path="/endereco" component={PerfilEnd} />
              <Route path="/senha" component={PerfilSen} />
              <Route path= '*' component = {NotFound} />
          </Switch>
        </BrowserRouter>
    )
    
}






   