import React from 'react';
import legals from "../../dataBrut/legals.json";

const MentionLegalCgu = () => {
    return (
        <div className={"container-legals"}>
            <div className="section-legals">
                <h1 className="title-legals">Mentions légales</h1>
                <p className="legals-subtitle">Dernière mise à jour : {legals.maj_date}</p>
                <p className="legals-subtitle">
                    Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y
                    parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes
                    modalités.
                    <br/>
                    Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans
                    l’économie numérique, les responsables du présent site internet {legals.website_url} sont :
                </p>
                <h2 className="section-title-legals">Éditeur du Site :</h2>
                <p className="section-text-legals">
                    {legals.company_name}
                    <br/>
                    Numéro de SIRET : {legals.company_siret}
                    <br/>
                    Responsable éditorial : {legals.company_responsable}
                    <br/>
                    {legals.company_address}, {legals.company_zip} {legals.company_city}
                    <br/>
                    Téléphone : {legals.company_phone}
                    <br/>
                    Email : <a className="underline" href="mailto:{legals.company_email}">{legals.company_email}</a>
                    <br/>
                    Site Web : {legals.company_website}
                </p>
                <h2 className="section-title-legals">Hébergement :</h2>
                <p className="section-text-legals">
                    Hébergeur : {legals.hebergement_name}
                    <br/>
                    {legals.hebergement_address}, {legals.hebergement_zip} {legals.hebergement_city}
                    <br/>
                    Site Web : {legals.hebergement_website}
                </p>
                <h2 className="section-title-legals">Développement :</h2>
                <p className="section-text-legals">
                    {legals.company_name}
                    <br/>
                    {legals.company_address}, {legals.company_zip} {legals.company_city}
                    <br/>
                    Site Web : {legals.company_website}
                </p>
                <h2 className="section-title-legals">Conditions d’utilisation :</h2>
                <p className="section-text-legals">
                    Ce site ({legals.website_url}) est proposé en différents langages web (HTML, HTML5, Javascript, CSS,
                    etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.
                    <br/>
                    Nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari,
                    Firefox, Google Chrome, etc…
                    <br/>
                    L’agence web {legals.company_name} met en œuvre tous les moyens dont elle dispose, pour assurer une
                    information fiable et une mise à jour fiable de ses sites internet.
                    <br/>
                    Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de
                    l’exactitude des informations auprès de {legals.company_name} , et signaler toutes modifications du site qu’il
                    jugerait utile. {legals.company_name} n’est en aucun cas responsable de l’utilisation faite de ces
                    informations, et de tout préjudice direct ou indirect pouvant en découler.
                    <br/>
                </p>


                <h2 className="section-title-legals">Liens hypertextes :</h2>
                <p className="section-text-legals">
                    Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources
                    disponibles sur Internet. {legals.company_name} ne dispose d’aucun moyen pour contrôler les sites en
                    connexion avec ses sites internet.
                    <br/>
                    {legals.company_name} ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
                    Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant
                    du contenu de ces sites ou sources externes, et notamment des informations, produits ou services
                    qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette
                    utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions
                    d’utilisation.
                    <br/>
                    Les utilisateurs, les abonnés et les visiteurs des sites internet ne peuvent pas mettre en place un
                    hyperlien en direction de ce site sans l’autorisation expresse et préalable de {legals.company_name}.
                    <br/>
                    Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en
                    direction d’un des sites internet de {legals.company_name}, il lui appartiendra d’adresser un email
                    accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.
                    <br/>
                    La {legals.company_name} se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en
                    justifier sa décision.
                </p>
                <h2 className="section-title-legals">Services fournis :</h2>
                <p className="section-text-legals">
                    L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site {legals.company_website}.
                    <br/>
                    {legals.company_name} s’efforce de fournir sur le site {legals.website_url} des informations aussi précises
                    que possible. Les renseignements figurant sur le site {legals.website_url} ne sont pas exhaustifs et
                    les photos non contractuelles.
                    <br/>
                    Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par
                    ailleurs, tous les informations indiquées sur le site {legals.website_url} sont données à titre
                    indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
                </p>
                <h2 className="section-title-legals">Limitation contractuelles sur les données :</h2>
                <p className="section-text-legals">
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                    différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions.
                    <br/>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien
                    vouloir le signaler par courriel, à l’adresse
                    <a href="mailto:contact@digital-express.fr"/>
                    , en décrivant le problème de la manière la plus précise possible (page posant problème, type
                    d’ordinateur et de navigateur utilisé, …).
                    <br/>
                    Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule
                    responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par
                    l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.
                    <br/>
                    De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne
                    contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                    <br/>
                    Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres
                    ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de {legals.company_name}.
                </p>
                <h2 className="section-title-legals">Propriété intellectuelle :</h2>
                <p className="section-text-legals">
                    Tout le contenu du présent site {legals.website_url}, incluant, de façon non limitative, les
                    graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en
                    forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus
                    appartenant à d’autres sociétés partenaires ou auteurs.
                    <br/>
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
                    partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de {legals.company_name}. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue
                    une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
                    intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la
                    responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés
                    pourraient intenter une action en justice à votre encontre.
                    <br/>
                    Déclaration à la CNIL :
                    <br/>
                    Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative
                    à la protection des personnes physiques à l’égard des traitements de données à caractère personnel)
                    relative à l’informatique, aux fichiers et aux libertés, ce site a fait l’objet d’une déclaration
                    1656629 auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr).
                </p>
                <h2 className="section-title-legals">Litiges :</h2>
                <p className="section-text-legals">
                    Les présentes conditions du site {legals.website_url} sont régies par les lois françaises et toute
                    contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci
                    seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue
                    de référence, pour le règlement de contentieux éventuels, est le français.
                </p>
                <h2 className="section-title-legals">Données personnelles :</h2>
                <p className="section-text-legals">
                    De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous
                    visitez notre site Internet {legals.website_url}.
                    <br/>
                    Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par
                    notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom,
                    votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de téléphone.
                    Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique
                    « contact ».
                    <br/>
                    Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne
                    pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements sur
                    notre société, ou de recevoir les lettres d’information.
                    <br/>
                    Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors
                    d’une simple navigation sur notre site internet, notamment : des informations concernant
                    l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez,
                    votre adresse IP, le type de votre navigateur, vos temps d’accès.
                    <br/>
                    De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière
                    à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par
                    les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
                    relative à la protection juridique des bases de données.
                </p>
            </div>
        </div>
    );
};

export default MentionLegalCgu;