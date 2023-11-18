import PriorityTag from "../../components/priorityTags";
import ProgressBar from "./progressBars";

const headList = [
  {nome: "Nome do projeto"},
  {nome: "Horas"},
  {nome: "Prioridade"},
  {nome: "Cliente"},
  {nome: "Progresso"}
]
const projectDetails = [
      {Projects :
        {
        id: 1,
        nome:"Nome projeto",
        hora: "12hs",
        Prioridade: <PriorityTag namePriority="Prioridade Alta"/>,
        Cliente: "Nome cliente",
        Progresso: "50"
      },
    },
    {Projects :
      {
      id: 2,
      nome:"Nome projeto",
      hora: "12hs",
      Prioridade: <PriorityTag namePriority="Prioridade média"/>,
      Cliente: "Nome cliente",
      Progresso: "75"
    },
    }
]

export function ProjectListResum() {
  return (
    <>
       <table className="p-4 bg-slate-50 rounded-md  flex flex-col gap-2 shadow-md">
        {/* aqui devo colocar a lista de resumo de projetos */}
        <thead className="border bg-white p-4 rounded-sm" >
          <tr className="flex justify-between">
            {headList.map((item) => (
              <th className="font-bold p-2 flex items-center justify-start w-full " key={item.nome}>
                {item.nome}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border bg-white  p-4 rounded-sm">
           {projectDetails.map((item) => (
            <tr key={item.Projects.id} className="flex justify-between gap-3 mb-2 p-2 shadow-sm">
              <td className="w-full flex items-center justify-start" >{item.Projects.nome || ""}</td>
              <td className="w-full flex items-center justify-start">{item.Projects.hora || ""}</td>
              <td className="w-full flex items-center justify-start">{item.Projects.Prioridade || ""}</td>
              <td className="w-full flex items-center justify-start">{item.Projects.Cliente || ""}</td>
              <td className="w-full flex items-center justify-start">
                <ProgressBar progress={item.Projects.Progresso}/>
              </td>
            </tr>
           ))}
        </tbody>
      </table>
    </>
  )
}