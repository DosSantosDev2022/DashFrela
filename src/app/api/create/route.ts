import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const {
      name,
      description,
      clientName,
      priority,
      status,
      priceProject,
      payment,
      startDate,
      endDate,
    } = req.body;

    const createdProject = await prisma.project.create({
      data: {
        name,
        description,
        clientName,
        priority,
        status,
        priceProject,
        payment,
        startDate,
        endDate,
      },
    });

    res.status(200).json(createdProject);
  } catch (error) {
    console.error("Erro ao criar projeto", error);
    res.status(500).json({ error: "Erro ao criar projeto" });
  }
}
