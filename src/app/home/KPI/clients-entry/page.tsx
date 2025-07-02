import { Trash2, Mail, Calendar, MoreHorizontal } from "lucide-react";

const users = [
  {
    uid: 1,
    id: "#876 364",
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Philippe Roger",
    email: "01XXXXXXXX",
    date: "12 Dec, 2024",
    status: "À contacter",
  },
  {
    uid: 2,
    id: "#876 123",
    avatar: "https://i.pravatar.cc/40?img=2",
    name: "Claude Françoise",
    email: "01XXXXXXXX",
    date: "12 Dec, 2024",
    status: "Inscrit",
  },
  {
    uid: 3,
    id: "#876 213",
    avatar: "https://i.pravatar.cc/40?img=3",
    name: "Nagia Badouri",
    email: "01XXXXXXXX",
    date: "12 Dec, 2024",
    status: "Inscrit",
  },
  {
    uid: 4,
    id: "#876 987",
    avatar: "https://i.pravatar.cc/40?img=4",
    name: "Anne-marie Nguyen",
    email: "01XXXXXXXX",
    date: "12 Dec, 2024",
    status: "Annuler",
  },
  {
    uid: 5,
    id: "#872 345",
    avatar: "https://i.pravatar.cc/40?img=5",
    name: "Luc elkhyaty",
    email: "01XXXXXXXX",
    date: "12 Dec, 2024",
    status: "En attente",
  },
  {
    uid: 6,
    id: "#872 346",
    avatar: "https://i.pravatar.cc/40?img=6",
    name: "Samia",
    email: "01XXXXXXXX",
    date: "11 Jul, 2025",
    status: "Prêt",
  },
];

function getStatusBadge(status: string) {
  const base = "px-3 py-1 rounded-full text-sm font-medium";
  switch (status) {
    case "À contacter":
      return `${base} bg-gray-200 text-gray-700`;
    case "Inscrit":
      return `${base} bg-green-100 text-green-700`;
    case "Annuler":
      return `${base} bg-red-100 text-red-700`;
    case "En attente":
      return `${base} bg-orange-100 text-orange-700`;
    case "Prêt":
      return `${base} bg-blue-100 text-blue-700`;
    default:
      return `${base} bg-gray-100 text-gray-500`;
  }
}

export default function Page() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-t from-[#f9fafa] via-[#7ad0cb] to-[#54d4ce] text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Entrée clients</h1>

      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table
          className="min-w-full table-fixed border-separate border-spacing-y-4 rounded-xl overflow-hidden"
          style={{ borderRadius: "1rem" }} // same as rounded-xl (16px)
        >
          <thead>
            <tr className="text-gray-700">
              <th
                className="w-[5%] px-4 py-2 text-left"
                style={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
              >
                <input type="checkbox" />
              </th>
              <th className="w-[10%] px-4 py-2 text-left">Id</th>
              <th className="w-[25%] px-4 py-2 text-left">Nom</th>
              <th className="w-[15%] px-4 py-2 text-left">Email</th>
              <th className="w-[15%] px-4 py-2 text-left">Date</th>
              <th className="w-[15%] px-4 py-2 text-left">Status</th>
              <th
                className="w-[10%] px-4 py-2 text-center"
                style={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}
              >
                <Trash2 size={18} />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ uid, id, avatar, name, email, date, status }) => (
              <tr
                key={uid}
                className="bg-white"
              // optional: rounded corners on first and last row cells:
              >
                <td className="px-4 py-3 text-center align-middle rounded-l-xl">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 align-middle">{id}</td>
                <td className="px-4 py-3 align-middle">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">{name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 align-middle">
                  <div className="flex items-center gap-1">
                    <Mail size={16} className="text-green-600" />
                    {email}
                  </div>
                </td>
                <td className="px-4 py-3 align-middle">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-blue-600" />
                    {date}
                  </div>
                </td>
                <td className="px-4 py-3 align-middle">
                  <span className={getStatusBadge(status)}>{status}</span>
                </td>
                <td className="px-4 py-3 text-center align-middle rounded-r-xl">
                  <MoreHorizontal className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}