import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // 1. Récupérer les données du formulaire
    const { etablissement, email, telephone, prenom } = await req.json();

    // 2. Validation basique
    if (!etablissement || !email || !telephone || !prenom) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // 3. Préparer le message formaté pour le Mail Hub
    const htmlMessage = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 30px;">
        <div style="background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">📞 Nouvelle demande de contact</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Un établissement souhaite être référencé sur BEHYPE</p>
        </div>

        <div style="background: white; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
          <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f1f3f5;">
            <h2 style="color: #2465f7; margin: 0 0 8px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🏪 Informations de l'établissement</h2>
            <p style="margin: 8px 0; color: #495057; font-size: 18px; font-weight: 600;">${etablissement}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
              <span style="color: #2465f7; font-size: 20px; margin-right: 12px;">👤</span>
              <div>
                <p style="margin: 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Prénom</p>
                <p style="margin: 4px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">${prenom}</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
              <span style="color: #2465f7; font-size: 20px; margin-right: 12px;">📧</span>
              <div>
                <p style="margin: 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                <p style="margin: 4px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #2465f7; text-decoration: none;">${email}</a>
                </p>
              </div>
            </div>

            <div style="display: flex; align-items: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
              <span style="color: #2465f7; font-size: 20px; margin-right: 12px;">📞</span>
              <div>
                <p style="margin: 0; font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Téléphone</p>
                <p style="margin: 4px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
                  <a href="tel:${telephone}" style="color: #2465f7; text-decoration: none;">${telephone}</a>
                </p>
              </div>
            </div>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); border-radius: 8px; border-left: 4px solid #2465f7;">
            <p style="margin: 0; color: #495057; font-size: 14px; line-height: 1.6;">
              ⏱️ <strong>Action requise :</strong> Contacter cet établissement sous 48h pour lui proposer un référencement BEHYPE
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; padding: 0 15px;">
          <p style="margin: 0; color: #6c757d; font-size: 12px;">
            Email envoyé automatiquement par le formulaire de contact BEHYPE
          </p>
        </div>
      </div>
    `;

    // 4. Appeler le Mail Hub Jarvis
    const mailHubResponse = await fetch('https://jarvis-health.fr/api/mail-hub', {
      method: 'POST',
      headers: {
        'X-MAIL-HUB-KEY': process.env.MAIL_HUB_KEY!,
        'X-SITE-ID': process.env.SITE_ID!,
        'X-SITE-SECRET': process.env.SITE_SECRET!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: `🏪 Nouveau contact BEHYPE - ${etablissement}`,
        message: htmlMessage,
        replyTo: email
      })
    });

    const mailHubData = await mailHubResponse.json();

    // 5. Retourner le résultat
    if (mailHubResponse.ok) {
      return NextResponse.json({
        success: true,
        message: 'Merci ! Julien reviendra vers vous sous 48h'
      });
    } else {
      console.error('Erreur Mail Hub:', mailHubData);
      return NextResponse.json(
        { error: mailHubData.error || 'Erreur lors de l\'envoi de l\'email' },
        { status: mailHubResponse.status }
      );
    }

  } catch (error: any) {
    console.error('Erreur contact API:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}

// Gestion des requêtes OPTIONS (CORS preflight)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }
  );
}
