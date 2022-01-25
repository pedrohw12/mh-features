import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      id: 1,
      description: "Lorem Ipsum Test De Nova Feature Etc E Tal",
      votes: 5,
    },
    {
      id: 2,
      description:
        "Gostaria de ver trades na plataforma do MH, muita venda, compra, jogos, ratos e castelos",
      votes: 20,
    },
    {
      id: 3,
      description: "Lorem Ipsum Test De Nova Feature Etc E Tal",
      votes: 2,
    },
    {
      id: 4,
      description:
        "Gostaria de ver trades na plataforma do MH, muita venda, compra, jogos, ratos e castelos",
      votes: 4,
    },
    {
      id: 5,
      description: "Lorem Ipsum Test De Nova Feature Etc E Tal",
      votes: 15,
    },
  ]);
}
