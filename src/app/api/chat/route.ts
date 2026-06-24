import { NextResponse } from "next/server";
import { createHubSpotContact } from "@/lib/hubspot";
import { supabaseAdmin } from "@/lib/supabase/admin";

// Expresión regular simple para detectar correos electrónicos
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
// Expresión regular para números de teléfono (al menos 8 dígitos seguidos o con formato básico)
const phoneRegex = /(?:\+?\d{1,3}[\s-]?)?(?:\(?\d{2,4}\)?[\s-]?)?\d{3,4}[\s-]?\d{3,4}/;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // Obtener el último mensaje del usuario
    const lastMessage = messages[messages.length - 1]?.content || "";
    
    // 1. Detectar si el usuario proporcionó información de contacto (Lead Capture)
    const emailMatch = lastMessage.match(emailRegex);
    const phoneMatch = lastMessage.match(phoneRegex);
    
    if (emailMatch || (phoneMatch && phoneMatch[0].replace(/\D/g, '').length >= 8)) {
      const email = emailMatch ? emailMatch[0] : `lead-${Date.now()}@pending.com`;
      const phone = phoneMatch ? phoneMatch[0] : null;
      
      // Enviar a HubSpot en segundo plano
      createHubSpotContact(email, phone);
      
      // Guardar lead en Supabase
      const { data: leadData } = await supabaseAdmin.from('leads').insert({
        email,
        phone,
        source: 'ai_concierge',
        status: 'new',
        notes: 'Capturado por IA'
      }).select().single();
      
      // Guardar la conversación asíncronamente (vinculada al lead)
      void supabaseAdmin.from('conversations').insert({
        session_id: `session_${Date.now()}`,
        channel: 'web_chat',
        lead_id: leadData?.id || null,
        messages: [...messages, { role: "assistant", content: "¡Excelente! He guardado tus datos. Un asesor VIP se pondrá en contacto contigo en los próximos 15 minutos. Mientras tanto, ¿tienes alguna duda específica sobre nuestros niveles Elite, Signature o Founder?" }]
      }).then(({ error }) => { if (error) console.error(error); });

      return NextResponse.json({
        response: "¡Excelente! He guardado tus datos. Un asesor VIP se pondrá en contacto contigo en los próximos 15 minutos. Mientras tanto, ¿tienes alguna duda específica sobre nuestros niveles Elite, Signature o Founder?"
      });
    }

    // 2. Árbol de Decisiones Condicionales (El "Cerebro")
    const msg = lastMessage.toLowerCase();
    let reply = "";

    if (msg.includes("precio") || msg.includes("costo") || msg.includes("cuanto cuesta") || msg.includes("price") || msg.includes("cost")) {
      reply = "Our one-time membership fee covers everything, including taxes. No hidden charges. Our members typically experience a fantastic 65% to 85% return from vacation rental fees. Would you like to provide an email or WhatsApp for Robert Gutierrez to send you more details?";
    } 
    else if (msg.includes("elite") || msg.includes("signature") || msg.includes("founder")) {
      reply = "Esa es una excelente elección. Cada nivel ofrece ventajas únicas, como noches adicionales o acceso a yates privados en Signature. ¿Te gustaría que un asesor te envíe una comparativa detallada a tu correo?";
    }
    else if (msg.includes("ubicacion") || msg.includes("donde") || msg.includes("riviera nayarit") || msg.includes("where") || msg.includes("location")) {
      reply = "Nos encontramos en el corazón de Bahía de Banderas, Riviera Nayarit, rodeados de lujo y naturaleza. ¿Te gustaría programar una visita guiada privada o una presentación virtual? Si es así, déjame tu correo o número.";
    }
    else if (msg.includes("hola") || msg.includes("buenos") || msg.includes("buenas") || msg.includes("hello") || msg.includes("hi") || messages.length <= 2) {
      reply = "Hello I'm Robert Gutierrez from VKSHARES. My company helps vacation property owners enhance their investment with guaranteed rentals. Our members typically experience a 65% to 85% return. How can I help you today?";
    }
    else {
      // Catch-all
      reply = "I believe we can be very successful working upon complete honesty. By fulfilling what we promise, and the power of getting your referral. Please provide your email or WhatsApp so Robert Gutierrez from VKSHARES can follow up with you.";
    }

    // Simulamos un tiempo de "pensamiento" en el cliente, pero respondemos rápido desde el servidor.
    
    // Guardar la conversación asíncronamente
    void supabaseAdmin.from('conversations').insert({
      session_id: `session_${Date.now()}`,
      channel: 'web_chat',
      messages: [...messages, { role: "assistant", content: reply }]
    }).then(({ error }) => { if (error) console.error(error); });

    return NextResponse.json({ response: reply });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar tu mensaje." },
      { status: 500 }
    );
  }
}
