import { LikeButton } from "../like-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.introduction.htmlId

export function Introduction() {
  return (
    <div className="relative">
      <VectorBg vector="2" position="right" flipX className="top-1/2 -translate-y-1/2 transform" />
      <Card id={sectionHtmlId} className="relative">
        <CardHeader>
          <CardTitle>
            <h2>1. Introdução à Navegação Segura: O Que é e Por Que Importa</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h4>1.1. O Que é Segurança Digital? (Seu Escudo Digital)</h4>
          <p>
            Segurança digital, ou segurança cibernética, é o conjunto de ferramentas, políticas, salvaguardas e atitudes
            que se utiliza para proteger equipamentos (como celulares e computadores) e, principalmente, as informações
            armazenadas neles (dados pessoais, fotos, contas bancárias) contra danos, acessos não autorizados ou roubos.
          </p>
          <p>
            É fundamental compreender que essa proteção é uma responsabilidade compartilhada. A rede mundial de
            computadores, embora nos traga facilidades, nos expõe a inúmeras ameaças e vulnerabilidades digitais.
            Sentir-se ameaçado ou vulnerável na internet é comum, e o primeiro passo para a segurança é reconhecer que a
            rede oferece riscos reais que devem ser combatidos ativamente.
          </p>
        </CardContent>
        <CardContent>
          <h4>1.2. Por Que a Segurança Digital é Importante para Você</h4>
          <p>
            A principal razão pela qual a segurança digital é vital para a vida cotidiana reside no risco de que simples
            equívocos possam comprometer a segurança de dados pessoais. Ações aparentemente inofensivas, como clicar em
            um link sem a devida atenção, podem causar sérios problemas, resultando em perdas financeiras, roubo de
            identidade ou danos à reputação.
          </p>
          <p>
            Muitas vezes, os erros de segurança que culminam em incidentes não são falhas complexas de tecnologia, mas
            sim a exploração da falha humana: falta de atenção, ansiedade em acessar uma informação ou desconhecimento
            sobre as melhores práticas. Quando uma pessoa não se preocupa com a própria segurança digital, ela se torna
            um alvo fácil. Os cibercriminosos frequentemente exploram o que é mais previsível e fácil de invadir: a
            rotina e o comportamento desatento do usuário.
          </p>
        </CardContent>
        <CardContent>
          <h4>1.3. Como Identificar Riscos Comuns ao Navegar (Onde Moram os Problemas)</h4>
          <p>
            A navegação segura depende da capacidade de identificar os perigos antes que eles se concretizem. Os riscos
            mais comuns estão associados à introdução de softwares maliciosos e à tentativa de roubo de credenciais.
          </p>
          <p>Entre as ameaças digitais mais conhecidas, destacam-se:</p>
          <ul>
            <li>
              <b>Malware:</b> Termo genérico para software malicioso, como vírus, que tem o objetivo de danificar,
              roubar dados ou controlar seu dispositivo sem seu consentimento.
            </li>
            <li>
              Spyware: Um tipo de programa espião que rastreia suas atividades, o que você digita e os sites que você
              visita, repassando essas informações a terceiros.
            </li>
            <li>
              Phishing: Considerado um dos golpes mais conhecidos, consiste em induzir a vítima a clicar em links
              maliciosos criados por criminosos para obter dados.
            </li>
          </ul>
          <p>
            A repetição de senhas entre diferentes serviços é uma falha comportamental grave. Mesmo que seja complicado
            memorizar muitas senhas, usar a mesma combinação para e-mails, redes sociais e sistemas bancários aumenta
            exponencialmente o risco. Se uma única conta for comprometida (por um vazamento de dados de um site menos
            seguro, por exemplo), todas as outras contas do usuário ficam instantaneamente vulneráveis. Para o público
            leigo, essa desatenção ao clicar em links e a repetição de senhas são os pontos de falha primários
            explorados pelos golpistas.
          </p>
          <p>
            A forma como um usuário se protege deve, portanto, ir além da técnica e focar na engenharia social reversa –
            ou seja, aprender a desconfiar. Se a falha primária é a falta de atenção, a defesa primária é o senso
            crítico. É preciso desenvolver o hábito de questionar a autenticidade de mensagens, especialmente aquelas
            que criam um senso de urgência ou prometem vantagens exageradas, pois é aí que o cibercriminoso busca levar
            a vítima ao erro.
          </p>
        </CardContent>
        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </div>
  )
}
