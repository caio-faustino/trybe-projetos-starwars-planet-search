// Requisito 01
// Requisito 05
// Requisito 08
// Requisito 10

import item from "./Simulador";

const SimularBusca = () => Promise
.resolve({ok: true,status: 300,  
json: () => Promise.resolve(item),
});

export default SimularBusca;