import { Table } from "antd";
import {exportPDF } from '../../RelatorioPDF'
import { ContainerSquareRelatorio } from "./styles";

export function ComponentSquareRelatorio(){

  
  const data = [
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Alerta perigo",
      local: "Via 2 do canal",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Rodrigo Alves"
   },
   {
    descricao: "Invasão de pessoa para fins não legais",
    status: "Alerta perigo",
    local: "Porteira dos canais",
    dataHora: "10/11/2021 - 13:14",
    confirmadoPor: "Rodrigo Alves"
    },
    {
      descricao: "Descrição tal a respeito da ocorrência",
      status: "Alerta perigo",
      local: "Canal X",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Renato"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Alerta perigo",
      local: "Porteira dos canais",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Rodrigo Alves"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Seguro",
      local: "Casa de motor dos canais",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Chico Xavier"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Alerta perigo",
      local: "Canal X",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Rodrigo Alves"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Seguro",
      local: "Porteira dos canais",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Rodrigo Alves"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Alerta perigo",
      local: "Casa de motor dos canais",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Chico Xavier"
    },
    {
      descricao: "Pessoa entrou para fazer um reparo nas maquinas",
      status: "Seguro",
      local: "Entrada principal",
      dataHora: "10/11/2021 - 13:14",
      confirmadoPor: "Rodrigo Alves"
    },
  ]
  const columns = [
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      key: 'descricao',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text:any) => <a style={{color: 
        text==='Seguro' ? 'green' : 'red' 
      }}>{text}</a>,
    },
    {
      title: 'Local',
      dataIndex: 'local',
      key: 'local',
    },
    {
      title: 'Data/hora',
      dataIndex: 'dataHora',
      key: 'dataHora',
    },
    {
      title: 'Confirmado por',
      dataIndex: 'confirmadoPor',
      key: 'confirmadoPor',
    }
  ]

  return (
    <ContainerSquareRelatorio>
  
        <section className='title-conatainer'>
          <h1>
            Relatório
          </h1>
        <button onClick={() => exportPDF()}>
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.125 1H8.625C7.92881 1 7.26114 1.27655 6.76886 1.76884C6.27658 2.26112 6 2.92881 6 3.625V24.625C6 25.3212 6.27658 25.9889 6.76886 26.4812C7.26114 26.9734 7.92881 27.25 8.625 27.25H24.375C25.0712 27.25 25.7389 26.9734 26.2311 26.4812C26.7234 25.9889 27 25.3212 27 24.625V8.875L19.125 1Z" stroke="#4D4F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.125 1V8.875H27" stroke="#4D4F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 15.25H12" stroke="#4D4F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.5 21.25H12" stroke="#4D4F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.875 10.1875H11.25" stroke="#4D4F6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0.138672 34.4336H2.68164C3.86133 34.4336 4.71289 34.6055 5.23633 34.9492C5.76367 35.293 6.02734 35.8359 6.02734 36.5781C6.02734 37.0781 5.89844 37.4941 5.64062 37.8262C5.38281 38.1582 5.01172 38.3672 4.52734 38.4531V38.5117C5.12891 38.625 5.57031 38.8496 5.85156 39.1855C6.13672 39.5176 6.2793 39.9688 6.2793 40.5391C6.2793 41.3086 6.00977 41.9121 5.4707 42.3496C4.93555 42.7832 4.18945 43 3.23242 43H0.138672V34.4336ZM1.53906 37.9727H2.88672C3.47266 37.9727 3.90039 37.8809 4.16992 37.6973C4.43945 37.5098 4.57422 37.1934 4.57422 36.748C4.57422 36.3457 4.42773 36.0547 4.13477 35.875C3.8457 35.6953 3.38477 35.6055 2.75195 35.6055H1.53906V37.9727ZM1.53906 39.1094V41.8223H3.02734C3.61328 41.8223 4.05469 41.7109 4.35156 41.4883C4.65234 41.2617 4.80273 40.9062 4.80273 40.4219C4.80273 39.9766 4.65039 39.6465 4.3457 39.4316C4.04102 39.2168 3.57812 39.1094 2.95703 39.1094H1.53906ZM11.9688 43L11.6934 42.0977H11.6465C11.334 42.4922 11.0195 42.7617 10.7031 42.9062C10.3867 43.0469 9.98047 43.1172 9.48438 43.1172C8.84766 43.1172 8.34961 42.9453 7.99023 42.6016C7.63477 42.2578 7.45703 41.7715 7.45703 41.1426C7.45703 40.4746 7.70508 39.9707 8.20117 39.6309C8.69727 39.291 9.45312 39.1055 10.4688 39.0742L11.5879 39.0391V38.6934C11.5879 38.2793 11.4902 37.9707 11.2949 37.7676C11.1035 37.5605 10.8047 37.457 10.3984 37.457C10.0664 37.457 9.74805 37.5059 9.44336 37.6035C9.13867 37.7012 8.8457 37.8164 8.56445 37.9492L8.11914 36.9648C8.4707 36.7812 8.85547 36.6426 9.27344 36.5488C9.69141 36.4512 10.0859 36.4023 10.457 36.4023C11.2812 36.4023 11.9023 36.582 12.3203 36.9414C12.7422 37.3008 12.9531 37.8652 12.9531 38.6348V43H11.9688ZM9.91797 42.0625C10.418 42.0625 10.8184 41.9238 11.1191 41.6465C11.4238 41.3652 11.5762 40.9727 11.5762 40.4688V39.9062L10.7441 39.9414C10.0957 39.9648 9.62305 40.0742 9.32617 40.2695C9.0332 40.4609 8.88672 40.7559 8.88672 41.1543C8.88672 41.4434 8.97266 41.668 9.14453 41.8281C9.31641 41.9844 9.57422 42.0625 9.91797 42.0625ZM16.252 43H14.875V36.5195H16.252V43ZM14.793 34.8027C14.793 34.5566 14.8594 34.3672 14.9922 34.2344C15.1289 34.1016 15.3223 34.0352 15.5723 34.0352C15.8145 34.0352 16.002 34.1016 16.1348 34.2344C16.2715 34.3672 16.3398 34.5566 16.3398 34.8027C16.3398 35.0371 16.2715 35.2227 16.1348 35.3594C16.002 35.4922 15.8145 35.5586 15.5723 35.5586C15.3223 35.5586 15.1289 35.4922 14.9922 35.3594C14.8594 35.2227 14.793 35.0371 14.793 34.8027ZM19.668 39.6895L17.4941 36.5195H19.0645L20.541 38.7871L22.0293 36.5195H23.5879L21.4082 39.6895L23.6992 43H22.1406L20.541 40.5742L18.9473 43H17.3887L19.668 39.6895ZM28.8906 43L28.6152 42.0977H28.5684C28.2559 42.4922 27.9414 42.7617 27.625 42.9062C27.3086 43.0469 26.9023 43.1172 26.4062 43.1172C25.7695 43.1172 25.2715 42.9453 24.9121 42.6016C24.5566 42.2578 24.3789 41.7715 24.3789 41.1426C24.3789 40.4746 24.627 39.9707 25.123 39.6309C25.6191 39.291 26.375 39.1055 27.3906 39.0742L28.5098 39.0391V38.6934C28.5098 38.2793 28.4121 37.9707 28.2168 37.7676C28.0254 37.5605 27.7266 37.457 27.3203 37.457C26.9883 37.457 26.6699 37.5059 26.3652 37.6035C26.0605 37.7012 25.7676 37.8164 25.4863 37.9492L25.041 36.9648C25.3926 36.7812 25.7773 36.6426 26.1953 36.5488C26.6133 36.4512 27.0078 36.4023 27.3789 36.4023C28.2031 36.4023 28.8242 36.582 29.2422 36.9414C29.6641 37.3008 29.875 37.8652 29.875 38.6348V43H28.8906ZM26.8398 42.0625C27.3398 42.0625 27.7402 41.9238 28.041 41.6465C28.3457 41.3652 28.498 40.9727 28.498 40.4688V39.9062L27.666 39.9414C27.0176 39.9648 26.5449 40.0742 26.248 40.2695C25.9551 40.4609 25.8086 40.7559 25.8086 41.1543C25.8086 41.4434 25.8945 41.668 26.0664 41.8281C26.2383 41.9844 26.4961 42.0625 26.8398 42.0625ZM35.084 36.4023C35.3613 36.4023 35.5898 36.4219 35.7695 36.4609L35.6348 37.7441C35.4395 37.6973 35.2363 37.6738 35.0254 37.6738C34.4746 37.6738 34.0273 37.8535 33.6836 38.2129C33.3438 38.5723 33.1738 39.0391 33.1738 39.6133V43H31.7969V36.5195H32.875L33.0566 37.6621H33.127C33.3418 37.2754 33.6211 36.9688 33.9648 36.7422C34.3125 36.5156 34.6855 36.4023 35.084 36.4023Z" fill="black"/>
            </svg>
          </button>
        </section>

        <section className="infos-table">
          <div className="filter">
            <span>Filtrar período por: </span>
            <select>
              <option value="tudo">
                Tudo
              </option>
              <option value="ultimaSemana">
                Última semana
              </option>
              <option value="ultimoMes">
                Último mês
              </option>
              <option value="ultimos3meses">
                Últimos 3 meses
              </option>
            </select>
          </div>

          <span>Total de ocorencias: <strong>12</strong></span>
        </section>

        <Table 
        
          columns={columns}
          dataSource={data}
          pagination={{ position: ['bottomCenter'], pageSize: 8}}
            
        />
    
    </ContainerSquareRelatorio>
  )
}

