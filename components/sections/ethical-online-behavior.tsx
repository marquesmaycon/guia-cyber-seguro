import { LikeButton } from "../like-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.ethicalOnlineBehavior.htmlId

export const EthicalOnlineBehavior = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>6. Comportamento Ético e Consciente Online: Cidadania Digital</h2>
          </CardTitle>
          <CardDescription>
            A segurança digital transcende a tecnologia e entra no campo da cidadania e da ética.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>6.1. Responsabilidade nas Redes Sociais</h4>
          <p>
            As redes sociais nos dão um poder de voz amplificado. A responsabilidade nas redes exige que o usuário
            reflita sobre as consequências do compartilhamento de informações, memes e opiniões. Postar de forma
            consciente significa agir com respeito e integridade, reconhecendo que a internet não é uma terra sem lei e
            que as ações online têm impacto no mundo real.
          </p>
        </CardContent>
        <CardContent>
          <h4>6.2. Como Lidar com Fake News e Desinformação</h4>
          <p>
            A desinformação representa um desafio significativo para a sociedade, afetando processos democráticos e a
            saúde pública. Pesquisas no Brasil indicam a gravidade do problema: cerca de 76% da população foi exposta a
            informações possivelmente falsas sobre política em um único semestre. Os principais canais de disseminação
            são as redes sociais e, especialmente, os aplicativos de mensagens, citados por 67% dos entrevistados.
          </p>
          <p>
            Existe uma <b>simbiose entre desinformação e fraude</b>. O alto volume de conteúdo duvidoso e
            sensacionalista (fake news) em aplicativos de mensagem é o mesmo canal onde ocorrem os golpes de phishing e
            a exploração de engenharia social. O hábito de aceitar e retransmitir conteúdo não verificado (fake news)
            enfraquece o senso crítico do usuário, tornando-o mais vulnerável ao apelo emocional e à urgência explorada
            pelos golpistas.
          </p>
          <h4 className="mt-4">Ações de Combate:</h4>
          <ul className="styled">
            <li>
              <b>Pensamento Crítico</b>: Antes de compartilhar, pergunte: &quot;Quem está dizendo isso? Qual é a fonte
              original? É um veículo de imprensa confiável?&quot;
            </li>
            <li>
              <b>Verificação</b>: Procure a informação em pelo menos duas fontes independentes e de boa reputação.
            </li>
            <li>
              <b>Não Reenvie</b>: Se você não puder confirmar a veracidade de uma mensagem, não a reencaminhe.
            </li>
          </ul>
          <p>
            O debate sobre a responsabilização das plataformas para combater a desinformação (como o Projeto de Lei
            2.630/2020) aponta que, embora a auto-regulação ajude, normas legais são necessárias para garantir que a
            circulação de notícias falsas não fique livre de reparação a posteriori (após a publicação).
          </p>
        </CardContent>
        <CardContent>
          <h4>6.3. Direitos e Deveres Digitais (Introdução à LGPD)</h4>
          <p>
            A Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018) estabelece as regras para o tratamento de dados
            pessoais no Brasil. Ela transforma a proteção de dados de uma mera preocupação técnica em um{" "}
            <b>direito legal e acionável</b> , garantindo a <b>soberania digital</b> pessoal do cidadão.
          </p>

          <h4 className="mt-4">Seus Direitos como Titular de Dados</h4>

          <p>A LGPD empodera o cidadão com direitos claros sobre suas informações. O titular de dados pode :</p>

          <ul className="styled">
            <li>Receber confirmação sobre o tratamento de seus dados.</li>
            <li>Pedir a correção de dados incompletos ou desatualizados.</li>
            <li>
              Solicitar a eliminação de dados que não sejam necessários ou que tenham sido tratados de forma ilegal.
            </li>
            <li>Saber com quem seus dados foram compartilhados e obter esclarecimentos sobre o tratamento.</li>
            <li>Apresentar reclamações à Autoridade Nacional de Proteção de Dados (ANPD).</li>
          </ul>

          <p>
            <b>Deveres</b>: Em contrapartida aos direitos, o cidadão tem o dever de agir eticamente, respeitando os
            termos de uso dos serviços e, crucialmente, abstendo-se de propagar conteúdo ilegal, ofensivo ou falso (ver
            Seção 6.2).
          </p>
        </CardContent>
        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
