import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const sheets = google.sheets({ version: "v4", auth })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return Response.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID
    const range = "Contatos!A:E"

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toLocaleString("pt-BR"), name, email, company || "-", message]],
      },
    })

    return Response.json({ success: true, message: "Mensagem enviada com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao salvar no Google Sheets:", error)
    return Response.json({ error: "Erro ao processar sua solicitação" }, { status: 500 })
  }
}
