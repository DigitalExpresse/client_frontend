import React from 'react';
import './legalsPage.css';
import legals from "../../dataBrut/legals.json";

export const PoliticConfidentiality = () => {
    return (
        <>
            <div className={"container-legals"}>
                <div className="section-legals">
                    <h1 className="title-legals">Politique de confidentialité</h1>
                    <p className="legals-subtitle">Dernière mise à jour : {legals.maj_date}</p>
                    <p className="legals-subtitle">{legals.website_url}</p>

                    <h2 className="section-title-legals">Article 1 : Préambule</h2>
                    <p className="section-text-legals">
                        La présente politique de confidentialité a pour but d’informer les
                        utilisateurs du site :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Sur la manière dont sont collectées leurs données personnelles.
                                Sont considérées comme des données personnelles, toute information
                                permettant d’identifier un utilisateur. A ce titre, il peut s’agir
                                : de ses noms et prénoms, de son âge, de son adresse postale ou
                                email, de sa localisation ou encore de son adresse IP (liste non-
                                exhaustive) ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Sur les droits dont ils disposent concernant ces données ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Sur la personne responsable du traitement des données à
                                caractère personnel collectées et traitées ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Sur les destinataires de ces données personnelles ;
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        Cette politique complète les mentions légales et les Conditions
                        Générales d’Utilisation consultables par les utilisateurs à l’adresse
                        suivante : <a className={"underline"} href={legals.url_mentions_legals}>{legals.url_mentions_legals}</a>
                    </p>

                    <h2 className="section-title-legals">Article 2 : Principes relatifs à la collecte et au traitement
                        des
                        données personnelles</h2>
                    <p className="section-text-legals">
                        Conformément à l’article 5 du Règlement européen 2016/679, les données
                        à caractère personnel sont :
                    </p>

                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Traitées de manière licite, loyale et transparente au regard de
                                la personne concernée ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Collectées pour des finalités déterminées (cf. Article 3.1 des
                                présentes), explicites et légitimes, et ne pas être traitées
                                ultérieurement d'une manière incompatible avec ces finalités ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Adéquates, pertinentes et limitées à ce qui est nécessaire au
                                regard des finalités pour lesquelles elles sont traitées ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Exactes et, si nécessaire, tenues à jour. Toutes les mesures
                                raisonnables doivent être prises pour que les données à
                                caractère personnel qui sont inexactes, eu égard aux finalités
                                pour lesquelles elles sont traitées, soient effacées ou
                                rectifiées sans tarder ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Conservées sous une forme permettant l'identification des
                                personnes concernées pendant une durée n'excédant pas celle
                                nécessaire au regard des finalités pour lesquelles elles sont
                                traitées ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Traitées de façon à garantir une sécurité appropriée des
                                données collectées, y compris la protection contre le traitement
                                non autorisé ou illicite et contre la perte, la destruction ou
                                les dégâts d'origine accidentelle, à l'aide de mesures
                                techniques ou organisationnelles appropriées.
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        Le traitement n'est licite que si, et dans la mesure où, au moins
                        une des conditions suivantes est remplie :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                La personne concernée a consenti au traitement de ses données à
                                caractère personnel pour une ou plusieurs finalités spécifiques ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Le traitement est nécessaire à l'exécution d'un contrat auquel
                                la personne concernée est partie ou à l'exécution de mesures
                                précontractuelles prises à la demande de celle-ci ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Le traitement est nécessaire au respect d'une obligation légale
                                à laquelle le responsable du traitement est soumis ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Le traitement est nécessaire à la sauvegarde des intérêts
                                vitaux de la personne concernée ou d'une autre personne
                                physique ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Le traitement est nécessaire à l'exécution d'une mission
                                d'intérêt public ou relevant de l'exercice de l'autorité
                                publique dont est investi le responsable du traitement ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Le traitement est nécessaire aux fins des intérêts légitimes
                                poursuivis par le responsable du traitement ou par un tiers, à
                                moins que ne prévalent les intérêts ou les libertés et droits
                                fondamentaux de la personne concernée qui exigent une
                                protection des données à caractère personnel, notamment lorsque
                                la personne concernée est un enfant.
                            </p>
                        </li>
                    </ul>

                    <h2 className="section-title-legals">Article 3 : Données à caractère personnel collectées et
                        traitées
                        dans le cadre de la navigation sur le site</h2>
                    <p className="section-text-legals">
                        <b>Article 3.1 :</b> Données collectées
                        Les données personnelles collectées dans le cadre de notre activité
                        sont les suivantes :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Nom, prénom, adresse, numéro de téléphone, adresse électronique.
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        La collecte et le traitement de ces données répond à la (aux)
                        finalité(s) suivante(s) :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">Gestion de l’espace client, suivi
                                de la qualité des services, envoi de newsletter, prospection, réservation.
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        <b>Article 3.2 :</b> Mode de collecte des données
                        Lorsque vous utilisez notre site, sont automatiquement collectées
                        les données suivantes :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Adresse IP, cookies, informations sur l’ordinateur ou le terminal, type de navigateur, type de système d’exploitation, et informations sur la navigation des utilisateurs sur le site.
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                D’autres données personnelles sont collectées lorsque vous
                                effectuez les opérations suivantes sur la plateforme :
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Aucune
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        Elles sont conservées par le responsable du traitement dans des
                        conditions raisonnables de sécurité, pour une durée de : 3 ans.
                        <br/>
                        La société est susceptible de conserver certaines données à
                        caractère personnel au-delà des délais annoncés ci-dessus afin de
                        remplir ses obligations légales ou réglementaires.
                    </p>
                    <p className="section-text-legals">
                        <b>Article 3.3 :</b> Hébergement des données
                        Le site {legals.website_url} est hébergé par :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                {legals.hebergement_name} dont le siège est situé à {legals.hebergement_address}, {legals.hebergement_zip} {legals.hebergement_city}.
                                <br/>
                                website : {legals.hebergement_website}
                            </p>
                        </li>
                    </ul>

                    <h2 className="section-title-legals">Article 4 : Responsable du traitement des données et délégué à
                        la
                        protection des données</h2>
                    <p className="section-text-legals">
                       <b>Article 4.1</b> : Le responsable du traitement des données
                        Les données à caractère personnelles sont collectées par {legals.company_name}, dont le numéro d’immatriculation est
                        le {legals.company_siret}.
                        <br/>
                        Le responsable du traitement des données à caractère personnel peut
                        être contacté de la manière suivante :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Par courrier à l’adresse : {legals.company_address}, {legals.company_zip} {legals.company_city};
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Par téléphone, au : {legals.company_phone};
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Par mail : {legals.company_email}.
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        <b>Article 4.2</b> : Le délégué à la protection des données
                        Le délégué à la protection des données de l’entreprise ou du
                        responsable est :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Isoardi Marius
                                <br/>
                                06 12 34 56 78
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        Si vous estimez, après nous avoir contactés, que vos droits
                        “Informatique et Libertés”, ne sont pas respectés, vous pouvez
                        adresser une information à la CNIL.
                    </p>

                    <h2 className="section-title-legals">Article 5 : Les droits de l’utilisateur en matière de collecte
                        et de
                        traitement des données</h2>
                    <p className="section-text-legals">
                        Tout utilisateur concerné par le traitement de ses données
                        personnelles peut se prévaloir des droits suivants, en application
                        du règlement européen 2016/679 et de la Loi Informatique et Liberté
                        (Loi 78-17 du 6 janvier 1978) :
                    </p>
                    <ul>
                        <li>
                            <p className="section-text-legals">
                                Droit d’accès, de rectification et droit à l’effacement des
                                données (posés respectivement aux articles 15, 16 et 17 du
                                RGPD) ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Droit à la portabilité des données (article 20 du RGPD) ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Droit à la limitation (article 18 du RGPD) et à l’opposition du
                                traitement des données (article 21 du RGPD) ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Droit de ne pas faire l’objet d’une décision fondée exclusivement
                                sur un procédé automatisé ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Droit de déterminer le sort des données après la mort ;
                            </p>
                        </li>
                        <li>
                            <p className="section-text-legals">
                                Droit de saisir l’autorité de contrôle compétente (article 77 du
                                RGPD).
                            </p>
                        </li>
                    </ul>
                    <p className="section-text-legals">
                        Pour exercer vos droits, veuillez adresser votre courrier à {legals.company_name} {legals.company_address}, {legals.company_zip} {legals.company_city}, ou par mail à {legals.company_email}.
                    </p>
                    <p className="section-text-legals">
                        Afin que le responsable du traitement des données puisse faire droit
                        à sa demande, l’utilisateur peut être tenu de lui communiquer
                        certaines informations telles que : ses noms et prénoms, son adresse
                        e-mail ainsi que son numéro de compte, d’espace personnel ou
                        d’abonné.
                    </p>
                    <p className="section-text-legals">
                        Consultez le site cnil.fr pour plus d’informations sur vos droits.
                    </p>

                    <h2 className="section-title-legals">Article 6 : Conditions de modification de la politique de
                        confidentialité</h2>
                    <p className="section-text-legals">
                        L’éditeur du site {legals.website_url} se réserve le droit de pouvoir
                        modifier la présente Politique à tout moment afin d’assurer aux
                        utilisateurs du site sa conformité avec le droit en vigueur.
                        <br/>
                        <br/>
                        Les éventuelles modifications ne sauraient avoir d’incidence sur les
                        achats antérieurement effectués sur le site, lesquels restent soumis
                        à la Politique en vigueur au moment de l’achat et telle qu’acceptée
                        par l’utilisateur lors de la validation de l’achat.
                        <br/>
                        <br/>
                        L’utilisateur est invité à prendre connaissance de cette Politique à
                        chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de
                        l’en prévenir formellement.
                        <br/>
                        <br/>
                        La présente politique, éditée le {legals.maj_date}, a été mise
                        à jour le {legals.maj_date}.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PoliticConfidentiality;
