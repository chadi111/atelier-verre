export function reportLovableError(
  error: Error,
  context?: Record<string, unknown>
) {
  // Remplace ce contenu par ton vrai service de monitoring (Sentry, etc.)
  console.error("[Atelier Verre] Erreur capturée :", error, context);
}
