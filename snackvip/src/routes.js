import Home from './componentes/compartilhados/home/Home.vue';
import Produtos from './componentes/compartilhados/produtos/Produtos.vue';
import Usuarios from './componentes/compartilhados/usuarios/Usuarios.vue';
import Promoçoes from './componentes/compartilhados/promoçoes/Promoçoes.vue';
import Bairros from './componentes/compartilhados/bairros/Bairros.vue';
import Espera from './componentes/compartilhados/pedidos/espera/Espera.vue';
import Confirmados from './componentes/compartilhados/pedidos/confirmados/Confirmados.vue';
import Recusados from './componentes/compartilhados/pedidos/recusados/Recusados.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/produtos', component: Produtos},
  { path: '/usuarios', component: Usuarios},
  { path: '/promoçoes', component: Promoçoes},
  { path: '/bairros', component: Bairros},
  { path: '/espera', component: Espera},
  { path: '/confirmados', component: Confirmados},
  { path: '/recusados', component: Recusados}
];
