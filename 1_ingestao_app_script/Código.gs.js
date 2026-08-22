const SHEET_ID = '1FDjmVfLhjjsI1vi9iB2LOGFuGZ0Z7NxvpoyK23IN4ho';

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Área Restrita - Ingestão de Dados')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
}

function checkLogin(username, password) {
  // Alterado para openById para evitar falhas de contexto no Web App
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Usuários');
  var data = sheet.getDataRange().getValues();
  
  // Varre a tabela a partir da segunda linha (índice 1) buscando correspondência
  for (var i = 1; i < data.length; i++) {
    var userPlanilha = data[i][0].toString().trim();
    var senhaPlanilha = data[i][1].toString().trim();
    
    if (userPlanilha === username.trim() && senhaPlanilha === password.trim()) {
      return {
        success: true
      };
    }
  }
  
  return { success: false, message: 'Usuário ou senha incorretos!' };
}

// Função para salvar os dados do formulário
function salvarResposta(dadosFormulario) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('RespostasForms');
  const dataAtual = new Date();
  
  // Adiciona uma nova linha com os dados exatos vindos do HTML
  sheet.appendRow([
    dataAtual,
    dadosFormulario.nome,
    dadosFormulario.setor,
    dadosFormulario.observacao
  ]);
  
  return "Resposta salva com sucesso!";
}