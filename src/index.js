import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Steps,
  Button,
  message,
  Row,
  Col,
  Input,
  Icon,
  Radio,
  Divider,
  Table,
  Layout,
  Menu,
  Breadcrumb
} from "antd";
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const { Header, Content, Footer } = Layout;
const steps = [
  {
    title: "Dados do Investidor",
    content: (
      <span className="form-control">
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Distribuidor</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>E-mail para Contato</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Denominação/Razão Social</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Data de Constituição</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Atividade Principal</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>País de Constituição</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>País de Domicílio Fiscal</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Endereço Sede (Rua, nº, Sala, Bloco, etc)</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Bairro</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Cidade</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>UF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CEP</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>País</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>DDI DDD Telefone </span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Ramal</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>DDI DDD Fax</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Caixa Postal</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Email</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
      </span>
    )
  },
  {
    title: "Informações para Correspondência",
    content: (
      <div className="radios">
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Receber Extrato</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Receber Extrato</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Receber Informe de Rendimento</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={18}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Opção para Envio de Correspondência - Meio Físico
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Endereço Sede</Radio>
                <Radio value={2}>Endereço Opcional</Radio>
              </RadioGroup>
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Autorizo o Distribuidor enviar por e-mail extratos e demais
                  informações
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Autorizo a Transmissão de Ordens por Representante/Procurador
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Opera por Conta de Terceiros</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Vinculado ao Intermediário</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    )
  },
  {
    title: "Informações Fiscais",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  A empresa exerce alguma atividade financeira, para fins de
                  FATCA, como Custodiante, Banco, Instituição de Investimentos,
                  Fundos de Investimentos, Consórcios ou Companhia de Seguros
                  e/ou Previdência, Gestão de Títulos e Valores Mobiliários,
                  Distribuição de Títulos e Valores Mobiliários, incluindo
                  Agentes de Distribuição, Corretagem de Títulos ou Valores
                  Mobiliários, Securitização, Depositário Central, Bolsas ou
                  Entidades de Balcão Organizado?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>

        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  As informações sobre atividade ativa ou passiva abaixo devem
                  ser respondidas caso a Empresa não exerça alguma atividade
                  financeira para fins de FATCA:
                </span>
              </Row>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  50% ou mais do capital e ativos da empresa são proveniente
                  estritamente de atividades de prestação de serviços, compra,
                  venda ou produção de bens de mercadorias, industrialização de
                  bens ou extração mineral?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  *Somente em caso negativo, responda o questionamento abaixo:
                </span>
              </Row>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  É uma entidade sem fins lucrativos ou um órgão governamental
                  (Municipal, Estadual ou Federal)?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  *Somente em caso negativo, responda o questionamento abaixo:
                </span>
              </Row>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  As ações da empresa ou de sua controladora são listadas na
                  Bolsa de Valores?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    )
  },
  {
    title: "Dados Cadastrais dos Procuradores",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nome do Procurador</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CPF/CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Doc. Identificação - Tipo</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nº Documento</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Órgão Emissor</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Data de Expedição</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">Forma Autorizada de Assinatura</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Isoladamente</Radio>
                <Radio value={2}>Em Conjunto</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Divider>PEP</Divider>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Exerce ou exerceu nos últimos cinco anos algum cargo, emprego
                  ou função pública relevante?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Possui Relacionamento/Ligação com Agente Público?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não </Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    )
  },
  {
    title: "Dados dos Controladores/Administradores",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={16}>
            <div className="padder">
              <span>Nome/Razão Social do Controlador</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CPF/CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Divider>PEP</Divider>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Exerce ou exerceu nos últimos cinco anos algum cargo, emprego
                  ou função pública relevante?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Possui Relacionamento/Ligação com Agente Público?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não </Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Divider>Administrador</Divider>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nome do Administrador</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CPF/CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Divider>PEP</Divider>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Exerce ou exerceu nos últimos cinco anos algum cargo, emprego
                  ou função pública relevante?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Possui Relacionamento/Ligação com Agente Público?
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não </Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
      </div>
    )
  },
  {
    title: "Grupo Econômico  ",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Denominação/Razão Social</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Para Uso Exclusivo do Distribuidor",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  Conhecimento Financeiro do Investidor
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Básico</Radio>
                <Radio value={2}>Intermediário</Radio>
                <Radio value={3}>Avançado</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">
                  O Investidor respondeu o questionário de Suitability *Motivo:
                </span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Sim</Radio>
                <Radio value={2}>Não</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Perfil do Investidor </span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Segmento do investidor</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
      </div>
    )
  },

  {
    title: "Situação Financeira/Patrimonial do Investidor",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={24}>
            <div className="m-t">
              Não havendo Bens Imóveis e Outros Bens e Valores a declarar, os
              campos abaixo deverão ser anulados
            </div>
          </Col>
        </Row>
        <Divider>Bens Imóveis</Divider>

        <div className="ant-table ant-table-default ant-table-scroll-position-left">
          <div className="ant-table-content">
            <div className="ant-table-body">
              <table className="">
                <thead className="ant-table-thead">
                  <tr>
                    <th className="">
                      <span>Espécie</span>
                    </th>
                    <th className="">
                      <span>Endereço</span>
                    </th>
                    <th className="">
                      <span>UF</span>
                    </th>
                    <th className="">
                      <span>Valor Atual - R$</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody">
                  <tr
                    className="ant-table-row ant-table-row-level-0"
                    data-row-key="1"
                  >
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Divider>
          {" "}
          <Button type="primary">Adicionar imóveis</Button>
        </Divider>
        <Divider>Outros Bens e Valores</Divider>

        <div className="ant-table ant-table-default ant-table-scroll-position-left">
          <div className="ant-table-content">
            <div className="ant-table-body">
              <table className="">
                <thead className="ant-table-thead">
                  <tr>
                    <th className="">
                      <span>Tipo</span>
                    </th>
                    <th className="">
                      <span>Descrição</span>
                    </th>

                    <th className="">
                      <span>Valor Atual - R$</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="ant-table-tbody">
                  <tr
                    className="ant-table-row ant-table-row-level-0"
                    data-row-key="1"
                  >
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                    <td className="">
                      <Input
                        addonAfter={<Icon type="question" />}
                        defaultValue=""
                        placeholder="instruction description"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Divider>
          {" "}
          <Button type="primary">Adicionar outros bens e valores</Button>
        </Divider>
      </div>
    )
  },
  {
    title: "Contribuição Tributária",
    content: (
      <div className="padder">
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">IRRF</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Tributado</Radio>
                <Radio value={2}>Isento</Radio>
                <Radio value={2}>Imune</Radio>

                <Radio value={2}>Dispensado de retenção na Fonte*</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="padder">
              <Row gutter={24}>
                <span className="label">IOF</span>
              </Row>
              <RadioGroup>
                <Radio value={1}>Tributado</Radio>
                <Radio value={2}>Isento</Radio>
                <Radio value={2}>Imune</Radio>

                <Radio value={2}>Dispensado de retenção na Fonte*</Radio>
              </RadioGroup>
            </div>
          </Col>
          <Col span={12} />
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            *Enviar documentação comprobatória da condição tributária declarada
            e inserir abaixo a justificativa:
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "Informações Bancárias ",
    content: (
      <div className="padder">
        <Divider>Cetip</Divider>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Razão Social do Investidor</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Conta Cetip</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Díg.</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Divider>Conta 1</Divider>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nome do Banco</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nº Banco</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Nº Ag.</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Conta-Corrente</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>Razão Social do Investidor</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="padder">
              <span>CNPJ/MF</span>
              <Input
                addonAfter={<Icon type="question" />}
                defaultValue=""
                placeholder="instruction description"
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="m-t">description del elemento de datos</div>
          </Col>
        </Row>
        <Divider>
          {" "}
          <Button type="primary">Adicionar Conta</Button>
        </Divider>
      </div>
    )
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Ficha Cadastral - Pessoa Jurídica</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }} />
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Row gutter={8}>
                <Col span={8}>
                  <Steps direction="vertical" current={current}>
                    {steps.map(item => (
                      <Step key={item.title} title={item.title} />
                    ))}
                    <div className="steps-action">
                      {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                          Next
                        </Button>
                      )}
                      {current === steps.length - 1 && (
                        <Button
                          type="primary"
                          onClick={() =>
                            message.success("Processing complete!")
                          }
                        >
                          Done
                        </Button>
                      )}
                      {current > 0 && (
                        <Button
                          style={{ marginLeft: 8 }}
                          onClick={() => this.prev()}
                        >
                          Previous
                        </Button>
                      )}
                    </div>
                  </Steps>
                </Col>
                <Col span={16}>
                  <div className="steps-content">{steps[current].content}</div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            VORTX ©2018 Created by Novosit
          </Footer>
        </Layout>,
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
