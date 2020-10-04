using Microsoft.AspNetCore.Http;

namespace Kabuce.Extensions
{
    public static class HttpContextExtensions
    {
        public static bool HasAuthorization(this HttpContext context)
        {
            return context.Request.Headers.Keys.Contains("Authorization");
        }

        public static string GetAuthorization(this HttpContext context)
        {
            if (context.HasAuthorization())
            {
                var bearer = context.Request.Headers["Authorization"];

                return bearer.ToString().Replace("Bearer ", string.Empty);
            }

            return null;
        }
    }
}