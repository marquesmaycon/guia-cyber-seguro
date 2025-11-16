import { LikeButton } from "../like-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.personalDataProtection.htmlId

export const PersonalDataProtection = () => {
  return (
    <div className="relative">
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card id={sectionHtmlId}>
        <CardHeader>
          <CardTitle>
            <h2>2. Proteção de Dados Pessoais: A Chave da Sua Casa Digital</h2>
          </CardTitle>
          <CardDescription>
            A proteção de dados pessoais é o alicerce da segurança online. Ao proteger as informações, o indivíduo
            minimiza a matéria-prima que os golpistas utilizam para personalizar ataques e torná-los mais convincentes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>2.1. Boas Práticas de Privacidade: Reduzindo sua Exposição</h4>
          <p>
            A regra fundamental de privacidade, conforme ensina a Cartilha de Segurança para Internet, é:{" "}
            <b>reduza a quantidade de dados que você divulga sobre si</b>. Quanto mais informações públicas (local de
            trabalho, nome de parentes, data de aniversário), mais fácil é para o golpista furtar sua identidade e mais
            convincente ele será em suas abordagens, pois pode utilizar esses dados para tentar adivinhar senhas.
          </p>
          <p>
            É necessário adotar o Princípio do Mínimo Privilégio Pessoal, operando no &quot;modo invisível&quot; sempre
            que possível. Isso significa:
          </p>
          <ul>
            <li>
              Gerenciar Aplicativos de Mensagens: Se você utiliza o aplicativo de mensagem apenas no celular, é uma boa
              prática desativar a função de download automático de fotos e vídeos recebidos. Isso evita que arquivos
              potencialmente maliciosos sejam baixados automaticamente para o seu dispositivo.
            </li>
            <li>
              Conexões Sem Fio: É altamente recomendado manter interfaces de comunicação como Wi-Fi, infravermelho e
              Bluetooth desabilitadas, ativando-as somente quando for estritamente necessário. Deixar essas interfaces
              abertas, mesmo em casa, pode ser explorado como um ponto de entrada físico para invasões.
            </li>
            <li>
              Redes Wi-Fi: Ao se conectar a redes Wi-Fi, prefira sempre aquelas que exigem autenticação. Se for usar
              redes abertas (públicas), utilize serviços que ofereçam criptografia, como HTTPS, PGP, SSH e VPN, para
              proteger a comunicação.
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h4>2.2. Criando Senhas Fortes e Inesquecíveis</h4>
          <p>
            O dilema da senha é a dificuldade de memorização versus a necessidade de complexidade. O CERT.br oferece
            métodos que resolvem essa dificuldade, priorizando a segurança sem depender de senhas curtas ou
            reutilizadas.
          </p>
          <p>
            A estratégia mais eficaz para criar uma senha forte é baseada em uma frase secreta. Em vez de uma palavra
            curta, escolha uma frase inteira e utilize um padrão para extrair os caracteres. Por exemplo, pode-se usar a
            primeira, segunda ou última letra de cada palavra da frase, adicionando caracteres especiais.
          </p>
          <ul>
            <li>
              Exemplo Prático: A frase &quot;Eu adoro acessar o fórum Adrenaline&quot; pode ser transformada na senha
              complexa <code>!EaAofA.</code>
            </li>
            <li>
              Substituição Inteligente: Para aumentar ainda mais a complexidade e dificultar ataques de dicionário,
              pode-se inventar padrões de substituição, como trocar a letra &quot;W&quot; por duas letras &quot;V&quot;
              ou letras por números (&apos;a&apos; por &apos;@&apos;, &apos;o&apos; por &apos;0&apos;).
            </li>
          </ul>
        </CardContent>

        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </div>
  )
}
