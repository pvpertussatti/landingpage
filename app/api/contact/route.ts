export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwfeTlZHmqK0MZAwQqFU8heOAZZIy99RRBhLhyabb8LXEwpVrkEcfI8gJmP6j6hvVvZ/exec",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          'Content-Type': "application/json"
        }
      }
    )

    const data: any = await response.json()


    if (!data.success) {
      throw new Error("Erro ao enviar mensagem");
    }
  
  
    return Response.json({ success: true, message: "Mensagem enviada com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao salvar no Google Sheets:", error)
    return Response.json({ error: "Erro ao processar sua solicitação" }, { status: 500 })
  }
}