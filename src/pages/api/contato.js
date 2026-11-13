import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Método não permitido",
    });
  }

  try {
    const { nome = "", email = "", telefone = "", mensagem = "" } = req.body;

    console.log("DADOS RECEBIDOS:", {
      nome,
      email,
      telefone,
      mensagem,
    });

    // Remove espaços extras
    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim().toLowerCase();
    const telefoneLimpo = telefone.trim();
    const mensagemLimpa = mensagem.trim();

    // Validação
    if (!nomeLimpo) {
      return res.status(400).json({
        message: "Nome é obrigatório.",
      });
    }

    if (!emailLimpo) {
      return res.status(400).json({
        message: "E-mail é obrigatório.",
      });
    }

    if (!telefoneLimpo) {
      return res.status(400).json({
        message: "Telefone é obrigatório.",
      });
    }

    if (!mensagemLimpa) {
      return res.status(400).json({
        message: "Mensagem é obrigatória.",
      });
    }

    // Validação do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo);

    if (!emailValido) {
      return res.status(400).json({
        message: "Digite um e-mail válido.",
      });
    }

    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("BREVO_API_KEY não configurada.");

      return res.status(500).json({
        message: "Configuração de e-mail não encontrada.",
      });
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Novo contato - Polipiso</title>
        </head>

        <body style="
          margin: 0;
          padding: 30px;
          background: #f5f5f5;
          font-family: Arial, Helvetica, sans-serif;
        ">

          <div style="
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 35px;
            border-radius: 8px;
          ">

            <h1 style="
              margin-top: 0;
              color: #222222;
              font-size: 24px;
            ">
              Novo contato pelo site
            </h1>

            <p style="color: #666666;">
              Um novo contato foi enviado através do formulário do site da Polipiso.
            </p>

            <hr style="
              border: 0;
              border-top: 1px solid #eeeeee;
              margin: 25px 0;
            " />

            <p>
              <strong>Nome:</strong><br />
              ${nomeLimpo}
            </p>

            <p>
              <strong>E-mail:</strong><br />
              ${emailLimpo}
            </p>

            <p>
              <strong>Telefone / WhatsApp:</strong><br />
              ${telefoneLimpo}
            </p>

            <p>
              <strong>Mensagem:</strong><br />
              ${mensagemLimpa}
            </p>

          </div>

        </body>
      </html>
    `;

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Site Polipiso",
          email: "contato@polipisocaxias.com.br",
        },

        to: [
          {
            email: "fabioa.slima1@gmail.com",
            name: "Polipiso",
          },
          {
            email: "fabio.polipiso@gmail.com",
            name: "Polipiso",
          },
          {
            email: "contato@polipisocaxias.com.br",
            name: "Polipiso",
          },
        ],

        // E-mail do cliente que preencheu o formulário
        replyTo: {
          email: emailLimpo,
          name: nomeLimpo,
        },

        subject: `Novo contato pelo site - ${nomeLimpo}`,

        htmlContent,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
      },
    );

    console.log("Contato enviado com sucesso:", response.data);

    return res.status(201).json({
      success: true,
      message: "Contato enviado com sucesso.",
    });
  } catch (error) {
    console.error(
      "Erro ao enviar contato:",
      error.response?.data || error.message,
    );

    return res.status(500).json({
      success: false,
      message:
        error.response?.data?.message || "Não foi possível enviar o contato.",
    });
  }
}
