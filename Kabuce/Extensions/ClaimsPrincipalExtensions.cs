using System.Linq;
using System.Security.Claims;
using Newtonsoft.Json;

namespace Kabuce.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string GetClaimEmail(this ClaimsPrincipal principal)
        {
            return principal.GetClaimValue("email");
        }

        public static T GetClaimUserMetadata<T>(this ClaimsPrincipal principal)
        {
            var json = principal.GetClaimValue("user_metadata");

            return string.IsNullOrWhiteSpace(json) == false ? JsonConvert.DeserializeObject<T>(json) : default;
        }

        public static string GetClaimValue(this ClaimsPrincipal principal, string name)
        {
            if (principal == null)
            {
                return null;
            }
            
            var key = $"https://kabuce.com/{name.ToLower()}";

            return principal.Claims.FirstOrDefault(claim => claim.Type == key)?.Value;
        }
    }
}