import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";
import type { Todo } from "@/src/generated/prisma/client";

type Context = { params: Promise<{ id: string }> };

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
});

const isUUID = (value: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

const getTodo = async (id: string): Promise<Todo | null> => {
  return prisma.todo.findUnique({ where: { id } });
};

export async function GET(_request: Request, { params }: Context) {
  const { id } = await params;

  // Si tu id en DB es UUID (muy probable), esto evita 500 por "invalid uuid"
  if (!isUUID(id)) {
    return NextResponse.json({ message: `ID inválido: ${id}` }, { status: 400 });
  }

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: Context) {
  const { id } = await params;

  if (!isUUID(id)) {
    return NextResponse.json({ message: `ID inválido: ${id}` }, { status: 400 });
  }

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();
    const { complete, description } = await putSchema.validate(body, {
      stripUnknown: true,
    });

    // Evita mandar undefined si no viene nada
    const data: Partial<Todo> = {};
    if (typeof complete === "boolean") data.complete = complete;
    if (typeof description === "string") data.description = description;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(
      { message: "Body inválido", error },
      { status: 400 }
    );
  }
}
