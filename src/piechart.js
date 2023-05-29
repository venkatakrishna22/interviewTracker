import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

const ChartComponent = () => {
  var [fetch, setFetch] = useState([]);
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
   const filtered=fetch.filter((item)=>{
       return(
         item.date>=startDate&&
         item.date<=endDate
       )
     })
     console.log(filtered)
  const ananth = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Anandam, Ananth") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const Kruti = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Shah, Kruti") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const SrikakolapuSirishna = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Srikakolapu, Sirisha") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const SiripuramSaikumar = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Siripuram, Saikumar") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const GattaSireesha = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Gatta, Sireesha") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const TanikellaPrasanna = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Tanikella, Prasanna") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const BisoyiRajkiran = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Bisoyi, Rajkiran") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KarnalaKeerthi = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Karnala, Keerthi") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const GabuSivaGanesh = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Gabu, Siva Ganesh") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const ChowdhuryIndranil = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Chowdhury, Indranil") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const YenuguVani = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Yenugu, Vani") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const RajamanickamTamilselvan = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Rajamanickam, Tamilselvan") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const GunupaneniRamesh = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Gunupaneni, Ramesh") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const BoseRonita = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Bose, Ronita") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const GhoriTahauddin = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Ghori, Tahauddin") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const JoshiRohan = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Joshi, Rohan") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KUMARSANJEEV = fetch.filter(
    (item) =>
      item.interviewedBy.includes("KUMAR, SANJEEV") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KoilothRamathSarath = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Koiloth Ramath, Sarath") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KolliVenkataRajasekharReddy = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Kolli Venkata, Rajasekhar Reddy") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const MandalSoumi = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Mandal, Soumi") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const MaddalaRam = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Maddala, Ram") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KadapaLeelavathi = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Kadapa, Leelavathi") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const KumarMathurRahul = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Kumar Mathur, Rahul") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const JhaAmber = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Jha, Amber") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const VadadaMahesh = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Vadada, Mahesh") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const PeddirajuSaiKrishnamRaju = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Peddiraju, Sai Krishnam Raju") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const GanesanaChaitanya = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Ganesana, Chaitanya") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const AnnaVijayakumarMonisha = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Anna Vijayakumar, Monisha") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const SharmaRahul = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Sharma, Rahul") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const BattulaMallikharjunaRao = fetch.filter(
    (item) =>
      item.interviewedBy.includes("Battula, Mallikharjuna Rao") &&
      (item.status.toLowerCase().includes("selected") ||
        item.status.toLowerCase().includes("rejected")||item.status.includes("Interviewed")) &&
        ((startDate!==""&&endDate!=="")?item.date>=startDate&&item.date<=endDate:true)
  );
  const data01 = [
    { name: "Anandam, Ananth", value: ananth.length },
    { name: "Shah, Kruti", value: Kruti.length },
    { name: "Srikakolapu, Sirisha", value: SrikakolapuSirishna.length },
    { name: "Siripuram, Saikumar", value: SiripuramSaikumar.length },
    { name: "Gatta, Sireesha", value: GattaSireesha.length },
    { name: "Tanikella, Prasanna", value: TanikellaPrasanna.length },
    { name: "Bisoyi, Rajkiran", value: BisoyiRajkiran.length },
    { name: "Karnala, Keerthi", value: KarnalaKeerthi.length },
    { name: "Gabu, Siva Ganesh", value: GabuSivaGanesh.length },
    { name: "Chowdhury, Indranil", value: ChowdhuryIndranil.length },
    { name: "Yenugu, Vani", value: YenuguVani.length },
    { name: "Rajamanickam, Tamilselvan", value: RajamanickamTamilselvan.length },
    { name: "Gunupaneni, Ramesh", value: GunupaneniRamesh.length },
    { name: "Bose, Ronita", value: BoseRonita.length },
    { name: "Ghori, Tahauddin", value: GhoriTahauddin.length },
    { name: "Joshi, Rohan", value: JoshiRohan.length },
    { name: "KUMAR, SANJEEV", value: KUMARSANJEEV.length },
    { name: "Koiloth Ramath, Sarath", value: KoilothRamathSarath.length },
    { name: "Kolli Venkata, Rajasekhar Reddy", value: KolliVenkataRajasekharReddy.length },
    { name: "Mandal, Soumi", value: MandalSoumi.length },
    { name: "Maddala, Ram", value: MaddalaRam.length },
    { name: "Kadapa, Leelavathi", value: KadapaLeelavathi.length },
    { name: "Kumar Mathur, Rahul", value: KumarMathurRahul.length },
    { name: "Jha, Amber", value: JhaAmber.length },
    { name: "Vadada, Mahesh", value: VadadaMahesh.length },
    { name: "Peddiraju, Sai Krishnam Raju", value: PeddirajuSaiKrishnamRaju.length },
    { name: "Ganesana, Chaitanya", value: GanesanaChaitanya.length },
    { name: "Anna Vijayakumar, Monisha", value: AnnaVijayakumarMonisha.length },
    { name: "Sharma, Rahul", value: SharmaRahul.length },
    { name: "Battula, Mallikharjuna Rao", value: BattulaMallikharjunaRao.length }
  
  ];
  useEffect(() => {
    axios({
      url: "http://localhost:4000/details",
      method: "get",
    }).then((response) => {
      setFetch(response.data);
    });
  }, [fetch]);
  return (
    <>
      <h1 className="text-center mt-3">Piechart</h1>
      <label for="exampleFormControlInput1" id="startdate">
        Start date:
      </label>
      <input
        type="date"
        class="form-control-md"
        id="exampleFormControlInput1"
        required
        value={startDate}
        placeholder="Start date"
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label for="exampleFormControlInput1" id="startdate">
        End date:
      </label>
      <input
        type="date"
        class="form-control-md"
        id="exampleFormControlInput1"
        required
        value={endDate}
        placeholder="Start date"
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div id="piechart">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <table id="resulttable" className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Interviews taken</th>
                    </tr>
                  </thead>
                  <tbody>
                  { data01.map((items)=>{
                      return(
                        <tr>
                        <td>{items.name}</td>
                        <td className="value">{items.value}</td>
                       </tr>
                        
                      )
                    })
                      }
    
                  </tbody>

                </table>
      </div>
    </>
  );
};
export default ChartComponent;
