function executarCodigo() {
  var motor = document.getElementById("motor").value;
  var cliente = document.getElementById("cliente").value;
  var dano = document.getElementById("dano").value;

  var motor_cliente_dano = [
    (('CF6', 'FEDEX', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CF6', 'FEDEX', 'PROOF PRESSURE TEST'), 'Devido a isso, o escopo de trabalho da unidade deve ser alterado para revisão a fim de corrigir as descobertas da inspeção.'),
    (('CF6', 'FEDEX', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CF6', 'ALASKA', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CF6', 'ALASKA', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CF6', 'ALASKA', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CF6', 'UPS', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CF6', 'UPS', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CF6', 'UPS', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-7', 'FEDEX', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma limpeza completa do motor e uma inspeção visual para identificar a fonte do problema.'),
    (('CFM56-7', 'FEDEX', 'PROOF PRESSURE TEST'), 'Devido a isso, o escopo de trabalho da unidade deve ser alterado para revisão a fim de corrigir as descobertas da inspeção.'),
    (('CFM56-7', 'FEDEX', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-7', 'ALASKA', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma limpeza completa do motor e uma inspeção visual para identificar a fonte do problema.'),
    (('CFM56-7', 'ALASKA', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.'),
    (('CFM56-7', 'ALASKA', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-7', 'UPS', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma limpeza completa do motor e uma inspeção visual para identificar a fonte do problema.'),
    (('CFM56-7', 'UPS', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma limpeza completa do motor e uma inspeção visual para identificar a fonte do problema.'),
    (('CFM56-7', 'UPS', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-5', 'FEDEX', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.'),
    (('CFM56-5', 'FEDEX', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.'),
    (('CFM56-5', 'FEDEX', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-5', 'ALASKA', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CFM56-5', 'ALASKA', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma inspeção visual no motor para identificar a fonte do vazamento de ar.'),
    (('CFM56-5', 'ALASKA', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do material de isolamento no motor.'),
    (('CFM56-5', 'UPS', 'AIR LEAKAGE TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.'),
    (('CFM56-5', 'UPS', 'PROOF PRESSURE TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.'),
    (('CFM56-5', 'UPS', 'INSULATION TEST'), 'Devido a isso, é necessária uma substituição do LVDT no motor.')
  ];

  for (var i = 0; i < motor_cliente_dano.length; i++) {
    if (motor_cliente_dano[i][0][0] == motor && motor_cliente_dano[i][0][1] == cliente && motor_cliente_dano[i][0][2] == dano) {
      document.getElementById("resultado").innerHTML = motor_cliente_dano[i][1];
      return;
    }
  }

  document.getElementById("resultado").innerHTML = "Combinação inválida. Tente novamente.";
}
