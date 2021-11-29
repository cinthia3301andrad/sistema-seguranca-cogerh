import "jspdf-autotable"
import jsPDF from "jspdf";
/*;
 */

export function exportPDF(ocorrencias: any[]) {
    let relatorio: any[] = []
    
    ocorrencias.forEach(valor => {
      relatorio.push({
        descricao: valor.descricao, 
        status: valor.status, 
        local: valor.local, 
        dataHora: valor.dataHora, 
        confirmadoPor: valor.confirmadoPor,
      })
    })
    
    const imgData = 'data:image/jpeg;base64,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'
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 120;

    const doc: any = new jsPDF(orientation, unit, size);

    doc.setFontSize(17);


    const title = "Relatório do sistema de monitoramento - COGERH";
    const headers = [["Descrição", "Status", "Local", 'Data-Hora', 'Confirmado por']];

    const data = relatorio.map(elt=> [elt.descricao, elt.status,elt.local, elt.dataHora, elt.confirmadoPor ]);
    doc.addImage(imgData, 'jpg', 450, 500, 120, 120);



    let content = {
      startY: 150,

      head: headers,
     
      body: data,
      styles : { halign : 'center'}, 
      headStyles :{fillColor : '#D6D6D6',textColor: '#2F2F2F'},
    
    };
    doc.autoTable(content);
    doc.text(title, marginLeft, 70);
    
    doc.save("report.pdf")
}