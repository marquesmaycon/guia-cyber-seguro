import { ChevronDown } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { sections } from "./sections"

const sectionHtmlId = sections.references.htmlId

export const References = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Referências</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible className="group">
            <CollapsibleTrigger className="inline-flex gap-2">
              Visualizar referências
              <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="styled">
                {refs.map((ref, index) => (
                  <li key={ref.url}>
                    {index + 1}.{" "}
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </section>
  )
}
const refs = [
  { title: "Cartilha de Segurança para Internet (Página Principal)", url: "https://cartilha.cert.br/" },
  {
    title: "Como identificar sites e links maliciosos? - TCEES",
    url: "https://www.tcees.tc.br/ajuda/como-identificar-sites-links-maliciosos/"
  },
  { title: "Dicas Rápidas (Especialmente Wi-Fi e Backup)", url: "https://cartilha.cert.br/dicas-rapidas/" },
  { title: "Como saber se o site é falso", url: "https://pppi.com.br/blog/como-saber-se-o-site-e-falso" },
  {
    title: "Lei Geral de Proteção de Dados (LGPD) - BNDES",
    url: "https://www.bndes.gov.br/wps/portal/site/home/transparencia/lgpd"
  },
  { title: "Núcleo de Combate aos Cibercrimes - NUCIBER", url: "https://www.policiacivil.pr.gov.br/NUCIBER" },
  {
    title: "Como registrar ocorrência de um Cibercrime pela página da PCPR",
    url: "https://www.policiacivil.pr.gov.br/NUCIBER/RegistrarOcorrencia"
  },
  {
    title: "Cartilha de Segurança para Internet - Phishing e Golpes (Fascículo)",
    url: "https://cartilha.cert.br/fasciculos/phishing-golpes/fasciculo-phishing-golpes.pdf"
  },
  { title: "CERT.br - Estatística de Páginas Falsas (Phishing)", url: "https://stats.cert.br/phishing/" },
  {
    title: "NIC.br - Cert.br ensina a criar senhas fortes (Frase secreta)",
    url: "https://nic.br/noticia/releases/dia-da-internet-segura-veja-as-orientacoes-do-cert-br-para-usar-as-redes-sociais-com-seguranca/"
  },
  {
    title: "Conheça exemplos de erros de segurança na internet (Phishing e Senhas)",
    url: "https://prodest.es.gov.br/conheca-exemplos-de-erros-de-seguranca-na-internet"
  },
  {
    title: "Dia da Internet Segura - Orientação do CERT.br para Redes Sociais",
    url: "https://cgi.br/noticia/releases/dia-da-internet-segura-veja-as-orientacoes-do-cert-br-para-usar-as-redes-sociais-com-seguranca/"
  },
  {
    title: "Guia de Boas Práticas no Tratamento de Dados Pessoais - LGPD",
    url: "https://codata.pb.gov.br/lgpd/guia-de-boas-praticas-no-tratamento-de-dados-pessoais_-lgpd_atualizado.pdf"
  },
  {
    title: "Sobre golpes e mensagens suspeitas - Central de Ajuda do WhatsApp",
    url: "https://faq.whatsapp.com/2286952358121083/?locale=pt_BR"
  },
  {
    title: "Quais são os seus direitos? — LGPD - Lei Geral de Proteção de Dados Pessoais (Serpro)",
    url: "https://www.serpro.gov.br/lgpd/cidadao/quais-sao-os-seus-direitos-lgpd"
  },
  { title: "Ameaças e Vulnerabilidades Digitais", url: "https://www.internetsegura.pt/AmeacasVulnerabilidades" },
  {
    title: "Qual a importância de ter um antivírus e mantê-lo atualizado? - Clooud",
    url: "https://clooud.com.br/qual-importancia-antivirus-do-antivirus-e-porque-mante-lo-atualizado/"
  },
  {
    title: "Especial Desconstruindo a Desinformação: navegar é preciso, regular as redes também",
    url: "https://jornal.usp.br/atualidades/especial-desconstruindo-a-desinformacao-navegar-e-preciso-regular-as-redes-tambem/"
  },
  {
    title: "Guia de Boas Práticas no Uso do WhatsApp (Ativação 2FA)",
    url: "https://fiema.org.br/uploads/midia/18008/RUnY7rCG2YqyCXWjt2bUWI1kmaSMT5HJ.pdf"
  },
  {
    title: "11 dicas para organizar arquivos digitais",
    url: "https://www.accesscorp.com/pt-br/blog/11-dicas-para-organizar-arquivos-digitais/"
  },
  {
    title: "Responsabilização de redes sociais sobre divulgação de fake news divide opiniões",
    url: "https://www.camara.leg.br/noticias/678465-responsabilizacao-de-redes-sociais-sobre-divulgacao-de-fake-news-divide-opinioes/"
  },
  {
    title: "O que é a segurança de dados na nuvem? Benefícios e soluções - Google Cloud",
    url: "https://cloud.google.com/learn/what-is-cloud-data-security?hl=pt-BR"
  },
  {
    title: "CERT.br – Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil",
    url: "https://www.cert.br/"
  },
  {
    title: "Segurança na nuvem: como proteger seus dados e evitar violações - Trust Control",
    url: "https://www.trustcontrol.com.br/blog/seguranca-na-nuvem-como-proteger-seus-dados-e-evitar-violacoes/"
  },
  {
    title: "Golpes do WhatsApp: veja como se proteger - SPC Brasil (WhatsApp Premium)",
    url: "https://www.spcbrasil.com.br/blog/golpe-do-whatsapp"
  },
  { title: "Ambiente Virtual de Aprendizagem do Ministério da Educação (MEC)", url: "https://avamec.mec.gov.br/" },
  {
    title: "Onde denunciar crimes cibernéticos (Disque 100 e Ligue 180)",
    url: "https://sagenetworks.com.br/en/delegacia-de-cibercrimes/"
  },
  {
    title: "Verificação em dois fatores - Cidadão na Rede(Vídeo)",
    url: "https://cidadaonarede.nic.br/pt/videos/seguranca/verificacao-em-dois-fatores"
  }
]
