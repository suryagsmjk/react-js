import React from 'react'

import './card.css'
import PropsTypes from 'prop-types';

function User(props) {
    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img className="img" src={props.profile} />
            <div className="info">
                <h4>EMP ID: {props.id}</h4>
                <h2>Name : {props.name}</h2>
                <h5>Email Id :{props.email}</h5>
                <h5>Country : {props.country}</h5>
                <h4>Mobile No : {props.mobile}</h4>
                <p>Job Role : {props.discription}</p>
            </div>
            <div className="btn">
                <button className="msg">Message</button>
                <button className="msg outline">Following</button>
            </div>
            <div className="skills">
                <h6 >Skills</h6>
                <ul>
                    {props.skills.map((e, i) => (
                        <li key={i}>{e}</li>
                    ))

                    }
                </ul>
            </div>

        </div>
    )
}

export const MultiCard = () => {
    return (
        <>
            {/* <User name="Surya" country="Dharmapuri" discription="Front-end Developer"
        skills={["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"]}
        online={true} profile="../image/caption america.jpg" /> */}

            {userData.map((e, i) => (
                <User key={i}
                    name={e.name}
                    id={e.id}
                    email={e.email}
                    country={e.country}
                    mobile={e.mobile}
                    discription={e.discription}
                    skills={e.skills}
                    online={e.online}
                    profile={e.profile}

                />
            ))
            }
        </>
    )
}


User.prototype = {
    name: PropsTypes.string.isRequired,
    id: PropsTypes.string.isRequired,
    email: PropsTypes.string.isRequired,
    mobile: PropsTypes.string.isRequired,
    country: PropsTypes.string.isRequired,
    discription: PropsTypes.string.isRequired,
    skills: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    profile: PropsTypes.string.isRequired,
    online: PropsTypes.bool.isRequired,

}

