import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.base'}>erpbrasil.base</Link>,
    imageUrl: 'img/thumbs-up.svg',
    description: (
      <>
          <p>Formatação/Validação de CPF/CNPJ, IE, PIS</p>
          <p>Formatação de CEP</p>
          <p>Rateio de Frete / Seguro  e etc</p>
          <p>Remoção de pontuação de documentos</p>
      </>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.assinatura'}>erpbrasil.assinatura</Link>,
    imageUrl: 'img/editing.svg',
    description: (
      <>
          <p>Certificado A1 e A3</p>
          <p>Assinatura de documentos PDF</p>
          <p>Assinatura de documentos fiscais (XML)</p>
      </>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.transmissao'}>erpbrasil.transmissao</Link>,
    imageUrl: 'img/widescreen.svg',
    description: (
      <>Transmissão de SOAP-XML e HTTP com certificado digital de maneira segura e prática</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/nfelib'}>nfelib</Link>,
    imageUrl: 'img/archive.svg',
    description: (
      <>Parsing e da geração da NF-e, matinda de maneria fácil através dos XSD, nunca mais tenha esse trabalho.</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/nfselib'}>nfselib</Link>,
    imageUrl: 'img/archive.svg',
    description: (
      <>Parsing e da geração da NFS-e, matinda de maneria fácil através dos XSD das prefeituras, nunca mais tenha esse trabalho.</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.edoc'}>erpbrasil.edoc</Link>,
    imageUrl: 'img/chimney.svg',
    description: (
      <>Transmissão de Documentos Fiscais - NF-e, CT-e, NFS-e, MD-e e etc</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.edoc.pdf'}>erpbrasil.edoc.pdf</Link>,
    imageUrl: 'img/printer.svg',
    description: (
      <>Transformando XML de documentos fiscais em PDF</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/erpbrasil.edoc.gen'}>erpbrasil.edoc.gen</Link>,
    imageUrl: 'img/blockchain.svg',
    description: (
      <>Ferramenta para atualizar as libs nfelib, nfselib e etc de maneira simples e prática</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/workalendar'}>workalendar</Link>,
    imageUrl: 'img/24-hours.svg',
    description: (
      <>Calendário Brasileiro e internacional atualizado</>
    ),
  },
  {
    title: <Link to={'https://github.com/erpbrasil/febraban-python'}>febraban-python</Link>,
    imageUrl: 'img/money.svg',
    description: (
      <>
          <p>Remessa e Retorno Bancário CNAB 240</p>
          <p>Emissão de Boletos</p>
          <p>Pagamentos de Boletos, TED/DOC e Impostos</p>
          <p>Débito automatico</p>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Seja bem vindo ao ${siteConfig.title}`}
      description="Simplificando o desenvolvimento de software empresarial, erp, no Brasil <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            {/*<Link*/}
            {/*  className={clsx(*/}
            {/*    'button button--outline button--secondary button--lg',*/}
            {/*    styles.getStarted,*/}
            {/*  )}*/}
            {/*  to={'https://github.com/erpbrasil'}>*/}
            {/*  Conheça nossos projetos*/}
            {/*</Link>*/}
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Mantido por:</h1>
            <div className="card-group">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Akretion</h5>
                                <a href="https://www.akretion.com">
                                    <img src="img/akretion-logo.png" alt="akretion"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">KMEE</h5>
                                <a href="https://www.kmee.com.br">
                                    <img src="img/kmee_vertical.svg" alt="kmee" width="200" height="100"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </header>
    </Layout>
  );
}

export default Home;
