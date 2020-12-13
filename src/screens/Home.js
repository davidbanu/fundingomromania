import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import Footer from '../components/Footer';
import NavBarTop from '../components/NavBarTop';
import HomeTabBar from '../components/HomeTabBar';

import { productData } from "../productData";

const customStyles = {
  content : {
    maxHeight             : '100%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    position              : 'absolute',
    fontFamily           : 'Pulp'
  }
};

class Home extends React.Component {

  constructor() {
    super();

   
    this.setBody = ev => {
      this.setState({ body: ev.target.value });
    };

    this.state = {
      modalIsOpen: false,
      body: ''
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="flex-wrapper">
      <div className="container home">
        <NavBarTop />
        <h1 className="title text-center">Oportunități de sprijin a misiunii OM ROMANIA</h1>
        <p className="sub-title text-center">România, țara cu cei mai mulți credincioși evanghelici din Europa (după ultimele statistici), n-a aflat încă ce poate să facă Dumnezeu în/prin Bisericile Sale locale!</p>
        <button className="primary with-shadow" onClick={this.openModal}>Citește mai mult </button>
        <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="About Modal"
                    >
                      <div className="row">
                        <div className="col-md-10 col-12">
                          <h2 ref={subtitle => this.subtitle = subtitle} className="text-center title-modal">Mesaj</h2>
                        </div>
                        <div className="col-md-2 col-12">
                          <button type="button" class="close" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      </div>
                        <p className="modalDonationText">Echipa de misiune OM România dorește să sprijine efortul pe care-l depun toți credincioșii români, ce poartă în inima lor această dorință de îndeplinire a Planului Măreț de Misiune al lui Dumnezeu, potrivit Căruia, Evanghelia Împărăției trebuie să ajungă la orice comunitate umană din țara noastră. 
                        <span className="letterModals">
                        În mod deosebit, dorim să ajutăm bisericile din Sud și Sud-Estul României, ca, aici, Evanghelia să fie vestită celor ce sunt mai puțin expuși Adevărului. Dorința noastră este să identificăm Biserici vii de ucenici ai lui Hristos din România care simt chemarea de a forma alte grupuri de ucenici și Biserici locale noi, în Sud și Sud-Estul țării noastre. 
                        Este adevărat că, din cauza situației pandemice mondiale, Bisericile poate trec prin momente mai dificile, din punct de vedere financiar însă, noi credem că Dumnezeu are încă resurse nebănuite pe care El le-a transferat spre Bisericile locale și credincioșii care știu să-și manifeste generozitatea chiar și în această perioadă critică.
                        De aceea, vă invităm să fiți parteneri cu noi în rugăciune și în dărnicie pentru extinderea Împărăției lui Dumnezeu în România. 
                        </span>
                        <span className="letterModals">
                        În sensul acesta dorim să vă informăm cu privire la proiectele pe care le avem acum în derulare și despre planurile pe care vrem să le inițiem anul viitor. Vă rugăm să alegeți unul dintre proiectele de mai jos și să faceți o donație potrivit cu măsura de credință pe care o aveți și după îndemnul pe care îl primiți de la Dumnezeu. 
                        </span>
                        <span className="letterModals">
                        Puteți fi parte a Planului Măreț de Misiune a lui Dumnezeu pentru România zilelor noastre asociindu-vă cu noi în rugăciune și în susținere financiară pentru proiectele misionare pe care le desfășurăm. Noi vrem doar să vă oferim oportunitatea de a alege să faceți ceva semnificativ și cu impact major pentru Împărăția lui Dumnezeu.
                        </span>
                        
                        Mulțumim și ne rugăm ca Dumnezeu sa va binecuvânteze.
                        În numele echipei de misiune OM,
                        <br/>
                        Director
                        <br/>
                        Cornel Boingeanu</p> 
                  </Modal>
        <div id="products" className="products-section">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title" id="all_themes">Toate echipele</h2>
            </div>
          </div>
          <div className="row products-row">
            {productData.map((data) => {
              return (
                <div className="col-lg-12">
                  <section className="product-item" style={data.style}>
                    <header>
                      <div className="row title-row">
                        <div className="col-md-10 col-sm-10 col-12">
                          <h4 className="post-title mb-0"> <Link to={data.link}> {data.title} </Link></h4>
                        </div>
                        <div className="col-md-2 col-sm-2 col-12 price-col-label text-center"> <a className="btn donate-btn" href="#">Donează</a>
                        </div>
                      </div>
                    </header>
                    <div className="post-bottom">
                      <div className="row">
                        <div className="col-md-10 col-sm-10 col-10">
                          <div className="short-description">
                            <p className="mt-2">{data.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </div>
    );
  }
}


export default Home;