let userData = [
    { id: "36800-908", country:"China",name: "Ave", email: "ameni0@twitter.com", profile: "https://robohash.org/erroraqui.jpg?size=50x50&set=set1", skills: ["Indoor Air Quality","dummy","dummy","dummy","dummy","dummy"], discription: "Legal Assistant", mobile: "526259917-6", online: false },
    { id: "61387-248", country:"China",name: "Kylie", email: "kgladtbach1@howstuffworks.com", profile: "https://robohash.org/accusantiumautaut.jpg?size=50x50&set=set1", skills: ["NMLS","dummy","dummy","dummy","dummy","dummy"], discription: "General Manager", mobile: "835225695-5", online: true },
    { id: "0115-5211", country:"Indonesia",name: "Pam", email: "pmulvey2@goo.gl", profile: "https://robohash.org/optioconsequaturomnis.jpg?size=50x50&set=set1", skills: ["DDIC","dummy","dummy","dummy","dummy","dummy"], discription: "Administrative Assistant IV", mobile: "747779454-4", online: true },
    { id: "68180-211", country:"Mongolia",name: "Elsworth", email: "ebarrett3@clickbank.net", profile: "https://robohash.org/namdelectusnulla.jpg?size=50x50&set=set1", skills: ["Groundwater","dummy","dummy","dummy","dummy","dummy"], discription: "Developer I", mobile: "503692438-X", online: false },
    { id: "57520-1042",country:"Brazil", name: "Aron", email: "amillwall4@gnu.org", profile: "https://robohash.org/oditquisquamquo.jpg?size=50x50&set=set1", skills: ["EZNews","dummy","dummy","dummy","dummy","dummy"], discription: "Dental Hygienist", mobile: "871752738-4", online: false },
    { id: "68354-111", country:"Malaysia",name: "Ely", email: "egrishagin5@quantcast.com", profile: "https://robohash.org/quameaipsa.jpg?size=50x50&set=set1", skills: ["EViews","dummy","dummy","dummy","dummy","dummy"], discription: "Automation Specialist IV", mobile: "410035238-7", online: true },
    { id: "52125-508", country:"China",name: "Glynn", email: "gkobpac6@engadget.com", profile: "https://robohash.org/quidemutprovident.jpg?size=50x50&set=set1", skills: ["Supply Chain Optimization","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Cost Accountant", mobile: "265437790-3", online: false },
    { id: "0187-2049", country:"Peru",name: "Marv", email: "mmacleod7@wp.com", profile: "https://robohash.org/illumipsamcommodi.jpg?size=50x50&set=set1", skills: ["Shopper Marketing","dummy","dummy","dummy","dummy","dummy"], discription: "Project Manager", mobile: "596835300-7", online: false },
    { id: "43063-108", country:"North Korea",name: "Milicent", email: "mbradnum8@oaic.gov.au", profile: "https://robohash.org/aliasestratione.jpg?size=50x50&set=set1", skills: ["Naval Architecture","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Financial Analyst", mobile: "083128985-6", online: true },
    { id: "50804-720", country:"Morocco",name: "Olympia", email: "omccreagh9@weather.com", profile: "https://robohash.org/abeumest.jpg?size=50x50&set=set1", skills: ["HR Information Management","dummy","dummy","dummy","dummy","dummy"], discription: "Chief Design Engineer", mobile: "756403235-9", online: true },
    { id: "43598-203", country:"Honduras",name: "Tara", email: "trummingsa@ask.com", profile: "https://robohash.org/veniamenimdistinctio.jpg?size=50x50&set=set1", skills: ["Oracle HR","dummy","dummy","dummy","dummy","dummy"], discription: "Professor", mobile: "195394038-2", online: false },
    { id: "49999-122", country:"Iran",name: "Free", email: "fpoyzerb@e-recht24.de", profile: "https://robohash.org/odiovoluptatemnon.jpg?size=50x50&set=set1", skills: ["Korean Culture","dummy","dummy","dummy","dummy","dummy"], discription: "Assistant Professor", mobile: "784819952-5", online: false },
    { id: "50436-6525",country:"Latvia", name: "Amata", email: "asloatc@nsw.gov.au", profile: "https://robohash.org/etdolorumdoloremque.jpg?size=50x50&set=set1", skills: ["Public Policy","dummy","dummy","dummy","dummy","dummy"], discription: "Nuclear Power Engineer", mobile: "820154638-5", online: true },
    { id: "67544-117", country:"Thailand",name: "Andria", email: "abruckerd@bloglines.com", profile: "https://robohash.org/consequaturvoluptasea.jpg?size=50x50&set=set1", skills: ["Store Management","dummy","dummy","dummy","dummy","dummy"], discription: "VP Sales", mobile: "572491740-8", online: false },
    { id: "48951-2104",country:"Japan", name: "Calla", email: "cgoulbornee@networksolutions.com", profile: "https://robohash.org/estaccusantiumaut.jpg?size=50x50&set=set1", skills: ["3D Visualization","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Advisor", mobile: "417139117-2", online: true },
    { id: "33261-027", country:"Sweden",name: "Karol", email: "kwilkinsonf@answers.com", profile: "https://robohash.org/maioresrepellendusasperiores.jpg?size=50x50&set=set1", skills: ["XUL","dummy","dummy","dummy","dummy","dummy"], discription: "Clinical Specialist", mobile: "047352356-6", online: true },
    { id: "57520-0502",country:"China", name: "Bevan", email: "bjaggardg@cam.ac.uk", profile: "https://robohash.org/cumquereiciendislaborum.jpg?size=50x50&set=set1", skills: ["Cycle Time Reduction","dummy","dummy","dummy","dummy","dummy"], discription: "Account Executive", mobile: "875616400-9", online: true },
    { id: "0944-2961", country:"China",name: "Patrice", email: "pbyfieldh@myspace.com", profile: "https://robohash.org/blanditiishicconsequatur.jpg?size=50x50&set=set1", skills: ["Personal Development","dummy","dummy","dummy","dummy","dummy"], discription: "VP Sales", mobile: "743294605-1", online: true },
    { id: "49348-315", country:"Brazil",name: "Minni", email: "mdarweni@chicagotribune.com", profile: "https://robohash.org/inventoreillumlabore.jpg?size=50x50&set=set1", skills: ["CentOS","dummy","dummy","dummy","dummy","dummy"], discription: "Administrative Officer", mobile: "468057081-4", online: false },
    { id: "49348-061", country:"Indonesia",name: "Kamila", email: "kmariansj@admin.ch", profile: "https://robohash.org/laborumdoloremqueofficiis.jpg?size=50x50&set=set1", skills: ["Boat","dummy","dummy","dummy","dummy","dummy"], discription: "Help Desk Technician", mobile: "219336400-1", online: true },
    { id: "11673-027", country:"Indonesia",name: "Urbanus", email: "umargriek@buzzfeed.com", profile: "https://robohash.org/involuptatemvoluptatem.jpg?size=50x50&set=set1", skills: ["PFT","dummy","dummy","dummy","dummy","dummy"], discription: "Pharmacist", mobile: "678056616-0", online: true },
    { id: "0409-4277", country:"Brazil",name: "Reginald", email: "rdahlenl@chicagotribune.com", profile: "https://robohash.org/quinullaexcepturi.jpg?size=50x50&set=set1", skills: ["Security Awareness","dummy","dummy","dummy","dummy","dummy"], discription: "Media Manager II", mobile: "393233467-1", online: true },
    { id: "50353-102", country:"Colombia",name: "Rube", email: "rcreamenm@csmonitor.com", profile: "https://robohash.org/quiaaad.jpg?size=50x50&set=set1", skills: ["Team Leadership","dummy","dummy","dummy","dummy","dummy"], discription: "Desktop Support Technician", mobile: "870478961-X", online: false },
    { id: "43742-0020",country:"Russia", name: "Jasun", email: "jponsfordn@arizona.edu", profile: "https://robohash.org/magnamsuntblanditiis.jpg?size=50x50&set=set1", skills: ["Lifestyle","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Analyst", mobile: "965768707-1", online: true },
    { id: "42421-229", country:"Sweden",name: "Marylin", email: "mhyneso@forbes.com", profile: "https://robohash.org/esteaet.jpg?size=50x50&set=set1", skills: ["Visual Identity","dummy","dummy","dummy","dummy","dummy"], discription: "Project Manager", mobile: "166517041-7", online: true },
    { id: "11410-401", country:"Peru",name: "Lezlie", email: "lfreebornp@umn.edu", profile: "https://robohash.org/fugitautodit.jpg?size=50x50&set=set1", skills: ["Cost Efficiency","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Quality Engineer", mobile: "302710518-3", online: false },
    { id: "64778-1373",country:"Russia", name: "Lotta", email: "lreingerq@alibaba.com", profile: "https://robohash.org/perferendisperspiciatisvero.jpg?size=50x50&set=set1", skills: ["JPEG","dummy","dummy","dummy","dummy","dummy"], discription: "Environmental Tech", mobile: "086247335-7", online: true },
    { id: "36987-2710",country:"Iran", name: "Janek", email: "jdowberr@webeden.co.uk", profile: "https://robohash.org/ipsavoluptatemut.jpg?size=50x50&set=set1", skills: ["OTL","dummy","dummy","dummy","dummy","dummy"], discription: "Internal Auditor", mobile: "710125080-7", online: true },
    { id: "11695-1425",country:"China", name: "Archambault", email: "alidells@shareasale.com", profile: "https://robohash.org/idreprehenderitdoloribus.jpg?size=50x50&set=set1", skills: ["Khalix","dummy","dummy","dummy","dummy","dummy"], discription: "Associate Professor", mobile: "715438883-8", online: false },
    { id: "55714-4555",country:"Philippines", name: "Webster", email: "wtonkint@people.com.cn", profile: "https://robohash.org/suntnequenon.jpg?size=50x50&set=set1", skills: ["TDR","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Cost Accountant", mobile: "165779081-9", online: true },
    { id: "52125-967", country:"Indonesia",name: "Morty", email: "mdulanyu@blogspot.com", profile: "https://robohash.org/isteipsamqui.jpg?size=50x50&set=set1", skills: ["Adobe Acrobat","dummy","dummy","dummy","dummy","dummy"], discription: "Help Desk Operator", mobile: "964304790-3", online: false },
    { id: "76354-204", country:"Poland",name: "Marigold", email: "mdomineyv@earthlink.net", profile: "https://robohash.org/nihilautsit.jpg?size=50x50&set=set1", skills: ["Knowledge Base","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Analyst", mobile: "016186071-0", online: false },
    { id: "0378-6164", country:"Ethiopia",name: "Eliza", email: "egookesw@intel.com", profile: "https://robohash.org/architectopossimusmolestias.jpg?size=50x50&set=set1", skills: ["SAP MM Module","dummy","dummy","dummy","dummy","dummy"], discription: "Automation Specialist II", mobile: "567503475-7", online: false },
    { id: "68788-9092",country:"Indonesia", name: "Alvina", email: "aballex@cbslocal.com", profile: "https://robohash.org/impeditbeataefuga.jpg?size=50x50&set=set1", skills: ["Fire Alarm","dummy","dummy","dummy","dummy","dummy"], discription: "Speech Pathologist", mobile: "501842488-5", online: false },
    { id: "43547-331", country:"Nigeria",name: "Friedrick", email: "fboutelly@weebly.com", profile: "https://robohash.org/fugitconsectetursed.jpg?size=50x50&set=set1", skills: ["Eagle PCB","dummy","dummy","dummy","dummy","dummy"], discription: "Programmer Analyst III", mobile: "122905715-3", online: true },
    { id: "61041-211", country:"Peru",name: "Leora", email: "lpavolilloz@kickstarter.com", profile: "https://robohash.org/rerumsequidolores.jpg?size=50x50&set=set1", skills: ["Screenwriting","dummy","dummy","dummy","dummy","dummy"], discription: "Nurse", mobile: "297189861-X", online: true },
    { id: "50730-4401",country:"Colombia", name: "Bette-ann", email: "bmickan10@blogger.com", profile: "https://robohash.org/accusamuscorporisut.jpg?size=50x50&set=set1", skills: ["Business Process Improvement","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Analyst", mobile: "582726097-5", online: true },
    { id: "0406-8380", country:"Indonesia",name: "Kacey", email: "kkeyho11@theglobeandmail.com", profile: "https://robohash.org/quisomnistempore.jpg?size=50x50&set=set1", skills: ["Payroll Taxes","dummy","dummy","dummy","dummy","dummy"], discription: "Dental Hygienist", mobile: "534690410-7", online: false },
    { id: "0404-4445", country:"France",name: "Lora", email: "lperone12@cpanel.net", profile: "https://robohash.org/beataeexplicaboet.jpg?size=50x50&set=set1", skills: ["Trail Running","dummy","dummy","dummy","dummy","dummy"], discription: "Quality Control Specialist", mobile: "150500554-X", online: false },
    { id: "0363-0707", country:"Ukraine",name: "Nilson", email: "nenga13@craigslist.org", profile: "https://robohash.org/enimrerumdignissimos.jpg?size=50x50&set=set1", skills: ["MVNO","dummy","dummy","dummy","dummy","dummy"], discription: "Structural Engineer", mobile: "607670895-6", online: false },
    { id: "50523-488", country:"Mali",name: "Royce", email: "rbunkle14@shutterfly.com", profile: "https://robohash.org/temporaabratione.jpg?size=50x50&set=set1", skills: ["VPP","dummy","dummy","dummy","dummy","dummy"], discription: "Executive Secretary", mobile: "039718694-0", online: true },
    { id: "51655-092", country:"Ecuador",name: "Bruno", email: "bjedras15@netlog.com", profile: "https://robohash.org/possimusmagnamiure.jpg?size=50x50&set=set1", skills: ["LLP","dummy","dummy","dummy","dummy","dummy"], discription: "Assistant Professor", mobile: "293014779-2", online: true },
    { id: "58231-002", country:"Thailand",name: "Tomkin", email: "tfantham16@themeforest.net", profile: "https://robohash.org/oditvitaevero.jpg?size=50x50&set=set1", skills: ["SSBI","dummy","dummy","dummy","dummy","dummy"], discription: "Human Resources Manager", mobile: "408642336-7", online: false },
    { id: "16590-833", country:"Croatia",name: "Wylie", email: "wmckinnell17@pinterest.com", profile: "https://robohash.org/quivelitaspernatur.jpg?size=50x50&set=set1", skills: ["CFM","dummy","dummy","dummy","dummy","dummy"], discription: "Health Coach IV", mobile: "641112729-8", online: false },
    { id: "62175-136", country:"Sweden",name: "Pepe", email: "pkarby18@census.gov", profile: "https://robohash.org/aliasducimuspossimus.jpg?size=50x50&set=set1", skills: ["Music Theory","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Cost Accountant", mobile: "844286893-3", online: true },
    { id: "17714-019", country:"Cyprus",name: "Tana", email: "tjoberne19@tinypic.com", profile: "https://robohash.org/similiquesapienteodio.jpg?size=50x50&set=set1", skills: ["CTIOS","dummy","dummy","dummy","dummy","dummy"], discription: "Administrative Officer", mobile: "247212030-3", online: false },
    { id: "59667-0042",country:"Portugal", name: "Bevvy", email: "bmohun1a@dailymotion.com", profile: "https://robohash.org/utetqui.jpg?size=50x50&set=set1", skills: ["Term Life Insurance","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Quality Engineer", mobile: "771012522-0", online: true },
    { id: "41520-118", country:"Russia",name: "Hermina", email: "hbraywood1b@nhs.uk", profile: "https://robohash.org/quidolorumcommodi.jpg?size=50x50&set=set1", skills: ["CGL","dummy","dummy","dummy","dummy","dummy"], discription: "Analyst Programmer", mobile: "630874131-0", online: false },
    { id: "57520-0311",country:"China", name: "Sunshine", email: "swesterman1c@youtube.com", profile: "https://robohash.org/providentrerumquod.jpg?size=50x50&set=set1", skills: ["IFTA","dummy","dummy","dummy","dummy","dummy"], discription: "Assistant Professor", mobile: "304706851-8", online: true },
    { id: "68645-405", country:"Philippines",name: "Teena", email: "tstutte1d@pen.io", profile: "https://robohash.org/nullaidomnis.jpg?size=50x50&set=set1", skills: ["FTK","dummy","dummy","dummy","dummy","dummy"], discription: "VP Sales", mobile: "622132026-7", online: true },
    { id: "43406-0012",country:"Brazil", name: "Holly", email: "hbeeston1e@multiply.com", profile: "https://robohash.org/perspiciatisconsequaturcupiditate.jpg?size=50x50&set=set1", skills: ["Outerwear","dummy","dummy","dummy","dummy","dummy"], discription: "Electrical Engineer", mobile: "429152407-2", online: false },
    { id: "55910-400", country:"Brazil",name: "Jill", email: "jbissatt1f@spotify.com", profile: "https://robohash.org/rationequiest.jpg?size=50x50&set=set1", skills: ["Medical Ultrasound","dummy","dummy","dummy","dummy","dummy"], discription: "Compensation Analyst", mobile: "867947385-5", online: false },
    { id: "65643-335", country:"China",name: "Travus", email: "tpawling1g@discovery.com", profile: "https://robohash.org/utrerummodi.jpg?size=50x50&set=set1", skills: ["GPFS","dummy","dummy","dummy","dummy","dummy"], discription: "General Manager", mobile: "077857159-9", online: true },
    { id: "45124-001", country:"China",name: "Jacintha", email: "jclifft1h@addthis.com", profile: "https://robohash.org/fugaplaceatvelit.jpg?size=50x50&set=set1", skills: ["VGA","dummy","dummy","dummy","dummy","dummy"], discription: "Administrative Assistant II", mobile: "397908773-5", online: true },
    { id: "16714-373", country:"Mexico",name: "Jocelyn", email: "jodyvoie1i@bbc.co.uk", profile: "https://robohash.org/isterecusandaeconsectetur.jpg?size=50x50&set=set1", skills: ["Abaqus","dummy","dummy","dummy","dummy","dummy"], discription: "Staff Scientist", mobile: "595384120-5", online: false },
    { id: "49580-3412",country:"Philippines", name: "Dalia", email: "dhartell1j@flickr.com", profile: "https://robohash.org/officiisadexcepturi.jpg?size=50x50&set=set1", skills: ["RDF","dummy","dummy","dummy","dummy","dummy"], discription: "Clinical Specialist", mobile: "347128034-0", online: true },
    { id: "42961-005", country:"New Zealand",name: "Leland", email: "lfelton1k@g.co", profile: "https://robohash.org/quasimolestiaevoluptatem.jpg?size=50x50&set=set1", skills: ["Customer Acquisition","dummy","dummy","dummy","dummy","dummy"], discription: "Quality Engineer", mobile: "425927053-2", online: true },
    { id: "66336-718", country:"Portugal",name: "Reiko", email: "rtatlowe1l@globo.com", profile: "https://robohash.org/recusandaesolutarerum.jpg?size=50x50&set=set1", skills: ["RPC","dummy","dummy","dummy","dummy","dummy"], discription: "Recruiter", mobile: "824509462-5", online: true },
    { id: "17478-066", country:"Canada",name: "Raine", email: "rnourse1m@uol.com.br", profile: "https://robohash.org/estsuntharum.jpg?size=50x50&set=set1", skills: ["FCNSA","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Advisor", mobile: "979943979-5", online: true },
    { id: "59779-157", country:"China",name: "Joelie", email: "jsanton1n@wikipedia.org", profile: "https://robohash.org/deseruntinhic.jpg?size=50x50&set=set1", skills: ["BPMN","dummy","dummy","dummy","dummy","dummy"], discription: "Recruiting Manager", mobile: "857019424-2", online: false },
    { id: "61722-060", country:"Comoros",name: "Gilbertine", email: "gbastin1o@vistaprint.com", profile: "https://robohash.org/ducimusadin.jpg?size=50x50&set=set1", skills: ["Rigging","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Developer", mobile: "831113844-3", online: false },
    { id: "0179-0026", country:"Portugal",name: "Arnoldo", email: "ahinkensen1p@livejournal.com", profile: "https://robohash.org/estducimusmodi.jpg?size=50x50&set=set1", skills: ["JDE CNC","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Advisor", mobile: "541246170-0", online: true },
    { id: "54641-005", country:"Poland",name: "Burtie", email: "bboorn1q@tmall.com", profile: "https://robohash.org/minuseumid.jpg?size=50x50&set=set1", skills: ["NSI","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Advisor", mobile: "299442602-1", online: true },
    { id: "51386-703", country:"Georgia",name: "Dani", email: "dgypps1r@ucsd.edu", profile: "https://robohash.org/minusremillo.jpg?size=50x50&set=set1", skills: ["TL1","dummy","dummy","dummy","dummy","dummy"], discription: "Assistant Media Planner", mobile: "772113918-X", online: true },
    { id: "21695-853", country:"China",name: "Agata", email: "aellison1s@intel.com", profile: "https://robohash.org/consequaturofficiisasperiores.jpg?size=50x50&set=set1", skills: ["Ideas Development","dummy","dummy","dummy","dummy","dummy"], discription: "Quality Control Specialist", mobile: "110513951-4", online: false },
    { id: "54868-6115",country:"Macedonia", name: "Dominik", email: "dcorp1t@cdc.gov", profile: "https://robohash.org/debitisaniminon.jpg?size=50x50&set=set1", skills: ["JSON","dummy","dummy","dummy","dummy","dummy"], discription: "Graphic Designer", mobile: "544995181-7", online: true },
    { id: "51346-076", country:"Canada",name: "Germaine", email: "gclibbery1u@t.co", profile: "https://robohash.org/rerumvitaeest.jpg?size=50x50&set=set1", skills: ["Globalization","dummy","dummy","dummy","dummy","dummy"], discription: "Statistician I", mobile: "792169008-4", online: false },
    { id: "13537-504", country:"Vietnam",name: "Lorraine", email: "lfarr1v@xing.com", profile: "https://robohash.org/eligendiofficiaodit.jpg?size=50x50&set=set1", skills: ["SRM 5.0","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Financial Analyst", mobile: "811550315-0", online: false },
    { id: "10812-234", country:"Philippines",name: "Danette", email: "dlangfat1w@pbs.org", profile: "https://robohash.org/illumfugitexcepturi.jpg?size=50x50&set=set1", skills: ["CQI","dummy","dummy","dummy","dummy","dummy"], discription: "Environmental Specialist", mobile: "795758032-7", online: true },
    { id: "0115-9611", country:"Portugal",name: "Thayne", email: "tscudder1x@miibeian.gov.cn", profile: "https://robohash.org/exitaquesapiente.jpg?size=50x50&set=set1", skills: ["Digital Signal Processors","dummy","dummy","dummy","dummy","dummy"], discription: "Marketing Assistant", mobile: "237240125-4", online: true },
    { id: "41190-686", country:"Russia",name: "Aridatha", email: "alightman1y@arizona.edu", profile: "https://robohash.org/necessitatibusquisquod.jpg?size=50x50&set=set1", skills: ["BDC programming","dummy","dummy","dummy","dummy","dummy"], discription: "Internal Auditor", mobile: "793844768-4", online: true },
    { id: "54569-2586",country:"Brazil", name: "Jacques", email: "johoey1z@google.pl", profile: "https://robohash.org/occaecatiistein.jpg?size=50x50&set=set1", skills: ["RQM","dummy","dummy","dummy","dummy","dummy"], discription: "Financial Analyst", mobile: "850098577-1", online: true },
    { id: "63783-504", country:"Russia",name: "Farlee", email: "fpryn20@biglobe.ne.jp", profile: "https://robohash.org/doloreitaquerecusandae.jpg?size=50x50&set=set1", skills: ["Character Rigging","dummy","dummy","dummy","dummy","dummy"], discription: "Dental Hygienist", mobile: "306296434-0", online: true },
    { id: "55289-112", country:"Finland",name: "Romola", email: "rsandeford21@ezinearticles.com", profile: "https://robohash.org/utinventoreoptio.jpg?size=50x50&set=set1", skills: ["Behavioral Health","dummy","dummy","dummy","dummy","dummy"], discription: "Data Coordinator", mobile: "400274622-4", online: false },
    { id: "41250-759", country:"Costa Rica",name: "Reeba", email: "reverly22@discuz.net", profile: "https://robohash.org/fugiatducimuset.jpg?size=50x50&set=set1", skills: ["Class Actions","dummy","dummy","dummy","dummy","dummy"], discription: "Compensation Analyst", mobile: "274366349-9", online: false },
    { id: "65841-613", country:"Indonesia",name: "Richmond", email: "rsimone23@jalbum.net", profile: "https://robohash.org/essenamvoluptas.jpg?size=50x50&set=set1", skills: ["LPC","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Editor", mobile: "051483234-7", online: false },
    { id: "59779-548", country:"China",name: "Emmalee", email: "eheffy24@pagesperso-orange.fr", profile: "https://robohash.org/cumautvoluptatem.jpg?size=50x50&set=set1", skills: ["Renewable Energy","dummy","dummy","dummy","dummy","dummy"], discription: "Biostatistician II", mobile: "684694824-4", online: false },
    { id: "0781-5637", country:"Moldova",name: "Yorgos", email: "ystormonth25@cyberchimps.com", profile: "https://robohash.org/officiisipsaaliquid.jpg?size=50x50&set=set1", skills: ["Bluetooth","dummy","dummy","dummy","dummy","dummy"], discription: "Web Developer III", mobile: "994339681-4", online: false },
    { id: "37808-310", country:"China",name: "Thaddus", email: "tfaiers26@trellian.com", profile: "https://robohash.org/nonautporro.jpg?size=50x50&set=set1", skills: ["Social Justice","dummy","dummy","dummy","dummy","dummy"], discription: "Office Assistant II", mobile: "351610268-3", online: true },
    { id: "36987-1534",country:"Czech Republic", name: "Nathan", email: "nparffrey27@constantcontact.com", profile: "https://robohash.org/autemnemoodio.jpg?size=50x50&set=set1", skills: ["Public Sector","dummy","dummy","dummy","dummy","dummy"], discription: "Account Coordinator", mobile: "408134193-1", online: true },
    { id: "21695-703", country:"China",name: "Ewart", email: "ebeharrell28@google.co.uk", profile: "https://robohash.org/nequealiaseum.jpg?size=50x50&set=set1", skills: ["PV Design","dummy","dummy","dummy","dummy","dummy"], discription: "Physical Therapy Assistant", mobile: "771208714-8", online: true },
    { id: "0115-2733", country:"France",name: "Sidonnie", email: "swiszniewski29@creativecommons.org", profile: "https://robohash.org/optiosolutaeaque.jpg?size=50x50&set=set1", skills: ["Image Processing","dummy","dummy","dummy","dummy","dummy"], discription: "Research Nurse", mobile: "302465213-2", online: true },
    { id: "36987-1197",country:"Philippines", name: "Jaquenetta", email: "jbentham2a@stumbleupon.com", profile: "https://robohash.org/nesciuntvoluptatemexplicabo.jpg?size=50x50&set=set1", skills: ["EU Competition Law","dummy","dummy","dummy","dummy","dummy"], discription: "Assistant Media Planner", mobile: "898677230-2", online: true },
    { id: "68703-029", country:"Azerbaijan",name: "Carlene", email: "cdoctor2b@miitbeian.gov.cn", profile: "https://robohash.org/eanonid.jpg?size=50x50&set=set1", skills: ["GSA Schedule","dummy","dummy","dummy","dummy","dummy"], discription: "Engineer IV", mobile: "098076093-3", online: true },
    { id: "36987-1583",country:"Indonesia", name: "Orrin", email: "obiasio2c@webmd.com", profile: "https://robohash.org/repellatdistinctiolabore.jpg?size=50x50&set=set1", skills: ["XPages","dummy","dummy","dummy","dummy","dummy"], discription: "Teacher", mobile: "113982286-1", online: false },
    { id: "0378-2268", country:"United States",name: "Clemmie", email: "cmeaddowcroft2d@unicef.org", profile: "https://robohash.org/doloremfugiatexpedita.jpg?size=50x50&set=set1", skills: ["OEM contracts","dummy","dummy","dummy","dummy","dummy"], discription: "Cost Accountant", mobile: "971338658-2", online: false },
    { id: "54868-3993",country:"China", name: "Sydel", email: "swynrahame2e@histats.com", profile: "https://robohash.org/accusantiumetrerum.jpg?size=50x50&set=set1", skills: ["Bonds","dummy","dummy","dummy","dummy","dummy"], discription: "Health Coach II", mobile: "294782288-9", online: true },
    { id: "0093-6901", country:"Democratic Republic of the Congo",name: "Herrick", email: "hgover2f@yolasite.com", profile: "https://robohash.org/aliquamsuscipitmagni.jpg?size=50x50&set=set1", skills: ["DFX","dummy","dummy","dummy","dummy","dummy"], discription: "Programmer I", mobile: "852169598-5", online: false },
    { id: "49884-867", country:"Philippines",name: "Roosevelt", email: "rpitone2g@etsy.com", profile: "https://robohash.org/deseruntdelenitienim.jpg?size=50x50&set=set1", skills: ["E-zines","dummy","dummy","dummy","dummy","dummy"], discription: "Accounting Assistant II", mobile: "065336750-3", online: true },
    { id: "51346-260", country:"China",name: "Barby", email: "bchamperlen2h@wiley.com", profile: "https://robohash.org/quiaodiodolor.jpg?size=50x50&set=set1", skills: ["HDRI","dummy","dummy","dummy","dummy","dummy"], discription: "Senior Quality Engineer", mobile: "091567876-4", online: true },
    { id: "63181-0015",country:"Brazil", name: "Patrice", email: "pdobbyn2i@deliciousdays.com", profile: "https://robohash.org/facerequisquamaut.jpg?size=50x50&set=set1", skills: ["Squid","dummy","dummy","dummy","dummy","dummy"], discription: "Human Resources Manager", mobile: "171238510-0", online: false },
    { id: "55154-5697",country:"Russia", name: "Emlyn", email: "edeavall2j@newsvine.com", profile: "https://robohash.org/nonutnecessitatibus.jpg?size=50x50&set=set1", skills: ["Kidney Transplant","dummy","dummy","dummy","dummy","dummy"], discription: "Computer Systems Analyst IV", mobile: "843123164-5", online: true },
    { id: "64679-414", country:"Indonesia",name: "Dougy", email: "dlatey2k@craigslist.org", profile: "https://robohash.org/quidemsedaliquid.jpg?size=50x50&set=set1", skills: ["CBP","dummy","dummy","dummy","dummy","dummy"], discription: "Junior Executive", mobile: "145313398-4", online: true },
    { id: "43742-0036",country:"Palestinian Territory", name: "Clarinda", email: "cbonevant2l@nydailynews.com", profile: "https://robohash.org/mollitiasintarchitecto.jpg?size=50x50&set=set1", skills: ["Medication Therapy Management","dummy","dummy","dummy","dummy","dummy"], discription: "Software Engineer IV", mobile: "102910506-5", online: true },
    { id: "24653-286", country:"Brazil",name: "Wendall", email: "wpawfoot2m@cargocollective.com", profile: "https://robohash.org/animiidnostrum.jpg?size=50x50&set=set1", skills: ["OCLC Connexion","dummy","dummy","dummy","dummy","dummy"], discription: "Structural Engineer", mobile: "392939706-4", online: true },
    { id: "55154-4379",country:"China", name: "Torey", email: "tmckeeman2n@blogs.com", profile: "https://robohash.org/harumsitfacere.jpg?size=50x50&set=set1", skills: ["BtB","dummy","dummy","dummy","dummy","dummy"], discription: "Recruiter", mobile: "456010443-3", online: false },
    { id: "52125-168", country:"Colombia",name: "Louella", email: "lbredee2o@tripod.com", profile: "https://robohash.org/sapientedoloribusullam.jpg?size=50x50&set=set1", skills: ["JP54","dummy","dummy","dummy","dummy","dummy"], discription: "Human Resources Assistant II", mobile: "929693527-X", online: false },
    { id: "54092-004", country:"Cambodia",name: "Cary", email: "cdreakin2p@mail.ru", profile: "https://robohash.org/atutunde.jpg?size=50x50&set=set1", skills: ["HSM","dummy","dummy","dummy","dummy","dummy"], discription: "Nurse", mobile: "358420113-6", online: false },
    { id: "35000-878", country:"Peru",name: "Jamie", email: "jlapree2q@indiegogo.com", profile: "https://robohash.org/sintmolestiaeipsa.jpg?size=50x50&set=set1", skills: ["Cisco VoIP","dummy","dummy","dummy","dummy","dummy"], discription: "Programmer Analyst III", mobile: "244850212-9", online: true },
    { id: "52584-609", country:"Honduras",name: "Igor", email: "iabella2r@blogs.com", profile: "https://robohash.org/doloremquemolestiaesimilique.jpg?size=50x50&set=set1", skills: ["Visual Communication","dummy","dummy","dummy","dummy","dummy"], discription: "Computer Systems Analyst III", mobile: "776740286-X", online: false }]
// let userData = [
//   {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }, {
//     name: "surya",
//     country: "Dharmapuri",
//     discription: "Front-end Developer",
//     skills: ["HTML", "CSS", "JAVA SCRIPT", "BOOTSTRAP", "REACT JS", "NODE JSON", "EXPRESS JS", "MONGO DB"],
//     online: true,
//     profile: '../image/blackpanther.jpg'
//   }
// ]
