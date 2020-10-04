using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Strathweb;

namespace Kabuce.Types
{
    public class BearerTokenValidator
    {
        private readonly AsyncExpiringLazy<OpenIdConnectConfiguration> _asyncExpiringLazy;

        private readonly IConfiguration _configuration;

        private readonly ILogger<BearerTokenValidator> _logger;

        public BearerTokenValidator(IConfiguration configuration, ILogger<BearerTokenValidator> logger)
        {
            _asyncExpiringLazy = new AsyncExpiringLazy<OpenIdConnectConfiguration>(ValueProvider);

            _configuration = configuration;

            _logger = logger;
        }

        public async Task<ClaimsPrincipal> ValidateToken(string token)
        {
            var webkeys = await _asyncExpiringLazy.Value();

            var parameters =
                new TokenValidationParameters
                {
                    ValidIssuer = $"https://{_configuration["Auth0:Domain"]}/",
                    ValidAudiences = new[] {_configuration["Auth0:Audience"]},
                    IssuerSigningKeys = webkeys.SigningKeys
                };

            var handler = new JwtSecurityTokenHandler();

            var principal = handler.ValidateToken(token, parameters, out var securityToken);

            _logger.LogDebug("Security Token: {@securityToken}", securityToken);

            return principal;
        }

        private async Task<ExpirationMetadata<OpenIdConnectConfiguration>> ValueProvider(
            ExpirationMetadata<OpenIdConnectConfiguration> arg)
        {
            var url = $"https://{_configuration["Auth0:Domain"]}/.well-known/openid-configuration";

            IConfigurationManager<OpenIdConnectConfiguration> manager =
                new ConfigurationManager<OpenIdConnectConfiguration>(url, new OpenIdConnectConfigurationRetriever());

            var config = await manager.GetConfigurationAsync(CancellationToken.None);

            return new ExpirationMetadata<OpenIdConnectConfiguration>
            {
                Result = config,
                ValidUntil = DateTimeOffset.UtcNow.AddDays(1)
            };
        }
    }
}