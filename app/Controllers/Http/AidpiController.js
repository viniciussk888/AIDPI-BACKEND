'use strict'

class AidpiController {

  async index({ request, response, view }) {
  }

  async store({ request, response }) {
  }

  async show({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
  //PASSOS DO AIDPI
  async validStep({ request, response }) {
    const { step } = request.body
    switch (step) {
      case 2:
        step2(request.body)
        break;
      case 3:
        console.log("etapa 3")
        break;
      default:
        console.log("default")
        break;
    }

    //tosse ou dificuldade para respirar
    async function step2(data) {
      let result = {
        diagnostico: "",
        tratamento: "",
        sibilancia: "",
        tratamentoSibilancia: ""
      };
      //avaliando
      if (data.tiragemSubcostal == true && data.sinalDeRisco == true && data.estridor == true) {
        result.diagnostico = "PNEUMONIA GRAVE OU DOENÇA MUITO GRAVE",
          result.tratamento = "• Dar a primeira dose de um antibiótico recomendado • Tratar a criança para evitar hipoglicemia • Referir urgentemente ao hospital • Oxigênio, se disponível"
      }
      else if (data.respiraçaoRapida == true && data.tiragemSubcostal == false && data.sinalDeRisco == false && data.estridor == false) {
        result.diagnostico = "PNEUMONIA",
          result.tratamento = "Dar um antibiótico recomendado durante sete dias • Aliviar a tosse com medidas caseiras • Informar à mãe sobre quando retornar imediatamente • Marcar o retorno em dois dias."
      }
      else {
        result.diagnostico = "NÃO É PNEUMONIA, possivel resfriado comum",
          result.tratamento = "Aliviar a tosse com medidas caseiras • Informar a mãe sobre quando retornar imediatamente • Seguimento em cinco dias, se não melhorar • Se tosse há mais de 14 dias , realizar investigação."
      }
      //AVALIANDO SIBILANCIA
      if (data.sibilancia == true) {
        if (data.classificacaoSibilancia == 'SIBILÂNCIA GRAVE') {
          result.sibilancia = data.classificacaoSibilancia,
            result.tratamentoSibilancia = "REFERIR IMEDIATAMENTE! Tratamento prévio ao encaminhamento: • Oxigênio • Beta-2 agonista por via inalatória • Primeira dose do corticoide • Primeira dose do antibiótico."
        } else if (data.classificacaoSibilancia == 'SIBILÂNCIA MODERADA') {
          result.sibilancia = data.classificacaoSibilancia,
            result.tratamentoSibilancia = "Administrar beta-2 por via inalatória (até 3x, a cada 20 minutos) • Administrar corticoide oral Se não melhorar: REFERIR, após dar a primeira dose do antibiótico injetável e O2, se possível Se melhorar: AVALIAR E CLASSIFICAR A TOSSE E DIFICULDADE PARA RESPIRAR • Tratamento domiciliar com beta-2 por via inalatória (cinco dias) • Corticoide por via oral (três dias) • Dar orientações à mãe para o controle da asma e quando retornar imediatamente • Marcar o retorno em dois dias"
        } else if (data.classificacaoSibilancia == 'SIBILÂNCIA LEVE') {
          result.sibilancia = data.classificacaoSibilancia,
            result.tratamentoSibilancia = "Tratamento domiciliar com beta-2 agonista por via inalatória (cinco dias). • Se estiver em uso de beta-2 há 24 horas ou mais: prescrever corticoide por via oral (três dias) • Dar orientações à mãe para o controle da asma e quando retornar imediatamente • Seguimento em dois dias, se não melhorar ou se estiver usando corticoide"
        }
      }
      response.send(result)
    }

  }

}

module.exports = AidpiController
